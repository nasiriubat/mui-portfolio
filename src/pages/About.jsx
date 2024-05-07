import { Paper, Grid, Typography, Container } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <Container sx={{ paddingTop: 6 }}>
            <Paper sx={{ padding: "20px", marginTop: '2px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <img src="https://picsum.photos/200" alt="Profile pic" style={{ width: "100%", borderRadius: "50%" }} />
                    </Grid>
                    <Grid item container spacing={0} xs  ={12} sm={8} >
                        <Typography variant='h4' paragrapgh>
                            About Me                        </Typography>
                        <Typography variant='body1' paragrapgh>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui adipisci molestiae officia ex dolores.
                        </Typography>
                        <Typography variant='h6' paragrapgh>
                            My Journey
                        </Typography>
                        <Typography variant='body1' paragrapgh>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui adipisci molestiae officia ex dolores.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default About