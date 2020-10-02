import React ,{Component} from 'react';
import Footer from './Footer/FooterComponent';
import Header from './Header/HeaderComponent';
import Home from './Home/HomeComponent';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component{
    render(){
        return(

            <div>
            <Header/>

            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" />
                 <Route path="/contact" />
                <Redirect to="/" />
            </Switch>
            
            
          
            </div>

            

        );
    }
}
export default Main;