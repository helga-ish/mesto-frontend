
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
    return (
      <Routes>
      <Route exact>
        {
          () => props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" replace/>
        }
      </Route>
      </Routes>
  )}

  export default ProtectedRoute;