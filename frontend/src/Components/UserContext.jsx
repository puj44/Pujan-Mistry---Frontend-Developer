import React, { useState, createContext, useEffect } from 'react';
import { cookies } from "../commonjs/common";
import {  post, remove } from '../api/apiWrapper';
export const UserContext = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isMobile, setIsMobile] = useState(false);

  const authenticateUser = async() =>{
    let tokenVal = "";
    const cookieToken = await cookies.get();
    if(cookieToken && cookieToken?.toString()?.includes("token")) {
      tokenVal = cookieToken?.split("token=")?.[1];
    }
    else{
      const response = await post("users");
      if(response?.status === 200){
        tokenVal = encodeURIComponent(response.data?.token)
      }
    }
    if(tokenVal && tokenVal !== ""){
      cookies.set("token="+tokenVal);
      setToken(tokenVal);
    }
  }
  const removeTokens = async() =>{
    //  cookies.remove("token");
        await remove("users");
  }
  
  useEffect(()=>{
    if(typeof window !== "undefined"){
      setIsMobile(window.screen.availWidth <= 680 ? true: false);
    }
    cookies.remove("token");
    const value = cookies?.get();
    if(value && value?.token){
      setToken(value?.token);
    }
    else{
      authenticateUser();  
    }
    
    window.addEventListener('beforeunload', async  function(e) {
      await removeTokens();
    });
    return ()=>{
      window.removeEventListener('beforeunload', function (e) {});
    }
  },[])

  const value = { token, isMobile };

  return (
    <UserContext.Provider value={value} >
      {children}
    </UserContext.Provider>
  );
};