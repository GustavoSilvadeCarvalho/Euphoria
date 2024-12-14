const Hero = () => {
  return (
    <div>
      <img
        src="./src/assets/BG.png"
        alt=""
        className="w-screen absolute z-0 top-0 left-0 pointer-events-none"
      />
      <div className="bg-[#0F2028] text-white flex flex-col gap-10 mt-[4.8rem]">
        <div className="text-center flex flex-col items-center justify-center gap-8">
          <div className="bg-white/10 w-[14.5rem] flex text-sm items-center gap-1 rounded-full border-2 border-[#0A1519]">
            <div className="bg-[#D2F801] rounded-full text-[#0F2028]">
              <p className="py-0.5 px-3">New</p>
            </div>
            <div>
              <p>Payment cards upgraded</p>
            </div>
          </div>
          <div className="max-w-2xl text-white flex flex-col gap-8">
            <h1 className="text-6xl font-semibold">
              Cross-border payment made easy.
            </h1>
            <h3 className="text-white/70 text-xl">
              We help individuals and businesses to securely send and receive
              money globally, without the bank fees.
            </h3>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center rounded-full w-52 h-14 bg-[#1D9B5E] gap-3">
            <h6>Create account</h6>
            <img
              src="./src/assets/seta-para-a-direita.svg"
              width={20}
              height={24}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center rounded-full w-52 h-14 bg-white gap-3">
            <img src="./src/assets/Group-6.svg" alt="" />
            <h6 className="text-[#0A1519]/70">Watch Tutorial</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
