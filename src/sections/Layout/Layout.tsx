import React from "react";
import Footer from "../Footer/Footer";
import styles from "../../styles/Home.module.css";

interface Props {
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
