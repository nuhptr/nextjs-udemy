import Link from "next/link";

import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={styles.box}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={"/blog"}>
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={"/users"}>
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
