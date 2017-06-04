import React from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import '../css/productcard.css';

const ProductCard = props => {
	return (
    <li className="product-card">
      <div className="product-wrapper">
        <img className="product-img" 
          src={`/imgs/${props.img}`} 
          alt={props.name} />
        <div className="product-details">
          <h2>{props.name}</h2>
          {props.were
            ? <span className="product-were">
                Were £{props.were}
              </span> 
            : null}
          <span className="product-price">
            {props.were ? 'NOW £' : ''}{props.price}
          </span>
        </div>
      </div>
    </li>
	);
};

ProductCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	were: PropTypes.number,
	price: PropTypes.number.isRequired
};

export default ProductCard;