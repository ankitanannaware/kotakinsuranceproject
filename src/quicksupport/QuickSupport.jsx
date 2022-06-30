import { Button, Grid, Stack, Typography } from "@mui/material"

const QuickSupport=()=>{
    return(
        // <div style={{"display":"flex"}}>
        //   <Stack>
        //   <Typography variant="h3" align="center" marginTop="90px" marginLeft="30px">
        //    Get  <span style={{"color":"red"}}>Quick Support</span>    <img src="./images/headphone.png"/>
        //     </Typography>
        //     <Typography variant="h6" color="gray" marginLeft="30px">
        //      Do you have any doubts after knowing <br/>your premium? I'm here to help.
        //   </Typography>
        //   </Stack>
        //   <Stack sx={{"marginTop":"120px","marginLeft":"30px"}}>
        //     <img src="./images/lady.png"/>
        //   </Stack>
        //   <Stack sx={{"marginTop":"80px","marginLeft":"30px"}}>
        //     <img src="./images/sentence.png"/>
        //   </Stack>
        // </div>
        <div style={{"marginLeft":"100px"}}>
          <Grid container>
            <Grid item xs={5}> 
            <Typography variant="h3" align="center" marginTop="90px">
              Get  <span style={{"color":"red"}}>Quick Support</span>    <img src="./images/headphone.png"/>
            </Typography>
            <Typography variant="h6" color="gray" marginLeft="100px">
              Do you have any doubts after knowing <br/>your premium? I'm here to help.
            </Typography>
            </Grid>
            <Grid item marginTop="120px">
              <img src="./images/lady.png"/>
            </Grid>
            <Grid item marginTop="100px">
              <Typography display="inline-block" border="1px solid blue" borderRadius="10px 10px 10px 0px"  padding="10px">
               Hi There, How can we help you?
              </Typography>
              <Typography marginTop="20px" marginLeft="80px" border="1px solid gray" borderRadius="10px 10px 0px 10px"  padding="8px">
                 I wanna know about my car<br/> premium
              </Typography>
            </Grid>
            <Grid item xs={1} marginTop="130px" marginLeft="100px" >
               <Button variant="contained" color="error" sx={{"textTransform":"capitalize", "padding":"18px","borderRadius":"20px"}}>
                Contact Us</Button>
            </Grid>
          </Grid>
        </div>
    )
}
export default QuickSupport