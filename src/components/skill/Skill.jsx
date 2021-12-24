import React from "react";
import styles from './skill.module.scss'

const Skill = (props) => {

    return (
        <div className={styles.skill}>
            <div className={styles.skill__label} value={props.label}>
            {props.label}
            </div>
            <h3 className={styles.skill__profession}>
                {props.name}
            </h3>
            <p className={styles.skill__info}>{props.info}</p>
        </div>
    )
}
export default Skill;