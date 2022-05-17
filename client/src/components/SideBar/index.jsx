import React from "react";
import { useDispatch } from 'react-redux';
import {Box, Link} from '@mui/material';
import {fetchData} from '../../services/api';

export function SideBar({ queryList}){
  const dispatch = useDispatch();
  async function itemClickHandler(item){
    const url = `/api/v1/search?q=${item}`;
    const res = await fetchData(url)
    // set state in redux for the itemList to read
    dispatch({ type: 'searchClick', data: res, queryString: item })
  }
  return (
    <Box> 
      {queryList.map(item => (
        <Box key={item} sx={{mb:3}}>
        <Link sx={{cursor:"pointer"}} onClick={()=>itemClickHandler(item)}>
          {item}
          </Link>
        </Box>
      ))}
    </Box>
  ) 
}
