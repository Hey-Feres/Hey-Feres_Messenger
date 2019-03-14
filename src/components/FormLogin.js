import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Image, ActivityIndicator, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario, autenticarUsuarioFacebook } from '../actions/AutenticacaoActions';
import firebase from 'firebase';

class formLogin extends Component {

  _autenticarUsuario() {
    const { email, senha } = this.props;

    this.props.autenticarUsuario({ email, senha });
  }

  renderBtnAcessar() {
    
    if (this.props.loadingLogin) {
      return(
        <ActivityIndicator size='large' color='#fff' />
      )
    }

    return(
      <Button title='Acessar' color='white' onPress={() => this._autenticarUsuario()} />
    );

  }

  render() {
    return (
        <Image style={styles.bgImg} source={require('../imagens/bg1.jpg')} > 
        <StatusBar barStyle="light-content"/>
          <View style={styles.body}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>Login</Text>
            </View>

            <View style={styles.viewInputs}>
              <TextInput 
                  placeholder="Email" 
                  autoCapitalize = 'none'
                  style={styles.inputs} 
                  value={this.props.email} 
                  onChangeText={(txtEmail) => this.props.modificaEmail(txtEmail)}             
              />

              <TextInput 
                  placeholder="Senha" 
                  autoCapitalize = 'none'
                  style={styles.inputs} 
                  value={this.props.senha} 
                  onChangeText={(txtSenha) => this.props.modificaSenha(txtSenha)} 
                  secureTextEntry
              />

              <Text style={styles.erroMsg}>{this.props.erroLogin}</Text>

              <TouchableHighlight underlayColor='transparent' onPress={() => Actions.formCadastro() }>
                <Text style={styles.cadastro}>Ainda não tem cadastro? Cadastre-se</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.viewButton}>
              {this.renderBtnAcessar()}
            </View>
          </View>
        </Image>  
    );
  }
}

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email, 
    senha: state.AutenticacaoReducer.senha,
    erroLogin: state.AutenticacaoReducer.erroLogin,
    loadingLogin: state.AutenticacaoReducer.loadingLogin  
  }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario, autenticarUsuarioFacebook })(formLogin);

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    width: null
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
    
  },
  viewTitle: {
    backgroundColor: 'transparent',
  },
  title: {
  	fontSize: 30,
  	justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'courier' 
  },
  inputs: {
  	fontSize: 20,
  	height: 45,
  	backgroundColor: '#fff',
    color: '#000',
  	borderRadius: 20,
  	paddingLeft: 10,
  	marginTop: 20
  },
  cadastro: {
  	fontSize: 15,
  	color: '#fff',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'courier'        
  },
  erroMsg: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    textAlign: 'center'
  }  
});



