
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Apointment from './Components/Pages/Apointment/Apointment';
import ConsultantProfile from './Components/Pages/ConsultantProfile/ConsultantProfile';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Signin from './Components/Pages/Signin/Signin';
import SignUp from './Components/Pages/SignUp/SignUp';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/consultant/:consultantId">
            <ConsultantProfile></ConsultantProfile>
          </Route>
          <Route path="/apointment">
            <Apointment></Apointment>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
