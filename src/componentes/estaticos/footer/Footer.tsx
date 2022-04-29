import React from 'react';

import GitHubIcon from "@material-ui/icons/GitHub"
import {Typography, Box, Grid } from '@material-ui/core';

import './Footer.css';

function Footer() {

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.github.com/santosnicolle" target="_blank">
                            <GitHubIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" className='textos' >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="r3connectecommerce.herokuapp.com">
                                <Typography variant="subtitle2" className='textos' align="center">r3connectecommerce.herokuapp.com</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );

}

export default Footer;