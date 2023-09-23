import styles from "../App.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;