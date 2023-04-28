import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 800,
        color: colors.light_secondary
    },
    sub_title: {
        color: colors.sec_primary,
        fontWeight: 600
    },
    see_all_txt: {
        fontSize: 15,
        color: colors.primary,
        fontWeight: 800,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary
    },
    content: {
        marginTop: 20
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 5
    },
    name: {
        fontWeight: 800,
        fontSize: 18,
        color: colors.sec_primary,
        marginTop: 5
    },
    loc: {
        fontWeight: 400,
        fontSize: 14,
        color: colors.dark_gray,
        marginTop: 2
    }
})

export default styles