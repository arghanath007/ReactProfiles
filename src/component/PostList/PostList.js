import { Component } from "react";
import { connect } from "react-redux";

import { fetchPostsAndUser } from "../actions/index";
import UserHeader from "../UserHeader/UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUser();
  }

  renderList = () =>
    this.props.posts.map((post) => (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    ));
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, {
  fetchPostsAndUser,
})(PostList);
