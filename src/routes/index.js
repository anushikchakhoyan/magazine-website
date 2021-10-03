import React, { lazy } from 'react';
import { withTranslation } from 'react-i18next';
import { Route, Switch, Redirect } from 'react-router-dom';

import RouteTo from './RouteTo';
import NotFound from "../pages/NotFound";

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const Routes = ({ t }) => {
    return (
        <Switch>
            <RouteTo exact path="/login" component={Login} title={t('login')}/>
            <RouteTo exact path="/" component={Dashboard} title={t('dashboard')}/>
            <Route exact path="/404" title={t('notFound')} component={NotFound}/>
            <Redirect to="/404"/>
        </Switch>
    );
}
export default withTranslation()(Routes);
