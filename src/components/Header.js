import Nav from"./Nav"
import Header1 from"./Header1"
function Header(){
    const items = [
        {title:"SHOP",link:"index.html"},
        {title:"DWELL DRIPPER",link:"index.html"},
        {title:"LOCATIONS",link:"index.html"},
        {title:"STORY",link:"index.html"},
        {title:"GOODS",link:"index.html"},

    ];
    return(
        <>
        <Nav list={items}/>
        <Header1/>
        </>
    );


}

export default Header;