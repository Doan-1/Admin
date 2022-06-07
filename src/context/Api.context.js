import axios from "axios";

export default class API {
    // no params
    async getTotalbyMonth(yea,mon) {
        let a = await axios.get(`http://localhost:4001/salesstatus/total/`+yea+`/`+mon) 
        return a.data;
    }
    async createNewCart(iduser, tot, add, phon)
    {
        let a = await axios.post(`http://localhost:4001/cart/create`,{
            id_user: iduser,
            total: tot,
            address: add,
            phone: phon
        })
        return a;
    }
}