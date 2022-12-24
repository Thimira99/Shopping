import React, { Component } from "react";
import './items.css';

import {Link } from "react-router-dom";


const CollectionItem = ({id,name,price,imageUrl}) => {
  // const history  = useHistory();
  return(
    <div className="collectionitem">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{"$" + price}</span>

    </div>
    {/* <button className="btn btn-primary" onClick={() => history.push('/')}>Update</button> */}
    <Link to={{pathname:'/update/' + id}} className="btn btn-primary"> Update</Link>
  </div>
  )
};
  

export default CollectionItem;
