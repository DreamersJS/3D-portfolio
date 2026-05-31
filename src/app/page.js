'use client';
import Image from "next/image";
import bg from "../../public/background/home-background.webp";
// import Nav from "../components/nav/NavCircle";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import('../components/nav/NavCircle'), { ssr: false });
const Scene = dynamic(() => import('../components/Scene'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="background-image" className="w-full h-full object-cover object-center opacity-10 -z-10" fill unoptimized />

      <Nav />

      <div className="w-full h-screen">
        <Scene/>
      </div>

    </main>
  );
}
