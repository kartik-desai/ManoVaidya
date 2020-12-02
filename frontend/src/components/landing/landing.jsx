import React from 'react';
import Signup from '../../components/signup/signup';
import Login from '../../components/login/login';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import {Grid,SwipeableDrawer, List, ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
 

    const styles = makeStyles((theme) => ({
        anchorSpacing: {
            marginLeft: '10px',
        },
        
        logoPadding: {
            padding: '0px 5px 0px 10px',
        }
    }));

class Landing extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            drawerActivate:false,
            drawer:false,
            loggedin : false,
            emailid: '',
            content : 0,
            handleLoginUpdate: this.handleLoginUpdate.bind(this),
        };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }
    handleLoginUpdate(someArg){
        this.setState({emailid: someArg});
        this.setState({loggedin: true});
    }
    handleLogin = (event) => {
        if(!this.state.loggedin)
            this.setState({
                content: 2,
            });
    }
    handleSignup = (event) => {
        if(!this.state.loggedin)
            this.setState({
            content: 1,
        });
    }
    mySwitch = (param) => {
        switch (param) {
           case 1:
              return (<Signup handleLoginUpdate = {this.state.handleLoginUpdate} />);
            case 2:
                return(<Login />);
            default: return (<div><h2>Hello</h2></div>);
        }
    }
    componentWillMount(){
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
                  <MenuIcon
                    className = {this.props.classes.sideBarIcon}
                    onClick={()=>{this.setState({drawer:true})}} />
    
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



    render(){
        return(
            <div>
                <AppBar position="static" color="black">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={styles.logoSpacing}>
                            ManoVaidya
                        </Typography>
                        <Link className={styles.anchorSpacing}>
                        Detection
                        </Link>
                        
                        <Link className={styles.anchorSpacing}>
                        Chatbot
                        </Link>
                        
                        <Link className={styles.anchorSpacing}>
                        Activities
                        </Link>

                        <Link className={styles.anchorSpacing}>
                        Chatroom
                        </Link>

                        {!this.state.loggedin ? <Link href="#" onClick= {this.handleLogin}>Login</Link>: <Link href="#" onClick= {this.handleLogin}>{this.state.emailid}</Link> }
                        {!this.state.loggedin ? <Link href="#" onClick= {this.handleSignup}>Signup</Link>: <h2></h2> }
                        
                    </Toolbar>

                </AppBar>
                { this.mySwitch(this.state.content) }
            </div>
        );
    }
  };

  export default Landing;
