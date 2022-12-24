import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import TraderNavbar from '../TraderNavbar';


function ViewCustomer() {
    const url = "http://localhost:3000/customer/";
    const [customer, setcustomer] = useState([]);

    function getData() {
        function getAllCustomers() {
            axios.get(url).then((res) => {
                setcustomer(res.data);
            }).catch((error) => {
                alert(error);
            })
        }

        getAllCustomers();

    }



    return (
        <div>
            <TraderNavbar />
            <div>
                <button className='btn btn-primary' onClick={getData}>Click to get</button>
                <ul>
                    <li>
                        {customer.map((value) => {
                            return value.firstname;
                        })}<br />
                    </li>
                </ul>

            </div>
        </div>

    )
}

export default ViewCustomer;