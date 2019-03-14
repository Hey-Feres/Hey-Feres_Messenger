import React, { Component } from 'react';
import { ListView, View, Image, Text, TextInput, TouchableHighlight, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { modificaMensagem, enviaMensagem, conversaUsuarioFetch } from '../actions/AppActions';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

class Conversa extends Component {
	
	componentWillMount() {
		this.props.conversaUsuarioFetch(this.props.contatoEmail);
		this.criaFonteDeDados(this.props.conversa);
	}

	componentWillReceiveProps(nextProps) {
        if (this.props.contatoEmail != nextProps.contatoEmail) {
            this.props.conversaUsuarioFetch(nextProps.contatoEmail);
        }

		this.criaFonteDeDados(nextProps.conversa)
	}

	criaFonteDeDados( conversa ) {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});
		this.dataSource = ds.cloneWithRows( conversa );
	}

	_enviaMensagem() {
		const { mensagem, contatoNome, contatoEmail } = this.props;
		this.props.enviaMensagem( mensagem, contatoNome, contatoEmail );
	}

    renderRow(texto) {

        if(texto.tipo === 'e') {
            return (
                <View style={{ alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: '30%', marginRight: 10}}>
                    <Text style={{ fontSize: 18, color: '#fff', padding: 10, backgroundColor: '#00A2FF', elevation: 1}}>{texto.mensagem}</Text>
                </View>
            )
        }

        return (
            <View style={{ alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: '30%', marginLeft: 10}}>
                <Text style={{ fontSize: 18, color: '#fff', padding: 10, backgroundColor: '#EF5FA7', elevation: 1}}>{texto.mensagem}</Text>
            </View>
        )
    }

	render() {
		return(
            <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
                <StatusBar hidden />
                <View style={{backgroundColor: '#fff', height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10}}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <TouchableHighlight onPress={() => Actions.principal()} underlayColor="transparent">
                            <Image source={require('../imagens/arrow_left.png')} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ alignItems: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableHighlight onPress={() => false} underlayColor="transparent">
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000', marginRight: 10}}>{this.props.contatoNome}</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => false} underlayColor="transparent">
                            <View style={{backgroundColor: 'yellow', borderRadius: 20, width: 40, height: 40}} />
                        </TouchableHighlight>                        
                    </View>                    
                </View>

                <View style={{ flex: 1, paddingBottom: 20 }}>

                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>

                <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#ccc', padding: 5}}>
                    <TextInput 
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto) }
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 15, borderRadius: 10 }}
                    />

                    <TouchableHighlight onPress={this._enviaMensagem.bind(this)} underlayColor="#fff">
                        <Image style={{marginTop: 5}} source={require('../imagens/arrow_right.png')} />
                    </TouchableHighlight>

                </View>
            </View>
		)

	}
}

mapStateToProps = state => {
    
    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    });

    return ({
        conversa,
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviaMensagem, conversaUsuarioFetch })(Conversa);




