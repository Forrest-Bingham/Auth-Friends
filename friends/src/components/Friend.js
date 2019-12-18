import React from "react";

class Friend extends React.Component {
  render(props) {
    return (
      <div>
        {console.log(this.props.age)}
        <h5> {this.props.name} </h5>
        <h5> {this.props.age} </h5>
        <h5> {this.props.email} </h5>
      </div>
    );
  }
}

export default Friend;
