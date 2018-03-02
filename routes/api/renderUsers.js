const express = require('express');
const axios = require('axios')
const router = express.Router();

// Model
const renderUsers = require('../../models/renderUsers')

// Axios //RegExp
let container;
const obj = {}
const url =  'https://shielded-headland-24739.herokuapp.com/static/users.txt';
axios.get(url).then(
  (response) => {

    // 
    
          const array = response.data.split('&')
          for (const a of array) {
            const [ key, value ] = a.split('=')
            obj[key] = value
          }
const json = JSON.stringify(obj)
    // 


    // container = response.data.replace(new RegExp("=", "g"), '\"' +  ':"').replace(new RegExp("&", "g"), '\",' + "\"").split("|").join("\"},{" + '"');
    // container =  '{\"' + container.slice(0, container.length - 2) + '"}';    
  }
)

//  container = JSON.parse(container)
// var jsonData = JSON.parse(container);
// console.log(`+++++++++++++++${typeof(jsonData)}`)

router.get('/json', (req, res, next) => {
  // res.send(JSON.parse(container))
  // res.send(container)
  res.send(obj)
  
})




router.get('/list', (req, res, next) => {
  renderUsers.find((err, renderuser) => { //renderusers db collection
    if(err) {
      res.send(err.message)
    } else {
      res.json(renderuser)
    }
  });
});

module.exports = router; 