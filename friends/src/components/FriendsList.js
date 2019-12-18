import React from "react";

import Friend from "./Friend";
import FriendsForm from "./FriendsForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("Friends List", res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {/* <FriendsForm /> */}
        <h3>My Friends</h3>
        {this.state.friends.map(friend => {
          return (
            <Friend
              key={friend.id}
              name={friend.name}
              email={friend.email}
              age={friend.age}
            />
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
