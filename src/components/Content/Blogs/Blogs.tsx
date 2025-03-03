import blog1 from "../../../img/blog-1.png";
import blog2 from "../../../img/blog-2.png";
import blog3 from "../../../img/blog-3.png";
import blog4 from "../../../img/blog-4.png";
import BlogItem from "./BlogItem";
import "../../../style.css";

const items = [
  {
    img: <img src={blog1} alt="" />,
    title: "Web Design Tools",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt consequatur nostrum tenetur.Alias, est ad minus nisi iure necessitatibus et doloremque praesentium? Nihil eos nesciunt rerum inrecusandae modi.",
  },
  {
    img: <img src={blog2} alt="" />,
    title: "How to Develop WordPress Plugin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt consequatur nostrum tenetur.Alias, est ad minus nisi iure necessitatibus et doloremque praesentium? Nihil eos nesciunt rerum inrecusandae modi.",
  },
  {
    img: <img src={blog3} alt="" />,
    title: "What is Bootstrap",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt consequatur nostrum tenetur.Alias, est ad minus nisi iure necessitatibus et doloremque praesentium? Nihil eos nesciunt rerum inrecusandae modi.",
  },
  {
    img: <img src={blog4} alt="" />,
    title: "What is Laravel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt consequatur nostrum tenetur.Alias, est ad minus nisi iure necessitatibus et doloremque praesentium? Nihil eos nesciunt rerum inrecusandae modi.",
  },
];

const Blogs = () => {
  return (
    <section className="projects">
      {items.map((item, index) => (
        <BlogItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Blogs;
