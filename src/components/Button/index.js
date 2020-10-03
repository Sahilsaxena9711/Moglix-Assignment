// dependencies
import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
// styles
import styles from "./styles";

export default function Buttom(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPress}
            style={styles.buttonContainer}
        >
            <Text style={styles.buttonText}>
                {props.title || "Submit"}
            </Text>
        </TouchableOpacity>
    );
}

Buttom.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
};