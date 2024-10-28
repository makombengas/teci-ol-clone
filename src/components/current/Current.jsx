"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Suspense } from "react"



const CurrentComponent = () => {
    const newsArray = useTranslations('News')
    const news = newsArray.raw('news')

    const navArray = useTranslations('Navbar')
    const nav = navArray.raw('nav') 
    const findId = nav[3].name

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div  id={findId} className=" bg-[#e8f1fa]  w-full py-4 md:py-16   mx-auto ">

             <div className="w-full py-8 h-full mt-8 md:mt-0  xl:px-[12rem] px-4  mx-auto">
                  
                <h1 className=" text-[#0060AB] uppercase font-extrabold md:text-left text-center text-[1.5rem] md:text-[2.5rem] xl:text-[3rem]">
                    {newsArray.raw('title')}
                </h1>
                <div className=" gap-4 mt-8 place-items-center grid grid-cols-1 md:grid-cols-2 ">

                    {
                        news.map((item) => (
                            <div key={item.id} className=" relative rounded-xl h-80 w-full ">
                        <Image priority className="rounded-xl w-full h-full object-cover" src={item.image} alt="news" width={500} height={500} />
                        <div className="flex flex-col justify-center items-center  rounded-xl  h-80 w-full bg-gradient-to-t from-[#000000]/70 from-30% via-[#0000000]/70 via-40% to-[#000000]/30 to-90% absolute top-0 translate-x-[-50%] left-[50%] ">
                        <h1 className=" text-white text-center md:text-left text-[1.25rem] md:text-[1.5rem]  xl:text-[2rem] uppercase font-extrabold   ">
                        {item.title}
                        </h1>
                        <p className=" pt-4 text-white text-center text-[1rem] md:text-[1.25rem]   font-light  ">
                        {item.subtitle}
                        </p>
                        <Link
                        rel="preload" 
                            as={item.link}    
                            href={
                                    {
                                        pathname:`/current/:${item.id}`,
                                        query: {
                                            id: item.id,
                                            title: item.title,
                                            image: item.image,
                                            subtitle: item.subtitle,
                                            secondTitle: item.secondTitle,
                                            thirdTitle: item.thirdTitle,
                                            thirdSubtitle: item.thirdSubtitle,
                                            fourTitle: item.fourTitle,
                                            fourSubtitle: item.fourSubtitle,
                                            fiveTitle: item.fiveTitle,
                                            fiveSubtitle: item.fiveSubtitle,
                                            sixTitle: item.sixTitle,
                                            sixSubtitle: item.sixSubtitle,
                                            sevenTitle: item.sevenTitle,
                                            sevenSubtitle: item.sevenSubtitle,
                                            image: item.image,
                                            secondImage: item.secondImage,
                                            thirdImage: item.thirdImage,
                                            bgColor: item.bgColor,
                                            path: item.path

                                        }
                                    }
                                }  
                                className=" rounded-md px-4 py-3 bg-[#00457A] hover:bg-[#00457A]/60 transition-bg ease-in duration-300 mt-4 text-[#fff] text-center md:text-left text-sm md:text-[1.25rem]   font-bold ">
                                        {item.button}
                        </Link>
                        </div>
                    </div>
                        ))
                    }
                        

                </div>

             </div>

        </div>
    </Suspense>
  )
}

export default CurrentComponent