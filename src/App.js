import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () =>{

  return(
    <Router>
      <div className='app'>
        <Switch>
          {/* BASKET PAGE */}
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>

          {/* LOGIN PAGE */}
          <Route path='/login'>
            <Login/>
          </Route>

          {/* HOME PAGE */}
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>

        </Switch>  
      </div>
    </Router>
  );
}

export default App;