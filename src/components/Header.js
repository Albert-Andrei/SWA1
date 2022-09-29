import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>
        Assignment 1 - <Link href="/">Fetch</Link> | {' '}
        <Link href="/alternative">XMLHttpRequest</Link> | {' '}
        <Link href="/send">Send data</Link>
      </h1>
    </div>
  );
};

export default Header;