import { useEffect, useRef, useState } from "react"



export const useTimer = (initialTime: number, callback: (time: number) => void): number => {


    const [ time, setTime ] = useState(initialTime)
    const interval = useRef({ interval: 1000, timePassed: Date.now()})

    useEffect(() => {

        const millis = Date.now() - interval.current.timePassed
        const realInterval = interval.current.interval - millis

        setTimeout(() => {
        
            setTime(time => time - 1 )
            interval.current.timePassed = Date.now()
            callback(time)
    
        }, realInterval)

    },[time])

    return time
}