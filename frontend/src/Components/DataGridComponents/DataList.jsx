import React from 'react'
import ListCard from './ListCard'

export default function DataList({rocketsList, isLoading}) {
    
  return (
    isLoading?<div className="loader mb-28 pb-28 flex flex-row justify-content-center w-full"></div>:
        rocketsList?.length ? rocketsList.map((rocket,idx)=>{
            return (
                <ListCard rocketData={rocket} />
            )
        }): 
        <div className="my-10 w-full text-center text-xl">
            {"No data found"}
        </div>
  )
}
