import React from 'react';
import { View, Text, StatusBar, StyleSheet, Platform, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { habilitaInclusaoContato } from '../actions/AppActions';


//Custom StatusBar
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} hidden={false}/>
  </View>
);

const TabBarMenu = props => (
	<View>

		<MyStatusBar backgroundColor="#00A2FF" barStyle="light-content" />

		<View style={styles.appBar}>
			<View style={styles.appNameView}>
				<Text style={styles.appNameText}>Hey Feres</Text> 
			</View>	

			<View style={ styles.iconsView }>
				<View style={ styles.viewAddCtt }>
					<TouchableHighlight underlayColor='transparent' onPress={() => { Actions.adicionarContato(); props.habilitaInclusaoContato() }} >
						<Image source={require('../imagens/adicionar-contato.png')}/>
					</TouchableHighlight>	
				</View>


				<View style={ styles.viewConfigs }>
					<TouchableHighlight underlayColor='transparent' onPress={() => Actions.configuracoes()} >
						<Image source={require('../imagens/gear-icon.png')}/>
					</TouchableHighlight>	
				</View>
			</View>
		</View>


		<TabBar {...props} style={styles.tabBar} />

	</View>	
)

export default connect(null, { habilitaInclusaoContato })(TabBarMenu);

//Verificacao de OS para StatusBar  
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

//Style StatusBar
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
  	flexDirection: 'row',
  	backgroundColor: "#00A2FF",
  	justifyContent: 'space-between'
  },
  appNameView: {
  	height: 50, 
  	justifyContent: 'center', 
  	backgroundColor: 'transparent'
  },
  appNameText: {
	color: '#fff', 
	fontWeight: 'bold', 
	marginLeft: 10, 
	fontSize: 20 
  },
  iconsView: {
	flexDirection: 'row',
	backgroundColor: "transparent",
	marginRight: 20 
  },
  viewAddCtt: {
	width: 50,
	justifyContent: 'center'
  },
  viewConfigs: {
	justifyContent: 'center'   	
  },
  iconConfigs: {
	fontSize: 20, 
	color: '#fff',
	fontWeight: 'bold' 
  },
  tabBar: {
  	backgroundColor: '#00A2FF',
  }
});



