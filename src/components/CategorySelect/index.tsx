import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

import { styles } from './style';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox: boolean;
}

export function CategorySelect({
    categorySelected,
    setCategory,
    hasCheckBox = true,
}: Props) {

    return (
        <ScrollView
            horizontal={true}
            style={styles.container}
            showsHorizontalScrollIndicator={false} // barra de rolagem
            contentContainerStyle={{ paddingRight: 34 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    );
}