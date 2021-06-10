import React from 'react';

const Pagination = (props) => {
    let pageCount = props.postCount;
    const [maxPost, setMaxPost] = props.currentPost;

    console.log(pageCount);

    function handlePage(e) {
        let index = e.target.id;

        if (index == '0') {
            setMaxPost((c) => {
                if (c > 6)
                    return c - 6;
                return c;
            })
        }
        else if (index == '1') {
            setMaxPost((c) => {
                return c;
            })
        }
        else if (index == '2') {
            setMaxPost((c) => {
                if (c < (Math.floor(pageCount / 6) * 6) - 1)
                    return c + 6;
            })
        }

    }

    function handleArrow(e) {

        if (e.target.id == 'increase') {
            setMaxPost((c) => {
                if (c < ((Math.floor(pageCount / 18) * 18) - 1))
                    return c + 18;
                return c;
            })
        }

        if (e.target.id == 'decrease') {
            setMaxPost((c) => {
                if (c > 18)
                    return c - 18;
                return c;

            })
        }

    }
    return (
        <div className='pagination'>
            <img id='decrease' className='arrow left' src="/assets/arrow.svg" alt="" onClick={handleArrow} />
            <div className='pagination-btn' onClick={handlePage}>

                {(maxPost / 6) - 1 >= 1 ? <p id='0'>{(maxPost / 6) - 1}</p> : null}
                <p style={{ backgroundColor: 'white', color: 'black' }} id='1' >{(maxPost / 6)}</p>
                <p id='2'>{(maxPost / 6) + 1}</p>
            </div>
            <img id='increase' className='arrow right' src="/assets/arrow.svg" alt="" onClick={handleArrow} />
        </div>
    );
};

export default Pagination;