import React, { Component } from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';
import CollectionItem from './items';
import TraderNavbar from '../TraderNavbar';

function Stocks() {
    const [stockList, setStock] = useState([]);

    const url = 'http://localhost:3000/store/';

    useEffect(() => {
        function getStock() {
            axios.get(url).then((res) => {
                setStock(res.data);
            }).catch((err) => {
                alert(err);
            });
        }
        getStock();
    }, [])

    console.log(stockList);

    return (
        <div>
            <TraderNavbar />
            <div>
                <h1>Inventory</h1>
                {stockList.map(({ id, ...otherCollectionProps }) => (
                    <CollectionItem id={id} {...otherCollectionProps} />
                ))}
            </div>
        </div>

    )
}

export default Stocks;
