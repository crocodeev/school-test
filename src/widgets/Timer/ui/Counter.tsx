import React, { FunctionComponent } from 'react'
import { useTimer } from '../lib/useTimer'
import { toMMss } from '../lib/formatTime'
import { useAppDispatch, useAppSelector, setTime } from 'src/shared/store/store';
import '../styles/styles.css'

export const Counter: FunctionComponent = () => {

    const dispatch = useAppDispatch()
    const timer = useAppSelector(state => state.quiz.timer)
    const secondsLeft = timer.secondsLeft
   
    const time = useTimer(secondsLeft, () => dispatch(setTime(time)))
  
    const formattedTime = toMMss(time)

    return (
            <span role='timer' className='timer__counter'>{formattedTime}</span>
    )
}