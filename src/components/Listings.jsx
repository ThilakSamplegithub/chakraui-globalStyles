import axios from 'axios'
import { Image,Box,Text, Stack, SimpleGrid, Heading } from '@chakra-ui/react'
import { useEffect,useReducer,useState } from 'react'
import {Link as RouterLink} from "react"
import SingleProduct from '../Pages/SingleProduct'
import { Navigate } from 'react-router-dom'
export default function Listings(){
    const Actions={
            LOADING:"LOADING",
            SUCCESS:'SUCCESS',
            FAILURE:'FAILURE',
            // FINALLY:"FINALLY"
    }
    const initState={
        isLoading:false,
        products:[],
        error:false
    }
    const reducer=(state,{type,payload})=>{
        switch(type){
            case Actions.LOADING:{
               state= {...state,isLoading:true,products:[],error:false}
                return state
            }
            case Actions.SUCCESS:{
                state={...state,isLoading:false,products:payload,error:false}
                return state
            }
            case Actions.FAILURE:{
                state={...state,isLoading:false,products:[],error:true}
                return state
            }
            default :{
                return state
            }
        }

    }
    const[state,dispatch]=useReducer(reducer,initState)
    
    useEffect(()=>{
        dispatch({type:Actions.LOADING})
        axios.get(`http://localhost:8080/products`)
        .then(res=>dispatch({type:Actions.SUCCESS,payload:res.data}))
        .catch(err=>dispatch({type:Actions.FAILURE}))
    },[])
    const{isLoading,products,error}=state
    console.log(products)
    // {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //       "rate": 3.9,
    //       "count": 120
    //     }
    return isLoading?(< Heading>...Loading</ Heading>):error?(<Heading>something went wrong</Heading>):(
        <>
        <SimpleGrid columns={2} spacing={10}>
            {products?.map(({title,price,image,category,rating,id})=>{
             return <RouterLink to={`/listings/${id}`} >
                <Box boxSize='sm' key={id} >
                   <Image src={image} alt='Dan Abramov' width="200px" /> 
                   <Text align='left'>Title:{title}</Text>
                   <Text align='left'>Price:{price}</Text>
                   <Text align='left'>category: {category} </Text>
                    </Box>
                    </RouterLink>
            })}
        </SimpleGrid>
        </>   
    )
}