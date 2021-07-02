import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ApplicationProvider } from '../../../App';
const PrivetRoute = ({ children, ...rest }) => {
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;