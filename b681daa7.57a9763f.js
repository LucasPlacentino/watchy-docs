(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5],{122:function(t){t.exports=JSON.parse('[{"id":"1","name":"Basic","author":"SQFMI","screenshot":"/img/watchfaces/1_Basic.png","source":"https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/Basic","version":"1.0.0"},{"id":"2","name":"7_SEG","author":"SQFMI","screenshot":"/img/watchfaces/2_7_SEG.png","source":"https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/7_SEG","version":"1.0.0"},{"id":"2A","name":"7_SEG_LIGHT","author":"SQFMI","screenshot":"/img/watchfaces/2_7_SEG_Light.png","source":"https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/7_SEG","version":"1.0.0"},{"id":"3","name":"DOS","author":"SQFMI","screenshot":"/img/watchfaces/3_DOS.png","source":"https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/DOS","version":"1.0.0"},{"id":"4","name":"Pokemon","author":"SQFMI","screenshot":"/img/watchfaces/4_Pokemon.png","source":"https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/Pokemon","version":"1.0.0"},{"id":"5","name":"StarryHorizon","author":"dandelany","screenshot":"/img/watchfaces/5_StarryHorizon.png","source":"https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/StarryHorizon","version":"1.0.0"},{"id":"6","name":"Tetris","author":"SQFMI","screenshot":"/img/watchfaces/6_Tetris.png","source":"https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/Tetris","version":"1.0.0"},{"id":"7","name":"MacPaint","author":"SQFMI","screenshot":"/img/watchfaces/7_MacPaint.png","source":"https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/MacPaint","version":"1.0.0"},{"id":"8","name":"Bahn","author":"BraininaBowl","screenshot":"/img/watchfaces/8_Bahn.png","source":"https://github.com/BraininaBowl/Bahn-for-Watchy","version":"1.0.0"},{"id":"9","name":"Re-Dub","author":"BraininaBowl","screenshot":"/img/watchfaces/9_Redub.png","source":"https://github.com/BraininaBowl/Re-Dub-for-Watchy","version":"1.0.0"},{"id":"10","name":"Calculateur","author":"Jochen","screenshot":"/img/watchfaces/10_Calculateur.png","source":"https://git.sr.ht/~jochen/Calculateur","version":"1.0.0"},{"id":"11","name":"Jarvis","author":"peerdavid","screenshot":"/img/watchfaces/11_Jarvis.gif","source":"https://github.com/peerdavid/Watchy/tree/master/examples/WatchFaces/David","version":"1.0.0"}]')},57:function(t,e,n){"use strict";n.r(e);var a=n(4),r=n(0),c=n.n(r),o=n(59),s=n.n(o),i=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){return c.a.createElement("div",{className:"col col--4 "+s.a.frame},c.a.createElement("img",{src:this.props.screenshot}),c.a.createElement("a",{className:"button button--outline button--info",href:this.props.github,target:"_blank"},this.props.name),c.a.createElement(h,{name:this.props.name,author:this.props.author}))},e}(r.Component);function h(t){return"SQFMI"==t.author||"dandelany"==t.author?c.a.createElement("button",{id:t.name,className:"button button--info",onClick:S},"Try it! (beta)"):null}var u,m,f,l,g="86b12865-4b70-4893-8ce6-9864fc00374d",p="86b12867-4b70-4893-8ce6-9864fc00374d",d="86b12866-4b70-4893-8ce6-9864fc00374d",b=null,v=null,w=null,y=null;function S(t){t.preventDefault();var e=t.target.id;navigator.bluetooth.requestDevice({filters:[{services:["cd77498e-1ac8-48b6-aba8-4161c7342fce"]}],optionalServices:[g]}).then((function(t){return t.gatt.connect()})).then((function(t){return t.getPrimaryService(g)})).then((function(t){b=t})).then((function(t){return t})).then((function(t){return function(t){if(!b)return;return b.getCharacteristic(p).then((function(t){return t.readValue()})).then((function(t){"v"+t.getUint8(0)+"."+t.getUint8(1),"v"+t.getUint8(2)+"."+t.getUint8(3)+"."+t.getUint8(4)})).then((function(e){!function(t){fetch("https://raw.githubusercontent.com/sqfmi/Watchy/master/examples/WatchFaces/"+t+"/"+t+".bin").then((function(t){return t.arrayBuffer()})).then((function(t){return y=t,function(){if(!b)return void console.log("No Watchy Service");u=y.byteLength,m=u,f=0,l=0,b.getCharacteristic(d).then((function(t){return v=t,t.startNotifications().then((function(t){v.addEventListener("characteristicvaluechanged",W)}))})).catch((function(t){console.log(t)})),W()}()})).catch((function(t){console.warn("Something went wrong.",t)}))}(t)})).catch((function(t){console.log(t)}))}(e)})).catch((function(t){console.log(t)}))}function W(){m>0&&(f=m>=512?512:m,w=y.slice(l,l+f),l+=f,m-=f,console.log("remaining: "+m),b.getCharacteristic(d).then((function(t){return _(t,w)})).then((function(t){return console.log((l/u*100).toPrecision(3)+"%")})).catch((function(t){console.log(t)})))}function _(t,e){return t.writeValue(e).catch((function(n){return _(t,e)}))}e.default=i},60:function(t,e,n){"use strict";n.r(e);var a=n(4),r=n(0),c=n.n(r),o=n(57),s=n(122),i=function(t){function e(){return t.apply(this,arguments)||this}Object(a.a)(e,t);var n=e.prototype;return n.renderRows=function(){var t=[],e=[];return s.forEach((function(n,a){t.push(c.a.createElement(o.default,{key:n.id,author:n.author,screenshot:n.screenshot,github:n.source,name:n.name})),(a+1)%3==0&&(e.push(c.a.createElement("div",{key:a,className:"row row--no-gutters"},t)),t=[])})),e},n.render=function(){return c.a.createElement("div",{className:"col col--6"},this.renderRows())},e}(r.Component);e.default=i}}]);