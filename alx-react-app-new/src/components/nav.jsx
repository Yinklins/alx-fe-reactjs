function NavBar() {

    const Nav = ['Home','About','ContactUs','Portfolio'];

    return ( 
        <>
        <div className="logo">logo </div>
        <div>
        <nav className="navBar">
            <ul>
                {Nav.map((Nav) => <li>{Nav}</li>)}
            </ul>
        </nav>
        </div>
        </>
     );
}
 

export default NavBar;