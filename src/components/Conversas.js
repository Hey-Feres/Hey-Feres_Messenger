import React, { Component } from 'react';
import { View, Text, ListView, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { conversasUsuarioFetch } from '../actions/AppActions';

class Conversas extends Component {

    componentWillMount() {
        this.props.conversasUsuarioFetch();
        this.criaFonteDeDados(this.props.conversas);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados( nextProps.conversas )
    }

    criaFonteDeDados( conversas ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.fonteDeDados = ds.cloneWithRows(conversas)
    }

    renderRow(conversas) {
        return(
            <TouchableHighlight underlayColor='transparent' onPress={() => Actions.conversa({ contatoNome: conversas.nome, contatoEmail: conversas.email })}>
                <View style={{flex: 1, backgroundColor: 'transparent', borderBottomWidth: 1, borderColor: 'lightgray', padding: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, justifyContent: 'flex-start'}}>{conversas.nome}</Text>
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
    const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
        return { ...val, uid }
    })
    return { conversas }
}

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);


