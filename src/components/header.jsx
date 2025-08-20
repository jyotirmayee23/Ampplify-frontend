import React from "react"
import '../styles/app.css';
import logo from "../assets/logo.png"

const header = () => {
    return (
        <div className="header">
            <div>
                <div class="logo-container">
                    <img src={logo} alt="Operisoft Logo" />
                </div>
            </div>
        </div>
    )
}

export default header




