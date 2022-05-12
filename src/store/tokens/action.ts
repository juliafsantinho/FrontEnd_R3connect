// Altere o tipo da Ação usando o Operador OR (|)
export type Action = {type: "ADD_TOKEN"|"ADD_USUARIO"; payload: string}

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token 
})

// Adicione o tipo de ação para pegar o ID
export const addUsuario = (usuario: string): Action =>({
    type: "ADD_USUARIO",
    payload: usuario
})