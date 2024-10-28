"use client"

import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { Suspense, useEffect, useState } from "react";

const CurrentIdPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState({});
  const [imageUrl, setImageUrl] = useState('');

  const newsArray = useTranslations('News')
  const news = newsArray.raw('news')
  const searchParams = useSearchParams()
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const image = searchParams.get('image');
  const subtitle = searchParams.get('subtitle');
  const secondTitle = searchParams.get('secondTitle');
  const thirdTitle = searchParams.get('thirdTitle');
  const thirdSubtitle = searchParams.get('thirdSubtitle');
  const fourTitle = searchParams.get('fourTitle');
  const fourSubtitle = searchParams.get('fourSubtitle');
  const fiveTitle = searchParams.get('fiveTitle');
  const fiveSubtitle = searchParams.get('fiveSubtitle');
  const sixTitle = searchParams.get('sixTitle');
  const sixSubtitle = searchParams.get('sixSubtitle');
  const secondImage = searchParams.get('secondImage');
  const thirdImage = searchParams.get('thirdImage');

  useEffect(() => {
    const query = {
      id,
      title,
      image,
      subtitle,
      secondTitle,
      thirdTitle,
      thirdSubtitle,
      fourTitle,
      fourSubtitle,
      fiveTitle,
      fiveSubtitle,
      sixTitle,
      sixSubtitle,
      secondImage,
      thirdImage
    };
    localStorage.setItem('query', JSON.stringify(query));
  }, [id, title, secondImage, thirdImage, image, subtitle, secondTitle, thirdTitle, thirdSubtitle, fourTitle, fourSubtitle, fiveTitle, fiveSubtitle, sixTitle, sixSubtitle]);
  
  useEffect(() => {
    const storedQuery = localStorage.getItem('query');
    if (storedQuery) {
      try {
        setQuery(JSON.parse(storedQuery));
      } catch (error) {
        console.error('Error parsing stored query:', error);
        setQuery({});
      }
    } else {
      setQuery({});
    }
  }, []);

  useEffect(() => {
    setImageUrl(image);
  }, [image]);



  return (
    <Suspense fallback={<div>Loading...</div>}>
           <div className=" py-8 md:py-16  w-full  mb-24 flex-col flex justify-center items-center">
      <div className="w-full py-8 h-full mt-8 md:mt-24  xl:px-[12rem] px-4  mx-auto">

      <h1 className=" text-[#004C8F] w-[11rem] rounded-t-xl py-2 px-3  bg-[#F2CED7] text-center  xl:text-[1.25rem] uppercase font-extrabold ">
        {newsArray.raw('title')}
      </h1>

      <div className=" h-[12rem] md:h-[22rem] ">
      {imageUrl && (
        <Image src={imageUrl} alt="news" className="  md:rounded-b-xl w-full h-full md:object-right-top object-cover" width={1000} height={1000} />
      )}
      </div>
      <div className="pb-8 px-3">
      <h1 className=" text-[#4DBCAB] text-center md:text-left text-[2rem] md:text-[3rem] xl:text-[4rem] uppercase font-extrabold mt-8">
        {title}
      </h1>
      <p className=" pb-1 text-[#EC7E49] font-bold text-center md:text-left text-[1rem] md:text-[1.25rem] xl:text-[1.5rem]  mt-1">
        {subtitle}
      </p>
      <p className="py-8 text-[#004C8F]  font-light text-center md:text-justify text-[1rem]  md:text-[1.25rem]  ">
       {secondTitle} 
      </p>
      {
          secondImage && (
            <Image src={secondImage} alt="news" className="rounded-xl w-full h-[12rem]  md:h-[38rem] md:object-center-top object-cover" width={1000} height={1000} />
          )
        }
      <h2 className=" pt-8  text-center md:text-left text-[1.5rem] xl:text-[2rem] uppercase font-extrabold text-[#004C8F]">
        {fourTitle}
      </h2>
      <p className="pt-4 text-[#004C8F]  font-light text-center md:text-justify text-[1rem]  md:text-[1.25rem]  ">
       {fourSubtitle}
      </p>
      <h2 className=" py-2  text-center md:text-left text-[1.5rem] xl:text-[2rem] uppercase font-extrabold text-[#004C8F]">
        {thirdTitle}
      </h2>
      <p className="pb-8 text-[#004C8F]  font-light text-center md:text-justify text-[1rem]  md:text-[1.25rem]  ">
       {thirdSubtitle} 
      </p>
      {
          secondImage && (
            <Image src={thirdImage} alt="news" className="rounded-xl w-full h-[12rem]  md:h-[38rem] md:object-center-top object-cover" width={1000} height={1000} />
          )
        }
      <h2 className=" pt-8  text-center md:text-left text-[1.5rem] xl:text-[2rem] uppercase font-extrabold text-[#004C8F]">
        {fiveTitle}
      </h2>
      <p className="py-8 text-[#004C8F]  font-light text-center md:text-justify text-[1rem]  md:text-[1.25rem]  ">
       {fiveSubtitle}
      </p>
      <h2 className=" py-4  text-center md:text-left text-[1.5rem] xl:text-[2rem] uppercase font-extrabold text-[#004C8F]">
        {sixTitle}
      </h2>
      <p className="pb-8 text-[#004C8F]  font-light text-center md:text-justify text-[1rem]  md:text-[1.25rem]  ">
       {sixSubtitle}
      </p>
        
      </div>
      </div>

    </div>
    </Suspense>
  )
}

export default CurrentIdPage