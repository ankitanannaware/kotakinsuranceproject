import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Examplecomponent from './Examplecomponent'

const fetchedProducts=[
    {
        name:"anki",
        id:1
    },
    {
        name:"goli",
        id:2
    },
    {
        name:"amol",
        id:3
    }
]
const fetchstockEvents=[
    {
        // id:1,
        // name:"golya1",
        product:fetchedProducts[0]
    },
    {
        // id:2,
        // name:"golya2",
        product:fetchedProducts[0]
    },
    {
        // id:3,
        // name:"golya3",
        product:fetchedProducts[1]
    },
    {
        // id:4,
        // name:"golya4",
        product:fetchedProducts[1]
    },
    {
        // id:5,
        // name:"golya5",
        product:fetchedProducts[2]
    }
]


class Example1 extends React.Component{
 
    state={
        fetchedProducts:[],
        fetchstockEvents:[]
    }
    async componentDidMount(){
        const product1sRes= await axios({
            method:"GET",
            url:"http://localhost:1337/product-1-s"
        })
        const stockEventsRes= await axios({
            method:"GET",
            url:"http://localhost:1337/stockevents"
        })

        const fetchedProducts=product1sRes.data;
        const fetchstockEvents=stockEventsRes.data

        this.setState({fetchedProducts,fetchstockEvents})
        
    }

   

    render(){
        return(
        <div>
            <h1>stock app</h1>
            <Examplecomponent products={fetchedProducts} stockevents={fetchstockEvents} />
        </div>
        )
    }
}

// const Example1 = () => {
//     const [fetchedProducts, setFetchedProducts] = useState([])
//     const [fetchstockEvents, setFetchstockEvents] = useState([])
//     const getdata=()=>{
//         axios.get("http://localhost:1337/product-1-s")
//         .then(({data})=>{
//          console.log("res",data);
//         setFetchedProducts(data)    
//        })
//         .catch((err)=>{console.log("err",err)})
//     }
//     const getdataready=()=>{
//         axios.get("http://localhost:1337/stockevents")
//         .then(({data})=>{
//          console.log("res",data);
//         setFetchstockEvents(data)    
//        })
//         .catch((err)=>{console.log("err",err)})
//     }
//     useEffect(()=>{
//         getdata()
//         getdataready()
//      },[])
    
//   return (
//     <div>
//            <h1>stock app</h1>
//         <Examplecomponent products={fetchedProducts} stockevents={fetchstockEvents} />
//     </div>
//   )
// }

export default Example1
