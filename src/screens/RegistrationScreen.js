import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera} from 'react-native-image-picker';
const RegistrationScreen = props => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 417,
      maxHeight: 417,
      includeBase64: true,
    };
    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('di cancel' + res);
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets;
        let NewImage = '';
        data.map(val => {
          NewImage = val.base64;
        });

        console.log('berhasil :', data);
      }
    });
  };
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Image
          source={require('../assets/DaryaVaria.png')}
          style={{width: 150, height: 100}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 20, color:'#000'}}>REGISTRATION</Text>
      </View>
      <View
        style={{
          height: '60%',
          justifyContent: 'center',
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            borderColor: '#3120E0',
            height: 50,
            borderRadius: 50,
            margin: 5,
            marginLeft: 10,
            width: '100%',
          }}>
          <TextInput
            style={{flex: 1, borderColor: '#3120E0', color: '#000'}}
            placeholder="Username"
            placeholderTextColor="#000"
            textAlign="center"
            underlineColorAndroid="transparent"
            // onChangeText={handleChange('username')}
            // onBlur={handleBlur('username')}
            // value={values.username}
          />
        </View>
        {/* {errors.username && touched.username ? (
            <Text style={{ alignSelf:'center', color:'red'}}>{errors.username}</Text>
          ) : null} */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            borderColor: '#3120E0',
            height: 50,
            borderRadius: 50,
            margin: 5,
            marginLeft: 10,
            width: '100%',
          }}>
          <TextInput
            style={{flex: 1, borderColor: '#3120E0', color: '#000'}}
            placeholder="Password"
            placeholderTextColor="#000"
            textAlign="center"
            underlineColorAndroid="transparent"
            // onChangeText={handleChange('username')}
            // onBlur={handleBlur('username')}
            // value={values.username}
          />
        </View>
        {/* {errors.username && touched.username ? (
            <Text style={{ alignSelf:'center', color:'red'}}>{errors.username}</Text>
          ) : null} */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            borderColor: '#3120E0',
            height: 50,
            borderRadius: 50,
            margin: 5,
            marginLeft: 10,
            width: '100%',
          }}>
          <TextInput
            style={{flex: 1, borderColor: '#3120E0', color: '#000'}}
            placeholder="Tanggal Vaksin"
            placeholderTextColor="#000"
            textAlign="center"
            underlineColorAndroid="transparent"
            // onChangeText={handleChange('username')}
            // onBlur={handleBlur('username')}
            // value={values.username}
          />
        </View>
        {/* {errors.username && touched.username ? (
            <Text style={{ alignSelf:'center', color:'red'}}>{errors.username}</Text>
          ) : null} */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            borderColor: '#3120E0',
            height: 50,
            borderRadius: 50,
            margin: 5,
            marginLeft: 10,
            width: '100%',
          }}>
          <Text style={{color: '#BBB', marginLeft: 10}}>Upload Foto</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#3120E0',
              marginRight: 10,
              height: 50,
              borderBottomStartRadius: 20,
              justifyContent: 'center',
              padding: 10,
            }}
            onPress={() => openCamera()}>
            <Text style={{color: '#FFF'}}>launchCamera</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Dashboard')}
          style={{
            backgroundColor: '#3120E0',
            height: 40,
            width: 200,
            alignSelf: 'center',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#FFF'}}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 20, alignSelf: 'center'}}>
          <Text style={{color: '#BBB'}}>Sudah Terdaftar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationScreen;
