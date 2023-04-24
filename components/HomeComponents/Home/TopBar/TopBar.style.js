import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    name: {
        fontSize: 20,
        fontWeight: 800,
        letterSpacing: 2,
        color: colors.secondary
    },
    location_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: 5,
    },
    location_txt: {
        color: colors.dark_gray
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    icon: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
        borderColor: colors.sec_primary,
        shadowColor: "#000",
        elevation: 100,
    }
})

export default styles