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
    content_container: {
        marginTop: 15,
    },
    text_content: {
        marginRight: 25
    },
    image: {
        width: 160,
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