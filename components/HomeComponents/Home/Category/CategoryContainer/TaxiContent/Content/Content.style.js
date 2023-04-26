import { StyleSheet } from "react-native";
import colors from "../../../../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    ,
    text_content: {
        padding: 10
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10
    },
    locate: {
        fontSize: 13,
        fontWeight: 600,
        color: colors.primary,
        marginTop: 5
    },
    ratting: {
        fontSize: 16,
        color: colors.teal
    }
})

export default styles