import { ReactNode } from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import B01Navigation from "../blocks/b01-navigation/B01Navigation";

export interface LayoutProps {
  title?: string;
  description: string;
  children?: ReactNode;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <B01Navigation />
        <main className={styles.contentWrapper}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
