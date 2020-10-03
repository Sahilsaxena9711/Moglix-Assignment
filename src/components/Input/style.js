//dependencies
import { StyleSheet } from "react-native";
//constants
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 0.8,
        borderColor: COLORS.border,
        backgroundColor: COLORS.background,
        borderRadius: 2,
        padding: 12,
        fontSize: 16,
        marginTop: 20,
        fontFamily: COLORS.font
    }
});

export default styles;