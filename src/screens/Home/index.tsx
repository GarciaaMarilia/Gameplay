import React, { useState } from 'react';
import { View } from 'react-native';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background/index'
import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';


export function Home() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
        </Background >
    );
}