import { Grid ,Box, Typography, Stack} from "@mui/material"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


const WaitTime=()=>{
    const waittime=[
        {
            img:"./images/brochure.png",
            heading:"Product Brochure",
            subheading:"Download Now"
        },
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
        },{
            img:"./images/insurancepolicy.png",
            heading:"Policy Wording",
            subheading:"Download Now"
        }
    ]
    return(
        <div style={{"marginTop":"160px","display":"flex"}}>
            {
                waittime.map((logo)=>{
                    return(
                    <Stack direction="row" width="500px" height="150px" border="1px solid blue" borderRadius="20px" padding="30px" backgroundColor="#1a237e" margin="25px"> 
                        <img src={logo.img}/>  
                        <Typography variant="h4" color="white" marginLeft="20px" >{logo.heading}<br/><span style={{"fontSize":"18px"}}>{logo.subheading} <FileDownloadOutlinedIcon/></span></Typography>
                         
                    </Stack>
                    )
                })
            }
        </div>
    )
}
export default WaitTime