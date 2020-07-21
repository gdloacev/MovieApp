import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Title} from 'react-native-paper';
import {getPlayingNowMoviesApi} from '../api/movies';
import CarouselVertical from '../components/CarouselVertical';

export default function Home(props){

    const {navigation} = props;

    const [nowMovies, setNowMovies] = useState(null);

    useEffect(() => {
        async function fetchData(){
            const data = await getPlayingNowMoviesApi();
            setNowMovies(data.results);
        }
        fetchData();
    }, []);

    return (
        <ScrollView>
            {nowMovies && (
                <View style={styles.nowPlaying}>
                    <Title style={styles.title}>Now Playing</Title>  
                    <CarouselVertical data={nowMovies} navigation={navigation} />                  
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    nowPlaying:{
        marginVertical: 10
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        marginHorizontal: 20
    },
});