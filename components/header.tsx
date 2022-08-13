import Link from "next/link";
import styles from "./Header.module.css";

interface IProps {
  pathname: string;
}

const Header = ({ pathname }: IProps) => {
  return (
    <header>
      <nav>
        <ul className={`header-list ${styles.flex}`}>
          <li>
            <Link href="/">
              <a className={pathname === "/" ? styles.active : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a className={pathname === "/users" ? styles.active : ""}>
                Users
              </a>
            </Link>
          </li>
          <li>
            <Link href="/subject/1">
              <a>Subject 1</a>
            </Link>
          </li>
          <li>
            <Link href="/subject/2">
              <a>Subject 2</a>
            </Link>
          </li>
          <li>
            <Link href="/subject/3">
              <a>Subject 3</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
