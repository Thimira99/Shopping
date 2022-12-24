import axios from "axios";

const url = "http://localhost:3000/store/";


export function addItem(newItem) {
    axios.post(url, newItem).then(() => {
        alert("Item Added");
    }).catch((error) => {
        alert(error);
    })
}
