import React from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Button , Grid , Typography, Avatar} from '@material-ui/core';
import './Sobre.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      padding: 20
    },
  }));

function Sobre(){

    
      const classes = useStyles();

    return(
       
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={10}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h2" align="center" className="titulo">Sobre nós:</Typography>
                        <Typography variant="body1" gutterBottom color="textPrimary" component="p" align="center" className="titulo">
                        A R3Connect surgiu com o objetivo de reduzir a produção de resíduos sólidos (secos e orgânicos) e consequentemente gerar uma fonte maior 
                        e mais segura de renda para as pessoas que dependem do trabalho da reciclagem e reutilização. Os 3 R's são a base do nosso projeto e com 
                        ele pretendemos apoiar a ODS 12 que trata sobre o consumo e produção sustentáveis, através de uma logística reversa para comercialização
                         dos nossos produtos.
                        </Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="titulo"> Nosso time: </Typography>
                    </Box>
                </Grid>
                <Grid direction="row" alignItems="center" justifyContent="center" container item xs={10}>
                    
                   
                        <div className={classes.root}>
                            <Avatar alt="Remy Sharp" src="../../assets/logo.png" className={classes.large} />
                        </div>
                  

                    
                        <div className={classes.root}>
                            <Avatar alt="Remy Sharp" src="../../assets/logo.png" className={classes.large} />
                        </div>
                
                    
                        <div className={classes.root}>
                            <Avatar alt="Remy Sharp" src="../../assets/logo.png" className={classes.large} />
                        </div>

                        <div className={classes.root}>
                            <Avatar alt="Remy Sharp" src="../../assets/logo.png" className={classes.large} />
                        </div>
                  

                    
                        <div className={classes.root}>
                            <Avatar alt="Remy Sharp" src="../../assets/logo.png" className={classes.large} />
                        </div>
              

                   
                        <div className={classes.root}>
                            <Avatar alt="Remy Sharp" src="../../assets/logo.png" className={classes.large} />
                        </div>
                   

                    
                        <div className={classes.root}>
                            <Avatar alt="Remy Sharp" src="../../assets/logo.png" className={classes.large} />
                        </div>
                    
                </Grid>

            </Grid>
        </>
    );
}

export default Sobre;