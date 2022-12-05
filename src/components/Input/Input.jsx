import react from "react";
import './Input.style.css';
const Input = (props) => {
    return (
        <div className="form-input">
            <label htmlFor="input" className="labelInput">{props.label}</label>
            <input className="input" type="number" min="0" onChange={props.getValue} name={props.name} required/>
        </div>
    );
}


export default Input;