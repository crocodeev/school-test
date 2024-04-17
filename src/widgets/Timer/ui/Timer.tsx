import React, { FunctionComponent, useEffect } from 'react'
import { Counter } from './Counter'
import { useAppSelector } from 'src/shared/store/store'
import { toMMss } from '../lib/formatTime'
import '../styles/styles.css'


export const Timer: FunctionComponent = () => {

    const isCompleted = useAppSelector(state => state.quiz.isCompleted)
    const isStarted = useAppSelector(state => state.quiz.isStarted)
    const initial = useAppSelector(state => state.quiz.timer.initial)

    useEffect

    if (!isStarted) {
        const formattedTime = toMMss(initial)

        return <span role="timer" className='timer__counter'>{formattedTime}</span>

    } else if (isCompleted) {
        
        return <span role="timer" className='timer__counter'>00:00</span>
        
    }else{

        return <Counter />
    }
}