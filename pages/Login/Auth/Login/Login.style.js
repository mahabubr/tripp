import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'center',
        alignSelf: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 700,
        color: colors.primary
    },
    sub_title: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 400,
        color: colors.dark_gray
    },
    input_container: {
        gap: 15,
        marginTop: 10
    },
    input_content: {
        borderWidth: 1,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: colors.gray,
        borderColor: colors.dark_gray,
        fontSize: 16,
    },
    text_reg: {
        marginTop: 14,
        textAlign: 'center'
    },
    text_reg1: {
        fontSize: 16,
        fontWeight: 700,
        color: colors.primary
    },
    btnTouch: {
        borderRadius: 30,
        backgroundColor: colors.sec_primary,
        padding: 15,
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.gray,
        fontSize: 16
    },
    break_text: {
        marginVertical: 20,
        textAlign: 'center'
    },
    social_content: {
        gap: 10
    },
    oAuth_btn: {
        borderWidth: 2,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderColor: colors.primary,
        fontSize: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    oAuth_text: {
        color: colors.primary,
        fontWeight: 700
    },
    error: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 800,
        color: 'red'
    },
    forgetText: {
        textAlign: 'right'
    }
})

export default styles