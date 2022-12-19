import axios from "axios";
import { api_route } from ".";

const product_api={};
product_api.allProducts=async function(){
    const data= await axios.get(api_route('/products'));
    return data;
}

export default product_api;