import axios from 'axios';
import { useState, useEffect } from 'react';



const useFetchImage = () => {

    const [url, setUrl] = useState('/assets/load.gif')

    useEffect(() => {
        axios.get(`https://picsum.photos/200`).then((res) => {
            console.log(res.request.responseURL);
            setUrl(res.request.responseURL);
        }).catch(er => console.log(er))
    }, []);

    return url;
};

export default useFetchImage;