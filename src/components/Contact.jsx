const Contact = () => {
    return ( 
        <div className="contact">
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>

                    <div className="row">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>Plot No. 69 Patia, Bhubaneswar, OD 751024</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@ltcacademy.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+91 7381 75 7879</p>
                        </div>

                        <iframe src="https://www.google.com/maps/place/Patia,+Bhubaneswar,+Odisha/@20.3526089,85.8118284,18z/data=!4m5!3m4!1s0x3a190912b69339ab:0xa11e7186a04f1474!8m2!3d20.3532772!4d85.8265977" frameborder="0" style={{border:"0", width: "100%", height: "290px"}} allowfullscreen></iframe>
                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6">
                            <label for="name">Your Name</label>
                            <input type="text" name="name" className="form-control" id="name" required />
                            </div>
                            <div className="form-group col-md-6">
                            <label for="name">Your Email</label>
                            <input type="email" className="form-control" name="email" id="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="name">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" required />
                        </div>
                        <div className="form-group">
                            <label for="name">Message</label>
                            <textarea className="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                    </div>

                </div>
            </section>
        </div>
     );
}
 
export default Contact;