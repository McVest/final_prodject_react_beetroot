import React from "react";
import styles from './mainBunner.module.scss'

const MainBunner = () => {
  return (
    <div className={styles.bunner}>
      <div className={styles.bunner_wrapper}>
        <div className={styles.bunner_about}>
          <h1 className={styles.bunner_title}>Hi, I’m  Volodymyr,  web developer<br />
            <span className={styles.bunner_title_grey}>Front End Developer</span></h1>
          <p className={styles.bunner_text}>
            I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.
          </p>
        </div>
      </div>
    </div>
  )
}
export default MainBunner;