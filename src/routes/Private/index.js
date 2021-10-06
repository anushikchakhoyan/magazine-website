import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {Route, Redirect} from 'react-router-dom';

import Loading from '../../components/Loading';
import Layout from "../../components/Layout";
import {hasToken} from "../../helpers/storage.helper";

const PrivateRoute = ({component: Component, title, ...rest}) => (<Route
        {...rest}
        render={props => {
            if (!hasToken()) {
                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                );
            }

            return (
                <>
                    <Helmet>
                        <title>{title}</title>
                    </Helmet>
                    <Suspense fallback={<Loading/>}>
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    </Suspense>
                </>
            );
        }}
    />
);

PrivateRoute.propTypes = {
    title: PropTypes.string,
    component: PropTypes.any
};

export default PrivateRoute;
