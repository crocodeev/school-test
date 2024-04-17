import React, { FunctionComponent } from 'react'
import { SegmentProgress } from 'src/widgets/SegmentedProgress'
import { NextButton } from 'src/widgets/NextButton'
import { Timer } from 'src/widgets/Timer'
import { Box, Container, Grid } from '@mui/material'
import { StartButton } from 'src/widgets/StartButton'
import { QuestionContainer } from 'src/widgets/Question'
import { ReloadButton } from 'src/widgets/ReloadButton'

export const Home: FunctionComponent = () => {

    return(
        <Container>
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item container xs={12} spacing={2} justifyContent="flex-start" alignItems="center">
                    <Grid item xs={2}>
                        <StartButton />
                    </Grid>
                    <Grid item xs={2}>
                        <Timer />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <SegmentProgress />
                </Grid>
                <Grid item xs={12}>
                    <QuestionContainer />
                </Grid>
                <Grid item container xs={12} spacing={15} justifyContent="flex-start" alignItems="center">
                <Grid item xs={1} >
                    <NextButton />
                </Grid>
                <Grid item xs={1} >
                    <ReloadButton />
                </Grid>
                </Grid>
            </Grid>
        </Box>
        </Container>
    )       
}
    