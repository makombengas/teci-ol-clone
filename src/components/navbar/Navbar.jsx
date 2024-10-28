"use client"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"
import LanguageSelector from "./languageSelector/LanguageSelector"
import { useState } from "react"
import { useSelectedLayoutSegment } from "next/navigation"


const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const navArray = useTranslations('Navbar')
    const nav = navArray.raw('nav')
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname ;
 
  return (
    <div className="bg-slate-100   w-full xl:px-[12rem] py-2 fixed z-50 px-4    flex justify-between  ">

      
           <Link rel="preload" className="z-50" href={'/'} onClick={() => setOpenNav(false)}  >
           <Image priority className=" w-[6rem]  md:w-[10rem] object-cover" src="/images/teciol_logo.png" alt="logo" width={500} height={500} />
           </Link>
     
        <div className="flex text-[#0060AB] font-extrabold text-[1rem] items-center gap-4">
            <div className={` uppercase   ${openNav ? " bg-[#f8c9c9] md:bg-transparent absolute gap-5 flex-col justify-center left-[50%] translate-x-[-50%]  top-[0] w-screen md:flex-row md:translate-x-0 md:w-auto md:static h-screen md:h-auto  flex text-[#0060AB] font-extrabold md:text-[1rem]  xl:text-[1.5rem] items-center md:gap-6" : 'hidden md:flex text-[#0060AB] font-extrabold md:text-[1rem]  xl:text-[1.5rem] items-center gap-4 md:gap-6 '}   `} >

                {
                    nav.map((item) => (
                        <Link  rel="preload" className={` hover:text-[#57B8D5]  ${isActive === item.path ? "border-b-4 border-[#F4B0AC] text-[#57B8D5] text-[1.5rem]    font-extrabold md:text-[1rem]  xl:text-[1.5rem] " : "text-[#0060AB] font-extrabold md:text-[1rem] text-[1.5rem]   xl:text-[1.5rem] "} `	} key={item.name} href={item.path} onClick={() => setOpenNav(!openNav)} >{item.name}</Link>
                    ))
                }
            </div>
            <div className="">
                <LanguageSelector/>
            </div>
            <div className="md:hidden z-50 w-[1.75rem] relative flex flex-col items-center gap-[.35rem] " onClick={() => setOpenNav(!openNav)} >
                <hr className={`${openNav ? "transition-rotate ease-linear duration-300  rotate-[45deg]  bg-[#0060AB] border-none w-full h-[.15rem]" : "transition-rotate ease-linear duration-300   bg-[#0060AB] border-none w-full h-[.15rem]"} `} />
                <hr className={`${openNav ? "transition-opacity ease-linear duration-300   opacity-0 bg-[#0060AB] border-none w-full h-[.15rem]" : "transition-opacity ease-linear duration-300   bg-[#0060AB] border-none w-full h-[.15rem]"} `} />
                <hr className={`${openNav ? "transition-rotate ease-linear duration-300   rotate-[-45deg] absolute  bg-[#0060AB] border-none w-full h-[.15rem]" : "transition-rotate ease-linear duration-300   bg-[#0060AB] border-none w-full h-[.15rem]"} `} />
            </div>
        </div>



    </div>
  )
}

export default Navbar