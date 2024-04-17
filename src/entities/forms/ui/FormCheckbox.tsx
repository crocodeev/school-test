import React, { FunctionComponent } from 'react'
import { useAppDispatch, setAnswer } from 'src/shared/store/store'
import { useForm,  SubmitHandler} from 'react-hook-form'
import { Grid, Checkbox } from '@mui/material'
import { FORM_ID } from 'src/shared/constants/constants'
import { ICheckboxQuestion } from 'src/entities/question/question'
import { register } from 'module'

const answer = "answer"



export const FormCheckbox  : FunctionComponent<{ question: ICheckboxQuestion}> = ({ question }) => {

    type answer = { [K in typeof question.answer[number]]: string }

    type TInput = {
        answer: answer
    }

    const { register, handleSubmit, reset } = useForm<TInput>()
    const dispatch = useAppDispatch()
    const generateCheckboxes = () => question.answer.map((item) => (
        <div key={item}>
            <input type="checkbox"  id={item} value={item} aria-label={item} { ...register(answer)}/>
            <label>{item}</label>
        </div>
    ))
    
    const onSubmit: SubmitHandler<TInput> = (data) =>  {
        dispatch(setAnswer(data.answer))
        reset()
    }

    return (
        <Grid container item justifyContent="flex-start">
            <form id={FORM_ID} onSubmit={handleSubmit(onSubmit)} className='form-radiobutton'>
                <h2>{question.message}</h2>
                {generateCheckboxes()}
            </form> 
        </Grid>
    )
}
    