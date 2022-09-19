import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

export class Dashboard extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image source={require('../assets/DaryaVaria.png')} />
          <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 50}}>
            DASHBOARD
          </Text>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginRight: 10,
                width: '40%',
                height: '120%',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/user.png')}
                style={{width: 100, height: 100}}
              />
            </View>
            <View>
              <View
                style={{
                  borderColor: '#000',
                  borderWidth: 1,
                  width: 180,
                  height: 30,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text style={{color: '#BBB'}}>NAMA</Text>
              </View>
              <View
                style={{
                  borderColor: '#000',
                  borderWidth: 1,
                  width: 180,
                  height: 30,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#BBB'}}>Tanggal Vaksin</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderTopColor: '#000',
            borderTopWidth: 3,
            width: '70%',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <View>
            <Text style={{color: 'red', fontSize: 16}}>Hapus Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Dashboard;
