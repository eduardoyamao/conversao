import React, { Component } from 'react';
import { View } from 'react-native';

import { //Topo, Resultado, Painel } from './components';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = { valorMPa: '', Valor em Kg: '' };

		this.calcular = this.calcular.bind(this);
		this.atualizaValor = this.atualizaValor.bind(this);
	}

	calcular() {
		let resultado = 0;
		
		if(valorMPa){
				resultado = parseFloat(this.state.valorMPa) * parseFloat(this.state.num1);
		}
		else{
			resultado = 0;
			}

		this.setState({ resultado: resultado.toString() })
	}

	atualizaValor(nomeCampo, numero) {
		const obj = {};
		obj[nomeCampo] = numero;

		this.setState(obj);
	}

	render() {
		return (
		<View>
			<Topo />
			<Resultado resultado={this.state.resultado} />
			<Painel 
				valorMPa={this.state.valorMPa}
				num1=101972
				calcular={this.calcular}
				atualizaValor={this.atualizaValor}
			/>
		</View>
		);
	}
};