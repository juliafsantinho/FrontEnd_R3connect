import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaProduto from '../listaProduto/ListaProduto'
import './TabProduto.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';



function TabProduto() {

    const user = useSelector<TokenState, TokenState["usuarios"]>(
        (state) => state.usuarios
    );

    const [value, setValue] = useState('1');
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue)
    }


    return (
        <>

            <TabContext value={value}>
                <AppBar position='static' >
                    <Tabs centered className='barra' onChange={handleChange}>
                        <Tab label='Todos os Produtos' value='1' />
                    </Tabs>
                </AppBar>
                <TabPanel value='1'>
                    <Box display='flex' flexWrap='wrap' justifyContent='center'>
                        <ListaProduto />
                    </Box>
                </TabPanel>
                
            </TabContext>

        </>


    )
}

export default TabProduto;