import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        width: '100%',
        height: 56,
    },

    iconWrapper: {
        borderColor: theme.colors.line,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        width: 56,
        height: 56,
    },

    icon: {
        height: 18,
        width: 24,
    },

    title: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        flex: 1,
    },
});