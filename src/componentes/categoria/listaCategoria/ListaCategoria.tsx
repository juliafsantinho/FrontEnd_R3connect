import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

function ListaCategoria() {
    const [categoria, setCategoria] = useState<Categoria[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    useEffect(()=>{
      if(token == ''){
        toast.info('Você precisa estar logado!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
        navigate("/login")
      }
    }, [token])
  
  
    async function getCategoria(){
      await busca("/categoria", setCategoria, {
        headers: {
          'Authorization': token
        }
      })
    }
  
  
    useEffect(()=>{
      getCategoria()
    }, [categoria.length])
  
    return (
      <>
      {
        categoria.map(categoria =>(
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Categoria
              </Typography>
              <Typography variant="h5" component="h2">
               {categoria.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5} >
  
                <Link to={`/cadastrarCategoria/${categoria.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
        ))
        }
      </>
    );
  }

  export default ListaCategoria;