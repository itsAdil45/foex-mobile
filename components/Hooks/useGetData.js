import { useState } from 'react';
import axios from 'axios';
import { getToken } from '../Session/token';
export const useGetData = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const LoadData = () => {
        setLoading(true);
        const token = getToken(); 
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
    };

    return { loading, LoadData, data };
};
