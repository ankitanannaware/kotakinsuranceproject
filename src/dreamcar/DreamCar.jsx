import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const DreamCar=()=>{
    const carlogo=[
        {
            img:"./images/carimg1.png",
            heading:"For entry segment vehicles",
            subheading:"Premium starting @ 2502 "
        },
        {
            img:"./images/carimg2.png",
            heading:"For premium vehicles",
            subheading:"Premium starting @ 5000"
        },
        {
            img:"./images/carimg3.png",
            heading:"For luxury vehicles",
            subheading:"Premium starting @ 8000"
        },
    ]
    return(
        <Box sx={{maxWidth:1200 ,marginLeft:"auto",marginRight:"auto"}}>
             <Stack marginTop="200px" textAlign="center">
             <Typography variant="h3" fontWeight="bold">The Perfect Coverage For <span style={{"color":"red"}}>Your Dream Car</span></Typography><br/>
             <Typography variant="h5" fontWeight="bold" color="gray"><img src="./images/moneywing.png"/>  Premium starting at just ₹ 2502</Typography><br/>
             </Stack>
            <div style={{"marginTop":"10px","display":"flex","width":"2000px","height":"450px"}}>
            {
                carlogo.map((logo)=>{
                    return(
                    <Card sx={{ maxWidth: 370,"marginLeft":"50px","borderRadius":"20px","boxShadow":"3px 3px 3px gray inset"}}>
                    <CardContent><img src={logo.img} style={{"width":"350px","height":"200px","padding":"22px"}}/></CardContent>
                    <CardContent  sx={{"paddingLeft":"30px"}}>
                        <Typography fontSize="25px" fontWeight="bold">
                        {logo.heading}
                        </Typography>
                        <Typography fontSize="25px" fontWeight="bold" color="error" marginTop="10px">
                        {logo.subheading}
                        </Typography>
                        <Typography variant="h6" color="error" marginTop="35px">
                            Get Quote in 2 mins  <ArrowForwardIcon/>  
                        </Typography>
                    </CardContent>
                </Card>
                    )
                })
            }
           </div>
        </Box>
    )
}
export default DreamCar