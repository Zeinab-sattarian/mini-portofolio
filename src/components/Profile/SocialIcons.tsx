import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const items = [
  { icon: <FaGithub /> },
  { icon: <FaFacebook /> },
  { icon: <FaInstagram /> },
  { icon: <FaLinkedin /> },
];

const SocialIcons = () => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <span>
            <a href="#">{item.icon}</a>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
