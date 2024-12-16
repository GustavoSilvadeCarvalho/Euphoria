import { ScrollParallax } from "react-just-parallax";

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
            <div className="flex gap-1.5">
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
            <div className="flex gap-1.5">
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
      <ScrollParallax isAbsolutelyPositioned>
        <div className="absolute top-7 left-[24%] bg-white rounded-2xl">
          <div className="p-5 flex flex-col gap-1">
            <h6 className="text-[#0A1519]/70">Total balance</h6>
            <div className="flex items-center gap-2">
              <h6 className="text-2xl font-semibold">$9,647.00</h6>
              <div className="bg-[#21AA5B] rounded-full">
                <p className="text-xs py-1 px-1 text-white">+8.50%</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollParallax>
      <ScrollParallax isAbsolutelyPositioned>
        <div className="absolute top-[55%] left-[18%] bg-white rounded-2xl ">
          <div className="flex items-center p-5 gap-3">
            <div className="bg-[#A2FF76] rounded-full">
              <img src="./src/assets/dolar.svg" alt="" className="p-3.5" />
            </div>
            <div>
              <p className="text-[#0A1519]/70">Recived</p>
              <h6 className="text-2xl font-semibold">6790.67 EUR</h6>
            </div>
          </div>
        </div>
      </ScrollParallax>
      <ScrollParallax isAbsolutelyPositioned strength={0.2}>
        <div className="absolute top-[45%] left-[34%]">
          <div className="bg-[#A2FF76] rounded-full">
            <img src="./src/assets/dolar-2.svg" alt="" className="p-3.5" />
          </div>
        </div>
      </ScrollParallax>
      <ScrollParallax isAbsolutelyPositioned>
        <div className="absolute top-7 left-[64%] bg-white rounded-2xl">
          <div className="px-5 py-6 flex flex-col gap-">
            <h6 className="text-[#0A1519]/70">Net income</h6>
            <div className="flex items-center gap-2">
              <h6 className="text-2xl font-semibold">$234.98K</h6>
              <div className="bg-[#21AA5B] rounded-full">
                <img src="./src/assets/seta-cima.svg" alt="" className="p-1" />
              </div>
            </div>
          </div>
        </div>
      </ScrollParallax>
    </div>
  );
}

export default Markets;
