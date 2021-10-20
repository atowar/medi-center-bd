import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";


const ServiceDetails = () => {
   
    const {serviceId} = useParams();
    const [service, setService]= useState([]);
    useEffect( () => {
        const url = `data.json/${serviceId}`
        fetch (url)
        .then (res => res.json())
        .then (data => console.log(data))
    } ,[])
    


    return (
        <div>
            <h2>service details ID: {serviceId} </h2>
            <Link to={`/apointment`}>
                        <button className="p-3 text-xl text-white rounded-md">Make and apointment</button>
            </Link>

        </div>
    );
};

export default ServiceDetails;