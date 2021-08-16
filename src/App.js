import './css/App.css';
import './css/bootstrap.css';
import './css/breadcrumb.css';
// import './css/font-awesome.min.css';
import './css/responsive.css';
// import './css/style.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
// import Landing_all_components from './components/AllComponents';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
