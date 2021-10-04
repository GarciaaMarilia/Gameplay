import React from 'react';
import { View } from 'react-native';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background'
import { styles } from './styles'

export function Home() {
    return (
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                </View>
            </View>
        </Background>
    );
}