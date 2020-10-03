// dependencies
import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";
// constants
import { COLORS } from "../../constants";
// styles
import styles from "./style";

export default function Input(props) {
    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={COLORS.placeholder}
            style={[styles.inputContainer, {
                minHeight: props.multiline ? 120 : 'auto'
            }]}
            value={props.value}
            onChangeText={props.onChange}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines || 1}
        />
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    numberOfLines: PropTypes.number
};