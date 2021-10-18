import React, { useEffect, useState } from 'react';
import Consultant from '../Consultant/Consultant';
const Consultants = () => {
    const [consultants, setConsultants] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setConsultants(data))

    }, [])
    return (
        <div className="grid justify-items-center">
             <h2 className="pt-5 text-xl">The Team</h2>
            <h2 className="p-5 text-5xl font-bold">Meet Our Consultants</h2>
            <div id="services" className=" w-2/3 my-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                    {
                        consultants.map(consultant => <Consultant
                            key={consultant.id}
                            consultant={consultant}
                        >
                        </Consultant>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Consultants;