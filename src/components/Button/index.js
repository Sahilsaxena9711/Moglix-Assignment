// dependencies
import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
// styles
import styles from "./styles";
import { COLORS } from "../../constants";

export default function Buttom(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPress}
            disabled={props.disabled}
            style={[styles.buttonContainer, {
                backgroundColor: props.disabled ? COLORS.placeholder : COLORS.primary
            }]}
        >
            <Text style={styles.buttonText}>
                {props.title || "Submit"}
            </Text>
        </TouchableOpacity>
    );
}

Buttom.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
};