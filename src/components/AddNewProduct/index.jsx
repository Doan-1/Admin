import { useState, useEffect } from "react";
import style from "./AddNewProduct.module.css";
import API from "../../context/Api.context";
import { PlusOutlined } from "@ant-design/icons";
import { Input, Row, Col, message, Select, Modal, Upload } from "antd";

const api = new API();
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const AddNewProduct = () => {
  // let [url, setUrl] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("New-Arrivals");
  const [classify, setClassify] = useState("");
  const [color, setColor] = useState("");
  const [styles, setStyle] = useState("");
  const [discount, setDiscount] = useState("false");
  const [discountPercent, setDiscountPercent] = useState("");
  const [description, setDescription] = useState("");
  const [detailDescription, setDetailDescription] = useState("");
  const [listImg, setListImg] = useState([]);
  const [size, setSize] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Please fill all information about your order.",
      className: "mt-24",
    });
  };
  // createProduct(name,price,description,slug,category,col,sty,detail,disc,disc_percent,thumb,clas,listIma )
  const handleAddNewProduct = () => {
    setName("");
    setPrice("");
    setSlug("");
    setCategory("");
    setClassify("");
    setColor("");
    setStyle("");
    setDiscount("");
    setDiscountPercent("");
    setDescription("");
    setDetailDescription("");
    setSize("");
    setListImg([]);
    // name,price,description,slug,category,col,sty,detail,disc,disc_percent,thumb,clas,listIma,size
    // api.createProduct(
    //   name,
    //   price,
    //   description,
    //   slug,
    //   category,
    //   color,
    //   styles,
    //   detailDescription,
    //   discount,
    //   discountPercent,
    //   localStorage.getItem("url").split(", ")[0],
    //   classify,
    //   localStorage.getItem("url").split(", "),
    //   size
    // );
    // console.log(name, price, description, slug, category, color, styles, detailDescription, discount, discountPercent, thumbnail, classify, []);
    localStorage.setItem("url", "");
    const uploadData = new FormData();
    fileList.map((file) => {
      // let a = {
      //   lastModified: file.lastModified,
      //   lastModifiedDate: file.lastModifiedDate,
      //   name: file.name,
      //   size: file.size,
      //   type: file.type,
      //   webkitRelativePath: "",
      // };
      console.log(file.blob());
    });
    // window.location.reload();
  };

  // useEffect(() => {
  //     console.log(localStorage['url'])
  //     setUrl(localStorage.getItem('url'))
  // }, [url])

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  // const handleFileUpload = (e) => {
  //   const uploadData = new FormData();
  //   uploadData.append("file", e.target.files[0], "file");
  //   api.cloudinaryUpload(uploadData);
  // };
  return (
    <div className="main">
      <div
        className="wrapper"
        style={{ paddingTop: "24px", paddingBottom: "24px" }}
      >
        {/* <div className={style.list__product}>
                    <div className={style.product__list}> */}
        <h2 className="text-xl font-bold mb-2 text-center">
          Detail information of product
        </h2>
        {/* <div className={style.product__item} >
                    <div className={style.product__info_detail}>
                        <div style={{ "display": "grid", "gridTemplateColumns": "60% 40%" }}>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Product's name:</label>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Product's price:</label>
                                <input type="text" value={price} onChange={e => setPrice(Number(e.target.value))} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                        </div>
                        <div style={{ "display": "grid", "gridTemplateColumns": "60% 40%" }}>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Slug:</label>
                                <input type="text" value={slug} onChange={e => setSlug(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Product's size:</label>
                                <input type="text" value={size} onChange={e => setSize(Number(e.target.value))} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                        </div>
                        <div style={{ "display": "grid", "gridTemplateColumns": "50% 50%" }}>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Categories:</label>
                                <select onChange={e => setCategory(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }}>
                                    <option value={'New-Arrivals'}>New-Arrivals</option>
                                    <option value={'Women'}>Women</option>
                                    <option value={'Men'}>Man</option>
                                    <option value={'Kids'}>Kids</option>
                                    <option value={'Sales'}>Sales</option>
                                </select>
                                <input type="text" placeholder={product.categories} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Classify:</label>
                                <input value={classify} type="text" onChange={e => setClassify(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                        </div>
                        <div style={{ "display": "grid", "gridTemplateColumns": "50% 50%" }}>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Colors:</label>
                                <input type="text" value={color} onChange={e => setColor(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Style:</label>
                                <input type="text" value={styles} onChange={e => setStyle(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                        </div>
                        <div style={{ "display": "grid", "gridTemplateColumns": "50% 50%" }}>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Discount:</label>
                                <select onChange={e => setDiscount(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }}>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                                <input type="selector" placeholder={product.discount} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                <label htmlFor="" style={{ "fontSize": "14px" }}>Discount percents:</label>
                                <input type="text" value={discountPercent} onChange={e => setDiscountPercent(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                            </div>
                        </div>
                        <input
                            type="file"
                            onChange={(e) => handleFileUpload(e)}
                        />
                        <div style={{ "marginBottom": "16px", "display": "flex" }} >
                            <label htmlFor="" style={{ "fontSize": "14px" }}>Description:</label>
                            <textarea value={description} onChange={e => setDescription(e.target.value)} name="" id="" cols="100" rows="3" style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }}></textarea>
                        </div>
                        <div style={{ "marginBottom": "16px", "display": "flex" }} >
                            <label htmlFor="" style={{ "fontSize": "14px" }}>Detail information:</label>
                            <textarea value={detailDescription} onChange={e => setDetailDescription(e.target.value)} name="" id="" cols="100" rows="3" style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }}></textarea>
                        </div>

                    </div>
                </div> */}
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
            <Col className="col-start-2 col-span-6">
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
            <Col className="col-start-8 col-span-3">
              <span>Product Size</span>
              <Input
                className="flex-1 mt-4"
                value={size}
                type="number"
                onChange={(e) => {
                  setSize(e.target.value);
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
                defaultValue={discount}
                onChange={(value) => {
                  setDiscount(value);
                }}
                options={[
                  {
                    value: "true",
                    label: "true",
                  },
                  {
                    value: "false",
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
          <Row className="grid grid-cols-11 gap-2 mb-2">
            <Col className="col-start-2 col-span-9">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 6 ? null : uploadButton}
              </Upload>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{
                    width: "100%",
                  }}
                  src={previewImage}
                />
              </Modal>
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
          <button onClick={handleAddNewProduct}>Create New Product</button>
        </div>
        {/* </div>
                </div> */}
      </div>
    </div>
  );
};

export default AddNewProduct;
