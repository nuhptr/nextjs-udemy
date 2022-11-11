import Head from "next/head";
import { ReactNode } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "../Layout/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
  pageTittle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTittle } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTittle}</title>
        <meta name="description" content="Learn NextJS Basic" />
      </Head>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
