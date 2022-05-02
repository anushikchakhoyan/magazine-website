"use strict";(self.webpackChunkmagazine_website=self.webpackChunkmagazine_website||[]).push([[701],{6701:function(e,t,o){o.d(t,{Z:function(){return U}});var a=o(7462),i=o(2791),n=o(3366),r=o(8182),l=o(767),s=o(7),c=o(4301),d=o(208);function u(e){return(0,c.Z)("MuiPagination",e)}(0,d.Z)("MuiPagination",["root","ul","outlined","text"]);var p=o(5531),v=o(3430),m=o(8959),g=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var h=o(6222),f=o(48);function b(e){return(0,c.Z)("MuiPaginationItem",e)}var x=(0,d.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),Z=o(3967),y=o(533),z=o(4036),S=o(9201),w=o(184),P=(0,S.Z)((0,w.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),C=(0,S.Z)((0,w.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),R=(0,S.Z)((0,w.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),N=(0,S.Z)((0,w.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),B=o(2973),M=["className","color","component","components","disabled","page","selected","shape","size","type","variant"],k=function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["size".concat((0,z.Z)(o.size))],"text"===o.variant&&t["text".concat((0,z.Z)(o.color))],"outlined"===o.variant&&t["outlined".concat((0,z.Z)(o.color))],"rounded"===o.shape&&t.rounded,"page"===o.type&&t.page,("start-ellipsis"===o.type||"end-ellipsis"===o.type)&&t.ellipsis,("previous"===o.type||"next"===o.type)&&t.previousNext,("first"===o.type||"last"===o.type)&&t.firstLast]},L=(0,B.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:k})((function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({},t.typography.body2,(0,h.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:t.palette.text.primary,height:"auto"},"&.".concat(x.disabled),{opacity:t.palette.action.disabledOpacity}),"small"===o.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===o.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)})})),I=(0,B.ZP)(y.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:k})((function(e){var t,o,i=e.theme,n=e.ownerState;return(0,a.Z)({},i.typography.body2,(o={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:i.palette.text.primary},(0,h.Z)(o,"&.".concat(x.focusVisible),{backgroundColor:i.palette.action.focus}),(0,h.Z)(o,"&.".concat(x.disabled),{opacity:i.palette.action.disabledOpacity}),(0,h.Z)(o,"transition",i.transitions.create(["color","background-color"],{duration:i.transitions.duration.short})),(0,h.Z)(o,"&:hover",{backgroundColor:i.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,h.Z)(o,"&.".concat(x.selected),(t={backgroundColor:i.palette.action.selected,"&:hover":{backgroundColor:(0,f.Fq)(i.palette.action.selected,i.palette.action.selectedOpacity+i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:i.palette.action.selected}}},(0,h.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:(0,f.Fq)(i.palette.action.selected,i.palette.action.selectedOpacity+i.palette.action.focusOpacity)}),(0,h.Z)(t,"&.".concat(x.disabled),{opacity:1,color:i.palette.action.disabled,backgroundColor:i.palette.action.selected}),t)),o),"small"===n.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===n.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:i.typography.pxToRem(15)},"rounded"===n.shape&&{borderRadius:i.shape.borderRadius})}),(function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({},"text"===o.variant&&(0,h.Z)({},"&.".concat(x.selected),(0,a.Z)({},"standard"!==o.color&&(0,h.Z)({color:t.palette[o.color].contrastText,backgroundColor:t.palette[o.color].main,"&:hover":{backgroundColor:t.palette[o.color].dark,"@media (hover: none)":{backgroundColor:t.palette[o.color].main}}},"&.".concat(x.focusVisible),{backgroundColor:t.palette[o.color].dark}),(0,h.Z)({},"&.".concat(x.disabled),{color:t.palette.action.disabled}))),"outlined"===o.variant&&(0,h.Z)({border:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(x.selected),(0,a.Z)({},"standard"!==o.color&&(0,h.Z)({color:t.palette[o.color].main,border:"1px solid ".concat((0,f.Fq)(t.palette[o.color].main,.5)),backgroundColor:(0,f.Fq)(t.palette[o.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:(0,f.Fq)(t.palette[o.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.focusVisible),{backgroundColor:(0,f.Fq)(t.palette[o.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}),(0,h.Z)({},"&.".concat(x.disabled),{borderColor:t.palette.action.disabledBackground,color:t.palette.action.disabled}))))})),j=(0,B.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(e,t){return t.icon}})((function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},"small"===o.size&&{fontSize:t.typography.pxToRem(18)},"large"===o.size&&{fontSize:t.typography.pxToRem(22)})})),F=i.forwardRef((function(e,t){var o=(0,s.Z)({props:e,name:"MuiPaginationItem"}),i=o.className,c=o.color,d=void 0===c?"standard":c,u=o.component,p=o.components,v=void 0===p?{first:P,last:C,next:N,previous:R}:p,m=o.disabled,g=void 0!==m&&m,h=o.page,f=o.selected,x=void 0!==f&&f,y=o.shape,S=void 0===y?"circular":y,B=o.size,k=void 0===B?"medium":B,F=o.type,O=void 0===F?"page":F,T=o.variant,A=void 0===T?"text":T,V=(0,n.Z)(o,M),W=(0,a.Z)({},o,{color:d,disabled:g,selected:x,shape:S,size:k,type:O,variant:A}),q=(0,Z.Z)(),G=function(e){var t=e.classes,o=e.color,a=e.disabled,i=e.selected,n=e.size,r=e.shape,s=e.type,c=e.variant,d={root:["root","size".concat((0,z.Z)(n)),c,r,"standard"!==o&&"".concat(c).concat((0,z.Z)(o)),a&&"disabled",i&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,l.Z)(d,b,t)}(W),U=("rtl"===q.direction?{previous:v.next||N,next:v.previous||R,last:v.first||P,first:v.last||C}:{previous:v.previous||R,next:v.next||N,first:v.first||P,last:v.last||C})[O];return"start-ellipsis"===O||"end-ellipsis"===O?(0,w.jsx)(L,{ref:t,ownerState:W,className:(0,r.Z)(G.root,i),children:"\u2026"}):(0,w.jsxs)(I,(0,a.Z)({ref:t,ownerState:W,component:u,disabled:g,className:(0,r.Z)(G.root,i)},V,{children:["page"===O&&h,U?(0,w.jsx)(j,{as:U,ownerState:W,className:G.icon}):null]}))})),O=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],T=(0,B.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant]]}})({}),A=(0,B.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(e,t){return t.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function V(e,t,o){return"page"===e?"".concat(o?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var W=i.forwardRef((function(e,t){var o=(0,s.Z)({props:e,name:"MuiPagination"}),i=o.boundaryCount,c=void 0===i?1:i,d=o.className,h=o.color,f=void 0===h?"standard":h,b=o.count,x=void 0===b?1:b,Z=o.defaultPage,y=void 0===Z?1:Z,z=o.disabled,S=void 0!==z&&z,P=o.getItemAriaLabel,C=void 0===P?V:P,R=o.hideNextButton,N=void 0!==R&&R,B=o.hidePrevButton,M=void 0!==B&&B,k=o.renderItem,L=void 0===k?function(e){return(0,w.jsx)(F,(0,a.Z)({},e))}:k,I=o.shape,j=void 0===I?"circular":I,W=o.showFirstButton,q=void 0!==W&&W,G=o.showLastButton,U=void 0!==G&&G,_=o.siblingCount,D=void 0===_?1:_,E=o.size,H=void 0===E?"medium":E,Y=o.variant,J=void 0===Y?"text":Y,K=(0,n.Z)(o,O),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,o=void 0===t?1:t,i=e.componentName,r=void 0===i?"usePagination":i,l=e.count,s=void 0===l?1:l,c=e.defaultPage,d=void 0===c?1:c,u=e.disabled,h=void 0!==u&&u,f=e.hideNextButton,b=void 0!==f&&f,x=e.hidePrevButton,Z=void 0!==x&&x,y=e.onChange,z=e.page,S=e.showFirstButton,w=void 0!==S&&S,P=e.showLastButton,C=void 0!==P&&P,R=e.siblingCount,N=void 0===R?1:R,B=(0,n.Z)(e,g),M=(0,m.Z)({controlled:z,default:d,name:r,state:"page"}),k=(0,v.Z)(M,2),L=k[0],I=k[1],j=function(e,t){z||I(t),y&&y(e,t)},F=function(e,t){var o=t-e+1;return Array.from({length:o},(function(t,o){return e+o}))},O=F(1,Math.min(o,s)),T=F(Math.max(s-o+1,o+1),s),A=Math.max(Math.min(L-N,s-o-2*N-1),o+2),V=Math.min(Math.max(L+N,o+2*N+2),T.length>0?T[0]-2:s-1),W=[].concat((0,p.Z)(w?["first"]:[]),(0,p.Z)(Z?[]:["previous"]),(0,p.Z)(O),(0,p.Z)(A>o+2?["start-ellipsis"]:o+1<s-o?[o+1]:[]),(0,p.Z)(F(A,V)),(0,p.Z)(V<s-o-1?["end-ellipsis"]:s-o>o?[s-o]:[]),(0,p.Z)(T),(0,p.Z)(b?[]:["next"]),(0,p.Z)(C?["last"]:[])),q=function(e){switch(e){case"first":return 1;case"previous":return L-1;case"next":return L+1;case"last":return s;default:return null}},G=W.map((function(e){return"number"===typeof e?{onClick:function(t){j(t,e)},type:"page",page:e,selected:e===L,disabled:h,"aria-current":e===L?"true":void 0}:{onClick:function(t){j(t,q(e))},type:e,page:q(e),selected:!1,disabled:h||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?L>=s:L<=1)}}));return(0,a.Z)({items:G},B)}((0,a.Z)({},o,{componentName:"Pagination"})),X=Q.items,$=(0,a.Z)({},o,{boundaryCount:c,color:f,count:x,defaultPage:y,disabled:S,getItemAriaLabel:C,hideNextButton:N,hidePrevButton:M,renderItem:L,shape:j,showFirstButton:q,showLastButton:U,siblingCount:D,size:H,variant:J}),ee=function(e){var t=e.classes,o={root:["root",e.variant],ul:["ul"]};return(0,l.Z)(o,u,t)}($);return(0,w.jsx)(T,(0,a.Z)({"aria-label":"pagination navigation",className:(0,r.Z)(ee.root,d),ownerState:$,ref:t},K,{children:(0,w.jsx)(A,{className:ee.ul,ownerState:$,children:X.map((function(e,t){return(0,w.jsx)("li",{children:L((0,a.Z)({},e,{color:f,"aria-label":C(e.type,e.page,e.selected),shape:j,size:H,variant:J}))},t)}))})}))})),q=W,G=!1,U=i.forwardRef((function(e,t){return G||(console.warn(["MUI: The Pagination component was moved from the lab to the core.","","You should use `import { Pagination } from '@mui/material'`","or `import Pagination from '@mui/material/Pagination'`"].join("\n")),G=!0),(0,w.jsx)(q,(0,a.Z)({ref:t},e))}))},9201:function(e,t,o){o.d(t,{Z:function(){return b}});var a=o(7462),i=o(2791),n=o(3366),r=o(8182),l=o(767),s=o(4036),c=o(7),d=o(2973),u=o(4301);function p(e){return(0,u.Z)("MuiSvgIcon",e)}(0,o(208).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=o(184),m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,"inherit"!==o.color&&t["color".concat((0,s.Z)(o.color))],t["fontSize".concat((0,s.Z)(o.fontSize))]]}})((function(e){var t,o,a,i,n,r,l,s,c,d,u,p,v,m,g,h,f,b=e.theme,x=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=b.transitions)||null==(o=t.create)?void 0:o.call(t,"fill",{duration:null==(a=b.transitions)||null==(i=a.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(n=b.typography)||null==(r=n.pxToRem)?void 0:r.call(n,20))||"1.25rem",medium:(null==(l=b.typography)||null==(s=l.pxToRem)?void 0:s.call(l,24))||"1.5rem",large:(null==(c=b.typography)||null==(d=c.pxToRem)?void 0:d.call(c,35))||"2.1875"}[x.fontSize],color:null!=(u=null==(p=b.palette)||null==(v=p[x.color])?void 0:v.main)?u:{action:null==(m=b.palette)||null==(g=m.action)?void 0:g.active,disabled:null==(h=b.palette)||null==(f=h.action)?void 0:f.disabled,inherit:void 0}[x.color]}})),h=i.forwardRef((function(e,t){var o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),i=o.children,d=o.className,u=o.color,h=void 0===u?"inherit":u,f=o.component,b=void 0===f?"svg":f,x=o.fontSize,Z=void 0===x?"medium":x,y=o.htmlColor,z=o.inheritViewBox,S=void 0!==z&&z,w=o.titleAccess,P=o.viewBox,C=void 0===P?"0 0 24 24":P,R=(0,n.Z)(o,m),N=(0,a.Z)({},o,{color:h,component:b,fontSize:Z,instanceFontSize:e.fontSize,inheritViewBox:S,viewBox:C}),B={};S||(B.viewBox=C);var M=function(e){var t=e.color,o=e.fontSize,a=e.classes,i={root:["root","inherit"!==t&&"color".concat((0,s.Z)(t)),"fontSize".concat((0,s.Z)(o))]};return(0,l.Z)(i,p,a)}(N);return(0,v.jsxs)(g,(0,a.Z)({as:b,className:(0,r.Z)(M.root,d),ownerState:N,focusable:"false",color:y,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:t},B,R,{children:[i,w?(0,v.jsx)("title",{children:w}):null]}))}));h.muiName="SvgIcon";var f=h;function b(e,t){var o=function(o,i){return(0,v.jsx)(f,(0,a.Z)({"data-testid":"".concat(t,"Icon"),ref:i},o,{children:e}))};return o.muiName=f.muiName,i.memo(i.forwardRef(o))}}}]);
//# sourceMappingURL=701.79281909.chunk.js.map