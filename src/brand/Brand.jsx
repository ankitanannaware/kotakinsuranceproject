import { Grid, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"

const Brand=()=>{
    const brand1=[
        {
            img:"./images/tata.png"
        },
        {
            img:"./images/tata.png"
        },
        {
            img:"./images/honda.png"
        },
        {
            img:"./images/marutisuzuki.png"
        },
        {
            img:"./images/fiat.png"
        },
        {
            img:"./images/skoda.png"
        }, {
            img:"./images/hyundai.png"
        },
        {
            img:"./images/mahindra.png"
        },
        {
            img:"./images/chevrolet.png"
        },
        {
            img:"./images/honda.png"
        },
        {
            img:"./images/marutisuzuki.png"
        }
    ]
    return(
        <Box width="900px" height="400px" marginLeft="350px">
           <Typography variant="h3" align="center" marginTop="100px">
           Car Insurance For Your <span style={{"color":"red"}}>Favorite Brands</span>
            </Typography>
            <Typography variant="h6" color="gray" align="center">
               Your car deserves the best insurance<img src="./images/frontviewcar.png"/>
            </Typography>
                <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"center"}}>
                {
                    brand1.map((brand)=>{
                        return(
                                <Stack direction="row" marginTop="40px"> 
                                    <img src={brand.img}/>
                                </Stack>
                        )
                    })
                }
            </div>
            <Typography variant="subtitle1" color="red" align="center" marginTop="20px">
               See All 40 Brands <img src="./images/downarrow.png"/>
            </Typography>
        </Box>
    )
}
export default Brand