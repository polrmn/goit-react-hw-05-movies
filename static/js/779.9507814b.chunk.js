"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e,a=r(861),c=r(439),u=r(757),i=r.n(u),s=r(791),o=r(689),p=r(465),f=r(168),l=r(444).ZP.ul(e||(e=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  & > li {\n    display: flex;\n    max-width: 100%;\n    flex-direction: column;\n    gap: 12px;\n    text-align: start;\n    border-bottom: 4px solid teal;\n    & > h2 {\n      margin: 0;\n    }\n    & > p {\n      margin: 0;\n    }\n  }\n"]))),d=r(184),v=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],u=(0,o.UO)().id;return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.jP)(u);case 2:t=n.sent,r=t.slice(0,10),e(r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[u]),(0,d.jsx)(l,{children:r.map((function(n){return(0,d.jsxs)("li",{children:[(0,d.jsx)("h2",{children:n.author}),(0,d.jsx)("p",{children:n.content})]},n.id)}))})}},465:function(n,t,r){r.d(t,{Df:function(){return s},M1:function(){return f},Ph:function(){return o},TP:function(){return p},jP:function(){return l}});var e=r(861),a=r(757),c=r.n(a),u=r(912),i="5e0ca358c6a85ef9a9e43b6452e61748";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.9507814b.chunk.js.map