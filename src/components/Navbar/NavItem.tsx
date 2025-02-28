import { ReactNode } from "react";

interface ExtraProps {
  isActive: boolean;
  hasDivider: boolean;
  onClick: () => void;
}

export interface NavItemMainProps extends ExtraProps {
  title: string;
  url: string;
  icon: ReactNode;
}

const NavItem = ({
  isActive,
  url,
  icon,
  title,
  hasDivider,
  onClick,
}: NavItemMainProps) => {
  return (
    <div className={`item${isActive ? " active" : ""}`} onClick={onClick}>
      <a href={`#${url}`}>
        {icon}
        <p>{title}</p>
      </a>
      {hasDivider && <div className="divider rtl"></div>}
    </div>
  );
};

export default NavItem;
