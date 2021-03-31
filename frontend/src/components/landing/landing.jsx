import React from 'react';
import Signup from '../../components/signup/signup';
import Login from '../../components/login/login';
import Chatroom from '../../components/chatroom/chatroom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { Grid, SwipeableDrawer, List, ListItem, withTheme } from '@material-ui/core';
import { Suspense } from 'react';
import { useImage } from 'react-image';
import homeimg from '../../imgs/homeimg.jpg';
import logo from '../../imgs/logo.png';
import ReactSession from 'react-client-session/dist/ReactSession';
import RTCMultiConnection from 'rtcmulticonnection';



function HomeImageComponent() {
  const { src } = useImage({
    srcList: homeimg,
  })

  return (
    <img src={src} alt='home' loader={<div>Loading..</div>} />
  )
}

function LogoComponent() {
  const { src } = useImage({
    srcList: logo,
  })
  return (
    <img src={src} height='70px' />
  )
}


const styles = makeStyles((theme) => ({
  anchorSpacing: {
    marginLeft: '10px',
  },

  logoPadding: {
    padding: '0px 5px 0px 10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

//let connection = new RTCMultiConnection();

class Landing extends React.Component {
  componentDidMount() {
    //let connection = new RTCMultiConnection();
    const script = document.createElement("script");
    script.src = "https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.min.js";
    script.async = true;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js";
    script2.async = true;
    document.body.appendChild(script2);
  }
  constructor(props) {
    super(props);
    ReactSession.setStoreType("localStorage");
    this.state = {
      drawerActivate: false,
      drawer: false,
      loggedin: ReactSession.get("emailid") == null ? false : true,
      emailid: ReactSession.get("emailid"),
      content: 0,
      usertype: ReactSession.get("usertype"),
      handleLoginUpdate: this.handleLoginUpdate.bind(this),
      handleTherapistLoginUpdate: this.handleTherapistLoginUpdate.bind(this),
    };
    //this.createDrawer = this.createDrawer.bind(this);
    //this.destroyDrawer = this.destroyDrawer.bind(this);
  }
  handleLoginUpdate(someArg) {
    ReactSession.setStoreType("localStorage");
    ReactSession.set("emailid", someArg);
    ReactSession.set("usertype", 1);
    this.setState({
      emailid: someArg,
      loggedin: true,
      usertype: 1,
      content: 0,
    });
  }
  handleTherapistLoginUpdate(someArg) {
    ReactSession.setStoreType("localStorage");
    ReactSession.set("emailid", someArg);
    ReactSession.set("usertype", 2);
    this.setState({
      emailid: someArg,
      loggedin: true,
      content: 0,
      usertype: 2,
    });

  }
  handleLogin = (event) => {
    if (!this.state.loggedin)
      this.setState({
        content: 2,
      });
  }
  handleLoggedin = (event) => {
    if (this.state.loggedin) {
      ReactSession.setStoreType("localStorage");
      ReactSession.set("emailid", null);
      this.setState({
        emailid: null,
        loggedin: false,
        content: 0,
        usertype: 0,
      });
    }

  }
  handleSignup = (event) => {
    if (!this.state.loggedin)
      this.setState({
        content: 1,
      });
  }
  handleChatroom = (event) => {
    if (this.state.loggedin)
      this.setState({
        content: 6,
      });
    else
      this.setState({
        content: 2,
      });
  }
  handleLogo = (event) => {
    if (!this.state.loggedin)
      this.setState({
        content: 0,
      });
  }
  mySwitch = (param) => {
    switch (param) {
      case 1:
        return (<Signup handleLoginUpdate={this.state.handleLoginUpdate} />);
      case 2:
        return (<Login handleLoginUpdate={this.state.handleLoginUpdate} handleTherapistLoginUpdate={this.state.handleTherapistLoginUpdate} />);
      case 6: console.log(this.state.usertype);
        return (<Chatroom emailid={this.state.emailid} usertype={this.state.usertype} />);
      default: return (<Suspense fallback={<div>Loading...</div>}>
        <HomeImageComponent />
      </Suspense>);
    }
  }


  render() {
    return (
      <div>
        <AppBar position="static" style={{ background: '#ffffff', color: 'black' }}>
          <Toolbar className={styles.appbar}>
            <Suspense fallback={<div>Loading/.</div>}>
              <LogoComponent />
            </Suspense>
            <Typography variant="h6" className={styles.title} onClick={this.handleLogo}>
              ManoVaidya
            </Typography>
            {this.state.usertype === 1 || this.state.usertype === 0 ? <Button color="inherit">Cognitive Health Test</Button> : <h2></h2>}

            {this.state.usertype === 1 || this.state.usertype === 0 ? <Button color="inherit">Chatbot</Button> : <h2></h2>}

            <Button color="inherit" onClick={this.handleChatroom}>Therapy Chatroom</Button>

            {this.state.usertype === 1 || this.state.usertype === 0 ? <Button color="inherit">Selfcare Activities</Button> : <h2></h2>}

            {!this.state.loggedin ? <Button color="inherit" onClick={this.handleLogin}>Login</Button> : <Button color="inherit" onClick={this.handleLoggedin}>{this.state.emailid}</Button>}

            {!this.state.loggedin ? <Button color="inherit" onClick={this.handleSignup}>Signup</Button> : <h2></h2>}

          </Toolbar>
        </AppBar>

        { this.mySwitch(this.state.content)}
      </div>
    );
  }
};

export default Landing;
