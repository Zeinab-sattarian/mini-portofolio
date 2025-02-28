import { useEffect, useState } from "react";
import NavItem, { NavItemMainProps } from "./NavItem";
import { CgProfile } from "react-icons/cg";
import {
  IoFileTrayStackedOutline,
  IoLayersOutline,
  IoReaderOutline,
} from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<"light" | "dark">("dark");
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  const theme = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
    if (darkMode === "dark") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  const handleActiveItem = (itemIndex: number) => {
    setActiveItemIndex(itemIndex);
  };

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

  useEffect(() => {
    console.log(activeItemIndex, items[activeItemIndex]);
  }, [activeItemIndex]);

  return (
    <nav className="navbar">
      <div className="box theme">
        <div className="item" onClick={theme}>
          {darkMode === "light" ? <CiDark /> : <CiLight />}
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
