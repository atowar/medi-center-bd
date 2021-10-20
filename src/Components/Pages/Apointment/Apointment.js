import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Apointment = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const {user} = useAuth();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("firstName", { required: true, maxLength: 20 })} placeholder="First Name" /> <br />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="Last Name"/> <br />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select> <br />
                <input type="number" {...register("age", { min: 18, max: 99 })} placeholder/> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Apointment;