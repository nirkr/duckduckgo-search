// import express, { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";
import _ from "lodash";
import fs from 'fs';
import path from "path";

interface Item{
  url: string,
  text: string
}
interface apiResultItem{
  FirstURL: string;
  Text: string,
}

dotenv.config();
const app = express();
const filePath = path.join(__dirname,'/persisted.txt');

app.use(bodyParser.json());

app.get("/api/v1/search", async (req, res) => {
  const { q: expression } = req.query;
  if (!expression) {
    res.status(200).send({});
  }
  const duckResponse = await axios.get(
    `http://api.duckduckgo.com/?q=${expression}&format=json`
  );
  const apiResponse: Item[] =
    !_.isEmpty(duckResponse.data?.RelatedTopics) &&
    duckResponse.data?.RelatedTopics.map((item: apiResultItem) => ({
      url: item.FirstURL,
      text: item.Text,
    }))
    .filter((obj:Item) => obj.url);
  res.status(200).send(apiResponse);
});

app.post("/api/v1/persist", async (req, res) => {
  const {queryString} = req.body;
  if (fs.readFileSync(filePath).length === 0) {
    fs.writeFile(filePath, queryString, err => {
      if (err) {
        console.error(err);
      }
    });
    }
  else{
    fs.appendFile(filePath, "\n" + queryString, err => {
      if (err) {
        console.error(err);
      }
    });
  }
  res.status(200).send('ok')
});
app.get("/api/v1/persist", async (req, res) => {
  const dataFromFile = 
    fs.readFileSync(filePath, 'utf8').split('\n');  
  res.status(200).send(dataFromFile);
})

app.listen(process.env.PORT || 4001, () => {
  console.log("listening to port", process.env.PORT);
});
