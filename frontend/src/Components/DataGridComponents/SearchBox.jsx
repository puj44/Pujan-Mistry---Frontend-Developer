import React, { useEffect, useState } from 'react'
export default function SearchBox({selectedColumnSearch, onSelectColumn, searchTypes}) {
  const [show, setShow] = useState(false);
  const handleToggleShow = (e) =>{
    if(e.target.id !== "menu-item" && e.target.id !== "custom-dropdown" && e.target.id !== "menu-button"){
        setShow(false);
    }
  } 
  useEffect(()=>{
    window.addEventListener("click",handleToggleShow);
    return () =>{
        window.removeEventListener("click",handleToggleShow);
    }
  },[])
  return (
    <div className={`input-container group w-full  focus-within:shadow-[inset_0px_0px_5px_1px_rgba(255,255,255,0.5)]`}> 
        {/* Search Icon */}
        <img
            src="/images/search.svg" className="group-icon ms-2 d-flex justify-center align-middle" alt="search" width="20" height="20" 
        />
        {/* Search Input */}
        <input  type="text" className={`border-0 ms-2 group-input  ${show?"shadow-[inset_0px_11px_5px_-10px_rgba(255,255,255,0.5)_,inset_0px_-11px_5px_-10px_rgba(255,255,255,0.5)]":""} focus:shadow-[inset_0px_11px_5px_-10px_rgba(255,255,255,0.5)_,inset_0px_-11px_5px_-10px_rgba(255,255,255,0.5)] outline-none d-flex justify-center align-middle bg-black caret-white`} style={{width:"90%",fontSize:"1.3rem", transition:"box-shadow 0.3s ease-in-out"}} id="searchField" onChange={(e)=>{}} />
        {/* Search Dropdown */}
        <div className="py-2">
            <div className="divider-line h-full"></div>
        </div>
        <div class="relative inline-block custom-select group-select">
            <div className="h-full">
                <button  
                    type="button" 
                    className={`w-full h-full justify-start text-start ps-4  py-2 text-sm text-white`} id="menu-button" 
                    onClick={(e)=>{e.preventDefault(); setShow(!show); }} 
                    aria-expanded="false" aria-haspopup="true"
                >
                        {selectedColumnSearch?.title}
                </button>
            </div>

            <div id="custom-dropdown" className={`absolute left-0 mt-0.5 z-30  w-56 origin-bottom-right  bg-black border border-white shadow-lg ${show ? "inline-flex":"hidden"}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1 w-full" role="none">
                    {
                        searchTypes?.map((data,idx)=>{
                            return(
                                <a href="!#" className="text-white block py-1 text-sm focus:outline-none px-2" role="menuitem" onClick={(e)=>{e.preventDefault(); onSelectColumn(data); setShow(false)}} id="menu-item">
                                    <span className=" w-full ps-2 py-1 flex search-type-button">
                                        {data.title}
                                    </span>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
