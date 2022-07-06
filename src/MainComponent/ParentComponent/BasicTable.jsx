import { Button, Typography } from "@mui/material"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";

const BasicTable=()=>{
    // function createData(PremiumFeatures , ComprehensivePlan, OnlyDamagePlan) {
    //     return { PremiumFeatures , ComprehensivePlan, OnlyDamagePlan };
    //   }
      
      const rows = [
          {
             img:"./images/cashlessrepairs.png",
             name:"Cashless repairs",
             logo1:"./images/yestick.png",
             logo2:"./images/crosstick.png"
          },
          {
            img:"./images/noclaimsbonus.png",
            name:"No claim bonus up to 50%",
            logo1:"./images/yestick.png",
            logo2:"./images/crosstick.png"
         },
         {
          img:"./images/electric.png",
          name:"Coverage to electrical/non-electrical accessories ",
          logo1:"./images/yestick.png",
          logo2:"./images/crosstick.png"
       },
       {
        img:"./images/biofuel.png",
        name:"Coverage to bi-fuel systems",
        logo1:"./images/yestick.png",
        logo2:"./images/crosstick.png"
     },
     {
      img:"./images/damage.png",
      name:"Coverage to bi-fuel systems",
      logo1:"./images/yestick.png",
      logo2:"./images/crosstick.png"
   },
   {
    img:"./images/injury.png",
    name:"Third party’s death or injury",
    logo1:"./images/yestick.png",
    logo2:"./images/crosstick.png"
 }
      ];
    const rows1=[
      {
        img:"./images/injury.png",
        name:"Third party’s death or injury",
        logo1:"./images/yestick.png",
        logo2:"./images/yestick.png"
      },
      {
        img:"./images/theft.png",
        name:"Theft coverage",
        logo1:"./images/yestick.png",
        logo2:"./images/yestick.png"
      },
      {
        img:"./images/accidentcover.png",
        name:"Third party’s death or injury",
        logo1:"./images/yestick.png",
        logo2:"./images/yestick.png"
      },
  ];
  const rows2=[
    {
      button1:"Get Quote",
      button2:"Get Quote",
    }
  ]
    return(
        <Box sx={{maxWidth:1200 ,marginLeft:"auto",marginRight:"auto"}}>
            <Typography fontSize="37px" fontWeight="bold" marginTop="50px" align="center">
            Don't Overspend On  <span style={{"color":"red"}}>Car Insurance</span>
            </Typography>
            <Typography variant="h6" marginBottom="50px" align="center">
            Compare plans with us <img src="./images/weight balance.png"/>
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{"color":"darkblue","fontSize":"18px"}}>Premium Features</TableCell>
                    <TableCell align="center" sx={{"color":"darkblue","fontSize":"25px"}}>
                      Comprehensive Plan<Typography color="gray" fontSize="13px"><img src="./images/hurrayemoji.png"/>
                      Grab additional discounts upto 22.5% on credit score
                         <br/>Get AAI member discount<br/>Automobile Association of India**</Typography></TableCell>
                   
                    <TableCell align="center" sx={{"color":"darkblue","fontSize":"25px"}}>Only Damage Plan</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell>
                        <img src={row.img}/>{row.name}
                      </TableCell>
                      <TableCell align="center"> <img src={row.logo1}/></TableCell>
                      <TableCell align="center"> <img src={row.logo2}/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <Typography color="darkblue" fontSize="20px" marginTop="60px">Standard Features </Typography>
                <TableBody>
                  {rows1.map((row) => (
                    <TableRow>
                      <TableCell>
                        <img src={row.img}/>{row.name}
                      </TableCell>
                      <TableCell align="center"> <img src={row.logo1}/></TableCell>
                      <TableCell align="center"> <img src={row.logo2}/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableBody>
                  {rows2.map((row) => (
                    <TableRow>
                      <TableCell>
                      
                      </TableCell>
                      <TableCell align="center"><Button variant="contained" color="error" sx={{"textTransform":"capitalize"}}>{row.button1}</Button></TableCell>
                      <TableCell align="center"><Button variant="contained" color="error" sx={{"textTransform":"capitalize"}}>{row.button2}</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
        </Box>
    )
}
export default BasicTable