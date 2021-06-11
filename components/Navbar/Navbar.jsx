import styled from "styled-components";
import Link from "next/link";
import { data } from "./data";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={`blue`}>
      <div className="container">
        <div className={`nav-wrapper`}>
          <div className={"brand-logo left"}>
            <Link href="/">Logo</Link>
          </div>
          <ul id="navMobile" className="left hide-on-med-and-down right">
            {data.map(({ title, link }, index) => (
              <li key={`menu-item-${index}`}>
                <Link href={link}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
