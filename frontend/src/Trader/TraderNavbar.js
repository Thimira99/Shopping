import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';


function TraderNavbar() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#" style={{ backgroundColor: 'red' }}>Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">Home </a>
                            <a className="nav-item nav-link" href="/profile">Create Profile</a>
                            <a className="nav-item nav-link" href="/allCus">All Customers</a>
                            <a className="nav-item nav-link" href="/allstocks">Stocks</a>
                            <a className="nav-item nav-link" href="/addItem">Add Item</a>
                        </div>

                    </div>
                </nav>

            </div>
        </div>
    )
}

export default TraderNavbar;