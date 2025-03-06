import Testimonial1 from "../../../img/testimonial-1.png";
import Testimonial2 from "../../../img/testimonial-2.png";
import Testimonial3 from "../../../img/testimonial-3.png";
import TestimonialItem from "./TestimonialItem";
import { FaStar, FaStarHalf } from "react-icons/fa";

const items = [
  {
    img: <img src={Testimonial1} alt="" />,
    icon: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    name: "Leonardo Dicaperio",
    occupation: "Manager at Google Inc.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, dolorem, inventore eius delectus quam maxime praesentium tenetur soluta repellendus nobis libero, illum reiciendis dicta quasi veniam qua officiis nesciunt. Eaque.",
  },
  {
    img: <img src={Testimonial2} alt="" />,
    icon: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    name: "Timothee Chalamet",
    occupation: "Manager at Meta Inc.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, dolorem, inventore eius delectus quam maxime praesentium tenetur soluta repellendus nobis libero, illum reiciendis dicta quasi veniam qua officiis nesciunt. Eaque.",
  },
  {
    img: <img src={Testimonial3} alt="" />,
    icon: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </span>
    ),
    name: "Ian somerhalder",
    occupation: "Manager at Microsoft Inc.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, dolorem, inventore eius delectus quam maxime praesentium tenetur soluta repellendus nobis libero, illum reiciendis dicta quasi veniam qua officiis nesciunt. Eaque.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-box">
        <h1>
          What <span className="colored">Clients Say About Me?</span>
        </h1>
      </div>

      {items.map((item, index) => (
        <TestimonialItem key={index} {...item} />
      ))}
    </section>
  );
};
export default Testimonials;
