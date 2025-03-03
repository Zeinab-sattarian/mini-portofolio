import { ReactNode } from "react";
import "../../../style.css";

interface ProjectItemProps {
  className: string;
  img: ReactNode;
  title: string;
}

const ProjectItem = ({ className, img, title }: ProjectItemProps) => {
  return (
    <div className={className}>
      {img}
      <h3>
        Project <span className="colored">{title}</span>
      </h3>
    </div>
  );
};

export default ProjectItem;
