!function(){var e={107:function(){(new class{constructor(){this.id,this.user,this.proceed=document.querySelector(".proceed_modal"),this.apiUrl="https://ahj-code-8-hw-ws-server.onrender.com/",this.chat=document.querySelector(".chat"),this.usersWindow=document.querySelector(".user_window")}createMessage(e){let s=document.createElement("div");e.user==this.user?(s.className="my_message",s.innerHTML=`<div class="title">\n                <div class="user">You,</div>\n                <div class="message_date">${e.date}</div>\n            </div>\n            <div class="message_text">${e.message}</div>`):(s.className="message",s.innerHTML=`<div class="title my">\n                <div class="user my">${e.user},</div>\n                <div class="message_date my">${e.date}</div>\n            </div>\n            <div class="message_text">${e.message}</div>`),this.chat.appendChild(s)}listener(){this.proceed.addEventListener("click",(e=>{this.CheckUserName(e.target.previousElementSibling.children[0].value)}))}ws(){this.ws=new WebSocket("wss://ahj-code-8-hw-ws-server.onrender.com/ws"),this.ws.addEventListener("message",(e=>{const s=JSON.parse(e.data);"users"==s.type&&this.displayUsers(s.payload.chatUsers),"lastMessage"==s.type&&this.createMessage(s.payload)})),document.addEventListener("keypress",(e=>{let s=document.querySelector(".input").value;if("Enter"===e.key&&s){const e={user:this.user,message:s};this.ws.send(JSON.stringify(e)),document.querySelector(".input").value=""}}))}async CheckUserName(e){if(e.length>0){const s=fetch("https://ahj-code-8-hw-ws-server.onrender.com/checkUserName",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e,id:this.id})});202==(await s).status?alert("Такой никнейм занят! Вам необходимо выбрать другой."):(this.ws(),this.user=e,this.showChat())}}showChat(){let e=document.querySelector(".registration"),s=document.querySelector(".chat_area");e.classList.add("fog"),s.classList.remove("fog")}displayUsers(e){this.removeChilds(this.usersWindow);let s="";for(let t of Object.values(e)){s=t==this.user?"You":t;let e=document.createElement("div");e.className="online_user",e.innerHTML=`<div class="circle"></div>\n            <div class="username">${s}</div>`,this.usersWindow.insertBefore(e,this.usersWindow.firstChild)}}removeChilds(e){for(;e.firstChild;)e.removeChild(e.firstChild)}}).listener()}},s={};function t(r){var i=s[r];if(void 0!==i)return i.exports;var n=s[r]={exports:{}};return e[r](n,n.exports,t),n.exports}t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,{a:s}),s},t.d=function(e,s){for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},function(){"use strict";t(107)}()}();