import{ai as gt,e as Z,X as yt,v as me,b as ee,g as te,c as Q,_ as f,r as _,i as re,aj as xt,O as Ye,k as H,N as Te,a as c,l as U,m as ne,Q as de,P as bt,d as qe,f as ce,j as S,o as _t,a3 as Rt,ak as Fe,al as Ue,am as St,an as It,ao as Qe,ap as ze,aq as Ct,ar as Et,$ as X,a0 as Tt,q as j,a2 as wt,as as Nt,at as Ke,au as Pt,av as $t,s as we,C as z,u as Ne,E as Xe,F as Je,G as J,aw as Lt}from"./index.83119aac.js";import{l as kt,e as Ot,c as Ze,f as Mt,h as At,o as Pe,k as Dt,j as Bt,M as Ft,P as Ut,m as pe,T as le,s as Qt,n as et,L as ge,d as Ce}from"./auth.service.hooks.bd0577ba.js";import{a as tt,b as zt,c as Wt,B as jt,u as rt}from"./i18n.hooks.6534aa8f.js";function Ht(e,t){return()=>null}function Gt(e,t){return()=>null}function Vt(e,t,r,s,o){return null}const Yt={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),gt.configure(e)}},qt=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:Yt,capitalize:Z,createChainedFunction:kt,createSvgIcon:Ot,debounce:Ze,deprecatedPropType:Ht,isMuiElement:Mt,ownerDocument:At,ownerWindow:Pe,requirePropFactory:Gt,setRef:yt,unstable_useEnhancedEffect:tt,unstable_useId:Dt,unsupportedProp:Vt,useControlled:Bt,useEventCallback:zt,useForkRef:me,useIsFocusVisible:Wt},Symbol.toStringTag,{value:"Module"}));function Kt(e){return ee("MuiCollapse",e)}te("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Xt=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Jt=e=>{const{orientation:t,classes:r}=e,s={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return ne(s,Kt,r)},Zt=Q("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],r.state==="entered"&&t.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>f({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&f({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),er=Q("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>f({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),tr=Q("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>f({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),nt=_.exports.forwardRef(function(t,r){const s=re({props:t,name:"MuiCollapse"}),{addEndListener:o,children:n,className:a,collapsedSize:i="0px",component:u,easing:l,in:p,onEnter:x,onEntered:b,onEntering:R,onExit:d,onExited:y,onExiting:T,orientation:E="vertical",style:P,timeout:h=xt.standard,TransitionComponent:k=Ye}=s,N=H(s,Xt),I=f({},s,{orientation:E,collapsedSize:i}),C=Jt(I),A=Te(),w=_.exports.useRef(),m=_.exports.useRef(null),O=_.exports.useRef(),$=typeof i=="number"?`${i}px`:i,D=E==="horizontal",W=D?"width":"height";_.exports.useEffect(()=>()=>{clearTimeout(w.current)},[]);const G=_.exports.useRef(null),ve=me(r,G),B=g=>M=>{if(g){const F=G.current;M===void 0?g(F):g(F,M)}},v=()=>m.current?m.current[D?"clientWidth":"clientHeight"]:0,L=B((g,M)=>{m.current&&D&&(m.current.style.position="absolute"),g.style[W]=$,x&&x(g,M)}),ie=B((g,M)=>{const F=v();m.current&&D&&(m.current.style.position="");const{duration:q,easing:ae}=de({style:P,timeout:h,easing:l},{mode:"enter"});if(h==="auto"){const Be=A.transitions.getAutoHeightDuration(F);g.style.transitionDuration=`${Be}ms`,O.current=Be}else g.style.transitionDuration=typeof q=="string"?q:`${q}ms`;g.style[W]=`${F}px`,g.style.transitionTimingFunction=ae,R&&R(g,M)}),ht=B((g,M)=>{g.style[W]="auto",b&&b(g,M)}),ft=B(g=>{g.style[W]=`${v()}px`,d&&d(g)}),mt=B(y),vt=B(g=>{const M=v(),{duration:F,easing:q}=de({style:P,timeout:h,easing:l},{mode:"exit"});if(h==="auto"){const ae=A.transitions.getAutoHeightDuration(M);g.style.transitionDuration=`${ae}ms`,O.current=ae}else g.style.transitionDuration=typeof F=="string"?F:`${F}ms`;g.style[W]=$,g.style.transitionTimingFunction=q,T&&T(g)});return c(k,f({in:p,onEnter:L,onEntered:ht,onEntering:ie,onExit:ft,onExited:mt,onExiting:vt,addEndListener:g=>{h==="auto"&&(w.current=setTimeout(g,O.current||0)),o&&o(G.current,g)},nodeRef:G,timeout:h==="auto"?null:h},N,{children:(g,M)=>c(Zt,f({as:u,className:U(C.root,a,{entered:C.entered,exited:!p&&$==="0px"&&C.hidden}[g]),style:f({[D?"minWidth":"minHeight"]:$},P),ownerState:f({},I,{state:g}),ref:ve},M,{children:c(er,{ownerState:f({},I,{state:g}),className:C.wrapper,ref:m,children:c(tr,{ownerState:f({},I,{state:g}),className:C.wrapperInner,children:n})})}))}))});nt.muiSupportAuto=!0;const rr=nt,nr=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function sr(e,t,r){const s=t.getBoundingClientRect(),o=r&&r.getBoundingClientRect(),n=Pe(t);let a;if(t.fakeTransform)a=t.fakeTransform;else{const l=n.getComputedStyle(t);a=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let i=0,u=0;if(a&&a!=="none"&&typeof a=="string"){const l=a.split("(")[1].split(")")[0].split(",");i=parseInt(l[4],10),u=parseInt(l[5],10)}return e==="left"?o?`translateX(${o.right+i-s.left}px)`:`translateX(${n.innerWidth+i-s.left}px)`:e==="right"?o?`translateX(-${s.right-o.left-i}px)`:`translateX(-${s.left+s.width-i}px)`:e==="up"?o?`translateY(${o.bottom+u-s.top}px)`:`translateY(${n.innerHeight+u-s.top}px)`:o?`translateY(-${s.top-o.top+s.height-u}px)`:`translateY(-${s.top+s.height-u}px)`}function or(e){return typeof e=="function"?e():e}function ue(e,t,r){const s=or(r),o=sr(e,t,s);o&&(t.style.webkitTransform=o,t.style.transform=o)}const ir=_.exports.forwardRef(function(t,r){const s=Te(),o={enter:s.transitions.easing.easeOut,exit:s.transitions.easing.sharp},n={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{addEndListener:a,appear:i=!0,children:u,container:l,direction:p="down",easing:x=o,in:b,onEnter:R,onEntered:d,onEntering:y,onExit:T,onExited:E,onExiting:P,style:h,timeout:k=n,TransitionComponent:N=Ye}=t,I=H(t,nr),C=_.exports.useRef(null),A=me(u.ref,C,r),w=v=>L=>{v&&(L===void 0?v(C.current):v(C.current,L))},m=w((v,L)=>{ue(p,v,l),bt(v),R&&R(v,L)}),O=w((v,L)=>{const ie=de({timeout:k,style:h,easing:x},{mode:"enter"});v.style.webkitTransition=s.transitions.create("-webkit-transform",f({},ie)),v.style.transition=s.transitions.create("transform",f({},ie)),v.style.webkitTransform="none",v.style.transform="none",y&&y(v,L)}),$=w(d),D=w(P),W=w(v=>{const L=de({timeout:k,style:h,easing:x},{mode:"exit"});v.style.webkitTransition=s.transitions.create("-webkit-transform",L),v.style.transition=s.transitions.create("transform",L),ue(p,v,l),T&&T(v)}),G=w(v=>{v.style.webkitTransition="",v.style.transition="",E&&E(v)}),ve=v=>{a&&a(C.current,v)},B=_.exports.useCallback(()=>{C.current&&ue(p,C.current,l)},[p,l]);return _.exports.useEffect(()=>{if(b||p==="down"||p==="right")return;const v=Ze(()=>{C.current&&ue(p,C.current,l)}),L=Pe(C.current);return L.addEventListener("resize",v),()=>{v.clear(),L.removeEventListener("resize",v)}},[p,b,l]),_.exports.useEffect(()=>{b||B()},[b,B]),c(N,f({nodeRef:C,onEnter:m,onEntered:$,onEntering:O,onExit:W,onExited:G,onExiting:D,addEndListener:ve,appear:i,in:b,timeout:k},I,{children:(v,L)=>_.exports.cloneElement(u,f({ref:A,style:f({visibility:v==="exited"&&!b?"hidden":void 0},h,u.props.style)},L))}))}),ar=ir;function cr(e){return ee("MuiDrawer",e)}te("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const lr=["BackdropProps"],ur=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],st=(e,t)=>{const{ownerState:r}=e;return[t.root,(r.variant==="permanent"||r.variant==="persistent")&&t.docked,t.modal]},dr=e=>{const{classes:t,anchor:r,variant:s}=e,o={root:["root"],docked:[(s==="permanent"||s==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${Z(r)}`,s!=="temporary"&&`paperAnchorDocked${Z(r)}`]};return ne(o,cr,t)},pr=Q(Ft,{name:"MuiDrawer",slot:"Root",overridesResolver:st})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),We=Q("div",{shouldForwardProp:qe,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:st})({flex:"0 0 auto"}),hr=Q(Ut,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.paper,t[`paperAnchor${Z(r.anchor)}`],r.variant!=="temporary"&&t[`paperAnchorDocked${Z(r.anchor)}`]]}})(({theme:e,ownerState:t})=>f({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),ot={left:"right",right:"left",top:"down",bottom:"up"};function fr(e){return["left","right"].indexOf(e)!==-1}function mr(e,t){return e.direction==="rtl"&&fr(t)?ot[t]:t}const vr=_.exports.forwardRef(function(t,r){const s=re({props:t,name:"MuiDrawer"}),o=Te(),n={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{anchor:a="left",BackdropProps:i,children:u,className:l,elevation:p=16,hideBackdrop:x=!1,ModalProps:{BackdropProps:b}={},onClose:R,open:d=!1,PaperProps:y={},SlideProps:T,TransitionComponent:E=ar,transitionDuration:P=n,variant:h="temporary"}=s,k=H(s.ModalProps,lr),N=H(s,ur),I=_.exports.useRef(!1);_.exports.useEffect(()=>{I.current=!0},[]);const C=mr(o,a),w=f({},s,{anchor:a,elevation:p,open:d,variant:h},N),m=dr(w),O=c(hr,f({elevation:h==="temporary"?p:0,square:!0},y,{className:U(m.paper,y.className),ownerState:w,children:u}));if(h==="permanent")return c(We,f({className:U(m.root,m.docked,l),ownerState:w,ref:r},N,{children:O}));const $=c(E,f({in:d,direction:ot[C],timeout:P,appear:I.current},T,{children:O}));return h==="persistent"?c(We,f({className:U(m.root,m.docked,l),ownerState:w,ref:r},N,{children:$})):c(pr,f({BackdropProps:f({},i,b,{transitionDuration:P}),className:U(m.root,m.modal,l),open:d,ownerState:w,onClose:R,hideBackdrop:x,ref:r},N,k,{children:$}))}),gr=vr;function yr(e){return ee("MuiListItemButton",e)}const xr=te("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),K=xr,br=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],_r=(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.alignItems==="flex-start"&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters]},Rr=e=>{const{alignItems:t,classes:r,dense:s,disabled:o,disableGutters:n,divider:a,selected:i}=e,l=ne({root:["root",s&&"dense",!n&&"gutters",a&&"divider",o&&"disabled",t==="flex-start"&&"alignItemsFlexStart",i&&"selected"]},yr,r);return f({},r,l)},Sr=Q(jt,{shouldForwardProp:e=>qe(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:_r})(({theme:e,ownerState:t})=>f({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${K.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ce(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${K.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:ce(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${K.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:ce(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ce(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${K.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${K.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),Ir=_.exports.forwardRef(function(t,r){const s=re({props:t,name:"MuiListItemButton"}),{alignItems:o="center",autoFocus:n=!1,component:a="div",children:i,dense:u=!1,disableGutters:l=!1,divider:p=!1,focusVisibleClassName:x,selected:b=!1,className:R}=s,d=H(s,br),y=_.exports.useContext(pe),T=_.exports.useMemo(()=>({dense:u||y.dense||!1,alignItems:o,disableGutters:l}),[o,y.dense,u,l]),E=_.exports.useRef(null);tt(()=>{n&&E.current&&E.current.focus()},[n]);const P=f({},s,{alignItems:o,dense:T.dense,disableGutters:l,divider:p,selected:b}),h=Rr(P),k=me(E,r);return c(pe.Provider,{value:T,children:c(Sr,f({ref:k,href:d.href||d.to,component:(d.href||d.to)&&a==="div"?"a":a,focusVisibleClassName:U(h.focusVisible,x),ownerState:P,className:U(h.root,R)},d,{classes:h,children:i}))})}),ye=Ir;function Cr(e){return ee("MuiListItemIcon",e)}te("MuiListItemIcon",["root","alignItemsFlexStart"]);const Er=["className"],Tr=e=>{const{alignItems:t,classes:r}=e;return ne({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},Cr,r)},wr=Q("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>f({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),Nr=_.exports.forwardRef(function(t,r){const s=re({props:t,name:"MuiListItemIcon"}),{className:o}=s,n=H(s,Er),a=_.exports.useContext(pe),i=f({},s,{alignItems:a.alignItems}),u=Tr(i);return c(wr,f({className:U(u.root,o),ownerState:i,ref:r},n))}),xe=Nr;function Pr(e){return ee("MuiListItemText",e)}const $r=te("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),je=$r,Lr=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],kr=e=>{const{classes:t,inset:r,primary:s,secondary:o,dense:n}=e;return ne({root:["root",r&&"inset",n&&"dense",s&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},Pr,t)},Or=Q("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${je.primary}`]:t.primary},{[`& .${je.secondary}`]:t.secondary},t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})(({ownerState:e})=>f({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),Mr=_.exports.forwardRef(function(t,r){const s=re({props:t,name:"MuiListItemText"}),{children:o,className:n,disableTypography:a=!1,inset:i=!1,primary:u,primaryTypographyProps:l,secondary:p,secondaryTypographyProps:x}=s,b=H(s,Lr),{dense:R}=_.exports.useContext(pe);let d=u!=null?u:o,y=p;const T=f({},s,{disableTypography:a,inset:i,primary:!!d,secondary:!!y,dense:R}),E=kr(T);return d!=null&&d.type!==le&&!a&&(d=c(le,f({variant:R?"body2":"body1",className:E.primary,component:l!=null&&l.variant?void 0:"span",display:"block"},l,{children:d}))),y!=null&&y.type!==le&&!a&&(y=c(le,f({variant:"body2",className:E.secondary,color:"text.secondary",display:"block"},x,{children:y}))),S(Or,f({className:U(E.root,n),ownerState:T,ref:r},b,{children:[d,y]}))}),be=Mr;var Ar=function(e){_t(t,e);function t(s,o){var n;return n=e.call(this)||this,n.client=s,n.options=o,n.trackedProps=[],n.selectError=null,n.bindMethods(),n.setOptions(o),n}var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),He(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return Ee(this.currentQuery,this.options,this.options.refetchOnReconnect)},r.shouldFetchOnWindowFocus=function(){return Ee(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(o,n){var a=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(o),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var u=this.hasListeners();u&&Ge(this.currentQuery,i,this.options,a)&&this.executeFetch(),this.updateResult(n),u&&(this.currentQuery!==i||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var l=this.computeRefetchInterval();u&&(this.currentQuery!==i||this.options.enabled!==a.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)},r.getOptimisticResult=function(o){var n=this.client.defaultQueryObserverOptions(o),a=this.client.getQueryCache().build(this.client,n);return this.createResult(a,n)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(o,n){var a=this,i={},u=function(p){a.trackedProps.includes(p)||a.trackedProps.push(p)};return Object.keys(o).forEach(function(l){Object.defineProperty(i,l,{configurable:!1,enumerable:!0,get:function(){return u(l),o[l]}})}),(n.useErrorBoundary||n.suspense)&&u("error"),i},r.getNextResult=function(o){var n=this;return new Promise(function(a,i){var u=n.subscribe(function(l){l.isFetching||(u(),l.isError&&(o==null?void 0:o.throwOnError)?i(l.error):a(l))})})},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(o){return this.fetch(f({},o,{meta:{refetchPage:o==null?void 0:o.refetchPage}}))},r.fetchOptimistic=function(o){var n=this,a=this.client.defaultQueryObserverOptions(o),i=this.client.getQueryCache().build(this.client,a);return i.fetch().then(function(){return n.createResult(i,a)})},r.fetch=function(o){var n=this;return this.executeFetch(o).then(function(){return n.updateResult(),n.currentResult})},r.executeFetch=function(o){this.updateQuery();var n=this.currentQuery.fetch(this.options,o);return o!=null&&o.throwOnError||(n=n.catch(Rt)),n},r.updateStaleTimeout=function(){var o=this;if(this.clearStaleTimeout(),!(Fe||this.currentResult.isStale||!Ue(this.options.staleTime))){var n=St(this.currentResult.dataUpdatedAt,this.options.staleTime),a=n+1;this.staleTimeoutId=setTimeout(function(){o.currentResult.isStale||o.updateResult()},a)}},r.computeRefetchInterval=function(){var o;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(o=this.options.refetchInterval)!=null?o:!1},r.updateRefetchInterval=function(o){var n=this;this.clearRefetchInterval(),this.currentRefetchInterval=o,!(Fe||this.options.enabled===!1||!Ue(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(n.options.refetchIntervalInBackground||It.isFocused())&&n.executeFetch()},this.currentRefetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},r.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},r.createResult=function(o,n){var a=this.currentQuery,i=this.options,u=this.currentResult,l=this.currentResultState,p=this.currentResultOptions,x=o!==a,b=x?o.state:this.currentQueryInitialState,R=x?this.currentResult:this.previousQueryResult,d=o.state,y=d.dataUpdatedAt,T=d.error,E=d.errorUpdatedAt,P=d.isFetching,h=d.status,k=!1,N=!1,I;if(n.optimisticResults){var C=this.hasListeners(),A=!C&&He(o,n),w=C&&Ge(o,a,n,i);(A||w)&&(P=!0,y||(h="loading"))}if(n.keepPreviousData&&!d.dataUpdateCount&&(R==null?void 0:R.isSuccess)&&h!=="error")I=R.data,y=R.dataUpdatedAt,h=R.status,k=!0;else if(n.select&&typeof d.data<"u")if(u&&d.data===(l==null?void 0:l.data)&&n.select===this.selectFn)I=this.selectResult;else try{this.selectFn=n.select,I=n.select(d.data),n.structuralSharing!==!1&&(I=Qe(u==null?void 0:u.data,I)),this.selectResult=I,this.selectError=null}catch($){ze().error($),this.selectError=$}else I=d.data;if(typeof n.placeholderData<"u"&&typeof I>"u"&&(h==="loading"||h==="idle")){var m;if((u==null?void 0:u.isPlaceholderData)&&n.placeholderData===(p==null?void 0:p.placeholderData))m=u.data;else if(m=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof m<"u")try{m=n.select(m),n.structuralSharing!==!1&&(m=Qe(u==null?void 0:u.data,m)),this.selectError=null}catch($){ze().error($),this.selectError=$}typeof m<"u"&&(h="success",I=m,N=!0)}this.selectError&&(T=this.selectError,I=this.selectResult,E=Date.now(),h="error");var O={status:h,isLoading:h==="loading",isSuccess:h==="success",isError:h==="error",isIdle:h==="idle",data:I,dataUpdatedAt:y,error:T,errorUpdatedAt:E,failureCount:d.fetchFailureCount,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>b.dataUpdateCount||d.errorUpdateCount>b.errorUpdateCount,isFetching:P,isRefetching:P&&h!=="loading",isLoadingError:h==="error"&&d.dataUpdatedAt===0,isPlaceholderData:N,isPreviousData:k,isRefetchError:h==="error"&&d.dataUpdatedAt!==0,isStale:$e(o,n),refetch:this.refetch,remove:this.remove};return O},r.shouldNotifyListeners=function(o,n){if(!n)return!0;var a=this.options,i=a.notifyOnChangeProps,u=a.notifyOnChangePropsExclusions;if(!i&&!u||i==="tracked"&&!this.trackedProps.length)return!0;var l=i==="tracked"?this.trackedProps:i;return Object.keys(o).some(function(p){var x=p,b=o[x]!==n[x],R=l==null?void 0:l.some(function(y){return y===p}),d=u==null?void 0:u.some(function(y){return y===p});return b&&!d&&(!l||R)})},r.updateResult=function(o){var n=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Ct(this.currentResult,n)){var a={cache:!0};(o==null?void 0:o.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,n)&&(a.listeners=!0),this.notify(f({},a,o))}},r.updateQuery=function(){var o=this.client.getQueryCache().build(this.client,this.options);if(o!==this.currentQuery){var n=this.currentQuery;this.currentQuery=o,this.currentQueryInitialState=o.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),o.addObserver(this))}},r.onQueryUpdate=function(o){var n={};o.type==="success"?n.onSuccess=!0:o.type==="error"&&!Et(o.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()},r.notify=function(o){var n=this;X.batch(function(){o.onSuccess?(n.options.onSuccess==null||n.options.onSuccess(n.currentResult.data),n.options.onSettled==null||n.options.onSettled(n.currentResult.data,null)):o.onError&&(n.options.onError==null||n.options.onError(n.currentResult.error),n.options.onSettled==null||n.options.onSettled(void 0,n.currentResult.error)),o.listeners&&n.listeners.forEach(function(a){a(n.currentResult)}),o.cache&&n.client.getQueryCache().notify({query:n.currentQuery,type:"observerResultsUpdated"})})},t}(Tt);function Dr(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function He(e,t){return Dr(e,t)||e.state.dataUpdatedAt>0&&Ee(e,t,t.refetchOnMount)}function Ee(e,t,r){if(t.enabled!==!1){var s=typeof r=="function"?r(e):r;return s==="always"||s!==!1&&$e(e,t)}return!1}function Ge(e,t,r,s){return r.enabled!==!1&&(e!==t||s.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&$e(e,r)}function $e(e,t){return e.isStaleByTime(t.staleTime)}function Br(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var Fr=j.createContext(Br()),Ur=function(){return j.useContext(Fr)};function Qr(e,t){var r=j.useRef(!1),s=j.useState(0),o=s[1],n=wt(),a=Ur(),i=n.defaultQueryObserverOptions(e);i.optimisticResults=!0,i.onError&&(i.onError=X.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=X.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=X.batchCalls(i.onSettled)),i.suspense&&(typeof i.staleTime!="number"&&(i.staleTime=1e3),i.cacheTime===0&&(i.cacheTime=1)),(i.suspense||i.useErrorBoundary)&&(a.isReset()||(i.retryOnMount=!1));var u=j.useState(function(){return new t(n,i)}),l=u[0],p=l.getOptimisticResult(i);if(j.useEffect(function(){r.current=!0,a.clearReset();var x=l.subscribe(X.batchCalls(function(){r.current&&o(function(b){return b+1})}));return l.updateResult(),function(){r.current=!1,x()}},[a,l]),j.useEffect(function(){l.setOptions(i,{listeners:!1})},[i,l]),i.suspense&&p.isLoading)throw l.fetchOptimistic(i).then(function(x){var b=x.data;i.onSuccess==null||i.onSuccess(b),i.onSettled==null||i.onSettled(b,null)}).catch(function(x){a.clearReset(),i.onError==null||i.onError(x),i.onSettled==null||i.onSettled(void 0,x)});if(p.isError&&!a.isReset()&&!p.isFetching&&Qt(i.suspense,i.useErrorBoundary,[p.error,l.getCurrentQuery()]))throw p.error;return i.notifyOnChangeProps==="tracked"&&(p=l.trackResult(p,i)),p}function On(e,t,r){var s=Nt(e,t,r);return Qr(s,Ar)}var Y={exports:{}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Y);var Le={},_e={};const zr=Ke(qt);var Ve;function se(){return Ve||(Ve=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=zr}(_e)),_e}const oe=Ke(Pt);var Wr=Y.exports;Object.defineProperty(Le,"__esModule",{value:!0});var he=Le.default=void 0,jr=Wr(se()),Hr=oe,Gr=(0,jr.default)((0,Hr.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");he=Le.default=Gr;var ke={},Vr=Y.exports;Object.defineProperty(ke,"__esModule",{value:!0});var it=ke.default=void 0,Yr=Vr(se()),qr=oe,Kr=(0,Yr.default)((0,qr.jsx)("path",{d:"M12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"FmdGood");it=ke.default=Kr;var Oe={},Xr=Y.exports;Object.defineProperty(Oe,"__esModule",{value:!0});var at=Oe.default=void 0,Jr=Xr(se()),Zr=oe,en=(0,Jr.default)((0,Zr.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"LocalPhone");at=Oe.default=en;var Me={},tn=Y.exports;Object.defineProperty(Me,"__esModule",{value:!0});var Ae=Me.default=void 0,rn=tn(se()),nn=oe,sn=(0,rn.default)((0,nn.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");Ae=Me.default=sn;var De={},on=Y.exports;Object.defineProperty(De,"__esModule",{value:!0});var ct=De.default=void 0;ln(_.exports);var an=on(se()),cn=oe;function lt(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(lt=function(s){return s?r:t})(e)}function ln(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=lt(t);if(r&&r.has(e))return r.get(e);var s={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)){var a=o?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(s,n,a):s[n]=e[n]}return s.default=e,r&&r.set(e,s),s}var un=(0,an.default)((0,cn.jsx)("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp");ct=De.default=un;const dn="/CodiShark/assets/iconPersonSideBar.89416ee2.svg",ut="/CodiShark/assets/logoKonectaSidebar.0d5c0425.svg",fe=()=>{const e=_.exports.useContext($t);if(typeof e>"u")throw new Error("useGlobals must be used within a GlobalsProvider");return e},{BREAKPOINTS:pn}=z,hn=we.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 20.4rem;
  height: 100vh;
  flex: 1;
  color: var(--palette-white);

  @media screen and (max-width: ${pn.tablet}px) {
    display: none;
  }

  * > h2 {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 600;
    color: inherit;
  }

  * > h3 {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 400;
    color: inherit;
  }

  * > h4 {
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 300;
    color: inherit;
    text-transform: uppercase;
  }

  .Sidebar {
    &__active {
      color: var(--palette-primary);
    }

    &__listButton {
      &:focus,
      &:hover {
        color: var(--palette-primary);
        transition: opacity 0.4s, transform 0.4s;
        opacity: 1;
        transform: translate3d(0, 0.2rem, 0);
      }

      position: relative;
      text-decoration: none;

      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        margin: 0 2.4rem;
        height: 0.01rem;
        bottom: 0;
        left: 0;
        background-color: var(--palette-primary);
        transform: scaleX(0);
        transition: transform 0.4s ease;
      }

      &:hover::before {
        transform: scaleX(1);
      }
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1.6rem 0;
      gap: 0.8rem;
    }

    &__divider {
      width: 100%;
      height: 0.01rem;
      background-color: var(--palette-white05);
      margin: 0.8rem 0;
    }

    &__icon {
      cursor: pointer;

      &--container {
        padding-bottom: 2rem;
      }
    }

    &__sectionContainer {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin: 2rem 0;
    }

    &__sectionContainerFooter {
      position: relative;
    }

    &__footerList {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      top: 48rem;
      left: 2.9rem;

      @media screen and (max-width: 912px) {
        top: 106rem;
      }

      @media screen and (max-width: 820px) {
        top: 88rem;
      }

      @media screen and (max-width: 768px) {
        top: 72rem;
      }
    }

    &__footerListTitle {
      padding-bottom: 0.8rem;
    }

    &__iconFooter {
      display: flex;
      gap: 0.6rem;
    }

    &__list {
      &--icon {
        min-width: 3.6rem;
      }
    }
  }
`,Re={width:"20.4rem",flexShrink:0,"& .MuiDrawer-paper":{width:"20.4rem",boxSizing:"border-box",backgroundColor:"var(--palette-deepBlue)",color:"white"}},{USER_PAYMENT_LIST:fn,ADMIN_ENTRY_PATH:mn}=z.ROUTES,{ADMIN_CLIENT_LIST:vn,ADMIN_PAYMENT_LIST:gn}=z.ROUTES,{ENTRY_PATH:Se,SETTINGS:yn}=z.ROUTES,dt=e=>{const{open:t=!0,onClose:r}=e,s=rt().global.sideBar,o=Ne(),{setSignInStep:n,setUser:a,user:i}=Xe(),{selectedIndex:u}=fe(),{mutateAsync:l,reset:p}=et(),[,x]=Je("user"),{first_name:b,last_name:R,mother_last_name:d}=i!=null?i:{},{rol:y}=i!=null?i:{},{setIsLoading:T}=fe(),[E,P]=_.exports.useState(!0),h=m=>{P(!E)},k=async()=>{try{T(!0),l(),p(),n(0),x(""),Ce.setCookie("token",""),a(void 0),T(!1),o("/signIn"),document.location.reload()}catch(m){T(!1),x(""),Ce.setCookie("token",""),a(void 0),o("/signIn"),console.warn(m)}},N=(m,O,$,D)=>S(J,{children:[S(ye,{onClick:W=>{o($),h(),u.current=m},sx:{padding:"1.2rem 2.4rem"},className:"Sidebar__listButton",children:[c(xe,{className:"Sidebar__list--icon",children:c(he,{sx:{color:"white"},className:u.current===m?"Sidebar__active":"",fontSize:"large"})}),c(be,{children:c("h3",{className:u.current===m?"Sidebar__active":"",children:O})})]},m),D&&c(rr,{in:E,timeout:"auto",unmountOnExit:!0,children:c(ge,{component:"div",disablePadding:!0,children:S(ye,{sx:{pl:2},children:[c(xe,{children:c(he,{})}),c(be,{primary:"Starred"})]})})})]}),I=()=>S(ye,{onClick:k,sx:{padding:"1.2rem 2.4rem"},className:"Sidebar__listButton",children:[c(xe,{className:"Sidebar__list--icon",children:c(Ae,{sx:{color:"white"},fontSize:"medium"})}),c(be,{children:c("h3",{children:s.logout})})]}),C=()=>y!==1?null:S(J,{children:[N(0,s.start,Se),N(5,s.myPays,fn)]}),A=()=>y!==10?null:S(J,{children:[N(0,s.start,Se),N(2,s.myPayments,gn),N(3,s.myClients,vn),N(6,s.setting,yn)]}),w=()=>o(y===1?Se:mn);return c(hn,{className:"Sidebar",children:c(gr,{anchor:"left",open:t,onClose:r,className:"Sidebar__drawer",sx:Re,variant:"permanent",children:S(ge,{component:"nav","aria-labelledby":"nested-list-subheader",sx:Re,subheader:c("div",{className:"Sidebar__header",children:S("div",{className:"Sidebar__header-text",children:[c("div",{className:"Sidebar__icon--container",children:c("img",{className:"Sidebar__icon",src:ut,alt:"logoKonecta",width:140,onClick:()=>w()})}),S("div",{className:"Sidebar__sectionContainer",children:[c("img",{src:dn,alt:"iconPersonSideBar"}),S("div",{children:[c("h2",{children:b}),c("h4",{children:`${R} ${d}`})]})]})]})}),children:[c(ge,{component:"nav","aria-labelledby":"nested-list-subheader",sx:Re,subheader:c("div",{className:"Sidebar__footer",children:c("div",{className:"Sidebar__footer-text",children:c("div",{className:"Sidebar__sectionContainerFooter",children:S("div",{className:"Sidebar__footerList",children:[c("h2",{className:"Sidebar__footerListTitle",children:s.title}),S("div",{className:"Sidebar__iconFooter",children:[c(at,{}),c("p",{children:"0800 1652 1254"})]}),S("div",{className:"Sidebar__iconFooter",children:[c(ct,{}),c("p",{children:"info@b12.com"})]}),S("div",{className:"Sidebar__iconFooter",children:[c(it,{}),c("p",{children:s.direction})]}),c("a",{href:"google.com",children:"www.b12.com"})]})})})})}),C(),A(),c("div",{className:"Sidebar__divider"}),I()]})})})};dt.defaultProps={};const{BREAKPOINTS:xn}=z,bn=we.div`
  display: block;

  @media screen and (min-width: ${xn.tablet}px) {
    display: none;
  }

  .SidebarResponsive {
    &__component {
      &--hamburger {
        &-button {
          position: sticky;
          top: 2.5rem;
          left: 2rem;
          width: 2.4rem;
          height: 2.6rem;
          cursor: pointer;
          z-index: 10;

          & > span,
          & > span::before,
          & > span::after {
            display: block;
            position: absolute;
            width: 100%;
            height: 0.2rem;
            background-color: var(--palette-white);
            transition-duration: 0.25s;
          }

          & > span::before {
            content: "";
            top: -0.8rem;
          }

          & > span::after {
            content: "";
            top: 0.8rem;
          }
        }
      }

      &--menu {
        &-box {
          display: block;
          position: fixed;
          top: 0;
          left: -100%;
          width: 30rem;
          height: 100%;
          margin: 0;
          padding: 8rem 0;
          list-style: none;
          background-color: var(--palette-deepBlue);
          box-shadow: 0.2rem 0.2rem 0.6rem var(--palette-darkShadow);
          transition-duration: 0.25s;
        }

        &-item {
          display: flex;
          align-items: center;
          padding: 1.2rem 2.4rem;
          color: var(--palette-white);
          font-size: 1.6rem;
          font-weight: 600;
          text-decoration: none;
          transition-duration: 0.25s;
          cursor: pointer;
          width: 100%;

          &:hover {
            background-color: var(--palette-skyBlue);
          }
        }
      }

      &--image {
        margin: auto;
      }
    }

    &__container {
      &--menu {
        background-color: var(--palette-deepBlue);
        display: flex;
        align-items: flex-start;
        height: 4.8rem;
        padding-left: 2.4rem;
        padding-right: 2.4rem;
      }

      &--image {
        margin-bottom: 3.6rem;
      }

      &--icon {
        margin-right: 1.6rem;

        &-exit {
          margin-left: 0.4rem;
          margin-right: 1.6rem;
        }
      }

      &--components {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    &__active {
      background-color: var(--palette-skyBlue);
    }
  }

  #menu__toggle {
    opacity: 0;
    display: none;
  }

  #menu__toggle:checked
    + .SidebarResponsive__component--hamburger-button
    > span {
    transform: rotate(45deg);
  }

  #menu__toggle:checked
    + .SidebarResponsive__component--hamburger-button
    > span::before {
    top: 0;
    transform: rotate(0deg);
  }

  #menu__toggle:checked
    + .SidebarResponsive__component--hamburger-button
    > span::after {
    top: 0;
    transform: rotate(90deg);
  }

  #menu__toggle:checked ~ .SidebarResponsive__component--menu-box {
    left: 0 !important;
    z-index: 2;
  }
`,{NO_AUTH_PATH:_n,USER_PAYMENT_LIST:Rn,ADMIN_ENTRY_PATH:Sn}=z.ROUTES,{ADMIN_CLIENT_LIST:In,ADMIN_PAYMENT_LIST:Cn}=z.ROUTES,{ENTRY_PATH:En,SETTINGS:Tn}=z.ROUTES,V=e=>{const t=Ne(),{selectedIndex:r}=fe(),{idx:s,text:o,url:n}=e,a=()=>{t(n),r.current=s};return S("p",{className:(()=>`SidebarResponsive__component--menu-item ${r.current===s?"SidebarResponsive__active":""}`)(),onClick:a,children:[c(he,{fontSize:"large",className:"SidebarResponsive__container--icon"}),o]})},pt=e=>{const t=rt().global.sideBar,r=Ne(),{setSignInStep:s,setUser:o,user:n,isAnonymous:a}=Xe(),{mutateAsync:i,reset:u}=et(),[,l]=Je("user"),{rol:p}=n!=null?n:{},x=async()=>{try{i(),u(),s(0),l(""),o(void 0),Ce.setCookie("token",""),r(_n),document.location.reload()}catch(y){console.warn(y)}},b=()=>S("p",{className:"SidebarResponsive__component--menu-item",onClick:x,children:[c(Ae,{className:"SidebarResponsive__container--icon-exit"}),t.logout]}),R=()=>a?null:S(J,{children:[c(V,{idx:10,text:t.start,url:En}),c(V,{idx:11,text:t.myPays,url:Rn})]}),d=()=>p!==10?null:S(J,{children:[c(V,{idx:20,text:t.startAdmin,url:Sn}),c(V,{idx:21,text:t.myPayments,url:Cn}),c(V,{idx:22,text:t.myClients,url:In}),c(V,{idx:23,text:t.setting,url:Tn})]});return c(bn,{className:"SidebarResponsive",children:S("div",{className:"SidebarResponsive__container--menu",children:[c("input",{id:"menu__toggle",type:"checkbox"}),c("label",{className:"SidebarResponsive__component--hamburger-button",htmlFor:"menu__toggle",children:c("span",{})}),S("div",{className:"SidebarResponsive__component--menu-box",children:[c("div",{className:"SidebarResponsive__container--image",children:c("img",{src:ut,alt:"logo Konecta",width:180,className:"SidebarResponsive__component--image"})}),S("div",{className:"SidebarResponsive__container--components",children:[R(),d(),b()]})]})]})})};pt.defaultProps={};const{BREAKPOINTS:Ie}=z,wn=we.div`
  .LayoutContainer {
    &__children {
      width: calc(100% - 20.4rem);
      min-height: 100vh;
      padding: 2.4rem;
      margin-left: 20.4rem;
      background-color: var(--palette-greyBackground);

      @media screen and (max-width: ${Ie.desktop}px) {
        padding: 2.4rem 0;
      }

      @media screen and (max-width: ${Ie.tablet}px) {
        width: 100%;
        margin-left: 0;
      }
    }

    &__container {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: ${Ie.tablet}px) {
        flex-direction: row;
      }
    }
  }
`,Nn=e=>{const{children:t}=e,{isLoading:r}=fe();return c(wn,{className:"LayoutContainer",children:S("div",{className:"LayoutContainer__container",children:[c(dt,{}),c(pt,{}),S("main",{className:"LayoutContainer__children",children:[" ",t]}),c(Lt,{isLoading:r})]})})};Nn.defaultProps={};export{Nn as L,On as a,oe as b,Y as i,se as r,fe as u};
