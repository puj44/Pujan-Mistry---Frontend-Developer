import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext';

export default function Banner({path,width, mobileImagePath,isContent,content}) {
  const { isMobile } = useContext(UserContext);
  if(!isContent){

      return (
        <>
          <div id="banner" className="top-0 right-0 left-0 bottom-0 z-0" style={{height:"auto"}}>
              <img src={isMobile?mobileImagePath:path} width={width} height={"100%"} alt="banner"/>
          </div>
        </>
      )
  }
  else{
    return (
        <>
            <div id="banner" className={`top-0 right-0 left-0 bottom-0 z-0  content-image`} style={{height:"auto"}}>
                <img src={isMobile?mobileImagePath:path} alt="banner" width={width} height="100%" />
                {
                    !isMobile && 
                    <div className=" absolute xl:right-32 2xl:right-32 lg:right-6 md:right-0 xl:bottom-10 2xl:bottom-10 lg:bottom-42 md:bottom-96 2xl:w-fit xl:w-fit lg:w-fit md:w-6/12 sm:w-fit ">{content}</div>
                }
            </div>
            {isMobile && <div className="d-flex flex-row justify-content-center">{content}</div>}
        </>
        
      )
  }
}
