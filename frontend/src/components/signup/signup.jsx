import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
	next: {
		marginTop: theme.spacing(1),
		marginLeft: '42%',
		marginRight: '42%',
	}
}));

export default function Login(props) {
	const [error, setError] = useState({ error: '' });
	const classes = useStyles();
	const [email, setEmail] = useState({ emailid: '' });
	const [name, setName] = useState({ name: '' });
	const [phone, setPhone] = useState({ phone: '' });
	const [age, setAge] = useState({ age: '' });
	const [password, setPassword] = useState({ password: '' });
	const [gender, setGender] = useState({ gender: 1 });
	const [usertype, setUser] = useState({ usertype: false });
	const [showdetails, showDetail] = useState({ showDetails: false });
	const [prooffile, setFile] = useState({ prooffile: null });
	const [prooffilename, setFileName] = useState({ prooffilename: '' });

	const handleChange = (event) => {
		setGender(event.target.value);
	};
	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	const handleName = (event) => {
		setName(event.target.value);
		console.log(name);
	};
	const handlePhone = (event) => {
		setPhone(event.target.value);
	};
	const handleAge = (event) => {
		setAge(event.target.value);
	};
	const handleUserType = (event) => {
		setUser(event.target.checked);
	};
	const handleFileAdd = (event) => {
		setFile(event.target.files[0]);
		setFileName(event.target.files[0].name);
	};
	const handleNext = (event) => {
		if (showdetails) {
			showDetail(false);
		}
		else {
			showDetail(true);
		}
	};
	const handleSubmit = (event) => {
		let isValid = true;
		// if(data.name.length< 2)
		//     isValid = false;
		// if(data.phone.length < 10 || data.phone.length > 10)
		//     isValid = false;
		if (usertype === true) {
			if (isValid) {
				let form_data = new FormData();
				form_data.append('emailid', email);
				form_data.append('password', password);
				form_data.append('name', name);
				form_data.append('phone', phone);
				form_data.append('age', age);
				form_data.append('gender', gender);
				form_data.append('prooffile', prooffile, prooffilename);
				const putMethod = {
					method: 'POST', // Method itself
					body: form_data
				};
				console.log(putMethod);
				const url = "http://localhost:8000/signup/registertherapist";
				// make the HTTP put request using fetch api
				fetch(url, putMethod)
					.then((response) => {
						if (response.status === 201)
							props.handleLoginUpdate(email);
						if (response.status === 400) {
							console.log(response.json);
							setError("Provide valid details");
						}
						else
							setError("Please try again!");
					})
					.catch(err => console.log(err));
			}
		}
		else {
			var userdata = {
				"emailid": email,
				"password": password,
				"name": name,
				"phone": phone,
				"age": age,
				"gender": gender,
			};
			if (isValid) {
				const putMethod = {
					method: 'PUT', // Method itself
					headers: {
						'Content-type': 'application/json; charset=UTF-8', // Indicates the content
					},
					body: JSON.stringify(userdata) // We send data in JSON format
				};
				const url = "http://localhost:8000/signup/registeruser";
				// make the HTTP put request using fetch api
				fetch(url, putMethod)
					.then((response) => {
						if (response.status === 201)
							props.handleLoginUpdate(email);
						if (response.status === 400)
							setError("Provide valid details");
						else
							setError("Please try again!");
					})
					.catch(err => console.log(err));
			}
		}

		//console.log(JSON.stringify(userdata));

	};
	return (
		<Grid container component="main" className={classes.root}>
			{console.log(usertype)}
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
					</Avatar>

					<Typography component="h1" variant="h5">
						Signup
            </Typography>
					<form className={classes.form} noValidate encType="multipart/form-data">
						{console.log(showdetails)}
						{showdetails && (
							<div>
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
									onChange={handleEmail}
								/>

								<TextField
									id="password"
									name="password"
									label="Password"
									type="password"
									variant="outlined"
									required
									fullWidth
									onChange={handlePassword}
								/>


								<Button variant="contained" color="primary" onClick={handleNext} className={classes.next}>
									Next
				</Button>

							</div>
						)}

						{!showdetails && (
							<div>
								<Button variant="contained" color="primary" onClick={handleNext} className={classes.next}>
									Back
				</Button>
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
										<FormControlLabel value="2" control={<Radio />} label="Female" />
										<FormControlLabel value="1" control={<Radio />} label="Male" />
										<FormControlLabel value="3" control={<Radio />} label="Other" />
									</RadioGroup>
								</FormControl>
								<br></br>
								<FormControlLabel
									control={<Checkbox
										checked={usertype}
										onChange={handleUserType}
										name="usertype"
										id="usertype"
										color="primary"
									/>
									}
									label="Do you want to join as a Professional Therapist?"
								/>
								<br></br>
								{ usertype === true ? <h4>Add a proof document</h4> : null}
								{ usertype === true ? <input required type="file" onChange={handleFileAdd} /> : <h4></h4>}


								<Button
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
									onClick={handleSubmit}
								>
									Sign Up
              	</Button>
							</div>
						)}
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}