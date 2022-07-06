import { Box, Stack, Typography } from "@mui/material"

const Kotak=()=>{
    return(
        <Box sx={{maxWidth:1200 ,marginLeft:"auto",marginRight:"auto"}}>
         <div style={{"display":"flex","justifyContent":"center","marginTop":"100px"}}>
            <img src="./images/kotak.png" width="110px" height="110px"/>
            <Typography variant="h4" marginLeft="20px"color="blue"><span style={{"color":"red","fontWeight":"bold","fontSize":" 50px"}}>Kotak</span><br/> General Insurance</Typography>
        </div>
        <Typography fontSize="45px" textAlign="center">“ Always for your care” </Typography>
        <img src="./images/lastimg.png" style={{"width":"1345px"}}/>
        </Box>
    )
}
export default Kotak