import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          ManoVaidya
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function Login(props) {
    const classes = useStyles();
    const [email, setEmail] = useState({emailid:''});
    const [name, setName] = useState({name:''});
    const [phone, setPhone] = useState({phone:''});
    const [age, setAge] = useState({age:''});
    const [gender, setGender] = useState({gender:1});
    const handleChange = (event) => {
        setGender(event.target.value);
      };
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    };
    const handleName = (event) =>{
        setName(event.target.value);
        console.log(name);
    };
    const handlePhone = (event) =>{
        setPhone(event.target.value);
    };
    const handleAge = (event) =>{
        setAge(event.target.value);
    };
    const handleSubmit = (event) =>{
        let isValid = true;
        // if(data.name.length< 2)
        //     isValid = false;
        // if(data.phone.length < 10 || data.phone.length > 10)
        //     isValid = false;
        var userdata = {
            "emailid": email,
            "name": name,
            "phone": phone,
            "age": age,
            "gender": gender,
          };
          //console.log(JSON.stringify(userdata));
          if(isValid){
            const putMethod = {
                method: 'PUT', // Method itself
                headers: {
                    'Content-type': 'application/json; charset=UTF-8', // Indicates the content
                },
                body: JSON.stringify(userdata) // We send data in JSON format
               };
               const url = "http://localhost:8000/signup/register";
               // make the HTTP put request using fetch api
               fetch(url, putMethod)
               .then((response) => {
                    if(response.status === 201)
                        props.handleLoginUpdate(email);
                })
               .catch(err => console.log(err));
        } 
    };
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            </Avatar>
            {console.log(props)}
            <Typography component="h1" variant="h5">
              Signup
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="emailid"
                label="Email Address"
                name="emailid"
                autoComplete="email"
                autoFocus
                onChange = {handleEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={handleName}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                onChange={handlePhone}
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                onChange={handleAge}
                autoFocus
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChange}>
                        <FormControlLabel value="2" control={<Radio />} label="Female"  />
                        <FormControlLabel value="1" control={<Radio />} label="Male" />
                        <FormControlLabel value="3" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
              
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }