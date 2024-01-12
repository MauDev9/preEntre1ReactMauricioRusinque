import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CartWidget = () => {
    return (
        <>
            <button className="cart">
                <FaCartPlus />
                <h5>0</h5>
            </button>
        </>
    )
}
export default CartWidget;