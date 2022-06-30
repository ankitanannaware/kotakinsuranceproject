import { Box, Grid, Stack, Typography } from "@mui/material"


const Logo=()=>{
    const logo=[
    {
      img:"../images/firstlogo.png",
      title:"3000+ ",
      subtitle:"Cashless Garages"
    },
    {
        img:"../images/secondlogo.png",
        title:"Jet-Speed",
        subtitle:"Claims"
    },
    {
        img:"../images/thirdlogo.png",
        title:"Upto 50%",
        subtitle:"No Claim Bonus"
    },
    {
        img:"../images/fourthlogo.png",
        title:"96%",
        subtitle:"Claim Settlement Ratio"
    },
    {
        img:"../images/fifthlogo.png",
        title:"24/7",
        subtitle:"Around the clock Assistance "
    },
]
    return(
        <div>
           <Box  fullWidth sx={{height: 300,backgroundColor:'darkblue' ,marginTop:"100px"}}>
           <Typography variant="h2" color="white" marginLeft="300px">We take your safety seriously</Typography>
           <div style={{"display":"flex","justifyContent":"center", "marginTop":"100px"}}>
            {
                logo.map((logo)=>{
                    return(
                            <Stack direction="row" margin="25px"> 
                                <img src={logo.img}/>
                                <Typography color="white">{logo.title}<br/>{logo.subtitle}</Typography>
                            </Stack>
                    )
                })
            }
           </div>
           </Box>
        </div>
    )
}
export default Logo