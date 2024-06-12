import logo from '../assets/svg/logo-pml.svg'
import ProjectCard from "../components/ProjectCard/ProjectCard";


const User =  {
  username: "Admin",
  email: "pachecolobos.felix@gmail.com",
  projects: [
    {
      project_id: 2,
      name: "PLM",
      teams: [],
      collabs: [],
      is_active: true,
      image: logo,
    },
    {
      project_id: 1,
      name: "Aplicacion de Trabajo",
      teams: [],
      collabs: [],
      is_active: true,
      image: logo,
    },
  ],
}

export const Tablero = () => {

    return (
      <div className="p-1">
      <h1 className="text-2xl font-bold p-4">Bienvenido {User.username}</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {User.projects.map((project) => (
          <ProjectCard key={project.project_id} project={project} />
        ))}
      </div>
    </div>
    );
  };
  