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
  return (
    <div>
      if ({progressBar} && {pieChart} === false)
      {
        <p>
          {icon} {title}
        </p>
      }
      elif ({pieChart} === true)
      {
        <div
          className="circle"
          style={{ "--percent": { pieValue } } as React.CSSProperties}
        >
          <h4>
            {pieValue}
            <small>%</small>
          </h4>
        </div>
      }
      elif ({progressBar} === true)
      {
        <div className="progress-bar">
          <p>
            {title} <span>{progressValue}%</span>
          </p>
          <progress max="100" value={progressValue}></progress>
        </div>
      }
    </div>
  );
};
export default SkillItem;
