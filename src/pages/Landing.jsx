import Aboutus from "../components/Aboutus"
import Contact from "../components/Contact"
import Course from "../components/Course"
import FAQ from "../components/FAQ"
import Header from "../components/Header"
import Team from "../components/Team"
import Whyus from "../components/Whyus"


const Landing = () => {
    return ( 
        <div className="landing">
            <Header/>
            <Course/>
            <Aboutus/>
            <Whyus/>
            <FAQ />
            <Contact />
            <Team />
        </div>
    );
}
 
export default Landing;