import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import RouteTo from './RouteTo';

const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const Routes = ({ t }) => (
    <Switch>
        <RouteTo path="/login" component={Login} title={t('login')}/>
        <RouteTo exact path="/" component={Dashboard} title={t('dashboard')}/>
        <Route component={NotFound} title={t('not_found')} />
    </Switch>
);

export default withTranslation()(Routes);
