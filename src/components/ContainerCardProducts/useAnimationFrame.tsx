import React from "react";
import { useEffect, useRef, useState } from "react";
type callbackProp = {
    // [callback] : () => void
}

export const useAnimationFrame = (
    callback: React.Dispatch<React.SetStateAction<unknown>>) => {
    // const [count, setCount] = useState(0)

    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = useRef<number>();// id is number
    const previousTimeRef = useRef<number>();

    const animate = (time: number) => {
        if (previousTimeRef.current) {
            const deltaTime = time - previousTimeRef.current;
            // Pass on a function to the setter of the state
            // to make sure we always have the latest state
            // setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
            callback(deltaTime);
        }
        // this runs only once 
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);

        //cleanup function 
        return function cleanup() { cancelAnimationFrame(requestRef.current) };
    }, []); // Make sure the effect runs only once
}
