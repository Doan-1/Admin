import { useState, useEffect } from "react";
import style from '../style/Orders.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const Orders = () => {
    return (
        <div className="main">
            <div className="wrapper">
                <h3 className={style.title}>List of customers</h3>
                <div className="table__products">
                    <table>
                        <tr>
                            <th>Orders's ID</th>
                            <th>List of items</th>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>
                                <div className={style.product__item} >
                                    <div className={style.product__img}>
                                        <img src="a" alt="" />
                                    </div>
                                    <div></div>
                                    <div className={style.product__info_detail}>
                                        <h3>a</h3>
                                        <span>a</span>
                                        <h4>a</h4>
                                        <div className={style.product__color}>
                                            <h5>Colour Shown:</h5>
                                            <span>a</span>
                                        </div>
                                        <div className={style.product__syle}>
                                            <h5>Style:</h5>
                                            <span>a</span>
                                        </div>
                                        <span className={style.product__size}>Size: a</span>
                                        <div className={style.quantity}>
                                            <span>Quantity: </span>
                                            <span className={style.quantity__number}>a</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.product__item} >
                                    <div className={style.product__img}>
                                        <img src="a" alt="" />
                                    </div>
                                    <div></div>
                                    <div className={style.product__info_detail}>
                                        <h3>a</h3>
                                        <span>a</span>
                                        <h4>a</h4>
                                        <div className={style.product__color}>
                                            <h5>Colour Shown:</h5>
                                            <span>a</span>
                                        </div>
                                        <div className={style.product__syle}>
                                            <h5>Style:</h5>
                                            <span>a</span>
                                        </div>
                                        <span className={style.product__size}>Size: a</span>
                                        <div className={style.quantity}>
                                            <span>Quantity: </span>
                                            <span className={style.quantity__number}>a</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>
                                <div className={style.product__item} >
                                    <div className={style.product__img}>
                                        <img src="a" alt="" />
                                    </div>
                                    <div></div>
                                    <div className={style.product__info_detail}>
                                        <h3>a</h3>
                                        <span>a</span>
                                        <h4>a</h4>
                                        <div className={style.product__color}>
                                            <h5>Colour Shown:</h5>
                                            <span>a</span>
                                        </div>
                                        <div className={style.product__syle}>
                                            <h5>Style:</h5>
                                            <span>a</span>
                                        </div>
                                        <span className={style.product__size}>Size: a</span>
                                        <div className={style.quantity}>
                                            <span>Quantity: </span>
                                            <span className={style.quantity__number}>a</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>
                                <div className={style.product__item} >
                                    <div className={style.product__img}>
                                        <img src="a" alt="" />
                                    </div>
                                    <div></div>
                                    <div className={style.product__info_detail}>
                                        <h3>a</h3>
                                        <span>a</span>
                                        <h4>a</h4>
                                        <div className={style.product__color}>
                                            <h5>Colour Shown:</h5>
                                            <span>a</span>
                                        </div>
                                        <div className={style.product__syle}>
                                            <h5>Style:</h5>
                                            <span>a</span>
                                        </div>
                                        <span className={style.product__size}>Size: a</span>
                                        <div className={style.quantity}>
                                            <span>Quantity: </span>
                                            <span className={style.quantity__number}>a</span>
                                        </div>
                                    </div>
                                </div>
                       
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders;