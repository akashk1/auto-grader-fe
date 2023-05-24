import "./styles.css";
import { useState } from "react";
import { PROJECTS } from "./constants";
import { Project } from "./components/Project/Project";
import { Sidebar } from "./components/Sidebar/Sidebar";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(0);

  return (
    <div className="app">
      <div className="sidebar-container">
        <Sidebar setSelectedProjectId={setSelectedProjectId} />
      </div>
      <div className="project-container">
        <Project project={PROJECTS[selectedProjectId]} />
      </div>
    </div>
  );
}
