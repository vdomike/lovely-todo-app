import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isLoaded) {
          if (auth.uid) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: '/signin',
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }
      }}
    />
  );
};
const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(ProtectedRoute);
