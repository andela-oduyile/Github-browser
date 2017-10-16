'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png '}}
      />
      <Text style={styles.heading}>
        Github browser
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Github username"
      />
      <TextInput
        style={styles.input}
        placeholder="Github password"
        secureTextEntry={true}
      />
      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10
  },
  logo: {
    width: 66,
    height: 55
  },
  heading: {
    fontSize: 30,
    marginTop: 10
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: '#48bbec',
    alignSelf: 'stretch'

  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  }
});

export default Login;
