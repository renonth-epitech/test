import axios from "axios"

// URL du back
const axiosInstance = axios.create({
  baseURL: "https://tekarea.herokuapp.com/"
})

export default axiosInstance
