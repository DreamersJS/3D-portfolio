'use client';
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from '@/app/components/RenderModel'
import Wizard from "./components/models/Wizard";
import Nav from "./components/nav/NavCircle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" className="w-full h-full object-cover object-center opacity-25" layout="fill" />

          <Nav />
      <div className="w-full h-screen">
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>


    </main>
  );
}
