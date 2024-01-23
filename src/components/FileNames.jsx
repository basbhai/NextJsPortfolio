import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("/api/files")
      .then((response) => response.json())
      .then((data) => setFiles(data.files))
      .catch((error) => console.error(error));
  }, []);

  function fetchNames(objArray) {
    let sources = objArray.map((imageName) => ({
      src: `/photos/${imageName}`,
      alt: imageName,
    }));

    return sources;
  }
  let [isOpen, setIsOpen] = useState(false);
  const sourcesList = fetchNames(files);

  return (
    // <div>
    //   <h2>File List</h2>

    //   {files.map((file, index) => (
    //     <div className="flex flex-wrap items-center justify-between">
    //       <Image
    //         src={`/photos/${file}`}
    //         alt={file}
    //         key={index}
    //         className="w-full"
    //         width="280"
    //         height="460"
    //       />
    //     </div>
    //   ))}
    // </div>
    <>
      <div className="flex items-center justify-evenly mt-8 ]">
        <div className="flex items-center justify-center w-[90%] ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            spaceBetween={25}
            centeredSlides={false}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 150,
              modifier: 5,
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container bg-light dark:bg-dark"
          >
            {files.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`/photos/${image}`}
                  alt="slide_image"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                />
                <SlideshowLightbox
                  images={sourcesList}
                  showThumbnails={true}
                  open={isOpen}
                  lightboxIdentifier="lbox1"
                  onClose={() => {
                    setIsOpen(false);
                  }}
                ></SlideshowLightbox>
              </SwiperSlide>
            ))}

            {/* <div className=" flex items-center justify-between">
              <div className="swiper-button-prev slider-arrow">
                <FaAngleLeft />
              </div>

              <div className="swiper-button-next slider-arrow">
                <FaAngleRight />
              </div>
            </div> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FileList;
