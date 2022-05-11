import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import Produto from '../../../models/Produto'
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'

function ListaProduto() {
    let history = useNavigate();
    const [listaProduto, setListaProduto] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    useEffect(() => {
        if (token === '') {
            toast.error('Usuário não logado!', {
                position: 'top-right',
                theme: 'colored',
                autoClose: 1999,
                pauseOnHover: false,
                closeOnClick: true,
                hideProgressBar: false,
                draggable: false,
                progress: undefined


            }
            )
            history('/login')
        }
    }, [token])

    useEffect(() => {
        getProdutos()

    }, [listaProduto.length])

    async function getProdutos() {
        await busca(`/produtos`, setListaProduto, {
            headers: {
                'Authorization': token
            }
        })
    }
    return (
        <>
            {listaProduto.map(produto => (
                <Box m={2}>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>
                                Postagens
                            </Typography>
                            <Typography variant='h5' component='h2'>
                                {produto.nome}
                            </Typography>
                            <Typography variant='body2' component='p'>
                                {produto.descricao}
                            </Typography>
                            <Typography variant='body2' component='p'>
                                {produto.categoria?.material}
                            </Typography>
                            <Typography variant='body2' component='p'>
                                {produto.foto}
                            </Typography>
                            <Typography variant='body2' component='p'>
                                {produto.preco}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box mx={1} display='flex' justifyContent='center' mb={1.5}>

                                <Link to={`/formularioProduto/${produto.id}`} className='text-decorator-none'>
                                    <Button variant='contained' color='primary' size='small' className='marginEsquerda'>
                                        Atualizar
                                    </Button>
                                </Link>
                            </Box>

                            <Box mx={1} display='flex' justifyContent='center' mb={1.5}>
                                <Link to={`/deletaProduto/${produto.id}`}>
                                    <Button variant='contained' color='secondary' size='small' className='marginEsquerda'>
                                        Deletar
                                    </Button>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

            ))
            }
        </>
    )
}

export default ListaProduto;
