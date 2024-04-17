import React, { FunctionComponent } from 'react'
import { useForm, Controller, SubmitHandler} from 'react-hook-form'
import { Grid} from '@mui/material'
import { FORM_ID } from 'src/shared/constants/constants'
import { ISelectQuestion } from 'src/entities/question/question'
import "../styles/styles.css"
import { useDispatch } from 'react-redux'
import { setAnswer } from 'src/shared/store/store'

const answer = "answer"

type TInputs = {
    [answer]: string
}

export const FormSelect: FunctionComponent<{question: ISelectQuestion }> = ({ question }) => {

    const { handleSubmit, register, reset } = useForm<TInputs>()
    const dispatch = useDispatch()
    const generateOptions = () => question.answer.map((item) => (<option key={item} value={item}>{item}</option>))
    
    const onSubmit: SubmitHandler<TInputs> = (data) =>  {
        dispatch(setAnswer(data.answer))
        reset()
    }

    return (
        <Grid container item justifyContent="flex-start">
            <form id={FORM_ID} onSubmit={handleSubmit(onSubmit)}>
                <h2>{question.message}</h2>
                <select {...register(answer)} className='form__select-input'>
                    { generateOptions() }
                </select>
            </form> 
        </Grid>
    )
}
    