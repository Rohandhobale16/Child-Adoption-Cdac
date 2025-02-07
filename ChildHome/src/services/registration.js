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
    password) {
    try {
        // const url = createUrl('/admin')
        const body = {
            material,
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
            password
        }
        const response = await axios.post("http://localhost:8080/addparent", body)
        return response.data
    }
    catch (r) {
        return { status: "error", error: r }
    }
}
export async function register1(
    material,
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
    password) {
    try {
        // const url = createUrl('/admin')
        const body = {
            material,
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
            password
        }
        const response = await axios.post("http://localhost:8080/addparent", body)
        return response.data
    }
    catch (r) {
        return { status: "error", error: r }
    }
}

export async function registerChildhome(
    houseNo,
    street,
    district,
    state,
    pincode,
    city,
    houseName,
    inHome,
    adoptable,
    fname,
    lname,
    mobile,
    email,
    password,
    role,
    bankAccount,
    ifscCode,
) {
    try {


        const body = {
            houseNo,
            street,
            district,
            state,
            pincode,
            city,
            houseName,
            inHome,
            adoptable,
            fname,
            lname,
            mobile,
            email,
            password,
            bankAccount,
            ifscCode,
        }

        const response = axios.post("http://localhost:8080/addchildhome", body);
        return response.data;
    } catch {
        return { status: "error", error: "Error in registerChildhome" }
    }
}

export async function registerSocialworker() {

}
