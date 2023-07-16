import React, { useState } from 'react'
import searchTypes from "../json/searchTypes.json"
import SearchBox from './DataGridComponents/SearchBox';
import DataList from './DataGridComponents/DataList';
export default function DataGrid() {
  const [selectedColumnSearch, setSelectedColumnSearch] = useState(searchTypes[0]);
  const onSelectColumn = (val) =>{
    setSelectedColumnSearch(val);
  }
  return (
    <div className="2xl:mt-40 mt-4">
        <h3 className="text-center mb-4" style={{fontSize:"1.8rem"}}>FIND MORE HERE</h3>
        <div className="w-100 2xl:px-64 xl:px-64 md:px-32 sm:px-14 px-8">
            {/* Input Container */}
            <SearchBox selectedColumnSearch={selectedColumnSearch} onSelectColumn={onSelectColumn} searchTypes={searchTypes}/>
            {/* Data List */}
            <DataList />
        </div>
    </div>
  )
}
