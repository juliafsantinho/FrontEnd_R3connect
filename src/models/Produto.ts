import Categoria from "./Categoria"

interface Produto {

    id: number,
    nome: string,
    descricao: string,
    foto: string,
    preco: number,
    categoria?: Categoria | null
        

  }
  
  
  export default Produto;