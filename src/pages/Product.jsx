import { useState, useEffect } from "react";
import style from '../style/Products.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const Product = () => {
    const [showCartInfo, setShowCartInfo] = useState(false)
    const handleShowInfo = () => {
        setShowCartInfo(!showCartInfo)
    }
    return (
        <div className="main">
            <div className="wrapper">
                <h3 className={style.title}>List of products</h3>
                <div className="table__products">
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
                            <h2 style={{ "textAlign": "center", "margin": "0 0 16px 0" }}>Detail information of product</h2>
                            <div className={style.product__item} >
                                <div className={style.product__info_detail}>
                                    <div style={{ "display": "grid", "gridTemplateColumns": "60% 40%" }}>
                                        <div style={{"marginBottom": "16px", "display":"flex"}} >
                                            <label htmlFor="" style={{"fontSize": "14px"}}>Product's name:</label>
                                            <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                        </div>
                                        <div style={{"marginBottom": "16px", "display":"flex"}} >
                                            <label htmlFor="" style={{"fontSize": "14px"}}>Product's price:</label>
                                            <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                        </div>
                                    </div>
                                    <div style={{"marginBottom": "16px", "display":"flex"}} >
                                        <label htmlFor="" style={{"fontSize": "14px"}}>Slug:</label>
                                        <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                    </div>
                                    <div style={{ "display": "grid", "gridTemplateColumns": "50% 50%" }}>
                                        <div style={{"marginBottom": "16px", "display":"flex"}} >
                                            <label htmlFor="" style={{"fontSize": "14px"}}>Categories:</label>
                                            <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                        </div>
                                        <div style={{"marginBottom": "16px", "display":"flex"}} >
                                            <label htmlFor="" style={{"fontSize": "14px"}}>Classify:</label>
                                            <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                        </div>
                                    </div>
                                    <div style={{ "display": "grid", "gridTemplateColumns": "50% 50%" }}>
                                        <div style={{"marginBottom": "16px", "display":"flex"}} >
                                            <label htmlFor="" style={{"fontSize": "14px"}}>Colors:</label>
                                            <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                        </div>
                                        <div style={{"marginBottom": "16px", "display":"flex"}} >
                                            <label htmlFor="" style={{"fontSize": "14px"}}>Style:</label>
                                            <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                        </div>
                                    </div>
                                    <div style={{ "display": "grid", "gridTemplateColumns": "50% 50%" }}>
                                        <div style={{"marginBottom": "16px", "display":"flex"}} >
                                            <label htmlFor="" style={{"fontSize": "14px"}}>Discount:</label>
                                            <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                        </div>
                                        <div style={{"marginBottom": "16px", "display":"flex"}} >
                                            <label htmlFor="" style={{"fontSize": "14px"}}>Discount percents:</label>
                                            <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                        </div>
                                    </div>
                                    <div style={{"marginBottom": "16px", "display":"flex"}} >
                                        <label htmlFor="" style={{"fontSize": "14px"}}>Thumbnail:</label>
                                        <input type="text" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}} />
                                    </div>
                                    <div style={{"marginBottom": "16px", "display":"flex"}} >
                                        <label htmlFor="" style={{"fontSize": "14px"}}>Description:</label>
                                        <textarea name="" id="" cols="100" rows="3" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}}></textarea>
                                    </div>
                                    <div style={{"marginBottom": "16px", "display":"flex"}} >
                                        <label htmlFor="" style={{"fontSize": "14px"}}>Detail information:</label>
                                        <textarea name="" id="" cols="100" rows="3" style={{"margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none"}}></textarea>
                                    </div>

                                </div>
                            </div>
                            <div className={style.update__btn}>
                                <button>Update</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Product;