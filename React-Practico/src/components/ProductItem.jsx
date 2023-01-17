import React, { useState } from 'react';
import '../styles/ProductItem.scss';

const ProductItem = ({ product }) => {

	const [cart, setCart] = useState([]);

	const handleCart = () => {
		setCart([]);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>{product.price}$</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleCart}>
					<img src="https://raw.githubusercontent.com/MarkedOliv/curso-frontend-developer-practico/a96241b67236dd97c9d506368951b61241e3261b/icons/bt_add_to_cart.svg" alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;