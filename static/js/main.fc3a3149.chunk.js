(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),r=c.n(a),j=c(0),o=function(){return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Guess My Number!"}),Object(j.jsx)("p",{className:"between",children:"(Between 1 and 20)"})]})},i=c(2),b=function(){var e=Object(n.useState)("?"),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)("20"),r=Object(i.a)(a,2),o=r[0],b=r[1],u=Object(n.useState)("0"),l=Object(i.a)(u,2),h=l[0],O=l[1],m=Object(n.useState)("Start guessing..."),d=Object(i.a)(m,2),g=d[0],x=d[1],N=Object(n.useState)(""),p=Object(i.a)(N,2),f=p[0],S=p[1],v=Object(n.useState)(+Math.trunc(20*Math.random())+1),C=Object(i.a)(v,2),k=C[0],M=C[1],w=Object(n.useState)(!1),F=Object(i.a)(w,2),T=F[0],y=F[1];return Object(j.jsxs)("main",{className:"".concat(T?"correct":""),children:[Object(j.jsx)("button",{className:"btn again",onClick:function(){M(Math.trunc(20*Math.random())+1),s("?"),b("20"),x("Start guessing..."),S(""),y(!1),o>h&&O(o)},children:"Again!"}),Object(j.jsx)("div",{className:"number ".concat(T?"correctNum":""),children:c}),Object(j.jsxs)("section",{className:"left",children:[Object(j.jsx)("input",{type:"number",className:"guess",onChange:function(e){S(Number(e.target.value))},value:f,pattern:"[0-9]"}),Object(j.jsx)("button",{className:"btn check",onClick:function(){console.log(k),console.log(f),f!==k&&(o>0?(x(f>k?"\ud83d\udcc8 Too high!":"\ud83d\udcc9 Too low!"),b((function(e){return e-1}))):0===o&&(x("\ud83d\udca5 You lost the game!"),b("20"))),Number(f)<=0||Number(f)>20?(x("\u26d4\ufe0f Incorrect!"),b((function(e){return e+1}))):f===k&&(x("\ud83c\udf89 Correct Number!"),y(!0),O(o),s(k))},children:"Check!"})]}),Object(j.jsxs)("section",{className:"right",children:[Object(j.jsx)("p",{className:"message",children:g}),Object(j.jsxs)("p",{className:"label-score",children:["\ud83d\udcaf Score: ",Object(j.jsx)("span",{className:"score",children:o})]}),Object(j.jsxs)("p",{className:"label-highscore",children:["\ud83e\udd47 Highscore: ",Object(j.jsx)("span",{className:"highscore",children:h})]})]})]})};c(10);var u=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsx)(b,{})]})},l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),l()}},[[11,1,2]]]);
//# sourceMappingURL=main.fc3a3149.chunk.js.map