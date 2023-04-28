import { StyleSheet } from "react-native";
import colors from "../../../../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
    },
    content: {
        padding: 30,
        marginTop: 40
    },
    cover_img: {
        width: '100%',
        height: 200,
        position: 'relative'
    },
    img: {
        width: 120,
        height: 150,
        position: 'absolute',
        bottom: -60,
        left: 30,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: colors.gray
    },
    name: {
        fontSize: 25,
        fontWeight: 800,
        color: colors.sec_primary
    },
    loc: {
        fontSize: 16,
        fontWeight: 400,
        color: colors.dark_gray
    },
    tit_content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10
    },
    tit: {
        fontSize: 18,
        fontWeight: 600,
        color: colors.light_secondary,
        textAlign: 'center'
    },
    tit_2: {
        fontSize: 16,
        fontWeight: 400,
        color: colors.secondary,
        textAlign: 'center'
    },
    btn_content: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        gap: 15
    },
    btnTouch: {
        flex: 2,
        borderRadius: 8,
        backgroundColor: colors.sec_primary,
        padding: 10,
        height: 45
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.gray,
        fontSize: 16
    },
    btnTouch1: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: colors.gray,
        padding: 10,
        height: 45
    },
    btnText1: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.sec_primary,
        fontSize: 16
    },
    map: {
        width: '100%',
        height: 200,
    },
    map_content: {
        marginTop: 20
    },
    title: {
        fontWeight: 700,
        color: colors.teal,
        fontSize: 18,
        marginBottom: 10
    },
    about: {
        fontWeight: 400,
        color: colors.dark_gray,
        textAlign: 'justify'
    }
})

export default styles