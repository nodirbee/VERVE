import React from "react";
import "./Header1.css"

function Header1(){
return(
<header className="H1">
    <div className="left">
        <p>LOVE IS LOVE!</p>
        <span>20% of Streetlevel sales will be donated to Equality California from 05/30 - 06/01</span>
        <button>Shop & Support</button>
    </div>
    <div className="right"><img src="./image/cofe.png"/></div>
</header>
);
}

export default Header1;