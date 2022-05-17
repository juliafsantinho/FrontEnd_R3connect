import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaProduto.css';
import Produto from '../../../models/Produto'
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { width } from '@mui/system';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 12,
        width: 300,

    },
    media: {
        height: 200,
        margin: 10
    },
});


function ListaProduto() {
    const classes = useStyles();

    const user = useSelector<TokenState, TokenState["usuarios"]>(
        (state) => state.usuarios
    );

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
        await busca(`/produtos/all`, setListaProduto, {
            headers: {
                'Authorization': token
            }
        })
    }


    var listaProdutoComponent

    if (user == "admin.admin@email.com") {

        listaProdutoComponent = listaProduto.map(produto => (
            <Grid container direction='row' alignItems='center' justifyContent='center' alignContent='center'>
                <Grid item xs={3}>
                    <Box padding='10px'>
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom>
                                    Produtos
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

                                    <Link to={`/cadastrarProduto/${produto.id}`} className='text-decorator-none'>
                                        <Button variant='contained' color='primary' size='small' className='botaoCompra'>
                                            Atualizar
                                        </Button>
                                    </Link>
                                </Box>

                                <Box mx={1} display='flex' justifyContent='center' mb={1.5}>
                                    <Link to={`/deletarProduto/${produto.id}`} className='text-decorator-none'>
                                        <Button variant='contained' color='secondary' size='small' className='marginEsquerda, btnDeletar'>
                                            Deletar
                                        </Button>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
            </Grid>

        ))

    }

    if (user !== "admin.admin@email.com") {

        listaProdutoComponent = listaProduto.map(produto => (
            <Grid xs={3} alignItems='center' justifyContent='center' alignContent='center'>
                <Card className={classes.root} >
                    <CardActionArea className='card-produto'>
                        <CardMedia
                            className={classes.media}
                            image={produto.foto}
                            title="demonstração produto"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {produto.nome}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" >
                                {produto.descricao}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                {produto.categoria?.material}
                            </Typography>
                            <Typography variant='h6' component='h3' >
                                R$ {produto.preco}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to={`/carrinho/${produto.id}`} className='text-decorator-none-login'>
                            <Button variant="contained" className="botaoCompra" fullWidth >
                                Comprar
                            </Button>
                        </Link>

                    </CardActions>
                </Card>
            </Grid>



        ))
    }

    return (
        <>
            {listaProdutoComponent}
        </>
    )
}

export default ListaProduto;
