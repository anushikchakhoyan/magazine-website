import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import Loading from '../../components/Loading';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            return (
                <Suspense fallback={<Loading />}>
                    <Component {...props} />
                </Suspense>
            );
        }}
    />
);

export default PublicRoute;
