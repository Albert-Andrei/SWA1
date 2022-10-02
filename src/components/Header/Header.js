import React from "react";
import Link from "next/link";
import styles from  './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 style={{margin: 0, padding: 0, marginRight: 20, fontWeight: 550}}>
      <Link href="/">
         SWA1
        </Link>
      </h1>
        <Link href="/">
          <p>
            Fetch
          </p></Link> 
        <Link href="/alternative"><p>XMLHttpRequest</p></Link>
        <Link href="/send"><p>Send data</p></Link>
    </div>
  );
};

export default Header;