import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableHighlight, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { deletaConta, logout } from '../actions/AppActions';

class Configurações extends Component {
  
  _deletaConta() {
    this.props.deletaConta();
  }

  _logout() {
    this.props.logout();
  }

  render() {
		return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2', padding: 20}}>
        <StatusBar barStyle='dark-content' />
        <Text style={{textAlign: 'center', fontSize: 28, color: 'black', marginBottom: 30}}>Configurações</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
          <TouchableHighlight onPress={() => false}>        
            <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: '#EF5FA7', justifyContent: 'center', alignItems: 'center', marginRight: 5, padding: 5}}>
              <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Foto{"\n"}Perfil</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => Actions.feedback()}>
            <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: '#00A2FF', justifyContent: 'center', alignItems: 'center', marginLeft: 5, padding: 5}}>
              <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Enviar Feedback</Text>
            </View>          
          </TouchableHighlight>

        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
          
          <TouchableHighlight onPress={() => this._deletaConta()}>
            <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: '#00A2FF', justifyContent: 'center', alignItems: 'center', marginRight: 5, padding: 5}}>
              <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Deletar{"\n"}Conta</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this._logout()}>
            <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: '#EF5FA7', justifyContent: 'center', alignItems: 'center', marginLeft: 5, padding: 5}}>
              <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Encerrar Sessão</Text>
            </View>          
          </TouchableHighlight>

        </View>        
      </View>
		);
	}
}

const mapStateToProps = state => (
  {
    loadingDeletaConta: state.AppReducer.loadingDeletaConta  
  }
)


export default connect(mapStateToProps, { deletaConta, logout })(Configurações);



