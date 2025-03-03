import { FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import SkillItem from "./SkillItem";

const items = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    progressBar: false,
    progressValue: 0,
    pieChart: false,
    pieValue: 0,
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    progressBar: false,
    progressValue: 0,
    pieChart: false,
    pieValue: 0,
  },
  {
    icon: <FaReact />,
    title: "React",
    progressBar: false,
    progressValue: 0,
    pieChart: false,
    pieValue: 0,
  },
  {
    icon: <FaPython />,
    title: "Python",
    progressBar: false,
    progressValue: 0,
    pieChart: false,
    pieValue: 0,
  },
  {
    icon: <></>,
    title: "MySQL",
    progressBar: false,
    progressValue: 0,
    pieChart: true,
    pieValue: 65,
  },
  {
    icon: <></>,
    title: "Java",
    progressBar: false,
    progressValue: 0,
    pieChart: true,
    pieValue: 85,
  },
  {
    icon: <></>,
    title: "Node Js",
    progressBar: true,
    progressValue: 90,
    pieChart: false,
    pieValue: 0,
  },
  {
    icon: <></>,
    title: "PostgreSQL",
    progressBar: true,
    progressValue: 75,
    pieChart: false,
    pieValue: 0,
  },
];

const Skills = () => {
  return (
    <section className="skills">
      {items.map((item, index) => (
        <SkillItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Skills;
