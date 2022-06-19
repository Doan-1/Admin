import { useState, useEffect } from "react";
import style from './AddNewProduct.module.css';
import API from "../../context/Api.context";
import { Link } from "react-router-dom";

const api = new API();
const AddNewProduct = () => {
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

    // createProduct(name,price,description,slug,category,col,sty,detail,disc,disc_percent,thumb,clas,listIma ) 
    const handleUpdateProduct = () => {
        setName('')
        setPrice('')
        setSlug('')
        setCategory('')
        setClassify('')
        setColor('')
        setStyle('')
        setDiscount('')
        setDiscountPercent('')
        setThumbnail('')
        setDescription('')
        setDetailDescription('')
        api.createProduct(name, price, description, slug, category, color, styles, detailDescription,  discount, discountPercent, thumbnail, classify, []);
        console.log(name, price, description, slug, category, color, styles, detailDescription,  discount, discountPercent, thumbnail, classify, []);
    }
    const handleFileUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append("file", e.target.files[0], "file");
        api.cloudinaryUpload(uploadData)
    }
    return (
        <div className="main">
            <div className="wrapper" style={{height: '100%', padding: '48px 0'}}>
                {/* <div className={style.list__product}>
                    <div className={style.product__list}> */}
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
                                        <input type="text" value={price} onChange={e => setPrice(Number(e.target.value))} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                                    </div>
                                </div>
                                <div style={{ "marginBottom": "16px", "display": "flex" }} >
                                    <label htmlFor="" style={{ "fontSize": "14px" }}>Slug:</label>
                                    <input type="text" value={slug} onChange={e => setSlug(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
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
                                        {/* <input type="text" placeholder={product.categories} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} /> */}
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
                                    <label htmlFor="" style={{ "fontSize": "14px" }}>Thumbnail:</label>
                                    <input type="text" value={thumbnail} onChange={e => setThumbnail(e.target.value)} style={{ "margin": "0 16px", "flex": "1", "fontSize": "14px", "outline": "none" }} />
                                </div>
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
                            <button onClick={handleUpdateProduct}>Create New Product</button>
                        </div>
                    {/* </div>
                </div> */}
            </div>
        </div>
    )
}

export default AddNewProduct;