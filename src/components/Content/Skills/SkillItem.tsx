import { ReactNode } from "react";
import "../../../style.css";

interface SkillItemProps {
  icon: ReactNode;
  title: string;
  progressBar: boolean;
  progressValue: number;
  pieChart: boolean;
  pieValue: number;
}

const SkillItem = ({
  icon,
  title,
  progressBar,
  progressValue,
  pieChart,
  pieValue,
}: SkillItemProps) => {
  if (progressBar === false && pieChart === false) {
    return (
      <div>
        <p>
          {icon} {title}
        </p>
      </div>
    );
  } else if (pieChart === true) {
    return (
      <div>
        <div
          className="circle"
          style={{ "--percent": { pieValue } } as React.CSSProperties}
        >
          <h4>
            {pieValue}
            <small>%</small>
          </h4>
        </div>
      </div>
    );
  } else if (progressBar === true) {
    return (
      <div>
        <div className="progress-bar">
          <p>
            {title} <span>{progressValue}%</span>
          </p>
          <progress max="100" value={progressValue}></progress>
        </div>
      </div>
    );
  }
};
export default SkillItem;
