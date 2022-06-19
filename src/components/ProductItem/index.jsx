import { useState, useEffect } from "react";
import style from '../../style/Products.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import API from "../../context/Api.context";
import { Link } from "react-router-dom";

const api = new API();
const ProductItem = ({ pros }) => {
    const { product, id, setId, name, setName, price, setPrice, slug, setSlug, soldQuantity, setSoldQuantity, status, setStatus, handleShowInfo } = pros;

    // useEffect = (() => {
    //     // setId(product.id_product);
    //     // setName(product.product_name);
    //     // setPrice(product.product_price);
    //     // setSoldQuantity(product.sold_quantity);
    //     // setStatus(product.status);
    //     // setSlug(product.slug);
    //     console.log(pros);
    // }, [window.location.href])
    // setId(product.id_product);
    const [statusProduct, setStatusProduct] = useState(product.status)
    const handleChange = (e) => {
        setStatusProduct(e);
        api.updateProductStatus(product.id_product, e);
    }
    return (
        <tr>
            <td>{product.id_product}</td>
            <td>{product.product_name}</td>
            <td>{product.product_price}</td>
            <td>{product.sold_quantity}</td>
            <td>
                <select value={statusProduct} onChange={e => handleChange(e.target.value)} style={{ "width": "100%", "height": "100%", "flex": "1", "fontSize": "14px", "outline": "none", "border": "none", "color" : "#4682B4"}}>
                    <option value="con hang">Còn hàng</option>
                    <option value="het hang">Hết hàng</option>
                </select>
            </td>
            <td>
                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                    onClick={() => handleShowInfo(product.slug)}
                />
            </td>
        </tr>
    )
}

export default ProductItem;