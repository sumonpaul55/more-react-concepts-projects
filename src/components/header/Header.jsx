import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch((err) => console.log(err))
    }

    return (
        <nav className='mt-5'>
            <div className="container mx-auto">
                <div className='space-x-5 text-xl flex justify-between'>
                    <div className='space-x-5'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/login">login</NavLink>
                        <NavLink to="/registration">registration</NavLink>
                        <NavLink to="/order">Order</NavLink>
                    </div>
                    {
                        user ?
                            <div className='flex gap-2 items-center'>
                                <h2>{user.email}</h2>
                                <button onClick={handleLogout} className='bg-indigo-200 px-3 py-1 rounded-md'>Sign Out</button>
                            </div> :
                            <Link to="registration" className='bg-indigo-200 px-3 py-1 rounded-md'>Sign Up</Link>
                    }
                </div>
            </div>
        </nav >
    );
};

export default Header;