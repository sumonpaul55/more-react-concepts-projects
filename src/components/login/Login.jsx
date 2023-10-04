import React, { useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then((result) => {
                console.log(result.user)
                e.target.reset();
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='container mx-auto'>
            <form className='' onSubmit={handleLogin}>

                <div>
                    <input type="email" name='email' placeholder='email' required className='border p-2 my-2' />
                </div>
                <div>
                    <input type="password" name='password' placeholder='password' required className='border p-2 my-2' />

                </div>
                <input type="submit" value="Submit" className='px-4 py-2 bg-indigo-400 text-white mt-3 rounded-md' />
            </form>
            <div className='flex items-center gap-1'>
                <p>Are You new here? Please register</p> <Link to="/registration" className='text-blue-800 font-semibold'>Register</Link>
            </div>
        </div>
    );
};

export default Login;