import react from "react";
import './Button.style.css';
const Button = (props) => {
    return (
        <button className="button" onClick={props.fungsi}>{props.namaFungsi}</button>
    );
}

export default Button;