import React, { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext';

export default function PopupModal({show,handleToggleHide}) {
  const { isMobile } = useContext(UserContext);
  console.log("showshow",show);
  if(show){
      return (
        <div className="modal-layout "  onClick={() => {
            handleToggleHide();
          }}>
            <div onClick={(e) =>{e.stopPropagation()}} className="modal-content p-10 2xl:ps-12 xl:ps-12 md:ps-10 sm:ps-8 ps-6" style={{margin:isMobile?"auto 3%": "auto 10%"}}>
                {/* <div className="relative"> */}
                {/* </div> */}
                
                <div className="grid grid-cols-2 " id="popup-modal">
                    <div className="">
                        <span className="text-2xl w-full grid grid-row-12">
                            Falcon 9
                        </span>
                        <span className="text-base w-full mt-4 grid grid-flow-row text-white/[0.5]">
                            Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.
                        </span>
                        <span className="text-base w-full 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-4 sm:mt-2 mt-3 grid grid-row-12">
                            Success Rate : 97
                        </span>
                        <span className="text-base w-full 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-4 mt-3 sm:mt-2 grid grid-row-12">
                            First flight : 04/06/2010
                        </span>
                        {
                            !isMobile &&
                            <span className="text-lg w-full 2xl:mt-20 xl:mt-20 lg:mt-16 md:mt-12 sm:mt-16 mt-16 flex flex-row justify-start">
                            <button className="page-button" onClick={(e)=>{e.preventDefault();}}>
                                <span className="me-2 ps-2">View more in detail</span>
                                <img src="/images/arrow.svg" width="28px" height="28px" alt="arrow" />
                            </button>
                        </span>
                        }
                        
                    </div>
                    <div className="grid grid-rows-12 w-full">
                        <div className="-mt-4 flex flex-row justify-end text-end w-full " >
                            <img src="/images/close_button.svg" className="cursor-pointer" onClick={()=>{handleToggleHide();}} width="28px" height="28px" alt="Close" />
                        </div>
                        <span className="w-full d-flex flex-row justify-end">
                            <img src={"/images/shadow-rocket.png"}
                                width="100%" height="auto" alt="Rocket_image" />
                        </span>
                    </div>
                    {
                        isMobile &&
                        <span className="text-lg 2xl:mt-20 xl:mt-20 lg:mt-16 md:mt-8 sm:mt-16 mt-16 flex flex-row w-max">
                            <button className="page-button" onClick={(e)=>{e.preventDefault();}}>
                                <span className="me-2 ps-2">View more in detail</span>
                                <img src="/images/arrow.svg" width="28px" height="28px" alt="arrow" />
                            </button>
                        </span>
                    }
                </div>
            </div>
        </div>
      )
  }
}
