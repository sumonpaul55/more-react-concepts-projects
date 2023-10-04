import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import PropTyeps from "prop-types"
import { Navigate } from 'react-router-dom';

const PrivetRout = ({ children }) => {

    const { user } = useContext(AuthContext)
    if (user) {
        return children
    }
    return <Navigate to="/login"></Navigate>
};
PrivetRout.propTypes = {
    children: PropTyeps.node
}
export default PrivetRout;