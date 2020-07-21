import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {API_BASE_IMG} from '../utils/Constants';
import {getGenreMovieApi} from '../api/movies';
import {map, size} from 'lodash';

export default function Movie(props){

    const {route} = props;
    const movie = route.params.movie;
    const image_url = `${API_BASE_IMG}/w500${movie.poster_path}`;

    const [genres, setGenres] = useState(null);

    useEffect(() => {
        getGenreMovieApi(movie.genre_ids).then((response) => {
            setGenres(response);
        });
    }, []);

    return (
        <ScrollView>
            <Title style={styles.title}>{movie.title}</Title>
            <Image style={styles.image} source={{uri: image_url}} />
            <Text style={styles.overview}>
                {movie.overview}
            </Text>
            <View style={styles.genres}>
                    {genres && (
                        map(genres, (genre, index) => (
                            <Text key={index} style={styles.genre}>
                                {genre}
                                {index != size(genres) - 1 ? ', ' : ''}
                            </Text>
                        ))
                    )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    genres:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 10,
        marginVertical: 10
    },
    genre:{
        color: 'silver',
        fontSize: 12
    },
    title:{
        fontSize: 24,
        marginTop: 10,
        textAlign: 'center'
    },
    image:{
        borderRadius: 20,
        height: 450,
        marginHorizontal: '10%',
        marginVertical: 15,
        width: '80%'
    },
    overview:{
        paddingHorizontal: 20,
        textAlign: 'justify',
        width: '100%'
    },
});