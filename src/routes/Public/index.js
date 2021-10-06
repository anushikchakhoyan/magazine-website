import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { hasToken } from '../../helpers/storage.helper';
import Loading from '../../components/Loading';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (hasToken()) {
                return <Redirect to="/" />;
            }

            return (
                <Suspense fallback={<Loading />}>
                    <Component {...props} />
                </Suspense>
            );
        }}
    />
);

export default PublicRoute;
