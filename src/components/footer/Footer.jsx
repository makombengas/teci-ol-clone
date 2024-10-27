"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"


const Footer = () => {
    const navArray = useTranslations('Navbar')
    const nav = navArray.raw('nav')
    const footerArray = useTranslations('Footer')
    const footer = footerArray.raw('footer')
  return (
   <div className="pt-[3rem]">
      <div className="bg-[#CBEAE5]/70   w-full xl:px-[12rem] py-[3rem] gap-4 flex-col   px-4    flex justify-between  ">
          <div className=" w-full py-[2rem] grid place-items-center  place-content-center grid-cols-1 md:grid-cols-4 gap-8">
              
                 
              <div className=" md:w-full xl:w-[60%] flex items-center md:items-start h-full flex-col gap-y-2 gap-x-8">
                <Link rel="preload" className="" href={'/'}  >
                <Image priority className=" w-[6rem]  md:w-[10rem] object-cover" src="/images/teciol_logo.png" alt="logo" width={500} height={500} />
                </Link>
                <p className="text-[#0060AB] text-[.875rem] md:text-sm text-center md:text-start md:pr-[2rem] ">
                    {footer.title}
                </p>
              </div>

          
              <div className=" w-full flex items-center md:items-start h-full flex-col gap-y-2 gap-x-8">
                   <h1 className=" text-[#0060AB] font-bold uppercase md:text-[1rem]   ">{footer.menu}  </h1>
                   
                   {
                       nav.map((item) => (
                           <Link  rel="preload" className="text-[#0060AB] font-medium text-[.875rem] md:text-sm   " key={item.id} href={item.path} >{item.name}</Link>
                       ))
                   }
              </div>
              <div className=" w-full flex items-center md:items-start h-full flex-col gap-y-2 gap-x-8">
                   <h1 className=" text-[#0060AB] font-bold uppercase md:text-[1rem]  "> {footer.contact}  </h1>
                 
                  
                   <p className="text-[#0060AB]  text-center md:text-start text-[.875rem] md:text-sm  "  >  Tel: <a href="tel:+49 0441-2352350">0441-2352350</a></p>
                  
               
             
                 
                <p className="text-[#0060AB] text-center md:text-start text-[.875rem] md:text-sm "  >  E-Mail:  <a href="mailto:info@teciol.de">info@teciol.de</a></p>
                 
            
                   
              </div>

              <div className=" md:w-full xl:w-[60%] flex items-center md:items-start h-full flex-col gap-y-2 gap-x-8">
                   <h1 className=" text-[#0060AB] text-center md:text-start font-bold uppercase md:text-[1rem]  ">
                       {footer.legal}
                   </h1>
                   
                   {
                       footer.legalArray.map((item) => (
                           <Link  rel="preload" className="text-[#0060AB] font-medium  text-[.875rem] md:text-sm   " key={item.id} href={item.link} >{item.title}</Link>
                       ))
                   }
              </div>
             

          </div>
             <hr className="w-full h-[.1rem] md:h-[.15rem] bg-[#0060AB]  " />
             <div className="flex items-center gap-2 flex-col md:flex-row justify-center py-8 ">
                <p className="text-[#0060AB] text-center md:text-start font-medium  text-[.875rem] md:text-sm   " >{footer.secondTitle}</p>
                 <p className="text-[#0060AB] text-center md:text-start font-medium  md:text-[1rem] text-[.875rem] md:text-sm  " >{footer.copyright}</p>
             </div>
   </div>
   </div>
  )
}

export default Footer