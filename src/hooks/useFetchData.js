import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('https://api.first.org/data/v1/news')
            .then((res) => {
                // console.log(res.data.data);
                setData(res.data.data);
            }).catch((er) => {
                console.log(er);
            })

    }, []);

    return data;
}

export default useFetchData;
