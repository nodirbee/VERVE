import Nav from"./Nav"
import Header1 from"./Header1"
import Product from"./Product"
import products from "../data/Products.json";
function Header(){
    const items = [
        {title:"SHOP",link:"index.html"},
        {title:"DWELL DRIPPER",link:"index.html"},
        {title:"LOCATIONS",link:"index.html"},
        {title:"STORY",link:"index.html"},
        {title:"GOODS",link:"index.html"},

    ];

 const product = products.map((product) => {
  return (
    <Product
      key={product.name}
      phot={product.photo}
      name={product.name}
      about={product.about}
      price={product.price}
      buttonText={product.buttonText}
      simage={product.simage}
    />
  );
});

    return(
        <>
        <Nav list={items}/>
        <Header1/>
<div className="product-container">
    <div className="left1">
        <p>NEW ARRIVALS</p>
        <span>Explore new coffees from the best producers around the world.</span>
        <button>Shop New Arrivals</button>
    </div>
  {product}
  
</div>
        </>
    );


}

export default Header;