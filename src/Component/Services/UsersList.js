
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/users'; 
 const UserListDataFetch = async () => {
    try {
        const response = await axios.get(`${API_URL}`); 
        console.log("response********", response);
        
        return response.data; // Adjust according to the API response structure
    } catch (error) {
        // console.error('Error fetching books:', error);
        throw error; // Handle error as needed
    }
};
export default  UserListDataFetch
