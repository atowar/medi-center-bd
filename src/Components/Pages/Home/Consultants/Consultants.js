import React, { useEffect, useState } from 'react';
import useService from '../../../../Hooks/useService';
import Consultant from '../Consultant/Consultant';
const Consultants = () => {
    const [services] = useService();
    
    return (
        <div className="grid justify-items-center">
             <h2 className="pt-5 text-xl">The Team</h2>
            <h2 className="p-5 text-5xl font-bold">Meet Our Consultants</h2>
            <div className=" md:w-2/3 lg:w-2/3 my-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                    {
                        services.filter (selectedConsultant => selectedConsultant.id<=4).map(consultant => <Consultant
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