import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    content_text: {
        marginVertical: 50,
    },
    contentPrimaryText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 800,
        letterSpacing: 2,
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    contentText2: {
        textAlign: 'justify',
        marginTop: 4,
        fontSize: 12,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: colors.dark_gray
    },
    bottomContent: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        gap: 100
    },
    arrowContent: {
        backgroundColor: colors.teal,
        flex: 1,
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigateContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        gap: 20
    },
    navigContent: {
        flex: 1,
        width: 10,
        height: 10,
        backgroundColor: colors.light_secondary,
        borderRadius: 50,
    },
    navigContent1: {
        flex: 1,
        width: 10,
        height: 10,
        backgroundColor: colors.light_secondary,
        borderRadius: 50
    },
    navigContent2: {
        flex: 1,
        width: 10,
        height: 10,
        backgroundColor: colors.light_secondary,
        borderRadius: 50
    },
})

export default styles