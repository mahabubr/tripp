import { StyleSheet } from "react-native";
import colors from "../../../../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40
    },
    content_container: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 150
    },
    root: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 900,
        color: colors.sec_primary
    },
    ratting: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.secondary
    },
    skill: {
        textAlign: 'center',
        fontSize: 16,
        color: colors.light_secondary
    },
    des: {
        textAlign: 'justify',
        fontSize: 13,
        color: colors.dark_gray,
        marginVertical: 20
    },
    driver_txt: {
        fontSize: 18,
        fontWeight: 600,
        color: colors.secondary
    },
    driver_container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    driver_img: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    driver_name: {
        fontSize: 18,
        fontWeight: 700,
        color: colors.primary
    },
    driver_phone: {
        fontSize: 14,
        fontWeight: 600,
        color: colors.teal
    },
    btnTouch: {
        borderRadius: 10,
        backgroundColor: colors.sec_primary,
        padding: 15,
        marginTop: 20,
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.gray,
        fontSize: 16
    },
})

export default styles