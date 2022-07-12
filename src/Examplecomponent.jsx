import React from 'react'
import StockDetails from './StockDetails'

const Examplecomponent = (props) => {
    
    const{products,stockevents}=props
  return (
    
    <div>
        {
            products.length > 0 && products.map((product)=>{
                const {id}=product

                const relevantStockEvents=stockevents.filter(se=>se.product.id===product.id)
                return(
                    <div>
                        <StockDetails name={product.name} stockevents={relevantStockEvents}/>
                        {
                            relevantStockEvents.length > 0 && relevantStockEvents.map((event)=>{
                                return(
                                <div>
                                    {/* <p>id:{event.name}</p> */}
                                    <p>id:{event.product.name}</p>
                                </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }
       {/* {
        stockevents.map((event)=>{
            return(
             <div>   
            <p>{event.id}</p>
            <p>{event.product.name}</p>
            </div>
            )
        })
       } */}
        </div>
  )
}

export default Examplecomponent