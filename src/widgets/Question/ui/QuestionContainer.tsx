import React, { FunctionComponent } from 'react'
import { QuestionPlaceholder } from './QuestionPlaceholder'
import { Paper, Box } from '@mui/material'
import { useAppSelector } from 'src/shared/store/store'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    example: string
    exampleRequired: string
}

export const QuestionContainer: FunctionComponent = () => {

    const isStarted = useAppSelector(state => state.quiz.isStarted)
    const isCompleted = useAppSelector(state => state.quiz.isCompleted)

    const {register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
     

    let element

    if (!isStarted) {
        
        element = <QuestionPlaceholder text="ТЕСТИРОВАНИЕ" />

    } else if(isCompleted) {
        
        element = <QuestionPlaceholder text="ТЕСТИРОВАНИЕ ЗАВЕРШЕНО" />

    }else {

        /**
          <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input defaultValue="test" {...register("example")} />

                    <input {...register("exampleRequired", { required: true })} />
                    
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
         */

        element = <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            
                <input defaultValue="test" {...register("example")} />

                <input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}
        </Box>
    }

    return(
        <Paper sx={{ minHeight: "50vh", height: "1px"}} >
            {element}
        </Paper>
    )
}
    