import { useState, useEffect } from "react";
import style from "../style/Products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import API from "../context/Api.context";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { PlusOutlined } from "@ant-design/icons";
import { Table, Select, Input, Row, Col, message, Image, Tag } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const Product = () => {
  const time = new Date();
  const api = new API();
  const [showCartInfo, setShowCartInfo] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.getProduct().then((res) => {
      setProducts(res.data);
    });
  }, [window.location.href]);
  // const [product, setProduct] = useState({})
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState(0);
  const [slug, setSlug] = useState("");
  const [instock, setInStock] = useState(1);
  const [category, setCategory] = useState("");
  const [classify, setClassify] = useState("");
  const [color, setColor] = useState("");
  const [styles, setStyle] = useState("");
  const [discount, setDiscount] = useState(false);
  const [discountPercent, setDiscountPercent] = useState("");
  const [listImages, setListImages] = useState([]);
  const [description, setDescription] = useState("");
  const [detailDescription, setDetailDescription] = useState("");
  const [soldQuantity, setSoldQuantity] = useState("");
  const [status, setStatus] = useState("");
  const handleShowInfo = (slug) => {
    setShowCartInfo(!showCartInfo);
    if (!showCartInfo === true) {
      api.getProductbySlug(slug).then((res) => {
        setId(res.data.id_product);
        setName(res.data.product_name);
        setPrice(res.data.product_price);
        setNumber(res.data.quantity);
        setSlug(res.data.slug);
        setCategory(res.data.categories);
        setClassify(res.data.classify);
        setColor(res.data.color);
        setStyle(res.data.style);
        setListImages(res.data.listImage);
        setDiscount(res.data.discount);
        setDiscountPercent(res.data.discount_percent);
        setDescription(res.data.description || "");
        setDetailDescription(res.data.detail_info || "");
        setStatus(res.data.status || "");
        // setProduct(res.data)
        console.log(res.data);
      });
    }
  };
  // updateProduct(name,price,description,slug,category,col,sty,detail,disc,disc_percent,clas )
  const handleUpdateProduct = () => {
    console.log(
      id,
      name,
      price,
      slug,
      category,
      classify,
      color,
      styles,
      discount,
      discountPercent,
      description,
      detailDescription,
      number
    );
    api.updateProduct(
      id,
      name,
      price,
      description,
      slug,
      category,
      color,
      styles,
      detailDescription,
      discount,
      discountPercent,
      classify,
      number
    );
    // window.location.reload();
  };

  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Please fill all information about your order.",
      className: "mt-24",
    });
  };

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
    {
      title: `Status`,
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color = status === "con hang" ? "geekblue" : "green";
        return (
          <span>
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          </span>
        );
      },
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h3 className={style.title}>List of products</h3>
          <Link to={"/addproduct"}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              style={{ color: "#4682B4", cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className="px-9 py-6">
          <Table columns={columns} dataSource={products} />
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
              <h2 className="text-xl font-bold mb-2 text-center">
                Detail information of product
              </h2>
              <div layout="horizontal">
                <Row className="grid grid-cols-11 gap-2 mb-2">
                  <Col className="col-start-2 col-span-6">
                    <span>Product Name</span>
                    <Input
                      className="flex-1 mt-4"
                      value={name}
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Col>
                  <Col className="col-start-8 col-span-3">
                    <span>Product Price</span>
                    <Input
                      className="flex-1 mt-4"
                      value={price}
                      type="number"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="grid grid-cols-11 gap-2 mb-2">
                  <Col className="col-start-2 col-span-3">
                    <span>Number Product</span>
                    <Input
                      className="flex-1 mt-4"
                      value={number}
                      type="number"
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                    />
                  </Col>
                  <Col className="col-start-5 col-span-6">
                    <span>Slug</span>
                    <Input
                      className="flex-1 mt-4"
                      value={slug}
                      type="text"
                      onChange={(e) => {
                        setSlug(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="grid grid-cols-11 gap-2 mb-2">
                  <Col className="col-start-2 col-span-4 flex flex-col">
                    <span>Categories</span>
                    <Select
                      className="mt-4"
                      defaultValue={category}
                      onChange={(value) => {
                        setCategory(value);
                      }}
                      options={[
                        {
                          value: "New-Arrivals",
                          label: "New-Arrivals",
                        },
                        {
                          value: "Women",
                          label: "Women",
                        },
                        {
                          value: "Man",
                          label: "Man",
                        },
                        {
                          value: "Kids",
                          label: "Kids",
                        },
                        {
                          value: "Sales",
                          label: "Sales",
                        },
                      ]}
                    />
                  </Col>
                  <Col className="col-start-7 col-span-4">
                    <span>Classify</span>
                    <Input
                      className="flex-1 mt-4"
                      value={classify}
                      type="text"
                      onChange={(e) => {
                        setClassify(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="grid grid-cols-11 gap-2 mb-2">
                  <Col className="col-start-2 col-span-4">
                    <span>Style</span>
                    <Input
                      className="flex-1 mt-4"
                      value={styles}
                      type="text"
                      onChange={(e) => {
                        setStyle(e.target.value);
                      }}
                    />
                  </Col>
                  <Col className="col-start-7 col-span-4">
                    <span>Color</span>
                    <Input
                      className="flex-1 mt-4"
                      value={color}
                      type="text"
                      onChange={(e) => {
                        setColor(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="grid grid-cols-11 gap-2 mb-2">
                  <Col className="col-start-2 col-span-4 flex flex-col">
                    <span>Discount</span>
                    <Select
                      className="mt-4"
                      value={discount}
                      onChange={(value) => {
                        setDiscount(value);
                      }}
                      options={[
                        {
                          value: true,
                          label: "true",
                        },
                        {
                          value: false,
                          label: "false",
                        },
                      ]}
                    />
                  </Col>
                  <Col className="col-start-7 col-span-4">
                    <span>Discount Percent</span>
                    <Input
                      className="flex-1 mt-4"
                      value={discountPercent}
                      type="number"
                      onChange={(e) => {
                        setDiscountPercent(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="grid grid-cols-11 gap-2 mb-2 mt-4">
                  <Col className="col-start-2 col-span-9">
                    <Image.PreviewGroup>
                      {listImages.map((image) => {
                        return (
                          <Image
                            preview={false}
                            className="px-4"
                            width={160}
                            src={image}
                          />
                        );
                      })}
                    </Image.PreviewGroup>
                  </Col>
                </Row>
                <Row className="grid grid-cols-11 gap-2 mb-2">
                  <Col className="col-start-2 col-span-9">
                    <span>Description</span>
                    <Input.TextArea
                      className="mt-4"
                      rows={2}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="grid grid-cols-11 gap-2 mb-2">
                  <Col className="col-start-2 col-span-9">
                    <span>Detail Description</span>
                    <Input.TextArea
                      className="mt-4"
                      rows={5}
                      value={detailDescription}
                      onChange={(e) => setDetailDescription(e.target.value)}
                    />
                  </Col>
                </Row>
              </div>
              {contextHolder}
              <div className={style.update__btn}>
                <button onClick={handleUpdateProduct}>Update Product</button>
              </div>
              {/* <h2 style={{ textAlign: "center", margin: "0 0 16px 0" }}>
                Detail information of product
              </h2>
              <div className={style.product__item}>
                <div className={style.product__info_detail}>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "60% 40%" }}
                  >
                    <div style={{ marginBottom: "16px", display: "flex" }}>
                      <label htmlFor="" style={{ fontSize: "14px" }}>
                        Product's name:
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          margin: "0 16px",
                          flex: "1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "16px", display: "flex" }}>
                      <label htmlFor="" style={{ fontSize: "14px" }}>
                        Product's price:
                      </label>
                      <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={{
                          margin: "0 16px",
                          flex: "1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: "16px", display: "flex" }}>
                    <label htmlFor="" style={{ fontSize: "14px" }}>
                      Slug:
                    </label>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      style={{
                        margin: "0 16px",
                        flex: "1",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
                  >
                    <div style={{ marginBottom: "16px", display: "flex" }}>
                      <label htmlFor="" style={{ fontSize: "14px" }}>
                        Categories:
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{
                          margin: "0 16px",
                          flex: "1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      >
                        <option value="New-Arrivals">New-Arrivals</option>
                        <option value="Women">Women</option>
                        <option value="Man">Man</option>
                        <option value="Kids">Kids</option>
                        <option value="Sales">Sales</option>
                      </select>
                      <input type="text" placeholder={product.categories} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                    </div>
                    <div style={{ marginBottom: "16px", display: "flex" }}>
                      <label htmlFor="" style={{ fontSize: "14px" }}>
                        Classify:
                      </label>
                      <input
                        type="text"
                        value={classify}
                        onChange={(e) => setClassify(e.target.value)}
                        style={{
                          margin: "0 16px",
                          flex: "1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
                  >
                    <div style={{ marginBottom: "16px", display: "flex" }}>
                      <label htmlFor="" style={{ fontSize: "14px" }}>
                        Colors:
                      </label>
                      <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        style={{
                          margin: "0 16px",
                          flex: "1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "16px", display: "flex" }}>
                      <label htmlFor="" style={{ fontSize: "14px" }}>
                        Style:
                      </label>
                      <input
                        type="text"
                        value={styles}
                        onChange={(e) => setStyle(e.target.value)}
                        style={{
                          margin: "0 16px",
                          flex: "1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
                  >
                    <div style={{ marginBottom: "16px", display: "flex" }}>
                      <label htmlFor="" style={{ fontSize: "14px" }}>
                        Discount:
                      </label>
                      <select
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        style={{
                          margin: "0 16px",
                          flex: "1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      >
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                      </select>
                      <input type="selector" placeholder={product.discount} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                    </div>
                    <div style={{ marginBottom: "16px", display: "flex" }}>
                      <label htmlFor="" style={{ fontSize: "14px" }}>
                        Discount percents:
                      </label>
                      <input
                        type="text"
                        value={discountPercent}
                        onChange={(e) => setDiscountPercent(e.target.value)}
                        style={{
                          margin: "0 16px",
                          flex: "1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  <input type="file" onChange={(e) => handleFileUpload(e)} />
                  <div style={{ marginBottom: "16px", display: "flex" }}>
                    <label htmlFor="" style={{ fontSize: "14px" }}>
                      Description:
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      name=""
                      id=""
                      cols="100"
                      rows="3"
                      style={{
                        margin: "0 16px",
                        flex: "1",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    ></textarea>
                  </div>
                  <div style={{ marginBottom: "16px", display: "flex" }}>
                    <label htmlFor="" style={{ fontSize: "14px" }}>
                      Detail information:
                    </label>
                    <textarea
                      value={detailDescription}
                      onChange={(e) => setDetailDescription(e.target.value)}
                      name=""
                      id=""
                      cols="100"
                      rows="3"
                      style={{
                        margin: "0 16px",
                        flex: "1",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className={style.update__btn}>
                <button onClick={handleUpdateProduct}>Update</button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
