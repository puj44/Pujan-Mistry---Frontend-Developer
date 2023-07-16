import React, { useState } from 'react'
import PopupModal from './PopupModal';

export default function ListCard({rocketData}) {
  const [show,setShow] = useState(false);
  const handleRowClick = (id) =>{
    setShow(id);
  }
  const handleToggleHide = () =>{
    setShow(false);
  }
  return (
    <div className="mt-7 pb-4 border-b border-white/[0.5] border-solid grid-cols-12 w-full">
        <div className="w-full list-card" onClick={()=>{handleRowClick(rocketData?.id)}} id={"data-row"}>
            <div className="grid-cols-6">
                <span className="flex flex-row text-xl ">
                    <span className="grid w-full grid-cols-6 whitespace-nowrap">{rocketData?.rocket_name ?? "-"}</span>
                    <span className="grid w-full text-end">{`Cost: ${rocketData?.cost_per_launch}`}</span>
                </span>
            </div>
            <div className="mt-3 grid-cols-6">
                <span className="flex flex-row text-xl  text-white/[0.5]">
                    <span className="w-full grid-cols-6">
                        {`Original Launch: ${rocketData?.country}`}
                    </span>
                    <span className="grid w-full text-end">
                        {`Type: ${rocketData?.engines?.type ? ((rocketData.engines.type)?.charAt(0).toUpperCase() + (rocketData.engines.type).slice(1)):"-" }`}
                    </span>
                </span>
            </div>
        </div>
        <PopupModal show={show} handleToggleHide={handleToggleHide} />
    </div>
  )
}
