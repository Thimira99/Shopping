import React, { Component, useState } from 'react';

import { addCustomer } from '../Api/CustomerAddApi';
import CustomerNavbar from '../CustomerNavbar';

import axios from 'axios';

function CreateProfile() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [address, setaddress] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newCustomer = {
            firstname,
            lastname,
            phoneNumber,
            address
        }

        addCustomer(newCustomer);


    }


    return (
        <div>
            <CustomerNavbar />
            <div className='container'>
                <h1>Create Customer</h1>
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

export default CreateProfile;