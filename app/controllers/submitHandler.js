'use strict';

(function () {
    var request = require("request");
    var submit = document.querySelector("#submit");
    console.log("executing");
    
    function ready (fn) {
      if (typeof fn !== 'function') {
         return;
      }

      if (document.readyState === 'complete') {
         return fn();
      }

      document.addEventListener('DOMContentLoaded', fn, false);
   }
   
   function makeReq (method, url, callback) {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(xmlhttp.response);
         }
      };

      xmlhttp.open(method, url, true);
      xmlhttp.send();
   }
   
   ready(makeReq("GET", "https://filesize-bartowski20.c9users.io/api", function () {
       console.log("fuck");
   }));
    
    submit.addEventListener("click", function () {
        console.log("registered");
        request("https://filesize-bartowski20.c9users.io/api", function (err, res, body) {
            if (err) throw err;
            console.log(body);
        });
       request.post("https://filesize-bartowski20.c9users.io/api", function (err, res, body) {
          if (err) throw err;
          console.log(body);
       }); 
    });
})();