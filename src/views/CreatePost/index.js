// dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, Button } from "../../components";
import Toast from "react-native-simple-toast";
// styles
import styles from "./style";
// actions 
import { fetchCreatePosts } from "../../redux/actions";
import { STATE_STATUS } from "../../constants";

class CreatePost extends Component {

    state = {
        body: "",
        title: ""
    }


    onChangeTitle = (title) => {
        this.setState({
            title
        });
    }

    onChangeBody = (body) => {
        this.setState({
            body
        });
    }

    onPress = () => {
        const { title, body } = this.state;
        // checking if any one of body or title is left blank
        if (!title) {
            Toast.show("Please enter title", Toast.LONG)
            return;
        }
        if (!body) {
            Toast.show("Please enter body", Toast.LONG)
            return;
        }
        //submit post
        this.props.fetchCreatePosts({
            id: new Date().getTime(),
            title,
            body
        });
        // initialize states for body and title after submission
        this.setState({
            body: "",
            title: ""
        });
    }

    render() {
        const { title, body } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Create Post</Text>
                <ScrollView>
                    <Input
                        value={title}
                        onChange={this.onChangeTitle}
                        key={"title"}
                        placeholder={"Enter Title"}
                    />
                    <Input
                        value={body}
                        onChange={this.onChangeBody}
                        key={"body"}
                        placeholder={"Enter Body"}
                        numerOfLines={6}
                        multiline
                    />
                    <Button
                        title={"Create"}
                        disabled={this.props.createPostStatus === STATE_STATUS.FETCHING}
                        onPress={this.onPress}
                    />
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    createPostStatus: state.post.createPost.status
});

const mapDispatchTopProps = dispatch => bindActionCreators({
    fetchCreatePosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchTopProps)(CreatePost);

CreatePost.propTypes = {
    createPostStatus: PropTypes.string,
    fetchCreatePosts: PropTypes.func
};