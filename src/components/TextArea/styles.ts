import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary40,
        borderColor: theme.colors.secondary50,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        textAlignVertical: 'top',
        borderRadius: 8,
        paddingLeft: 16,
        paddingTop: 16,
        borderWidth: 1,
        marginRight: 4,
        width: '100%',
        fontSize: 13,
        height: 95,
    }
})