import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import PropTyeps from "prop-types"
import { Navigate } from 'react-router-dom';

const PrivetRout = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='container mx-auto text-center mt-52'>
            <button type="button" className="bg-indigo-500 text-white mx-auto" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing...
            </button>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login"></Navigate>
};
PrivetRout.propTypes = {
    children: PropTyeps.node
}
export default PrivetRout;