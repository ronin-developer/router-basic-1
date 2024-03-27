import axios from 'axios';

class PostService {
    static getSingleProduct() {
        return axios.get('https://dummyjson.com/products/2');
    }
}

export default PostService;