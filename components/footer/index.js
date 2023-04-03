import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/elvincabbarl%C4%B1/" target="_blank">
        Elvin Cabbarlı
      </Link>
    </footer>
  );
}

export default Footer ;
