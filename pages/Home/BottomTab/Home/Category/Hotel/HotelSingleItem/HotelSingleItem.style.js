import { StyleSheet } from "react-native";
import colors from "../../../../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        marginVertical: 40
    },
    content: {
        marginHorizontal: 30
    },
    image: {
        width: '100%',
        height: 200
    },
    name: {
        fontSize: 25,
        fontWeight: 800,
        marginTop: 10,
        color: colors.sec_primary
    },
    ratting: {
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        marginTop: 10
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
    specialty: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 15
    },
    icon: {
        backgroundColor: colors.brown,
        textAlign: 'center',
        paddingVertical: 10,
        borderRadius: 50,
        fontSize: 16,
        fontWeight: 900
    },
    icon_content: {
        flex: 2
    },
    icon_txt: {
        textAlign: 'center',
        color: colors.primary,
        fontWeight: 700,
        marginTop: 6
    },
    btnTouch: {
        borderRadius: 10,
        backgroundColor: colors.sec_primary,
        padding: 15,
        marginBottom: 20,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.gray,
        fontSize: 16
    },
    des: {
        fontSize: 13,
        color: colors.dark_gray,
        textAlign: 'justify',
        marginTop: 20
    }
})

export default styles