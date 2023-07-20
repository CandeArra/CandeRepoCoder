import './cartwidget.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping}  from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
    return (
        <div>
            <FontAwesomeIcon className="cart" icon={ faCartShopping } /> 
            <span>2</span>
        </div>
    )
}

export default CartWidget