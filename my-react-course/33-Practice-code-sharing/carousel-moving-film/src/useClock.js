import { useEffect } from 'react';

export default function useClockActivatesFunction(ms , fn) {
    useEffect(()=>{
        const timerId = setInterval(fn , ms);
        return ()=> clearInterval(timerId);
    },[]);
}
