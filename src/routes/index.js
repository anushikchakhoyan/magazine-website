import React, { lazy } from 'react';
import { withTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';

import NotFound from "../pages/NotFound";
import PrivateRoute from './Private';

const NewsContainer = lazy(() => import('../pages/News'));
const SportContainer = lazy(() => import('../pages/Sport'));
const ArticleContainer = lazy(() => import('../pages/Article'));
const BusinessContainer = lazy(() => import('../pages/Business'));
const EducationContainer = lazy(() => import('../pages/Education'));
const TechnologyContainer = lazy(() => import('../pages/Technology'));
const SingleNewsContainer = lazy(() => import('../pages/SingleNews'));
const OutOfArmeniaContainer = lazy(() => import('../pages/OutOfArmenia'));

const Routes = ({ t }) => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={NewsContainer} title={t('menu.news')} />
            <PrivateRoute exact path="/news/:id" component={SingleNewsContainer} title={t('menu.news')} />
            <PrivateRoute exact path="/sport" component={SportContainer} title={t('menu.sport')} />
            <PrivateRoute exact path="/article" component={ArticleContainer} title={t('menu.article')} />
            <PrivateRoute exact path="/business" component={BusinessContainer} title={t('menu.business')} />
            <PrivateRoute exact path="/education" component={EducationContainer} title={t('menu.education')} />
            <PrivateRoute exact path="/technology" component={TechnologyContainer} title={t('menu.technology')} />
            <PrivateRoute exact path="/outOfArmenia" component={OutOfArmeniaContainer} title={t('menu.outOfArmenia')} />
            <Route title={t('notFound')} component={NotFound}/>
        </Switch>
    );
}
export default withTranslation()(Routes);
