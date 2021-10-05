import React, { lazy } from 'react';
import { withTranslation } from 'react-i18next';
import { Route, Switch, Redirect } from 'react-router-dom';

import RouteTo from './RouteTo';
import NotFound from "../pages/NotFound";
import RouteTypes from "../constants/routeTypes";

const Login = lazy(() => import('../pages/Login'));
const Users = lazy(() => import('../components/Users'));
const Posts = lazy(() => import('../components/Posts'));

const Routes = ({ t }) => {
    return (
        <Switch>
            <RouteTo exact path="/login" component={Login} title={t('login')}/>
            <RouteTo exact path="/users" component={Users} title={t('users')}  type={RouteTypes.PRIVATE}/>
            <RouteTo exact path="/posts" component={Posts} title={t('posts')}  type={RouteTypes.PRIVATE}/>
            <Route exact path="/404" title={t('notFound')} component={NotFound}/>
            <Redirect to="/404"/>
        </Switch>
    );
}
export default withTranslation()(Routes);
