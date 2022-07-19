import Project from "../components/Project/Project";
import { projects } from "../projectsList";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="ProjectsList">
    <div className="about-me-line">My projects</div>
      <div className="MyWorks">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
