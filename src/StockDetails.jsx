import { Button } from '@mui/material'
import React, { useState } from 'react'

const StockDetails = (props) => {
    const{name,stockevents} =props
    const [showtask, setShowtask] = useState(false)
    const handle=()=>{
        setShowtask(!showtask)
    }
  return (
    <div>
        <div>
        
        <Button variant="text" onClick={handle}>product:{name}</Button>
    
    {showtask &&  stockevents.map((event)=>{
            return(
            <div>
                {/* <p>id:{event.id}</p> */}
                <p>id:{event.product.name}</p>
            </div>
            )
        })}
    </div>
    </div>
  )
}

export default StockDetails