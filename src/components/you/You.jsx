"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"


const YouComponent = () => {
    const navArray = useTranslations('Navbar')
    const nav = navArray.raw('nav')
    const findId = nav[1].name

    const youArray = useTranslations('You')
    const you = youArray.raw('you')
  
  return (
    <div id={findId} className=" w-full py-8 md:py-16  "  >
           <div className=" w-full flex flex-col items-center py-8 md:py-16 h-full  xl:px-[12rem] px-4  mx-auto">
                  <h1 className=" [text-shadow:_0_1px_0px_rgb(5%_5%_0_/_40%)] text-[#004B8B]     text-center text-[1.25rem] md:text-[2rem]  xl:text-[3rem] uppercase font-extrabold">
                  {you.title}
                  </h1>
                  <h1 className="    text-[#57B8D5] text-center  text-[1rem] md:text-[2rem] xl:text-[3rem]   uppercase font-extrabold">
                    {you.secondTitle}
                    </h1>
               <div className=" w-full place-items-center grid grid-cols-1 gap-4 md:px-24  py-8">
            
                     <div className="flex w-full gap-2  flex-col justify-center items-center">
                     <Image src={you.image} className=" w-[10rem] md:w-[15rem] xl:w-[20rem] " alt="you" width={300} height={300} />
                     </div>

                      <p className=" mt-0 md:mt-5 text-[#004B8B]   text-center text-[.875rem]    xl:text-[1.25rem] font-light">
                      {you.description.slice(0, 215)}...
                      </p>

                      <Link rel="preload" className="" href={`/you ` } >
                        <button className=" mt-5 bg-[#004B8B] transition-bg ease-linear duration-300 hover:bg-[#00457A]/60 py-2 px-4 rounded-lg text-[#fff]   text-center text-[1rem]   xl:text-[1.25rem] font-light">
                            {you.button}
                        </button>
                      </Link>
                   
               </div>

           </div>
    </div>
  )
}

export default YouComponent