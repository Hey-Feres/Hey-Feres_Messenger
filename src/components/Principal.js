//DOCUMENTAÇÃO:  https://github.com/react-native-community/react-native-tab-view 
import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

export default class Principal extends React.Component {
  //state inicia estado do componente
  //index e routes: variaveis de estado
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Conversas' },
      { key: '2', title: 'Contatos' }
    ],
  };

  //Gerencia a navegaçao entre as abas
  _handleChangeTab = index => this.setState({ index })

  //Mapeia as cenas a serem renderizadas
  _renderScene = SceneMap({
      1: Conversas,
      2: Contatos
  });

  _renderHeader = props => <TabBarMenu indicatorStyle={{ backgroundColor: '#EF5FA7' }} {...props} />

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderHeader}
        onIndexChange={ this._handleChangeTab }   
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    color: 'black'
  },
});