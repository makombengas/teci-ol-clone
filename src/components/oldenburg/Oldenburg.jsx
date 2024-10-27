'use client'

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

const OldenburgComponent = () => {
    const navArray = useTranslations('Navbar')
    const nav = navArray.raw('nav') 
    const findId = nav[2].name
    const oldenburgArray = useTranslations('Oldenburg')
    const oldenburg = oldenburgArray.raw('oldenburg')
  return (
  
    <div id={findId} className=" bg-[#dfdcd5d7]/10  w-full py-8 md:py-16  "  >
           <div className=" w-full flex flex-col items-center py-8 md:py-16 h-full  xl:px-[12rem] px-4  mx-auto">
                  <h1 className=" [text-shadow:_0_1px_0px_rgb(5%_5%_0_/_40%)] text-[#004B8B]     text-center text-[1.25rem] md:text-[2rem]  xl:text-[3rem] uppercase font-extrabold">
                  {oldenburg.title}
                  </h1>
               <div className="  w-full place-items-center grid grid-cols-1 gap-4 md:px-24  py-8">
            
                     <div className="   p-4 flex justify-center border ">
                        <iframe
                          src={oldenburg.video}
                          frameBorder="0"
                          allowFullScreen
                          
                          className=" w-[15.52rem] h-[8.658rem]  md:w-[25rem] md:h-[14.063rem]  lg:w-[50rem] lg:h-[28.125rem] "
                          
                        />
                     </div>
                  <h1 className=" [text-shadow:_1px_1px_1px_rgb(5%_5%_10%_/_60%)]   text-[#57B8D5] text-center  text-[1rem] md:text-[2rem] xl:text-[3rem]    font-extrabold">
                    {oldenburg.secondTitle}
                    </h1>

                      <p className=" mt-0 md:mt-5 text-[#004B8B]   text-center text-[.875rem]    xl:text-[1.25rem] font-light">
                      {oldenburg.description.slice(0, 211)}...
                      </p>

                      <Link rel="preload" className="" href={`/oldenburg ` } >
                        <button className=" mt-5 bg-[#004B8B] transition-bg ease-linear duration-300 hover:bg-[#00457A]/60 py-2 px-4 rounded-lg text-[#fff]   text-center text-[1rem]   xl:text-[1.25rem] font-light">
                            {oldenburg.button}
                        </button>
                      </Link>
                   
               </div>

           </div>
    </div>
  )
}

export default OldenburgComponent