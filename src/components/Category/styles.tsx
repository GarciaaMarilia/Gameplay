import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
        height: 120,
        width: 100,
    },

    content: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 8,
        height: 116,
        width: 100,
    },

    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        marginTop: 20,
        fontSize: 15,
    },

    check: {
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        position: 'absolute',
        borderRadius: 3,
        borderWidth: 2,
        height: 12,
        width: 12,
        right: 7,
        top: 7,
    },

    checked: {
        backgroundColor: theme.colors.primary,
        position: 'absolute',
        borderRadius: 3,
        height: 10,
        width: 10,
        right: 7,
        top: 7,
    }
});