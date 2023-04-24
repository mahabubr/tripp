import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
    },
    itemContainer: {
        marginHorizontal: 10,
        gap: 5
    },
    image_container: {
        backgroundColor: colors.gray,
        padding: 8,
        borderRadius: 50
    },
    image: {
        width: 40,
        height: 40,
    },
    itemTxt: {
        textAlign: 'center'
    }
})

export default styles