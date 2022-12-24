import axios from "axios";

const url = "http://localhost:3000/customer/";


export function addCustomer(newCustomer) {
    axios.post(url, newCustomer).then(() => {
        alert("Customer Added");
    }).catch((error) => {
        alert(error);
    })
}
