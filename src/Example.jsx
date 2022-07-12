import { Link } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'

const Example = () => {
  const [value,setValue]=useState([])
  const [list, setList] = useState([])
  const handle=()=>{
    axios.get("http://localhost:1337/products")
    .then(({data})=>{
    //  console.log("res",res);
 
     setList(data)    
   })
    .catch((err)=>{console.log("err",err)})
 }
  

  useEffect(()=>{
    axios.get("http://localhost:1337/categories")
    .then(({data})=>{
     console.log("res",data);
     setValue(data)    
   })
    .catch((err)=>{console.log("err",err)})
 },[])
  return (
    <div>
    
      {/* <h1>{value.name}</h1> */}
      {
        value.map(({category_name})=>{
          return(
            <Button variant="text" onClick={handle}>{category_name}</Button>
        
          )
        })
      }
     {
      list.map((products)=>{
        console.log(products)
        return(
          <Button variant="text" onClick={handle}>{products.name}</Button>
      
        )
      })
     }
  
   
    </div>
  )
}

export default Example