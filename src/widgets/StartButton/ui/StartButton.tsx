import React, { FunctionComponent } from 'react'
import { useAppSelector, useAppDispatch, setStarted } from 'src/shared/store/store'
import { CustomButton as Button } from 'src/shared/ui/Button'

export const StartButton: FunctionComponent = () => {

    const isStarted = useAppSelector(state => state.quiz.isStarted)
    const dispath = useAppDispatch()

    const handleClick = () => {
        dispath(setStarted())
    }

    return (
        <Button  onClick={handleClick} disabled={ isStarted } text="Начать"/>
    )
}
    