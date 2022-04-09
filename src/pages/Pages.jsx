import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import ErrorBoundary from '../util/ErrorBoundary';

const HomePage = lazy(() => import('./HomePage'));
const LoginPage = lazy(() => import('./LoginPage'));

const Pages = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={routes.HOME} exact component={HomePage} />
                    <Route path={routes.LOGIN} exact component={LoginPage} />
                </Switch>
            </Suspense>
        </ErrorBoundary>
    )
};

export default Pages;