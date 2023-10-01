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
  const [filtered, setFiltered] = useState([])

  const handleAddState = (id, el, filter) => {
    setState((prevState) => [
      ...prevState,
      { id: nanoid(), name: el, filter: filter },
    ])

    // setFiltered(filtered => [...filtered, el])
    setFiltered((filtered) => [
      ...filtered,
      {
        key: filter,
        value: el,
      },
    ])

    console.log(filtered)

    // setData(
    //   data.map((item) => {
    //     return filtered.forEach((obj) => {
    //       if (item[obj.key] == obj.value) {
    //         console.log(item);
    //       }
    //     })
    //   })
    // )
  }

  const handleRemoveState = (ItemId, itemName, itemFilter) => {
    setState(state.filter(({ id }) => id !== ItemId))

    setData(
      data.filter((item) => {
        if (item[itemFilter] == itemName) {
          return item
        }
      })
    )

    data.map((item) => {
      // console.log(item.role,item.level, item.filtered);
      if (item[itemFilter] == itemName) {
        console.log(item[itemFilter], itemName, item.filtered)
      } else {
        // console.log(item[itemFilter], itemFilter,item.role, item.filtered)
      }
    })
  }

  const handleRemoveAllState = () => {
    setState([])
  }

  useEffect(() => {
    SetToStorage("detail", state)
    SetToStorage("jobs", data)
  }, [data, state])

  return (
    <>
      {state.length > 0 && (
        <div className="bg-white rounded-md mt-[-80px] py-5 px-10 mb-5 flex justify-between items-center shadow-xl z-10 relative">
          <div>
            {state?.map((item) => (
              <a
                key={item?.id}
                className="cursor-pointer mr-3 font-[700] bg-[var(--Light-Grayish-Cyan-Filter-Tablets)] text-[var(--Desaturated-Dark-Cyan)] rounded-sm inline-flex justify-between transition ease-in-out delay-100"
              >
                <span className="px-[7px]">{item?.name}</span>
                <span
                  onClick={() =>
                    handleRemoveState(item?.id, item?.name, item?.filter)
                  }
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

      {data &&
        data?.map((item) => (
          <Card key={item?.id} data={item} handleAddState={handleAddState} />
        ))}
    </>
  )
}

export default CardList
