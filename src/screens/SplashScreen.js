import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';

export class SplashScreen extends Component {
  componentDidMount() {
    this.onRefresh();
  }

  onRefresh = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 5000);
  };
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF',
          height: '100%',
          width: '100%',
        }}>
        <Image
          source={require('../assets/DaryaVaria.png')}
          style={{position: 'absolute'}}
        />
      </View>
    );
  }
}

export default SplashScreen;
