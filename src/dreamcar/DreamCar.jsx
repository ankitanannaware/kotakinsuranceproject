import { Stack, Typography } from "@mui/material"

const DreamCar=()=>{
    const carlogo=[
        {
            img:"./images/carimg1.png",
            heading:"Product Brochure",
            subheading:"Download Now"
        },
        {
            img:"./images/carimg2.png",
            heading:"Product Brochure",
            subheading:"Download Now"
        },
        {
            img:"./images/carimg3.png",
            heading:"Product Brochure",
            subheading:"Download Now"
        },
    ]
    return(
        <div>
   
             <Stack marginTop="200px" textAlign="center">
             <Typography variant="h3" fontWeight="bold">The Perfect Coverage For <span style={{"color":"red"}}>Your Dream Car</span></Typography><br/>
             <Typography variant="h5" fontWeight="bold" color="gray"><img src="./images/moneywing.png"/>  Premium starting at just ₹ 2502</Typography><br/>
             </Stack>
             <div style={{"marginTop":"160px","display":"flex","marginLeft":"210px"}}>
                {
                    carlogo.map((logo)=>{
                        return(
                        <Stack direction="row" width="380px" height="120px" border="1px solid blue" borderRadius="20px" padding="30px" backgroundColor="#1a237e" margin="10px"> 
                            <img src={logo.img}/>  
                            <Typography variant="h5" color="white" marginLeft="20px" >{logo.heading}<br/><span style={{"fontSize":"15px"}}>{logo.subheading}</span></Typography>
                            
                        </Stack>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default DreamCar