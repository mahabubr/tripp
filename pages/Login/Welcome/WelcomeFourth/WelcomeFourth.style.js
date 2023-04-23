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
        marginTop: 50,
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
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
    btnTouch: {
        borderRadius: 10,
        backgroundColor: colors.sec_primary,
        padding: 15,
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.gray,
        fontSize: 16
    }
})

export default styles