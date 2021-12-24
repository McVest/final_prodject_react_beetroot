import React from "react";
import Job from "../job/Job";
import styles from './experience.module.scss'

const Experience = () => {

    return (
        <div className={styles.experience}>
            <div className={styles.experience__wrapper}>
                <div className={styles.experience__info}>
                    <span>WORK EXPERIENCE</span>
                    <h2>Companies I have worked for in the past.</h2>
                </div>
                <div className={styles.experience__job}>
                    <Job label='01' company='Google' profession='Interaction Designer' info='I currently am the lead designer on the interaction design team for Google Play.' />
                    <Job label='02' company='Facebook' profession='Product Designer' info='I’ve worked on a wide variety of internal tools for facebook over the past 6 years.' />
                    <Job label='03' company='Dribbble' profession='Graphic Designer' info='I started my design career with Dribbble. I was incharge of creating illustrations for the platform.' />
                </div>
            </div>
        </div>
    )
}
export default Experience;