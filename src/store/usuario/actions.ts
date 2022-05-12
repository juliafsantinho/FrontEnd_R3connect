export type Action = {type: "ADD_USER"; payload: string};

export const addUsuario = (usuario: string): Action =>({
    type: "ADD_USER",
    payload: usuario,
});