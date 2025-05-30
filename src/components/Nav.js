import "./Nav.css";

function Nav(props){
    const menuItems=props.list.map((item)=>{
        return<li><a href="{item.link}">{item.title}</a></li>
    });
    return(
        <header className="H">
        <div className="logo">
            <img src="./image/VERVE.png"/></div>
        <nav>
            <ul className="search">
                {menuItems}
            </ul>
        </nav>
        
        </header>

    );
}













export default Nav;