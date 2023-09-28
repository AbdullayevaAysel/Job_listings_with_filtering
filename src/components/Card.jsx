const Card = ({ data }) => {
  return (
    <div
      className={`bg-white rounded-md py-5 px-10 mb-5 flex justify-between items-center shadow-xl ${
        data?.featured && "border-l-[5px] border-[var(--Desaturated-Dark-Cyan)]"
      }`}
    >
      <div className="flex items-center gap-5 w-[50%]">
        <div className="rounded-full w-[80px] h-[80px]">
          <img
            className="w-full h-full object-cover"
            src={`src/assets/${data?.logo}`}
            alt=""
          />
        </div>
        <div>
          <div>
            <span className="font-bold text-[var(--Desaturated-Dark-Cyan)]">
              {data?.company}
            </span>
            {data?.new && (
              <a className="mx-3 cursor-pointer font-[700] bg-[var(--Desaturated-Dark-Cyan)] text-white uppercase text-[12px] py-[5px] px-[10px] rounded-xl">
                New!
              </a>
            )}
            {data?.featured && (
              <a className=" cursor-pointer font-[700] bg-[var(--Very-Dark-Grayish-Cyan)] text-white uppercase text-[12px] py-[5px] px-[10px] rounded-xl">
                featured!
              </a>
            )}
          </div>
          <p className="transition ease-in-out delay-100 cursor-pointer text-[1.2rem] font-bold text-[var(--Very-Dark-Grayish-Cyan)] hover:text-[var(--Desaturated-Dark-Cyan)]">
            {data?.position}
          </p>
          <div className="flex gap-[10px] items-center text-[var(--Dark-Grayish-Cyan)] text-[14px]">
            <span>{data?.postedAt}</span>
            <span>{data?.contract}</span>
            <span>{data?.location}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[10px] w-[50%]">
        {
            data?.languages?.map((lang, index) => (
                <a key={index} className="cursor-pointer font-[700] bg-[var(--Light-Grayish-Cyan-Filter-Tablets)] text-[var(--Desaturated-Dark-Cyan)]  py-[1px] px-[7px] rounded-sm inline-flex items-center justify-center hover:bg-[var(--Desaturated-Dark-Cyan)] hover:text-white transition ease-in-out delay-100">{lang}</a>
            ))
        }
      </div>
    </div>
  )
}

export default Card
