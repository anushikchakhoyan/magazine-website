"use strict";(self.webpackChunkmagazine_website=self.webpackChunkmagazine_website||[]).push([[989],{2399:function(t,e,n){n.d(e,{Z:function(){return i}});var s=n(1178),a=n(1523),r=n(184),c=function(t){var e=t.item,n=e.id,c=e.title,i=e.link,o=e.type,l=e.date,u=e.thumbnail,f=e.caption,m=e.hashtags;return(0,r.jsxs)("div",{className:"rounded overflow-hidden",children:[(0,r.jsx)(a.rU,{to:{pathname:"".concat(i,"/").concat(n),state:e},children:(0,r.jsx)("img",{className:"w-full object-cover",src:u,alt:c})}),(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsxs)("p",{className:"py-2 text-xs",children:[o," - ",l]}),(0,r.jsx)(a.rU,{to:{pathname:"".concat(i,"/").concat(n),state:e},children:(0,r.jsx)("p",{className:"font-bold text-base mb-1",children:c})}),(0,r.jsx)("p",{className:"text-gray-700 text-sm",children:f})]}),(0,r.jsx)("div",{className:"px-4 pt-2",children:(0,s.Z)(m,(function(t,e){return(0,r.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1\r text-sm font-semibold text-gray-700 mr-2 mb-2",children:["#",t]},e)}))})]})},i=function(t){var e=t.items;return(0,r.jsx)("div",{className:"grid gap-8 mx-4 justify-items-center",style:{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:(0,s.Z)(e,(function(t){return(0,r.jsx)(c,{item:t},t.id)}))})}},4533:function(t,e,n){var s=n(184);e.Z=function(t){var e=t.title,n=t.classnames;return(0,s.jsx)("h1",{className:"font-bold text-gray-700 text-3xl px-3 py-6 ".concat(n),children:e})}},5989:function(t,e,n){n.r(e);var s=n(6515),a=n(4890),r=n(2791),c=n(2020),i=n(4533),o=n(2399),l=n(821),u=n(184);e.default=function(){var t=(0,c.$)().t,e=(0,r.useState)([]),n=(0,a.Z)(e,2),f=n[0],m=n[1],d=(0,r.useState)(!1),p=(0,a.Z)(d,2),x=(p[0],p[1]);return(0,r.useEffect)((function(){!function(){var t=!0;t&&(x(!0),l.Z.getSportNews().then((function(e){var n=e.data.map((function(t){return(0,s.Z)((0,s.Z)({},t),{},{key:t.id})}));t&&m(n)})).catch((function(t){return console.log(t)})).finally((function(){return x(!1)})))}()}),[]),(0,u.jsxs)("div",{className:"pb-14",children:[(0,u.jsx)(i.Z,{title:t("titles.sport")}),(0,u.jsx)(o.Z,{items:f})]})}},821:function(t,e,n){n.d(e,{Z:function(){return r}});var s=n(4569),a=n.n(s)().create({baseURL:"http://localhost:8000",headers:{"Content-type":"application/json"}}),r={getNews:function(t){return a.get("/news",{params:t})},getSingleNews:function(t){return a.get("/news/".concat(t))},getSportNews:function(t){return a.get("/sport",{params:t})},getTechnologies:function(t){return a.get("/technologies",{params:t})},getFaqs:function(t){return a.get("/faqs",{params:t})}}}}]);
//# sourceMappingURL=989.a2394f83.chunk.js.map