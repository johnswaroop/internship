import React, { useState } from 'react';
import { motion } from "framer"

import getCountryList from '../hooks/getCountryList'
import Select from 'react-select';
import validator from 'validator';




const Form = (props) => {
    const country = getCountryList();
    const [openForm, setOpenForm] = props.openForm;
    let navWidth;
    if (props.openNav) {
        navWidth = {
            width: '70rem'
        }
    }
    else {
        navWidth = {
            width: '28rem'
        }
    }

    const [formState, setFormState] = useState({ email: '', phone_pre: '', phone: '' });


    function formHandler(e) {

        setFormState((f) => {
            f[e.target.name] = e.target.value;

            return { ...f }
        })


    }

    function formHandlerCountry(e) {

        setFormState((f) => {
            f.country = e.label;

            return { ...f }
        })


    }

    function validateForm(e) {
        e.preventDefault();

        if (validator.isEmail(formState.email)) {


            if (validator.isMobilePhone(formState.phone_pre + formState.phone)) {
                console.log(formState);
                alert('submission sucessfull !');
                setOpenForm((cs) => {
                    return !cs;
                })
            }
            else {
                alert('Please ensure entered phone number is valid')
            }
        }
        else {
            alert('Please ensure entered email id is valid')
        }




    }

    return (
        <motion.div key={props.toggle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className='form' >
            <form onSubmit={validateForm} >
                <h1>Thank you so much taking the time!</h1>
                <p>Please provide the below details!</p>
                <span>
                    <label htmlFor="">First Name :</label>
                    <input name='first_name' className='first-name' type="text" onChange={formHandler} value={formState.first_name} required />
                </span>
                <span>
                    <label htmlFor="">Last Name :</label>
                    <input name='last_name' className='last-name' type="text" onChange={formHandler} value={formState.last_name} required />
                </span>
                <span>
                    <label htmlFor="">Address :</label>
                    <textarea name='address' className='address' type="text" rows='8' onChange={formHandler} value={formState.address} required />
                </span>
                <span>
                    <label htmlFor="" style={{ marginBottom: '0.5rem' }}>Country</label>

                    <Select options={country} onChange={formHandlerCountry} required />

                </span>
                <span>
                    <label htmlFor="">Email ID :</label>
                    <input name='email' className='email' type="text" onChange={formHandler} value={formState.email} required />
                </span>
                <span>
                    <label htmlFor="">Phone Number :</label>
                    <div className='phone_block'>
                        <input name='phone_pre' className='phone-pre' type="text" onChange={formHandler} value={formState.phone_pre} required />
                        <input name='phone' className='phone' type="text" onChange={formHandler} value={formState.phone} />
                    </div>

                </span>
                <button className='formBtn'>Submit Feedback</button>
            </form>
        </motion.div>

    );
};

export default Form;