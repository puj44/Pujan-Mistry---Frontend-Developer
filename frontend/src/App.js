
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
        {
          token && token !== "" &&
          <DataGrid />
        }

        <div className="my-20"><Banner path="/images/desktop/falcon_2.svg" mobileImagePath={"/images/mobile/falcon_2.svg"} width="100%" /></div>
        <div className=""><Banner path="/images/desktop/falcon_3.svg" mobileImagePath={"/images/mobile/falcon_3.svg"} width="100%" /></div>
      </body>
    </div>
        
  );
}

export default App;
