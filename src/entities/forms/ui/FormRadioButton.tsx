import React, { FunctionComponent } from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { Grid} from '@mui/material'
import { FORM_ID } from 'src/shared/constants/constants'
import { IRadioButtonQuestion } from 'src/entities/question/question'
import "../styles/styles.css"
import { useDispatch } from 'react-redux'
import { setAnswer } from 'src/shared/store/store'

const answer = "answer"

type TInputs = {
    [answer]: string
}

export const FormRadioButton: FunctionComponent<{question: IRadioButtonQuestion }> = ({ question }) => {

    const { handleSubmit, register, reset, formState: { errors }} = useForm<TInputs>()
    const dispatch = useDispatch()
    const generateButtons= () => question.answer.map( (item) => (<label key={item} >
        <input type="radio" value={item} {...register(answer, { required: true })} />
        {item}
    </label>) )
    
    const onSubmit: SubmitHandler<TInputs> = (data) =>  {
        
        dispatch(setAnswer(data.answer))
        reset()
    }

    return (
        <Grid container item justifyContent="flex-start">
            <form id={FORM_ID} onSubmit={handleSubmit(onSubmit)} className='form-radiobutton'>
                <h2>{question.message}</h2>
                {errors[answer] && (
                <p role="alert">Выберите ответ</p>
                )} 
                { generateButtons() }
            </form> 
        </Grid>
    )
}
    