import "../../../style.css";

interface ExperienceItemProps {
  title: string;
  company: string;
  startDate: string;
  finishDate: string;
  description: string;
}

const ExperienceItem = ({
  title,
  company,
  startDate,
  finishDate,
  description,
}: ExperienceItemProps) => {
  return (
    <div className="experience">
      <h2>{title}</h2>
      <h4>
        {company} <span className="date">{startDate}</span>&#x26AC;
        <span className="date">{finishDate}</span>
      </h4>
      <p>{description}</p>
    </div>
  );
};
export default ExperienceItem;
