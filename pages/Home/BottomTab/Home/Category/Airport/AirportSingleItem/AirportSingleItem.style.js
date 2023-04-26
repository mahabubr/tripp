import { StyleSheet } from "react-native";
import colors from "../../../../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40
    },
    image: {
        width: '100%',
        height: 250,
    },
    content_container: {
        padding: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'justify',
        color: colors.sec_primary,
    },
    location_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5,
        marginTop: 10,
    },
    loc_txt: {
        fontSize: 20
    },
    ratting: {
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        marginTop: 10,
    },
    flight: {
        color: colors.secondary,
        marginTop: 5,
        fontSize: 16,
        fontWeight: 600
    },
    des: {
        marginTop: 10,
        color: colors.dark_gray
    },
    btnTouch: {
        borderRadius: 10,
        backgroundColor: colors.sec_primary,
        padding: 15,
        width: '90%',
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 700,
        color: colors.gray,
        fontSize: 16
    },
    flight_container: {
        marginTop: 20
    },
    flight_txt: {
        fontSize: 18,
        fontWeight: 600,
        color: colors.secondary
    },
    flight_content: {
        marginTop: 10
    },
    flightContentTitle: {
        fontSize: 16,
        fontWeight: 700
    },
    flight_container_sub_title: {
        marginTop: 3,
        color: colors.teal
    }
})

export default styles