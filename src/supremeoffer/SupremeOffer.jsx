import { Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const SupremeOffer=()=>{
    const offer=[
        {
            heading:"Electrical Accessories",
            subheading:" Insuring your vehicle’s every need and providing comprehensive plan that covers all electrical/non-electrical accessories.",
            logo:"./images/microchip.png"
        }
      ]
    const offer1=[    
        {
          heading:" Fire",
          subheading:"Don't let fire damage ruin your life stay protected against any loss and get compensates for damage caused by fire.",
          logo:"./images/fire.png"
        },
        {
          heading:"Self Ignition",
          subheading:"Compensate for losses incurred from combustion that occurs without the use of an external heat source.",
          logo:"./images/battery.png"
        },
        {
          heading:"Natural Disasters",
          subheading:"When disaster strikes, we've got you covered. Get protected from the effects or damages due of natural disasters. ",
          logo:"./images/volcano.png"
        },
        {
          heading:"Personal Accident",
          subheading:"Get comprehensive coverage to protect yourself and your loved ones from unpredictable events such as accidents.",
          logo:"./images/twocaraccident.png"
        },
        {
          heading:"Explosion",
          subheading:"Keeping your property safe & covered from the damages caused by rapid nuclear or chemical reactions.",
          logo:"./images/explosion.png"
        },

    ]
    return( 
        <div> 
          <Box sx={{maxWidth:1200 ,marginLeft:"auto",marginRight:"auto"}} marginTop="130px">
            <Typography variant="subtitle1" color="red" textAlign="center">SUPREME OFFERINGS</Typography>
            <Typography variant="h3" color="red" fontWeight="bold" textAlign="center">Amazing Things <span style={{"color":"black"}}>Await In Your Policy</span></Typography>
            <Typography variant="h6" color="gray" textAlign="center">Cause awesomeness has no ending <AllInclusiveIcon/></Typography>
            <div style={{"display":"flex","justifyContent":"center",}}>
            <Typography variant="subtitle1" color="red" marginRight="40px">Covered</Typography>
            <Typography variant="subtitle1" color="gray"> Not Covered</Typography>
            </div>
          </Box>
            <Box sx={{maxWidth:1280 ,marginLeft:"auto",marginRight:"auto",display:"flex",flexWrap:"wrap"}}  >
              {
                  offer.map((offer)=>{
                      return(
                        <div>
                          <img src="./images/microchip.png" className="microchipimage"/>                              
                          <Stack sx={{"position":"relative"}} width="360px" height="200px" border="1px solid blue" borderRadius="20px" padding="30px" backgroundColor="#1a237e" margin="25px"> 
                              <Typography variant="h6" color="white" fontWeight="bold">{offer.heading}</Typography>
                              <Typography  variant="subtitle1" color="white">{offer.subheading}</Typography>
                          </Stack>
                          </div> 
                        
                      )
                  })
              }
              {
                  offer1.map((offer)=>{
                      return(
                        <div>
                          <img src={offer.logo} className="microchipimage"/>                              
                          <Stack sx={{"position":"relative"}} width="360px" height="200px" border="1px solid white" borderRadius="20px" padding="30px" backgroundColor="white" margin="25px"> 
                              <Typography variant="h6" color="black" fontWeight="bold">{offer.heading}</Typography>
                              <Typography  variant="subtitle1" color="black">{offer.subheading}</Typography>
                          </Stack>
                        </div> 
                        
                      )
                  })
              }
            </Box>
            <Typography variant="h6" color="error" textAlign="center" sx={{"textDecoration":"underline"}}>
              Show more +
            </Typography>
        </div>
    )
}
export default SupremeOffer