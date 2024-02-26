
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";

type NavItem = {
  path: string;

  name: string;
};


export const Navbars = () => {
  const navigate = useNavigate();
   const [currentPath, setCurrentPath] = useState<string>(location.pathname);

  const navItems: NavItem[] = [
    { path: "/home", name: "Home" },
    { path: "/restaurant", name: "Our restaurant" },
    { path: "/learning", name: "Menu" },
    { path: "/location", name: "Location" },
    { path: "/profile", name: "Book a table" },
  ];

  const renderNavButton = ({ path, name }: NavItem) => (
    <button
      onClick={() => navigate(path)}
      style={{
        color: currentPath === path ? "#A1A61A" : "#444",
      }}
    >
      {name}
    </button>
  );

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <div className={styles.Wrapper}>
      {navItems.map((item) => renderNavButton(item))}
    </div>
  );
};
