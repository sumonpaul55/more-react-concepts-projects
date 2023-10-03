import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div className='container mx-auto'>
            <h1 className="text-5xl">home</h1>
        </div>
    );
};

export default Home;