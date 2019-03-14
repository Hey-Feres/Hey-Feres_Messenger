import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

class formCadastro extends Component {

  _cadastraUsuario() {

    const { nome, email, senha } = this.props;

    this.props.cadastraUsuario({ nome, email, senha });

  }

  renderBtnCadastro() {
    if(this.props.loadingCadastro) {
      return (
        <ActivityIndicator size="large" />
      )
    }

    return (
      <Button title="Cadastrar" color="#fff" onPress={() => this._cadastraUsuario()} />
    )
  }

  render() {
    return (
      <Image style={styles.bgImg} source={require('../imagens/bg1.jpg')} > 
        <View style={styles.body}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Cadastrar</Text>
            </View>
            <View style={styles.viewInputs}>
                <TextInput 
                    placeholder="Nome" 
                    autoCapitalize = 'none'
                    style={styles.inputs} 
                    value={this.props.nome} 
                    onChangeText={txtNome => this.props.modificaNome(txtNome)}
                />

                <TextInput 
                    placeholder="Email" 
                    autoCapitalize = 'none'
                    style={styles.inputs} 
                    value={this.props.email} 
                    onChangeText={txtEmail => this.props.modificaEmail(txtEmail)} 
                />

                <TextInput 
                    placeholder="Senha" 
                    autoCapitalize = 'none'
                    style={styles.inputs} 
                    value={this.props.senha} 
                    onChangeText={txtSenha => this.props.modificaSenha(txtSenha)} 
                    secureTextEntry
                />

                <Text style={styles.erroMsg}>{ this.props.erroCadastro }</Text>
            </View>
            <View style={styles.viewButton}>
              {this.renderBtnCadastro()}
            </View>
        </View>
      </Image>
    );    
  }
}

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email, 
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
    loadingCadastro: state.AutenticacaoReducer.loadingCadastro  
  }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastraUsuario })(formCadastro);

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
    flex: 1,
    backgroundColor: 'transparent'
  },
  viewInputs: {
    flex: 4
  },
  viewButton: {
    flex: 2,
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    marginTop: 30
  },
  inputs: {
    fontSize: 20,
    height: 45,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 20,
    paddingLeft: 10,
    marginTop: 20,
    width: 300
  },
  erroMsg: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 20
  }
});





