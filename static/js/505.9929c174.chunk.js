/*! For license information please see 505.9929c174.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmagazine_website=self.webpackChunkmagazine_website||[]).push([[505],{3449:function(e,t,r){r.d(t,{ZP:function(){return a},_i:function(){return c},pQ:function(){return u},uU:function(){return s}});var o=r(3430),n=r(2791),i=r(184),l=n.createContext(null);function a(e){var t=e.children,r=e.value,a=function(){var e=n.useState(null),t=(0,o.Z)(e,2),r=t[0],i=t[1];return n.useEffect((function(){i("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),r}(),c=n.useMemo((function(){return{idPrefix:a,value:r}}),[a,r]);return(0,i.jsx)(l.Provider,{value:c,children:t})}function c(){return n.useContext(l)}function s(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function u(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}},5267:function(e,t,r){r.d(t,{Z:function(){return ee}});var o,n=r(7462),i=r(3366),l=r(2791),a=r(3430),c=r(6222),s=(r(7441),r(8182)),u=r(767),d=r(2973),f=r(7),v=r(3967),b=r(3199);function p(){if(o)return o;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),o="reverse",e.scrollLeft>0?o="default":(e.scrollLeft=1,0===e.scrollLeft&&(o="negative")),document.body.removeChild(e),o}function h(e,t){var r=e.scrollLeft;if("rtl"!==t)return r;switch(p()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function w(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},i=o.ease,l=void 0===i?m:i,a=o.duration,c=void 0===a?300:a,s=null,u=t[e],d=!1,f=function(){d=!0},v=function o(i){if(d)n(new Error("Animation cancelled"));else{null===s&&(s=i);var a=Math.min(1,(i-s)/c);t[e]=l(a)*(r-u)+u,a>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(o)}};return u===r?(n(new Error("Element already at target position")),f):(requestAnimationFrame(v),f)}var Z=r(7602),x=r(184),g=["onChange"],C={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var S=r(9201),y=(0,S.Z)((0,x.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),M=(0,S.Z)((0,x.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),B=r(533),W=r(4301),T=r(208);function E(e){return(0,W.Z)("MuiTabScrollButton",e)}var P,R,N=(0,T.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),k=["className","direction","orientation","disabled"],z=(0,d.ZP)(B.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.orientation&&t[r.orientation]]}})((function(e){var t=e.ownerState;return(0,n.Z)((0,c.Z)({width:40,flexShrink:0,opacity:.8},"&.".concat(N.disabled),{opacity:0}),"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),L=l.forwardRef((function(e,t){var r=(0,f.Z)({props:e,name:"MuiTabScrollButton"}),o=r.className,l=r.direction,a=(0,i.Z)(r,k),c="rtl"===(0,v.Z)().direction,d=(0,n.Z)({isRtl:c},r),b=function(e){var t=e.classes,r={root:["root",e.orientation,e.disabled&&"disabled"]};return(0,u.Z)(r,E,t)}(d);return(0,x.jsx)(z,(0,n.Z)({component:"div",className:(0,s.Z)(b.root,o),ref:t,role:null,ownerState:d,tabIndex:null},a,{children:"left"===l?P||(P=(0,x.jsx)(y,{fontSize:"small"})):R||(R=(0,x.jsx)(M,{fontSize:"small"}))}))})),j=r(9683);function F(e){return(0,W.Z)("MuiTabs",e)}var H=(0,T.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),A=r(8301),I=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],X=function(e,t){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild},_=function(e,t){return e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild},V=function(e,t,r){for(var o=!1,n=r(e,t);n;){if(n===e.firstChild){if(o)return;o=!0}var i=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!i)return void n.focus();n=r(e,n)}},Y=(0,d.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,c.Z)({},"& .".concat(H.scrollButtons),t.scrollButtons),(0,c.Z)({},"& .".concat(H.scrollButtons),r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile),t.root,r.vertical&&t.vertical]}})((function(e){var t=e.ownerState,r=e.theme;return(0,n.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&(0,c.Z)({},"& .".concat(H.scrollButtons),(0,c.Z)({},r.breakpoints.down("sm"),{display:"none"})))})),D=(0,d.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:function(e,t){var r=e.ownerState;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})((function(e){var t=e.ownerState;return(0,n.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),q=(0,d.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:function(e,t){var r=e.ownerState;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})((function(e){var t=e.ownerState;return(0,n.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),O=(0,d.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:function(e,t){return t.indicator}})((function(e){var t=e.ownerState,r=e.theme;return(0,n.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:r.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:r.palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:r.palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),$=(0,d.ZP)((function(e){var t=e.onChange,r=(0,i.Z)(e,g),o=l.useRef(),a=l.useRef(null),c=function(){o.current=a.current.offsetHeight-a.current.clientHeight};return l.useEffect((function(){var e=(0,b.Z)((function(){var e=o.current;c(),e!==o.current&&t(o.current)})),r=(0,Z.Z)(a.current);return r.addEventListener("resize",e),function(){e.clear(),r.removeEventListener("resize",e)}}),[t]),l.useEffect((function(){c(),t(o.current)}),[t]),(0,x.jsx)("div",(0,n.Z)({style:C,ref:a},r))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),U={},K=l.forwardRef((function(e,t){var r=(0,f.Z)({props:e,name:"MuiTabs"}),o=(0,v.Z)(),d="rtl"===o.direction,m=r["aria-label"],g=r["aria-labelledby"],C=r.action,S=r.centered,y=void 0!==S&&S,M=r.children,B=r.className,W=r.component,T=void 0===W?"div":W,E=r.allowScrollButtonsMobile,P=void 0!==E&&E,R=r.indicatorColor,N=void 0===R?"primary":R,k=r.onChange,z=r.orientation,H=void 0===z?"horizontal":z,K=r.ScrollButtonComponent,Q=void 0===K?L:K,G=r.scrollButtons,J=void 0===G?"auto":G,ee=r.selectionFollowsFocus,te=r.TabIndicatorProps,re=void 0===te?{}:te,oe=r.TabScrollButtonProps,ne=void 0===oe?{}:oe,ie=r.textColor,le=void 0===ie?"primary":ie,ae=r.value,ce=r.variant,se=void 0===ce?"standard":ce,ue=r.visibleScrollbar,de=void 0!==ue&&ue,fe=(0,i.Z)(r,I),ve="scrollable"===se,be="vertical"===H,pe=be?"scrollTop":"scrollLeft",he=be?"top":"left",me=be?"bottom":"right",we=be?"clientHeight":"clientWidth",Ze=be?"height":"width",xe=(0,n.Z)({},r,{component:T,allowScrollButtonsMobile:P,indicatorColor:N,orientation:H,vertical:be,scrollButtons:J,textColor:le,variant:se,visibleScrollbar:de,fixed:!ve,hideScrollbar:ve&&!de,scrollableX:ve&&!be,scrollableY:ve&&be,centered:y&&!ve,scrollButtonsHideMobile:!P}),ge=function(e){var t=e.vertical,r=e.fixed,o=e.hideScrollbar,n=e.scrollableX,i=e.scrollableY,l=e.centered,a=e.scrollButtonsHideMobile,c=e.classes,s={root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",o&&"hideScrollbar",n&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",l&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[o&&"hideScrollbar"]};return(0,u.Z)(s,F,c)}(xe);var Ce=l.useState(!1),Se=(0,a.Z)(Ce,2),ye=Se[0],Me=Se[1],Be=l.useState(U),We=(0,a.Z)(Be,2),Te=We[0],Ee=We[1],Pe=l.useState({start:!1,end:!1}),Re=(0,a.Z)(Pe,2),Ne=Re[0],ke=Re[1],ze=l.useState({overflow:"hidden",scrollbarWidth:0}),Le=(0,a.Z)(ze,2),je=Le[0],Fe=Le[1],He=new Map,Ae=l.useRef(null),Ie=l.useRef(null),Xe=function(){var e,t,r=Ae.current;if(r){var n=r.getBoundingClientRect();e={clientWidth:r.clientWidth,scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollLeftNormalized:h(r,o.direction),scrollWidth:r.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}if(r&&!1!==ae){var i=Ie.current.children;if(i.length>0){var l=i[He.get(ae)];0,t=l?l.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},_e=(0,j.Z)((function(){var e,t,r=Xe(),o=r.tabsMeta,n=r.tabMeta,i=0;if(be)t="top",n&&o&&(i=n.top-o.top+o.scrollTop);else if(t=d?"right":"left",n&&o){var l=d?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(d?-1:1)*(n[t]-o[t]+l)}var a=(e={},(0,c.Z)(e,t,i),(0,c.Z)(e,Ze,n?n[Ze]:0),e);if(isNaN(Te[t])||isNaN(Te[Ze]))Ee(a);else{var s=Math.abs(Te[t]-a[t]),u=Math.abs(Te[Ze]-a[Ze]);(s>=1||u>=1)&&Ee(a)}})),Ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.animation,n=void 0===r||r;n?w(pe,Ae.current,e,{duration:o.transitions.duration.standard}):Ae.current[pe]=e},Ye=function(e){var t=Ae.current[pe];be?t+=e:(t+=e*(d?-1:1),t*=d&&"reverse"===p()?-1:1),Ve(t)},De=function(){for(var e=Ae.current[we],t=0,r=Array.from(Ie.current.children),o=0;o<r.length;o+=1){var n=r[o];if(t+n[we]>e)break;t+=n[we]}return t},qe=function(){Ye(-1*De())},Oe=function(){Ye(De())},$e=l.useCallback((function(e){Fe({overflow:null,scrollbarWidth:e})}),[]),Ue=(0,j.Z)((function(e){var t=Xe(),r=t.tabsMeta,o=t.tabMeta;if(o&&r)if(o[he]<r[he]){var n=r[pe]+(o[he]-r[he]);Ve(n,{animation:e})}else if(o[me]>r[me]){var i=r[pe]+(o[me]-r[me]);Ve(i,{animation:e})}})),Ke=(0,j.Z)((function(){if(ve&&!1!==J){var e,t,r=Ae.current,n=r.scrollTop,i=r.scrollHeight,l=r.clientHeight,a=r.scrollWidth,c=r.clientWidth;if(be)e=n>1,t=n<i-l-1;else{var s=h(Ae.current,o.direction);e=d?s<a-c-1:s>1,t=d?s>1:s<a-c-1}e===Ne.start&&t===Ne.end||ke({start:e,end:t})}}));l.useEffect((function(){var e,t=(0,b.Z)((function(){_e(),Ke()})),r=(0,Z.Z)(Ae.current);return r.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t),Array.from(Ie.current.children).forEach((function(t){e.observe(t)}))),function(){t.clear(),r.removeEventListener("resize",t),e&&e.disconnect()}}),[_e,Ke]);var Qe=l.useMemo((function(){return(0,b.Z)((function(){Ke()}))}),[Ke]);l.useEffect((function(){return function(){Qe.clear()}}),[Qe]),l.useEffect((function(){Me(!0)}),[]),l.useEffect((function(){_e(),Ke()})),l.useEffect((function(){Ue(U!==Te)}),[Ue,Te]),l.useImperativeHandle(C,(function(){return{updateIndicator:_e,updateScrollButtons:Ke}}),[_e,Ke]);var Ge=(0,x.jsx)(O,(0,n.Z)({},re,{className:(0,s.Z)(ge.indicator,re.className),ownerState:xe,style:(0,n.Z)({},Te,re.style)})),Je=0,et=l.Children.map(M,(function(e){if(!l.isValidElement(e))return null;var t=void 0===e.props.value?Je:e.props.value;He.set(t,Je);var r=t===ae;return Je+=1,l.cloneElement(e,(0,n.Z)({fullWidth:"fullWidth"===se,indicator:r&&!ye&&Ge,selected:r,selectionFollowsFocus:ee,onChange:k,textColor:le,value:t},1!==Je||!1!==ae||e.props.tabIndex?{}:{tabIndex:0}))})),tt=function(){var e={};e.scrollbarSizeListener=ve?(0,x.jsx)($,{onChange:$e,className:(0,s.Z)(ge.scrollableX,ge.hideScrollbar)}):null;var t=Ne.start||Ne.end,r=ve&&("auto"===J&&t||!0===J);return e.scrollButtonStart=r?(0,x.jsx)(Q,(0,n.Z)({orientation:H,direction:d?"right":"left",onClick:qe,disabled:!Ne.start},ne,{className:(0,s.Z)(ge.scrollButtons,ne.className)})):null,e.scrollButtonEnd=r?(0,x.jsx)(Q,(0,n.Z)({orientation:H,direction:d?"left":"right",onClick:Oe,disabled:!Ne.end},ne,{className:(0,s.Z)(ge.scrollButtons,ne.className)})):null,e}();return(0,x.jsxs)(Y,(0,n.Z)({className:(0,s.Z)(ge.root,B),ownerState:xe,ref:t,as:T},fe,{children:[tt.scrollButtonStart,tt.scrollbarSizeListener,(0,x.jsxs)(D,{className:ge.scroller,ownerState:xe,style:(0,c.Z)({overflow:je.overflow},be?"margin".concat(d?"Left":"Right"):"marginBottom",de?void 0:-je.scrollbarWidth),ref:Ae,onScroll:Qe,children:[(0,x.jsx)(q,{"aria-label":m,"aria-labelledby":g,"aria-orientation":"vertical"===H?"vertical":null,className:ge.flexContainer,ownerState:xe,onKeyDown:function(e){var t=Ie.current,r=(0,A.Z)(t).activeElement;if("tab"===r.getAttribute("role")){var o="horizontal"===H?"ArrowLeft":"ArrowUp",n="horizontal"===H?"ArrowRight":"ArrowDown";switch("horizontal"===H&&d&&(o="ArrowRight",n="ArrowLeft"),e.key){case o:e.preventDefault(),V(t,r,_);break;case n:e.preventDefault(),V(t,r,X);break;case"Home":e.preventDefault(),V(t,null,X);break;case"End":e.preventDefault(),V(t,null,_)}}},ref:Ie,role:"tablist",children:et}),ye&&Ge]}),tt.scrollButtonEnd]}))})),Q=K,G=r(3449),J=["children"],ee=l.forwardRef((function(e,t){var r=e.children,o=(0,i.Z)(e,J),a=(0,G._i)();if(null===a)throw new TypeError("No TabContext provided");var c=l.Children.map(r,(function(e){return l.isValidElement(e)?l.cloneElement(e,{"aria-controls":(0,G.uU)(a,e.props.value),id:(0,G.pQ)(a,e.props.value)}):null}));return(0,x.jsx)(Q,(0,n.Z)({},o,{ref:t,value:a.value,children:c}))}))},6894:function(e,t,r){r.d(t,{Z:function(){return Z}});var o=r(7462),n=r(3366),i=r(2791),l=r(8182),a=r(2973),c=r(7);var s=function(e){return e},u=function(){var e=s;return{configure:function(t){e=t},generate:function(t){return e(t)},reset:function(){e=s}}}(),d={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function f(e,t){return d[t]||"".concat(u.generate(e),"-").concat(t)}function v(e){return f("MuiTabPanel",e)}!function(e,t){var r={};t.forEach((function(t){r[t]=f(e,t)}))}("MuiTabPanel",["root"]);var b=r(3449),p=r(184),h=["children","className","value"],m=function(e){return function(e,t,r){var o={};return Object.keys(e).forEach((function(n){o[n]=e[n].reduce((function(e,o){return o&&(r&&r[o]&&e.push(r[o]),e.push(t(o))),e}),[]).join(" ")})),o}({root:["root"]},v,e.classes)},w=(0,a.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),Z=i.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiTabPanel"}),i=r.children,a=r.className,s=r.value,u=(0,n.Z)(r,h),d=(0,o.Z)({},r),f=m(d),v=(0,b._i)();if(null===v)throw new TypeError("No TabContext provided");var Z=(0,b.uU)(v,s),x=(0,b.pQ)(v,s);return(0,p.jsx)(w,(0,o.Z)({"aria-labelledby":x,className:(0,l.Z)(f.root,a),hidden:s!==v.value,id:Z,ref:t,role:"tabpanel",ownerState:d},u,{children:s===v.value&&i}))}))},3896:function(e,t,r){r.d(t,{Z:function(){return Z}});var o=r(6222),n=r(3366),i=r(7462),l=r(2791),a=r(8182),c=r(767),s=r(533),u=r(4036),d=r(7),f=r(2973),v=r(4301);function b(e){return(0,v.Z)("MuiTab",e)}var p=(0,r(208).Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),h=r(184),m=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],w=(0,f.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.label&&r.icon&&t.labelIcon,t["textColor".concat((0,u.Z)(r.textColor))],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped]}})((function(e){var t,r,n,l=e.theme,a=e.ownerState;return(0,i.Z)({},l.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},a.label&&{flexDirection:"top"===a.iconPosition||"bottom"===a.iconPosition?"column":"row"},{lineHeight:1.25},a.icon&&a.label&&(0,o.Z)({minHeight:72,paddingTop:9,paddingBottom:9},"& > .".concat(p.iconWrapper),(0,i.Z)({},"top"===a.iconPosition&&{marginBottom:6},"bottom"===a.iconPosition&&{marginTop:6},"start"===a.iconPosition&&{marginRight:l.spacing(1)},"end"===a.iconPosition&&{marginLeft:l.spacing(1)})),"inherit"===a.textColor&&(t={color:"inherit",opacity:.6},(0,o.Z)(t,"&.".concat(p.selected),{opacity:1}),(0,o.Z)(t,"&.".concat(p.disabled),{opacity:l.palette.action.disabledOpacity}),t),"primary"===a.textColor&&(r={color:l.palette.text.secondary},(0,o.Z)(r,"&.".concat(p.selected),{color:l.palette.primary.main}),(0,o.Z)(r,"&.".concat(p.disabled),{color:l.palette.text.disabled}),r),"secondary"===a.textColor&&(n={color:l.palette.text.secondary},(0,o.Z)(n,"&.".concat(p.selected),{color:l.palette.secondary.main}),(0,o.Z)(n,"&.".concat(p.disabled),{color:l.palette.text.disabled}),n),a.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},a.wrapped&&{fontSize:l.typography.pxToRem(12)})})),Z=l.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiTab"}),o=r.className,s=r.disabled,f=void 0!==s&&s,v=r.disableFocusRipple,p=void 0!==v&&v,Z=r.fullWidth,x=r.icon,g=r.iconPosition,C=void 0===g?"top":g,S=r.indicator,y=r.label,M=r.onChange,B=r.onClick,W=r.onFocus,T=r.selected,E=r.selectionFollowsFocus,P=r.textColor,R=void 0===P?"inherit":P,N=r.value,k=r.wrapped,z=void 0!==k&&k,L=(0,n.Z)(r,m),j=(0,i.Z)({},r,{disabled:f,disableFocusRipple:p,selected:T,icon:!!x,iconPosition:C,label:!!y,fullWidth:Z,textColor:R,wrapped:z}),F=function(e){var t=e.classes,r=e.textColor,o=e.fullWidth,n=e.wrapped,i=e.icon,l=e.label,a=e.selected,s=e.disabled,d={root:["root",i&&l&&"labelIcon","textColor".concat((0,u.Z)(r)),o&&"fullWidth",n&&"wrapped",a&&"selected",s&&"disabled"],iconWrapper:["iconWrapper"]};return(0,c.Z)(d,b,t)}(j),H=x&&y&&l.isValidElement(x)?l.cloneElement(x,{className:(0,a.Z)(F.iconWrapper,x.props.className)}):x;return(0,h.jsxs)(w,(0,i.Z)({focusRipple:!p,className:(0,a.Z)(F.root,o),ref:t,role:"tab","aria-selected":T,disabled:f,onClick:function(e){!T&&M&&M(e,N),B&&B(e)},onFocus:function(e){E&&!T&&M&&M(e,N),W&&W(e)},ownerState:j,tabIndex:T?0:-1},L,{children:["top"===C||"start"===C?(0,h.jsxs)(l.Fragment,{children:[H,y]}):(0,h.jsxs)(l.Fragment,{children:[y,H]}),S]}))}))},3199:function(e,t,r){var o=r(3981);t.Z=o.Z},8301:function(e,t,r){var o=r(1907);t.Z=o.Z},7602:function(e,t,r){var o=r(7979);t.Z=o.Z},6355:function(e,t,r){r.d(t,{$0H:function(){return n},Lrt:function(){return l},gmG:function(){return i}});var o=r(9983);function n(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(e)}function i(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function l(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"}}]})(e)}},1372:function(e,t){var r=60103,o=60106,n=60107,i=60108,l=60114,a=60109,c=60110,s=60112,u=60113,d=60120,f=60115,v=60116,b=60121,p=60122,h=60117,m=60129,w=60131;if("function"===typeof Symbol&&Symbol.for){var Z=Symbol.for;r=Z("react.element"),o=Z("react.portal"),n=Z("react.fragment"),i=Z("react.strict_mode"),l=Z("react.profiler"),a=Z("react.provider"),c=Z("react.context"),s=Z("react.forward_ref"),u=Z("react.suspense"),d=Z("react.suspense_list"),f=Z("react.memo"),v=Z("react.lazy"),b=Z("react.block"),p=Z("react.server.block"),h=Z("react.fundamental"),m=Z("react.debug_trace_mode"),w=Z("react.legacy_hidden")}function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case l:case i:case u:case d:return e;default:switch(e=e&&e.$$typeof){case c:case s:case v:case f:case a:return e;default:return t}}case o:return t}}}},7441:function(e,t,r){r(1372)}}]);
//# sourceMappingURL=505.9929c174.chunk.js.map