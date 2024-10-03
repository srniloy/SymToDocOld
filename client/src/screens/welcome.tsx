import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'


const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#d5f3f9', height: '100%'}}>
        <ScrollView>
            <View style={styles.wrapper}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                />
                <Image
                    style={styles.imageStye}
                    source={require('../../assets/telemedicine.png')}
                />
                <Text style={styles.heading2}>
                    Identify Diseases with{"\n"}
                    <Text style={styles.headingKeyword}>SymToDoc</Text>
                </Text>
                <Text style={styles.subText}>A place where everyone can find possible diseases{"\n"}from symptoms and a path to cure.</Text>
            </View>
            <View style={styles.continueBar}>
                <View style={{height:1, width: 100, backgroundColor:"#eff"}}></View>
                <Text style={{color:'#777', fontSize: 12}}>Continue With</Text>
                <View style={{height:1, width: 100, backgroundColor:"#eff"}}></View>
            </View>
        </ScrollView>
        <StatusBar  backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    wrapper:{
        width: "100%",
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 200,
        marginVertical: 20,
        resizeMode: 'center'
    },
    imageStye:{
        height: 200,
        width: 300,
        resizeMode: 'center'
    },
    heading2: {
        marginTop: 15,
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    },
    headingKeyword:{
        fontSize: 28,
        color: "#0096c7"
    },
    subText:{
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center'
    },
    continueBar:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        width: '100%',
        marginTop: 20
    }
})