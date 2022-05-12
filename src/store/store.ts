import {createStore} from 'redux';
import { tokenReducer } from './tokens/tokensReducer';
import { usuarioReducer } from './usuario/usuarioReducer';

const store = createStore(tokenReducer);
const store2 = createStore(usuarioReducer);

export default store;