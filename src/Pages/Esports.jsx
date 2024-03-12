import React from "react";
import Esport from "../assets/images/esports.jpg";
import Slide from "../Components/Slide";

function Esports() {
  return (
    <>
      <section
        id="Esports"
        className="w-full bg-slate-800 px-4 py-7 text-white"
      >
        <div className=" mx-7 grid max-w-[1800px] gap-5 md:grid-cols-2">
          <img
            src={Esport}
            alt="competition"
            className="order-2 mx-auto my-4 w-[400px] 2xl:left-0 2xl:mr-1 2xl:w-[600px]"
            loading="lazy"
          />
          <div className="flex flex-col justify-center">
            <h2 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
              Esports
            </h2>
            <p>
              Short for electronic sports, is a form of competition using video
              games. Multiplayer competitions were long a part of video game
              culture, but were largely between amateurs until the late 2000s,
              when the advent of online streaming media platforms, particularly
              YouTube and Twitch, enabled a surge in participation by
              professional gamers and spectators. By the 2010s, esports was a
              major part of the video game industry, with many game developers
              designing for and funding for tournaments and other events.
            </p>
          </div>
        </div>
      </section>
      <Slide />
    </>
  );
}

export default Esports;
