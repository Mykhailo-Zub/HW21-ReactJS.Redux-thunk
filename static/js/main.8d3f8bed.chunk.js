(this["webpackJsonphw21-react.redux-thunk"]=this["webpackJsonphw21-react.redux-thunk"]||[]).push([[0],{102:function(e,t,a){},125:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),i=(a(102),a(9)),o=a.n(i),u=a(14),l=a(15),d=a.n(l),m=a(20),p=a(43),v=a(11),f=(a(125),a(16)),E=a(74),w=a.n(E),h=a(75),b=a.n(h),g=a(76),x=a.n(g),O=a(77),j=a.n(O),N=a(78),_=a.n(N),S=a(79),U=a.n(S),T=a(80),k=a.n(T),y=a(81),C=a.n(y),A=a(82),P=a.n(A),D=function(e){var t=e.users,a=e.userId,c=e.date,s=e.content,i=e.image,o=t.find((function(e){return e.id===a})),u=Object(n.useState)(0),l=Object(f.a)(u,2),d=l[0],m=l[1],p=Object(n.useState)(!1),v=Object(f.a)(p,2),E=v[0],h=v[1],g=Object(n.useState)(0),O=Object(f.a)(g,2),N=O[0],S=O[1],T=Object(n.useState)(!1),y=Object(f.a)(T,2),A=y[0],D=y[1],W=Object(n.useState)(0),I=Object(f.a)(W,2),F=I[0],R=I[1],z=Object(n.useState)(!1),B=Object(f.a)(z,2),J=B[0],L=B[1];return r.a.createElement("div",{className:"post-wrapper"},r.a.createElement("div",{className:"post_avatar",style:{backgroundImage:"url(".concat(null===o||void 0===o?void 0:o.avatar,")")}}),r.a.createElement("div",{className:"content-column"},r.a.createElement("div",{className:"name-row"},r.a.createElement("div",{className:"name"},null===o||void 0===o?void 0:o.name),r.a.createElement("img",{src:C.a,alt:"Confirmed",className:"confirm"}),r.a.createElement("div",{className:"nickname"},null===o||void 0===o?void 0:o.username),r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"date"},c),r.a.createElement("img",{className:"more-arrow",src:P.a,alt:"Show more"})),r.a.createElement("div",{className:"content"},s),r.a.createElement("div",{className:"content-img"},r.a.createElement("img",{src:i,alt:"Content"})),r.a.createElement("div",{className:"social-btns"},r.a.createElement("div",{onClick:function(){A?(S((function(){return N-1})),D(!A)):(S((function(){return N+1})),D(!A))}},r.a.createElement("img",{src:A?j.a:w.a,alt:"Comment"}),r.a.createElement("span",null,N)),r.a.createElement("div",{onClick:function(){J?(R((function(){return F-1})),L(!J)):(R((function(){return F+1})),L(!J))}},r.a.createElement("img",{src:J?U.a:x.a,alt:"Share"}),r.a.createElement("span",null,F)),r.a.createElement("div",{onClick:function(){E?(m((function(){return d-1})),h(!E)):(m((function(){return d+1})),h(!E))}},r.a.createElement("img",{src:E?_.a:b.a,alt:"Like"}),r.a.createElement("span",null,d)),r.a.createElement("div",null,r.a.createElement("img",{src:k.a,alt:"Upload"})))))},W=Object(m.b)((function(e){return{tweets:e.tweets,users:e.users}}),(function(e){return{getUsers:function(){return Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://domer.tech:9999/users");case 2:a=t.sent,e({type:"UPDATE_USERS",users:a.data.data});case 4:case"end":return t.stop()}}),t)})))()},getTweets:function(){return Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://domer.tech:9999/tweets");case 2:a=t.sent,e({type:"UPDATE_TWEETS",tweets:a.data.data});case 4:case"end":return t.stop()}}),t)})))()},dispatch:e}}))((function(e){var t=e.tweets,a=e.users,c=e.getUsers,s=e.getTweets;return Object(n.useEffect)((function(){c()}),[c]),Object(n.useEffect)((function(){s()}),[s]),r.a.createElement(r.a.Fragment,null,null===t||void 0===t?void 0:t.map((function(e,t){return r.a.createElement(D,{key:null===e||void 0===e?void 0:e.id,userId:null===e||void 0===e?void 0:e.userId,users:a,date:"".concat(new Date(2020,8,t).toLocaleDateString()),content:null===e||void 0===e?void 0:e.content,image:null===e||void 0===e?void 0:e.image})})))})),I=a(42),F=a.n(I),R=function(e){var t=e.name,a=e.avatar,n=e.username;return r.a.createElement("div",{className:F.a.user__wrapper},r.a.createElement("div",{className:F.a.avatar},r.a.createElement("img",{src:a,alt:"Avatar"})),r.a.createElement("div",{className:F.a.name__wrapper},r.a.createElement("div",{className:F.a.name},"Name: ",t),r.a.createElement("div",{className:F.a.username},"Nickname: ",n)))},z=Object(m.b)((function(e){return{users:e.users,tweets:e.tweets}}),(function(e){return{getUsers:function(){return Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://domer.tech:9999/users");case 2:a=t.sent,e({type:"UPDATE_USERS",users:a.data.data});case 4:case"end":return t.stop()}}),t)})))()},getTweets:function(){return Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://domer.tech:9999/tweets");case 2:a=t.sent,e({type:"UPDATE_TWEETS",tweets:a.data.data});case 4:case"end":return t.stop()}}),t)})))()},dispatch:e}}))((function(e){var t=e.getUsers,a=e.users;return Object(n.useEffect)((function(){t()}),[t]),r.a.createElement("div",{className:"users__wrapper"},r.a.createElement("h2",null,"Users"),r.a.createElement("div",{className:"users"},null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(R,{name:e.name,username:e.username,avatar:e.avatar,key:e.id})}))))})),B=a(163),J=a(156),L=a(52),M=a.n(L),G=a(165),$=Object(J.a)((function(e){return{button:{fontSize:"20px",width:"900px",margin:"20px auto",display:"flex"},formControl:{margin:"20px auto",minWidth:120,width:900,display:"flex"},textField:{margin:"20px auto",minWidth:120,width:900,display:"flex"},selectEmpty:{marginTop:e.spacing(2)}}})),q=Object(m.b)((function(e){return{users:e.users}}),(function(e){return{getUsers:function(){return Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://domer.tech:9999/users");case 2:a=t.sent,e({type:"UPDATE_USERS",users:a.data.data});case 4:case"end":return t.stop()}}),t)})))()},dispatch:e}}))((function(){var e=window.location.origin+window.location.pathname,t=Object(n.useState)(""),a=Object(f.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(""),l=Object(f.a)(i,2),m=l[0],p=l[1],v=Object(n.useState)(""),E=Object(f.a)(v,2),w=E[0],h=E[1],b=$(),g=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c&&m&&w?(d.a.post("http://domer.tech:9999/users",{name:c,username:"@".concat(w),avatar:m}),s(""),p(""),h(""),window.location.assign("".concat(e))):alert("Please enter user info");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"addUser__form"},r.a.createElement(G.a,{id:"outlined-helperText",label:"Name",value:c,onChange:function(e){return s(e.target.value)},variant:"outlined",className:b.textField}),r.a.createElement(G.a,{id:"outlined-helperText",label:"Avatar",value:m,onChange:function(e){return p(e.target.value)},variant:"outlined",className:b.textField}),r.a.createElement(G.a,{id:"outlined-helperText",label:"Nickname",value:w,onChange:function(e){return h(e.target.value)},variant:"outlined",className:b.textField}),r.a.createElement(B.a,{variant:"contained",className:b.button,endIcon:r.a.createElement(M.a,null),onClick:g},"Add user"))})),H=a(166),K=a(167),Q=a(162),V=a(164),X=Object(J.a)((function(e){return{button:{fontSize:"20px",width:"900px",margin:"20px auto",display:"flex"},formControl:{margin:"20px auto",minWidth:120,width:900,display:"flex"},textField:{margin:"20px auto",minWidth:120,width:900,display:"flex"},selectEmpty:{marginTop:e.spacing(2)}}})),Y=Object(m.b)((function(e){return{users:e.users}}),(function(e){return{getUsers:function(){return Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://domer.tech:9999/users");case 2:a=t.sent,e({type:"UPDATE_USERS",users:a.data.data});case 4:case"end":return t.stop()}}),t)})))()},dispatch:e}}))((function(e){var t=e.users,a=window.location.origin+window.location.pathname,c=Object(n.useState)(""),s=Object(f.a)(c,2),i=s[0],l=s[1],m=Object(n.useState)(""),p=Object(f.a)(m,2),v=p[0],E=p[1],w=Object(n.useState)(""),h=Object(f.a)(w,2),b=h[0],g=h[1],x=X(),O=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i&&v&&b?(d.a.post("http://domer.tech:9999/tweets",{userId:i,content:b,image:v}),l(""),E(""),g(""),window.location.assign("".concat(a,"#/tweets"))):alert("Please enter post info");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"addUser__form"},r.a.createElement(Q.a,{variant:"outlined",className:x.formControl},r.a.createElement(H.a,{id:"demo-simple-select-outlined-label"},"Select user"),r.a.createElement(V.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:i,onChange:function(e){return l(e.target.value)},label:"Select user"},null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement(K.a,{value:null===e||void 0===e?void 0:e.id},e.name)})))),r.a.createElement(G.a,{id:"outlined-helperText",label:"Post image",value:v,onChange:function(e){return E(e.target.value)},variant:"outlined",className:x.textField}),r.a.createElement(G.a,{id:"outlined-helperText",label:"Post text",value:b,onChange:function(e){return g(e.target.value)},variant:"outlined",className:x.textField}),r.a.createElement(B.a,{variant:"contained",className:x.button,endIcon:r.a.createElement(M.a,null),onClick:O},"Add Post"))})),Z=Object(m.b)((function(e){return{users:e.users,tweets:e.tweets}}),(function(e){return{getUsers:function(){return Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://domer.tech:9999/users");case 2:a=t.sent,e({type:"UPDATE_USERS",users:a.data.data});case 4:case"end":return t.stop()}}),t)})))()},getTweets:function(){return Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://domer.tech:9999/tweets");case 2:a=t.sent,e({type:"UPDATE_TWEETS",tweets:a.data.data});case 4:case"end":return t.stop()}}),t)})))()},dispatch:e}}))((function(e){e.users,e.tweets;var t=e.getUsers,a=e.getTweets;e.dispatch;return Object(n.useEffect)((function(){t()}),[t]),Object(n.useEffect)((function(){a()}),[a]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("nav",{className:"header"},r.a.createElement(p.b,{to:"/users",exact:!0,activeClassName:"selected"},"Users"),r.a.createElement(p.b,{to:"/adduser",exact:!0,activeClassName:"selected"},"Add User"),r.a.createElement(p.b,{to:"/tweets",exact:!0,activeClassName:"selected"},"Tweets"),r.a.createElement(p.b,{to:"/addtweet",exact:!0,activeClassName:"selected"},"Add tweet"))),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/users",exact:!0,component:z}),r.a.createElement(v.b,{path:"/adduser",exact:!0,component:q}),r.a.createElement(v.b,{path:"/tweets",exact:!0,component:W}),r.a.createElement(v.b,{path:"/addtweet",exact:!0,component:Y}),r.a.createElement(v.b,{path:"/",exact:!0,render:function(){return r.a.createElement(v.a,{to:"/users"})}}))))})),ee=a(32),te=a(83),ae=a(84),ne=a(53),re=[],ce=[],se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TWEETS":e.find((function(e){var a;return(null===e||void 0===e||null===(a=e.author)||void 0===a?void 0:a.name)===(null===t||void 0===t?void 0:t.author)}));return Object(ne.a)(t.tweets);default:return ce}},ie=Object(ee.createStore)(Object(ee.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USERS":return Object(ne.a)(t.users);default:return e}},tweets:se}),Object(ae.composeWithDevTools)(Object(ee.applyMiddleware)(te.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:ie},r.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},42:function(e,t,a){e.exports={user__wrapper:"Users_user__wrapper__2AOcf",avatar:"Users_avatar__3Rx1O",name__wrapper:"Users_name__wrapper__1CGt6"}},74:function(e,t,a){e.exports=a.p+"static/media/comment.0002e5f6.svg"},75:function(e,t,a){e.exports=a.p+"static/media/like.12220a22.svg"},76:function(e,t,a){e.exports=a.p+"static/media/share.444db246.svg"},77:function(e,t,a){e.exports=a.p+"static/media/comment_active.e371e0b3.svg"},78:function(e,t,a){e.exports=a.p+"static/media/like_active.f8fb9825.svg"},79:function(e,t,a){e.exports=a.p+"static/media/share_active.abbcc3bb.svg"},80:function(e,t,a){e.exports=a.p+"static/media/upload.8f047106.svg"},81:function(e,t,a){e.exports=a.p+"static/media/confirm.39726703.svg"},82:function(e,t,a){e.exports=a.p+"static/media/down-arrow.da333812.svg"},97:function(e,t,a){e.exports=a(129)}},[[97,1,2]]]);
//# sourceMappingURL=main.8d3f8bed.chunk.js.map