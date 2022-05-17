import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate} from "react-router-dom";
import { login } from '../../services/Service';
import UserLogin from "../../models/UserLogin";
import React, { useState, useEffect, ChangeEvent } from "react";
import { TokenState } from '../../store/tokens/tokensReducer';
import './Login.css';
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../store/tokens/action";
import { toast } from "react-toastify";
import { addUsuario } from "../../store/tokens/action";



function Login() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [usuario, setUsuario] = useState('');
   


 
       
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: '',
            nome:'',
            foto:'' 
        }
    )

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: '',
        nome:'',
        foto:''
    })

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    useEffect(()=>{
        console.log(usuario)
        dispatch(addUsuario(usuario))
        

    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>){

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
        
    useEffect(()=>{
        if(respUserLogin.token !== ""){
            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)
       

         
        dispatch(addToken(respUserLogin.token));
        dispatch(addId(respUserLogin.id.toString()))
        history('/home')

  
    
        }
    },  [respUserLogin.token])

    

    async function logar(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        setUsuario(userLogin.usuario)

        try{
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)
            toast.success('Usuário logado com sucesso!! ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }catch(error){
            toast.error('Dados do usuário inconsistentes! ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }



    return(
        <Grid container direction='row' justifyContent='center' alignItems='center' className="margem-grid">


            <Grid alignItems='center' xs={6} >
                <Box paddingX={20} alignSelf='center'>

                    <form  onSubmit={ logar }>

                       
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align="center" className="textos1">Entrar</Typography>
                       
                        <TextField 
                         value = { userLogin.usuario }
                         onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e) }
                         id='usuario' label='usuario' variant="outlined" name="usuario" margin="normal" fullWidth className="campos-login"/>
                       
                        <TextField 
                         value={userLogin.senha} 
                         onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)}
                         id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth className="campos-login"/>
                        
                        <Box marginTop={2} textAlign='center'>
                            {/* <Link to='/home' className='text-decorator-none'> */}
                            
                                <Button type='submit' variant='contained' className="botao2" color="primary">
                                    Logar
                                </Button>
                           
                        </Box> 
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center"> Não tem uma conta? </Typography>
                        </Box>
                        <Link to='/cadastrar' className='text-decorator-none-login'>
                        <Typography variant="subtitle1" gutterBottom align="center" className="textos1">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={4} justifyContent='center' alignItems='center'> 
                <Box  alignSelf='center' justifySelf='center'className="item">
                    <img src="https://i.imgur.com/o4rqdfQ.png" className='imagem'/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login;