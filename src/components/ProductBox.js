import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import SelectSize from './SelectSize'; // eslint-disable-line no-unused-vars
import SelectQuantity from './SelectQuantity'; // eslint-disable-line no-unused-vars
import Price from './Price'; // eslint-disable-line no-unused-vars
import Modal from './Modal'; // eslint-disable-line no-unused-vars

import '../css/productbox.css';

class ProductBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			sizeSelected: 0,
			quantitySelected: 0
		};

		this.modalHandler = this.modalHandler.bind(this);
		this.selectSize = this.selectSize.bind(this);
		this.selectQuantity = this.selectQuantity.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	render() {
		const { data } = this.props;

		return (
			<article className="product-box">
				<div className="product-box-wrapper">
					<div className="product-box-img-wrapper"
						onClick={this.modalHandler}>
						<img className="product-box-img"
							src={`/imgs/${data.img}`}
							alt={data.name} />
					</div>
					<Modal
						isOpen={this.state.isModalOpen}
						close={this.modalHandler}
						img={`/imgs/${data.img}`}
						altImg={data.name} />
					<div className="product-box-details">
						<h1>{data.name}</h1>
						<p>{data.description}</p>
						<Price
							price={data.price}
							were={data.were}
							priceClass="product-box-price"
							wereClass="product-box-were"
						/>
						<form className="product-box-form"
							onSubmit={this.submitHandler}>
							<SelectSize
								stock={data.available}
								selectSize={this.selectSize}
								sizeSelected={+this.state.sizeSelected} />
							<SelectQuantity
								stock={data.available}
								sizeSelected={+this.state.sizeSelected}
								selectQuantity={this.selectQuantity}
								quantitySelected={+this.state.quantitySelected} />
							<input type="submit" value="ADD TO BASKET" />
						</form>
					</div>
				</div>
			</article>
		);
	}
	modalHandler() {
		this.setState((prevState) => {
			return { isModalOpen: !prevState.isModalOpen };
		});
	}
	selectSize(e) {
		const newSize = e.target.value;

		this.setState(() => {
			return {
				sizeSelected: newSize,
				quantitySelected: 0
			};
		});
	}
	selectQuantity(e) {
		const newQuantity = e.target.value;

		this.setState(() => {
			return { quantitySelected: newQuantity };
		});
	}
	submitHandler(e) {
		e.preventDefault();
		
		if (!this.state.sizeSelected || !this.state.quantitySelected) {
			return alert('You must select size and quantity');
		}
		
		const product = {
			id: this.props.data.id,
			name: this.props.data.name,
			size: this.state.sizeSelected,
			quantitySelected: this.state.quantitySelected
		};

		this.props.addProductToBasket(product);
	}
}

ProductBox.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		were: PropTypes.number,
		price: PropTypes.number.isRequired,
		available: PropTypes.object.isRequired
	}),
	addProductToBasket: PropTypes.func.isRequired
};

export default ProductBox;
