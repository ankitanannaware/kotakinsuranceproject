import { Button, Grid, Link, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

const Questions=()=>{
    const link1=[
        {
          name:"Buy now"
        },
    ]
    const link2=[
        {
            name:"Policy"
        },
        {
            name:"Cover"
        },
        {
            name:"Renew"
        },
        {
            name:"Claim"
        },
    ]
    return(
        <Box sx={{maxWidth:1200 ,marginLeft:"auto",marginRight:"auto"}}>
           <Box sx={{maxWidth:800,   marginLeft:"auto",marginRight:"auto"}}>
           <Typography variant="h3" align="center" marginTop="200px" fontWeight="bold">
               Frequently Asked  <span style={{"color":"red"}}>Questions</span>
            </Typography>
                <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between"}}>
                {
                    link1.map((link)=>{
                        return(
                                <Stack direction="row" marginTop="40px"> 
                                    <Link className="link" underline="always" color="error" fontWeight="bold" fontSize="20px">{link.name}</Link>
                                </Stack>
                        )
                    })
                }
                {
                    link2.map((link)=>{
                        return(
                                <Stack direction="row" marginTop="40px"> 
                                    <Link underline="hover" color="gray" fontWeight="bold" fontSize="20px">{link.name}</Link>
                                </Stack>
                        )
                    })
                }
                </div>
               <div style={{"marginTop":"120px"}}>
                    <ul className="list">
                        <li style={{"fontSize":"27px"}}>Why do I need Car insurance?</li><br/>
                        <span style={{"color":"grey"}}>Visit your Home Branch or the Branch where you wish to transfer the account and submit the duly filled Account Transfer Form along with the KYC Documents and Board Resolution.<br/><br/>
                        Your Account Transfer application will be verified by branch officials and further processing shall be done.</span><br/><br/><br/>
                        <li style={{"fontSize":"27px"}}>What are the various types of vehicles that I can insure online?</li><br/>
                        <li style={{"fontSize":"27px"}}>How quickly can I buy/ renew car insurance online?</li><br/>
                        <li style={{"fontSize":"27px"}}>Are offline and online car insurance policies the same?</li><br/>
                        <li style={{"fontSize":"27px"}}> What are the benefits of buying motor insurance online?</li> 
                    </ul> 
               </div> 
            </Box>
            <div style={{"marginTop":"100px","width":"1280px","height":"300px","backgroundColor":"darkred"}}>
                <Grid container>
                    <Grid item  marginLeft="30px">
                      <Typography variant="h3" color="white"  fontWeight="bold" marginTop="90px">
                        Hate waiting on hold? 
                      </Typography>
                      <Typography variant="h6" color="white" >
                        Not anymore, because at KOTAK we call you back!
                      </Typography>
                    </Grid>
                    <Grid item marginTop="110px" marginLeft="20px" sx={{"color":"white"}}>
                      <TextField id="standard" label="Name" placeholder="R.Haswant" variant="standard" />
                    </Grid>
                    <Grid item marginTop="110px" marginLeft="20px" sx={{"color":"white"}}>
                      <TextField id="standard" label="Mobile Number" placeholder="R.Haswant" variant="standard" />
                    </Grid>
                   
                    <Grid item>
                      <Button variant="contained" sx={{"textTransform":"capitalize", "padding":"18px","borderRadius":"20px","backgroundColor":"white","color":"red", "marginTop":"110px","marginLeft":"40px","fontSize":"20px"}}>
                       Request a Call Back</Button>
                    </Grid>
                    <span style={{"color":"white","marginLeft":"530px"}}> <img src="./images/redcheckbox.png" style={{"marginRight":"10px"}}/>I hereby authorize Kotak General Insurance to contact me on my<br></br> given mobile number.</span>
                </Grid>
            </div>
        </Box>
    )
}
export default Questions