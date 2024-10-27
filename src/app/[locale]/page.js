import Carousel from "@/components/carousel/Carousel";
import CurrentComponent from "@/components/current/Current";
import OldenburgComponent from "@/components/oldenburg/Oldenburg";
import WeComponent from "@/components/we/We";
import YouComponent from "@/components/you/You";


import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <Carousel/>
     <YouComponent/>
     <WeComponent/>
     <CurrentComponent/>
     <OldenburgComponent/>
    </div>
  );
}
