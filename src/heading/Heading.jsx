import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, Button, Link, Typography} from '@mui/material';
import { Box} from '@mui/system';
import { shadows } from '@mui/system'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Heading=()=> {  
    
    return(
    <div style={{"marginLeft":"200px"}}>
            <h6 style={{"marginLeft":"600px"}}>Home <Link><ArrowForwardIosIcon fontSize="small" color="disabled"/></Link>Motor<Link><ArrowForwardIosIcon fontSize="small" color="disabled"/> </Link>Private Car</h6>
            <h1 style={{"color":"darkblue", "fontWeight":"bold","marginLeft":"350px"}}>Limit Your Speed, Not Your Insurance</h1>
            <h4 style={{"marginLeft":"400px"}}>Get a Motor Insurance that fits yours needs & budget! 💰</h4>    
            <Grid container spacing={2}>    
                <Box sx={{width: 750,height: 400,backgroundColor: 'white', border:"2px solid grey",boxShadow:"2px 2px 2px grey",marginLeft:10,
                borderRadius:"20px", marginTop:"20px"}}>
                    <Grid direction="row"> 
                       <Link underline="none" sx={{"color":"red","marginLeft":"40px"}}>Buy Now</Link>
                       <Link sx={{"color":"primary","marginLeft":"20px"}} underline="none">Renew Now</Link>
                    </Grid>
                    <h4 className='ms-4 mt-3' style={{"color":"darkblue"}}>Get your Car Insured <span style={{color:"red", fontStyle:"italic",fontWeight:"bold"}}>Now</span></h4>
                    <Stack direction="row" spacing={2} sx={{"marginLeft":"35px","marginTop":"15px" ,"color":"primary"}}>
                    <TextField id="standard-helperText"  label="Car Registration Number" 
                    placeholder="TG 09 AS 1589" 
                    variant="standard" />
                    <TextField id="standard-helperText" label="Mobile Number" placeholder="+91 9652521502" variant="standard" />
                    <TextField id="standard-helperText" label="Email ID"placeholder="Enter your email id" variant="standard" />
                    </Stack>
                    <Typography variant="subtitle1" color="primary" marginLeft={4} marginTop={2}>Don’t know my car registration number</Typography>
                    <Typography variant="subtitle1" color="primary" marginLeft={4}>Got a new Car</Typography>
                    <Grid direction="row" marginLeft="20px" marginTop="15px"> 
                    <Button variant="contained" color="error" sx={{"textTransform":"capitalize"}}>Get a Quick Quote</Button>
                    <img src="./images/giftbox.png"/>
                    <Button variant="text" sx={{"textTransform":"capitalize"}}>Buy online to avail 5% discount<br></br>
                    on policy term</Button>
                    <img src="./images/redcar.png" width="200px" height="100px"/>
                 </Grid>
                </Box>
                <div>
                    <Stack spacing={2} marginTop="50px" marginLeft="30px" >
                        <Stack direction="row" borderBottom="1px solid gray">
                        <img src="./images/garage.png" width="40px" height="40px"/>
                        <Typography variant="h5" color="gray" marginLeft="13px">3000+ cashless <br/> Garages</Typography>
                        </Stack>
                        <Stack direction="row" borderBottom="1px solid gray">
                        <img src="./images/wallet.png" width="40px" height="40px"/>
                        <Typography variant="h5" color="gray" marginLeft="13px">Lowest ever premium<br/>for your insurance</Typography>
                        </Stack>
                        <Stack direction="row">
                        <img src="./images/facebook.png"/>
                        <Typography variant="h6" color="orange" marginLeft="13px">4.7/5<br/><StarIcon/>
                        <StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/> 
                        </Typography>
                        <img src="./images/google.png"/>
                        <Typography variant="h6" color="orange" marginLeft="13px">4.6/5<br/><StarIcon/>
                        <StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/> 
                        </Typography>
                        </Stack>
                        <Typography variant="h6" color="gray" marginLeft="13px">Highest rated Insurance website</Typography>
                    </Stack>
                </div>
        </Grid>
    </div>
    )
}
export default Heading;