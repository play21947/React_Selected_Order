import App from "./App.css";
import { useState } from "react";

const Header=(props)=>{

    let cart = props.cart

    let [time, setTime] = useState(new Date())

    setInterval(()=>{
        setTime(new Date())
    }, 1000)

    return(
        <div className='nav'>
            <h2 className="logo">Goble Market</h2>
            <h2>Cart : {cart}</h2>
            <h2 className="time">{time.toLocaleTimeString()}</h2>
        </div>
    )
}


export default Header;