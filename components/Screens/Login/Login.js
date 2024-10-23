import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, TextInput, Pressable, Image, StyleSheet } from 'react-native';
import styles from './style';
import { BlurView } from 'expo-blur'; 
import LottieView from 'lottie-react-native'; 

export default function Login({ navigation }) {
  const [orgCode, setOrgCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleLogin = async () => {
    setLoading(true); 
    try {
      const response = await axios.post('http://devapi.foexsuite.com/api/authentication/login', {
        loginId: email,
        password: password
      });

      const fetchedToken = response.data.Data.token;
      const fetchedUserId = response.data.Data.userId;

      if (fetchedToken && fetchedUserId) {
        setToken(fetchedToken);
        setUserId(fetchedUserId);
        setLoading(false); 

        navigation.navigate('Home', {
          token: fetchedToken,
          userId: fetchedUserId,
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false); 
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../.././assets/ic_launcher-playstore.png')} style={styles.logo} />
      <Text style={styles.title}>FOEx</Text>
      <Text>For Explosion Proof</Text>
      <TextInput
        style={styles.inputFields}
        placeholder="Enter Organization Code"
        onChangeText={e => setOrgCode(e)}
        defaultValue={orgCode}
      />
      <TextInput
        style={styles.inputFields}
        placeholder="Enter Email"
        onChangeText={e => setEmail(e)}
        defaultValue={email}
      />
      <TextInput
        style={styles.inputFields}
        placeholder="Enter Password"
        secureTextEntry 
        onChangeText={e => setPassword(e)}
        defaultValue={password}
      />

      <Pressable style={styles.loginBtn} onPress={() => handleLogin()}>
        <Text style={styles.loginBtnText}>Sign In</Text>
      </Pressable>

      {loading && (
        <BlurView intensity={100} style={StyleSheet.absoluteFill} tint='extraLight'>
          <View style={loaderStyles.overlay}>
          <LottieView
          source={require('../../../animations/Animation - 1728387290861.json')} 
          autoPlay
          loop
          style={{ width: 250, height: 250 }} // Adjust size
        />
          </View>
        </BlurView>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const loaderStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
