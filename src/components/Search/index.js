// dependencies
import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//constant
import { COLORS } from "../../constants";
// styles
import styles from "./style";

export default function Search(props) {
    return (
        <View style={styles.inputContainer}>
            <Icon name={"magnify"} size={20} color={COLORS.placeholder} />
            <TextInput
                placeholder={"Search"}
                value={props.value}
                onChangeText={props.onSearch}
                placeholderTextColor={COLORS.placeholder}
                style={styles.input}
            />
        </View>
    );
}

Search.propTypes = {
    onSearch: PropTypes.func,
    value: PropTypes.string
};