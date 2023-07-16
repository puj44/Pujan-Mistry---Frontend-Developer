import React, { useCallback, useContext, useEffect, useState } from 'react'
import searchTypes from "../json/searchTypes.json"
import SearchBox from './DataGridComponents/SearchBox';
import DataList from './DataGridComponents/DataList';
import QueryUtilityFunc from '../commonjs/QueryUtility';
import { UserContext } from './UserContext';
import { get } from '../api/apiWrapper';
import { searchDebounce } from '../commonjs/debounce';
import Pagination from './DataGridComponents/Pagination';
export default function DataGrid() {
  const { token } = useContext(UserContext);
  const [selectedColumnSearch, setSelectedColumnSearch] = useState(searchTypes[0]);
  const [searchQuery, setSearchQuery] = useState();
  const [rocketsList, setRocketsList] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const onSelectColumn = (val) =>{ // search type change
    if(searchQuery !== ""){
        setPage(1);
        setSearchQuery("");
        document.getElementById("searchField").value = "";
    }
    setSelectedColumnSearch(val);
  }
  
  const onPageChange = (val) =>{ // page change
    setPage(val);
  }
  const onQueryChange = async() =>{
   
    const query = QueryUtilityFunc(searchQuery, selectedColumnSearch, page);
    const response = await get(`rockets?${query}`);
    if(response?.status === 200){
        if(response?.data?.rocketsData){
            setRocketsList(response.data.rocketsData ??[]);
            setMeta({...response.data.meta, currentPage:parseInt(response.data.meta?.currentPage)});
        }
    }
    setLoading(false);
  }
  
  const onChangeSearch = (val)=>{
    setSearchQuery(val);
  }
  
  useEffect(()=>{
    setLoading(true);
      // call function to request data upon search, type and page update
    onQueryChange();
  },[token,page,searchQuery])
  return (
    <div className="2xl:mt-40 mt-4">
        <h3 className="text-center mb-4" style={{fontSize:"1.8rem"}}>FIND MORE HERE</h3>
        <div className="w-100 2xl:px-64 xl:px-64 md:px-32 sm:px-14 px-8">
            {/* Input Container */}
            <SearchBox selectedColumnSearch={selectedColumnSearch} searchQuery={searchQuery} onChangeSearch={searchDebounce(onChangeSearch)} onSelectColumn={onSelectColumn} searchTypes={searchTypes}/>
            {/* Data List */}
            <DataList rocketsList={rocketsList} isLoading={isLoading} />
            <Pagination meta={meta} moveTo={onPageChange} />
        </div>
    </div>
  )
}
