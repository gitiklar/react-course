import {useState , useEffect} from 'react';
import $ from 'jquery';

export default function dataByID(url) {
    const [data , setData] = useState(null);

    useEffect(()=>{
        setData(null);
        const xhr = $.getJSON(url , setData);
        return () => xhr.abort();
    }, [url]);
    
    return data;
}