import React from "react";
import Navigation from "../Navigation";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => {
    return (
          <div className={styles.container}>
            <Navigation />
            <main className={styles.mainContent}>
              {children}
            </main>
            {/* Optionally, you can add a footer component here later */}
          </div>
        );
}

export default Layout;
