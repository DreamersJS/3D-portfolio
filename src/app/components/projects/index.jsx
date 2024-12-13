'use client'
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.5,

        }
    }
}

const ProjectList = ({ projects }) => {
    return (
        <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className="flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold mb-4 -mt-16">Projects</h1>
            <div className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center">
                {projects.map((project) => (
                    <ProjectLayout key={project.id} {...project} />
                ))}
            </div>
        </motion.div>
    );
}
export default ProjectList;