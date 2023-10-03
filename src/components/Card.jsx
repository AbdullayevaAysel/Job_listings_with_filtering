const Card = ({ data, handleAddState }) => {
  return (
    <div
      className={`bg-white rounded-lg py-5 px-10 mb-10 lg:mb-5 flex flex-wrap justify-between items-center shadow-xl ${
        data?.featured && "border-l-[5px] border-[var(--Desaturated-Dark-Cyan)]"
      }`}
    >
      <div className="flex items-center gap-5 flex-wrap lg:flex-nowrap w-full lg:w-[50%] relative">
        <div className="rounded-full w-[50px] h-[50px] lg:w-[80px] -top-10  lg:h-[80px] absolute lg:static">
          <img
            className="w-full h-full object-cover"
            src={`src/assets/${data?.logo}`}
            alt=""
          />
        </div>
        <div className="pt-5 lg:pt-0 w-full lg:w-auto">
          <div className="flex items-center flex-wrap">
            <span className="text-[18px] font-bold text-[var(--Desaturated-Dark-Cyan)]">
              {data?.company}
            </span>
            {data?.new && (
              <a className="mx-3 cursor-pointer font-[700] bg-[var(--Desaturated-Dark-Cyan)] text-white uppercase text-[12px] px-2 py-1 rounded-xl">
                New!
              </a>
            )}
            {data?.featured && (
              <a className=" cursor-pointer font-[700] bg-[var(--Very-Dark-Grayish-Cyan)] text-white uppercase text-[12px] px-2 py-1 rounded-xl">
                featured
              </a>
            )}
          </div>
          <p className="transition ease-in-out delay-100 cursor-pointer py-3 lg:py-0 text-[1rem] lg:text-[1.2rem] font-bold text-[var(--Very-Dark-Grayish-Cyan)] hover:text-[var(--Desaturated-Dark-Cyan)]">
            {data?.position}
          </p>
          <ul className="flex gap-[20px] items-center text-[var(--Dark-Grayish-Cyan)] text-[14px] lists">
            <li>{data?.postedAt}</li>
            <li>{data?.contract}</li>
            <li>{data?.location}</li>
          </ul>

          <hr className="block mt-3 lg:hidden"/>
        </div>
      </div>

      <div className="flex justify-start lg:justify-end flex-wrap items-center gap-[10px] w-full lg:w-[50%] pt-5 lg:pt-0">
        <a
          onClick={() => handleAddState(data?.role, "role")}
          className="cursor-pointer font-[700] bg-[var(--Light-Grayish-Cyan-Filter-Tablets)] text-[var(--Desaturated-Dark-Cyan)]  py-[1px] px-[7px] rounded-sm inline-flex items-center justify-center hover:bg-[var(--Desaturated-Dark-Cyan)] hover:text-white transition ease-in-out delay-100"
        >
          {data?.role}
        </a>
        <a
          onClick={() => handleAddState(data?.level, "level")}
          className="cursor-pointer font-[700] bg-[var(--Light-Grayish-Cyan-Filter-Tablets)] text-[var(--Desaturated-Dark-Cyan)]  py-[1px] px-[7px] rounded-sm inline-flex items-center justify-center hover:bg-[var(--Desaturated-Dark-Cyan)] hover:text-white transition ease-in-out delay-100"
        >
          {data?.level}
        </a>
        {data?.tools?.map((tool, index) => (
          <a
            onClick={() => handleAddState(tool, "tools")}
            key={index}
            className="cursor-pointer font-[700] bg-[var(--Light-Grayish-Cyan-Filter-Tablets)] text-[var(--Desaturated-Dark-Cyan)]  py-[1px] px-[7px] rounded-sm inline-flex items-center justify-center hover:bg-[var(--Desaturated-Dark-Cyan)] hover:text-white transition ease-in-out delay-100"
          >
            {tool}
          </a>
        ))}
        {data?.languages?.map((lang, index) => (
          <a
            onClick={() => handleAddState(lang, "languages")}
            key={index}
            className="cursor-pointer font-[700] bg-[var(--Light-Grayish-Cyan-Filter-Tablets)] text-[var(--Desaturated-Dark-Cyan)]  py-[1px] px-[7px] rounded-sm inline-flex items-center justify-center hover:bg-[var(--Desaturated-Dark-Cyan)] hover:text-white transition ease-in-out delay-100"
          >
            {lang}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Card
