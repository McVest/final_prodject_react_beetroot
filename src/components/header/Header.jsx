import React, { useState } from "react";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import styles from './header.module.scss'
import { CloseOutline, MenuOutline } from 'react-ionicons'

const Header = () => {

	const [openMode, setOpenMode] = useState(false);

	const toggleBurger = () => {
		setOpenMode(!openMode);
	}
	const Open = () => {
		if (!openMode) {
			return (<MenuOutline
				color={'#00000'}
				title={''}
				height="35px"
				width="35px"
				onClick={toggleBurger}
				className={styles.header__toggle}
				id={styles.toggle_menu}
			/>)
		}
		else {
			return (<CloseOutline
				color={'#00000'}
				title={''}
				height="35px"
				width="35px"
				onClick={toggleBurger}
				className={styles.header__toggle}
				id={styles.toggle_menu}
			/>)
		}
	}

	return (
		<header className={styles.header}>
			<Logo />
			<Menu open={openMode} />
			<Open open={openMode} />
		</header>
	)
}
export default Header;