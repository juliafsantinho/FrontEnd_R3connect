import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, Box, Grid, TextField, Typography } from '@material-ui/core';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';
import { Link, useNavigate } from 'react-router-dom'
import UserLogin from '../../models/UserLogin';

function CadastroUsuario() {
    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('');
    const [usuarioCadastro, setUsuarioCadastro] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
       // foto: ' ',
        cep: '',
        contribuicao: 0
    })
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }
    const [usuarioResult, setUsuarioResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
       // foto: ' ',
        cep: '',
        contribuicao:0
    })
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioCadastro({
            ...usuarioCadastro,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (usuarioResult.id !== 0) {
            history('/login')
        }
    }, [usuarioResult])

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (confirmarSenha == usuarioCadastro.senha && usuarioCadastro.senha.length >= 8) {
            try { 
                console.log(usuarioCadastro)                                             

                await cadastroUsuario(`/usuarios/cadastrar`, usuarioCadastro, setUsuarioResult);
                alert('Usuário cadastrado tranquilamente!')
            } catch (error) {
                console.log(`Error:${error}`)
                alert("Usuário já existe!")
            }
        }
        else {
            alert('Dados do usuário inconsistentes!')

        }



    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} >
            <img src="https://i.imgur.com/bdVGRkp.png" className='imgC'/>

            </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={9}>
                    <form onSubmit={cadastrar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='tituloC'>
                            Cadastre-se
                        </Typography>
                        <TextField value={usuarioCadastro.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='margin-bottom' id='nome' label='nome' name='nome' variant='outlined' placeholder='insira um nome de no mínimo cinco carácteres' required fullWidth />
                        <TextField value={usuarioCadastro.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='margin-bottom' id='usuario' label='usuário' name='usuario' placeholder='insira seu email' variant='outlined' required fullWidth  />
                        <TextField value={usuarioCadastro.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='margin-bottom' type='password' id='senha' label='senha' name='senha' placeholder='insira uma senha de até oito digitos' variant='outlined' required fullWidth  />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} className='margin-bottom' id='senha' type='password' label='confirmar senha' name='senha' placeholder='insira a senha novamente' variant='outlined' required fullWidth  />
                        <TextField value={usuarioCadastro.cep} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='margin-bottom' id='cep' label='cep' name='cep' variant='outlined'  placeholder='insira seu cep,cuidado com o espaço antes dos carácteres,tire-o' fullWidth required />
                        {/* <TextField value={usuarioCadastro.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='margin-bottom' id='foto' label='foto' name='foto' placeholder='insira um link de uma foto' variant='outlined' fullWidth  />  */}
                        <TextField value={usuarioCadastro.contribuicao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='contribuicao' label='contribuição' name='contribuicao' variant='outlined' fullWidth placeholder='insira o quanto deseja contribuir para causas sociais e ambientais' />

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className='button'>Cadastrar</Button>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='button'>Cancelar</Button>
                            </Link>
                        </Box>

                    </form>
                </Box>
            </Grid>

        </Grid>



    )

}
export default CadastroUsuario;

