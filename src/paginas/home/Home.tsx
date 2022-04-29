import React from "react";
import { Box, Button , Grid , Typography } from '@material-ui/core';
import './Home.css';

function Home(){
    return(
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Encontre diversos produtos e soluções sustentáveis aqui.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Produtos</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/RgQcsNy.png" alt="logo"/>
                </Grid>
                <Grid xs={12} className="postagem">
                </Grid>
            </Grid>
        </>
    );
}

export default Home;