"use client"

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { Suspense } from 'react'
const CurrentPage = () => {
    const newsArray = useTranslations('News')
    const news = newsArray.raw('news')
  return (
    <Suspense fallback={<div>Loading...</div>}>
                         <div className='flex flex-col gap-4'>
    {news.map((item) => (
      <div key={item.id} className="pt-8 md:py-4 w-full h-full mb-4 flex-col flex justify-center items-center">
        <hr className="max-w-[90rem] md:max-w-[80rem]     xl:px-[48rem] px-8 mx-auto border-b-[1px] border-[#0060AB]" />
        <div className="w-full  pt-8 h-full mt-0 md:mt-24 xl:px-[12rem] px-4 mx-auto">
          <h1 className="text-[#004C8F] w-[11rem] rounded-t-xl py-2 px-3 bg-[#F2CED7] text-center xl:text-[1.25rem] uppercase font-extrabold">
            {newsArray.raw('title')}
          </h1>

          {item.image && (
            <div className="h-[12rem] md:h-[22rem]">
              <Image
                src={item.image}
                alt="news"
                className="md:rounded-b-xl w-full h-full md:object-right-top object-cover"
                width={1000}
                height={1000}
              />
            </div>
          )}

          <div className="  pt-8 px-3">
            <h1 className="text-[#4DBCAB] text-center md:text-left text-[2rem] md:text-[3rem] xl:text-[4rem] uppercase font-extrabold mt-8">
              {item.title}
            </h1>
            <p className="pb-1 text-[#EC7E49] font-bold text-center md:text-left text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] mt-1">
              {item.subtitle}
            </p>
            <p className="py-8 text-[#004C8F] font-light text-center md:text-justify text-[1rem] md:text-[1.25rem]">
              {item.secondTitle}
            </p>

            {item.secondImage && (
              <Image
                src={item.secondImage}
                alt="news"
                className="rounded-xl w-full h-[12rem] md:h-[38rem] md:object-center-top object-cover"
                width={1000}
                height={1000}
              />
            )}

            <h2 className="pt-8 text-center md:text-left text-[1.5rem] xl:text-[2rem] uppercase font-extrabold text-[#004C8F]">
              {item.fourTitle}
            </h2>
            <p className="pt-4 text-[#004C8F] font-light text-center md:text-justify text-[1rem] md:text-[1.25rem]">
              {item.fourSubtitle}
            </p>

            <h2 className="py-2 text-center md:text-left text-[1.5rem] xl:text-[2rem] uppercase font-extrabold text-[#004C8F]">
              {item.thirdTitle}
            </h2>
            <p className="pb-8 text-[#004C8F] font-light text-center md:text-justify text-[1rem] md:text-[1.25rem]">
              {item.thirdSubtitle}
            </p>

            {item.thirdImage && (
              <Image
                src={item.thirdImage}
                alt="news"
                className="rounded-xl w-full h-[12rem] md:h-[38rem] md:object-center-top object-cover"
                width={1000}
                height={1000}
              />
            )}
      <h2 className=" pt-8  text-center md:text-left text-[1.5rem] xl:text-[2rem] uppercase font-extrabold text-[#004C8F]">
        {item.fiveTitle}
      </h2>
      <p className="py-8 text-[#004C8F]  font-light text-center md:text-justify text-[1rem]  md:text-[1.25rem]  ">
       {item.fiveSubtitle}
      </p>
      <h2 className=" py-4  text-center md:text-left text-[1.5rem] xl:text-[2rem] uppercase font-extrabold text-[#004C8F]">
        {item.sixTitle}
      </h2>
      <p className="pb-8 text-[#004C8F]  font-light text-center md:text-justify text-[1rem]  md:text-[1.25rem]  ">
       {item.sixSubtitle}
      </p>
        
      </div>
      </div>

    </div>
        ))
       }
    </div>
    </Suspense>
  )
}

export default CurrentPage