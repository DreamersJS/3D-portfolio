import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
    return (
        <div className="flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold">Projects</h1>
            <div>
                {projects.map((project) => (
                    <ProjectLayout key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}
export default ProjectList;