import { Container, Paper, Typography, Grid, Card } from '@mui/material'
import React from 'react'
import { Button, CardActionArea, CardActions, CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';



const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a description of Project 1.",
        imgSrc: "https://picsum.photos/id/119/3264/2176",
    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a description of Project 2.",
        imgSrc: "https://picsum.photos/id/123/4928/3264",
    },
    {
        id: 3,
        title: "Project 3",
        description: "This is a description of Project 3.",
        imgSrc: "https://picsum.photos/id/124/3264/2176",
    },
    {
        id: 4,
        title: "Project 4",
        description: "This is a description of Project 4.",
        imgSrc: "https://picsum.photos/id/125/4928/3264",
    },
    {
        id: 5,
        title: "Project 5",
        description: "This is a description of Project 5.",
        imgSrc: "https://picsum.photos/id/126/3264/2176",
    },
    {
        id: 6,
        title: "Project 6",
        description: "This is a description of Project 6.",
        imgSrc: "https://picsum.photos/id/127/4928/3264",
    },
    {
        id: 7,
        title: "Project 7",
        description: "This is a description of Project 7.",
        imgSrc: "https://picsum.photos/id/128/3264/2176",
    },
    {
        id: 8,
        title: "Project 8",
        description: "This is a description of Project 8.",
        imgSrc: "https://picsum.photos/id/129/4928/3264",
    },
];
const Portfolio = () => {

    return (
        <Container sx={{ paddingTop: 4 }} gutterBottom>
            <Paper >
                <Typography variant="h4" align='center' gutterBottom>
                    Portfolio
                </Typography>
                <Grid  container spacing={2} justifyContent={'center'} padding={3} paddingBottom={4}>
                    {projects.map(item => (
                        <Grid  item xs={12} sm={6} md={4}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia component={'img'} height='140' image={item.imgSrc} alt='portfolio image' />
                                    <CardContent>
                                        <Typography  variant='h5' gutterBottom component={'div'} >{item?.title}</Typography>
                                        <Typography color={'text.secondary'} variant='body2'>{item?.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    )
}

export default Portfolio