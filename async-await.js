//import fetch from "node_modules/node-fetch";
const fetch = require('node_modules/node-fetch');

function getNombre(username){
    const url = `https://app.github.com/users/${username}`
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json.name)
        })
}

getNombre('luisburgosvilca')