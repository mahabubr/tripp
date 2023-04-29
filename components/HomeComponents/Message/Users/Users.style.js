import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.dark_gray,
        paddingBottom: 20
    },
    img_content: {
        flex: 1
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    txt_content: {
        flex: 3
    },
    name: {
        fontSize: 17,
        fontWeight: 700,
        color: colors.sec_primary
    },
    loc: {
        fontSize: 15,
        fontWeight: 500,
        color: colors.dark_gray
    }
})

export default styles