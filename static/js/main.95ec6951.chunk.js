(this.webpackJsonprus=this.webpackJsonprus||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var n,r=c(0),a=c(10),i=c.n(a),s=c(45),u=c(12),j=c(41),o=c(37),b=c(19),l=c(38),d=c(134),O=c(138),x=c(103),h=c(139),p=c(145),f=c(68),v=c.n(f),g=c(5),y=l.a.div(n||(n=Object(o.a)(["\n  border-radius: 6px;\n  padding: 15px;\n  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n  background: #f8f8f8;\n  width: fit-content;\n"]))),m=function(){var e={RUR:[],EUR:[],USD:[]},t=Object(b.c)((function(e){return e.app.data})),c=Object(b.c)((function(e){return e.app.currency})),n=Object(r.useState)(!0),a=Object(j.a)(n,2),i=a[0],u=a[1],o=t.find((function(e){return e.curr===c})),l=Object(r.useState)(0),f=Object(j.a)(l,2),m=f[0],S=f[1],C=Object(r.useState)(0),A=Object(j.a)(C,2),w=A[0],k=A[1],E=Object(r.useState)(JSON.parse(localStorage.getItem("log"))||e),R=Object(j.a)(E,2),T=R[0],_=R[1],N=function(e){u(e),S(0),k(0)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(s.b,{to:"/",children:Object(g.jsx)(d.a,{children:Object(g.jsx)(v.a,{})})}),Object(g.jsxs)(O.a,{color:"primary",children:[Object(g.jsx)(x.a,{onClick:function(){return N(!0)},children:"Sell"}),Object(g.jsx)(x.a,{onClick:function(){return N(!1)},children:"Buy"}),Object(g.jsx)(x.a,{onClick:function(){_(e),localStorage.removeItem("log")},color:"secondary",children:"Clear log"})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)(h.a,{variant:"h4",children:[i?"Sell":"Buy","-",c]}),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{children:[Object(g.jsx)(p.a,{variant:"outlined",type:"number",label:"Amount: ".concat(c),placeholder:"Amount: ".concat(c),value:m||"",onChange:function(e){var t=Number(e.target.value);S(t),k((i?t*o.buy:t*o.sell).toFixed(2))}}),Object(g.jsx)("div",{children:Object(g.jsxs)(y,{children:["You will receive: ",w," UAH"]})}),Object(g.jsx)("hr",{}),Object(g.jsx)(x.a,{variant:"outlined",onClick:function(){var t=JSON.parse(localStorage.getItem("log"))||e,n="".concat(i?"Sell":"Buy"," ").concat(m," ").concat(c,", receive ").concat(w," UAH");t[c].push(n),localStorage.setItem("log",JSON.stringify(t)),_(t)},children:"Exchange"})]})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(h.a,{variant:"subtitle1",children:"Log:"}),Object(g.jsx)("ul",{children:T[c].map((function(e,t){return Object(g.jsx)("li",{children:e},t)}))})]})]})},S=c(36),C=c.n(S),A=c(48),w="FETCH_DATA_SUCCESS",k="CHANGE_CURRENCY",E=c(69),R=function e(){Object(E.a)(this,e)};R.fetchData=Object(A.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));var T,_,N=R,U=function(e){var t=0;return e.reduce((function(e,c){return"BTC"===c.ccy||e.push({curr:c.ccy,buy:Number(c.buy).toFixed(2),sell:Number(c.sale).toFixed(2),_id:t++}),e}),[])},D=c(29),I=c(72),B=c(141),F=c(144),H=c(143),J=c(142),Y=c(140),z=Object(l.a)((function(e){e.isActive;var t=Object(I.a)(e,["isActive"]);return Object(g.jsx)(Y.a,Object(D.a)({},t))}))(T||(T=Object(o.a)(["\n  transition: all .3s ease;\n  background: ",";\n  &:hover {\n    cursor: pointer;\n    background: #f1f1f1;\n  }\n"])),(function(e){return e.isActive?"#d1d1d1":"#fff"})),G=Object(l.a)(B.a)(_||(_=Object(o.a)(["\n  max-width: 300px;\n"]))),L=function(){var e=Object(u.f)(),t=Object(b.b)(),c=Object(b.c)((function(e){return e.app.data})),n=Object(b.c)((function(e){return e.app.currency})),r=function(c){var n;t((n=c,localStorage.setItem("currency",n),{type:k,payload:n})),e.push("/exchange")};return Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Choose your currency from the list below"}),Object(g.jsxs)(G,{size:"small","aria-label":"Exchange rates",children:[Object(g.jsx)(J.a,{children:Object(g.jsxs)(Y.a,{children:[Object(g.jsx)(H.a,{children:"Currency"}),Object(g.jsx)(H.a,{children:"Buy"}),Object(g.jsx)(H.a,{children:"Sell"})]})}),Object(g.jsx)(F.a,{children:c.map((function(e){return Object(g.jsxs)(z,{onClick:function(){return r(e.curr)},isActive:e.curr===n,children:[Object(g.jsx)(H.a,{component:"th",scope:"row",children:e.curr}),Object(g.jsx)(H.a,{children:e.buy}),Object(g.jsx)(H.a,{children:e.sell})]},e._id)}))})]})]})};var q=function(){var e=Object(b.b)();return Object(r.useEffect)((function(){e(function(){var e=Object(A.a)(C.a.mark((function e(t){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"FETCH_DATA_START"}),e.next=4,N.fetchData();case 4:c=e.sent,t((n=U(c),{type:w,payload:n})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"FETCH_DATA_ERROR"});case 11:case"end":return e.stop()}var n}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(g.jsx)("div",{children:Object(g.jsx)(s.a,{basename:"/Converter",children:Object(g.jsxs)(u.c,{children:[Object(g.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(g.jsx)(L,{})}}),Object(g.jsx)(u.a,{exact:!0,path:"/exchange",render:function(){return Object(g.jsx)(m,{})}})]})})})},K=c(51),M=c(70),P=c(71),Q=c.n(P),V={data:[],currency:localStorage.getItem("currency")||"USD"},W=Object(K.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(D.a)(Object(D.a)({},e),{},{data:t.payload});case k:return Object(D.a)(Object(D.a)({},e),{},{currency:t.payload});default:return e}}}),X=Object(K.c)(W,Object(K.a)(M.a,Q.a));i.a.render(Object(g.jsx)(b.a,{store:X,children:Object(g.jsx)(q,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.95ec6951.chunk.js.map