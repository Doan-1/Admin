import axios from "axios";

export default class API {
    // no params
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
}