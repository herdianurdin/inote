(this.webpackJsonpinote=this.webpackJsonpinote||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(14),a=n.n(i),s=n(18),r=n(2),l=n(15),d=n.n(l),u=n(7),j=n(5),b=n(0),v=o.a.memo((function(e){var t=e.note,n=e.onUpdateNote,o=e.handleViewOnUpdate,i=Object(c.useState)(t),a=Object(r.a)(i,2),s=a[0],l=a[1],d=function(e,t){l(Object(j.a)(Object(j.a)({},s),{},Object(u.a)({},e,t)))};return Object(c.useEffect)((function(){return l(t)}),[t]),Object(b.jsxs)("div",{className:"content-edit",children:[Object(b.jsx)("input",{type:"text",id:"title",placeholder:"Title note...",value:s.title,onChange:function(e){return d("title",e.target.value)}}),Object(b.jsx)("textarea",{id:"body",placeholder:"Text note...",value:s.body,onChange:function(e){return d("body",e.target.value)}}),Object(b.jsx)("div",{onClick:function(){n(Object(j.a)(Object(j.a)({},s),{},{updatedAt:Date.now()})),o()},className:"btn-save",children:"Save"})]})})),h=n(16),L=o.a.memo((function(e){var t=e.note;return Object(b.jsxs)("div",{className:"content-view",children:[Object(b.jsx)("h2",{children:0===t.title.length?"Untitled Note":t.title}),Object(b.jsx)("p",{children:Object(h.a)(t.body.replace(/(\r\n|\n|\r)/gm,"<br>"))})]})})),f=o.a.memo((function(e){var t=e.activeNote,n=e.onUpdateNote,o=Object(c.useState)(!0),i=Object(r.a)(o,2),a=i[0],s=i[1],l=function(e){document.querySelectorAll(".content-nav div").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active"),s("view"===e.target.id)};return t?Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"content-nav",children:[Object(b.jsx)("div",{id:"view",onClick:l,className:"active",children:"View"}),Object(b.jsx)("div",{id:"edit",onClick:l,children:"Edit"})]}),a?Object(b.jsx)(L,{note:t}):Object(b.jsx)(v,{note:t,onUpdateNote:n,handleViewOnUpdate:function(){document.querySelectorAll(".content-nav div").forEach((function(e){return e.classList.remove("active")})),document.querySelector("#view").classList.add("active"),s(!0)}})]}):Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("div",{className:"content-not-found",children:[Object(b.jsx)("svg",{viewBox:"3 -1.597 24 24",children:Object(b.jsx)("path",{d:"M 10 7.403 L 20 7.403 L 20 9.403 L 10 9.403 L 10 7.403 Z M 10 11.403 L 15 11.403 L 15 13.403 L 10 13.403 L 10 11.403 Z M 24 4.403 L 24 18.403 C 24 19.506 23.103 20.403 22 20.403 L 8 20.403 C 6.897 20.403 6 19.506 6 18.403 L 6 4.403 C 6 3.3 6.897 2.403 8 2.403 L 11 2.403 L 11 0.403 L 13 0.403 L 13 2.403 L 17 2.403 L 17 0.403 L 19 0.403 L 19 2.403 L 22 2.403 C 23.103 2.403 24 3.3 24 4.403 Z M 22.002 18.403 L 22 5.403 L 8 5.403 L 8 18.403 L 22.002 18.403 Z"})}),Object(b.jsx)("h2",{children:"No note selected"})]})})})),O=o.a.memo((function(e){var t=e.note,n=e.activeNote,c=e.setActiveNote,o=e.onDeleteNote;return Object(b.jsxs)("div",{className:"note",children:[Object(b.jsxs)("div",{className:"note-content ".concat(n===t.id?"active":""),onClick:function(){return c(t.id)},children:[Object(b.jsx)("h2",{children:0===t.title.length?"Untitled Note":t.title.length>13?t.title.substr(0,13)+"...":t.title}),Object(b.jsx)("p",{children:t.body.length>39?t.body.replace(/(\r\n|\n|\r)/gm," ").substr(0,39)+"...":""===t.body?"...":t.body.replace(/(\r\n|\n|\r)/gm," ")}),Object(b.jsxs)("div",{className:"timestamp",children:["Last Modified ",new Date(t.updatedAt).toLocaleDateString("en-US")]})]}),Object(b.jsx)("div",{className:"btn-delete",onClick:function(){return o(t.id)},children:Object(b.jsx)("svg",{viewBox:"-0.338 -3.868 24 24",children:Object(b.jsx)("path",{d:"M 5.662 3.132 L 4.662 3.132 L 4.662 16.132 C 4.662 17.237 5.557 18.132 6.662 18.132 L 16.662 18.132 C 17.767 18.132 18.662 17.237 18.662 16.132 L 18.662 3.132 L 5.662 3.132 Z M 16.28 0.132 L 14.662 -1.868 L 8.662 -1.868 L 7.044 0.132 L 2.662 0.132 L 2.662 2.132 L 20.662 2.132 L 20.662 0.132 L 16.28 0.132 Z"})})})]})})),m=o.a.memo((function(e){var t=e.notes,n=e.activeNote,o=e.setActiveNote,i=e.onAddNote,a=e.onDeleteNote,s=Object(c.useState)(t),l=Object(r.a)(s,2),d=l[0],u=l[1],j=Object(c.useState)(""),v=Object(r.a)(j,2),h=v[0],L=v[1],f=function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(h.toLowerCase())}));u(e)};return Object(c.useEffect)((function(){return u(t)}),[t]),Object(b.jsxs)("div",{className:"sidebar show",children:[Object(b.jsx)("div",{className:"sidebar-menu",children:Object(b.jsxs)("svg",{viewBox:"12.953 25.838 24 24",onClick:function(){document.querySelector(".sidebar").classList.toggle("show"),document.querySelector(".close").classList.toggle("active"),document.querySelector(".open").classList.toggle("active")},children:[Object(b.jsx)("path",{className:"close active",d:"M 29.453 31.838 L 24.952 36.337 L 20.453 31.838 L 18.953 33.338 L 23.452 37.837 L 18.953 42.337 L 20.453 43.837 L 24.952 39.337 L 29.453 43.837 L 30.953 42.337 L 26.454 37.837 L 30.953 33.338 L 29.453 31.838 Z"}),Object(b.jsx)("path",{className:"open",d:"M 16.953 31.838 L 32.953 31.838 L 32.953 33.838 L 16.953 33.838 L 16.953 31.838 Z M 16.953 36.838 L 32.953 36.838 L 32.953 38.838 L 16.953 38.838 L 16.953 36.838 Z M 16.953 41.838 L 32.953 41.838 L 32.953 43.838 L 16.953 43.838 L 16.953 41.838 Z"})]})}),Object(b.jsxs)("div",{className:"sidebar-content",children:[Object(b.jsxs)("div",{className:"sidebar-header",children:[Object(b.jsx)("h1",{children:"Inote"}),Object(b.jsx)("div",{className:"btn-new-note",onClick:i,children:"New note"})]}),Object(b.jsxs)("div",{className:"sidebar-search",children:[Object(b.jsx)("input",{type:"search",id:"search",onKeyDown:function(e){"Enter"===e.key&&f()},onChange:function(e){return L(e.target.value)},placeholder:"Search note..."}),Object(b.jsx)("div",{className:"btn-search",onClick:f,children:Object(b.jsx)("svg",{viewBox:"27.843 4.443 24 24",children:Object(b.jsx)("path",{d:"M 38.49 23.089 C 40.264 23.089 41.988 22.494 43.387 21.401 L 47.783 25.797 L 49.197 24.383 L 44.801 19.987 C 45.894 18.589 46.489 16.864 46.49 15.089 C 46.49 10.678 42.901 7.089 38.49 7.089 C 34.079 7.089 30.49 10.678 30.49 15.089 C 30.49 19.5 34.079 23.089 38.49 23.089 Z M 38.49 9.089 C 41.799 9.089 44.49 11.78 44.49 15.089 C 44.49 18.398 41.799 21.089 38.49 21.089 C 35.181 21.089 32.49 18.398 32.49 15.089 C 32.49 11.78 35.181 9.089 38.49 9.089 Z"})})})]}),Object(b.jsx)("div",{className:"notes",children:d.sort((function(e,t){return t.updatedAt-e.updatedAt})).map((function(e,t){return Object(b.jsx)(O,{note:e,activeNote:n,setActiveNote:o,onDeleteNote:a},t)}))})]})]})})),x=o.a.memo((function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("notes"))||[]),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(!1),a=Object(r.a)(i,2),l=a[0],u=a[1];return Object(c.useEffect)((function(){return localStorage.setItem("notes",JSON.stringify(n))}),[n]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("main",{children:[Object(b.jsx)(m,{notes:n,activeNote:l,setActiveNote:u,onAddNote:function(){var e={id:d()(),title:"",body:"",createdAt:Date.now(),updatedAt:Date.now()};o([].concat(Object(s.a)(n),[e]))},onDeleteNote:function(e){u(e!==l&&l),o(n.filter((function(t){return t.id!==e})))}}),Object(b.jsx)(f,{activeNote:n.find((function(e){return e.id===l})),onUpdateNote:function(e){var t=n.map((function(t){return t.id===l?e:t}));o(t)}})]})})})),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(39);a.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(x,{})})),function(e){if("serviceWorker"in navigator){if(new URL("/inote",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/inote","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(t,e)}))}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.0da19fde.chunk.js.map