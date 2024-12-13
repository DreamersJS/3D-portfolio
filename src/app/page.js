'use client';
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from '@/app/components/RenderModel'
import Nav from "./components/nav/NavCircle";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import('@/app/components/models/Wizard'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="background-image" className="w-full h-full object-cover object-center opacity-10" layout="fill" />

      <Nav />
      <div className="w-full h-screen">
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>

    </main>
  );
}
