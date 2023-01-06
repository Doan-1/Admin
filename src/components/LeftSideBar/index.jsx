import { useState } from "react";
import style from "./LeftSideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpg";

const LeftSideBar = () => {
  return (
    <div className={style.left__sidebar}>
      <div className={style.logo}>
        <img src={logo} alt="" />
        {/* <h2>SHOE SHOP</h2> */}
      </div>
      <div className={style.menu}>
        <ul className={style.menu__list}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li className={style.menu__item}>
              <div className={style.menu__icon}>
                <FontAwesomeIcon icon={faDashboard} />
              </div>
              <span> Dashboard</span>
            </li>
          </Link>
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <li className={style.menu__item}>
              <div className={style.menu__icon}>
                <FontAwesomeIcon icon={faBox} />
              </div>
              <span>Products</span>
            </li>
          </Link>
          <Link to={"/customers"} style={{ textDecoration: "none" }}>
            <li className={style.menu__item}>
              <div className={style.menu__icon}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <span>Customers</span>
            </li>
          </Link>
          <Link to={"/orders"} style={{ textDecoration: "none" }}>
            <li className={style.menu__item}>
              <div className={style.menu__icon}>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <span>Orders</span>
            </li>
          </Link>
          {/* <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <li className={style.menu__item}>
                            <div className={style.menu__icon}>
                                <FontAwesomeIcon icon={faChartArea} />
                            </div>
                            <span>Analytics</span>
                        </li>
                    </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
