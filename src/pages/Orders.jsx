import { useState, useEffect } from "react";
import style from '../style/Orders.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import API from "../context/Api.context";

const api = new API();
const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        api.getCartInfo().then(res => {
            setOrders(res.data);
        })
    })
    return (
        <div className="main">
            <div className="wrapper">
                <h3 className={style.title}>List of orders</h3>
                <div className="table__products">
                    <table>
                        <tbody>

                            <tr>
                                <th>Orders's ID</th>
                                <th>List of items</th>
                            </tr>
                            {
                                orders.map((order, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{order.id_cart}</td>
                                            <td>
                                                {
                                                    order.orders.map((item, index) => {
                                                        return (
                                                            <div className={style.product__item} >
                                                                <div className={style.product__img}>
                                                                    <img src={item.thumbnail || 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png'} alt="" />
                                                                </div>
                                                                <div></div>
                                                                <div className={style.product__info_detail}>
                                                                    <h3>{item.product_name}</h3>
                                                                    {/* <span>{item.}</span> */}
                                                                    <h4>{item.product_price}</h4>
                                                                    <div className={style.product__color}>
                                                                        <h5>Colour Shown:</h5>
                                                                        <span>{item.color}</span>
                                                                    </div>
                                                                    <div className={style.product__syle}>
                                                                        <h5>Style:</h5>
                                                                        <span>{item.style}</span>
                                                                    </div>
                                                                    <span className={style.product__size}>Size: {item.size}</span>
                                                                    <div className={style.quantity}>
                                                                        <span>Quantity: </span>
                                                                        <span className={style.quantity__number}>{item.quantity}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders;