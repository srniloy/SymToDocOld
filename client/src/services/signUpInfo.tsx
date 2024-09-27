import axios from 'axios'

const BASE_URL = "http://localhost"
export const createAccount = async (userInfo: any) => {
    const response = await axios.post(`${BASE_URL}/sign-up`, userInfo)
    console.log(response)
    return response
}

// const BASE_URL = "http://localhost"
export const loginAccount = async (userInfo: any) => {
    const response = await axios.post(`${BASE_URL}/login-screen`, userInfo)
    console.log(response)
    return response
}