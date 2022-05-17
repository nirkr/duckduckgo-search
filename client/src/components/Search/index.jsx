import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchData, persistQuery } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux';

export function Search() {
  const dispatch = useDispatch();
  const queryString = useSelector(state=> state.queryString) || '';
  const [inputValue, setInputValue] = useState('');
  // setting the queryString after choosing from sideBar
  useEffect(()=> setInputValue(queryString),[queryString])

  const clickHandler = async () => {
    if (!inputValue) {return}
    const url = `/api/v1/search?q=${inputValue}`;
    const res = await fetchData(url)
    // set the payload in redux for the itemList to read
    dispatch({ type: 'searchClick', data: res, queryString: inputValue })
    await persistQuery(inputValue);
  }
  return (
    <Box display="flex" sx={{ mr: "2vw" }}>
      <TextField
        id="queryField"
        label="queryString"
        size="small"
        sx={{ width: "30vw", mr: "2vw" }}
        onChange={(val) => setInputValue(val.target.value)}
        value={inputValue}
      />
      <Button variant="contained" size="small" endIcon={<SearchIcon />} onClick={clickHandler}>
        Search
      </Button>
    </Box>
  );
}