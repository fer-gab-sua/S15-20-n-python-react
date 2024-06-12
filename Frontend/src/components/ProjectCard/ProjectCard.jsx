import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/proyectos/tablero/${project.project_id}`);
  };

  return (
    <div
      className="max-w-xs w-full cursor-pointer relative block transition-all duration-400 ease-in-out overflow-hidden rounded-lg shadow-lg hover:shadow-xl bg-boardbg "
      onClick={handleClick}
    >
      <figure className="w-full h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full  transition-transform duration-400 ease-in-out transform hover:scale-150"
        />
      </figure>
      <div className="p-6 m-1 bg-white">
        <h2 className="mb-2 text-2xl font-bold text-gray-800 transition-colors duration-300 ease-out">
          {project.name}
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
