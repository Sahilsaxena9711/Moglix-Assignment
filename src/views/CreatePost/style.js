// dependencies
import { StyleSheet } from "react-native";
// constants
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20
    },
    title: {
        fontFamily: COLORS.font,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    }
});

export default styles;
