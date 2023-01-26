import axios from "axios"


const BASE_URL = "http://localhost:8800/api/";

export const publicRequest = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
});

export const PF = "http://localhost:8800/tokenlogos/";

export const getPartners = async () => {
    try {
        return await publicRequest.get("/partners/getPartners");
    } catch (err) {
        console.log(err)
    }
}

export const contactMail = async (name, email, text) => {
    try {
        return await publicRequest.post("/contact/contactMail", { name, email, text });
    } catch (err) {
        console.log(err)
    }
}
