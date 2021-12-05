import Link from "next/link";
import Image from "next/image";
import "animate.css";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Footer from "./Footer";
// import {Link as Links} from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Hi 👋🏿| Jesse Beke</title>
        <link rel="icon" href="Jesse.png" />
      </Head>
      <Menu />
      <div className={styles.container}>
        <Image
          src="/Jesse.png"
          alt="Picture of the author"
          width={440}
          height={570}
          quality={100}
        />
        <h2 className="animate__animated animate__fadeInUp">
          Hi i'm <Link href="#">Jesse Beke</Link>
        </h2>
        <p className="animate__animated animate__fadeInUp">
          frontend developer
        </p>
        <Link href="/works" passHref>
          <button>Explore</button>
        </Link>
        <Footer />
      </div>
    </div>
  );
}
