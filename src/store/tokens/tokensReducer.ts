import { Action } from './action';

// Altere a Interface de TokenState para UserState, e adicione o campo ID
export interface TokenState {
    tokens: string,
    usuarios: string,
}

// Altere a Inicialiazação do State adicionando o campo ID
const initialState = {
    tokens: "",
    usuarios: ""
}

// Mude TokenState para UserState
export const tokensReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            
            /* Seguindo a Interface UserState, retornamos o Token com a informação adicionada e o 
                ID com a informação inicial dele*/
            return {tokens: action.payload, usuarios: state.usuarios}
        }
        case "ADD_USUARIO": {

            /* Seguindo a Interface UserState, retornamos o ID com a informação adicionada e o 
                Token com a informação inicial dele*/
            return {usuarios: action.payload, tokens: state.tokens}
        }

        default:
            return state
    }
}