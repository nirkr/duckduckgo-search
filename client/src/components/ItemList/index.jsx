import React from "react";
import { useSelector } from "react-redux";
import _ from 'lodash';
import {Box, Link} from '@mui/material';
import { formatLabel } from '../../utils/utils'

export function ItemList() {
  const items = useSelector(state=> state.dataList) || [];
  const queryString = useSelector(state=> state.queryString) || '';
  
  return (
    <Box display="flex" flexDirection='column'>
      {items.map(item=> {
        if (_.isEmpty(item)){ return null}
        return (
          <Box key={item.text} sx={{mb:3}}>
            <Link href={item.url} sx={{cursor:'pointer'}}>{item.url}</Link>
              <Box sx={{mt:1}}>
                 {formatLabel(item.text, queryString)}
              </Box>
          </Box>
      )
     })}
    </Box>
  ) 
}
