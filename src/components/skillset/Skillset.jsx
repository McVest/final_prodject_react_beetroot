import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styles from './skillset.module.scss'

const Skillset = () => {

  return (
    <div className={classNames(styles.skillset)}>
      <div className={classNames(styles.skillset__wrapper)}>
        <div className={styles.skillset__block}>
          <h2>Skills & Experience</h2>
          <p>Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.</p>
          <p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
          <p>I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .</p>
          <p>Visit my
            <a className={styles.skillset__link} href="https://www.linkedin.com/in/jacek-jeznach-0a99b640"> LinkedIn </a>
            profile for more details or just <Link className={styles.skillset__link} to="/contact">contact</Link> me.</p>
        </div>
        <div className={styles.skillset__block}>
          <div className={styles.skills}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>HTML</div>
              <div className={styles.skill_bar}>
                <div className={styles.skill_per} per="90%" style={{ maxWidth: '85%' }} ></div>
              </div>
            </div>
          </div>

          <div className={styles.skills}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>CSS</div>
              <div className={styles.skill_bar}>
                <div className={styles.skill_per} per="75%" style={{ maxWidth: '75%' }} ></div>
              </div>
            </div>
          </div>

          <div className={styles.skills}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>JS</div>
              <div className={styles.skill_bar}>
                <div className={styles.skill_per} per="65%" style={{ maxWidth: '65%' }} ></div>
              </div>
            </div>
          </div>

          <div className={styles.skills}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>React</div>
              <div className={styles.skill_bar}>
                <div className={styles.skill_per} per="60%" style={{ maxWidth: '60%' }} ></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Skillset;