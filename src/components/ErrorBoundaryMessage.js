import React from "react";


export const ErrorBoundaryMessage=({message})=>{
   if(typeof message ==='string'){
    throw new Error('not a hero')
   }
    return(
        <div>
        <h1>message here {message}</h1>
        </div>
    )
}