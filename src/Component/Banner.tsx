import Hero from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-[10px] py-10 border mt-7 rounded-2xl border-amber-200">
      <section className="w-full flex justify-center mt-12 pt-8 py-8">
        <div className="w-[1250px] h-[480px] flex items-center justify-between px-12">
          {/* Left Side */}
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-cyan-950">
              Build Your Ideal <br />
              <span className="text-pink-500">Development Stack</span>
            </h1>

            <p className="text-gray-700 text-lg mt-5">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and build the perfect stack for your next
              project.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
                Explore Technologies
              </button>

              <button className="bg-pink-700 text-white px-6 py-3 rounded-full">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 flex justify-center">
            <img
              src={Hero}
              alt="Development Stack"
              className="w-[450px] h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
