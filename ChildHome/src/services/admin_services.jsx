import axios from 'axios'
import { createUrl } from '../util'
export async function deletes(id){
    try{
    const url=createUrl('admin/parent/delete')
    const body={id}
    const response=await axios.post(url,body)
    return response.data}
    catch(r){
        return {status:"error",error:r}
    }
  }
  export async function homeC(){
    try{
    const url=createUrl('/admin/parent')
    const body={}
    const response=await axios.post(url,body)
    return response.data}
    catch(r){
        return {status:"error",error:r}
    }
  }
  export async function viewSucess(){
    try{
    const url=createUrl('/admin')
    const body={}
    const response=await axios.post(url,body)
    return response.data}
    catch(r){
        return {status:"error",error:r}
    }
  }
  export async function child(){
    try{
    const url=createUrl('/admin/child')
    const body={}
    const response=await axios.post(url,body)
    return response.data}
    catch(r){
        return {status:"error",error:r}
    }
  }
  export async function deleteChild(id){
    try{
    const url=createUrl('admin/child/delete')
    const body={id}
    const response=await axios.post(url,body)
    return response.data}
    catch(r){
        return {status:"error",error:r}
    }
  }
  export async function feedback(id){
    try{
    const url=createUrl('admin/feedback')
    const body={id}
    const response=await axios.post(url,body)
    return response.data}
    catch(r){
        return {status:"error",error:r}
    }
  }