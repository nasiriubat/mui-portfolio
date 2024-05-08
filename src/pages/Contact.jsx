import { Container, Typography, Grid, TextField, Button, Paper } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <Container sx={{ paddingTop: 4 }}>
            <Paper sx={{padding:'20px',marginTop:'20px'}}>
            <Typography variant="h4" gutterBottom align='center'>Contact</Typography>
            <Grid container spacing={2} paddingTop={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id=""
                        label="Name"
                        name="name"
                        required

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id=""
                        label="Email"
                        name="email"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    multiline
                    rows={4}
                        fullWidth
                        id=""
                        label="Message"
                        name="message"
                        required
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        Submit
                    </Button>
                </Grid>
            </Grid>
            </Paper>
        </Container>
    )
}

export default Contact