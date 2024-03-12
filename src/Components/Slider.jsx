import { useState } from 'react';
import { details } from '../info';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Ttte() {
  const [hover, setHover] = useState(null);

  return (
    <>
      <section className="mx-auto mb-10 mt-16 max-w-[1300px] lg:mt-[6rem]">
        <h2 className="mt-[8rem] text-center text-4xl font-bold">
          The most competitive games
        </h2>
        <div className="mx-5">
          <Swiper
            spaceBetween={60}
            centeredSlides={true}
            effect="fade"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
            className="mySwipe"
          >
            {details.map((test) => (
              <SwiperSlide key={test.id}>
                <div className=" grid-row-2 mt-10 grid md:grid-cols-7 ">
                  <div className=" col-span-4 bg-slate-400">
                    <img
                      src={hover || test.main}
                      alt={test.main}
                      className="z-10 w-full"
                    />
                  </div>
                  <div className="col-span-3 w-[100%] bg-[#0f1922]">
                    <h3 className=" mb-4 mt-3 flex justify-center text-[2rem] text-lg font-semibold text-white">
                      {test.title}
                    </h3>
                    <div className="mx-5 mt-3 grid grid-cols-2 gap-3 pb-3">
                      <img
                        src={test.first}
                        alt={test.title}
                        className=" cursor-pointer hover:opacity-50"
                        onMouseEnter={() => setHover(test.first)}
                        onMouseLeave={() => setHover(null)}
                      />

                      <img
                        src={test.second}
                        alt={test.title}
                        className=" cursor-pointer hover:opacity-50"
                        onMouseEnter={() => setHover(test.second)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </div>
                    <div className="mx-5 grid grid-cols-2 gap-3 pb-10 md:pb-0">
                      <img
                        src={test.third}
                        alt={test.title}
                        className=" cursor-pointer hover:opacity-50"
                        onMouseEnter={() => setHover(test.third)}
                        onMouseLeave={() => setHover(null)}
                      />
                      <img
                        src={test.forth}
                        alt={test.title}
                        className="cursor-pointer hover:opacity-50"
                        onMouseEnter={() => setHover(test.forth)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Ttte;
