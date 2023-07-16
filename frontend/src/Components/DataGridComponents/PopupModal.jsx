import React, { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext';
import moment from 'moment';

export default function PopupModal({show,handleToggleHide,data}) {
  const { isMobile } = useContext(UserContext);
  
  
  if(show && data && (Object.keys(data)?.length >0)){
      return (
        <div className="modal-layout"  onClick={() => {
            handleToggleHide();
          }}>
            <div onClick={(e) =>{e.stopPropagation()}} className="modal-content p-10 2xl:ps-12 xl:ps-12 md:ps-10 sm:ps-8 ps-6" style={{margin:isMobile?"auto 3%": "auto 10%"}}>
                {/* <div className="relative"> */}
                {/* </div> */}
                
                <div className="grid grid-cols-2 " id="popup-modal">
                    <div className="">
                        <span className="text-2xl w-full grid grid-row-12">
                            {data?.rocket_name}
                        </span>
                        <span className="text-base w-full mt-4 grid grid-flow-row text-white/[0.5]">
                            {data?.description}
                        </span>
                        <span className="text-base w-full 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-4 sm:mt-2 mt-3 grid grid-row-12">
                            {`Success Rate: ${data?.success_rate_pct ?? "-"}%`}
                        </span>
                        <span className="text-base w-full 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-4 mt-3 sm:mt-2 grid grid-row-12">
                            {`First flight: ${data?.first_flight ? moment(data.first_flight,"YYYY-MM-DD").format("DD/MM/YYYY"):"-"}`}
                        </span>
                        {
                            !isMobile &&
                            <span className="text-lg w-full 2xl:mt-20 xl:mt-20 lg:mt-16 md:mt-12 sm:mt-16 mt-16 flex flex-row justify-start">
                            <a className="page-button" href={data?.wikipedia??"!#"} target='_blank' rel="noreferrer">
                                <span className="me-2 ps-2">View more in detail</span>
                                <img src="/images/arrow.svg" width="28px" height="28px" alt="arrow" />
                            </a>
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
                            <a className="page-button" href={data?.wikipedia??"!#"} target='_blank' rel="noreferrer">
                                <span className="me-2 ps-2">View more in detail</span>
                                <img src="/images/arrow.svg" width="28px" height="28px" alt="arrow" />
                            </a>
                        </span>
                    }
                </div>
            </div>
        </div>
      )
  }
}
