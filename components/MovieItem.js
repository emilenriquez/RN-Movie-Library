import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/movieItem.scss';

const MovieItem = ({ movie, onPress }) => console.log('movie', movie) || (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.movieItem}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.release_date}>{movie.release_date}</Text>
        <Text style={styles.release_date}>Rating {movie.vote_average}/10</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default MovieItem;