import { StyleSheet } from "react-native";
import colors from "../../../../../../../constants/colors";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: '50%'
    },
    close: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    parent_content: {
        // gap: 20
        marginVertical: 10
    },
    contentContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: colors.gray,
        borderRadius: 20
    },
    image_content: {
        flex: 1
    },
    text_content: {
        flex: 2,
        padding: 12
    },
    location_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5,
        marginTop: 0,
    },
    loc_txt: {
        fontSize: 14
    },
    ratting: {
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 800,
        height: 50
    }
})

export default styles