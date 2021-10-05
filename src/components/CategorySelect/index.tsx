import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

import { styles } from './style';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

export function CategorySelect() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false} // barra de rolagem
            contentContainerStyle={{ paddingRight: -40 }}
        >
            {
                categories.map(category => (
                    <Category 
                        
                    
                    />
                ))
            }
        </ScrollView>
    );
}