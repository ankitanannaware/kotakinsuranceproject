import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid, Stack, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border:"none",
  borderRadius:"20px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}></Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} color="error" sx={{"textTransform":"capitalize"}}>Get a Quick Quote</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 580,height:300}}>
        <Button variant="text" onClick={handleClose} sx={{color:"common.black",marginLeft:"450px"}}>X</Button>
          <Grid container>
            <Grid item>
              <img src="./images/KA 01 MG 1388.png"/>
              <Typography variant='subtitle2' color="gray" textAlign="center" >Reg  no.</Typography>
              <Typography variant='h6' color="blue" textAlign="center" >KA 01 MG 1388</Typography>
            </Grid>
             <Grid item marginLeft="13px">
               <Typography fontWeight="bold">Did We Get Your Car Details Correct?</Typography>
               <Stack direction="row"  spacing={15}>
               <Typography variant='subtitle2' color="gray">Brand</Typography>
               <Typography variant='subtitle2'  >Kia</Typography> 
               </Stack>
               <Stack direction="row"  spacing={14.5}>
               <Typography variant='subtitle2' color="gray" textAlign="center" >Model</Typography>
               <Typography variant='subtitle2'  >Seltos</Typography> 
               </Stack>
               <Stack direction="row"  spacing={11.5}>
               <Typography variant='subtitle2' color="gray" >Fuel Type</Typography>
               <Typography variant='subtitle2'   >Petrol</Typography> 
               </Stack>
               <Stack direction="row"  spacing={13.5}>
               <Typography variant='subtitle2' color="gray">Variant</Typography>
               <Typography variant='subtitle2'  >GTX Plus AT D (1493 cc)</Typography> 
               </Stack>
               <Stack direction="row"  spacing={7}>
               <Typography variant='subtitle2' color="gray">Registered City </Typography>
               <Typography variant='subtitle2' >Mumbai</Typography> 
               </Stack>
               <Stack direction="row"  spacing={6.4}>
               <Typography variant='subtitle2' color="gray">Registered Date</Typography>
               <Typography variant='subtitle2'>07/08/2022</Typography> 
               </Stack>
               <Stack direction="row" marginTop="20px" spacing={3}>
               <Button variant="contained" onClick={handleClose}  color="error" sx={{"textTransform":"capitalize","padding":"0px 30px"}}>Confirm</Button>
               <Button variant="outlined" color="error" sx={{"textTransform":"capitalize"}}>Edit Details</Button>

               </Stack>
               
              
             </Grid>
              
          </Grid>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
