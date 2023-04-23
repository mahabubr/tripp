import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    image: {
        alignItems: 'center'
    },
    input_container: {
        gap: 15,
        marginTop: 30
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
})

export default styles