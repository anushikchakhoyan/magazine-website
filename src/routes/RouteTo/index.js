import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {Route} from 'react-router-dom';

import Loading from '../../components/Loading';
import Layout from "../../components/Layout";
import RouteTypes from "../../constants/routeTypes";

const RouteTo = ({component: Component, title, type, ...rest}) => (<Route
        {...rest}
        render={props => {
            // if (hasToken()) {
            //     return <Redirect to="/" />;
            // }
            //
            // if (!hasToken()) {
            //     return (
            //         <Redirect
            //             to={{
            //                 pathname: '/login',
            //                 state: {from: props.location}
            //             }}
            //         />
            //     );
            // }

            return (
                <>
                    <Helmet>
                        <title>{title}</title>
                    </Helmet>
                    <Suspense fallback={<Loading/>}>
                        {type === RouteTypes.PRIVATE ?
                            (
                                <Layout>
                                    <Component {...props} />
                                </Layout>
                            ) :
                            (<Component {...props} />)
                        }
                    </Suspense>
                </>
            );
        }}
    />
);

RouteTo.propTypes = {
    title: PropTypes.string,
    component: PropTypes.any
};

export default RouteTo;
