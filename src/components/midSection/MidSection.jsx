import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styles from './midSection.module.scss'

const MidSection = (props) => {
  return (
    <div className={styles.mid}>
      <div className={styles.mid__wrapper}>
        <div className={classNames(styles.mid__block,styles.mid__block_text)}>
          <div className={styles.mid__info}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
          </div>
          <div className={styles.mid__link}>
            <div className={styles.mid__link_effect_3}>
              <Link to={props.link} >{props.text_link}</Link>
            </div>
          </div>
        </div>
        <div className={classNames(styles.mid__block, styles.mid__block_img)} style={{ background: `url( ${props.img} )` 
    }}>
        </div>
      </div>
    </div>
  )
}
export default MidSection;