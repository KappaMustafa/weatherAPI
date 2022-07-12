
var cityTemp;
var cityWind;
var cityHum;
var cityUv;
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=44.281587&lon=-92.859888&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
 .then(function (res) {
   return res.json();
})
  .then(function (data) {
    var array = data.items;
    var cityTemp = data.current.temp
    // console.log(data);
    // console.log(cityTemp);
    $('.temp').text('Temp: ' + cityTemp)
  })
    
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=44.281587&lon=-92.859888&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
.then(function (res) {
  return res.json();
})
 .then(function (data) {
   var array = data.items;
   var cityWind = data.current.wind_speed
  //  console.log(data);
  //  console.log(cityWind);
   $('.wind').text('Wind: ' + cityWind + "MPH")
 })
 
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=44.281587&lon=-92.859888&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
.then(function (res) {
  return res.json();
})
 .then(function (data) {
   var array = data.items;
   var cityHum = data.current.humidity
  //  console.log(data);
  //  console.log(cityHum);
   $('.hum').text('Humidity: ' + cityHum +"%")
 })
 
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=44.281587&lon=-92.859888&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
.then(function (res) {
  return res.json();
})
 .then(function (data) {
   var array = data.items;
   var cityUv = data.current.uvi
  //  console.log(data);
  //  console.log(cityUv);
   $('.uv').text('UV: ' + cityUv)
 })





 

 $('.ASTN').on('click', function(ASTN){
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=30.267153&lon=-97.743061&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
 .then(function (res) {
   return res.json();
})
  .then(function (data) {
    var array = data.items;
    var cityTemp = data.current.temp
    console.log(data);
    console.log(cityTemp);
    $('.temp').text('Temp: ' + cityTemp)
  })
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=30.267153&lon=-97.743061&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
  .then(function (res) {
    return res.json();
  })
   .then(function (data) {
     var array = data.items;
     var cityWind = data.current.wind_speed
     console.log(data);
     console.log(cityWind);
     $('.wind').text('Wind: ' + cityWind + "MPH")
   })
   fetch("https://api.openweathermap.org/data/2.5/onecall?lat=30.267153&lon=-97.743061&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
   .then(function (res) {
     return res.json();
   })
    .then(function (data) {
      var array = data.items;
      var cityHum = data.current.humidity
      console.log(data);
      console.log(cityHum);
      $('.hum').text('Humidity: ' + cityHum +"%")
    })
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=30.267153&lon=-97.743061&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
    .then(function (res) {
      return res.json();
    })
     .then(function (data) {
       var array = data.items;
       var cityUv = data.current.uvi
       console.log(data);
       console.log(cityUv);
       $('.uv').text('UV: ' + cityUv)
     })

 })   










 $('.CHI').on('click', function(CHI){
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=41.878114&lon=-87.629798&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
 .then(function (res) {
   return res.json();
})
  .then(function (data) {
    var array = data.items;
    var cityTemp = data.current.temp
    console.log(data);
    console.log(cityTemp);
    $('.temp').text('Temp: ' + cityTemp)
  })
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=41.878114&lon=-87.629798&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
  .then(function (res) {
    return res.json();
  })
   .then(function (data) {
     var array = data.items;
     var cityWind = data.current.wind_speed
     console.log(data);
     console.log(cityWind);
     $('.wind').text('Wind: ' + cityWind + "MPH")
   })
   fetch("https://api.openweathermap.org/data/2.5/onecall?lat=41.878114&lon=-87.629798&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
   .then(function (res) {
     return res.json();
   })
    .then(function (data) {
      var array = data.items;
      var cityHum = data.current.humidity
      console.log(data);
      console.log(cityHum);
      $('.hum').text('Humidity: ' + cityHum +"%")
    })
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=41.878114&lon=-87.629798&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
    .then(function (res) {
      return res.json();
    })
     .then(function (data) {
       var array = data.items;
       var cityUv = data.current.uvi
       console.log(data);
       console.log(cityUv);
       $('.uv').text('UV: ' + cityUv)
     })

 })   
 

 fetch("https://api.openweathermap.org/data/2.5/onecall?lat=28.5421109&lon=--81.3790304&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")




 $('.NY').on('click', function(NY){
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.741895&lon=-73.989308&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
 .then(function (res) {
   return res.json();
})
  .then(function (data) {
    var array = data.items;
    var cityTemp = data.current.temp
    console.log(data);
    console.log(cityTemp);
    $('.temp').text('Temp: ' + cityTemp)
  })
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.741895&lon=-73.989308&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
  .then(function (res) {
    return res.json();
  })
   .then(function (data) {
     var array = data.items;
     var cityWind = data.current.wind_speed
     console.log(data);
     console.log(cityWind);
     $('.wind').text('Wind: ' + cityWind + "MPH")
   })
   fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.741895&lon=-73.989308&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
   .then(function (res) {
     return res.json();
   })
    .then(function (data) {
      var array = data.items;
      var cityHum = data.current.humidity
      console.log(data);
      console.log(cityHum);
      $('.hum').text('Humidity: ' + cityHum +"%")
    })
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.741895&lon=-73.989308&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
    .then(function (res) {
      return res.json();
    })
     .then(function (data) {
       var array = data.items;
       var cityUv = data.current.uvi
       console.log(data);
       console.log(cityUv);
       $('.uv').text('UV: ' + cityUv)
     })

 })




 $('.ORL').on('click', function(ORL){
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=28.5421109&lon=-81.3790304&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
 .then(function (res) {
   return res.json();
})
  .then(function (data) {
    var array = data.items;
    var cityTemp = data.current.temp
    console.log(data);
    console.log(cityTemp);
    $('.temp').text('Temp: ' + cityTemp)
  })
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=28.5421109&lon=-81.3790304&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
  .then(function (res) {
    return res.json();
  })
   .then(function (data) {
     var array = data.items;
     var cityWind = data.current.wind_speed
     console.log(data);
     console.log(cityWind);
     $('.wind').text('Wind: ' + cityWind + "MPH")
   })
   fetch("https://api.openweathermap.org/data/2.5/onecall?lat=28.5421109&lon=-81.3790304&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
   .then(function (res) {
     return res.json();
   })
    .then(function (data) {
      var array = data.items;
      var cityHum = data.current.humidity
      console.log(data);
      console.log(cityHum);
      $('.hum').text('Humidity: ' + cityHum +"%")
    })
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=28.5421109&lon=-81.3790304&units=imperial&exclude=hourly,daily&appid=09aa1929c20f9c3adcfaf963f034f2c1")
    .then(function (res) {
      return res.json();
    })
     .then(function (data) {
       var array = data.items;
       var cityUv = data.current.uvi
       console.log(data);
       console.log(cityUv);
       $('.uv').text('UV: ' + cityUv)
     })

 })      