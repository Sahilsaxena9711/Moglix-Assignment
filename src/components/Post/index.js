//dependencies
import React from 'react';
import PropTypes from "prop-types";
import { View, Text } from 'react-native';
//styles
import styles from "./style";

export default function Post(props) {
    return (
        <View style={styles.postContainer}>
            <Text style={styles.postTitle}>
                {props.title}
            </Text>
            <Text style={styles.postBody}>
                {props.body}
            </Text>
        </View>
    );
}

Post.propTypes = {
    props: PropTypes.object,
    props: PropTypes.string
};