# Database Server

Node.js and Express App to run a server that accepts and returns a key value pair

### Setup and Usage
```
$ git clone https://github.com/sophieklm/database-server.git
$ cd database-server
$ npm install
$ npm test
$ npm start
```
Store and retrieve key value pairs as follows:

```
http://localhost:4000/set?somekey=somevalue
http://localhost:4000/get?key=somekey
```

### Specification

Write a program that runs a server that is accessible on http://localhost:4000/. When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory. When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code.
