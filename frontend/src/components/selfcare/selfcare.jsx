import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Heading from './heading';
import FPost from './post';
import { Button, Typography } from '@material-ui/core';
//import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import headimag from '../../imgs/mental1.png';
import affimag from '../../imgs/affirmations.jpg';
import jourimag from '../../imgs/journal.jpg';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(0),
  },
}));


const heading = {
  title: 'Self-Care Activities',
  description:
    "THE EASIEST WAY to improve health and well being is actually quite simple: learn how to reduce stress every single day.",
  image: headimag,
  imgText: 'main image description',
};
const post = [
  {
    title: 'Affirmation Of The Day',
    date: 'Feb 28',
    description:
      'I grow stronger every time I overcome my anxiety.',
    image: affimag,
    imageText: 'Image Text',
  },
  {
    title: 'Journalling Prompt Of The Day',
    date: 'Feb 28',
    description:
      'Write about the happiest time of your life.',
    image: jourimag,
    imageText: 'Image Text',
  },
];

export default function Selfcare(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxwidth="xl">
        <main>
          <Heading post={heading} />
          <Typography variant="h6" color="inherit" paragraph>
          It’s so important to make sure you take good care of your body, mind, and soul every day, not just when you get sick.
          Learning how to eat right, reduce stress, exercise regularly, and take a time-out when you need it are touchstones of self-care and can help you stay healthy, happy, and resilient.
          </Typography>
          <Grid container spacing={5}>
            {post.map((post) => (
              <FPost key={post.title} post={post} />
            ))}
          </Grid>
          <br></br>
          <Typography variant="h6" color="inherit" paragraph>
          Self-care is the practice of asking yourself what you need – mentally, spiritually, or emotionally – and making sure you get it.
          It is not inherently indulgent or selfish; it is necessary. 
          As adults, we are solely responsible for managing our own health, emotions, and personal growth.
          Self-care is the set of practices that allow us to accomplish this.
          As it is rightfully quoted by Audre Lorde "Caring for myself is not self-indulgence,it is self-preservation."
          <br></br>
          Embark on this journey of self-care by exploring various options ManoVaidya provides.
           </Typography>
           <br></br>
           <Grid container spacing={6}>
       <Grid item xs={12} sm={5}>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
         <Typography variant="h6" gutterBottom>
         Selfcare
        </Typography>
         <Typography>
         Each life is unique and has its own unique demands. 
         Consequently, we each must determine what self-care means for us and how to apply it in our life.
         </Typography>
         </Paper>
      </Grid>
     <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Activities
      </Typography>
      <Button onClick={props.handleYoga}> Yoga</Button>
      <Button onClick={props.handleQuotes}> Motivational Routine </Button>
      <Button onClick={props.handleStories}>Inspirational Stories</Button>
      <Button onClick={props.handleMeditate}>Meditation</Button>
     </Grid>
    </Grid>  
        </main>
      </Container>
      
    </React.Fragment>
  );
}