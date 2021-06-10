import React, { useState } from 'react';
import Form from './Form'
import { motion } from "framer"



const clickedStyle = {
    backgroundColor: 'rgba(163, 255, 211, 1)',
    filter: 'opacity(100%)',
    padding: '1rem'
}



const SideNav = (props) => {

    const [toggle, setToggle] = props.toggle
    const [openForm, setOpenForm] = useState(false);

    function clickedBtn(btn) {
        if (btn == toggle) return clickedStyle
        return null
    }

    function toggleHandler(e) {
        setToggle(e.target.id);
    }

    function expandHandler(e) {
        setOpenForm((s) => {
            return !s;
        })
    }

    let feedbackStyle = !openForm ? { backgroundColor: 'rgba(163, 255, 211, 1)' } :
        { backgroundColor: 'rgba(255, 175, 175, 1)' }





    return (
        <div className='side-nav'>
            <div className='nav-col'>
                <div className='greeting'>
                    <img id='profile' src='/assets/profile.jpg' alt="" />
                    <span id='greeting-text'>
                        <h1>Hi Reader,</h1>
                        <p>Here's your news</p>
                    </span>
                </div>

                {!openForm ?
                    <div className="toggle">
                        <h1>View Toggle</h1>
                        <span className='toggle-btns'>
                            <img id='card' className='Tbtn' src="/assets/card.svg" alt="" style={clickedBtn('card')} onClick={toggleHandler} />
                            <img id='list' className='Tbtn' src="/assets/list.svg" alt="" style={clickedBtn('list')} onClick={toggleHandler} />
                        </span>
                    </div> : null}


                <div className='feedback'>
                    <h1>Have a Feedback?</h1>
                    <span id='expandForm' onClick={expandHandler} style={feedbackStyle}>
                        <h3>We're Listening!</h3>
                    </span>
                </div>

            </div>

            { openForm ? <Form openForm={[openForm, setOpenForm]} /> : null}

        </div >

    );
};

export default SideNav;