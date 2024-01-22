import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MovieItem from '../components/MovieItem';
import PaginationDetails from './PaginationDetails';
import styles from '../styles/styles.scss';

import useMovieApi from '../hooks/useMovieApi';

const HomeScreen = ({ navigation }) => {
  const { data: movies, paginationDetails, isLoading, error } = useMovieApi(
    'https://api.themoviedb.org/3/movie/popular'
  );

  const navigateToDetails = (movie) => {
    navigation.navigate('Details', { movie });
  }

  const renderMovieItem = ({item}) => (
    <MovieItem movie={item} onPress={() => navigateToDetails(item)} />
  )

  return (
    <View>
      {isLoading && (<Text> Fetching Awesome Movies...</Text>)}
      {error ?  <Text style={styles.text}>Error: {error.message}</Text> : (
        <View>
          <PaginationDetails
            currentPage={paginationDetails.page}
            totalPages={paginationDetails.totalPages}
            totalResults={paginationDetails.totalResults} />

          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderMovieItem}
            />
        </View>
      )}
    </View>
  )
}

export default HomeScreen;
