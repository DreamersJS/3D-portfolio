import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
    return (
        <div className="flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold mb-4 -mt-16">Projects</h1>
            <div className="w-full max-w-4kl px-16 space-y-8 flex flex-col items-center">
                {projects.map((project) => (
                    <ProjectLayout key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}
export default ProjectList;