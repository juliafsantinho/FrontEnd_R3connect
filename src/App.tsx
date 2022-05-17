import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobreNos/Sobre';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { Provider } from 'react-redux';
import  store from './store/store'
import { ToastContainer } from 'react-toastify';
import CadastraCategoria from './componentes/categoria/cadastraCategoria/CadastraCategoria';
import DeletaCategoria from './componentes/categoria/deletaCategoria/DeletaCategoria';
import ListaCategoria from './componentes/categoria/listaCategoria/ListaCategoria';
import 'react-toastify/dist/ReactToastify.css';  
import CadastraProduto from './componentes/produto/cadastraProduto/CadastraProduto';
import DeletaProduto from './componentes/produto/deletaProduto/DeletaProduto';
import ListaProduto from './componentes/produto/listaProduto/ListaProduto';
import { MenuLateral } from './componentes/estaticos/navbar/Navbar';
import { DrawerProvider } from './componentes/contexts';
import Cart from './componentes/cart/Cart';
import Perfil from './paginas/perfil/Perfil'


function App() {
  return (


    <Provider store = {store} >
      
     
          <ToastContainer />
          <DrawerProvider> 
          <Router>

          <MenuLateral>
            <Navbar />
            <div style={{ minHeight: '100vh' }}>

            

              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/cadastrar' element={<CadastroUsuario/>}/>
                <Route path='/cadastrarCategoria' element={<CadastraCategoria/>}/>
                <Route path='/cadastrarCategoria/:id' element={<CadastraCategoria/>}/>
                <Route path='/deletarCategoria/:id' element={<DeletaCategoria/>}/>
                <Route path='/listarCategoria' element={<ListaCategoria/>}/>
                <Route path='/cadastrarProduto' element={<CadastraProduto/>}/>
                <Route path='/cadastrarProduto/:id' element={<CadastraProduto/>}/>
                <Route path='/deletarProduto/:id' element={<DeletaProduto/>}/>
                <Route path='/listarProduto' element={<ListaProduto/>}/>
                <Route path='/carrinho/:id' element={<Cart/>}/>
                <Route path='/perfil' element={<Perfil/>}/>



              </Routes>
            </div>
            </MenuLateral>
            <Footer />

          </Router>
          </DrawerProvider>
      </Provider>
      
    

  );
}

export default App;
