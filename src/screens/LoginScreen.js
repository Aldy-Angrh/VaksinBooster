import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
// import {openDatabase} from 'react-native-sqlite-storage'

// const db = openDatabase({
//     name:"booster_sqlite",
// })

const LoginScreen = props => {
  // const [peserta, setPeserta] = useState([])

  //     const createTables = ()=>{
  //         db.transaction(txn => {
  //             txn.executeSql(
  //               `CREATE TABLE IF NOT EXISTS peserta (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), password VARCHAR(10))`,
  //               [],
  //               (sqlTxn, res) => {
  //                 console.log("table created successfully");
  //               },
  //               error => {
  //                 console.log("error on creating table " + error.message);
  //               },
  //             );
  //           });
  //     }

  //     const addCategory = () => {
  //     if (!category) {
  //       alert("Enter category");
  //       return false;
  //     }
  // }

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required!'),
  });
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
      }}>
      <View
        style={{
          height: '80%',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../assets/DaryaVaria.png')} />
        <Text
          style={{
            fontWeight: 'bold',
            color: '#000',
            fontSize: 25,
            marginVertical: 40,
          }}>
          BOOSTER REGISTRATION
        </Text>
        <View style={{flex: 1, height: '50%', marginTop: 0}}>
          <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={SignupSchema}
            onSubmit={(values, errors) => console.log(values, errors)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={{width: '90%'}}>
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
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                </View>
                {errors.username && touched.username ? (
                  <Text style={{alignSelf: 'center', color: 'red'}}>
                    {errors.username}
                  </Text>
                ) : null}

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
                    placeholder="password"
                    placeholderTextColor="#000"
                    textAlign="center"
                    underlineColorAndroid="transparent"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                {errors.password && touched.password ? (
                  <Text style={{alignSelf: 'center', color: 'red'}}>
                    {errors.password}
                  </Text>
                ) : null}

                <TouchableOpacity
                  onPress={() => handleSubmit(values, errors)}
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

                <TouchableOpacity
                  style={{alignSelf: 'center', marginTop: 20}}
                  onPress={() => props.navigation.navigate('Regist')}>
                  <Text style={{color:'#BBB'}}>Belum Terdaftar !</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
