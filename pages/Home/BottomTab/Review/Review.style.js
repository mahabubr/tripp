import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40
    },
    content: {
        paddingHorizontal: 30
    },
    input: {
        width: '100%',
        borderWidth: 2,
        borderColor: colors.dark_gray,
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 10
    },
    btnTouch: {
        borderRadius: 5,
        backgroundColor: colors.sec_primary,
        padding: 12,
        marginTop: 10,
        width: '30%',
        marginLeft: 'auto'
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.gray,
        fontSize: 14
    },
    txt_content: {
        marginTop: 20
    },
    cnt: {
        marginVertical: 15,
    },
    main_content: {
        backgroundColor: colors.gray,
        padding: 25,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    email: {
        fontSize: 12,
        fontWeight: 800,
        color: colors.sec_primary
    },
    title: {
        fontWeight: 800,
        color: colors.secondary,
        fontSize: 22,
        marginTop: 10
    },
    icon_content: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default styles