import { IoMdCall } from "react-icons/io";
import { IoFileTrayFull } from "react-icons/io5";

const items = [
  { title: "My Resume", icon: <IoFileTrayFull /> },
  { title: "Contact Me", icon: <IoMdCall /> },
];

const FooterTable = () => {
  return (
    <table>
      <tr>
        {items.map((item, index) => (
          <td key={index}>
            <a href="#">
              {item.title} {item.icon}
            </a>
          </td>
        ))}
      </tr>
    </table>
  );
};

export default FooterTable;
