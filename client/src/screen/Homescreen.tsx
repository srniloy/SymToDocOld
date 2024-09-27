// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const HomeScreen = (props:any) => {
  const [search, setSearch] = useState('');
  const [output, setOutput] = useState(''); 

  const handleSearch = () => {
    setOutput(`Search result for: ${search}`); 
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter search term"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Output text below the search bar */}
      <Text style={styles.outputText}>{output}</Text>

      <TouchableOpacity style={styles.LogoutContainer}>
        <Text style={styles.Logout} onPress={() => props.navigation.navigate('LoginScreen')}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '92%',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: '#50C2C9',
    padding: 10,
    marginLeft: 5,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  outputText: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
  LogoutContainer: {
    marginTop: 120,
  },
  Logout: {
    backgroundColor: '#50C2C9',
    padding: 20,
    borderRadius: 15,
    width: 105,
    textAlign: 'center',
    color: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
