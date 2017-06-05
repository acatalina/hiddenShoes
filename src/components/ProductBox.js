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
			isModalOpen: false
		};

		this.modalHandler = this.modalHandler.bind(this);
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
								selectSize={this.props.selectSize}
								sizeSelected={this.props.sizeSelected} />
							<SelectQuantity
								stock={data.available}
								sizeSelected={this.props.sizeSelected}
								selectQuantity={this.props.selectQuantity}
								quantitySelected={this.props.quantitySelected} />
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
	submitHandler(e) {
		e.preventDefault();
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
	selectSize: PropTypes.func.isRequired,
	sizeSelected: PropTypes.number.isRequired,
	selectQuantity: PropTypes.func.isRequired,
	quantitySelected: PropTypes.number.isRequired
};

export default ProductBox;
