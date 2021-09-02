import '../css/Navbar.css'

const Navbar = () => {
    return ( 
        <div className="nav">
            <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="index.html">LTC Academy</a></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#pricing">Courses</a></li>
                        <li><a className="nav-link scrollto" href="#about">About Us</a></li>
                        <li><a className="nav-link scrollto" href="#faq">FAQs</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact Us</a></li>
                        <li><a className="nav-link scrollto" href="#team">Our Team</a></li>
                        <li><a className="getstarted scrollto" href="/"  target="_blank">Book Free Class</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
        </div>
    );
}
 
export default Navbar;