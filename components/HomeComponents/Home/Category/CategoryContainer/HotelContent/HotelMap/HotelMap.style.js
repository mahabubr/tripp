import { StyleSheet } from "react-native";
import colors from "../../../../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        height: '100%',
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
        fontSize: 16,
        fontWeight: 800,
        color: colors.sec_primary,
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