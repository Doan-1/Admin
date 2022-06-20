import { useState, useEffect } from "react";
import style from '../style/Products.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import API from '../context/Api.context';
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";



const Product = () => {
    const time = new Date();
    const api = new API();
    const [showCartInfo, setShowCartInfo] = useState(false)
    const [products, setProducts] = useState([])
    useEffect(() => {
        api.getProduct().then(res => {
            setProducts(res.data)
        })
    }, [window.location.href])
    // const [product, setProduct] = useState({})
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [slug, setSlug] = useState('')
    const [category, setCategory] = useState('')
    const [classify, setClassify] = useState('')
    const [color, setColor] = useState('')
    const [styles, setStyle] = useState('')
    const [discount, setDiscount] = useState(false)
    const [discountPercent, setDiscountPercent] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [description, setDescription] = useState('')
    const [detailDescription, setDetailDescription] = useState('')
    const [soldQuantity, setSoldQuantity] = useState('')
    const [status, setStatus] = useState('')
    const handleShowInfo = (slug) => {
        setShowCartInfo(!showCartInfo)
        if (!showCartInfo === true) {
            api.getProductbySlug(slug).then(res => {
                setId(res.data.id_product)
                setName(res.data.product_name)
                setPrice(res.data.product_price)
                setSlug(res.data.slug)
                setCategory(res.data.categories)
                setClassify(res.data.classify)
                setColor(res.data.color)
                setStyle(res.data.style)
                setThumbnail(res.data.thumbnail)
                setDiscount(res.data.discount)
                setDiscountPercent(res.data.discount_percent)
                setDescription(res.data.description || '')
                setDetailDescription(res.data.detail_info || '')
                setStatus(res.data.status || '')
                // setProduct(res.data)
                console.log(res.data)
            })
        }
    }
    // updateProduct(name,price,description,slug,category,col,sty,detail,disc,disc_percent,clas )
    const handleUpdateProduct = () => {
        console.log(id, name, price, slug, category, classify, color, styles, discount, discountPercent, description, detailDescription);
        api.updateProduct(id, name, price, description, slug, category, color, styles, detailDescription, discount, discountPercent, classify);
        window.location.reload();
    }
    const handleFileUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append("file", e.target.files[0], "file");
        api.cloudinaryUpload(uploadData)
    }
    // useEffect(() => {
    //     api.getTotalbyMonth(time.getFullYear(), time.getMonth() + 1).then((data) => {
    //         console.log(data.data)
    //     })
    //     //api.createNewCart('1','1000','1','1');
    // }, [window.location.href])




    return (
        <div className="main">
            <div className="wrapper">
                <div style={{ 'display': 'flex', 'flexDirection': 'row', alignItems: 'center' }}>
                    <h3 className={style.title}>List of products</h3>
                    <Link to={'/addproduct'}>
                        <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#4682B4', cursor: 'pointer' }} />
                    </Link>
                </div>
                <div className="table__products">
                    <table>
                        <tbody>
                            <tr>
                                <th>Product's ID</th>
                                <th>Product's Name</th>
                                <th>Product's Price</th>
                                <th>Stocks</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                            {
                                products.map((product, index) => {
                                    return (
                                        // <></>
                                        <ProductItem pros={{product, id, setId, name, setName, price, setPrice, slug, setSlug, soldQuantity, setSoldQuantity, status, setStatus, handleShowInfo}} />
                                        // <tr key={index}>
                                        //     <td>{id}</td>
                                        //     <td>{name}</td>
                                        //     <td>{price}</td>
                                        //     <td>{soldQuantity}</td>
                                        //     <td>{status}</td>
                                        //     <td>
                                        //         <FontAwesomeIcon icon={faPencilSquare} style={{ cursor: "pointer" }}
                                        //             onClick={() => handleShowInfo(slug)}
                                        //         />
                                        //     </td>
                                        // </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {
                    showCartInfo &&
                    (
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
                                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                                <label htmlFor="" style={{ "fontSize": "14px" }}>Product's name:</label>
                                                <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                                            </div>
                                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                                <label htmlFor="" style={{ "fontSize": "14px" }}>Product's price:</label>
                                                <input type="text" value={price} onChange={e => setPrice(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                                            </div>
                                        </div>
                                        <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                            <label htmlFor="" style={{ "fontSize": "14px" }}>Slug:</label>
                                            <input type="text" value={slug} onChange={e => setSlug(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                                        </div>
                                        <div style={{ "display": "grid", "gridTemplateColumns": "50% 50%" }}>
                                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                                <label htmlFor="" style={{ "fontSize": "14px" }}>Categories:</label>
                                                <select value={category} onChange={e => setCategory(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }}>
                                                    <option value="New-Arrivals">New-Arrivals</option>
                                                    <option value="Women">Women</option>
                                                    <option value="Man">Man</option>
                                                    <option value="Kids">Kids</option>
                                                    <option value="Sales">Sales</option>
                                                </select>
                                                {/* <input type="text" placeholder={product.categories} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} /> */}
                                            </div>
                                            <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                                <label htmlFor="" style={{ "fontSize": "14px" }}>Classify:</label>
                                                <input type="text" value={classify} onChange={e => setClassify(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
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
                                                <select value={discount} onChange={e => setDiscount(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }}>
                                                    <option value={true}>True</option>
                                                    <option value={false}>False</option>
                                                </select>
                                                {/* <input type="selector" placeholder={product.discount} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} /> */}
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
                                </div>
                                <div className={style.update__btn}>
                                    <button onClick={handleUpdateProduct}>Update</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default Product;