import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 700,
        color: colors.primary,
    },
    sub_title: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 400,
        color: colors.dark_gray
    },
    select_container: {
        marginTop: 30
    },
    btnTouch: {
        borderRadius: 10,
        backgroundColor: colors.sec_primary,
        padding: 15,
        width: '100%'
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.gray,
        fontSize: 16
    },
    bottomContent: {
        marginTop: 50,
    },
    bottomText1: {
        textAlign: 'center',
    },
    bottomText2: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 800,
        marginVertical: 20,
        color: colors.primary
    }
})

export default styles