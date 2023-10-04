import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mt-5'>
            <div className="container mx-auto">
                <div className='space-x-5 text-xl flex justify-between'>
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/login">login</NavLink>
                        <NavLink to="/registration">registration</NavLink>
                    </div>
                    <NavLink className="bg-indigo-200 px-3 py-1 rounded-md" to="/registration">Sign up</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;