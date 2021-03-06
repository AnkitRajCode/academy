import '../css/Navbar.css'

const Navbar = () => {
    return ( 
        <div className="nav">
                <nav id="header" className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                <h1 className="logo "><a href="index.html">LTC Academy</a></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li className="nav-item"><a className="nav-link scrollto active" href="#pricing">Courses</a></li>
                        <li className="nav-item"><a className="nav-link scrollto active" href="#about">About Us</a></li>
                        <li className="nav-item"><a className="nav-link scrollto active" href="#faq">FAQs</a></li>
                        <li className="nav-item"><a className="nav-link scrollto active" href="#contact">Contact Us</a></li>
                        <li className="nav-item"><a className="nav-link scrollto active" href="#team">Our Team</a></li>
                    </ul>
                        <a className="getstarted scrollto" href="/book"  target="_blank">Book Free Class</a>
                </div>
            </div>
                </nav>
        </div>
    );
}
 
export default Navbar;