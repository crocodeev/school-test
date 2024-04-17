import React, { FunctionComponent } from 'react'
import { QuestionPlaceholder } from './QuestionPlaceholder'
import { Paper } from '@mui/material'
import { useAppSelector } from 'src/shared/store/store'
import { CustomForm } from 'src/entities/forms'
import { FormSelect } from 'src/entities/forms/ui/FormSelect'


export const QuestionContainer: FunctionComponent = () => {

    const isStarted = useAppSelector(state => state.quiz.isStarted)
    const isCompleted = useAppSelector(state => state.quiz.isCompleted)
    const current = useAppSelector(state => state.quiz.current)
    const questions = useAppSelector(state => state.quiz.questions)

    let element

    if (!isStarted) {
        
        element = <QuestionPlaceholder text="ТЕСТИРОВАНИЕ" />

    } else if(isCompleted) {
        
        element = <QuestionPlaceholder text="ТЕСТИРОВАНИЕ ЗАВЕРШЕНО" />

    }else {

        element = <CustomForm question={questions[current]}/>
    }

    return(
        <Paper sx={{ minHeight: "50vh", height: "1px", padding: "2em"}} >
            {element}
        </Paper>
    )
}
    