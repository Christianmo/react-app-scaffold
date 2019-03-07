import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '@components/complex/Nav';
import { connect } from 'react-redux';
import userActions from '@redux/users/actions';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import styles from './styles.scss';

class Users extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const success = () => toast('Success Users load !');
    const failure = () => toast('Failure !');

    dispatch(userActions.getUsers(success, failure));
  }

  renderPost = user => (
    <div key={user.id}>{user.name}</div>
  )

  render() {
    const { users } = this.props;
    return (
      <div>
        <Nav />
        <h1 className={styles.title}>{t('users:title')}</h1>
        <div>{users && users.map(this.renderPost)}</div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    users: store.usersReducer.usersData,
    usersError: store.usersReducer.usersError,
    usersLoading: store.usersReducer.usersLoading,
  };
}

Users.propTypes = {
  users: PropTypes.shape({
    address: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.number,
    username: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Users);
