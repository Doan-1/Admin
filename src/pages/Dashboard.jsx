import { useState, useEffect } from "react";
import style from "../style/Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import API from "../context/Api.context";
import { Table } from "antd";

const api = new API();
const Dashboard = () => {
  const curDate = new Date();
  const curMonth = curDate.getMonth();
  const curYear = curDate.getFullYear();

  const [sales, setSales] = useState("");
  const [countProdcuts, setCountProducts] = useState("");
  const [countOrders, setCountOrders] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getTotalbyMonth(curYear, curMonth + 1).then((res) => {
      setSales(res.data);
    });
  }, [window.location.href]);
  useEffect(() => {
    api.getCountProduct().then((res) => {
      setCountProducts(res.data);
    });
  }, [window.location.href]);

  useEffect(() => {
    api.getCountCartbyStatus("da nhan don hang").then((res) => {
      setCountOrders(res.data);
    });
  }, [window.location.href]);

  useEffect(() => {
    api.getTopProduct().then((res) => {
      setProducts(res.data);
    });
  }, [window.location.href]);

  const columns = [
    {
      title: `Product's ID`,
      dataIndex: "id_product",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => a.id_product - b.id_product,
      defaultSortOrder: "ascend",
      sortDirections: ["ascend", "descend", "ascend"],
    },
    {
      title: `Product's Name`,
      dataIndex: "product_name",
      sorter: (a, b) => a.product_name.localeCompare(b.product_name),
      sortDirections: ["ascend", "descend", "ascend"],
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: `Product's Price`,
      dataIndex: "product_price",
    },
    {
      title: `Stocks`,
      dataIndex: "sold_quantity",
    },
  ];
  return (
    <div className="main">
      <div className="wrapper">
        <div className={style.heading}>
          <div className={style.heading__item}>
            <div className={style.heading__icon}>
              <FontAwesomeIcon
                icon={faMoneyBill}
                style={{ fontSize: "24px", color: "#fff" }}
              />
            </div>
            <div className={style.heading__info}>
              <h2>{sales}</h2>
              <span>Dollars</span>
            </div>
          </div>
          <div className={style.heading__item}>
            <div className={style.heading__icon}>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ fontSize: "24px", color: "#fff" }}
              />
            </div>
            <div className={style.heading__info}>
              <h2>{countOrders}</h2>
              <span>Orders</span>
            </div>
          </div>
          <div className={style.heading__item}>
            <div className={style.heading__icon}>
              <FontAwesomeIcon
                icon={faBox}
                style={{ fontSize: "24px", color: "#fff" }}
              />
            </div>
            <div className={style.heading__info}>
              <h2>{countProdcuts}</h2>
              <span>Products</span>
            </div>
          </div>
        </div>
        {/* <div className="table__products">
                    <table>
                        <tbody>
                            <tr>
                                <th>Product's ID</th>
                                <th>Product's Name</th>
                                <th>Product's Price</th>
                                <th>Stocks</th>
                            </tr>
                            {
                                products.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{product.id_product}</td>
                                            <td>{product.product_name}</td>
                                            <td>{product.product_price}</td>
                                            <td>{product.sold_quantity}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div> */}
        <div className="px-9 py-6">
          <Table columns={columns} dataSource={products} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
