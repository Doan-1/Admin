import { useState, useEffect } from "react";
import style from '../style/Dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                <div className={style.heading}>
                    <div className={style.heading__item}>
                        <div className={style.heading__icon}>
                            <FontAwesomeIcon icon={faMoneyBill} style={{ fontSize: "24px", color: "#fff" }} />
                        </div>
                        <div className={style.heading__info}>
                            <h2>500</h2>
                            <span>Dollars</span>
                        </div>
                    </div>
                    <div className={style.heading__item}>
                        <div className={style.heading__icon}>
                            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "24px", color: "#fff" }} />
                        </div>
                        <div className={style.heading__info}>
                            <h2>2</h2>
                            <span>Orders</span>
                        </div>
                    </div>
                    <div className={style.heading__item}>
                        <div className={style.heading__icon}>
                            <FontAwesomeIcon icon={faBox} style={{ fontSize: "24px", color: "#fff" }} />
                        </div>
                        <div className={style.heading__info}>
                            <h2>4</h2>
                            <span>Products</span>
                        </div>
                    </div>
                </div>
                <div className={style.table__products}>
                    <table>
                        <tr>
                            <th>Product's ID</th>
                            <th>Product's Name</th>
                            <th>The number of products</th>
                            <th>Stocks</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }} />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;