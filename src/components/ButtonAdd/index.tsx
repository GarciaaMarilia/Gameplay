import React from 'react';

import {
    RectButton,
    RectButtonProps
} from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { style } from './styles';

type Props = RectButtonProps;

export function ButtonAdd({ ...rest }: Props) {
    return (
        <RectButton
            style={style.container}
            {...rest}
        >
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />

        </RectButton>
    )
}