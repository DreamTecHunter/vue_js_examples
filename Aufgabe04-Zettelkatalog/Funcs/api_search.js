import axios from "axios";
export async function api_search(queue) {
    const response = await axios.get('http://localhost:5000/cat-search/${queue}', {});
    return response.data;
}