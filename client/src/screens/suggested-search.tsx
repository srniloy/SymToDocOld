import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import data from '../../assets/data/diseases_search_JSON.json'
import { getDisease } from '../services/getDiseases';

const SuggestedSearch = () => {
  const [value, setValue] = useState('');
  const [selectedDiseases, setSelectedDiseases] = useState<any[]>([]);

  const changeHandle = (text: string) => {
    setValue(text);
  };

  const onSearch = (searchTerm: string) => {
    if (!selectedDiseases.some(disease => disease.Disease === searchTerm)) {
      const disease = data.find(item => item.Disease === searchTerm);
      if (disease) {
        setSelectedDiseases(prev => [...prev, disease]);
      }
    }
    setValue('');
  };

  const removeDisease = (diseaseToRemove: string) => {
    setSelectedDiseases(prev => prev.filter(disease => disease.Disease !== diseaseToRemove));
  };

  const findDisease = async () => {
    const possibleDisese = await getDisease(selectedDiseases)
  }

  return (
    <View style={styles.mainBox}>
      <View style={styles.app}>
        <Text style={styles.title}>DiseaseSearch</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchInner}>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={changeHandle}
              placeholder='Search Diseases....'
              placeholderTextColor="#888"
            />
          </View>

          <ScrollView style={styles.dropdown}>
            {
              data
                .filter(item => {
                  const searchTerm = value.toLocaleLowerCase();
                  const diseaseName = item.Disease.toLocaleLowerCase();
                  return searchTerm && diseaseName.startsWith(searchTerm) && diseaseName !== searchTerm;
                })
                .slice(0, 5)
                .map(item => (
                  <TouchableOpacity
                    key={item.ID}
                    onPress={() => onSearch(item.Disease)}
                    style={styles.dropdownRow}
                  >
                    <Text style={styles.dropdownText}>{item.Disease}</Text>
                  </TouchableOpacity>
                ))
            }
          </ScrollView>
        </View>

        {/* Render the selected diseases as tags */}
        <View style={styles.tagsContainer}>
          {
            selectedDiseases.map(disease => (
              <View key={disease.ID} style={styles.tag}>
                <Text style={styles.tagText}>{disease.Disease}</Text>
                <TouchableOpacity onPress={() => removeDisease(disease.Disease)} style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>

        <TouchableOpacity onPress={findDisease} style={styles.searchButtonBorder}>
            <Text style={styles.searchButtonText}>Search Disease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuggestedSearch;

const styles = StyleSheet.create({
  mainBox: {
    width: '85%'
  },
  app: {
    // backgroundColor: 'grey'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center'
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 40,
    backgroundColor: 'white'
  },
  dropdown: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 19,
  },
  dropdownRow: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 17,
    marginRight: 17,
  },
  dropdownText: {
    fontSize: 16,
  },
  // Styles for the selected disease tags
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 14,
    marginRight: 8,
  },
  removeButton: {
    backgroundColor: '#ff6b6b',
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },

  searchButtonBorder: {
    backgroundColor: 'blue',
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 40,
    alignItems: 'center'
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  }
});
