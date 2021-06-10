import React from 'react';

const Iframe = (props) => {

    const [iframeLink, setIframeLink] = props.link
    function closeFrame(e) {
        if (e.target.id == 'outerFrame') {
            setIframeLink('');
        }
    }
    return (
        <div id='outerFrame' className='frame' onClick={closeFrame}>
            <iframe src={iframeLink}></iframe>
        </div>
    );
};

export default Iframe;