

/*class Groupchat extends React.Component {
  constructor(props) {
    super(props);
this.state = {
      receiverID: "",
      messageText: null,
      groupMessage: [],
      user: {},
      isAuthenticated: true
    };
this.GUID = config.GUID;
  }
sendMessage = () => {
    chat.sendGroupMessage(this.GUID, this.state.messageText).then(
      message => {
        console.log("Message sent successfully:", message);
        this.setState({ messageText: null });
      },
      error => {
        if (error.code === "ERR_NOT_A_MEMBER") {
          chat.joinGroup(this.GUID).then(response => {
            this.sendMessage();
          });
        }
      }
    );
  };
scrollToBottom = () => {
    const chat = document.getElementById("chatList");
    chat.scrollTop = chat.scrollHeight;
  };
handleSubmit = event => {
    event.preventDefault();
    this.sendMessage();
    event.target.reset();
  };
handleChange = event => {
    this.setState({ messageText: event.target.value });
  };
getUser = () => {
    chat
      .getLoggedinUser()
      .then(user => {
        console.log("user details:", { user });
        this.setState({ user });
      })
      .catch(({ error }) => {
        if (error.code === "USER_NOT_LOGED_IN") {
          this.setState({
            isAuthenticated: false
          });
        }
      });
  };
messageListener = () => {
    chat.addMessageListener((data, error) => {
      if (error) return console.log(`error: ${error}`);
      this.setState(
        prevState => ({
          groupMessage: [...prevState.groupMessage, data]
        }),
        () => {
          this.scrollToBottom();
        }
      );
    });
  };
componentDidMount() {
    this.getUser();
    this.messageListener();
    // chat.joinGroup(this.GUID)
  }
render() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="chatWindow">
        <ul className="chat" id="chatList">
          {this.state.groupMessage.map(data => (
            <div key={data.id}>
              {this.state.user.uid === data.sender.uid ? (
                <li className="self">
                  <div className="msg">
                    <p>{data.sender.uid}</p>
                    <div className="message"> {data.data.text}</div>
                  </div>
                </li>
              ) : (
                <li className="other">
                  <div className="msg">
                    <p>{data.sender.uid}</p>
                   <div className="message"> {data.data.text} </div>
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
        <div className="chatInputWrapper">
          <form onSubmit={this.handleSubmit}>
            <input
              className="textarea input"
              type="text"
              placeholder="Enter your message..."
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Groupchat;
*/

import React,{Component} from 'react';
import Chat from 'react-chatbot-kit';
import {Launcher} from 'react-chat-window';
import logo from '../../imgs/logo.png';

        class Chatbot extends Component {
 
            constructor() {
              super();
              this.state = {
                messageList: []
              };    
            }
           
            _onMessageWasSent(message) {
              this.setState({
                messageList: [...this.state.messageList, message]
              })
            }
           
            _sendMessage(text) {
              if (text.length > 0) {
                this.setState({
                  messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                  }]
                })
              }
            }
           
            render() {
              return (<div>
                <Launcher
                  agentProfile={{
                    teamName: 'Mann Ki Baat',
                    imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                  }}
                  onMessageWasSent={this._onMessageWasSent.bind(this)}
                  messageList={this.state.messageList}
                  showEmoji
                />
              </div>)
            }
          }

export default Chatbot;          
    