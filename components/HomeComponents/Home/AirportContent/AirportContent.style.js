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
    see_all_txt: {
        fontSize: 15,
        color: colors.primary,
        fontWeight: 800,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary
    },
    sub_title: {
        color: colors.sec_primary,
        fontWeight: 600
    },
    content_container: {
        marginTop: 5,
    },
    item_container: {
        marginTop: 20,

    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10
    },
    item_title: {
        fontSize: 20,
        marginTop: 5,
        fontWeight: 700,
        color: colors.sec_primary
    },
    location_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5,
        marginTop: 8,
    },
    loc_txt: {
        fontSize: 16
    },
    ratting: {
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        marginTop: 10
    }
})

export default styles