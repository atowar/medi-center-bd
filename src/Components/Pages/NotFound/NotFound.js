import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
           <img src="https://i.ibb.co/ctTQ3Jv/Untitled-1-Recovered.jpg" alt="" />
           <Link to='/'><button>Go to Homepage</button></Link>
        </div>
    );
};

export default NotFound;