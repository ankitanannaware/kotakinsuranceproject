import { Grid, Link, Stack, Typography } from "@mui/material"
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
        <div>
           <Box width="900px" height="400px" marginLeft="350px">
           <Typography variant="h3" align="center" marginTop="200px" fontWeight="bold">
               Frequently Asked  <span style={{"color":"red"}}>Questions</span>
            </Typography>
                <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between"}}>
                {
                    link1.map((link)=>{
                        return(
                                <Stack direction="row" marginTop="40px"> 
                                    <Link className="link" underline="always" color="error" fontWeight="bold" fontSize="25px">{link.name}</Link>
                                </Stack>
                        )
                    })
                }
                {
                    link2.map((link)=>{
                        return(
                                <Stack direction="row" marginTop="40px"> 
                                    <Link underline="hover" color="gray" fontWeight="bold" fontSize="25px">{link.name}</Link>
                                </Stack>
                        )
                    })
                }
                </div>
               <div style={{"marginTop":"120px"}}>
                    <ul>
                        <li style={{"fontSize":"20px"}}>Why do I need Car insurance?</li>
                        <li>hello</li> 
                    </ul> 
               </div> 
            </Box>
        </div>
    )
}
export default Questions