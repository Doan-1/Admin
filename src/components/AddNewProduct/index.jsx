import { useState, useEffect } from "react";
import style from "./AddNewProduct.module.css";
import API from "../../context/Api.context";
import { PlusOutlined } from "@ant-design/icons";
import {
  Input,
  Row,
  Col,
  message,
  Select,
  Modal,
  Upload,
  UploadFile,
} from "antd";

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
  const [number, setNumber] = useState(0);
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("New-Arrivals");
  const [classify, setClassify] = useState("");
  const [color, setColor] = useState("");
  const [styles, setStyle] = useState("");
  const [discount, setDiscount] = useState("false");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [description, setDescription] = useState("");
  const [detailDescription, setDetailDescription] = useState("");
  const [listImg, setListImg] = useState([]);
  const [size, setSize] = useState(0);

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
    setDiscount(0);
    setDiscountPercent("");
    setDescription("");
    setDetailDescription("");
    setSize(0);
    setListImg([]);
    setNumber(0);
    // name,price,description,slug,category,col,sty,detail,disc,disc_percent,thumb,clas,listIma,size
    api.createProduct(
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
      localStorage.getItem("url").split(", ")[0],
      classify,
      localStorage.getItem("url").split(", "),
      size,
      number
    );
    // console.log(name, price, description, slug, category, color, styles, detailDescription, discount, discountPercent, thumbnail, classify, []);
    localStorage.setItem("url", "");
    setFileList([]);
  };
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
    const uploadData = new FormData();
    uploadData.append(
      "file",
      newFileList[newFileList.length - 1].originFileObj,
      "file"
    );
    api.cloudinaryUpload(uploadData);
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
            <Col className="col-start-2 col-span-2">
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
            <Col className="col-start-4 col-span-5">
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
            <Col className="col-start-9 col-span-2">
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
                beforeUpload={() => false}
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
