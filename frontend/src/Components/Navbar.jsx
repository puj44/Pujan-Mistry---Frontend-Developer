import { useCallback, useEffect, useState } from "react"


export default function Navbar() {
  const [previousScrollValue, setPreviousScrollValue] = useState(0);
  const [show, setShow] = useState(true);
  const onScroll = useCallback((e) =>{
    if(typeof window !== "undefined"){
      const currentScrollValue = window.scrollY;
      setShow(previousScrollValue > currentScrollValue)
      setPreviousScrollValue(currentScrollValue);
    }
  },[previousScrollValue]);
  useEffect(()=>{
    const navbarHeight = document.getElementById("nav").offsetHeight;
    document.getElementById("banner").style.marginTop = navbarHeight + "px";
    if(typeof window !== "undefined"){
      window.addEventListener('scroll', onScroll);
      return () =>{
        window.removeEventListener('scroll', onScroll);
      }
    }
  },[previousScrollValue,show, onScroll]);
  return (
    <div id="nav" className="h-100 navbar bg-transparent z-20" style={{top:show?"0":"-100px"}}>
      <div className="ms-3 p-4">
        <img 
          src={"/images/spacex_logo.png"}
          width="245"
          height="56"
          alt="spaceX_logo"
        />
      </div>
    </div>
  )
}
