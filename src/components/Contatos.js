import React, { Component } from 'react';
import { View, Text, ListView, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';
import { contatosUsuarioFetch } from '../actions/AppActions';


class Contatos extends Component {

    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDeDados(this.props.contatos);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados( nextProps.contatos )
    }

    criaFonteDeDados( contatos ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.fonteDeDados = ds.cloneWithRows(contatos)
    }

    renderRow(contatos) {
        return(
            <TouchableHighlight underlayColor='transparent' onPress={() => Actions.conversa({ contatoNome: contatos.nome, contatoEmail: contatos.email })}>
                <View style={{flex: 1, backgroundColor: 'transparent', borderBottomWidth: 1, borderColor: 'lightgray', padding: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Image source={require('../imagens/user.png')}/>
                    <Text style={{fontSize: 20, justifyContent: 'flex-start'}}>{contatos.nome}</Text>
                </View>
            </TouchableHighlight>                
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
            <ListView
                dataSource={this.fonteDeDados}
                enableEmptySections
                renderRow={this.renderRow}
            />
            </View>
        )
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid }
    })
    return { contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);


