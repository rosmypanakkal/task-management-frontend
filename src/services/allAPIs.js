// all api calls

import { baseUrl } from "./baseUrl";
import { commonAPI } from "./commonAPI";


// Register api call
export const registerAPI =async(user)=>{
    return await commonAPI("post",`${baseUrl}/register`,user,"")
}

// login api
export const loginAPI =async(user)=>{
    return await commonAPI("post",`${baseUrl}/login`,user,"")
}

// add task api
export const addTaskAPI =async(reqBody,reqHeader)=>{
 return await commonAPI("post",`${baseUrl}/task/add`,reqBody,reqHeader)
}
