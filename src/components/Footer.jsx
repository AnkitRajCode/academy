const Footer = () => {
    return ( 
        <div className="footer">
            <footer id="footer">
                <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>Get latest updates in your mail</p>
                        <form action="" method="post">
                        <input type="email" name="email" /><input type="submit" value="Subscribe" />
                        </form>
                    </div>
                    </div>
                </div>
                </div>

                <div className="footer-top">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h3>LTC Academy</h3>
                        <p>
                        Plot No. 69 <br/>
                        Patia, OD 751024<br/>
                        India<br/><br/>
                        <strong>Phone:</strong> +91 7381 75 7879<br/>
                        <strong>Email:</strong> info@ltcacademy.com<br/>
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Courses</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">C Programming</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">C++</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Python</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">SQL</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Java</a></li>

                        </ul>
                        
                    </div>
                    
                    <div className="col-lg-3 col-md-5 footer-links">
                        <h2> </h2>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Web Designing</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Data Analysis</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Machine Learning</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Search Engine Optimization</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Graphic Designing</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">MS Excel</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/">Android</a></li>




                        </ul>
                        
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Social Networks</h4>
                        <p>Check out the latest updates and join the conversation on our social media channels.</p>
                        <div className="social-links mt-3">
                        <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="/" className="discord"><i className="bx bxl-discord"></i></a>
                        <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    </div>
                </div>
                </div>

                <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>LTC Academy</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a>Adeebullah Sheikh</a>
                </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;