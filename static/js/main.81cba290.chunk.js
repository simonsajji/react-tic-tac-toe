(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),s=(a(9),a(1)),i=function(e){var t=e.className?"".concat(e.className," square"):"square";return c.a.createElement("span",{className:t+("X"===e.state?" fc-aqua":" fc-white"),onClick:function(){return e.onClick(e.index)}},e.state)},l=["","","","","","","","","",""];var m=function(){var e=Object(n.useState)(l),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),m=Object(s.a)(o,2),u=m[0],f=m[1],b=function(e){var t=Array.from(a);t[e]||(t[e]=u?"X":"0",f(!u),r(t))},h=function(){r(l)};Object(n.useEffect)((function(){var e=E();e&&(h(),alert("The Winner is  ".concat(e," ")))}),[a]);var E=function(){var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];console.log("Class: App, Function: checkWinner ==",a[0],a[1],a[2]);for(var t=0;t<e.length;t++){var n=Object(s.a)(e[t],3),c=n[0],r=n[1],o=n[2];if(a[c]&&a[c]===a[r]&&a[c]===a[o])return a[c]}return null};return c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"app-header"},c.a.createElement("p",{className:"heading-text"},"Tic Tac Toe 2022"),c.a.createElement("div",{className:"row jc-center"},c.a.createElement(i,{className:"b-bottom-right",onClick:function(){return b(0)},state:a[0]}),c.a.createElement(i,{className:"b-bottom-right",onClick:function(){return b(1)},state:a[1]}),c.a.createElement(i,{className:"b-bottom",onClick:function(){return b(2)},state:a[2]})),c.a.createElement("div",{className:"row jc-center"},c.a.createElement(i,{className:"b-bottom-right",onClick:function(){return b(3)},state:a[3]}),c.a.createElement(i,{className:"b-bottom-right",onClick:function(){return b(4)},state:a[4]}),c.a.createElement(i,{className:"b-bottom",onClick:function(){return b(5)},state:a[5]})),c.a.createElement("div",{className:"row jc-center"},c.a.createElement(i,{className:"b-right",onClick:function(){return b(6)},state:a[6]}),c.a.createElement(i,{className:"b-right",onClick:function(){return b(7)},state:a[7]}),c.a.createElement(i,{onClick:function(){return b(8)},state:a[8]}))),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{className:"clear-button",onClick:h},"New Game")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.81cba290.chunk.js.map