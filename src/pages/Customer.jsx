import { useState, useEffect } from "react";
import style from '../style/Customer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const Customer = () => {
    const [showCartInfo, setShowCartInfo] = useState(false)
    const handleShowInfo = () => {
        setShowCartInfo(!showCartInfo)
    }
    return (
        <div className="main">
            <div className="wrapper">
                <h3 className={style.title}>List of customers</h3>
                <div className="table__products">
                    <table>
                        <tr>
                            <th>Customer's ID</th>
                            <th>Customer's Name</th>
                            <th>Phonenumber</th>
                            <th>Address</th>
                            <th>Orders</th>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>
                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                    onClick={handleShowInfo}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                {
                    showCartInfo &&
                    <div className={style.list__product}>
                        <div className={style.product__list}>
                            <div style={{ textAlign: 'end' }}>
                                <FontAwesomeIcon icon={faXmark} style={{ fontSize: '16px', color: '#4682B4', cursor: 'pointer' }}
                                    onClick={handleShowInfo}
                                />
                            </div>
                            <h2 style={{ "textAlign": "center", "marginBottom": "36px" }}>List of customer's orders</h2>
                            <div className={style.order__table}>
                                <table>
                                    <tr>
                                        <th>Code</th>
                                        <th>Total</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>a</td>
                                        <td>a</td>
                                        <td>a</td>
                                        <td>
                                            <FontAwesomeIcon icon={faPencilSquare} style={{ fontSize: '16px', color: '#4682B4', cursor: 'pointer' }} />
                                        </td>
                                    </tr>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Customer;