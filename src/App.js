import React from 'react';
//import './App.css';
//import './lightning.out.js';

var cognitoId = "cognitoId";
var lightningEndPointURI = "lightningEndPointURI";
var outhtoken = "outhtoken";
console.log(outhtoken);


function App() {
  return (
  // $Lightning.use("c:ABCIncApp", function() {
  //   $Lightning.createComponent("c:ABCInc", {"cognitoId": cognitoId}, "lightning", function(cmp) {});
  // },lightningEndPointURI,outhtoken)
  <h2>i am {cognitoId}</h2>	
  );
}

export default App;
