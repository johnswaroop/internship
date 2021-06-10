import React, { useState } from 'react';
import Post from './Post'

const Content = (props) => {

    const [maxPost, setMaxPost] = props.currentPost;
    const [closedPost, setClosedPost] = useState([]);

    let conStyle;
    if (props.toggle == 'list') {
        conStyle = {
            display: 'flex',
            flexDirection: 'column'
        }
    }
    else {
        conStyle = {
            display: 'grid'
        }
    }



    let postArray = [];
    if (props.newsData.length) {
        for (let i = (maxPost - 6); i < maxPost; i++) {
            if (!closedPost.includes('p' + i)) {
                postArray.push(<Post id={'p' + i} news={props.newsData[i]} toggle={props.toggle} closePost={setClosedPost} setIframe={props.setIframe} />)
            }
        }



        return (
            <div className='content' key={maxPost} style={conStyle} >

                {
                    postArray
                }

            </div>


        );
    }
    else {
        return null
    }





};

export default Content;