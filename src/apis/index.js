import axios from "axios"
import { API_URL } from "./config"

const instance = axios.create({
    baseURL: API_URL
})

export const GetListData = async (name) => {
    const pathName = `top/${name}`

    const { data } = await instance.get(pathName)

    return data.top
}

export const GetDetailById = async (name,id) => {
    const pathName = `${name}/${id}`
    
    const { data } = await instance.get(pathName)

    return data
}

export const GetDataBySearch = async (search) => {
    const pathName = `search/anime?q=${search}&order_by=title&sort=asc&limit=20`
    
    const { data } = await instance.get(pathName)

    return data
}