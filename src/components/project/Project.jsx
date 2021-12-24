import React from "react";
import styles from './project.module.scss'
const Project = (props) => {

  return (
    <>
      <a href={props.href} className={styles.project}>
        <div className={styles.project__wrapper}>
          <div className={styles.project__img}>
            <img src={props.img} alt="" />
          </div>
          <div className={styles.project__text}>
           <div className={styles.project__info}>
              <h3>{props.title}</h3>
              <p>{props.text}</p>
           </div>
          </div>
        </div>
      </a>
    </>
  )
}
export default Project;