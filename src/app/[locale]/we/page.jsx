 'use client'

import { useTranslations } from "next-intl"
import Image from "next/image"
import { IoMdFolderOpen } from "react-icons/io";
import { AiOutlineFolderOpen } from "react-icons/ai";

import { useState } from "react";
import { Link } from "@/i18n/routing";
const WePage = () => {
  const [open, setOpen] = useState(null)
  const [weDescription, setWeDescription] = useState(false)
  const weArray = useTranslations('We')
  const we = weArray.raw('we')
  const handleOpen = (index) => {
    const weFind = we.imagesArray.find((item) => item.id === index)
    setOpen(open => open === index ? null : index)
    setWeDescription(weFind) 
  }

  return (
    <div className="   w-full  ">
           <div className="w-full gap-4 flex flex-col items-center py-[5rem] md:py-[8rem] h-full  xl:px-[12rem] px-4  mx-auto">
              <h1 className=" [text-shadow:_0_1px_0px_rgb(5%_5%_0_/_40%)]  text-[#57B8D5]  text-center text-[1.25rem] md:text-[2rem]  xl:text-[3rem] uppercase font-extrabold">
                    {we.title}
              </h1>

              <h1 className="    text-[#004B8B]  text-center  text-[1rem] md:text-[2rem]   uppercase font-extrabold">
                {we.secondTitle}
              </h1>

              <p className=" mt-0 md:mt-5 text-[#004B8B]   text-center text-[.85rem]    xl:text-[1.25rem] font-light">
                {we.description}
              </p>

              <div className="mt-8 md:pt-16 pb-24 grid place-items-center gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {we.imagesArray.map((item) => (
                      <div key={item.id} className={`flex flex-col justify-center w-full rounded-md  ${weDescription.id === item.id ? 'h-auto' : 'h-[15rem]'}`}>
                        <div className="border-2 shadow-sm shadow-[#004B8B]   w-full h-[15rem] flex justify-center items-center">
                          <Image className="ml-auto  mr-auto w-[50%] object-cover" src={item.image} alt="logo" width={500} height={500} />
                        </div>
                        <div className="w-full bg-[#004B8B] flex-col  cursor-pointer flex   justify-between items-center" onClick={() => handleOpen(item.id)}>
                              
                              <div className="w-full  flex px-4 justify-between py-3 gap-4 items-center">
                              <span className="text-[#ffff] text-[.85rem] xl:text-[1rem] font-bold">
                            {item.title}
                          </span>


                          {open === item.id ? 
                          <AiOutlineFolderOpen className={`${open === item.id ? 'transition-all ease-linear duration-300  block' : 'block'} transition-all ease-linear duration-300  text-[#ffff] cursor-pointer text-center text-[1.5rem] xl:text-[1.75rem] font-light`}  />  :<IoMdFolderOpen className={`${open === item.id ? 'block' : 'transition-all ease-linear duration-300  block'} transition-all ease-linear duration-300  text-[#ffffff] cursor-pointer text-center text-[1.5rem] xl:text-[1.75rem] font-light`} />
                            
                       }
                              </div>


                        <div className={`${open === item.id ? 'block transition-all ease-linear duration-300' : 'hidden'} transition-all ease-linear duration-300  mt-0 md:mt-5`}>
                         { weDescription.id === item.id && <p className="text-[#ffff] px-4 text-center text-[.85rem] xl:text-[1rem] font-light">
                            {weDescription.description}
                          </p>}

                          <Link as={item.link} href={item.link} target="_blank" rel="noopener noreferrer">
                          <button className="mt-5 bg-[#f8c9c9] px-4 font-bold w-full py-2 text-[#004B8B]"  >
                            {item.button}
                          </button>
                          </Link>
                        </div>
                        </div>
                      </div>
                    ))}
                </div>


           </div>
    </div>
  )
}

export default WePage