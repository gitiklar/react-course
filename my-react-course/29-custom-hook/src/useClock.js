import { useEffect , useRef ,useState} from 'react';

export function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      if (delay !== null) {
        let id = setInterval(()=>savedCallback.current(), delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}
  


export function useTimer(ms = 1000) {
  const [tick , setTick] = useState(0);

  function updateTick() {
    setTick(v => v + 1);
  }

  useEffect(()=>{
    const timerId = setInterval(updateTick , ms);
    return ()=>clearInterval(timerId);
  },[]);

  return tick;
}