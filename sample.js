const axios = require('axios');

const jsonFile = {
  yyyymm: 202405,
  age: 65,
  high: 182,
  weight: 74,
  pressu: 120,
  pressd: 80,
  ast: 23,
  alt: 21,
  gtp: 26,
  tg: 42,
  hdl: 70,
  ldl: 89,
  tl: 167,
  bs: 90,
  hba: 5.5,
  rb: 514,
  hb: 15.6,
  plat: 17.9,
  crt: 0.81,
  gender: 1,
  opinion: 0,
  opiniont: "椎骨動脈解離",
  urs: 9,
  urp: 9,
  heart: 0,
  lung: 0,
  cancer: 0,
  wine: 1,
  smoke: 0,
  cancert: ""
};

const apiUrl = "https://myjumyo.azurewebsites.net/api/HttpTrigger1";

axios.post(apiUrl, jsonFile, {
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => {
  console.log(response.data);
  Object.assign(jsonFile, response.data);
})
.catch(error => {
  console.error('Error:', error.message);
});