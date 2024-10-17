import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export function Privace(){
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.section, styles.section1]}>
        <Text style={styles.sectionText}>View 1</Text>
      </View>
      <View style={[styles.section, styles.section2]}>
        <Text style={styles.sectionText}>View 2</Text>
      </View>
      <View style={[styles.section, styles.section3]}>
        <Text style={styles.sectionText}>View 3</Text>
      </View>
      <View style={[styles.section, styles.section4]}>
        <Text style={styles.sectionText}>View 4</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  section: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  section1: {
    backgroundColor: '#ffcccc',
  },
  section2: {
    backgroundColor: '#ccffcc',
  },
  section3: {
    backgroundColor: '#ccccff',
  },
  section4: {
    backgroundColor: '#ffcc99',
  },
  sectionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});


