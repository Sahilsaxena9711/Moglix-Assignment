
// dependencies
import axios from "axios";
//constants
import { STATE_STATUS } from "../constants";

// creating an instance from axios
const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const getPosts = () =>
    axiosInstance.get("posts")
        .then(data => {
            return data
        })
        .catch(error => {
            return {
                data: STATE_STATUS.SERVER_ERROR
            }
        })
