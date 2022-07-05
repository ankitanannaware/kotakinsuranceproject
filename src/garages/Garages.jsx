import { Box, Grid, TextField, Typography,Button, Stack } from "@mui/material";
import Slider from "react-slick";



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
      const settings = [
        {
          width:"10px"
        }
      ]

    return(
        <div> 
            <Grid container  marginTop="200px">
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
                <Grid item>
                <Box width="300px" height="300px">
                <Slider style={{"display":"flex","flexDirection":"column"}} settings={settings}>
                    <Box>
                      1
                    </Box>
                    <Box>
                   2
                    </Box>
                    <Box>
                   3
                    </Box>
                    <Box>
                    4  
                    </Box>
                </Slider>
                </Box>
                
                </Grid>
            </Grid> 

           
          

        </div>
    )
}
export default Garages