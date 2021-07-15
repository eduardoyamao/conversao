import React from 'react';
import { View } from 'react-native';

import Entrada from './Entrada';
import Comando from './Comando';

const Painel = props => (
	<View>
		<Entrada 
			num1={props.num1} 
			valorMPa={props.valorMPa} 
			atualizaValor={props.atualizaValor}
		/>
		<Comando acao={props.calcular} />
	</View>
);

export { Painel };