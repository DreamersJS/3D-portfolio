'use client';
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/app/components/RenderModel";
import HatModel from "@/app/components/models/HatModel";
import AboutDetails from "@/app/components/about";

export default function Home() {

    return (
        <main >
            <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />


            <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
                <RenderModel>
                    <HatModel />
                </RenderModel>
            </div>

            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center justify-center text-center top-[60%] left-1/2 -translate-x-1/2">
                    <h1 className="text-4xl font-bold text-center text-white">Zvezda Neycheva</h1>
                    <p className="text-lg text-center text-white">Meet the wizard behind this project</p>
                </div>
            </div>

<AboutDetails />
        </main>
    );
}
