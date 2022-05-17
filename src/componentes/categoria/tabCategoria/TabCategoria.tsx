import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabCategoria.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import ListaCategoria from '../../categoria/listaCategoria/ListaCategoria';



function TabCategoria() {



    const user = useSelector<TokenState, TokenState["usuarios"]>(
        (state) => state.usuarios
    );

    const [value, setValue] = useState('1');
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue)
    }

    var tabCategoriaComponent;

    if (user == "admin.admin@email.com") {

        tabCategoriaComponent = <TabContext value={value}>
            <AppBar position='static' >
                <Tabs centered className='barra' onChange={handleChange}>
                    <Tab label='Todos os Produtos' value='1' />
                    <Tab label='Todos as categorias' value='2' />
                </Tabs>
            </AppBar>
            <TabPanel value='1'>
                <Box display='flex' flexWrap='wrap' justifyContent='center'>
                    <ListaCategoria />
                </Box>
            </TabPanel>
            <TabPanel value='2'>
                <Box display='flex' flexWrap='wrap' justifyContent='center'>
                    <ListaCategoria />
                </Box>
            </TabPanel>

        </TabContext>
    }

    if(user == ""){

        tabCategoriaComponent = <TabContext value={value}>
            <AppBar position='static' >
                <Tabs centered className='barra' onChange={handleChange}>
                    <Tab label='Todos os Produtos' value='1' />
                </Tabs>
            </AppBar>
            <TabPanel value='1'>
                <Box display='flex' flexWrap='wrap' justifyContent='center'>
                    <ListaCategoria />
                </Box>
            </TabPanel>
           

        </TabContext>

    }
    return (
        <>
            {
                tabCategoriaComponent
            }
        </>
    )
}

export default TabCategoria;