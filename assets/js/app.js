import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
    Navbar,
    DataTable,
    CreateForm,
} from './components';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={DataTable}/>
                    <Route path="/create" component={CreateForm}/>
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
