import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "lucide-react";

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({
    name,
    description,
    highlights,
    image,
    techStack = [],
    type,
    demoLink,
    githubLink,
    videoLink,
}) => {
    return (
        <motion.div
            variants={item}
            className="text-sm md:text-base flex flex-col md:flex-row items-start md:items-center justify-between w-full rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:shadow-lg transition-shadow"
        >
            {/* image */}
            {image && (
                <Image
                    src={image}
                    alt={`${name} screenshot`}
                    width={112}
                    height={112}
                    className="w-full md:w-36 h-36 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                />
            )}

            <div>
                {/* Project Info */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <h2 className="text-foreground font-semibold text-lg">{name}</h2>
                            {type && (
                                <span className="text-xs font-semibold bg-accent text-background px-2 py-1 rounded">
                                    {type}
                                </span>
                            )}
                        </div>
                        <p className="text-slate-300 text-lg drop-shadow-lg">{description}</p>

                        {/* Tech Stack Badges */}
                        {techStack.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-slate-700 px-2 py-1 rounded text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {demoLink && (
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 text-sm font-medium rounded bg-blue-800 text-white hover:bg-blue-700 transition"
                            >
                                Live Demo
                            </a>
                        )}
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 text-sm font-medium rounded bg-gray-800 text-white hover:bg-gray-900 transition"
                            >
                                <GithubIcon className='w-full h-auto' aria-label="GitHub repository" strokeWidth={1.5} />
                            </a>
                        )}
                        {videoLink && (
                            <a
                                href={videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 text-sm font-medium rounded bg-red-800 text-white hover:bg-red-700 transition"
                            >
                                Video
                            </a>
                        )}
                    </div>
                </div>
            </div>
            {/* highlights */}
            {highlights && (
                <details className="mt-4 md:mt-0 md:ml-6 cursor-pointer">
                    <summary className="">Details</summary>
                    <ul className="mt-2 text-slate-300 text-md ml-6 list-disc space-y-2">
                        {highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </details>
            )}
        </motion.div>
    );
};

export default ProjectLayout;