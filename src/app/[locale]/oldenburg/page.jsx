"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

const OldenburgPage = () => {
  const navArray = useTranslations('Navbar')
  const nav = navArray.raw('nav')
  const findId = nav[1].name
  const youArray = useTranslations('You')
  const you = youArray.raw('you')
  const oldenburgArray = useTranslations('Oldenburg')
  const oldenburg = oldenburgArray.raw('oldenburg')
  return (
    <div id={findId} className=" bg-[#dfdcd5d7]/10 w-full  " >
        <div className="w-full gap-4 flex flex-col items-center py-[5rem] md:py-[8rem] h-full  xl:px-[6rem] px-4  mx-auto">
        <h1 className=" [text-shadow:_0_1px_0px_rgb(5%_5%_0_/_40%)]  text-[#F1A700] text-center text-[1.25rem] md:text-[2rem]  xl:text-[3rem] uppercase font-extrabold">
                    {oldenburg.title}
              </h1>

              <h1 className="    text-[#E84D01]  text-center  text-[1rem] md:text-[2rem]   uppercase font-extrabold">
                {oldenburg.secondTitle}
              </h1>

              <div className=" w-full place-items-center grid grid-cols-1 gap-4 md:px-24  py-8">
            
                    
              <div className="   p-4 flex justify-center border ">
                        <iframe
                          src={oldenburg.video}
                          frameBorder="0"
                          allowFullScreen
                          
                          className=" w-[15.52rem] h-[8.658rem]  md:w-[25rem] md:h-[14.063rem]  lg:w-[50rem] lg:h-[28.125rem] "
                          
                        />
                     </div>

                     

                      <div className="w-full flex flex-col mt-5  ">
                      
                        <p className=" mt-0 md:mt-5 text-[#004B8B]   text-center md:text-justify  text-[.875rem]   xl:text-[1.25rem] font-light">
                          {oldenburg.description}
                        </p>
                      </div>

                      <div className="w-full flex flex-col mt-5  ">
                        {
                          you.content.map((item, index) => (
                         item.id !== 1 && <div key={index} className="w-full flex flex-col   ">
                              <h1 className=" mt-5   text-[#004B8B]   text-center md:text-left  text-[1rem] md:text-[1.5rem]   uppercase font-extrabold">
                                {item.heading}
                              </h1>
                              <p className=" mt-0 md:mt-5 text-[#004B8B]   text-center md:text-justify  text-[.875rem]   xl:text-[1.25rem] font-light">
                                {item.paragraph}
                              </p>
                            </div>
                          ))
                        }
                      </div>

                      
                   
               </div>

        </div>
    </div>
  )
}

export default OldenburgPage