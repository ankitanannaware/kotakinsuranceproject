import { Grid, Typography } from "@mui/material"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';


const GenerousBenefits=()=>{
    return(
        <div>
         <Grid container spacing={2} marginTop="120px" marginLeft="320px">
            <Grid item >
                <Typography variant="h6" color="error">
                   GENEROUS BENEFITS
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                   <span style={{"color":"red"}}>We Say,</span><br/>Why settle for less!   <img src="./images/human.png"/>
                </Typography>
                <Box sx={{ width: '100%',bgcolor: 'background.paper' }}>
                    <nav>
                        <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                               <LocalShippingOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Road Side Assistance" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                               <DirectionsCarOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Daily Car Allowance" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <ShieldOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Engine Protect" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <SummarizeOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Zero Depreciation Cover" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                              <ReceiptOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Return to Invoice" />
                            </ListItemButton>
                        </ListItem>
                        </List>
                    </nav>
                </Box>
                <Typography variant="subtitle1" marginTop="20px" color="blue" marginLeft="70px" sx={{"textDecoration":"underline"}}>
                   Show More +
                </Typography>
          </Grid>
          <Grid item align="center">
            <img src="./images/iphone.png"/>
            <Typography variant="h5" color="black" fontWeight="bold">
             In case of a breakdown, we got you covered with <br/>towing, repairs, and more when you need it most.
            </Typography>
          </Grid>
         </Grid>
        </div>
    )
}
export default GenerousBenefits