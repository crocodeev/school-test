import React, { FunctionComponent } from 'react'
import { useAppSelector } from 'src/shared/store/store'
import { Segment } from './Segment'
import '../styles/style.css'

export const SegmentProgress: FunctionComponent = () => {

    const quiz = useAppSelector((state) => state.quiz)

    const length = quiz.questions.length
    const current = quiz.current

    
    return (
        <div className='progress' 
            role='progressbar'
            aria-valuemin={1}
            aria-valuemax={length}
            aria-valuenow={current}>
            {
                Array.from({ length }, (item, index) => <Segment  index={index} length={length} key={index} current={current}/>)
            }
        </div>
    )
}
    