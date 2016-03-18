import React, { PropTypes, Component } from 'react';

import Core from "meteor/nova:core";
const Messages = Core.Messages;

class Flash extends Component{

  componentDidMount() {
    Messages.markAsSeen(this.props.message._id);
  }

  render() {
    return (
      <div className={`flash-message page-message page-message--${this.props.message.type}`}>
        <div className="page-message__text">{this.props.message.content}</div>
      </div>
    )
  }
}

module.exports = Flash;