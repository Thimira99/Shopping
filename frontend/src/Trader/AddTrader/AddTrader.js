import React, { Component, useState } from 'react';

import { addTrader } from '../TraderApi/TraderApi';

import axios from 'axios';
import TraderNavbar from '../TraderNavbar';

function AddTrader() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [address, setaddress] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newTrader = {
            firstname,
            lastname,
            phoneNumber,
            address
        }

        addTrader(newTrader);


    }


    return (
        <div>
            <TraderNavbar />
            <div className='container'>
                <h1>Create Profile</h1>

                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="firstname" style={{ textAlign: 'left' }}>FirstName</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" onChange={(e) => {
                            setfirstname(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="lastname">LastName</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" onChange={(e) => {
                            setlastname(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="phoneNumber">PhoneNumber</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter Phone Number" onChange={(e) => {
                            setphoneNumber(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter Address" onChange={(e) => {
                            setaddress(e.target.value);
                        }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default AddTrader;