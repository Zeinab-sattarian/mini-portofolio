import { ReactNode } from "react";
import { FaCaretRight } from "react-icons/fa";
import "../../../style.css";

interface BlogItemProps {
  img: ReactNode;
  title: string;
  description: string;
}

const BlogItem = ({ img, title, description }: BlogItemProps) => {
  return (
    <div className="blog-box">
      {img}
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
