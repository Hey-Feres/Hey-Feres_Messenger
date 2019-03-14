import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableHighlight, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

export default class Feedback extends Component {

  	render() {
		return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2', padding: 20}}>
        <StatusBar barStyle='dark-content' />
        <Text>Chegamos Aqui</Text>
      </View>
	
		);
	}
}




