import Link from "next/link";
import React from "react";
import styles from "@/styles/Navigation.module.css";

const routes = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Users",
    url: "/users",
  },
];

const Navigation = () => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          {routes.map((route) => {
            return (
              <li key={route.url}>
                <Link href={route.url}>{route.title}</Link>
              </li>
            );
          })}
        </nav>
      </header>
    </>
  );
};

export default Navigation;
