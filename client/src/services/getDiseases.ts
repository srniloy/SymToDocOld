import axios from 'axios'

const BASE_URL = "http://localhost"
export const getDisease = async (symptom_list: any) =>{
    const response = await axios.post(`${BASE_URL}/find-disease`, symptom_list)
    console.log(response)
    return response
}