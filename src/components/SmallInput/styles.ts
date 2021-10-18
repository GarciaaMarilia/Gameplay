import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary40,
        borderColor: theme.colors.secondary50,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        textAlign: 'center',
        borderRadius: 8,
        borderWidth: 1,
        marginRight: 4,
        fontSize: 13,
        height: 48,
        width: 48,
    }
})