'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/modules/navbar.module.css";

export default function Navbar() {
  const pathname: string = usePathname();
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/" className={`${styles.item} ${pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/jobs" className={`${styles.item} ${pathname === '/jobs' ? styles.active : ''}`}>
          Jobs
        </Link>
      </li>
      <li>
        <Link href="/contact" className={`${styles.item} ${pathname === '/contact' ? styles.active : ''}`}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
