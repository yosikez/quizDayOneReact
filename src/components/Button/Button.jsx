import react from "react";
import './Button.style.css';
const Button = (props) => {
    return (
        <button className="button" onClick={props.calculate}>{props.name}</button>
    );
}

export default Button;