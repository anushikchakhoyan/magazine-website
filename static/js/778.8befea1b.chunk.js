"use strict";(self.webpackChunkmagazine_website=self.webpackChunkmagazine_website||[]).push([[778],{1162:function(e,t,s){var n=s(2020),a=s(1523),r=s(184);t.Z=function(){var e=(0,n.$)().t;return(0,r.jsx)("section",{className:"pb-12 pt-20 mx-auto px-4 md:px-0",children:(0,r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,r.jsxs)("div",{className:"space-y-4 text-center",children:[(0,r.jsx)("h1",{className:"text-3xl text-red-500 font-semibold",children:e("newsletter.title")}),(0,r.jsx)("p",{className:"text-gray-800 leading-relaxed",children:e("newsletter.desc")})]}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"max-w-xl mx-auto flex items-center justify-center rounded-md\r border border-gray-200 p-0.5",children:[(0,r.jsx)("input",{type:"email",placeholder:e("newsletter.placeholder"),className:"text-gray-500 w-full p-2.5 outline-none"}),(0,r.jsx)("button",{className:"p-2.5 rounded-md text-white bg-red-500 outline-none shadow-md focus:shadow-none sm:px-5",children:e("newsletter.subscribe")})]}),(0,r.jsxs)("p",{className:"mt-3 mx-auto text-center max-w-lg text-sm text-gray-800",children:[e("newsletter.notSpam"),(0,r.jsx)(a.rU,{to:"/privacy",className:"underline",children:e("menu.privacy")})]})]})]})})}},4533:function(e,t,s){var n=s(184);t.Z=function(e){var t=e.title,s=e.note,a=e.classnames;return(0,n.jsxs)("div",{className:"px-3 space-y-2",children:[(0,n.jsx)("h1",{className:"font-medium text-gray-800 text-3xl secondary-font-family ".concat(a),children:t}),s&&(0,n.jsx)("p",{className:"text-gray-600 max-w-lg mx-auto text-lg whitespace-pre-wrap",children:s})]})}},8778:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var n=s(8489),a=s(3430),r=s(1178),c=s(8741),l=s(2020),i=s(2791),m=s(1162),u=s(8617),o=s(6856),x=s(9126),d=s(184),p=function(e){var t=e.href,s=e.title,n=e.type,a=e.desc,r=e.date,c=e.location;return(0,d.jsx)("li",{className:"p-5 my-8 bg-gray-100 rounded-md shadow-lg",children:(0,d.jsxs)("a",{href:t,children:[(0,d.jsxs)("div",{className:"justify-between sm:flex space-y-2",children:[(0,d.jsxs)("div",{className:"flex-1",children:[(0,d.jsx)("h3",{className:"text-xl font-medium text-red-600",children:s}),(0,d.jsx)("p",{className:"text-gray-500 my-2 pr-2",children:a})]}),(0,d.jsx)("div",{className:"mt-5 space-y-4 text-sm sm:space-y-2",children:(0,d.jsxs)("span",{className:"flex items-center text-gray-500",children:[(0,d.jsx)(x.Cb4,{className:"h-5 w-5 mr-2"}),r]})})]}),(0,d.jsxs)("div",{className:"items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0",children:[(0,d.jsxs)("span",{className:"flex items-center text-gray-500",children:[(0,d.jsx)(u.Vj9,{className:"h-5 w-5 mr-2"}),n]}),(0,d.jsxs)("span",{className:"flex items-center text-gray-500",children:[(0,d.jsx)(o.$0r,{className:"h-5 w-5 mr-2"}),c]})]})]})})},f=s(4533),h=s(821),g=function(){var e=(0,l.$)().t,t=(0,i.useState)(!1),s=(0,a.Z)(t,2),u=s[0],o=s[1],x=(0,i.useState)([]),g=(0,a.Z)(x,2),j=g[0],y=g[1],w=(0,i.useMemo)((function(){return u?(0,r.Z)(j,(function(){return(0,d.jsx)("div",{className:"m-8",children:(0,d.jsx)(c.Z,{height:118,animation:"wave",variant:"rectangular",className:"w-full rounded"})})})):j?(0,d.jsx)("ul",{children:j.map((function(e,t){return(0,i.createElement)(p,(0,n.Z)((0,n.Z)({},e),{},{key:t}))}))}):null}),[u,j]);return(0,i.useEffect)((function(){!function(){var e=!0;e&&(o(!0),h.Z.getTechnologies().then((function(t){var s=t.data.map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{key:e.id})}));e&&y(s)})).catch((function(e){return console.log(e)})).finally((function(){return o(!1)})))}()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"max-w-layout pt-8",children:[(0,d.jsx)(f.Z,{title:e("titles.recommended")}),w]}),(0,d.jsx)(m.Z,{})]})}},821:function(e,t,s){s.d(t,{Z:function(){return r}});var n=s(4569),a=s.n(n)().create({baseURL:"https://magazine-website-server.herokuapp.com",headers:{"Content-type":"application/json"}}),r={getNews:function(e){return a.get("/news",{params:e})},getSingleNews:function(e){return a.get("/news/".concat(e))},getSportNews:function(e){return a.get("/sport",{params:e})},getTechnologies:function(e){return a.get("/technologies",{params:e})},getFaqs:function(e){return a.get("/faqs",{params:e})},getPrivacy:function(e){return a.get("/privacy",{params:e})},getTerms:function(e){return a.get("/privacy",{params:e})},getMarquee:function(e){return a.get("/marquee",{params:e})}}}}]);
//# sourceMappingURL=778.8befea1b.chunk.js.map