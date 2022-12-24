import React, { Component, useState } from "react";
import './Items.css';

const CollectionItem = ({ item,handleClick,handleWishClick }) => {
  const {id,name,price,imageUrl} = item;

  return(
    <div className="collectionitem">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{"$" + price}</span>
    </div>
    <button className="btn btn-primary" onClick={() => handleClick(item)}>Add to Cart</button>
    <button className="btn btn-danger" onClick={() => handleWishClick(item)}>Add to Wishlist</button>
  </div>
  )
};

export default CollectionItem; 
