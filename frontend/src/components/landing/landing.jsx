import React from 'react';
import Signup from '../../components/signup/signup';
import Login from '../../components/login/login';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import {Grid,SwipeableDrawer, List, ListItem, withTheme} from '@material-ui/core';
import {Suspense} from 'react';
import {useImage} from 'react-image';
import homeimg from '../../imgs/homeimg.jpg';
import logo from '../../imgs/logo.png';
import ReactSession from 'react-client-session/dist/ReactSession';
import MySurvey from '../survey/survey';
import Selfcare from '../../components/selfcare/selfcare';
import Yoga from '../selfcare/yoga';
import Quotes from '../selfcare/quotes';
import Stories from '../selfcare/stories';
import Meditate from '../selfcare/meditate';


function HomeImageComponent() {
  const {src} = useImage({
    srcList: homeimg,
  })
 
  return(
  <img src={src} alt='home' loader={<div>Loading..</div>}/>
  ) 
}

function LogoComponent() {
  const {src} = useImage({
    srcList: logo,
  })
  return(
      <img src={src} height='70px'/>
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

class Landing extends React.Component {
    
    constructor(props){
        super(props);
		ReactSession.setStoreType("localStorage");
		this.state = {
            drawerActivate:false,
            drawer:false,
            loggedin : ReactSession.get("emailid") == null ? false : true,
            emailid: ReactSession.get("emailid"),
            content : 0,
            handleLoginUpdate: this.handleLoginUpdate.bind(this),
            handleYogaClick: this.handleYogaClick.bind(this),
            handleQuotesClick: this.handleQuotesClick.bind(this),
            handleStoriesClick: this.handleStoriesClick.bind(this),
            handleMeditateClick: this.handleMeditateClick.bind(this),
        };
        //this.createDrawer = this.createDrawer.bind(this);
        //this.destroyDrawer = this.destroyDrawer.bind(this);
    }
    handleLoginUpdate(someArg){
        ReactSession.setStoreType("localStorage");
        ReactSession.set("emailid", someArg);
        this.setState({
          emailid: someArg,
          loggedin: true,
          content: 0,
        });
        
    }
    handleYogaClick = (event) => {
      this.setState({
        content: 5,//for yoga
      });
      
  }
  handleQuotesClick = (event) => {
    this.setState({
      content: 6,//for quotes
    });
    
}
handleStoriesClick = (event) => {
  this.setState({
    content: 7,//for stories
  });
  
}

handleMeditateClick = (event) => {
  this.setState({
    content: 8,//for stories
  });
  
}

    handleLogin = (event) => {
        if(!this.state.loggedin)
             this.setState({
                 content: 2,
             });
            }
    handleLoggedin = (event) =>{    
      if(this.state.loggedin){
        ReactSession.setStoreType("localStorage");
        ReactSession.set("emailid", null);
        this.setState({
          emailid: null,
          loggedin: false,
          content: 0,
        });
      }

    }
    handleSignup = (event) => {
        if(!this.state.loggedin)
            this.setState({
            content: 1,
        });
    }
    handleSurvey = (event) => {
      this.setState({
          content: 3,
      });
  }
    handleSelfcare = (event) => {
      this.setState({
          content: 4,
      });
    }
    handleLogo = (event) => {
      if(!this.state.loggedin)
          this.setState({
              content: 0,
          });
  }
    mySwitch = (param) => {
        switch (param) {
           case 1:
              return (<Signup handleLoginUpdate = {this.state.handleLoginUpdate} />);
            case 2:
                return(<Login handleLoginUpdate = {this.state.handleLoginUpdate}/>);
            case 3:
                return(<MySurvey/>);    
            case 4:
                return(<Selfcare handleYoga = {this.state.handleYogaClick} handleQuotes = {this.state.handleQuotesClick} handleStories={this.state.handleStoriesClick} handleMeditate={this.state.handleMeditateClick}/>);    
            case 5:
                return(<Yoga/>);
            case 6:
                return(<Quotes/>);
            case 7: 
                return(<Stories/>);   
            case 8:
                return(<Meditate/>);     
            default: return (<Suspense fallback={<div>Loading...</div>}>
                <HomeImageComponent/>
              </Suspense>);
        }
    }
    /*componentWillMount(){
        if(window.innerWidth <= 600){
          this.setState({drawerActivate:true});
        }
    
        window.addEventListener('resize',()=>{
          if(window.innerWidth <= 600){
            this.setState({drawerActivate:true});
          }
          else{
            this.setState({drawerActivate:false})
          }
        });
      }
    
      //Small Screens
      createDrawer(){
        return (
          <div>
            <AppBar >
              <Toolbar>
                <Grid container direction = "row" justify = "space-between" alignItems="center">
                  <Button
                    className = {this.props.classes.sideBarIcon}
                    onClick={()=>{this.setState({drawer:true})}} >
                      MV
                      </Button>
    
                  <Typography color="inherit" variant = "headline">ManoVaidya</Typography>
                  <Typography color="inherit" variant = "headline"></Typography>
                </Grid>
              </Toolbar>
            </AppBar>
    
            <SwipeableDrawer
             open={this.state.drawer}
             onClose={()=>{this.setState({drawer:false})}}
             onOpen={()=>{this.setState({drawer:true})}}>
    
               <div
                 tabIndex={0}
                 role="button"
                 onClick={()=>{this.setState({drawer:false})}}
                 onKeyDown={()=>{this.setState({drawer:false})}}>
    
                <List className = {this.props.classes.list}>
                   <ListItem key = {1} button divider> Option 1 </ListItem>
                   <ListItem key = {2} button divider> Option 2 </ListItem>
                   <ListItem key = {3} button divider> Option 3 </ListItem>
                 </List>
    
             </div>
           </SwipeableDrawer>
    
          </div>
        );
      }
    
      //Larger Screens
      destroyDrawer(){
        const {classes} = this.props
        return (
          <AppBar>
            <Toolbar>
              <Typography variant = "headline" style={{flexGrow:1}} color="inherit" >ManoVaidya</Typography>
              <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 1</Typography>
              <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 2</Typography>
              <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 3</Typography>
            </Toolbar>
          </AppBar>
        )
      }

      */

    render(){
        return(
            <div>
                <AppBar position="static" style={{ background: '#ffffff', color: 'black' }}>
                  <Toolbar className={styles.appbar}>
                    <Suspense fallback={<div>Loading/.</div>}>
                      <LogoComponent/>
                    </Suspense>
                    <Typography variant="h6" className={styles.title} onClick= {this.handleLogo}>
                      Mano vaidya
                    </Typography>
                    <Button color="inherit" onClick={this.handleSurvey}>Cognitive Health Test</Button>
                    
                    <Button color="inherit">Chatbot</Button>
                    
                    <Button color="inherit">Therapy Chatroom</Button>
                    
                    <Button color="inherit" onClick={this.handleSelfcare}>Selfcare Activities</Button>

                    {!this.state.loggedin ? <Button color="inherit" onClick= {this.handleLogin}>Login</Button>: <Button color="inherit" onClick= {this.handleLoggedin}>{this.state.emailid}</Button> }
                        
                    {!this.state.loggedin ? <Button color="inherit"  onClick= {this.handleSignup}>Signup</Button>: <h2></h2> }
                    
                  </Toolbar>
                </AppBar>

              { this.mySwitch(this.state.content) }
            </div>
        );
    }
  };

  export default Landing;
