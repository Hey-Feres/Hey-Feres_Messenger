import React, { Component } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component {

    render() {
        return(
            <Image style={{ flex: 1, width: null }} source={require('../imagens/bg1.jpg')} > 
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', flex: 1}}>
                    <View style={{flex: 1, padding: 20}}>
                    <View style={{ justifyContent: 'center', backgroundColor: 'transparent', marginTop: 50 }}>
                        <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold', textAlign: 'center' }}>Add Friends</Text>
                    </View>    
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput
                            placeholder='E-mail'
                            style={{ fontSize: 20, height: 45, backgroundColor: 'white', borderRadius: 20, paddingLeft: 10 }}
                            onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                            autoCapitalize = 'none'
                            value={this.props.adiciona_contato_email}
                        />
                        <Text style={{ color: 'red', fontSize: 20, textAlign: 'center', backgroundColor: 'transparent', marginTop: 10 }}>
                            {this.props.cadastro_resultado_txt_erro}
                        </Text>
                        <Text style={{ color: 'green', fontSize: 20, textAlign: 'center', backgroundColor: 'transparent' }}>
                            {this.props.cadastro_resultado_inclusao}
                        </Text>                       
                    </View>

                    <View style={{backgroundColor: 'transparent', flex: 1}}>
                        <Button 
                            title="Adicionar" 
                            color='white'
                            onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email) } 
                        />                 
                    </View> 
                    </View> 
                </View>               
            </Image>                 
        )
    }
}


const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
    }
)

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);

