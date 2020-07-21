import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Switch, TouchableRipple, Text} from 'react-native-paper';
import usePreferences from '../hooks/usePreferences';
import { StyleSheet, View } from 'react-native';

export default function DrawerContent(props){

    const {navigation} = props;
    const [active, setActive] = useState('Home');
    const {theme, toggleTheme} = usePreferences();

    const onChangeScreen = (screen) => {
        navigation.navigate(screen);
        setActive(screen);
    };

    const getActive = (screen) => {
        return screen == active;
    };

    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label='Home' active={getActive('Home')} onPress={() => onChangeScreen('Home')}/>
                <Drawer.Item label='News' active={getActive('News')} onPress={() => onChangeScreen('News')}/>
                <Drawer.Item label='Popular' active={getActive('Popular')} onPress={() => onChangeScreen('Popular')}/>
            </Drawer.Section>
            <Drawer.Section title='Options'>
                <TouchableRipple>
                    <View style={styles.preferences}>
                        <Text>Dark Theme</Text>
                        <Switch value={theme == 'dark'} onValueChange={toggleTheme}/>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    preferences:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12
    },
});