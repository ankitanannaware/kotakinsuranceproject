import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const NeedHelp=()=>{
    const helplogo=[
        {
            img:"./images/helpimg1.png",
            heading:"Car Insurance",
            subheading1:"COVID-19 :",
            subheading2:"Here’s what we’re doing to help you fight the disease"
        },
        {
            img:"./images/helpimg2.png",
            heading:"Motor Insurance",
            subheading1:"Monsoon car maintenance guide:",
            subheading2:" Tips to keep car repairing expenses at bay"
        },
        {
            img:"./images/helpimg3.png",
            heading:"Car Care",
            subheading1:"#NotFAQs:",
            subheading2:"The what, why and how of a Vehicle Identification Number"
        },
    ]
    return(
        <div>
            <Stack marginTop="200px" marginLeft="300px">
             <Typography variant="h3" fontWeight="bold"><span style={{"color":"red"}}> Need help? </span>Head over to our Learning Center!</Typography><br/>
            </Stack>
             <div style={{"marginTop":"10px","display":"flex","marginLeft":"160px","width":"2000px","height":"500px"}}>
            {
                helplogo.map((logo)=>{
                    return(
                    <Card sx={{ maxWidth: 370,"marginLeft":"50px","borderRadius":"20px","boxShadow":"3px 3px 3px gray inset"}}>
                    <CardMedia><img src={logo.img}  style={{"width":"350px","height":"200px"}}/></CardMedia>
                    <CardContent sx={{"paddingLeft":"30px"}}>
                        <Typography fontSize="28px" fontWeight="bold">
                           {logo.heading}
                        </Typography>
                        <Typography variant="h6" fontWeight="bold" marginTop="10px">
                           {logo.subheading1}
                        </Typography>
                        <Typography fontSize="subtitle1" fontWeight="bold" color="gray" marginTop="10px">
                           {logo.subheading2}
                        </Typography>
                        <Typography variant="h6" color="error" marginTop="35px">
                            Learn More <ArrowForwardIcon/>  
                        </Typography>
                    </CardContent>
                </Card>
                    )
                })
            }
           </div>
        </div>
    )
}
export default NeedHelp