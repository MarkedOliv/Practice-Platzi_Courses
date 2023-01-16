import React from 'react'
import '../styles/Header.scss'

const Header = () => {
  return (
    <nav>
        <img src="https://raw.githubusercontent.com/MarkedOliv/curso-frontend-developer-practico/a96241b67236dd97c9d506368951b61241e3261b/icons/icon_menu.svg" alt="menu" className="menu" />
        <div className="navbar-left">
            <img src="https://raw.githubusercontent.com/MarkedOliv/curso-frontend-developer-practico/a96241b67236dd97c9d506368951b61241e3261b/logos/logo_yard_sale.svg" alt="logo" className="nav-logo" />
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email">platzi@example.com</li>
                <li className="navbar-shopping-cart">
                    <img src="https://raw.githubusercontent.com/platzi/react-practico/da0897411c68f9293530944351d33c442b0cd75f/src/assets/icons/icon_shopping_cart.svg" alt="shopping cart" />
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
);
}

export default Header