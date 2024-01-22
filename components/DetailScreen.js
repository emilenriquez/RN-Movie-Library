import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

const DetailScreen = ({ title, year, posterUrl }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <Image source={{ uri: posterUrl }} style={styles.poster} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>8.5</Text>
        </View>
        <View style={styles.plot}>
          <Text style={styles.plotText}>
            A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Watch Trailer</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add to Watchlist</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  poster: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  year: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  rating: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -25,
    right: 20,
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  plot: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  plotText: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailScreen;