import React from "react";
import { PROJECTS } from "../../constants";
import "./Sidebar.css";

export const Sidebar = ({ setSelectedProjectId }) => {
  const handleClick = (id) => {
    setSelectedProjectId(id);
  };
  return (
    <div className="sidebar">
      {PROJECTS.map((project) => {
        return (
          <div
            className="project-name"
            key={project.id}
            onClick={() => handleClick(project.id)}
          >
            {project.name}{" "}
          </div>
        );
      })}
    </div>
  );
};
