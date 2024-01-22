import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { View, Text } from 'react-native';

const TestScreen = ({ navigation }) => {
  // const { data: movies, isLoading, error } = useMovieApi(
  //   'https://api.themoviedb.org/3/movie/popular'
  // );

  // const navigateToDetails = (movie) => {
  //   // TODO
  //   console.log('navigate')
  // }

  // const renderMovieItem = ({item}) => (
  //   <MovieItem movie={item} onPress={() => navigateToDetails} />
  // )

  return (
    <View style={styles.container}>
      <Text>TEST</Text>
      {/* {isLoading && (<Text> Fetching Awesome Movies...</Text>)}
      {error ?  <Text style={styles.text}>Error: {error.message}</Text> : (
        <Text>TeST</Text>
        // <FlatList
        //   data={movies}
        //   keyExtractor={(item) => item.id.toString()}
        //   renderItem={renderMovieItem}
        //   />
      )} */}
    </View>
  )
}

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

