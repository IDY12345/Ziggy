'use client'

import {useEffect} from 'react'

export default function Error(error:any,reset:any){
        useEffect(()=>
        {
            console.log("error : ",error)
        }, [error])

        
        const retryRequestHandler=()=>
        {
            reset()
        }

        return <div>
            <h2>Something Went Wrong!</h2>
            <button onClick={retryRequestHandler}>Retry Request</button>
        </div>
}