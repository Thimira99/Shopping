import React, { Component, useEffect, useState } from 'react';
import TraderNavbar from '../TraderNavbar';
import axios from 'axios';

import { useParams } from 'react-router-dom';

function Update() {

    const [iid, setId] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");

    const url = 'http://localhost:3000/store/';



    function sendData(e) {
        e.preventDefault();

        const newItem = {
            type,
            name,
            imageUrl,
            price
        }

        function updateItem(iid, newItem) {
            axios.put(url + iid, newItem).then(() => {
                alert("Item Updated");
            }).catch((error) => {
                alert(error);
            })
        }

        updateItem(iid, newItem);
    }

    const { id } = useParams();

    useEffect(() => {

        function getStock() {
            axios.get(url + id).then((res) => {
                setId(id);
                setType(res.data.type);
                setName(res.data.name);
                setImageUrl(res.data.imageUrl);
                setPrice(res.data.price);
            }).catch((err) => {
                alert(err);
            });
        }
        getStock();
    }, [])

    return (
        <div>
            <TraderNavbar />
            <div className='container'>
                <h1>Update Items</h1>
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="type" style={{ textAlign: 'left' }}>Type</label>
                        <input type="text" className="form-control" id="type" placeholder="Enter Type" value={type} onChange={(e) =>
                            setType(e.target.value)
                        } />
                    </div>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="imageUrl">Image Url</label>
                        <input type="text" className="form-control" id="imageUrl" placeholder="Enter Image Url" value={imageUrl} onChange={(e) => {
                            setImageUrl(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="price">Price</label>
                        <input type="text" className="form-control" id="price" placeholder="Enter Price" value={price} onChange={(e) => {
                            setPrice(e.target.value);
                        }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Update;