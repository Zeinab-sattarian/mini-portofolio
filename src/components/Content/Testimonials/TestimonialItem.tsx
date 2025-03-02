import { ReactNode } from "react";
import "../../../style.css";

interface TestimonialItemProps {
  img: ReactNode;
  icon: ReactNode;
  name: string;
  occupation: string;
  description: string;
}

const TestimonialItem = ({
  img,
  icon,
  name,
  occupation,
  description,
}: TestimonialItemProps) => {
  return (
    <div className="testimonial-box">
      {img}
      {icon}
      <h3>{name}</h3>
      <i>{occupation}</i>
      <p>{description}</p>
    </div>
  );
};

export default TestimonialItem;
