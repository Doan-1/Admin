import axios from "axios";

export default class API {
    // no params
    async createProduct(name,price,description,slug,category,col,sty,detail,disc,disc_percent,thumb,clas,listIma ) {
        let a = await axios.post(`http://localhost:4001/product/create`,{
            product_name: name,
            product_price: price,
            description: description,
            slug: slug,
            categories: category,
            color: col,
            style: sty,
            detail_info: detail,
            discount: disc,
            discount_percent: disc_percent,
            thumbnail: thumb,
            classify: clas,
            listImage: listIma
        })
        return a;
    }
    async updateProduct(name,price,description,slug,category,col,sty,detail,disc,disc_percent,clas ) {
        let a = await axios.post(`http://localhost:4001/product/create`,{
            product_name: name,
            product_price: price,
            description: description,
            slug: slug,
            categories: category,
            color: col,
            style: sty,
            detail_info: detail,
            discount: disc,
            discount_percent: disc_percent,
            classify: clas
        })
        return a;
    }
    async getTotalbyMonth(yea,mon) {
        let a = await axios.get(`http://localhost:4001/salesstatus/total/`+yea+`/`+mon) 
        return a.data;
    }
    async getCartbyStatus(id) {
        let a = await axios.get(`http://localhost:4001/cart/status/`+id) 
        return a.data;
    }
    async getCartinfobyId(id) {
        let a = await axios.get(`http://localhost:4001/cartinfo/`+ id)
        return a.data;
    }
    async getCountProduct(){
        let a = await axios.get(`http://localhost:4001/product/count`);
        return a.data;
    }
    async getCountCartbyStatus(id) {
        let a = await axios.get(`http://localhost:4001/cart/status/count/`+id) 
        return a.data;
    }
    cloudinaryUpload = (fileToUpload) => {
        return axios.post('http://localhost:4001/product/cloudinary-upload', fileToUpload)
        .then(res =>console.log( res.data))
        .catch(err => console.log(err))
    }
    
}