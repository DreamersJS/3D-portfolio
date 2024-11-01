'use client';
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/app/components/projects";
import { projectsData } from "@/app/data";
import RenderModel from "@/app/components/RenderModel";
import Staff from "@/app/components/models/Staff";

export default function Home() {
  // main className="flex min-h-screen flex-col items-center justify-between relative"
  return (
    <main >
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />
      
      <ProjectList projects={projectsData} />
      
      <div className="flex items-center justify-start fixed top-10 -left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>

    </main>
  );
}
