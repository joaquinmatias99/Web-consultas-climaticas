
let urlBase='';
let query='';
let apiKEY='e9fe0bc678cb4cfa2c2cc4602f66910d';
let ciudad='córdoba';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKEY}`)
    .then(response=> response.json())
    .then(response=> console.log(response))