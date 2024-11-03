import axios from "axios";

const  PRODUCT_API_URL = "https://fakestoreapi.com/products"
const ProductListService = async () => {
    try {
        const responsedata = await axios.get(`${PRODUCT_API_URL}`)
        return responsedata.data
    } catch (error) {
        console.log(error)
    }
}

export default ProductListService