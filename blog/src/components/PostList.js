import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';


class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderedPosts() {
        return this.props.posts.map(post => {
            return (
                <div className="d-flex border-bottom pt-3 pb-3" key={post.id}>
                    <div className="mt-2 col border-right text-center">
                        <i className="fas fa-user fa-2x text-primary"></i>
                        <UserHeader userId={post.userId}/>
                    </div>
                    <div className="ml-3 col-10">
                        <h6 className="title">{ post.title }</h6>
                        <div className="text">{ post.body }</div>
                    </div>
                    <hr />
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h6 className="border-bottom pb-2">Recent posts</h6>
                { this.renderedPosts() }
            </div>
        );
    };
};


const mapStateToProps = (state) => {
    return { posts: state.posts}
}


export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
)(PostList);