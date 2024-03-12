import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { data } from "../data";

function Slide() {
  const [selectedImage, setSelectedImage] = useState(null);

  const left = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const right = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  const openDetail = (imageId) => {
    setSelectedImage(imageId);
  };

  const closeDetail = () => {
    setSelectedImage(null);
  };

  return (
    <section className="mx-3 mb-3 max-h-[1700px] py-3">
      <div className="relative flex items-center">
        <button>
          <MdChevronLeft
            size={25}
            className="cursor-pointer opacity-50 hover:opacity-100"
            onClick={left}
          />
        </button>
        <div
          id="slider"
          className="scroll scrollbar-hide h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap"
        >
          {data.map((item, index) => (
            <div
              key={item.id}
              className="inline-block cursor-pointer p-2"
              onClick={() => openDetail(index)}
            >
              <img
                className="h-[150px] w-[220px] object-cover duration-300 ease-in-out hover:scale-105 md:h-[200px] md:w-[350px]"
                src={item.im}
                alt="/"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button>
          <MdChevronRight
            size={25}
            className="cursor-pointer opacity-50 hover:opacity-100"
            onClick={right}
          />
        </button>
      </div>
      {selectedImage !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80"
          onClick={closeDetail}
        >
          <img
            className="w-full md:w-[65%]"
            src={data[selectedImage].im}
            alt="/"
          />
        </div>
      )}
    </section>
  );
}

export default Slide;
