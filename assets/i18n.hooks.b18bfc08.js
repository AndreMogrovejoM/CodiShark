import{r as s,o as qe,p as Ge,_ as W,k as oe,a as O,T as me,q as Xe,l as M,g as Pe,t as re,c as ie,i as Te,b as Je,v as fe,j as Qe,m as Ze,w as et,x as tt,y as nt,I as at,R as ot,z as rt,A as it,B as st,D as lt}from"./index.4d215d3b.js";const ct=typeof window<"u"?s.exports.useLayoutEffect:s.exports.useEffect,ut=ct;function K(e){const t=s.exports.useRef(e);return ut(()=>{t.current=e}),s.exports.useCallback((...n)=>(0,t.current)(...n),[])}let q=!0,te=!1,he;const dt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function pt(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&dt[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function mt(e){e.metaKey||e.altKey||e.ctrlKey||(q=!0)}function Z(){q=!1}function ft(){this.visibilityState==="hidden"&&te&&(q=!0)}function ht(e){e.addEventListener("keydown",mt,!0),e.addEventListener("mousedown",Z,!0),e.addEventListener("pointerdown",Z,!0),e.addEventListener("touchstart",Z,!0),e.addEventListener("visibilitychange",ft,!0)}function gt(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return q||pt(t)}function bt(){const e=s.exports.useCallback(r=>{r!=null&&ht(r.ownerDocument)},[]),t=s.exports.useRef(!1);function n(){return t.current?(te=!0,window.clearTimeout(he),he=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function o(r){return gt(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:o,onBlur:n,ref:e}}function se(e,t){var n=function(i){return t&&s.exports.isValidElement(i)?t(i):i},o=Object.create(null);return e&&s.exports.Children.map(e,function(r){return r}).forEach(function(r){o[r.key]=n(r)}),o}function yt(e,t){e=e||{},t=t||{};function n(m){return m in t?t[m]:e[m]}var o=Object.create(null),r=[];for(var i in e)i in t?r.length&&(o[i]=r,r=[]):r.push(i);var a,u={};for(var c in t){if(o[c])for(a=0;a<o[c].length;a++){var d=o[c][a];u[o[c][a]]=n(d)}u[c]=n(c)}for(a=0;a<r.length;a++)u[r[a]]=n(r[a]);return u}function j(e,t,n){return n[t]!=null?n[t]:e.props[t]}function xt(e,t){return se(e.children,function(n){return s.exports.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:j(n,"appear",e),enter:j(n,"enter",e),exit:j(n,"exit",e)})})}function Ct(e,t,n){var o=se(e.children),r=yt(t,o);return Object.keys(r).forEach(function(i){var a=r[i];if(!!s.exports.isValidElement(a)){var u=i in t,c=i in o,d=t[i],m=s.exports.isValidElement(d)&&!d.props.in;c&&(!u||m)?r[i]=s.exports.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:j(a,"exit",e),enter:j(a,"enter",e)}):!c&&u&&!m?r[i]=s.exports.cloneElement(a,{in:!1}):c&&u&&s.exports.isValidElement(d)&&(r[i]=s.exports.cloneElement(a,{onExited:n.bind(null,a),in:d.props.in,exit:j(a,"exit",e),enter:j(a,"enter",e)}))}}),r}var Et=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},vt={component:"div",childFactory:function(t){return t}},le=function(e){qe(t,e);function t(o,r){var i;i=e.call(this,o,r)||this;var a=i.handleExited.bind(Ge(i));return i.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,i){var a=i.children,u=i.handleExited,c=i.firstRender;return{children:c?xt(r,u):Ct(r,a,u),firstRender:!1}},n.handleExited=function(r,i){var a=se(this.props.children);r.key in a||(r.props.onExited&&r.props.onExited(i),this.mounted&&this.setState(function(u){var c=W({},u.children);return delete c[r.key],{children:c}}))},n.render=function(){var r=this.props,i=r.component,a=r.childFactory,u=oe(r,["component","childFactory"]),c=this.state.contextValue,d=Et(this.state.children).map(a);return delete u.appear,delete u.enter,delete u.exit,i===null?O(me.Provider,{value:c,children:d}):O(me.Provider,{value:c,children:O(i,{...u,children:d})})},t}(Xe.Component);le.propTypes={};le.defaultProps=vt;const Pt=le;function Tt(e){const{className:t,classes:n,pulsate:o=!1,rippleX:r,rippleY:i,rippleSize:a,in:u,onExited:c,timeout:d}=e,[m,E]=s.exports.useState(!1),f=M(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),y={width:a,height:a,top:-(a/2)+i,left:-(a/2)+r},h=M(n.child,m&&n.childLeaving,o&&n.childPulsate);return!u&&!m&&E(!0),s.exports.useEffect(()=>{if(!u&&c!=null){const T=setTimeout(c,d);return()=>{clearTimeout(T)}}},[c,u,d]),O("span",{className:f,style:y,children:O("span",{className:h})})}const wt=Pe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),S=wt,St=["center","classes","className"];let G=e=>e,ge,be,ye,xe;const ne=550,Dt=80,At=re(ge||(ge=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ft=re(be||(be=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Mt=re(ye||(ye=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),It=ie("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Rt=ie(Tt,{name:"MuiTouchRipple",slot:"Ripple"})(xe||(xe=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),S.rippleVisible,At,ne,({theme:e})=>e.transitions.easing.easeInOut,S.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,S.child,S.childLeaving,Ft,ne,({theme:e})=>e.transitions.easing.easeInOut,S.childPulsate,Mt,({theme:e})=>e.transitions.easing.easeInOut),Nt=s.exports.forwardRef(function(t,n){const o=Te({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:a}=o,u=oe(o,St),[c,d]=s.exports.useState([]),m=s.exports.useRef(0),E=s.exports.useRef(null);s.exports.useEffect(()=>{E.current&&(E.current(),E.current=null)},[c]);const f=s.exports.useRef(!1),y=s.exports.useRef(null),h=s.exports.useRef(null),T=s.exports.useRef(null);s.exports.useEffect(()=>()=>{clearTimeout(y.current)},[]);const B=s.exports.useCallback(p=>{const{pulsate:g,rippleX:v,rippleY:P,rippleSize:b,cb:x}=p;d(C=>[...C,O(Rt,{classes:{ripple:M(i.ripple,S.ripple),rippleVisible:M(i.rippleVisible,S.rippleVisible),ripplePulsate:M(i.ripplePulsate,S.ripplePulsate),child:M(i.child,S.child),childLeaving:M(i.childLeaving,S.childLeaving),childPulsate:M(i.childPulsate,S.childPulsate)},timeout:ne,pulsate:g,rippleX:v,rippleY:P,rippleSize:b},m.current)]),m.current+=1,E.current=x},[i]),I=s.exports.useCallback((p={},g={},v=()=>{})=>{const{pulsate:P=!1,center:b=r||g.pulsate,fakeElement:x=!1}=g;if((p==null?void 0:p.type)==="mousedown"&&f.current){f.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(f.current=!0);const C=x?null:T.current,w=C?C.getBoundingClientRect():{width:0,height:0,left:0,top:0};let R,k,V;if(b||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)R=Math.round(w.width/2),k=Math.round(w.height/2);else{const{clientX:$,clientY:N}=p.touches&&p.touches.length>0?p.touches[0]:p;R=Math.round($-w.left),k=Math.round(N-w.top)}if(b)V=Math.sqrt((2*w.width**2+w.height**2)/3),V%2===0&&(V+=1);else{const $=Math.max(Math.abs((C?C.clientWidth:0)-R),R)*2+2,N=Math.max(Math.abs((C?C.clientHeight:0)-k),k)*2+2;V=Math.sqrt($**2+N**2)}p!=null&&p.touches?h.current===null&&(h.current=()=>{B({pulsate:P,rippleX:R,rippleY:k,rippleSize:V,cb:v})},y.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Dt)):B({pulsate:P,rippleX:R,rippleY:k,rippleSize:V,cb:v})},[r,B]),D=s.exports.useCallback(()=>{I({},{pulsate:!0})},[I]),A=s.exports.useCallback((p,g)=>{if(clearTimeout(y.current),(p==null?void 0:p.type)==="touchend"&&h.current){h.current(),h.current=null,y.current=setTimeout(()=>{A(p,g)});return}h.current=null,d(v=>v.length>0?v.slice(1):v),E.current=g},[]);return s.exports.useImperativeHandle(n,()=>({pulsate:D,start:I,stop:A}),[D,I,A]),O(It,W({className:M(S.root,i.root,a),ref:T},u,{children:O(Pt,{component:null,exit:!0,children:c})}))}),Lt=Nt;function Ot(e){return Je("MuiButtonBase",e)}const Bt=Pe("MuiButtonBase",["root","disabled","focusVisible"]),kt=Bt,Vt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],$t=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:r}=e,a=Ze({root:["root",t&&"disabled",n&&"focusVisible"]},Ot,r);return n&&o&&(a.root+=` ${o}`),a},Ut=ie("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${kt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),jt=s.exports.forwardRef(function(t,n){const o=Te({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:a,className:u,component:c="button",disabled:d=!1,disableRipple:m=!1,disableTouchRipple:E=!1,focusRipple:f=!1,LinkComponent:y="a",onBlur:h,onClick:T,onContextMenu:B,onDragLeave:I,onFocus:D,onFocusVisible:A,onKeyDown:p,onKeyUp:g,onMouseDown:v,onMouseLeave:P,onMouseUp:b,onTouchEnd:x,onTouchMove:C,onTouchStart:w,tabIndex:R=0,TouchRippleProps:k,touchRippleRef:V,type:$}=o,N=oe(o,Vt),H=s.exports.useRef(null),F=s.exports.useRef(null),De=fe(F,V),{isFocusVisibleRef:ce,onFocus:Ae,onBlur:Fe,ref:Me}=bt(),[U,Y]=s.exports.useState(!1);d&&U&&Y(!1),s.exports.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),H.current.focus()}}),[]);const[X,Ie]=s.exports.useState(!1);s.exports.useEffect(()=>{Ie(!0)},[]);const Re=X&&!m&&!d;s.exports.useEffect(()=>{U&&f&&!m&&X&&F.current.pulsate()},[m,f,U,X]);function L(l,de,Ke=E){return K(pe=>(de&&de(pe),!Ke&&F.current&&F.current[l](pe),!0))}const Ne=L("start",v),Le=L("stop",B),Oe=L("stop",I),Be=L("stop",b),ke=L("stop",l=>{U&&l.preventDefault(),P&&P(l)}),Ve=L("start",w),$e=L("stop",x),Ue=L("stop",C),je=L("stop",l=>{Fe(l),ce.current===!1&&Y(!1),h&&h(l)},!1),He=K(l=>{H.current||(H.current=l.currentTarget),Ae(l),ce.current===!0&&(Y(!0),A&&A(l)),D&&D(l)}),J=()=>{const l=H.current;return c&&c!=="button"&&!(l.tagName==="A"&&l.href)},Q=s.exports.useRef(!1),ze=K(l=>{f&&!Q.current&&U&&F.current&&l.key===" "&&(Q.current=!0,F.current.stop(l,()=>{F.current.start(l)})),l.target===l.currentTarget&&J()&&l.key===" "&&l.preventDefault(),p&&p(l),l.target===l.currentTarget&&J()&&l.key==="Enter"&&!d&&(l.preventDefault(),T&&T(l))}),We=K(l=>{f&&l.key===" "&&F.current&&U&&!l.defaultPrevented&&(Q.current=!1,F.current.stop(l,()=>{F.current.pulsate(l)})),g&&g(l),T&&l.target===l.currentTarget&&J()&&l.key===" "&&!l.defaultPrevented&&T(l)});let _=c;_==="button"&&(N.href||N.to)&&(_=y);const z={};_==="button"?(z.type=$===void 0?"button":$,z.disabled=d):(!N.href&&!N.to&&(z.role="button"),d&&(z["aria-disabled"]=d));const Ye=fe(n,Me,H),ue=W({},o,{centerRipple:i,component:c,disabled:d,disableRipple:m,disableTouchRipple:E,focusRipple:f,tabIndex:R,focusVisible:U}),_e=$t(ue);return Qe(Ut,W({as:_,className:M(_e.root,u),ownerState:ue,onBlur:je,onClick:T,onContextMenu:Le,onFocus:He,onKeyDown:ze,onKeyUp:We,onMouseDown:Ne,onMouseLeave:ke,onMouseUp:Be,onDragLeave:Oe,onTouchEnd:$e,onTouchMove:Ue,onTouchStart:Ve,ref:Ye,tabIndex:d?-1:R,type:$},z,N,{children:[a,Re?O(Lt,W({ref:De,center:i},k)):null]}))}),nn=jt;function Ht(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Ce={};function ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Ce[t[0]]||(typeof t[0]=="string"&&(Ce[t[0]]=new Date),Ht.apply(void 0,t))}function Ee(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var o=function r(){setTimeout(function(){e.off("initialized",r)},0),n()};e.on("initialized",o)}})}function zt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=t.languages[0],r=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(o.toLowerCase()==="cimode")return!0;var a=function(c,d){var m=t.services.backendConnector.state["".concat(c,"|").concat(d)];return m===-1||m===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(o,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(o,e)&&(!r||a(i,e)))}function Wt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return ae("i18n.languages were undefined or empty",t.languages),!0;var o=t.options.ignoreJSONStructure!==void 0;return o?t.hasLoadedNamespace(e,{precheck:function(i,a){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!a(i.isLanguageChangingTo,e))return!1}}):zt(e,t,n)}function Yt(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o=[],r=!0,i=!1,a,u;try{for(n=n.call(e);!(r=(a=n.next()).done)&&(o.push(a.value),!(t&&o.length===t));r=!0);}catch(c){i=!0,u=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw u}}return o}}function _t(e,t){return et(e)||Yt(e,t)||tt(e,t)||nt()}function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ve(Object(n),!0).forEach(function(o){it(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var Kt=function(t,n){var o=s.exports.useRef();return s.exports.useEffect(function(){o.current=n?o.current:t},[t,n]),o.current};function qt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,o=s.exports.useContext(at)||{},r=o.i18n,i=o.defaultNS,a=n||r||st();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new ot),!a){ae("You will need to pass in an i18next instance by using initReactI18next");var u=function(x){return Array.isArray(x)?x[x.length-1]:x},c=[u,{},!1];return c.t=u,c.i18n={},c.ready=!1,c}a.options.react&&a.options.react.wait!==void 0&&ae("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var d=ee(ee(ee({},rt()),a.options.react),t),m=d.useSuspense,E=d.keyPrefix,f=e||i||a.options&&a.options.defaultNS;f=typeof f=="string"?[f]:f||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(f);var y=(a.isInitialized||a.initializedStoreOnce)&&f.every(function(b){return Wt(b,a,d)});function h(){return a.getFixedT(null,d.nsMode==="fallback"?f:f[0],E)}var T=s.exports.useState(h),B=_t(T,2),I=B[0],D=B[1],A=f.join(),p=Kt(A),g=s.exports.useRef(!0);s.exports.useEffect(function(){var b=d.bindI18n,x=d.bindI18nStore;g.current=!0,!y&&!m&&Ee(a,f,function(){g.current&&D(h)}),y&&p&&p!==A&&g.current&&D(h);function C(){g.current&&D(h)}return b&&a&&a.on(b,C),x&&a&&a.store.on(x,C),function(){g.current=!1,b&&a&&b.split(" ").forEach(function(w){return a.off(w,C)}),x&&a&&x.split(" ").forEach(function(w){return a.store.off(w,C)})}},[a,A]);var v=s.exports.useRef(!0);s.exports.useEffect(function(){g.current&&!v.current&&D(h),v.current=!1},[a,E]);var P=[I,a,y];if(P.t=I,P.i18n=a,P.ready=y,y||!y&&!m)return P;throw new Promise(function(b){Ee(a,f,function(){b()})})}const Gt="Country",Xt="Status",Jt={global:{settings:{title:"Administrator settings",success:"Success",confirm:"Confirm",cancel:"Desactive",note:"Note: Make this procedure only one time.",confirmed:"2FA procedure confirmed.",cancelled:"2FA procedure cancelled.",done:"2FA already configured",description:"If you want to connect your account with google second step verification should use the follow secret code or scan the next QR code, once done press confirm button to continue or cancel button to reject."},sideBar:{start:"Start",startAdmin:"Start Admin",myPays:"My payments",paymentDetails:"Payment details",myPayments:"My payments",myClients:"Customer list",logout:"Logout",support:"Contact",title:"Contact",direction:"La Republica 218 - Miraflores",setting:"Setting 2FA",phone:"0800 1652 1254",email:"info@b12.com",address:"La Republica 218 - Miraflores"},button:{text:"Loading..."},table:{TableHeader:{import:"Import",export:"Export"},TableFilters:{country:Gt,search:"Search",show:"Show",status:Xt,statusAll:"All",filters:"Filters",sort:"Sort",startDate:"Start date",endDate:"End date"},TableEmpty:{title:"It looks like you don't have records yet",buttonText:"Create new"},TableError:{title:"An error occurred while trying to load your records",buttonText:"Try again"},TablePaymentAdmin:{TableHeader:{name:"Name",date:"Payment date",amount:"Amount paid",method:"Payment method",state:"State",action:""},Pagination:{legend:(e,t,n)=>`Showing records from ${e} to ${t}  of a total of ${n} records.`,back:"Back",next:"Next"}},TableClientAdmin:{TableHeader:{name:"Name",dni:"Dni",email:"Email",phone:"Mobile phone",punishmentDate:"Punishment date",action:""},Pagination:{legend:(e,t,n)=>`Showing clients from ${e} to ${t}  of a total of ${n} clients.`,back:"Back",next:"Next"}},TablePaymentUser:{TableHeader:{concept:"Concept",originalAmount:"Original amount",amountPaid:"Amount paid",paymentDate:"Payment date",actions:"Actions",state:"State",details:""},TableRows:{buttonAction:"Download component",buttonDetail:"Ver detalles",buttonNoDetail:"You cannot download the payment voucher yet."},TableRowsExpand:{entity:"Banking entity:",typeDebt:"Type of debt:",typeExchange:"Currency type: ",date:"Date:"},Pagination:{legend:(e,t,n)=>`Showing payments from ${e} to ${t}  of a total of ${n} payments.`,back:"Back",next:"Next"}},TableDebtUser:{TableRows:{buttonExpand:"View details",amount:"Original amount",discount:"Pay amount",deadline:"Payment deadline"},TableRowsExpand:{entity:"Banking entity:",typeDebt:"Type of debt:",typeExchange:"Currency type: ",date:"Date:"},Pagination:{legend:(e,t,n)=>`Showing debts from ${e} to ${t}  of a total of ${n} debts.`,back:"Back",next:"Next"}}},ProfileSelectOverlay:{user:"User settings",signOut:"Sign out"},ModalContact:{title:"Contact",direction:"La Republica 218 - Miraflores",setting:"Setting 2FA",phone:"0800 1652 1254",email:"info@b12.com",address:"La Republica 218 - Miraflores"},select:"Select",inputSearch:"Search",progress:"Loading...",selectFilter:"Filters",copyright:"Copyright \xA9 B12 2022 - All rights reserved."},home:{},pages:{FourZeroThree:{title:"You need access",subtitle:"Request access or use an account that allows you to access.",accessing:"You are accessing as"},UserPayPanel:{title:"List of payments",buttonExcel:"Excel",buttonPdf:"PDF",buttonPrint:"Print"},UserOperationPanel:{title:"List of clients",buttonExcel:"Excel",buttonPdf:"PDF",buttonPrint:"Print"},AdminPaymentDetails:{proof:{title:"Proof of payment",name:"Names",bankEntity:"Bank entity",debtType:"Debt type",currencyType:"Currency type",paymentMethod:"Payment method",date:"Date",hour:"Hour",paymentcode:"Payment code",originalAmount:"original amount",discount:"Discount",subtotal:"Subtotal",amountPaid:"Amount paid",buttons:{pdf:"Download PDF",email:"Sent by mail",back:"Back"}},card:{title:"\xA1Thank you for your payment!",subtitle:"Now, you can a lot of the benefits that go",alt:"Profile photo"}}},chart:{title:"Year's income",jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dic:"December"},signIn:{SignInFormUser:{title:"Welcome",subtitle:"We send a code according to the selected method, enter it below to continue:",titleAlt:"We need to identify you to continue",subtitleAlt:"We send a code according to the selected method.",subtitleAltTwo:"Enter it below to continue:",button:"Continue",altLogo:"Konecta logo",copyright:"Copyright \xA9 B12 2022 - All rights reserved.",fields:{fieldDNI:"DNI",fieldCode:"Verification code",fieldDate:"Date of issue"},benefitTitle:"Know the benefits of",benefitSubTitle:"Be up to date with your payments",ul1:"Credit lines",ul2:"Personal loans",ul3:"Mortgage credits",ul4:"Vehicle credits",image:"Image"},SignInValidation:{greeting:"Welcome",instructions:"Please choose a verification method:",button:"Continue",fields:{labelPhone:"Send an SMS code to the number",labelEmail:"Send a code to the mail:"}},SignInFormCode:{question:"Didn't receive any code? ",answer:"Resend verification code",method:"Try another verification method",button:"Continue"},SignInForm:{welcome:"Welcome",instructions:"Enter your information to access your accounts",emailPlaceholder:"hellow@email.com",passwordPlaceholder:"password",signIn:"Sign in"},SignInAdministrator:{step1:{user:"User",password:"Password",continue:"Continue",copyright:"Copyright \xA9 B12 2022 - All rights reserved.",welcome:"Welcome",greetings:"Hello! Follow this simple steps"},step2:{code:"Enter the code sent to your cell phone number to continue:",continue:"Enter",copyright:"Copyright \xA9 B12 2022 - All rights reserved.",welcome:"Welcome",place:"verification code"}},AdministratorPanel:{charges1:"Charges made",charges2:"Charges in process",footerTitle:"See all",name:"Customer's name",debt:"Amount of debt"},Indicator:{title:"Here are some indicators",year:"YEAR",month:"MONTH",day:"DAY",card1:"Collections Made",card2:"Income to the System",card3:"Contact requests by call",card4:"Payments by wire transfer",errorText:"Error at uploading file",import:"Import CSV",done:"Done",doneText:"File uploaded successfully.",uploadClients:"Upload clients",uploadDescription:"The document must be uploaded in the same format and order in order to process it correctly.",downloadTemplate:"Download template"},PanelBanner:{greetings:"Hello",activity:"This is this month's activity:",connections:"Revenues",payments:"Recorded payments",calls:"Call requests"},PanelBannerClient:{title:"KNOW THE PROMOTIONS WE HAVE FOR YOU:",paragraph1:"-Reduction of up to 70% of debt",paragraph2:"-Campaigns for new credit",paragraph3:"-Leveling in credit bureaus"},CardImageOne:{title:"70%",subtitle:"Save until a paying here"},CardImageTwo:{subtitle1:"\u201CLive in peace has no price",subtitle2:"Live with a freedom without debts",subtitle3:"helped me achieve my dreams\u201D"},IndicatorsClientOne:{greetings:"Welcome"},IndicatorsClientTwo:{debt:"Current Debt"},Summary:{title:"Here we provide the amount of your debt and the deadlines to make your payments:"},InformationClient:{title:"Card payment ",subtitle:"We accept the following payment methods:",subtitle2:"You can also pay with your debit cards",title2:"Bank transfer",subtitle3:"BANK",subtitle4:"Checking account soles",subtitle5:"Interbank account soles",paragraph:"After making the deposit, please send us the voucher to 900 415 521 or to atencion@b12.pe, indicating the transaction number.",subtitle6:"Generate your transaction number to make your payment",button:"PAY",button2:"GENERATE TRANSACTION NUMBER"},PaymentRejected:{button:"Try again",title:"Payment details",paragraph1:"Amount Paid:",paragraph2:"Date:",paragraph3:"Time:",paragraph4:"Amount Paid:",success:"Successful Payment",approved:"Your payment has been successfully approved",rejected:"Payment Rejected",disapproved:"Payment could not be processed"},ClientContainer:{title:"Here we provide the amount of your debt and the deadlines to make your payments:",copyright:"Copyright B12 2022 - All rights reserved.",image:"Image"},OperationNumberModal:{operation:"Your operation number is",current:"Checking account soles",interbank:"Interbank account soles",amount:"Amount payable",offer:"Offer available until",copy:"Copy",paragraph:"Go to the nearest agency and make the deposit indicating the operation number, you can also make interbank transfers from the App of your choice."}},components:{UserDetails:{titleDetails:"Customer details",paragraphDetails:"Select a customer to view details",alt:"Payment details",name:"Name:",lastName:"Last names:",documentType:"Document type:",documentNumber:"Document number:",birthDate:"Birth date:",gender:"Gender:",district:"District:",address:"Address:",email:"Email:",phone:"Phone:",mobile:"Mobile:"},OperationalDetails:{titleDetails:"Payment details",paragraphDetails:"Select a payment to view details",alt:"Payment details",customerName:"Customer Name:",amountPaid:"Amount Paid:",date:"Date:",hour:"Hour:",paymentMedium:"Payment Medium:",paymentStatus:"Payment Status:",button:"View payment receipt",buttonNoDetail:"You cannot download the payment voucher yet.",invalide:"Invalide",validate:"Valide"},FooterResponsive:{myPayments:"My payments",contact:"Contact",paymentIcon:"Payment icon",homeIcon:"Home icon",contactIcon:"Contact icon"},CardDebts:{buttonExpand:"View details",amount:"Original amount",discount:"Pay amount",deadline:"Payment deadline",button:"Pay",button2:"Generate transaction number",buttonPayment:"Paid"}},utils:{validations:{fieldRequired:"This field is required",includesLowerCase:"Include at least one lower case character",includesUpperCase:"Include at least one upper case character",includesNumber:"Include at least one number",includesSpecialCharacter:e=>`Include at least one special character ${e}`,noSpecialCharacterAllowed:e=>`Special characters ${e} are not allowed`,minPasswordLength:e=>`The minimum length should be ${e} characters`,stringMinLength:e=>`Enter at least ${e} characters`,stringMaxLength:e=>`Enter no more than ${e} characters`,whiteSpaceOnly:"The field cannot only include whitespace characters",noWhiteSpaceAllowed:"The field cannot include whitespaces",lettersAndWhitespace:"The field should only contain alphabetic characters and spaces",lettersNumbersAndWhitespace:"The field should only contain alphabetic characters, numbers and spaces",validEmail:"Enter a valid email address",pattern:e=>`The field does not match ${e}`}}},Qt="Estado",Zt={global:{settings:{title:"Configuraci\xF3n de administrator",success:"\xC9xito",confirm:"Confirmar",cancel:"Desactivar",note:"Nota: Realizar este procedimiento una unica vez.",confirmed:"Se confirm\xF3 el registro de 2FA.",cancelled:"Se cancel\xF3 el registro de 2FA.",done:"Configuraci\xF3n de 2FA realizada.",description:"Si desea conectar su cuenta con la verificaci\xF3n de segundo paso de Google, debe usar el siguiente c\xF3digo secreto o escanear el c\xF3digo QR, una vez hecho esto, presione el bot\xF3n de confirmaci\xF3n para continuar o el bot\xF3n de cancelar para rechazar."},sideBar:{start:"Inicio",startAdmin:"Inicio Admin",myPays:"Mis pagos",paymentDetails:"Detalles de pago",myPayments:"Listado de pagos",myClients:"Listado de clientes",logout:"Cerrar sesi\xF3n",support:"Contacto",title:"Contacto",direction:"La Republica 218 - Miraflores",setting:"Configuraci\xF3n 2FA",phone:"0800 1652 1254",email:"info@b12.com",address:"La Republica 218 - Miraflores"},button:{text:"Cargando..."},table:{TableHeader:{import:"Importar",export:"Exportar"},TableFilters:{country:"Pa\xEDs",search:"Buscar",show:"Mostrar",status:Qt,statusAll:"Todos",filters:"Filtros",sort:"Ordenar",startDate:"Fecha inicio",endDate:"Fecha fin"},TableEmpty:{title:"Parece que todav\xEDa no tienes datos",buttonText:"Agregar nuevo"},TableError:{title:"Ocurri\xF3 un error mientras carg\xE1bamos tus datos",buttonText:"Volver a intentar"},TablePaymentAdmin:{TableHeader:{name:"Nombre",date:"Fecha de pago",amount:"Monto pagado",method:"M\xE9todo de pago",state:"Estado",action:""},Pagination:{legend:(e,t,n)=>`Mostrando registros del ${e} al ${t} de un total de ${n} registros.`,back:"Anterior",next:"Siguiente"}},TableClientAdmin:{TableHeader:{name:"Nombre",dni:"Dni",email:"Email",phone:"Celular",punishmentDate:"Fecha de castigo",action:""},Pagination:{legend:(e,t,n)=>`Mostrando clientes del ${e} al ${t} de un total de ${n} clientes.`,back:"Anterior",next:"Siguiente"}},TablePaymentUser:{TableHeader:{concept:"Concepto",originalAmount:"Monto original",amountPaid:"Monto pagado",paymentDate:"Fecha de pago",actions:"Acciones",state:"State",details:""},TableRows:{buttonAction:"Descargar comprobante",buttonDetail:"Ver detalles",buttonNoDetail:"Aun no se puede descargar el comprobante de pago"},TableRowsExpand:{entity:"Entidad bancaria:",typeDebt:"Tipo de deuda:",typeExchange:"Tipo de moneda:",date:"Fecha:"},Pagination:{legend:(e,t,n)=>`Mostrando pagos del ${e} al ${t} de un total de ${n} pagos.`,back:"Anterior",next:"Siguiente"}},TableDebtUser:{TableRows:{buttonExpand:"Ver detalles",amount:"Monto original",discount:"Monto a pagar",deadline:"Fecha l\xEDmite de pago"},TableRowsExpand:{entity:"Entidad bancaria:",typeDebt:"Tipo de deuda:",typeExchange:"Tipo de moneda:",date:"Fecha:"},Pagination:{legend:(e,t,n)=>`Mostrando deudas del ${e} al ${t} de un total de ${n} deudas.`,back:"Anterior",next:"Siguiente"}}},ProfileSelectOverlay:{user:"Configuraciones de usuario",signOut:"Cerrar Sesi\xF3n"},ModalContact:{title:"Contacto",direction:"La Republica 218 - Miraflores",setting:"Configuraci\xF3n 2FA",phone:"0800 1652 1254",email:"info@b12.com",address:"La Republica 218 - Miraflores"},select:"Seleccionar",inputSearch:"Buscar",progress:"Cargando...",selectFilter:"Filtros",copyright:"Copyright B12 2022 - Todos los derechos reservados"},home:{},pages:{FourZeroThree:{title:"Necesitas accesos",subtitle:"Solicita acceso o usa una cuenta que te permita acceder.",accessing:"Est\xE1s accediendo como"},UserPayPanel:{title:"Listado de clientes",buttonExcel:"Excel",buttonPdf:"PDF",buttonPrint:"Imprimir"},UserOperationPanel:{title:"Listado de pagos",buttonExcel:"Excel",buttonPdf:"PDF",buttonPrint:"Imprimir"},AdminPaymentDetails:{proof:{title:"Comprobante de pago",name:"Nombres",bankEntity:"Entidad bancaria",debtType:"Tipo de deuda",currencyType:"Tipo de moneda",paymentMethod:"M\xE9todo de pago",date:"Fecha",hour:"Hora",paymentcode:"Codigo de pago",originalAmount:"Monto original",discount:"Descuento",subtotal:"Subtotal",amountPaid:"Monto pagado",buttons:{pdf:"Descargar PDF",email:"Enviar por correo",back:"Regresar"}},card:{title:"\xA1Gracias por realizar su pago!",subtitle:"Ahora podr\xE1 disfrutar de muchos beneficios",alt:"Foto de usuario"}}},chart:{title:"Ingresos de este a\xF1o",jan:"Enero",feb:"Febrero",mar:"Marzo",apr:"Abril",may:"Mayo",jun:"Junio",jul:"Julio",aug:"Agosto",sep:"Septiembre",oct:"Octubre",nov:"Noviembre",dic:"Diciembre"},signIn:{SignInFormUser:{title:"Bienvenido(a)",subtitle:"Necesitamos identificarte para poder continuar",titleAlt:"Ingrese el c\xF3digo recibido",subtitleAlt:"Enviamos un c\xF3digo seg\xFAn el m\xE9todo seleccionado.",subtitleAltTwo:"Ingreselo a continuaci\xF3n para continuar:",button:"Continuar",altLogo:"Logo de Konecta",copyright:"Copyright \xA9 B12 2022 - Todos los derechos reservados.",fields:{fieldDNI:"DNI",fieldCode:"Cod. Verificador",fieldDate:"Fecha de Emisi\xF3n"},benefitTitle:"Conoce los beneficios de",benefitSubTitle:"Estar al d\xEDa en tus pagos",ul1:"Lineas de cr\xE9ditos",ul2:"Pr\xE9stamos personales",ul3:"Cr\xE9ditos hipotecarios",ul4:"Cr\xE9ditos vehiculares",image:"Imagen"},SignInValidation:{greeting:"Bienvenido",instructions:"Por favor elige un metodo de verificaci\xF3n:",button:"Continuar",fields:{labelPhone:"Enviar un c\xF3digo SMS al n\xFAmero:",labelEmail:"Enviar un c\xF3digo al correo:"}},SignInFormCode:{question:"No recibi\xF3 ningun c\xF3digo?",answer:"Reenviar c\xF3digo de verificaci\xF3n ",method:"Probar otro m\xE9todo de verificaci\xF3n",button:"Continuar"},SignInForm:{welcome:"Bienvenido/a",instructions:"Ingresa tus datos para acceder a tus cuentas",emailPlaceholder:"hola@correo.com",passwordPlaceholder:"contrase\xF1a",signIn:"Iniciar sesi\xF3n"},SignInAdministrator:{step1:{user:"Usuario",password:"Contrase\xF1a",continue:"Continuar",copyright:"Copyright \xA9 B12 2022 - Todos los derechos reservados.",welcome:"Bienvenido",greetings:"\xA1Hola! Sigue estos simples pasos"},step2:{code:"Ingrese el c\xF3digo enviado a su n\xFAmero de celular para poder continuar:",continue:"Ingresar",copyright:"Copyright \xA9 B12 2022 - Todos los derechos reservados.",welcome:"Bienvenido",place:"Codigo Verificador"}},AdministratorPanel:{charges1:"Cobros realizados",charges2:"Cobros en proceso",footerTitle:"Ver todos",name:"Nombres del cliente",debt:"Monto de deuda"},Indicator:{title:"Te mostramos algunos indicadores",year:"A\xD1O",month:"MES",day:"DIA",card1:"Cobros Realizados",card2:"Ingresos al Sistema",card3:"Pagos pendientes",card4:"Pagos por transferencia",errorText:"Error al subir el archivo",import:"Importar CSV",done:"Hecho",doneText:"Archivo cargado con \xE9xito.",uploadClients:"Subir nuevos clientes",uploadDescription:"EL documento debe subirse en el mismo formato y orden para poder procesarlo correctamente.",downloadTemplate:"Descargar plantilla"},PanelBanner:{greetings:"Hola",activity:"Esta es la actividad de este mes:",connections:"Ingresos",payments:"Pagos registrados",calls:"Solicitudes de llamadas"},PanelBannerClient:{title:"CONOCE LAS PROMOCIONES QUE TENEMOS PARA TI:",paragraph1:"-Reducci\xF3n de hasta el 70% de la deuda",paragraph2:"-Campa\xF1as para nuevos cr\xE9dito",paragraph3:"-Nivelaci\xF3n en las centrales de riesgo"},CardImageOne:{title:"70%",subtitle:"Ahorra hasta un Pagando por aqu\xED"},CardImageTwo:{subtitle1:"\u201CVivir tranquilo no tiene precio\u201D",subtitle2:"Vive de esa libertad libre de deudas",subtitle3:"me ayud\xF3 a alcanzar mis sue\xF1os\u201D"},IndicatorsClientOne:{greetings:"Bienvenido(a)"},IndicatorsClientTwo:{debt:"Deuda Actual"},Summary:{title:"Aqu\xED brindamos el monto de tu deuda y las fechas l\xEDmite para hacer tus pagos:"},InformationClient:{title:"Pago con tarjeta",subtitle:"Aceptamos los siguientes m\xE9todos de pago:",subtitle2:"Tambi\xE9n puedes pagar con tus tarjetas de d\xE9bito",title2:"Transferencia bancaria",subtitle3:"BANCO",subtitle4:"Cuenta corriente soles",subtitle5:"Cuenta interbancaria soles",paragraph:"Despu\xE9s de realizar el dep\xF3sito, env\xEDanos el voucher al n\xFAmero 900 415 521 oal correo atencion@b12.pe, indicando el n\xFAmero de operaci\xF3n.",subtitle6:"Genera tu n\xFAmero de operaci\xF3n para realizar el pago",button:"Pagar",button2:"Generar n\xFAmero de operaci\xF3n"},PaymentRejected:{button:"Volver a intentar",title:"Detalles del pago",paragraph1:"Monto Pagado: ",paragraph2:"Fecha: ",paragraph3:"Hora: ",paragraph4:"Monto Pagado: ",success:"Pago Exitoso",approved:"Se ha aprobado su pago con \xE9xito",rejected:"Pago Rechazado",disapproved:"No se pudo procesar el pago"},ClientContainer:{title:"Aqu\xED brindamos el monto de tu deuda y las fechas l\xEDmite para hacer tus pagos:",copyright:"Copyright B12 2022 - Todos los derechos reservados",image:"Imagen"},OperationNumberModal:{operation:"Su numero de operaci\xF3n es",current:"Cuenta corriente soles",interbank:"Cuenta interbancaria soles",amount:"Monto a pagar",offer:"Oferta disponible hasta el",copy:"Copiar",paragraph:"Ac\xE9rquese a la agencia mas cercana y realice el deposito indicando el numero de operaci\xF3n, tambi\xE9n puede realizar transferencias interbancarias desde la App de su preferencia."}},components:{UserDetails:{titleDetails:"Detalles del cliente",paragraphDetails:"Seleccione un cliente para ver los detalles",alt:"Detalle de pago",name:"Nombres:",lastName:"Apellidos:",documentType:"Tipo de documento:",documentNumber:"N\xFAmero documento:",birthDate:"Fecha de nacimiento:",gender:"G\xE9nero:",district:"Distrito:",address:"Direcci\xF3n:",email:"Email:",phone:"Tel\xE9fono:",mobile:"Celular:"},OperationalDetails:{titleDetails:"Detalles del pago",paragraphDetails:"Seleccione un pago para ver los detalles",alt:"Detalle de pago",customerName:"Nombre del cliente:",amountPaid:"Monto pagado: ",date:"Fecha: ",hour:"Hora: ",paymentMedium:"Medio de pago:",paymentStatus:"Estado del pago",button:"Ver comprobante de pago",buttonNoDetail:"Aun no se puede descargar el comprobante de pago",invalide:"Invalidar",validate:"Validar"},FooterResponsive:{myPayments:"Mis pagos",contact:"Contacto",paymentIcon:"Icono de pago",homeIcon:"Icono de inicio",contactIcon:"Icono de contacto"},CardDebts:{buttonExpand:"Ver detalles",amount:"Monto original",discount:"Monto a pagar",deadline:"Fecha l\xEDmite de pago",button:"Pagar",button2:"Generar n\xFAmero de operaci\xF3n",buttonPayment:"Pagado"}},utils:{validations:{fieldRequired:"Este campo es requerido",includesLowerCase:"Se necesita al menos un car\xE1cter en min\xFAscula",includesUpperCase:"Se necesita al menos un car\xE1cter en may\xFAscula",includesNumber:"Se necesita al menos un car\xE1cter num\xE9rico",includesSpecialCharacter:e=>`Incluye por lo menos un car\xE1cter especial ${e}`,noSpecialCharacterAllowed:e=>`Los caracteres especiales ${e} no est\xE1n permitidos`,minPasswordLength:e=>`Ingresa al menos ${e} caracteres`,stringMinLength:e=>`Ingresa al menos ${e} caracteres`,stringMaxLength:e=>`Ingresa como m\xE1ximo ${e} caracteres`,whiteSpaceOnly:"El campo no puede solo incluir caracteres en blanco",noWhiteSpaceAllowed:"El campo no puede incluir caracteres en blanco",lettersAndWhitespace:"El campo solo deber\xEDa incluir caracteres alfab\xE9ticos y espacios",lettersNumbersAndWhitespace:"El campo solo deber\xEDa incluir caracteres alfab\xE9ticos, num\xE9ricos y espacios",validEmail:"Ingresa un correo electr\xF3nico valido",pattern:e=>`El campo no concuerda ${e}`}}},we={es:Zt,en:Jt},Se=(e,t)=>{const{en:n,es:o}=t;switch(e){case"en":return n;case"es":return o;default:return o}},an=()=>Se(lt.language,we),on=()=>{const{language:e}=qt().i18n;return s.exports.useMemo(()=>Se(e,we),[e])};export{nn as B,_t as _,ut as a,K as b,bt as c,an as g,on as u};