interface UserLogin {

    id: number
    usuario: string
    senha: string
    token?: string | null //dupla tipagem porque pode receber dois tipos de informação

}


export default UserLogin;
