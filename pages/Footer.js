import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
     <Link href="#" passHref>
      <Image
        src="/github.png"
        alt="Picture of the author"
        width={40}
        height={40}
        quality={100}
      />
      </Link>
      <span className={styles.spacer}></span>
      <Link href="#" passHref>
      <Image
        src="/gmail.png"
        alt="Picture of the author"
        width={40}
        height={40}
        quality={100}
      />
      </Link>
      <span className={styles.spacer}></span>
      <Link href="#" passHref>
      <Image
        src="/twitter.png"
        alt="Picture of the author"
        width={40}
        height={30}
        quality={100}
      />
      </Link>
    </div>
  );
};

export default Footer;
