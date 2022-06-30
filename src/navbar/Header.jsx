import { Link } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import LoginIcon from '@mui/icons-material/Login';
import {Button} from 'reactstrap'
import {Navbar,NavbarBrand,Nav,DropdownToggle } from 'reactstrap';
const Header=()=>{
    return(
        <div>
        <Navbar color="white" light expand="md">
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
        </Navbar>
      </div>
    )
}
export default Header;