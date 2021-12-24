import React from "react";
import styles from './job.module.scss'

const Job = (props) => {
  return (
    <div className={styles.job}>
      <div className={styles.job__label}>
        {props.label}
      </div>
      <h3 className={styles.job__profession}>
        <span className={styles.job__company}>{props.company}</span>
        , {props.profession}
      </h3>
      <p className={styles.job__info}>{props.info}</p>
    </div>
  )
}
export default Job;