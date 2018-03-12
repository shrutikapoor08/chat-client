import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Sidebar.scss';

class Sidebar extends React.Component {
  render() {
    const { recentUsers } = this.props;
    return (
      <div className="sidebar">
        <div className="companyHeadline">ASAPP</div>
        <div className="usersList">
          {recentUsers &&
            recentUsers.map(user => (
              <div key={user.id} className="recentUser">
                {user.name}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  recentUsers: PropTypes.array.isRequired
};

export default Sidebar;
