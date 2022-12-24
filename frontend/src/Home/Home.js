import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Shopping Cart</h1>
            <div>
                <Link to={'/customer'}>
                    <button className="btn btn-primary">Customer</button>
                </Link>
                <Link to={{ pathname: '/trader' }} >
                    <button className="btn btn-danger">Trader</button>
                </Link>


            </div>
        </div>
    )
}

export default Home;