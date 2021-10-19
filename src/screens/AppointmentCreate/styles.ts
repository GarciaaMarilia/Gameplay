import { theme } from "../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    label: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
    },

    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },

    select: {
        borderColor: theme.colors.secondary50,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        paddingRight: 25,
        borderRadius: 8,
        borderWidth: 1,
        width: '100%',
        height: 68,
    },

    image: {
        borderBottomColor: theme.colors.secondary50,
        backgroundColor: theme.colors.secondary50,
        borderRadius: 8,
        borderWidth: 1,
        height: 68,
        width: 64,
    },

    selectBody: {
        alignItems: 'center',
        flex: 1,
    },

    field: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30,
        width: '100%',
    },

    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    divider: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight,
        marginRight: 4,
        fontSize: 15,
    },

    caracteresLimit: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
    },

    footer: {
        marginVertical: 20,
        marginBottom: 56,
    }
});