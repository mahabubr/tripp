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
        marginTop: 25
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
    bottomContent: {
        marginTop: 20
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
    error: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 800,
        color: 'red'
    },

    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: colors.brown,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.secondary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: 500
    },
    modal_title: {
        fontSize: 30,
        fontWeight: 900,
        color: colors.secondary,
        marginTop: 40
    },
    modal_sub_title: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: 600,
        color: colors.dark_gray,
        textAlign: 'center'
    },
    btnTouch1: {
        borderRadius: 10,
        backgroundColor: colors.sec_primary,
        padding: 15,
        width: '100%',
        marginTop: 20
    },
    btnText1: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.gray,
        fontSize: 16
    },
})

export default styles