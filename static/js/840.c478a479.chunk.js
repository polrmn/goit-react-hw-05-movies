"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[840],{840:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,s,c,i,o=t(861),u=t(439),p=t(757),d=t.n(p),l=t(791),f=t(87),h=t(689),x=t(465),v=t(168),g=t(444),m=(0,g.ZP)(f.rU)(r||(r=(0,v.Z)(["\n  display: block;\n  box-sizing: border-box;\n  padding: 15px;\n  margin: 15px;\n  position: fixed;\n  z-index: 1999;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 50px;\n  background-image: url('https://svgsilh.com/svg/97591.svg');\n  background-repeat: no-repeat;\n  background-size: 80%;\n  background-position: center;\n  border-radius: 50%;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.2);\n    border: 4px solid teal;    \n  }\n"]))),b=g.ZP.section(a||(a=(0,v.Z)(["\n  display: flex;\n  gap: 24px;\n  padding: 10px 0;\n"]))),k=g.ZP.ul(s||(s=(0,v.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),w=g.ZP.section(c||(c=(0,v.Z)(["\n\n"]))),j=g.ZP.ul(i||(i=(0,v.Z)(["\n  margin: 0;\n  padding: 20px 0;\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n  & > li {\n    max-width: 30%;\n    width: 100%;\n    padding: 4px;\n    text-align: center;\n    font-size: 20px;\n    font-weight: 500;\n    &:hover {\n      background: linear-gradient(30deg, teal, transparent);\n    }\n    & a {\n      display: block;\n      text-decoration: none;\n      color: #000;\n    }\n  }\n"]))),Z=t(184),y=function(){var n=(0,h.TH)(),e=(0,l.useState)({}),t=(0,u.Z)(e,2),r=t[0],a=t[1],s=(0,h.UO)().id;return(0,l.useEffect)((function(){var n=function(){var n=(0,o.Z)(d().mark((function n(){return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=a,n.next=3,(0,x.TP)(s);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[s]),(0,Z.jsxs)("main",{children:[(0,Z.jsx)(m,{to:n.state.back}),(0,Z.jsxs)(b,{children:[(0,Z.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w500".concat(r.poster_path):"https://skydomepictures.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png",alt:r.title}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h1",{children:r.title}),(0,Z.jsxs)(k,{children:[(0,Z.jsx)("li",{children:(0,Z.jsxs)("p",{children:["User score: ",Math.round(10*r.vote_average),"%"]})}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:r.overview})]}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)("h2",{children:"Genres"}),(0,Z.jsx)("p",{children:r.genres&&r.genres.map((function(n){return n.name})).join(" ")})]})]})]})]}),(0,Z.jsxs)(w,{children:[(0,Z.jsxs)(j,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(f.rU,{to:"cast",state:{back:n.state.back},children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(f.rU,{to:"reviews",state:{back:n.state.back},children:"Reviews"})})]}),(0,Z.jsx)(h.j3,{})]})]})}},465:function(n,e,t){t.d(e,{Df:function(){return o},M1:function(){return d},Ph:function(){return u},TP:function(){return p},jP:function(){return l}});var r=t(861),a=t(757),s=t.n(a),c=t(912),i="5e0ca358c6a85ef9a9e43b6452e61748";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=840.c478a479.chunk.js.map