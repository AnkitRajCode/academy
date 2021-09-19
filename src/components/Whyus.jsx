const Whyus = () => {
    return ( 
        <div className="whyUs">
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">

                    <div className="row">

                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                        <div className="content">
                            <h3>We've witnessed time and time again at <strong> LTC Academy</strong></h3>
                            <p>How the apparently simple act of creating can be a spark for personal growth, transformation, and discoveries. We aim to encourage and spread the type of intellectual inquiry that leads to increased expression, learning, and application. With Live Online Classes, you get to understand in-demand skills and get to select from a variety of courses taught by real-life professionals.</p>
                        </div>

                        <div className="accordion-list">
                            <ul>

                                <li>
                                <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> LTC Academy is an online educational community <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                    <p>
                                    with thousands of lessons on topics such as C and C++, SOL, HTML and CSS, DATA SCIENCE, and more. Thousands of people join to discover inspiration and take the next step in their professional path. We aim to enhance everyone's accessibility to high education, no matter where they live. Through research, we believe to strengthen teaching and learning.
                                    </p>
                                </div>
                                </li>
                                
                            </ul>
                        </div>

                        <div className="row px-5 ml-4">
                            <h6>At LTC Academy, We Emancipate:</h6>
                            
                            <ul className="col-md-4" type="dot">
                                <li>Members to</li>
                                <ul type="circle">
                                    <li>Get encouraged.</li>
                                    <li>Master new skills.</li>
                                    <li>Devise discoveries.</li>
                                </ul>
                            </ul>
                            <ul className="col-md-4" type="dot">
                                <li>Teachers to</li>
                                <ul type="circle">
                                    <li>Share expertise.</li>
                                    <li>Earn money.</li>
                                    <li>Give back.</li>
                                </ul>
                            </ul>
                            <ul className="col-md-4" type="dot">
                                <li>Employees to</li>
                                <ul type="circle">
                                    <li>Think OOTB.</li>
                                    <li>Make an impact.</li>
                                    <li>Live a full life.</li>
                                </ul>
                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img WhyUsImage" data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
                    </div>

                </div>
            </section>
        </div>
     );
}
 
export default Whyus;