import React, { FunctionComponent } from 'react'
import { Grid } from '@mui/material'

export const QuestionPlaceholder: FunctionComponent<{ text?: string}> = ({ text }) => {

    return(
        <Grid item container justifyContent="center" alignContent="center" sx={{ height: "100%"}}>
            <h1>{text}</h1>
        </Grid>
    )       
}
    