interface UserLogin {

    id: number
    usuario: string
    nome:string,
    senha: string,
    foto:string,
    token: string //dupla tipagem porque pode receber dois tipos de informação

}


export default UserLogin;
