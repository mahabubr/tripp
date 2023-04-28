import { StyleSheet } from "react-native";
import colors from "../../../../../../constants/colors";

const styles = StyleSheet.create({
    content: {
        paddingBottom: 60
    },
    container: {
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: 80,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    name: {
        fontSize: 20,
        fontWeight: 700,
        color: colors.sec_primary,
        marginTop: 5
    },
    loc: {
        fontSize: 16,
        fontWeight: 300,
        color: colors.dark_gray,
        marginTop: 5
    }
})

export default styles