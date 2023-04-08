import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://musiciansunited.herokuapp.com/",
    withCredentials: true,
  });
  
  export default newRequest;