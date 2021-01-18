import React from "react";
import "./SelectedUser.css";
import { connect } from "react-redux";

function SelectedUser({ selectedUser }) {
  if (!selectedUser) {
    return (
        <div className="selectedUser">
          <div className="selectedUser-nouser">
          <h5>Select a User</h5>
          </div>
        </div>
      );
  }
  return (
    <div className="selectedUser">
      <div className="selectedUser-con">
        <div className="selectedUser-img">
          <img src={selectedUser.picture} />
        </div>
        <div className="selectedUser-details">
          <h4>
            {selectedUser.firstName} {selectedUser.lastName}
          </h4>
          <span>ID: {selectedUser.id}</span>
          <p>Email: {selectedUser.email}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { selectedUser: state.selectedUser };
};

export default connect(mapStateToProps)(SelectedUser);
