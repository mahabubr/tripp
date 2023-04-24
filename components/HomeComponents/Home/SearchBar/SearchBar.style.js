import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    input_text: {
        borderWidth: 1,
        borderColor: colors.sec_primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        backgroundColor: colors.brown,
        borderRadius: 30
    }
})

export default styles