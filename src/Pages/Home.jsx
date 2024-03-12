import { ReactTyped } from "react-typed";
import Slider from "../Components/Slider";

function Home() {
  return (
    <>
      <section className=" mda bg-slate-500 py-20" id="Home">
        <div className="mx-auto mt-[10px] flex w-full flex-col justify-center text-center text-white md:mt-[10px] md:max-w-[800px] lg:max-w-[1000px]">
          <h1 className="px-3 pb-5 text-5xl font-bold md:py-10 md:text-6xl">
            Play the most competitive games
          </h1>
          <div className="flex justify-center pb-3 ">
            <h2 className="px-3 pb-5 text-2xl font-bold md:text-4xl lg:text-5xl">
              If you dont play you can watch {}
              <ReactTyped
                className="pb-3 text-2xl font-bold md:text-4xl lg:text-5xl"
                strings={["League of Legends", "CS2", "Dota", "and others"]}
                typeSpeed={200}
                backSpeed={200}
                loop
              />
            </h2>
          </div>
          <p className=" text-xl font-bold text-white md:text-2xl">
            Try and have fun
          </p>
        </div>
      </section>
      <Slider />
    </>
  );
}

export default Home;
