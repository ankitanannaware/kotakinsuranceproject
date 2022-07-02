import { Button, Grid, TextField, Typography,} from "@mui/material";import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const images = [
  {
    img:"./images/garageimg1.png",
    heading: 'Allied Auto Agencies',
    subheading:"8-2-287/11/A Near L.V Prasad Eye, Road No 14, Banjara Hills",
    mobileno:"+91 9607 909 725"
  },
  {
    img:"./images/garageimg2.png",
    heading: 'Allied Auto Agencies',
    subheading:"8-2-287/11/A Near L.V Prasad Eye, Road No 14, Banjara Hills",
    mobileno:"+91 9607 909 725"
  },
  {
    img:"./images/garageimg3.png",
    heading: 'Allied Auto Agencies',
    subheading:"8-2-287/11/A Near L.V Prasad Eye, Road No 14, Banjara Hills",
    mobileno:"+91 9607 909 725"
  },
  
];

const Garages=()=>{
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    return(
        <div>
            <Grid container spacing={2} marginTop="200px" marginLeft="200px">
                <Grid item >
                    <Typography variant="h3" fontWeight="bold">
                    <span style={{"color":"red"}}>200 + Garages</span><br/>Already Near You  <img src="./images/location.png" width="50px" height="50px"style={{"marginBottom":"10px"}}/>
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" marginTop="20px">
                    <Button variant="outlined" color="error"  sx={{"textTransform":"capitalize","color":"black","borderRadius":"30px"}} ><img src="./images/kotak.png" style={{"marginRight":"10px","width":"30px","height":"30px"}}/>  Kotak has exclusive network of cashless garages</Button>
                    </Typography>
                    <div style={{"marginTop":"30px"}}>
                        <TextField  label="City" variant="standard" size="normal" placeholder="Hyderabad" sx={{"width":"420px"}}/><br></br>
                        <TextField  label="Car Brand" variant="standard" placeholder="Enter Your Car Brand" sx={{"width":"420px"}}/><br></br>
                        <TextField  label="Car Model" variant="standard" placeholder="Enter Your Car Model" sx={{"width":"420px"}}/>
                    </div>
                </Grid>
                </Grid> 
                <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      {/* <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      > */}
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.img}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      {/* </AutoPlaySwipeableViews> */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>

           

        </div>
    )
}
export default Garages