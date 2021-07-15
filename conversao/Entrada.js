import React from 'react';
import { StyleSheet, View } from 'react-native';
import Numero from './Numero';

export default props => (
	<View style={styles.numeros}>
		<Numero num={props.num1} atualizaValor={props.atualizaValor} nome='num1' />
		<Numero num={props.valorMPa} atualizaValor={props.atualizaValor} nome='valorMPa' />
	</View>
);

const styles = StyleSheet.create({
	numeros: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})