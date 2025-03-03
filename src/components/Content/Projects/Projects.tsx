import project1 from "../../../img/project-1.png";
import project2 from "../../../img/project-2.png";
import project3 from "../../../img/project-3.png";
import project4 from "../../../img/project-4.png";
import project5 from "../../../img/project-5.png";
import project6 from "../../../img/project-6.png";
import project7 from "../../../img/project-7.png";
import ProjectItem from "./ProjectItem";
import "../../../style.css";

const items = [
  {
    className: "project-1",
    img: <img src={project1} alt="" />,
    title: "Title-1",
  },
  {
    className: "project-2",
    img: <img src={project2} alt="" />,
    title: "Title-2",
  },
  {
    className: "project-3",
    img: <img src={project3} alt="" />,
    title: "Title-3",
  },
  {
    className: "project-4",
    img: <img src={project4} alt="" />,
    title: "Title-4",
  },
  {
    className: "project-5",
    img: <img src={project5} alt="" />,
    title: "Title-5",
  },
  {
    className: "project-6",
    img: <img src={project6} alt="" />,
    title: "Title-6",
  },
  {
    className: "project-7",
    img: <img src={project7} alt="" />,
    title: "Title-7",
  },
];
const Projects = () => {
  return (
    <section className="projects">
      {items.map((item, index) => (
        <ProjectItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Projects;
