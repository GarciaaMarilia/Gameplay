import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const style = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 48,
        width: 48,
    },
});