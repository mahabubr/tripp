import { StyleSheet } from "react-native";
import colors from "../../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40
    },
    content: {
        paddingHorizontal: 30,
        paddingBottom: 80
    },
    txt: {
        backgroundColor: colors.gray,
        marginVertical: 7,
        padding: 10,
        borderRadius: 10
    },
    title: {
        fontSize: 14,
        fontWeight: 800,
        color: colors.dark_gray
    }
})

export default styles