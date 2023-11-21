const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><i class="fa-solid fa-person-dress"></i>Fashion Store</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/about">Products</a>
                <a href="/about">Contact</a>
            </div>
            <div className="icon">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </nav>
     );
}
 
export default Navbar;