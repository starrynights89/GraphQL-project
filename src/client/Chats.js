/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

const chats = [{
  id: 1,
  users: [{
    id: 1,
    avatar: '/uploads/avatar1.png',
    username: 'Test User',
  },
  {
    id: 2,
    avatar: '/uploads/avatar2.png',
    username: 'Test User 2',
    lastMessage: {
      text: 'This is a third test message.',
    },
  }],
}];

export default class Chats extends Component {
  usernamesToString(users) {
    const userList = users.slice(1);
    var usernamesString = '';

    for(var i = 0; i < userList.length; i++) {
      usernamesString += userList[i].username;
      if(i - 1 === userList.length) {
        usernamesString += ', ';
      }
    }
    return usernamesString;
  }

  shorten(text) {
    if (text.length > 12) {
      return text.substring(0, text.length - 9) + '...';
    }

    return text;
  }

  lastMessage(chat, args, context) {
    return chat.getMessages({ limit: 1, order: [['id', 'DESC']] }).then((message) => {
      return message[0];
    });
  }

  render() {
    return (
      <div className="chats">
        {chats.map((chat, i) =>
          <div key={chat.id} className="chat">
            <div className="header">
              <img src={(chat.users.length > 2 ? '/public/group.png' : chat.users[1].avatar)} />
              <div>
                <h2>{this.shorten(this.usernamesToString(chat.users))}</h2>
                <span>{this.shorten(chat.lastMessage.text)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
