import Card from "./Card"
import api from "../api/data.json"
import { clear } from "../assets"

const CardList = () => {
  return (
    <>
      <div className="bg-white rounded-md mt-[-80px] py-5 px-10 mb-5 flex justify-between items-center shadow-xl z-10 relative">
        <a className="cursor-pointer font-[700] bg-[var(--Light-Grayish-Cyan-Filter-Tablets)] text-[var(--Desaturated-Dark-Cyan)] rounded-sm inline-flex items-center justify-between transition ease-in-out delay-100">
          <span className="py-[1px] px-[7px]">js</span>
          <span className="bg-[var(--Very-Dark-Grayish-Cyan)] p-1 rounded-sm"><img src={clear} alt="" /></span>
        </a>
        <span className="transition ease-in-out delay-100 cursor-pointer text-[1.1rem] font-bold text-[var(--Very-Dark-Grayish-Cyan)] hover:text-[var(--Desaturated-Dark-Cyan)] hover:underline">
          Clear
        </span>
      </div>

      {api && api?.map((item) => <Card key={item.id} data={item} />)}
    </>
  )
}

export default CardList
