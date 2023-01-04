import { useState, useEffect } from "react";
import style from "../style/Customer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import API from "../context/Api.context";
import CustomerOrder from "../components/CustomerOrder";
import { Table } from "antd";

const api = new API();
const Customer = () => {
  const [showCartInfo, setShowCartInfo] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.getUser().then((res) => {
      console.log(res.data);
      setCustomers(res.data);
    });
  }, [window.location.href]);
  const handleShowInfo = (id) => {
    setShowCartInfo(!showCartInfo);
    if (!showCartInfo) {
      api.getCartbyIDuser(id).then((res) => {
        console.log("res.data :>> ", res.data);
        setOrders(res.data);
      });
    }
  };
  const columns = [
    {
      title: `Customer's ID`,
      dataIndex: "id_user",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => a.id_product - b.id_product,
      defaultSortOrder: "ascend",
      sortDirections: ["ascend", "descend", "ascend"],
    },
    {
      title: `Customer's Name`,
      dataIndex: "user_name",
      sorter: (a, b) => a.product_name.localeCompare(b.product_name),
      sortDirections: ["ascend", "descend", "ascend"],
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: `Phonenumber`,
      dataIndex: "user_phone",
    },
    {
      title: `Address`,
      dataIndex: "user_address",
    },
    {
      title: `Email`,
      dataIndex: "user_email",
    },
    {
      title: `Action`,
      render: (item) => (
        <FontAwesomeIcon
          icon={faPencilSquare}
          style={{ cursor: "pointer" }}
          onClick={() => handleShowInfo(item.slug)}
        />
      ),
    },
  ];
  return (
    <div className="main">
      <div className="wrapper">
        <h3 className={style.title}>List of customers</h3>
        {/* <div className="table__products">
                    <table>
                        <tbody>
                            <tr>
                                <th>Customer's ID</th>
                                <th>Customer's Name</th>
                                <th>Phonenumber</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Orders</th>
                            </tr>
                            {
                                customers.map((customer, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{customer.id_user}</td>
                                            <td>{customer.user_name}</td>
                                            <td>{customer.user_phone}</td>
                                            <td>{customer.user_address}</td>
                                            <td>{customer.user_email}</td>
                                            <td>
                                                <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                                    onClick={() => handleShowInfo(customer.id_user)}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div> */}
        <div className="px-9 py-6">
          <Table columns={columns} dataSource={customers} />
        </div>
        {showCartInfo && (
          <div className={style.list__product}>
            <div className={style.product__list}>
              <div style={{ textAlign: "end" }}>
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    fontSize: "16px",
                    color: "#4682B4",
                    cursor: "pointer",
                  }}
                  onClick={handleShowInfo}
                />
              </div>
              <h2 style={{ textAlign: "center", marginBottom: "36px" }}>
                List of customer's orders
              </h2>
              <div className={style.order__table}>
                <table>
                  <tbody>
                    <tr>
                      <th>Code</th>
                      <th>Total</th>
                      <th>PhoneNumber</th>
                      <th>Address</th>
                      <th>Status</th>
                      {/* <th></th> */}
                    </tr>
                    {orders.map((order, index) => {
                      return (
                        <CustomerOrder pros={{ order, index }} />
                        // <tr key={index}>
                        //     <td>{order.id_cart}</td>
                        //     <td>{order.total}</td>
                        //     <td>{order.phone}</td>
                        //     <td>{order.address}</td>
                        //     <td>
                        //         <select value={order.status} style={{"width": "100%", "height": "100%", "flex": "1", "fontSize": "14px", "outline": "none", "border": "none"}}>
                        //             <option value="da nhan don hang">Đã nhận đơn hàng</option>
                        //             <option value="da giao hang">Đã giao hàng</option>
                        //         </select>
                        //     </td>
                        //     {/* <td>
                        //         <FontAwesomeIcon icon={faPencilSquare} style={{ fontSize: '12px', color: '#4682B4', cursor: 'pointer' }} />
                        //     </td> */}
                        // </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Customer;
