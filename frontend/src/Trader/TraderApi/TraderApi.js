import axios from "axios";

const url = "http://localhost:3000/trader/";


export function addTrader(newCustomer) {
    axios.post(url, newCustomer).then(() => {
        alert("Trader Added");
    }).catch((error) => {
        alert(error);
    })
}
