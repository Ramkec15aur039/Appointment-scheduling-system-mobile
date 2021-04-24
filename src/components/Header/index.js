/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Pressable} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
const Header = props => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Pressable style={styles.login}>
          <Icon name="cross" type="entypo" iconStyle={styles.iconStyle} />
          <Text style={styles.text}>{props.name}</Text>
        </Pressable>
        <Text style={styles.headerText} opacity={1}>
          {props.title}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    height: '20%',
    padding: 5,
    backgroundColor: 'rgb(220, 224, 222)',
    zIndex: 1,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 40,
    zIndex: 2,
  },
  text: {
    color: 'red',
  },

  login: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    fontSize: 20,
    height: 20,
  },
});

export default Header;
