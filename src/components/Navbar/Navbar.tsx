import NavItem, { NavItemMainProps } from "./NavItem";
import { CgProfile } from "react-icons/cg";
import {
  IoFileTrayStackedOutline,
  IoLayersOutline,
  IoReaderOutline,
} from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { CiDark, CiLight } from "react-icons/ci";
import useActiveItem from "../../hooks/useActiveItem";
import { useTheme } from "../../providers/ThemeProvider";

const Navbar = () => {
  const theme = useTheme();

  const { activeItemIndex, handleActiveItem } = useActiveItem();

  const items: Omit<NavItemMainProps, "isActive" | "onClick">[] = [
    {
      url: "about",
      icon: <CgProfile />,
      title: "About",
      hasDivider: true,
    },
    {
      url: "resume",
      icon: <IoFileTrayStackedOutline />,
      title: "Resume",
      hasDivider: true,
    },
    {
      url: "projects",
      icon: <IoLayersOutline />,
      title: "Projects",
      hasDivider: true,
    },
    {
      url: "blogs",
      icon: <IoReaderOutline />,
      title: "Blogs",
      hasDivider: true,
    },
    {
      url: "contact",
      icon: <IoIosContact />,
      title: "Contact",
      hasDivider: true,
    },
  ];

  return (
    <nav className="navbar">
      <div className="box theme">
        <div className="item" onClick={theme?.toggleTheme}>
          {theme?.darkMode === "light" ? <CiDark /> : <CiLight />}
        </div>
      </div>

      <div className="box nav">
        {items.map((item, index) => (
          <NavItem
            key={index}
            {...item}
            isActive={index === activeItemIndex}
            onClick={() => handleActiveItem(index)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
