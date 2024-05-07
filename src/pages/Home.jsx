import React from 'react'
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';


const Home = () => {
    return (
        <Box sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${"https://picsum.photos/seed/picsum/200/300"})`,
            height: 500,
            display: 'flex',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            flexDirection:'column',
            textAlign:'center',
            color:'#fff',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Typography variant='h2' gutterBottom>
                Welcome to my portfolio
            </Typography>
            <Typography variant='h6' gutterBottom>
                I am a fullstack devloper
            </Typography>
            <Button variant='contained' color='primary'>
                Contact me
            </Button>
        </Box>
    )
}

export default Home