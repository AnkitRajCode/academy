import {BrowserRouter, Route , Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';

const App = () => {
    return (
       <div className="App">
         <Navbar />
         <BrowserRouter>
            <Switch>
              <Route exact path={"/"}>
                <Landing />
              </Route>
              <Route exact path={"/apply"}>
                <Form />
              </Route>
              <Route render={()=><div className="main_title_error">404 : Page Not Found</div>} />
            </Switch>
         </BrowserRouter>
         <Footer />
       </div>
    );
}

export default App;