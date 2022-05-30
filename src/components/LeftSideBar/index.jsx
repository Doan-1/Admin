import { useState } from 'react';
import style from './LeftSideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.jpg'

const LeftSideBar = () => {
    return (
        <div className={style.left__sidebar}>
            <div className={style.logo}>
                <img src={logo} alt="" />
                {/* <h2>SHOE SHOP</h2> */}
            </div>
            <div className={style.menu}>
                <h4>MENU</h4>
                <ul className={style.menu__list}>
                    <li className={style.menu__item}>
                        <div className={style.menu__icon}>
                            <FontAwesomeIcon icon={faDashboard} />
                        </div>
                        <span> Dashboard</span>
                    </li>
                    <li className={style.menu__item}>
                        <div className={style.menu__icon}>
                            <FontAwesomeIcon icon={faBox} />
                        </div>
                        <span>Products</span>
                    </li>
                    <li className={style.menu__item}>
                        <div className={style.menu__icon}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <span>Customers</span>
                    </li>
                    <li className={style.menu__item}>
                        <div className={style.menu__icon}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <span>Orders</span>
                    </li>
                    <li className={style.menu__item}>
                        <div className={style.menu__icon}>
                            <FontAwesomeIcon icon={faChartArea} />
                        </div>
                        <span>Analytics</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSideBar;