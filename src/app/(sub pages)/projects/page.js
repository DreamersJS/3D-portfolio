'use client';
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/app/components/projects";
import { projectsData } from "@/app/data";
import RenderModel from "@/app/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import('@/app/components/models/Staff'), { ssr: false });

export default function Home() {

  return (
    <main >
      <Image priority sizes="100vw" src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-start fixed top-6 lg:top-10 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:-left-24 h-screen -z-10">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>

    </main>
  );
}
