//dependencies
import { StyleSheet } from "react-native";
//constants
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 20,
    },
    buttonText: {
        color: COLORS.active,
        fontFamily: COLORS.font,
        fontSize: 18
    }
});

export default styles;