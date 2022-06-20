import axios from "axios";

export default class API {
    // no params
    async createProduct(name, price, description, slug, category, col, sty, detail, disc, disc_percent, thumb, clas, listIma, size) {
        let listsize = [];
        let sitenumber = Number(size);
        listsize.push(size.toString());
        listsize.push((sitenumber + 1).toString());
        listsize.push((sitenumber + 2).toString());
        listsize.push((sitenumber + 3).toString());
        listsize.push((sitenumber + 4).toString());
        let a = await axios.post(`http://localhost:4001/product/create`, {
            id_product: 0,
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
            listImage: listIma,
            size: listsize,
            sold_quantity: 0,
            status: "con hang"
        })
        return a;
    }
    async updateProduct(id, name, price, description, slug, category, col, sty, detail, disc, disc_percent, clas) {
        let a = await axios.post(`http://localhost:4001/product/update`, {
            id_product: id,
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
    async updateCartStatus(id, stat) {
        let a = await axios.post(`http://localhost:4001/cart/updatestatus`, {
            id_cart: id,
            status: stat
        })
        return a;
    }
    async updateProductStatus(id, stat) {
        let a = await axios.post(`http://localhost:4001/product/updatestatus`, {
            id_product: id,
            status: stat
        })
        return a;
    }
    async getTotalbyMonth(year, mon) {
        let a = await axios.get(`http://localhost:4001/salesstatus/total/` + year + `/` + mon)
        return a.data;
    }
    async getCartbyStatus(id) {
        let a = await axios.get(`http://localhost:4001/cart/status/` + id)
        return a.data;
    }
    async getCartinfobyId(id) {
        let a = await axios.get(`http://localhost:4001/cartinfo/` + id)
        return a.data;
    }
    async getCountProduct() {
        let a = await axios.get(`http://localhost:4001/product/count`);
        return a.data;
    }
    async getCountCartbyStatus(id) {
        let a = await axios.get(`http://localhost:4001/cart/status/count/` + id)
        return a.data;
    }
    async getTopProduct() {
        let a = await axios.get(`http://localhost:4001/product/desc`)
        return a.data;
    }
    async getProduct() {
        let a = await axios.get(`http://localhost:4001/product`)
        return a.data;
    }
    async getProductbySlug(id) {
        let a = await axios.get(`http://localhost:4001/product/` + id)
        return a.data;
    }
    async getUser() {
        let a = await axios.get(`http://localhost:4001/user`)
        return a.data;
    }
    async getCartbyIDuser(id) {
        let a = await axios.get(`http://localhost:4001/cart/` + id)
        return a.data;
    }
    async getCartInfo() {
        let a = await axios.get(`http://localhost:4001/cartinfo`)
        return a.data;
    }
    cloudinaryUpload = (fileToUpload) => {
        return axios.post('http://localhost:4001/product/cloudinary-upload', fileToUpload)
            .then(res => {
                var a = localStorage.getItem('url');
                let jsonStorage = '';
                if (a === '') {
                    jsonStorage = res.data.secure_url;
                }
                else {
                    jsonStorage = a + ', ' + res.data.secure_url;
                }
                localStorage.setItem('url', jsonStorage)
            })
            .catch(err => console.log(err))
    }

}