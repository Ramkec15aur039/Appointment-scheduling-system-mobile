/*
 *Login Screen
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Signup = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  console.log("Mobile Number:",mobile);
  console.log("Password:",password);
  return (
    <>
      <Header name={'SignUp'} title={'Login'} />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputLeft}>
            <Input placeholder="+91" />
          </View>
          <View style={styles.inputRight}>
            <Input
              onChangeText={e => {
                setMobile(e);
              }}
              placeholder="Mobile Number"
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.passwordIconContainer}>
          <Icon
            name="form-textbox-password"
            size={30}
            style={styles.passwordIcon}
          />
        </View>
        <View style={styles.inputRight}>
          <Input
            onChangeText={e => {
              setPassword(e);
            }}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <View style={styles.view}>
          <Button title="Login" buttonStyle={styles.button}></Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputLeft: {
    width: '20%',
  },
  inputRight: {
    width: '80%',
  },
  ButtonContainer: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 40,
    height: 50,
  },
  view: {
    width: '90%',
  },
  passwordIcon: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Signup;
