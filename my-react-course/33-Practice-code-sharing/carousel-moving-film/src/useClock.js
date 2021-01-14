import { useEffect, useState } from 'react';

export default function useClock(ms) {
    const [tick , setTick] = useState(0);

    useEffect(()=>{
        const timerId = setInterval(()=>setTick(v=>v+1) , ms);
        return ()=> clearInterval(timerId);
    },[]);

    return [tick , setTick];
}