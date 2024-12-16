function Markets() {
  return (
    <div className="relative flex justify-center z-10 mt-20">
      <div className="bg-white max-w-[28rem] w-full flex flex-col items-center text-center rounded-3xl gap-4 py-3">
        <div className="flex flex-col gap-1">
          <h6 className="text-xl text-[#0A1519] font-semibold">
            Currency Markets
          </h6>
          <p className="text-sm text-[#0A1519]/70">
            Latest prices of top crypto assets.
          </p>
        </div>
        <div className="relative w-full px-3 flex flex-col gap-3">
          <div className="flex justify-between border-[10px] border-[#f0f0f0] rounded-3xl py-3 px-3">
            <div className="flex">
              <img src="./src/assets/USD.svg" alt="" />
              <h6>USD</h6>
              <img src="./src/assets/down_line.svg" alt="" />
            </div>
            <h6>$10,589.78</h6>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <img src="./src/assets/trade.svg" alt="" />
          </div>
          <div className="flex justify-between border-[10px] border-[#f0f0f0] rounded-3xl py-3 px-3">
            <div className="flex">
              <img src="./src/assets/EUR.svg" alt="" />
              <h6>EUR</h6>
              <img src="./src/assets/down_line.svg" alt="" />
            </div>
            <h6>$10,589.78</h6>
          </div>
        </div>
        <div className="px-3 w-full ">
          <div className="bg-[#0F2028]/100 text-white rounded-3xl py-2.5">
            CONVERT
          </div>
        </div>
      </div>
      <div className="absolute top-7 left-[20%] bg-white rounded-2xl">
        <div className="p-5 gap-1">
          <h6 className="text-[#0A1519]/70">Total balance</h6>
          <div className="flex items-center gap-2">
            <h6 className="text-2xl font-semibold">$9,647.00 </h6>
            <div className="bg-[#21AA5B] rounded-full">
              <p className="text-xs py-1 px-1 text-white">+8.50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Markets;
