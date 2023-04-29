import { StyleSheet } from "react-native";
import colors from "../../../../../constants/colors";

const styles = StyleSheet.create({
    content: {
        padding: 30,
        backgroundColor: colors.gray,
        height: '100%'
    },
    container: {
        padding: 20,
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    input: {
        flex: 4,
        borderWidth: 1,
        borderColor: colors.dark_gray,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 50,
        height: 45
    },
    btnTouch1: {
        flex: 1,
        borderRadius: 50,
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
})

export default styles