import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MuiModal from '../MuiModal'
import { Grid, Button, Link, Typography} from '@mui/material';
import { Box} from '@mui/system';
import { shadows } from '@mui/system'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useState } from 'react';

const Heading=()=> {  
    
    return(
        <div style={{"height":"380px"}}>
          <div style={{"marginTop":"100px","textAlign":"center"}}>
            <Typography variant="subtitle2" >Home <Link><ArrowForwardIosIcon fontSize="small" color="disabled"/></Link>Motor<Link><ArrowForwardIosIcon fontSize="small" color="disabled"/> </Link>Private Car</Typography>
            <Typography variant="h4" sx={{"color":"darkblue", "fontWeight":"bold"}}>Limit Your Speed, Not Your Insurance</Typography>
            <Typography variant="subtitle1"  >Get a Motor Insurance that fits yours needs & budget! 💰</Typography>    
          </div> 
            <Grid container style={{"display":"flex","justifyContent":"center"}}>
                <Grid item>
                    <Box sx={{width: 700,height: 330,backgroundColor: 'white', border:"2px solid grey",boxShadow:"2px 2px 2px grey",
                    borderRadius:"20px", marginTop:"20px"}}>
                            <Grid direction="row"> 
                            <Link underline="none" sx={{"color":"red","marginLeft":"40px"}}>Buy Now</Link>
                            <Link sx={{"color":"primary","marginLeft":"20px"}} underline="none">Renew Now</Link>
                            </Grid>
                            <h4 className='ms-4 mt-3' style={{"color":"darkblue"}}>Get your Car Insured <span style={{color:"red", fontStyle:"italic",fontWeight:"bold"}}>Now</span></h4>
                            
                                <Stack direction="row" spacing={2} sx={{"marginLeft":"35px","marginTop":"15px" ,"color":"primary"}}>
                                <TextField id="standard-helperText"  label="Car Registration Number" 
                                placeholder="enter car registration number" 
                                variant="standard" />
                                <TextField id="standard-helperText" label="Mobile Number" placeholder="enter mobile number" variant="standard" />
                                <TextField id="standard-helperText" label="Email ID"placeholder="Enter your email id" variant="standard" />
                                </Stack>
                          
                            <Typography variant="subtitle1" color="primary" marginLeft={4} marginTop={2}>Don’t know my car registration number</Typography>
                            <Typography variant="subtitle1" color="primary" marginLeft={4}>Got a new Car</Typography>
                            <Grid direction="row" marginLeft="10px"> 
                            
                            <Button variant="text"><MuiModal/></Button>
                            <img src="./images/giftbox.png"/>
                            <Button variant="text" sx={{"textTransform":"capitalize"}}>Buy online to avail 5% discount<br></br>
                            on policy term</Button>
                            <img src="./images/redcar.png" width="150px" height="80px"/>
                
                        </Grid>
                    </Box>
                </Grid>
                <Grid item>
                   <Grid container marginLeft="70px" marginTop="60px" borderBottom="1px solid gray">
                      <Grid item >
                      <img src="./images/garage.png" width="40px" height="40px"/>
                      </Grid>
                      <Grid item>
                      <Typography variant="h5" color="gray" marginLeft="13px">3000+ cashless <br/> Garages</Typography>
                      </Grid>
                   </Grid>
                   <Grid container marginLeft="70px" marginTop="20px" borderBottom="1px solid gray">
                      <Grid item >
                      <img src="./images/wallet.png" width="40px" height="40px"/>
                      </Grid>
                      <Grid item>
                      <Typography variant="h5" color="gray" marginLeft="13px">Lowest ever premium<br/>for your insurance</Typography>
                      </Grid>
                   </Grid>
                   <Grid container marginLeft="70px" marginTop="20px"  borderBottom="1px solid gray">
                      <Grid item >
                      <img src="./images/facebook.png"/>
                      </Grid>
                      <Grid item>
                      <Typography variant="h6" color="orange" marginLeft="13px">4.7/5<br/><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></Typography>
                      </Grid>
                      <Grid item >
                      <img src="./images/google.png"/>
                      </Grid>
                      <Grid item>
                      <Typography variant="h6" color="orange" marginLeft="13px">4.6/5<br/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/> 
                        </Typography>
                      </Grid>
                   </Grid>
                  
                </Grid>
            </Grid>
        </div>
    )
}
export default Heading;