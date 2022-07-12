import { AppBar, Box, IconButton, Link, Stack, Toolbar, Typography, } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import LoginIcon from '@mui/icons-material/Login';
import {Button} from 'reactstrap'
import {Navbar,NavbarBrand,Nav,DropdownToggle } from 'reactstrap';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Header=()=>{
  // const [value, setValue] = useState([])
  // useEffect(()=>{
  //    axios.get("http://localhost:1337/sections")
  //    .then((res)=>{
  //     console.log("res",res.data[0].link);
  //     setValue(res.data[0].link)    
  //   })
  //    .catch((err)=>{console.log("err",err)})
  // },[])
  const headerlink=[
    {
      name:"Motor"
    },
    {
      name:"Health"
    },
    {
      name:"Renewal"
    },
    {
      name:"Claims"
    },
    {
      name:"Contact us"
    },
    {
      name:"..."
    },
    {
      name:<PhoneInTalkIcon/>
    },
    {
      name:"1800 266 4545"
    },
    {
      name:<GTranslateIcon/>
    },
    {
      name:"Eng"
    },
    {
      name:<AttachEmailOutlinedIcon/>
    },
 
]
    return(
        <div style={{"display":"flex","justifyContent":"center"}} >
        
        {/* <Navbar color="white" expand="md">
          <NavbarBrand ><img src="./images/kotak-general-insurance.jpg" width="150px" height="100px"/>
          </NavbarBrand>
            <Nav navbar>
            <DropdownToggle nav caret><Link style={{"textDecoration":"none"}}
            className="ms-2 fw-bold text-danger" to="/motor">Motor</Link></DropdownToggle>
            <DropdownToggle nav caret><Link style={{"textDecoration":"none"}}
            className="ms-3 fw-bold text-danger" to="/health">Health</Link></DropdownToggle>
              <Link style={{"textDecoration":"none"}}  className="mt-2 ms-3 fw-bold text-danger" 
              to="/renewal">Renewal</Link>
            <DropdownToggle nav caret><Link style={{"textDecoration":"none"}}
            className="ms-3 fw-bold text-danger" to="/claims">Claims</Link></DropdownToggle>
            <Link style={{"textDecoration":"none"}} className="mt-2 ms-3 fw-bold text-danger" 
            to="/contactUs">ContactUs</Link>
            <Link style={{"textDecoration":"none"}}className="mt-2 ms-3  fw-bold text-danger">...</Link>
            <Link className="ms-3 fs-4 text-danger"><PhoneInTalkIcon/></Link><h6 
            className="mt-3 ms-3 text-danger">1800 266 4545</h6>
            <Link className="ms-3 fs-4 text-danger"><GTranslateIcon/></Link>
            <h6 className="mt-3 ms-3 text-danger">Eng</h6>
            <Link className="ms-3 fs-4 text-danger"><AttachEmailOutlinedIcon/></Link>  
            <Button style={{"borderRadius":"30px"}}className='text-light bg-danger ms-3'>
              <LoginIcon/>Login</Button>
            </Nav>
        </Navbar> */}
            <Box fullWidth>
                <AppBar position="static">
                  <Toolbar sx={{"backgroundColor":"white"}}>
                    <img src="./images/kotak-general-insurance.jpg" width="150px" height="100px"/>
                    <div style={{"display":"flex","flexWrap":"wrap","marginLeft":"150px"}}>
                        {
                            headerlink.map((data)=>{
                                return(
                                        <Stack direction="row"> 
                                            <Link underline="hover" marginLeft="30px" color="error" fontWeight="bold" fontSize="15px">{data.name}</Link>
                                        </Stack>
                                )
                            })
                        }
                        
                     </div>
                       <Button variant="contained" style={{"marginLeft":"20px", "backgroundColor":"red", "borderRadius":"10px","padding":"10px"}}><LoginIcon/>Login</Button>
                  </Toolbar>
                </AppBar>
            </Box>

      </div>
    )
}
export default Header;