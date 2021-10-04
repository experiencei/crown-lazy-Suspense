import React from "react";
import "./custombtn.scss";

export default function Custombtn({children, isGoogleSignin ,inverted,...otherprops}) {
    return (
        <div >
         <button className={`${isGoogleSignin ? 'google-sign-in' : ''}${inverted ?'inverted' : ''} custom-button`} {...otherprops}>{children}</button> 
        </div>
    )
}
