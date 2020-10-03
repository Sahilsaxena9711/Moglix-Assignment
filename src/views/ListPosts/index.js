// dependencies
import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { Search, Post } from "../../components";
//styles
import styles from "./style";
//constants
import { POSTS_DATA } from "../../constants";

export default class ListPost extends Component {

    state = {
        search: ""
    }

    onSearch = search => {
        this.setState({
            search
        });
    }

    // filter data on basis of text entered in search
    onFilterData = () => {
        let result = POSTS_DATA;
        result = POSTS_DATA.filter(post =>
            post.title.toLowerCase().includes(this.state.search.toLowerCase())
        );
        return result;
    }

    // returns an empty component if search result is not found
    renderEmptyComponent = () => {
        if (this.state.search) {
            return <Text style={styles.noDataFound}>No posts found</Text>
        }
        return <View />
    }

    renderItem = ({ item }) => <Post {...item} />

    render() {
        const { search } = this.state;
        const filteredResult = this.onFilterData();

        return (
            <View style={styles.container}>
                <Search value={search} onSearch={this.onSearch} />
                <FlatList
                    data={filteredResult}
                    contentContainerStyle={styles.listContainer}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmptyComponent}
                    keyExtractor={item => `item-${item.id}`}
                />
            </View>
        )
    }
}