import React from 'react';
// TODO: use scss file
import { View, Text, StyleSheet } from 'react-native';

const PaginationDetails = ({ currentPage, totalPages, totalResults }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Page {currentPage} of {totalPages}
      </Text>
      <Text style={styles.text}>Total Results: {totalResults}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default PaginationDetails;