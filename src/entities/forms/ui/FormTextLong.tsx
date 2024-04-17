import React, { FunctionComponent } from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { FORM_ID } from 'src/shared/constants/constants'
import { Grid } from '@mui/material'
import { ILongQuestion } from 'src/entities/question/question'
import { useAppDispatch, setAnswer } from 'src/shared/store/store'
import '../styles/styles.css'

const answer = "answer"

type TInputs = {
    answer: string
}

export const FormTextLong: FunctionComponent<{ question: ILongQuestion}> = ({ question }) => {


    const { handleSubmit, register, formState: { errors }, reset } = useForm<TInputs>()
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<TInputs> = (data) =>  {
        dispatch(setAnswer(data.answer))
        reset()
    }
    

    return (
        <Grid container item justifyContent="flex-start">
            <form id={FORM_ID} onSubmit={handleSubmit(onSubmit)}>
                <h2>{question.message}</h2>
                <textarea
                {...register(answer, { required: true, minLength: 60 })} 
                className='form__textarea-input'
                aria-invalid={errors.answer ? "true" : "false"} />
                {errors[answer] && (
                <p role="alert">Дайте развёрнутый ответ</p>
                )} 
            </form> 
        </Grid>
    )
}
    