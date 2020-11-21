import React from 'react';
import {Route, Switch,} from "react-router-dom";
import './index.css';

// import Sidebar from './component/section'
import Home from './pages/home';
import Aboutus from './pages/about';
import PrivacyPolicy from './pages/privacy-policies';
import NotFound from './pages/notfound';

class Routes extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
    render() {
      return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-us" exact component={Aboutus} />
            <Route path="/privacy-policy" exact component={PrivacyPolicy} />
            <Route path="*" component={NotFound} />
        </Switch>
        
      );
    }
};

export default Routes;