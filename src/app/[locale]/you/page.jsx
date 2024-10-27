"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

const YouPage = () => {
  const navArray = useTranslations('Navbar')
  const nav = navArray.raw('nav')
  const findId = nav[1].name
  const youArray = useTranslations('You')
  const you = youArray.raw('you')
  return (
    <div id={findId} className=" bg-[#f3fbfc] w-full  " >
        <div className="w-full gap-4 flex flex-col items-center py-[5rem] md:py-[8rem] h-full  xl:px-[6rem] px-4  mx-auto">
        <h1 className=" [text-shadow:_0_1px_0px_rgb(5%_5%_0_/_40%)]  text-[#F4B0AC]  text-center text-[1.25rem] md:text-[2rem]  xl:text-[3rem] uppercase font-extrabold">
                    {you.title}
              </h1>

              <h1 className="    text-[#004B8B]  text-center  text-[1rem] md:text-[2rem]   uppercase font-extrabold">
                {you.secondTitle}
              </h1>

              <div className=" w-full place-items-center grid grid-cols-1 gap-4 md:px-24  py-8">
            
                     <div className="flex w-full gap-2  flex-col justify-center items-center">
                     <Image src={you.image} className=" w-[10rem] md:w-[15rem] xl:w-[20rem] " alt="you" width={300} height={300} />
                     </div>

                      <p className=" mt-0 md:mt-5 text-[#004B8B]   text-center md:text-justify  text-[.875rem]   xl:text-[1.25rem] font-light">
                      {you.description}
                      </p>

                      <div className="w-full flex flex-col mt-5  ">
                        <h1 className="    text-[#004B8B]   text-center md:text-left  text-[1rem] md:text-[1.5rem]   uppercase font-extrabold">
                          {you.thirdTitle}
                        </h1>
                        <p className=" mt-5 text-[#004B8B]   text-center md:text-justify  text-[.875rem]   xl:text-[1.25rem] font-light">
                          {you.shortDescription}
                        </p>
                      </div>

                      <div className="w-full flex flex-col mt-5  ">
                        {
                          you.content.map((item, index) => (
                          index  === 0 &&  <div key={index} className="w-full flex flex-col  ">
                              <h1 className=" mt-5   text-[#004B8B]   text-center md:text-left  text-[1rem] md:text-[1.5rem]   uppercase font-extrabold">
                                {item.heading}
                              </h1>
                              <p className=" mt-5   text-[#004B8B]   text-center md:text-justify  text-[.875rem]   xl:text-[1.25rem] font-medium">
                                {item.paragraph}
                              </p>
                              {
                                item.list.map((listItem, index) => (
                                  <ul className="w-full flex flex-col pl-8  md:pl-[2rem] mt-2 list-disc" key={index} >
                                    <li className=" mt-0 md:mt-5 text-[#004B8B]    text-center md:text-left  text-[.875rem]   xl:text-[1.25rem] font-light" >{listItem}</li>
                                  </ul>
                                ))
                              }
                            </div>
                          ))
                        }
                      </div>

                      
                   
               </div>

        </div>
    </div>
  )
}

export default YouPage