import React from 'react';
import useFetchImage from '../hooks/useFetchImage'
import { motion, AnimatePresence } from "framer"

const Post = (props) => {

    const news = props.news;
    const imageUrl = useFetchImage();
    function closePost(e) {
        props.closePost((p) => {
            p.push(e.target.id)
            return [...p];
        })
    }

    function openLink(e) {
        if (e.target.name != 'cross') {
            props.setIframe(news.link)
        }

    }


    if (props.toggle == 'list') {
        return (

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }}
                className='post' onClick={openLink} >
                <div className='post-data'>

                    <img className='post-image' src={imageUrl} alt="" />
                    <span className='post-text'>
                        <input className='p-title' readonly
                            value={news.title} />

                        <input className='p-summary' readOnly value={news.summary} />

                        <input className='p-published' readOnly value={news.published} />
                    </span>

                </div>
                <span className='remove-post'>
                    <img id={props.id} name='cross' src="/assets/cross.svg" alt="" onClick={closePost} />
                </span>
            </motion.div>


        )
    }
    else {

        return (
            <motion.div key={props.toggle} className='post-card' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} onClick={openLink}>
                <h1>{news.title}</h1>
                <h3 className='summary-card'>{news.summary}</h3>
                <p>{news.published}</p>
                <img className='preview' src={imageUrl} alt="" />
                <img id={props.id} name='cross' className='post-card-cancel' src='/assets/cross.svg' alt="" onClick={closePost} />
            </motion.div>
        )
    }
}



export default Post;