import { ReactNode } from "react";

export interface SkillItemProps {
  icon: ReactNode;
  title: string;
  progressBar: boolean;
  progressValue: number;
  pieChart: boolean;
  pieValue: number;
  childItem?: ReactNode;
}

const SkillItem = ({
  icon,
  title,
  progressBar,
  progressValue,
  pieChart,
  pieValue,
  childItem,
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
          style={{
            background: `conic-gradient(from 0deg, var(--primary-color) 0%, var(--primary-color) 0% ${pieValue}%, var(--accent-03) ${pieValue}%)`,
          }}
        >
          <h4>
            {pieValue}
            <small>%</small>
          </h4>
        </div>
        <p>{title}</p>
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

        {childItem}
      </div>
    );
  }
};
export default SkillItem;
