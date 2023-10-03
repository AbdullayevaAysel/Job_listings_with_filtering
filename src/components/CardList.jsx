import Card from "./Card"
import api from "../api/data.json"
import { clear } from "../assets"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { GetToStorage, SetToStorage } from "../utility/utilities"

const CardList = () => {
  const stateFromLocalStorage = GetToStorage("detail")
  const dataFromLocalStorage = GetToStorage("jobs")
  const [data, setData] = useState(dataFromLocalStorage || api)
  const [state, setState] = useState(stateFromLocalStorage || [])

  const [loading, setLoading] = useState(false)

  const handleAddState = (el, filter) => {
    setState((prevState) => {
      const newState = prevState.some((item) => item.name === el)
        ? prevState
        : [...prevState, { id: nanoid(), name: el, filter: filter }]
      return newState
    })
  }

  const handleRemoveState = (ItemId) => {
    setState(state.filter(({ id }) => id !== ItemId))
    setData(api)
  }

  const handleRemoveAllState = () => {
    setState([])
    setData(api)
  }

  useEffect(() => {
    SetToStorage("jobs", data)
    setLoading(!loading)
  }, [data])

  useEffect(() => {
    setData(
      data.filter((item) => {
        return state.every((obj) => {
          if (Array.isArray(item[obj.filter])) {
            return item[obj.filter].includes(obj.name)
          } else {
            return item[obj.filter] === obj.name
          }
        })
      })
    )
    SetToStorage("detail", state)
    setLoading(!loading)
  }, [state])

  return (
    <>
      {state.length > 0 && (
        <div className="bg-white rounded-md mt-[-80px] py-5 px-5 lg:px-10 mb-10 lg:mb-5 flex justify-between items-center shadow-xl z-10 relative">
          <div>
            {state?.map((item) => (
              <a
                key={item?.id}
                className="cursor-pointer mb-3 lg:mb-0 mr-3 font-[700] bg-[var(--Light-Grayish-Cyan-Filter-Tablets)] text-[var(--Desaturated-Dark-Cyan)] rounded-sm inline-flex justify-between transition ease-in-out delay-100"
              >
                <span className="px-[7px]">{item?.name}</span>
                <span
                  onClick={() => handleRemoveState(item?.id)}
                  className="hover:bg-[var(--Very-Dark-Grayish-Cyan)] bg-[var(--Desaturated-Dark-Cyan)] py-1 px-2 rounded-r-sm flex items-center transition ease-in-out delay-100"
                >
                  <img className="w-[10px]" src={clear} alt="" />
                </span>
              </a>
            ))}
          </div>

          <span
            onClick={() => handleRemoveAllState()}
            className="transition ease-in-out delay-100 cursor-pointer text-[1.1rem] font-bold text-[var(--Very-Dark-Grayish-Cyan)] hover:text-[var(--Desaturated-Dark-Cyan)] hover:underline"
          >
            Clear
          </span>
        </div>
      )}

      {loading ? (
        <div>Loading...</div>
      ) : (
        data &&
        data?.map((item) => (
          <Card key={item?.id} data={item} handleAddState={handleAddState} />
        ))
      )}
    </>
  )
}

export default CardList
