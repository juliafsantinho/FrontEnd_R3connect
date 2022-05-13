
import React,{useEffect,useState} from 'react'
import {Box} from '@material-ui/core';
import {useSelector} from 'react-redux'
import {Navigate, useNavigate} from 'react-router-dom'
import User from '../../models/User'
import {buscaId} from '../../services/Service'
import { TokenState } from '../../store/tokens/tokensReducer';

import './Perfil.css'


function Perfil(){
    let navigate=useNavigate()
    const id=useSelector<TokenState,TokenState["id"]>(
        (state)=>state.id
    )

    const token=useSelector<TokenState,TokenState["tokens"]>(
        (state)=>state.tokens
    )

const[user,setUser]=useState<User>({
    id: +id,
    nome:'' ,   // Faz uma conversão de String para Number  "9" => 9
    usuario: '',
    senha: '',
    foto: '',
    cep: '',
    contribuicao:0
})

useEffect(() => {
    if (token === "") {
        alert("Você precisa estar logado")
        navigate("/login")
    }
}, [token])

async function findById(id:string){
    await buscaId(`usuarios/${id}`,setUser,{
        headers:{
            'Authorization':token
        }
    })
}

useEffect(() => {
    if (id !== undefined) {
        findById(id)
    }
}, [id])

return (
    <Box className='card-principal'>
        <Box className='card-container-imagem'>
            <img className='card-imagem'
                src={ user.foto }
                alt={ user.nome } />
        </Box>

        <Box className='card-container-info'>
            <Box>
                <h1>{ user.nome }</h1>
                <hr />
            </Box>

            <p className='card-container-texto'>
             Usuário(email):{user.usuario}
            </p>

            <p className='card-container-texto'>
              Cep: {user.cep}
            </p>
        </Box>
    </Box>
)




}

export default Perfil;
