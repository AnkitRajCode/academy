import '../css/Form.css'
import logo from '../assets/img/favicon.png'
const Form = () => {
    return ( 
        <div className="form">
            <div className="registration-form">
        <form>
            <div className="form-icon">
                <img src={logo} alt="logo" />
            </div>
			<div className="h3 text-center"> BOOK A FREE DEMO CLASS</div>
            <div className="form-group">
                <input type="text" className="form-control item" id="First Name" placeholder="First Name" />
            </div>
			<div className="form-group">
                <input type="text" className="form-control item" id="Last Name" placeholder="Last Name" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="email" placeholder="Email" />
            </div>
			<div className="form-group">
                <input type="text" className="form-control item" id="Phone Number" placeholder="Phone No." />
            </div>
			
			<div className="form-group">
			
			<input type="date" className="form-control item" placeholder="Book Date" />
			</div>
			
           
			<div className="form-group">
                <input type="text" className="form-control item" id="Current Education Level" placeholder="Current Education Level" />
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account">Submit</button>
            </div>
			
			<h1 className="notify"> *Time will be notified through E-mail.</h1>
			
        </form>

    </div>
        </div>
     );
}
 
export default Form;