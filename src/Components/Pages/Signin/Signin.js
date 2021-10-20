import './Signin.css'
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Signin = () => {
    const {user, googleSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'; 

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then( result=>{
            history.push (redirect_uri)
        })
    }

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
            <div><button onClick ={handleGoogleSignIn}
            >Google Sign-In
            </button></div>
        </>
    );
};

export default Signin;