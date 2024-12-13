import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
    return (
        <div className="flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold mb-4 -mt-16">Projects</h1>
            <div className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center">
                {projects.map((project) => (
                    <ProjectLayout key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}
export default ProjectList;