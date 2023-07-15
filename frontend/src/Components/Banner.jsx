import React, { useEffect, useState } from 'react'

export default function Banner({path,width, mobileImagePath,isContent,content}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    if(typeof window !== "undefined"){
        setIsMobile(window.screen.availWidth <= 640 ? true: false);
    }
  },[])
  if(!isContent){

      return (
        <div id="banner" className="top-0 right-0 left-0 bottom-0 absolute z-0" style={{height:"100vh"}}>
            <img src={isMobile?mobileImagePath:path} width={width} height={"100%"} alt="banner"/>
        </div>
      )
  }
  else{
    console.log("hererer");
    return (
        <>
            <div id="banner" className={`top-0 right-0 left-0 bottom-0 ${!isMobile?"absolute":""} z-0 content-image`} style={{height:"100vh",backgroundImage:`url(${isMobile?mobileImagePath:path}`}}>
                {
                    !isMobile && 
                    <div className="z-50 absolute right-32 bottom-48">{content}</div>
                }
            </div>
            {isMobile && <div className="d-flex flex-row justify-content-center">{content}</div>}
        </>
        
      )
  }
}