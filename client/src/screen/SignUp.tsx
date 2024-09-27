import { StyleSheet, Text, TextInput, View, Image, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAccount } from '../services/signUpInfo';

function SignUp(props: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log('Logging in with', { email, password });
        props.navigation.navigate('Home'); 


        const userInfo = {email, password};
        const info = await createAccount(userInfo)
    };

    return (
        <View style={styles.pageContainer}>
            {/* Background Image */}
            <ImageBackground 
                source={require('../assets/Banner1.png')} // Correct image path
                resizeMode="cover" 
                style={styles.imageBackground}
            >

                <View style={styles.overlayContainer}>
                    <View style={styles.SignupContainer}>
                        <Text style={styles.title}>Sign Up</Text>

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
                            <Text style={styles.getStartedText}>Sign Up</Text>
                        </TouchableOpacity>

                        <View style={styles.signUpTextContainer}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')}>
                                <Text style={styles.signUpText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Social Buttons */}
                    <View style={styles.socialButtonsContainer}>
                        <TouchableOpacity style={styles.getSocialButton}>
                            <Image
                                style={styles.socialIcon}
                                source={require('../assets/google_media_social_icon.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.getSocialButton}>
                            <Image
                                style={styles.socialIcon}
                                source={require('../assets/apple_icon.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.getSocialButton}>
                            <Image
                                style={styles.socialIcon}
                                source={require('../assets/facebook_f_icon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },   
    overlayContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    },
    SignupContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: '76%',
        width: '70%',
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#50C2C9',
        padding: 20,
        borderRadius: 15,
        width: 55,
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
    },
    socialIcon: {
        height: 24,
        width: 24,
    },
});
