import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';
import Configuracoes from './components/Configuracoes';
import Conversa from './components/Conversa';
import Feedback from './components/Feedback';

export default props => (
	<Router>
		<Scene key='formLogin' component={FormLogin} title='Login' hideNavBar initial />
		<Scene key='formCadastro' component={FormCadastro} title='Cadastro' hideNavBar />
		<Scene key='boasVindas' component={BoasVindas} title='Bem Vindo' hideNavBar />
		<Scene key='principal' component={Principal} title='Principal' hideNavBar />
		<Scene key='adicionarContato' component={AdicionarContato} title='Adicionar Contato' hideNavBar />
		<Scene key='configuracoes' component={Configuracoes} title='Configuracoes' hideNavBar />
		<Scene key='conversa' component={Conversa} title='Conversa' hideNavBar  />
		<Scene key='feedback' component={Feedback} title='Feedback' hideNavBar  />
	</Router>
);

