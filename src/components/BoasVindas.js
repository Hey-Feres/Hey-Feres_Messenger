import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableHighlight, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class BoasVindas extends Component {

  componentDidMount(){
      this.timeoutHandle = setTimeout(()=>{
      Actions.formLogin();
    }, 3000);
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle); 
  }

	render() {
		return(
			<Image style={styles.bgImg} source={require('../imagens/bg9.jpg')} > 
        <StatusBar barStyle="light-content"/>
				<View style={styles.body}>
					<View style={styles.titleView}>
            <Text style={styles.name}>Hey Feres</Text>
            <Text style={styles.subtitle}>The Coolest Messenger</Text>
					</View>
          <ActivityIndicator size='large' color='rgba(0, 0, 0, 0.4)' style={{flex: 1}}/>
				</View>
			</Image>
		);
	}
}



const styles = StyleSheet.create({  
  bgImg: {
    flex: 1,
    width: null
  },  
  body: {
    flex: 1,
    padding: 15
  },
  titleView: {
  	alignItems: 'center',
    flex: 1,
  	backgroundColor: 'transparent',
    marginTop: 50
  },
  buttonView: {
  	flex: 1,
  	backgroundColor: 'transparent'
  },
  name: {
    fontSize: 60,
    marginTop: 50,
    color: 'white',
    fontFamily: 'courier'    
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'courier'        
  }
});