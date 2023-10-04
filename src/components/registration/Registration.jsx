/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Registration = () => {
    // create use in firebase
    const { createUser } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked;
        createUser(email, password)
            .then((result) => {
                console.log(result.user)
                e.target.reset();
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='container mx-auto'>
            <form className='' onSubmit={handleLogin}>
                <div>
                    <input type="text" name='name' placeholder='Name' required className='border p-2 my-2' />
                </div>
                <div>
                    <input type="email" name='email' placeholder='email' required className='border p-2 my-2' />
                </div>
                <div>
                    <input type="password" name='password' placeholder='password' required className='border p-2 my-2' />
                    <br />
                    <input type="checkbox" id='checkbox' name='checkbox' /> <label htmlFor="checkbox">Accept Terms & conditions</label>
                </div>
                <input type="submit" value="Submit" className='px-4 py-2 bg-indigo-400 text-white mt-3 rounded-md' />
            </form>
            <div className='flex items-center gap-1'>
                <p>Do You have already an Account</p> <Link to="/login" className='text-blue-800 font-semibold'>Login</Link>
            </div>
        </div>
    );
};

export default Registration;