import axios from 'axios'
import { createUrl } from '../util'
export async function register2(material,
    fname,
    lname,
    gender,
    nationality,
    dob,
    occupation,
    aadhar,
    mobile,
    email,
    income,
    houseNo,
    street,
    district,
    city,
    state,
    pincode,
    password){
    try{
    const url=createUrl('/admin')
    const body={material,
        fname,
        lname,
        gender,
        nationality,
        dob,
        occupation,
        aadhar,
        mobile,
        email,
        income,
        houseNo,
        street,
        district,
        city,
        state,
        pincode,
        password}
    const response=await axios.post("http://localhost:8080/addparent",body)
    return response.data}
    catch(r){
        return {status:"error",error:r}
    }
  }
  export async function register1(material,
    fname,
    lname,
    gender,
    nationality,
    dob,
    occupation,
    aadhar,
    mobile,
    email,
    income,
    houseNo,
    street,
    district,
    city,
    state,
    pincode,
    partnerfname,
    partnerlname,
    partnergender,
    partnerdob,
    partneraadhar,
    partnermobile,
    partneremail,
    partnerincome,
    partneroccupation,
    partnernationality,
    password){
    try{
    const url=createUrl('/admin')
    const body={material,
        fname,
        lname,
        gender,
        nationality,
        dob,
        occupation,
        aadhar,
        mobile,
        email,
        income,
        houseNo,
        street,
        district,
        city,
        state,
        pincode,
        partnerfname,
        partnerlname,
        partnergender,
        partnerdob,
        partneraadhar,
        partnermobile,
        partneremail,
        partnerincome,
        partneroccupation,
        partnernationality,
        password}
    const response=await axios.post("http://localhost:8080/addparent",body)
    return response.data}
    catch(r){
        return {status:"error",error:r}
    }
  }
