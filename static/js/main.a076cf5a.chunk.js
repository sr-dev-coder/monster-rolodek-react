(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(3),o=n.n(c),a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(0)),d=function(e){return Object(u.jsxs)("div",{class:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(u.jsx)("h1",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})},j=(n(15),function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e})}))})}),m=(n(16),function(e){var t=e.placeholer,n=e.handleChange;return Object(u.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=(n(17),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){return e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monster Rolodex"}),Object(u.jsx)(m,{placeholer:"SearchMonster...",handleChange:this.handleChange}),Object(u.jsx)(j,{monsters:r})]})}}]),n}(r.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.a076cf5a.chunk.js.map