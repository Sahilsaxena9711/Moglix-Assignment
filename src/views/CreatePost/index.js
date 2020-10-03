// dependencies
import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { Input, Button } from "../../components";
// styles
import styles from "./style";

export default class CreatePost extends Component {

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
            return;
        }
        if (!body) {
            return;
        }
        //submit post
    }

    render() {
        const { title, body } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Create Post</Text>
                <ScrollView>
                    <Input
                        value={body}
                        onChange={this.onChangeBody}
                        key={"title"}
                        placeholder={"Enter Title"}
                    />
                    <Input
                        value={title}
                        onChange={this.onChangeTitle}
                        key={"body"}
                        placeholder={"Enter Body"}
                        numerOfLines={6}
                        multiline
                    />
                    <Button
                        title={"Create"}
                        onPress={this.onPress}
                    />
                </ScrollView>
            </View>
        )
    }
}