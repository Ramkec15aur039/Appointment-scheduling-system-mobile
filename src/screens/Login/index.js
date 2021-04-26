/*
 *Login Screen
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PostUsers} from '../../redux';
import {connect} from 'react-redux';

const Signup = props => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  console.log('Mobile Number:', mobile);
  console.log('Password:', password);
  console.log('Redux Response:->', props);
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
          <Button
            title="Login"
            onPress={() =>
              props.PostUsers({mobileNumber: mobile, password: password})
            }
            buttonStyle={styles.button}></Button>
        </View>
        {props.loginResponse === 'success' ? <Text style={styles.success}>Logged in successfully</Text> : null}
        {props.loginError === 'error' ? <Text style={styles.error}>Error in Login</Text> : null}
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
  success:{
    color:"green",
    fontSize:18,
    marginTop:15
  },
  error:{
    color:"red",
    fontSize:18,
    marginTop:15
  }
});

const mapStateToProps = state => {
  console.log('MapState to Props', state);
  return {
    loginResponse: state.login.storeLoginResponse,
    loginError: state.login.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    PostUsers: data => dispatch(PostUsers(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
