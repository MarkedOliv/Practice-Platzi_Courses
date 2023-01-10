import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/global.css';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/recovery-password' component={RecoveryPassword}></Route>
                    <Route path='*' component={NotFound}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;