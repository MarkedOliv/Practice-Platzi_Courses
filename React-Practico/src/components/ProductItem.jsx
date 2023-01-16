import React from 'react';
import '../styles/ProductItem.scss';

const ProductItem = () => {
	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure>
					<img src="https://raw.githubusercontent.com/MarkedOliv/curso-frontend-developer-practico/a96241b67236dd97c9d506368951b61241e3261b/icons/bt_add_to_cart.svg" alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;