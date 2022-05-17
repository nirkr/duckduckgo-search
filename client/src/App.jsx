import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid, Box } from "@mui/material";
import { Search }  from "./components/Search/index";
import { SideBar } from "./components/SideBar/index";
import { ItemList } from "./components/ItemList/index";
import { getQueries } from './services/api';

function App() {
  const [queryList, setQueryList] = useState([]);
  useEffect(()=> {
    const wrapper = async () => {
      const res = await getQueries();
      setQueryList(res);
    }
    wrapper();    
  },[])
  return (
    <>
      <Box sx={{m:3}}>
        <h1>DuckDuckGo Search </h1>
      <Grid container spacing={2} sx={{ mt: "3vh" }}>
        <Grid item xs={2} sx={{ borderRight: "1px solid black" }}>
          <SideBar queryList={queryList} />
        </Grid>
        <Grid item xs={9} sx={{ml:3}} >
          <Search />
          <Box sx={{mt:2}}>
            <ItemList />
          </Box>
        </Grid>
      </Grid>
      </Box>
    </>
  );
}

export default App;
