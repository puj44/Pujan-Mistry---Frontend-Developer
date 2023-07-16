import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext';

export default function Banner({path,width, mobileImagePath,isContent,content}) {
  const { isMobile } = useContext(UserContext);
  if(!isContent){

      return (
        <div id="banner" className="top-0 right-0 left-0 bottom-0 absolute z-0" style={{height:"100vh"}}>
            <img src={isMobile?mobileImagePath:path} width={width} height={"100%"} alt="banner"/>
        </div>
      )
  }
  else{
    return (
        <>
            <div id="banner" className={`top-0 right-0 left-0 bottom-0 z-0 content-image`} style={{height:"100vh"}}>
                <img src={isMobile?mobileImagePath:path} alt="banner" width="100%" height="100%" />
                {
                    !isMobile && 
                    <div className=" absolute xl:right-32 2xl:right-32 lg:right-16 md:right-12 xl:bottom-10 2xl:bottom-0 lg:bottom-32 md:bottom-44">{content}</div>
                }
            </div>
            {isMobile && <div className="d-flex flex-row justify-content-center">{content}</div>}
        </>
        
      )
  }
}
