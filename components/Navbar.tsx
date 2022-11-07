import React from 'react'
import Link from 'next/link'
import style from '../styles/navbar/Navbar.module.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
type Props = {}

function Navbar({}: Props) {
  return (
    <nav className={style.navbar}>
        <Link href='/'><h1>Logo</h1></Link>
        <section>
            <div className={style.notification}>
                <NotificationsIcon />
                <sup>3</sup>
            </div>
            <div className={style.cabinet}>
                Личный кабинет
                <AccountCircleRoundedIcon />
            </div>
        </section>
    </nav>
  )
}

export default Navbar