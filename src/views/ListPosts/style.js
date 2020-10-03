//dependencies
import { StyleSheet } from "react-native";
//constants
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    listContainer: {
        paddingHorizontal: 20
    },
    noDataFound: {
        textAlign: "center",
        fontSize: 14,
        fontFamily: COLORS.font
    }
})

export default styles;