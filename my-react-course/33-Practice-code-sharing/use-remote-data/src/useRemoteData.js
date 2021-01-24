import { useEffect, useState } from 'react';
import $ from 'jquery';

export default function useRemoteData(url) {
    const [data , setData] = useState(null);
    const [error ,setError] = useState(null);
    const isLoading = data ? false : true;

    useEffect(()=> {
        setData(null);
        setError(null);
        const xhr = $.getJSON(url , setData).fail((jqxhr, textStatus, error)=>setError(`Request Failed: ${textStatus}. ${error}`));
        return()=>xhr.abort();
    },[url]);

    return [data , isLoading , error];
}