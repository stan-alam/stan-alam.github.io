
/*Created by Solomon
A pure javascript calculator
Ugrade is loading.....
c.2020*-- enhanced by Stan, 2020*/
var mp;
    function c(val) {

      document.getElementById
      ("d").value = val;
    }
    function v(val) {
      document.getElementById("d").value += val;
    }
    function e() {
      try
      {
        document.getElementById("d").value = eval(document.getElementById("d").value)
      }
      catch(e) {
        c('Error')
      }
    }
    function s() {
      document.getElementById("d").value = Math.sqrt(document.getElementById("d").value);
    }
    function a() {
      document.getElementById("d").value = Math.cos((document.getElementById("d").value)*(Math.PI/180));
    }
    function b() {
      document.getElementById("d").value = Math.sin((document.getElementById("d").value)*(Math.PI/180));
    }
    function f() {
      document.getElementById("d").value = Math.tan((document.getElementById("d").value)*(Math.PI/180));
    }
    function g() {
      let str = document.getElementById("d").value.slice(0, document.getElementById("d").value.length - 1);

      document.getElementById("d").value = str;
    }
    function h() {
      document.getElementById("d").value = document.getElementById("d").value*document.getElementById("d").value;
    }
    function i() {
      document.getElementById("d").value = Math.exp(document.getElementById("d").value);
    }
    function mpp() {
      mp = document.getElementById("d").value;
    }
    function mr() {
      document.getElementById("d").value += mp;
    }
    function mm() {
      mp = 0;
    }
