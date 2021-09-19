import anited from '../assets/img/hero-img.png';
const Header = () => {
    return ( 
        <div className="header">
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                    <h1>INFLUENCING THE NEXT-GEN DEVS</h1>
                    <h2>We are a group of skilled professionals dedicated to offering the best IT education to students in grades 8 and up who think OOTB.</h2>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                    </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                    <img src={anited} className="img-fluid animated" alt="anited" />
                    </div>
                </div>
                </div>
            </section>
        </div>
     );
}
 
export default Header;