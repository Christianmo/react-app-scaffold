import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '@components/complex/Nav';
import { connect } from 'react-redux';
import postActions from '@redux/posts/actions';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import styles from './styles.scss';

const success = () => toast('Success !');
const failure = () => toast('Failure !');

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  renderPost = post => (
    <div key={post.id}>{post.title}</div>
  )

  render() {
    const { posts, addPost } = this.props;
    return (
      <div>
        <Nav />
        <h1 className={styles.title}>{t('posts:title')}</h1>
        <p><button type="submit" onClick={addPost}>Add Post</button></p>
        <div>{posts && posts.map(this.renderPost)}</div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    posts: store.posts.postsData,
    postsError: store.posts.postsError,
    postsLoading: store.posts.postsLoading,
    singlePost: store.posts.postData,
    singlePostError: store.posts.postError,
    singlePostLoading: store.posts.postLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(postActions.getPosts(success, failure)),
    addPost: () => dispatch(postActions.addPost({ title: 'Hello World!' }, success, failure)),
  };
}

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
  })),
  getPosts: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
