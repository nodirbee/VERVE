import { useState } from "react";
import "./Product.css"

function Product(props){

    const [like,setlike]= useState(0);
    const handellies=()=>{
        setlike(like+1);
    }

    const [image,setImage]=useState(props.photo);
    const handelImage=()=>{
        setImage(props.secphoto);
    }

    const handelDefImage=()=>{
        setImage(props.photo);
    }
    return(
        <header className="P">
          
            <div className="image-container">
    <img src={image} onMouseOver={handelImage} onMouseLeave={hadelDefImage} alt={props.name} />
    <button className="hover-button">{props.buttonText}</button>
  </div>
            <p>{props.name}</p>
            <span>{props.about}</span>
            <h1>{props.price}</h1>
           

        </header>

    );


}



export default Product;