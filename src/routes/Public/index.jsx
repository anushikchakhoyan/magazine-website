import {Helmet} from "react-helmet";
import React, { Suspense } from 'react';
import {Link, Route} from 'react-router-dom';
import {Breadcrumbs} from "@mui/material";
import {useTranslation} from "react-i18next";

import Loading from '../../components/Loading';

const PublicRoute = ({ component: Component, title, ...rest }) => {
    const {t} = useTranslation();

    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <>
                        <Helmet>
                            <title>{t('appName')} - {title}</title>
                        </Helmet>
                        <Suspense fallback={<Loading/>}>
                            <Component {...props} />
                        </Suspense>
                    </>
                );
            }}
        />
    );
}

export default PublicRoute;
