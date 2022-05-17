import { Button, Container, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import { buscaId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './CadastraCategoria.css';

function CadastraCategoria(){

    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        material: ''
    })

    useEffect(() => {
        if(token == '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categoria`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/categoria`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        navigate('/listarCategoria')
    }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" className="tituloCadCat">Formulário de cadastro de categoria</Typography>
                <TextField className='camposCat' value={categoria.material} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="material" label="material" variant="outlined" name="material" margin="normal" placeholder='Insira o material' required fullWidth />
                <TextField className='camposCat' value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" placeholder='Insira a origem do material' required fullWidth />
                <Button type="submit" variant="contained" color="primary" className='botaoFinCat'>
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}


export default CadastraCategoria;

