import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Sidebar.scss';

class Sidebar extends React.Component {
  render() {
    const { recentUsers } = this.props;
    return (
      <div className="sidebar">
        <div className="team-menu">
          <div className="company-headline">ASAPP</div>
          <div className="user">{this.props.user.name}</div>
        </div>
        <div className="users-list">
          <h3>Direct messages</h3>
          {recentUsers.length > 0 &&
            recentUsers.map(user => (
              <div key={user.id} className="recent-user">
                {user.name}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  recentUsers: PropTypes.array.isRequired,
  user: PropTypes.object
};

export default Sidebar;
