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
      setCustomers(res.data);
    });
  }, [window.location.href]);
  const handleShowInfo = (id) => {
    setShowCartInfo(!showCartInfo);
    console.log("test");
    if (!showCartInfo) {
      api.getCartbyIDuser(id).then((res) => {
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
      dataIndex: "id_user",
      render: (id_user) => (
        <FontAwesomeIcon
          icon={faPencilSquare}
          style={{ cursor: "pointer" }}
          onClick={() => handleShowInfo(id_user)}
        />
      ),
    },
  ];
  return (
    <div className="main">
      <div className="wrapper">
        <h3 className={style.title}>List of customers</h3>
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
                      return <CustomerOrder pros={{ order, index }} />;
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
