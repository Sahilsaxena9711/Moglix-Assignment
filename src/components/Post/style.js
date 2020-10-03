//dependencies
import { StyleSheet } from "react-native";
//constants
import { COLORS } from "../../constants";


const styles = StyleSheet.create({
    postContainer: {
        padding: 12,
        marginBottom: 12,
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: COLORS.border,
        backgroundColor: COLORS.active
    },
    postTitle: {
        fontFamily: COLORS.font,
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        paddingBottom: 4,
        borderBottomColor: COLORS.border,
        borderBottomWidth: 0.3,
    },
    postBody: {
        fontFamily: COLORS.font,
        fontSize: 14,
        paddingTop: 2,
        lineHeight: 18,
        opacity: 0.8
    }
});

export default styles;