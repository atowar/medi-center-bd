import './Signin.css'
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Signin = () => {
    const {user, googleSignIn} = useFirebase();
    return (
        <>
            <div>
                <h2>Sign-In</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Type your best email here"/> <br />
                    <input type="password" name="" id="" /><br />
                    <input type="submit" value="submit" />
                </form>
                <p>New user? <Link to="/signup">Sign-Up</Link></p>
            </div>
            <div><button onClick ={googleSignIn}
            >Google Sign-In
            </button></div>
        </>
    );
};

export default Signin;