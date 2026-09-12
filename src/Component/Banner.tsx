import Hero from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 mt-28">
      <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg mt-4 leading-relaxed max-w-xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-medium px-8 py-3.5 rounded-full shadow-lg shadow-rose-500/20 transition-all duration-300">
              Explore Technologies
            </button>

            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-8 py-3.5 rounded-full transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Hero}
            alt="Development Stack 3D Illustration"
            className="w-full max-w-[420px] h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
