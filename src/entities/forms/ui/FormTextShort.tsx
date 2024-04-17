import React, { FunctionComponent } from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { FORM_ID } from 'src/shared/constants/constants'
import { Grid } from '@mui/material'
import { IShortQuestion } from 'src/entities/question/question'
import { useAppDispatch, setAnswer } from 'src/shared/store/store'
import '../styles/styles.css'

const answer = "answer"

type TInputs = {
    answer: string
}

export const FormTextShort: FunctionComponent<{ question: IShortQuestion}> = ({ question }) => {


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
                <input type="text" 
                {...register(answer, { required: true })} 
                className='form__text-input'
                aria-invalid={errors.answer ? "true" : "false"} />
                {errors[answer] && (
                <p role="alert">Введите ответ</p>
                )} 
            </form> 
        </Grid>
    )
}
    