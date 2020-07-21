import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Title} from 'react-native-paper';
import {API_BASE_IMG} from '../utils/Constants';
import {getGenreMovieApi} from '../api/movies';

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
        <View>
            <Title style={styles.title}>{movie.title}</Title>
            <Image style={styles.image} source={{uri: image_url}} />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        marginTop: 15,
        textAlign: 'center'
    },
    image:{
        borderRadius: 20,
        height: 450,
        marginHorizontal: '10%',
        marginVertical: 20,
        width: '80%'
    },
});