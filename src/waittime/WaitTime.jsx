import { Grid ,Box, Typography, Stack, Button} from "@mui/material"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const WaitTime=()=>{
    const waittime=[
        {
            img:"./images/brochure.png",
            heading:"Product Brochure",
            subheading:"Download Now"
        },
        {
            img:"./images/registrationform.png",
            heading:"Proposal Form",
            subheading:"Download Now"
        },
        {
            img:"./images/insurancepolicy.png",
            heading:"Policy Wording",
            subheading:"Download Now"
        }
    ]
    return(
        <div>
            <div style={{"marginTop":"160px","display":"flex","marginLeft":"210px"}}>
                {
                    waittime.map((logo)=>{
                        return(
                        <Stack direction="row" width="380px" height="120px" border="1px solid blue" borderRadius="20px" padding="30px" backgroundColor="#1a237e" margin="10px"> 
                            <img src={logo.img}/>  
                            <Typography variant="h5" color="white" marginLeft="20px" >{logo.heading}<br/><span style={{"fontSize":"15px"}}>{logo.subheading} <FileDownloadOutlinedIcon/></span></Typography>
                            
                        </Stack>
                        )
                    })
                }
            </div> 
            <Grid container spacing={4} direction="row" width="1240px" height="100px" marginLeft="180px" justifyContent="space-around" marginTop="100px" >
                <Grid item >
                    <Typography variant="h3" fontWeight="bold">Cut The <span style={{"color":"red"}}>Wait Time</span></Typography><br/>
                    <Typography variant="h5" color="gray">We get your claim @Jet Speed <img src="./images/aeroplane.png"/></Typography>
                </Grid>
                    <Stack direction="row" marginTop="90px">
                        <img src="./images/contract.png" width="60px" height="60px"/>
                        <Typography variant="h6" marginLeft="10px">Intimate<br/> Claim</Typography>
                    </Stack>
                    <ArrowForwardIosIcon color="error" fontSize="large" sx={{"marginTop":"100px"}}/>
                    <Stack direction="row" marginTop="90px">
                        <img src="./images/check.png" width="60px" height="60px"/>
                        <Typography variant="h6" marginLeft="10px">Quick<br/>Verification</Typography>
                    </Stack>
                    <ArrowForwardIosIcon color="error" fontSize="large" sx={{"marginTop":"100px"}}/>
                    <Stack direction="row" marginTop="90px">
                        <img src="./images/salary.png" width="60px" height="60px"/>
                        <Typography variant="h6" marginLeft="10px">Instant<br/>Settlement </Typography>
                    </Stack>
                    <Button variant="contained" color="error" sx={{"marginTop":"90px","borderRadius":"20px","padding":"25px","marginLeft":"20px" }}>Know More</Button>
            </Grid>    
        </div>      
        
    )
}
export default WaitTime