import { Box, Grid, Stack, Typography } from "@mui/material"

const Footer=()=>{
    return(
      <Box sx={{maxWidth:1200 ,marginLeft:"auto",marginRight:"auto"}}>
           <div style={{"display":"flex" ,"flexWrap":"wrap","width":"1350px"}}> 
            <Grid container direction="row" width="1500px" height="600px" border="1px solid blue" padding="30px" backgroundColor="#1a237e"> 
              <Grid item>
                <Typography variant="h6" color="white" fontWeight="bold">Motor</Typography>
                <Typography  variant="subtitle1" color="white">Private Car</Typography>
                <Typography  variant="subtitle1" color="white">Two Wheeler Insurance</Typography>
                <Typography  variant="subtitle1" color="white">Passenger Carrying Vehicle</Typography>
                <Typography  variant="subtitle1" color="white">Goods Carrying Vehicle</Typography>
                <Typography  variant="subtitle1" color="white">Truck</Typography>
                <Typography  variant="h6" color="white" fontWeight="bold" marginTop="20px">Car Insurance by Brand</Typography>
                <Typography  variant="subtitle1" color="white">Volkswagen Car Insurance</Typography>   
                <Typography  variant="subtitle1" color="white">Volvo Car Insurance</Typography>
                <Typography  variant="subtitle1" color="white">Force Car Insurance</Typography>
                <Typography  variant="subtitle1" color="white">Datsun Car Insurance</Typography>
                <Typography  variant="subtitle1" color="white">Honda Car Insurance</Typography>
                <Typography  variant="subtitle1" color="white">Hyundai Car Insurance</Typography>    
                <Typography  variant="subtitle1" color="white">Tata Car Insurance</Typography>
                <Typography  variant="subtitle1" color="white">Toyota Car Insurance	</Typography>
                <Typography  variant="subtitle1" color="white">Maruti Suzuki Car Insurance</Typography>  
                <Typography  variant="subtitle1" color="white"> Mahindra Car Insurance</Typography>  
               </Grid>  
               <Grid item marginLeft="20px">
                 <Typography variant="h6" color="white" fontWeight="bold">Health</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak Secure Shield</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak Health Care</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak accident care</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak health super top-up</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak health premier</Typography>
                 <Typography  variant="subtitle1" color="white">Arogya sanjeevani policy</Typography>
                 <Typography  variant="subtitle1" color="white">Corona Kavach Policy / group</Typography>
                 <Typography  variant="subtitle1" color="white">Corona Rakshak Policy</Typography>
                 <Typography  variant="subtitle1" color="white">Saral Suraksha Bima</Typography>
                 <Typography  variant="subtitle1" color="white">Group health insurance</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak Group Health Care</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak Group Accident Protect</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak Group Secure Shield</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak Group Smart Cash</Typography>
                 <Typography  variant="subtitle1" color="white">Corona Kavach Group Policy</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak Covid-19 Secure</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak Group Smart Health</Typography>
                 <Typography  variant="subtitle1" color="white">Kotak Group Health Assure</Typography>
               </Grid>
               <Grid item marginLeft="20px">
                <Typography variant="h6" color="white" fontWeight="bold">Claim</Typography>
                <Typography  variant="subtitle1" color="white">Motor claim Intimation</Typography>
                <Typography  variant="subtitle1" color="white">Health claim Intimation</Typography>
                <Typography  variant="subtitle1" color="white">Claim Status</Typography>
                <Typography  variant="subtitle1" color="white">Unclaimed Amount</Typography>
                <Typography  variant="subtitle1" color="white">Surveyor and loss assessor</Typography>
                <Typography  variant="subtitle1" color="white">Cashless Claim</Typography>
                <Typography  variant="h6" color="white" fontWeight="bold" marginTop="20px">Car Insurance by City</Typography>
                <Typography  variant="subtitle1" color="white">Mumbai</Typography>
                <Typography  variant="subtitle1" color="white">Delhi</Typography>
                <Typography  variant="subtitle1" color="white">Chennai</Typography>
                <Typography  variant="subtitle1" color="white">Hyderabad</Typography>
                <Typography  variant="subtitle1" color="white">Pune</Typography>
                <Typography  variant="subtitle1" color="white">Chandigarh</Typography>
                <Typography  variant="subtitle1" color="white">Ahmedabad</Typography>
                <Typography  variant="subtitle1" color="white">Kolkata</Typography>
               </Grid>
               <Grid item marginLeft="20px">
               <Typography variant="h6" color="white" fontWeight="bold">Support</Typography>
               <Typography  variant="subtitle1" color="white">Policy Services</Typography>
               <Typography  variant="subtitle1" color="white">Grievance Redressal</Typography>
               <Typography  variant="subtitle1" color="white">Complaint Registration</Typography>
               <Typography  variant="subtitle1" color="white">Network Locator</Typography>
               <Typography  variant="subtitle1" color="white">Branch Locator</Typography>
               <Typography  variant="subtitle1" color="white">Garage Locator</Typography>
               <Typography  variant="subtitle1" color="white">Hospital Locator</Typography>
               </Grid>
               <Grid item marginLeft="20px">
               <Typography variant="h6" color="white" fontWeight="bold">Resources</Typography>
               <Typography  variant="subtitle1" color="white">FAQs</Typography>
               <Typography  variant="subtitle1" color="white">Media center</Typography>
               <Typography  variant="subtitle1" color="white">Download</Typography>
               <Typography  variant="subtitle1" color="white">Blog</Typography>
               <Typography  variant="h6" color="white" fontWeight="bold" marginTop="20px">Legal</Typography>
               <Typography  variant="subtitle1" color="white">Policies</Typography>
               <Typography  variant="subtitle1" color="white">Privacy Policy</Typography>
               <Typography  variant="subtitle1" color="white">Secretarial</Typography>
               <Typography  variant="subtitle1" color="white">Products Withdrawn</Typography>
               <Typography  variant="subtitle1" color="white">Service promise</Typography>
               <Typography  variant="subtitle1" color="white">Public disclosure</Typography>
               <Typography  variant="subtitle1" color="white">Disclaimer</Typography>
               <Typography  variant="subtitle1" color="white">Do Not Call </Typography>
               </Grid>
               <Grid item marginLeft="20px">
               <Typography variant="h6" color="white" fontWeight="bold">About Us</Typography>
               <Typography  variant="subtitle1" color="white">About Kotak<br></br> General Insurance</Typography>
               <Typography  variant="subtitle1" color="white">The team</Typography>
               <Typography  variant="subtitle1" color="white">Board of directors</Typography>
               <Typography  variant="h6" color="white" fontWeight="bold" marginTop="20px">Contact Us</Typography>
               <Typography  variant="subtitle1" color="white">Get in touch - <br></br>kotak general insurance</Typography>
               <Typography  variant="subtitle1" color="white">Locate us</Typography>
               <Typography  variant="subtitle1" color="white">Feed back</Typography>
               </Grid>
            </Grid>
            
          </div>  
        </Box>
    )
}
export default Footer