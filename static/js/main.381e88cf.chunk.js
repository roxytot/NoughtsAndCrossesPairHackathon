(this["webpackJsonpclass-conversion"]=this["webpackJsonpclass-conversion"]||[]).push([[0],{13:function(e,n,c){},14:function(e,n,c){},15:function(e,n,c){"use strict";c.r(n);var t=c(0),s=c(1),a=c.n(s),r=c(7),i=c.n(r),l=(c(13),c(14),c(3)),o=c(5);var j=function(e){var n=e.value,c=e.handleClick;return Object(t.jsx)("button",{className:"square",onClick:c,children:n})};var u=function(e){var n=e.newGame;return Object(t.jsx)("button",{onClick:n,className:"reset-button",children:"New Game"})};function d(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<n.length;c++){var t=Object(o.a)(n[c],3),s=t[0],a=t[1],r=t[2];if(e[s]&&e[s]===e[a]&&e[s]===e[r])return e[s]}return null}var b=function(){var e=Object(s.useState)(Array(9).fill(null)),n=Object(o.a)(e,2),c=n[0],a=n[1],r=Object(s.useState)(!0),i=Object(o.a)(r,2),b=i[0],O=i[1];function h(e){return Object(t.jsx)(j,{value:c[e],handleClick:function(){return function(e){if(!d(c)&&!c[e]){if(!0===b){var n=[].concat(Object(l.a)(c.slice(0,e)),["X"],Object(l.a)(c.slice(e+1)));a(n)}else{var t=[].concat(Object(l.a)(c.slice(0,e)),["O"],Object(l.a)(c.slice(e+1)));a(t)}O(!b),console.log(c)}}(e)}})}console.log(c);var v,f=d(c);return v=f?"Winner: ".concat(f):!1===c.includes(null)?"No winner! Try again":"Next player: ".concat(b?"X":"O"),Object(t.jsxs)("div",{className:"grid-container",children:[Object(t.jsx)("div",{className:"status",children:v}),Object(t.jsxs)("div",{className:"board-row",children:[h(0),h(1),h(2)]}),Object(t.jsxs)("div",{className:"board-row",children:[h(3),h(4),h(5)]}),Object(t.jsxs)("div",{className:"board-row",children:[h(6),h(7),h(8)]}),Object(t.jsx)("div",{children:Object(t.jsx)(u,{newGame:function(){a(Array(9).fill(null)),O(!0)}})})]})};var O=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)("header",{className:"App-header",children:[Object(t.jsxs)("div",{className:"titles",children:[Object(t.jsx)("h1",{children:"Noughts and Crosses!"}),Object(t.jsx)("h5",{children:"Realistic tile shifting O's-and-X's game! Can you keep your calm, as the tiles spin?"})]}),Object(t.jsx)(b,{})]})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(n){var c=n.getCLS,t=n.getFID,s=n.getFCP,a=n.getLCP,r=n.getTTFB;c(e),t(e),s(e),a(e),r(e)}))};i.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(O,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.381e88cf.chunk.js.map