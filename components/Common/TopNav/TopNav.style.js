import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingHorizontal: 30
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    icon: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 50,
        borderColor: colors.sec_primary,
    },
    title: {
        fontSize: 20,
        fontWeight: 800,
        color: colors.sec_primary
    }
})

export default styles