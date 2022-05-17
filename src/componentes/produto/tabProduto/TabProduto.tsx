import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaProduto from '../listaProduto/ListaProduto'
import './TabProduto.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import ListaCategoria from '../../categoria/listaCategoria/ListaCategoria';



function TabProduto() {



    const user = useSelector<TokenState, TokenState["usuarios"]>(
        (state) => state.usuarios
    );

    const [value, setValue] = useState('1');
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue)
    }

    var tabProdutoComponent;

    if (user == "admin.admin@email.com") {

        tabProdutoComponent = <TabContext value={value}>
            <AppBar position='static' className='barra'>
                <Tabs centered onChange={handleChange} className="tab-produto">
                    <Tab label='Todos os Produtos' value='1' />
                    <Tab label='Todos as categorias' value='2' />
                </Tabs>
            </AppBar>
            <TabPanel value='1'>
                <Box display='flex' flexWrap='wrap' justifyContent='center'>
                    <ListaProduto />
                </Box>
            </TabPanel>
            <TabPanel value='2'>
                <Box display='flex' flexWrap='wrap' justifyContent='center'>
                    <ListaCategoria />
                </Box>
            </TabPanel>

        </TabContext>
    }

    if(user !== "admin.admin@email.com"){

        tabProdutoComponent = <TabContext value={value}>
            <AppBar position='static' className='barra'>
                <Tabs centered onChange={handleChange}>
                    <Tab label='Nossos produtos' value='1' className='tab-produto'/>
                </Tabs>
            </AppBar>
            <TabPanel value='1'>
                <Box display='flex' flexWrap='wrap' justifyContent='center'>
                    <ListaProduto />
                </Box>
            </TabPanel>
           

        </TabContext>

    }
    return (
        <>
            {
                tabProdutoComponent
            }
        </>
    )
}

export default TabProduto;