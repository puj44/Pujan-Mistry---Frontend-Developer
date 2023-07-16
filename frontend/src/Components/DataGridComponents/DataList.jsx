import React, { useContext, useEffect } from 'react'
import ListCard from './ListCard'
import { UserContext } from '../UserContext';
import { get } from '../../api/apiWrapper';

export default function DataList() {
    const { token } = useContext(UserContext);
    useEffect(()=>{
        // get("")
    },[token])
  return (
    <div>
        <ListCard />
        <ListCard />
    </div>
  )
}
