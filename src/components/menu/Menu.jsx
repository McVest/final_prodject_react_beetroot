import React from "react";
import { Link } from "react-router-dom";
import styles from './menu.module.scss'

const Menu = (props) => {
  const menuLink = [
    {
      link: '/',
      title: 'Home'
    },
    {
      link: '/comments',
      title: 'Comments'
    },
    {
      link: '/about',
      title: 'About'
    },
    {
      link: '/projects',
      title: 'Projects'
    },
    {
      link: '/authorization',
      title: 'Authorization'
    },
  ]
  
  return (
    <>
      <nav className={
        props.open
          ? styles.nav + ' ' + styles.nav__show
          : styles.nav}
        id={styles.nav_menu}>
        <ul className={styles.nav__list}>
          {menuLink.map((item, index) => (
            <li key={'menu__item-' + index} className={styles.nav__item} >
              <Link className={styles.nav__link} to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
export default Menu;