import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '100%',
    },

    content: {
        flex: 1,
    },

    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,
        width: '100%',
    },

    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18
    },

    category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
    },

    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    footer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },

    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    date: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        marginLeft: 7,
        fontSize: 13,
    },

    player: {
        fontFamily: theme.fonts.text500,
        marginRight: 24,
        marginLeft: 7,
        fontSize: 13,
    }
});