import React, { FunctionComponent } from 'react'
import { CustomButton as Button } from 'src/shared/ui/Button'
import { useAppSelector, useAppDispatch } from 'src/shared/store/store'
import { next } from 'src/shared/store/store'

export const NextButton: FunctionComponent = () => {

    const isStarted = useAppSelector(state => state.quiz.isStarted)
    const isCompleted = useAppSelector(state => state.quiz.isCompleted)
    const dispath = useAppDispatch()

    const handleClick = () => {
        dispath(next())
    }

    return (
        isStarted ?
        <Button onClick={handleClick} disabled={ isCompleted } text="Ответить" />
        :
        null
    )
}
    