import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useState} from 'react';

const Product = (props) => { 
    let [quantity,  setQuantity] = useState (1);
    const quantityChange = (val) =>{
        setQuantity(val);
    };
    return (
    <div className="product">
        <img src={"/images/" + props.data.image}/>
        <h2>{props.data.title}</h2>
        <label>${props.data.price}</label>
        <label>total: ${(props.data.price * quantity).toFixed(2)}</label>
        <QuantityPicker onChange={quantityChange}></QuantityPicker>
        <button className="btn btn-primary btn-sm">Add</button>
    </div>

    );
}

export default Product;