import axios from "axios";

async function fetchData(url) {
  try{
    const res = await axios.get(url);
    return res.data;
  }
  catch(e){
    console.log('error: ',e);
  }
}
const PERSIST_URL='/api/v1/persist';
async function getQueries() {
  try{
    const res = await axios.get(PERSIST_URL);
    return res.data;
  }
  catch(e){
    console.log('error: ',e);
  }
}

async function persistQuery(payload) {
  try{
    const res = await axios.post(PERSIST_URL, {
      queryString: payload
    });
    return res.data;
  }
  catch(e){
    console.log('error: ',e);
  }
}

export { 
  fetchData, 
  persistQuery,
  getQueries
};
