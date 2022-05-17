# Duckduckgo search project

## client: 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

 ### `npm i`
 ### `npm start`

react, redux, materialUI

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

* search component
* list of results - the searched term will be painted in yellow inside the result text.
* side-bar of persisted queryStrings - each click will call that search term
will show its results and put that search term in the search input

## server:
express, typescript

 ### `npm i`
 ### `npm start`
app runs in port 4002

* API's:
    - GET - /api/v1/search - get data from duckduck go engine
    - POST - /api/v1/persist - writes queryString to localfile
    - GET - /api/v1/persist - gets the list of queryStrings from the local file
* using FS libarary.
* the api showed different places for result data (some of it are in inner object) - for simplifying it I used the results that were available in the first object of RelatedTopics => for that I couldnt create the pagination mechanizm => wanted to focus on the rest of the project without wasting expensive time