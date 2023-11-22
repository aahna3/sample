import axios from "axios";
import React, { useEffect } from "react";
import { useActions } from "../hooks/use-actions";
import { useDispatch } from "react-redux";
import { getData } from "../state/action-creators/fetchAction";

export const Sample=()=>{
    const dispatch=useDispatch()
    // const {getData} = useActions();
    // useEffect(()=>{
    //     console.log("i am here")
        
    //     const result = async () =>{
    //         try{
    //             console.log("i am here")
    //             const response=await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=cf9c53c1e6bc41d78f44c6a1591051fe')
    //             console.log(response,"response here")
    //         }catch(err){
    //             console.log("i am here")
    //             console.log(err,"error")
    //         }
           
    //     }
    //     result();

    // },[])


    useEffect(()=>{
        console.log("i am here")
        
       dispatch(getData());
    },[])
    return(
        <div>
            sample project here
        </div>
    )
}