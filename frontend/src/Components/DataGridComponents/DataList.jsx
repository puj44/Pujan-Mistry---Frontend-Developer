import React from 'react'
import ListCard from './ListCard'

export default function DataList({rocketsList}) {
    
  return (
        rocketsList?.length ? rocketsList.map((rocket,idx)=>{
            return (
                <ListCard rocketData={rocket} />
            )
        }): <div className="my-10 w-full text-center text-xl">
            {"No data found"}
        </div>
  )
}
