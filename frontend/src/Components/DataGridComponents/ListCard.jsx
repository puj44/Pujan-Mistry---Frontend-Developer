import React from 'react'

export default function ListCard() {
  return (
    <div className="mt-7 pb-4 border-b border-white/[0.5] border-solid grid-cols-12 w-full">
        <div className="w-full  ">
            <div className="grid-cols-6">
                <span className="flex flex-row text-xl ">
                    <span className="grid w-full grid-cols-6">Falcon 9</span>
                    <span className="grid w-full text-end">Falcon 9</span>
                </span>
            </div>
            <div className="mt-3 grid-cols-6">
                <span className="flex flex-row text-xl  text-white/[0.5]">
                    <span className="w-full grid-cols-6">Original Launch: India</span>
                    <span className="grid w-full text-end">Type: Merlin</span>
                </span>
            </div>
        </div>
    </div>
  )
}
