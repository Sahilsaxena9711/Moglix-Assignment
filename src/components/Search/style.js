//dependencies
import { StyleSheet } from "react-native";
//constant
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    inputContainer: {
        paddingVertical: 2,
        paddingHorizontal: 12,
        borderRadius: 4,
        margin: 20,
        borderWidth: 0.3,
        borderColor: COLORS.placeholder,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        fontSize: 16,
        fontFamily: COLORS.font,
        width: "85%"
    }
});

export default styles;