'use client'

import { weData } from "@/data/data"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"

const WeComponent = () => {
    const navArray = useTranslations('Navbar')
    const nav = navArray.raw('nav') 
    const findId = nav[0].name
    const weArray = useTranslations('We')
    const we = weArray.raw('we')
  return (
    <div id={findId} className=" bg-[#ffdddc]/60 w-full " >
        <div className=" w-full flex flex-col items-center py-8 md:py-16 h-full  xl:px-[12rem] px-4  mx-auto">
            <div className="py-8 gap-4 place-content-center grid place-items-center grid-cols-1 md:grid-cols-2">
                <div className="flex w-full gap-2  flex-col justify-center items-center">
                     
                    <h1 className=" [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]  text-[#57B8D5]  text-center text-[2rem] md:text-[2rem]  xl:text-[3rem] uppercase font-extrabold">
                      {we.title}
                    </h1>                  

                    <h1 className="    text-[#004B8B]  text-center  text-[1rem] md:text-[1.5rem]   uppercase font-extrabold">
                    {we.secondTitle}
                    </h1>

                    
                  <p className=" mt-0 md:mt-5 text-[#004B8B]   text-center text-[.875rem]    xl:text-[1.25rem] font-light">
                      {we.description.slice(0, 210)}...
                  </p>
               <Link rel="preload" className="" href={`/we ` } >
                  <button className=" mt-5 bg-[#004B8B] transition-bg ease-linear duration-300 hover:bg-[#00457A]/60 py-2 px-4 rounded-lg text-[#fff]   text-center text-[1rem]   xl:text-[1.25rem] font-light">
                      {we.button}
                  </button>

               </Link>

                </div>
               <div className=" hidden md:flex md:ml-[7rem] justify-end items-center  md:border-4 rounded-3xl border-[#ffff] ">
                  <Image priority className="border-4 rounded-3xl  w-full h-full object-cover" src={we.image} alt="we" width={500} height={500} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default WeComponent