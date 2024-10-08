import { 
    StyleSheet, Text, TextInput, View, Image, 
    ImageBackground, TouchableOpacity, KeyboardAvoidingView, 
    SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import {  loginAccount } from '../services/signUpInfo'; 

const LoginScreen = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   useEffect(() => {
//     fetch('http://localhost/')
//       .then(async (res) => {
//         if (res.ok) {
//           console.log(await res.json());
//         }
//       })
//       .catch((error) => console.error('Fetch error:', error)); // Added error handling
//   }, []);

  const handleLogin = async () => {
    console.log('Attempting to login with:', { email, password });

    // const userInfo = { email, password };

 
    //   const info = await loginAccount(userInfo);
    //   console.log('Login successful:', info);
    //   props.navigation.navigate('Home');
     
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
        <View style={styles.pageContainer}>
        <ImageBackground
            source={require('../../assets/background3.0.png')}
            resizeMode="cover"
            style={styles.imageBackground}
        >
            <View style={styles.overlayContainer}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Sign In</Text>

                <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                />

                <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                />

                <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.getSignInButton} onPress={handleLogin}>
                <Text style={styles.getStartedText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.signUpTextContainer}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.getSocialButton}>
                <Image style={styles.socialIcon} source={require('../../assets/google_media_social_icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.getSocialButton}>
                <Image style={styles.socialIcon} source={require('../../assets/apple_icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.getSocialButton}>
                <Image style={styles.socialIcon} source={require('../../assets/facebook_f_icon.png')} />
                </TouchableOpacity>
            </View>
            </View>
        </ImageBackground>
        </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    height: '100%',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  overlayContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  loginContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  input: {
    width: '92%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  getSignInButton: {
    backgroundColor: '#50C2C9',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#50C2C9',
  },
  forgotPasswordText: {
    color: '#50C2C9',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  getSocialButton: {
    backgroundColor: '#50C2C9',
    padding: 20,
    borderRadius: 15,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  socialIcon: {
    height: 24,
    width: 24,
  },
});