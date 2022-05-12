import {Action } from './actions';

export interface UserState {
    usuario: string
}

const initialState = {
    usuario: ""
}

export const usuarioReducer = (state: UserState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_USER": {
            return {usuario: action.payload}
        }

        default:
            return state
    }
}