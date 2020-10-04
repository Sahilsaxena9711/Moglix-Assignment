// dependencies
import React, { Component } from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { Search, Post } from "../../components";
import { fetchPosts } from "../../redux/actions";
//styles
import styles from "./style";
//constants
import { COLORS, STATE_STATUS } from "../../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ListPost extends Component {

    state = {
        search: ""
    }

    componentDidMount() {
        //fetch posts action call
        this.props.fetchPosts();
    }


    onSearch = search => {
        this.setState({
            search
        });
    }

    // filter data on basis of text entered in search
    onFilterData = () => {
        let result = this.props.postsData;
        result = result.filter(post =>
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

    renderItem = ({ item }) => <Post {...item} />;

    renderFooterComponent = () => {
        if (this.props.postsStatus === STATE_STATUS.FETCHING) {
            return <ActivityIndicator color={COLORS.placeholder} />
        }
        return <View />
    }

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
                    ListFooterComponent={this.renderFooterComponent}
                    ListEmptyComponent={this.renderEmptyComponent}
                    keyExtractor={item => `item-${item.id}`}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    postsStatus: state.post.posts.status || STATE_STATUS.FETCHING,
    postsData: state.post.posts.data || []
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPosts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPost);