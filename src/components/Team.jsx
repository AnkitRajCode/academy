import person1 from '../assets/img/team/prtk1.jpg'
import person2 from '../assets/img/team/adeeb.jpg'

const Team = () => {
    return ( 
        <div className="team">
            <section id="team" className="team section-bg">
                <div className="container" >

                    <div className="section-title">
                    <h2>Team</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                    <div className="col-lg-6">
                        <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                        <div className="pic"><img src={person1} className="img-fluid" alt="P1" /></div>
                        <div className="member-info">
                            <h4>Prateek Rajan</h4>
                            <span>President</span>
                            <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                            <div className="social">
                            <a href="/"><i className="ri-twitter-fill"></i></a>
                            <a href="/"><i className="ri-facebook-fill"></i></a>
                            <a href="/"><i className="ri-instagram-fill"></i></a>
                            <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                        <div className="pic"><img src={person2} className="img-fluid" alt="P2" /></div>
                        <div className="member-info">
                            <h4>Adeebullah Sheikh</h4>
                            <span>Chief Executive Officer</span>
                            <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                            <div className="social">
                            <a href="/"><i className="ri-twitter-fill"></i></a>
                            <a href="/"><i className="ri-facebook-fill"></i></a>
                            <a href="/"><i className="ri-instagram-fill"></i></a>
                            <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Team;