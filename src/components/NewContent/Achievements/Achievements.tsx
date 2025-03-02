import {
  IoBriefcaseOutline,
  IoLayersOutline,
  IoRocketOutline,
} from "react-icons/io5";
import AchievementItem from "./AchievementItem";
import "../../../style.css";

const items = [
  { icon: <IoLayersOutline />, milestone: "2k+", title: "Websites Designed" },

  {
    icon: <IoBriefcaseOutline />,
    milestone: "5+",
    title: "Years of Experience",
  },

  { icon: <IoRocketOutline />, milestone: "4K", title: "Completed Projects" },
];

const Achievements = () => {
  return (
    <section className="achievements">
      {items.map((item, index) => (
        <AchievementItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Achievements;
