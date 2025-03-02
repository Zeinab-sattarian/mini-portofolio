import { ReactNode } from "react";

interface AchievementItemProps {
  icon: ReactNode;
  milestone: string;
  title: string;
}

const AchievementItem = ({ icon, milestone, title }: AchievementItemProps) => {
  return (
    <div>
      <h3>
        {icon} {milestone}
      </h3>
      <p>{title}</p>
    </div>
  );
};

export default AchievementItem;
