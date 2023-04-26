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
    card_content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 5
    },
    image_container: {
        flex: 1
    },
    text_container: {
        flex: 1,
        padding: 10
    },
    name: {
        fontSize: 18,
        fontWeight: 800,
        color: colors.sec_primary,
        height: 40
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