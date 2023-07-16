
import Banner from './Components/Banner';
import DataGrid from './Components/DataGrid';
import InformationBox from './Components/InformationBox';
import Navbar from './Components/Navbar';
import {  UserContext } from './Components/UserContext';
import './styles/globals.css';
import { useContext, useEffect } from 'react';
function App() {

  const { token } = useContext(UserContext);
 
  return (
    <div className="bg-black">
      <Navbar/>
      <body >
          <Banner path="/images/desktop/falcon_banner.svg" mobileImagePath={"/images/mobile/mobile_falcon.svg"} width="100%" isContent={true} content={<InformationBox/>} />

        <DataGrid token={token}/>
        <DataGrid token={token}/>
        <DataGrid token={token}/>
        <DataGrid token={token}/>
        
      </body>
    </div>
        
  );
}

export default App;
