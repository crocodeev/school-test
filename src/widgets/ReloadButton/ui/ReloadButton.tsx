import React, { FunctionComponent } from 'react'
import { CustomButton as Button } from 'src/shared/ui/Button'
import { useAppSelector } from 'src/shared/store/store'
import { FORM_ID } from 'src/shared/constants/constants'

export const ReloadButton: FunctionComponent = () => {

    const isCompleted = useAppSelector(state => state.quiz.isCompleted)

    const handleClick = () => {
        window.localStorage.clear()
        location.reload()
    }

    return (
        isCompleted ?
        <Button  onClick={handleClick} disabled={ !isCompleted } text="Reload" />
        :
        null
    )
}