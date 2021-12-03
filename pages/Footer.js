import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        src="/github.png"
        alt="Picture of the author"
        width={40}
        height={40}
        quality={100}
      />
      <span className={styles.spacer}></span>
      <Image
        src="/gmail.png"
        alt="Picture of the author"
        width={40}
        height={40}
        quality={100}
      />
      <span className={styles.spacer}></span>
      <Image
        src="/twitter.png"
        alt="Picture of the author"
        width={40}
        height={30}
        quality={100}
      />
    </div>
  );
};

export default Footer;
