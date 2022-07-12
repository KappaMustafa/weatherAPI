




fetch("https://api.openweathermap.org/data/2.5/onecall?lat={44.9778}&lon={93.2650}&exclude={part}&appid={09aa1929c20f9c3adcfaf963f034f2c1}")
 .then(function (res) {
   return res.json();
})