import React, { Component, useState } from 'react';

import TraderNavbar from '../TraderNavbar';
import { addItem } from '../TraderApi/TradeStockApi';

function AddStock() {

    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newItem = {
            type,
            name,
            imageUrl,
            price
        }

        addItem(newItem);


    }


    return (
        <div>
            <TraderNavbar />
            <div className='container'>
                <h1>Add Item</h1>

                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="type" style={{ textAlign: 'left' }}>Type</label>
                        <input type="text" className="form-control" id="type" placeholder="Enter First Name" onChange={(e) => {
                            setType(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Last Name" onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="imageUrl">Image Url</label>
                        <input type="text" className="form-control" id="imageUrl" placeholder="Enter Phone Number" onChange={(e) => {
                            setImageUrl(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="price">Price</label>
                        <input type="text" className="form-control" id="price" placeholder="Enter Address" onChange={(e) => {
                            setPrice(e.target.value);
                        }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default AddStock;