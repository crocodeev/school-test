import React, { FunctionComponent } from 'react'
import { CustomButton as Button } from 'src/shared/ui/Button'
import { useAppSelector, useAppDispatch } from 'src/shared/store/store'
import { next } from 'src/shared/store/store'
import { FORM_ID } from 'src/shared/constants/constants'

export const NextButton: FunctionComponent = () => {

    const isStarted = useAppSelector(state => state.quiz.isStarted)
    const isCompleted = useAppSelector(state => state.quiz.isCompleted)

    return (
        isStarted ?
        <Button type="submit" form={FORM_ID} onClick={() => {}} disabled={ isCompleted } text="Ответить" />
        :
        null
    )
}
    