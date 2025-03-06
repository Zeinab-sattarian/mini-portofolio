import { FaCaretRight } from "react-icons/fa";

interface BlogItemProps {
  img: string;
  title: string;
  description: string;
}

const BlogItem = ({ img, title, description }: BlogItemProps) => {
  return (
    <div className="blog-box">
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="link">
          <a href="#">Read More</a>
          <FaCaretRight />
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
