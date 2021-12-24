import React from "react";
import { Link } from "react-router-dom";
import Project from "../project/Project";
import styles from './mainProject.module.scss'
import projectOne from '../../assets/image/projectOne.png'
import projectTwo from '../../assets/image/projectTwo.png'
import projectThree from '../../assets/image/projectThree.png'
import projectFour from '../../assets/image/projectFour.png'

const MainProject = (props) => {

    const LinkP = () =>{
      if(props.link){
        return <div className={styles.main_project__link}><Link  to='/projects'><span>VIEW ALL PROJECTS</span></Link></div>
      }
      else
        return <></>
    }

  return (
    <div className={styles.main_project}>
      <div className={styles.main_project__wrapper}>
        <span>MY PROJECTS</span>
        <h2>Work that I’ve done for the past 8 years</h2>
        <div className={styles.main_project__block}>
          <Project href='/' img={projectOne} title='Restaurant Website Design' text='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one. ' />
          <Project  href='/' img={projectTwo} title='Mobile Dashboard' text='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.' />
          <Project  href='/' img={projectThree} title='CoinView Mobile App Design' text='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one. ' />
          <Project  href='/' img={projectFour} title='T-Box Mobile Design' text='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one. ' />
        </div>
        <LinkP />
      </div>
    </div>
  )
}
export default MainProject;