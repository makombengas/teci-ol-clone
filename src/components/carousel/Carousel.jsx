"use client"


import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
    const carouselArray = useTranslations('Carousel');
    const carousel = carouselArray.raw('carousel');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselInfos, setCarouselInfos] = useState(carousel[0]);

  const handleCarousel = (id) => {
    setCarouselIndex(id);
    const carousels = carousel.find((item) => item.id === id);
    const carouselIndex = carousel.findIndex(item => item.id === id);
    setCarouselInfos(carousels);
    setCarouselIndex(carouselIndex);
};




  return (
    <div className="w-full relative ">
      <div className="w-full overflow-hidden">
        <div className=" relative" id={carouselInfos.title}  >
          <Image
            priority
            className="saturate-150 w-full h-[70vh] object-cover"
            src={carouselInfos.image}
            alt="carousel"
            width={1500}
            height={1500}
          />
          <div className="absolute z-10 flex justify-start items-center top-0 bg-gradient-to-b opacity-95 from-slate-100 from-10% via-slate-100 via-10% to-slate to-90% w-full h-[70vh] ">
            <div className="px-4 flex justify-center md:justify-start items-center -z-20 bg-gradient-to-r from-[#0060AB]/100 to-[#0060AB]/10 h-full w-full">
              <div className="flex uppercase text-gray-50 items-center  md:items-start flex-col ml-[0rem] md:ml-[6rem] xl:ml-[11rem]">
                <h1 className={`${carouselInfos.id === carouselIndex ? "animate-jump-in animate-delay-500" : ""} animate-fade-in animate-delay-500 duration-300   text-gray-50 uppercase font-extrabold md:text-left text-center text-[1.5rem] md:text-[2.5rem] xl:text-[3rem]`} >
                  {carouselInfos.title} <b className="text-[#F5B1AD]">{carouselInfos.it}</b> {carouselInfos.question} <br /> {carouselInfos.secondTitle}
                </h1>
                <span className=" md:text-[1.5rem] md:text-left text-center xl:text-[3rem]">
                    {carouselInfos.subTitle}
                </span>
                <p className="  md:text-[1.5rem] md:text-left text-center xl:text-[2rem]">
                  {carouselInfos.description}
                </p>
               <Link href={carouselInfos.button.link} > 
               <button className={`bg-[#F5B1AD] hover:bg-[#F5B1AD]/90 text-[#004C8F] text-xs md:text-md xl:text-xl font-bold w-[8rem] md:w-[10rem] xl:w-[12rem] py-2 px-4 rounded-md mt-4  ${carouselInfos.id === carouselIndex ? "animate-jump-in animate-delay-500" : ""}  `} >{carouselInfos.button.text}  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  h-full">
        <div className="grid md:grid-cols-2 xl:grid-cols-4"  >
          {
            carousel.map((item, index) => (
              item.id > 0 && (
                <Link href={item.path} key={item.id} className="cursor-pointer h-full relative" onClick={() => handleCarousel(item.id)}>
                  <div
                   
                    className="flex justify-center items-center saturate-150 w-full h-[30vh] object-cover"
                   
                  />
                  <div style={{ backgroundColor: item.bgColor }} className="absolute flex justify-center items-center top-0 w-full h-[30vh]">
                    <div className="z-10 uppercase px-4 flex-col max-w-[38rem] max-h-[15.5rem] mx-auto w-full h-full flex justify-center items-center text-gray-100">
                    <Image
                    priority
                    className="flex justify-center items-center saturate-150 w-[5rem] h-[5rem] object-cover"
                    src={item.secondImage}
                    alt="carousel"
                    width={1500}
                    height={1500}
                  />
                      
                      
                      <h1 className="font-extrabold text-[2rem] md:text-[2.5rem] xl:text-[4rem]">
                        {item.title}
                      </h1>
                     
                    </div>
                  </div>
                </Link>
              )
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Carousel;