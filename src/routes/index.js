import React, { lazy } from 'react';
import { withTranslation } from 'react-i18next';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from "../pages/NotFound";
import PrivateRoute from './Private';
import PublicRoute from "./Public";

const Users = lazy(() => import('../components/Users'));
const Posts = lazy(() => import('../components/Posts'));
const Login = lazy(() => import('../pages/Login'));

const Routes = ({ t }) => {
    return (
        <Switch>
            <PublicRoute exact path="/login" component={Login} title={t('login')} />
            <PrivateRoute exact path="/users" component={Users} title={t('users')} />
            <PrivateRoute exact path="/posts" component={Posts} title={t('posts')} />
            <Route exact path="/404" title={t('notFound')} component={NotFound}/>
            <Redirect to="/404"/>
        </Switch>
    );
}
export default withTranslation()(Routes);
