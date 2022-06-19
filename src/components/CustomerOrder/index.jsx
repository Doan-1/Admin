import { useState, useEffect } from "react";
import style from '../../style/Customer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import API from "../../context/Api.context";

const api = new API()
const CustomerOrder = ({pros}) => {
    const {order, index} = pros;
    const [state, setState] = useState(order.status)
    
    const handleUpdate = (e) => {
        setState(e)
        api.updateCartStatus(order.id_cart, e)
    }
    return (
        <tr key={index}>
        <td>{order.id_cart}</td>
        <td>{order.total}</td>
        <td>{order.phone}</td>
        <td>{order.address}</td>
        <td>
            <select value={state} onChange={e => handleUpdate(e.target.value)} style={{"width": "100%", "height": "100%", "flex": "1", "fontSize": "14px", "outline": "none", "border": "none"}}>
                <option value="da nhan don hang">Đã nhận đơn hàng</option>
                <option value="da giao hang">Đã giao hàng</option>
            </select>
        </td>
        {/* <td>
            <FontAwesomeIcon icon={faPencilSquare} style={{ fontSize: '12px', color: '#4682B4', cursor: 'pointer' }} />
        </td> */}
    </tr>
    )
}


export default CustomerOrder;