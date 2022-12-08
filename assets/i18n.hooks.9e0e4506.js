import{r as s,n as qe,o as Ge,_ as W,k as oe,a as L,T as me,p as Xe,l as R,g as Te,q as re,c as ie,i as Pe,b as Je,t as fe,j as Qe,m as Ze,v as et,w as tt,x as nt,I as at,R as ot,y as rt,z as it,A as st,B as lt}from"./index.2f653318.js";const ct=typeof window<"u"?s.exports.useLayoutEffect:s.exports.useEffect,ut=ct;function Y(e){const t=s.exports.useRef(e);return ut(()=>{t.current=e}),s.exports.useCallback((...n)=>(0,t.current)(...n),[])}let q=!0,te=!1,he;const dt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function pt(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&dt[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function mt(e){e.metaKey||e.altKey||e.ctrlKey||(q=!0)}function Z(){q=!1}function ft(){this.visibilityState==="hidden"&&te&&(q=!0)}function ht(e){e.addEventListener("keydown",mt,!0),e.addEventListener("mousedown",Z,!0),e.addEventListener("pointerdown",Z,!0),e.addEventListener("touchstart",Z,!0),e.addEventListener("visibilitychange",ft,!0)}function gt(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return q||pt(t)}function bt(){const e=s.exports.useCallback(r=>{r!=null&&ht(r.ownerDocument)},[]),t=s.exports.useRef(!1);function n(){return t.current?(te=!0,window.clearTimeout(he),he=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function o(r){return gt(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:o,onBlur:n,ref:e}}function se(e,t){var n=function(i){return t&&s.exports.isValidElement(i)?t(i):i},o=Object.create(null);return e&&s.exports.Children.map(e,function(r){return r}).forEach(function(r){o[r.key]=n(r)}),o}function yt(e,t){e=e||{},t=t||{};function n(m){return m in t?t[m]:e[m]}var o=Object.create(null),r=[];for(var i in e)i in t?r.length&&(o[i]=r,r=[]):r.push(i);var a,u={};for(var c in t){if(o[c])for(a=0;a<o[c].length;a++){var d=o[c][a];u[o[c][a]]=n(d)}u[c]=n(c)}for(a=0;a<r.length;a++)u[r[a]]=n(r[a]);return u}function U(e,t,n){return n[t]!=null?n[t]:e.props[t]}function xt(e,t){return se(e.children,function(n){return s.exports.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:U(n,"appear",e),enter:U(n,"enter",e),exit:U(n,"exit",e)})})}function Et(e,t,n){var o=se(e.children),r=yt(t,o);return Object.keys(r).forEach(function(i){var a=r[i];if(!!s.exports.isValidElement(a)){var u=i in t,c=i in o,d=t[i],m=s.exports.isValidElement(d)&&!d.props.in;c&&(!u||m)?r[i]=s.exports.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:U(a,"exit",e),enter:U(a,"enter",e)}):!c&&u&&!m?r[i]=s.exports.cloneElement(a,{in:!1}):c&&u&&s.exports.isValidElement(d)&&(r[i]=s.exports.cloneElement(a,{onExited:n.bind(null,a),in:d.props.in,exit:U(a,"exit",e),enter:U(a,"enter",e)}))}}),r}var vt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ct={component:"div",childFactory:function(t){return t}},le=function(e){qe(t,e);function t(o,r){var i;i=e.call(this,o,r)||this;var a=i.handleExited.bind(Ge(i));return i.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,i){var a=i.children,u=i.handleExited,c=i.firstRender;return{children:c?xt(r,u):Et(r,a,u),firstRender:!1}},n.handleExited=function(r,i){var a=se(this.props.children);r.key in a||(r.props.onExited&&r.props.onExited(i),this.mounted&&this.setState(function(u){var c=W({},u.children);return delete c[r.key],{children:c}}))},n.render=function(){var r=this.props,i=r.component,a=r.childFactory,u=oe(r,["component","childFactory"]),c=this.state.contextValue,d=vt(this.state.children).map(a);return delete u.appear,delete u.enter,delete u.exit,i===null?L(me.Provider,{value:c,children:d}):L(me.Provider,{value:c,children:L(i,{...u,children:d})})},t}(Xe.Component);le.propTypes={};le.defaultProps=Ct;const Tt=le;function Pt(e){const{className:t,classes:n,pulsate:o=!1,rippleX:r,rippleY:i,rippleSize:a,in:u,onExited:c,timeout:d}=e,[m,v]=s.exports.useState(!1),f=R(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),y={width:a,height:a,top:-(a/2)+i,left:-(a/2)+r},h=R(n.child,m&&n.childLeaving,o&&n.childPulsate);return!u&&!m&&v(!0),s.exports.useEffect(()=>{if(!u&&c!=null){const P=setTimeout(c,d);return()=>{clearTimeout(P)}}},[c,u,d]),L("span",{className:f,style:y,children:L("span",{className:h})})}const St=Te("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),w=St,wt=["center","classes","className"];let G=e=>e,ge,be,ye,xe;const ne=550,At=80,Ft=re(ge||(ge=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Dt=re(be||(be=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Rt=re(ye||(ye=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),It=ie("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Mt=ie(Pt,{name:"MuiTouchRipple",slot:"Ripple"})(xe||(xe=G`
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
`),w.rippleVisible,Ft,ne,({theme:e})=>e.transitions.easing.easeInOut,w.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,w.child,w.childLeaving,Dt,ne,({theme:e})=>e.transitions.easing.easeInOut,w.childPulsate,Rt,({theme:e})=>e.transitions.easing.easeInOut),Nt=s.exports.forwardRef(function(t,n){const o=Pe({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:a}=o,u=oe(o,wt),[c,d]=s.exports.useState([]),m=s.exports.useRef(0),v=s.exports.useRef(null);s.exports.useEffect(()=>{v.current&&(v.current(),v.current=null)},[c]);const f=s.exports.useRef(!1),y=s.exports.useRef(null),h=s.exports.useRef(null),P=s.exports.useRef(null);s.exports.useEffect(()=>()=>{clearTimeout(y.current)},[]);const B=s.exports.useCallback(p=>{const{pulsate:g,rippleX:C,rippleY:T,rippleSize:b,cb:x}=p;d(E=>[...E,L(Mt,{classes:{ripple:R(i.ripple,w.ripple),rippleVisible:R(i.rippleVisible,w.rippleVisible),ripplePulsate:R(i.ripplePulsate,w.ripplePulsate),child:R(i.child,w.child),childLeaving:R(i.childLeaving,w.childLeaving),childPulsate:R(i.childPulsate,w.childPulsate)},timeout:ne,pulsate:g,rippleX:C,rippleY:T,rippleSize:b},m.current)]),m.current+=1,v.current=x},[i]),I=s.exports.useCallback((p={},g={},C=()=>{})=>{const{pulsate:T=!1,center:b=r||g.pulsate,fakeElement:x=!1}=g;if((p==null?void 0:p.type)==="mousedown"&&f.current){f.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(f.current=!0);const E=x?null:P.current,S=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let M,k,V;if(b||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)M=Math.round(S.width/2),k=Math.round(S.height/2);else{const{clientX:$,clientY:N}=p.touches&&p.touches.length>0?p.touches[0]:p;M=Math.round($-S.left),k=Math.round(N-S.top)}if(b)V=Math.sqrt((2*S.width**2+S.height**2)/3),V%2===0&&(V+=1);else{const $=Math.max(Math.abs((E?E.clientWidth:0)-M),M)*2+2,N=Math.max(Math.abs((E?E.clientHeight:0)-k),k)*2+2;V=Math.sqrt($**2+N**2)}p!=null&&p.touches?h.current===null&&(h.current=()=>{B({pulsate:T,rippleX:M,rippleY:k,rippleSize:V,cb:C})},y.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},At)):B({pulsate:T,rippleX:M,rippleY:k,rippleSize:V,cb:C})},[r,B]),A=s.exports.useCallback(()=>{I({},{pulsate:!0})},[I]),F=s.exports.useCallback((p,g)=>{if(clearTimeout(y.current),(p==null?void 0:p.type)==="touchend"&&h.current){h.current(),h.current=null,y.current=setTimeout(()=>{F(p,g)});return}h.current=null,d(C=>C.length>0?C.slice(1):C),v.current=g},[]);return s.exports.useImperativeHandle(n,()=>({pulsate:A,start:I,stop:F}),[A,I,F]),L(It,W({className:R(w.root,i.root,a),ref:P},u,{children:L(Tt,{component:null,exit:!0,children:c})}))}),Ot=Nt;function Lt(e){return Je("MuiButtonBase",e)}const Bt=Te("MuiButtonBase",["root","disabled","focusVisible"]),kt=Bt,Vt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],$t=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:r}=e,a=Ze({root:["root",t&&"disabled",n&&"focusVisible"]},Lt,r);return n&&o&&(a.root+=` ${o}`),a},jt=ie("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${kt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ut=s.exports.forwardRef(function(t,n){const o=Pe({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:a,className:u,component:c="button",disabled:d=!1,disableRipple:m=!1,disableTouchRipple:v=!1,focusRipple:f=!1,LinkComponent:y="a",onBlur:h,onClick:P,onContextMenu:B,onDragLeave:I,onFocus:A,onFocusVisible:F,onKeyDown:p,onKeyUp:g,onMouseDown:C,onMouseLeave:T,onMouseUp:b,onTouchEnd:x,onTouchMove:E,onTouchStart:S,tabIndex:M=0,TouchRippleProps:k,touchRippleRef:V,type:$}=o,N=oe(o,Vt),z=s.exports.useRef(null),D=s.exports.useRef(null),Ae=fe(D,V),{isFocusVisibleRef:ce,onFocus:Fe,onBlur:De,ref:Re}=bt(),[j,_]=s.exports.useState(!1);d&&j&&_(!1),s.exports.useImperativeHandle(r,()=>({focusVisible:()=>{_(!0),z.current.focus()}}),[]);const[X,Ie]=s.exports.useState(!1);s.exports.useEffect(()=>{Ie(!0)},[]);const Me=X&&!m&&!d;s.exports.useEffect(()=>{j&&f&&!m&&X&&D.current.pulsate()},[m,f,j,X]);function O(l,de,Ye=v){return Y(pe=>(de&&de(pe),!Ye&&D.current&&D.current[l](pe),!0))}const Ne=O("start",C),Oe=O("stop",B),Le=O("stop",I),Be=O("stop",b),ke=O("stop",l=>{j&&l.preventDefault(),T&&T(l)}),Ve=O("start",S),$e=O("stop",x),je=O("stop",E),Ue=O("stop",l=>{De(l),ce.current===!1&&_(!1),h&&h(l)},!1),ze=Y(l=>{z.current||(z.current=l.currentTarget),Fe(l),ce.current===!0&&(_(!0),F&&F(l)),A&&A(l)}),J=()=>{const l=z.current;return c&&c!=="button"&&!(l.tagName==="A"&&l.href)},Q=s.exports.useRef(!1),He=Y(l=>{f&&!Q.current&&j&&D.current&&l.key===" "&&(Q.current=!0,D.current.stop(l,()=>{D.current.start(l)})),l.target===l.currentTarget&&J()&&l.key===" "&&l.preventDefault(),p&&p(l),l.target===l.currentTarget&&J()&&l.key==="Enter"&&!d&&(l.preventDefault(),P&&P(l))}),We=Y(l=>{f&&l.key===" "&&D.current&&j&&!l.defaultPrevented&&(Q.current=!1,D.current.stop(l,()=>{D.current.pulsate(l)})),g&&g(l),P&&l.target===l.currentTarget&&J()&&l.key===" "&&!l.defaultPrevented&&P(l)});let K=c;K==="button"&&(N.href||N.to)&&(K=y);const H={};K==="button"?(H.type=$===void 0?"button":$,H.disabled=d):(!N.href&&!N.to&&(H.role="button"),d&&(H["aria-disabled"]=d));const _e=fe(n,Re,z),ue=W({},o,{centerRipple:i,component:c,disabled:d,disableRipple:m,disableTouchRipple:v,focusRipple:f,tabIndex:M,focusVisible:j}),Ke=$t(ue);return Qe(jt,W({as:K,className:R(Ke.root,u),ownerState:ue,onBlur:Ue,onClick:P,onContextMenu:Oe,onFocus:ze,onKeyDown:He,onKeyUp:We,onMouseDown:Ne,onMouseLeave:ke,onMouseUp:Be,onDragLeave:Le,onTouchEnd:$e,onTouchMove:je,onTouchStart:Ve,ref:_e,tabIndex:d?-1:M,type:$},H,N,{children:[a,Me?L(Ot,W({ref:Ae,center:i},k)):null]}))}),nn=Ut;function zt(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Ee={};function ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Ee[t[0]]||(typeof t[0]=="string"&&(Ee[t[0]]=new Date),zt.apply(void 0,t))}function ve(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var o=function r(){setTimeout(function(){e.off("initialized",r)},0),n()};e.on("initialized",o)}})}function Ht(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=t.languages[0],r=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(o.toLowerCase()==="cimode")return!0;var a=function(c,d){var m=t.services.backendConnector.state["".concat(c,"|").concat(d)];return m===-1||m===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(o,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||a(o,e)&&(!r||a(i,e)))}function Wt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return ae("i18n.languages were undefined or empty",t.languages),!0;var o=t.options.ignoreJSONStructure!==void 0;return o?t.hasLoadedNamespace(e,{precheck:function(i,a){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!a(i.isLanguageChangingTo,e))return!1}}):Ht(e,t,n)}function _t(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o=[],r=!0,i=!1,a,u;try{for(n=n.call(e);!(r=(a=n.next()).done)&&(o.push(a.value),!(t&&o.length===t));r=!0);}catch(c){i=!0,u=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw u}}return o}}function Kt(e,t){return et(e)||_t(e,t)||tt(e,t)||nt()}function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ce(Object(n),!0).forEach(function(o){it(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var Yt=function(t,n){var o=s.exports.useRef();return s.exports.useEffect(function(){o.current=n?o.current:t},[t,n]),o.current};function qt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,o=s.exports.useContext(at)||{},r=o.i18n,i=o.defaultNS,a=n||r||st();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new ot),!a){ae("You will need to pass in an i18next instance by using initReactI18next");var u=function(x){return Array.isArray(x)?x[x.length-1]:x},c=[u,{},!1];return c.t=u,c.i18n={},c.ready=!1,c}a.options.react&&a.options.react.wait!==void 0&&ae("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var d=ee(ee(ee({},rt()),a.options.react),t),m=d.useSuspense,v=d.keyPrefix,f=e||i||a.options&&a.options.defaultNS;f=typeof f=="string"?[f]:f||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(f);var y=(a.isInitialized||a.initializedStoreOnce)&&f.every(function(b){return Wt(b,a,d)});function h(){return a.getFixedT(null,d.nsMode==="fallback"?f:f[0],v)}var P=s.exports.useState(h),B=Kt(P,2),I=B[0],A=B[1],F=f.join(),p=Yt(F),g=s.exports.useRef(!0);s.exports.useEffect(function(){var b=d.bindI18n,x=d.bindI18nStore;g.current=!0,!y&&!m&&ve(a,f,function(){g.current&&A(h)}),y&&p&&p!==F&&g.current&&A(h);function E(){g.current&&A(h)}return b&&a&&a.on(b,E),x&&a&&a.store.on(x,E),function(){g.current=!1,b&&a&&b.split(" ").forEach(function(S){return a.off(S,E)}),x&&a&&x.split(" ").forEach(function(S){return a.store.off(S,E)})}},[a,F]);var C=s.exports.useRef(!0);s.exports.useEffect(function(){g.current&&!C.current&&A(h),C.current=!1},[a,v]);var T=[I,a,y];if(T.t=I,T.i18n=a,T.ready=y,y||!y&&!m)return T;throw new Promise(function(b){ve(a,f,function(){b()})})}const Gt="Country",Xt="Status",Jt={global:{settings:{title:"Administrator settings",success:"Success",confirm:"Confirm",cancel:"Cancel",note:"Note: Make this procedure only one time.",confirmed:"2FA procedure confirmed.",cancelled:"2FA procedure cancelled.",description:"If you want to connect your account with google second step verification should use the follow secret code or scan the next QR code, once done press confirm button to continue or cancel button to reject."},sideBar:{start:"Start",startAdmin:"Start Admin",myPayments:"Payment list",myClients:"Customer list",logout:"Logout",title:"Contact",direction:"la Republica 218 - Miraflores",setting:"Setting 2FA"},button:{text:"Loading..."},table:{TableHeader:{import:"Import",export:"Export"},TableFilters:{country:Gt,search:"Search",show:"Show",status:Xt,statusAll:"All",filters:"Filters",sort:"Sort",startDate:"Start date",endDate:"End date"},TableEmpty:{title:"It looks like you don't have records yet",buttonText:"Create new"},TableError:{title:"An error occurred while trying to load your records",buttonText:"Try again"},TablePaymentUser:{TableHeader:{name:"Name",date:"Payment date",amount:"Amount paid",method:"Payment method",state:"State",action:""},TableHeader2:{name:"Name",capitalDebt:"Capital debt",interests:"Interests",bills:"Bills",punishmentDate:"Punishment date",action:""},TableRows:{pay:"Payout",pending:"Pending"},Pagination:{legend:(e,t,n)=>`Showing records from ${e} to ${t}  of a total of ${n} records.`,back:"Back",next:"Next"}},TablePaymentAdmin:{TableHeader:{concept:"Concept",originalAmount:"Original amount",amountPaid:"Amount paid",paymentDate:"Payment date",actions:"Actions",details:""},TableRows:{buttonAction:"Download component",buttonDetail:"View details"},TableRowsExpand:{entity:"Banking entity:",typeDebt:"Type of debt:",typeExchange:"Currency type: ",date:"Date:"},Pagination:{legend:(e,t,n)=>`Showing payments from ${e} to ${t}  of a total of ${n} payments.`,back:"Back",next:"Next"}}},ProfileSelectOverlay:{user:"User settings",signOut:"Sign out"},select:"Select",inputSearch:"Search",progress:"Loading..."},home:{},pages:{FourZeroThree:{title:"You need access",subtitle:"Request access or use an account that allows you to access.",accessing:"You are accessing as"},UserPayPanel:{title:"List of payments",buttonExcel:"Excel",buttonPdf:"PDF",buttonPrint:"Print"},UserOperationPanel:{title:"List of clients",buttonExcel:"Excel",buttonPdf:"PDF",buttonPrint:"Print"},AdminPaymentDetails:{proof:{title:"Proof of payment",name:"Names",bankEntity:"Bank entity",debtType:"Debt type",currencyType:"Currency type",paymentMethod:"Payment method",date:"Date",hour:"Hour",paymentcode:"Payment code",originalAmount:"original amount",discount:"Discount",subtotal:"Subtotal",amountPaid:"Amount paid",buttons:{pdf:"Download PDF",email:"Sent by mail",back:"Back"}},card:{title:"\xA1Thank you for your payment!",subtitle:"Now, you can a lot of the benefits that go",alt:"Profile photo"}}},chart:{title:"Year's income",jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dic:"December"},signIn:{SignInFormUser:{title:"Welcome",subtitle:"We send a code according to the selected method, enter it below to continue:",titleAlt:"We need to identify you to continue",subtitleAlt:"We send a code according to the selected method.",subtitleAltTwo:"Enter it below to continue:",button:"Continue",altLogo:"Konecta logo",copyright:"Copyright \xA9 B12 2022 - All rights reserved.",fields:{fieldDNI:"DNI",fieldCode:"Verification code",fieldDate:"Date of issue"},benefitTitle:"Know the benefits of",benefitSubTitle:"Be up to date with your payments",ul1:"Credit lines",ul2:"Personal loans",ul3:"Mortgage credits",ul4:"Vehicle credits"},SignInValidation:{greeting:"Welcome",instructions:"Please choose a verification method:",button:"Continue",fields:{labelPhone:"Send an SMS code to the number",labelEmail:"Send a code to the mail:"}},SignInFormCode:{question:"Didn't receive any code? ",answer:"Resend verification code",method:"Try another verification method",button:"Continue"},SignInForm:{welcome:"Welcome",instructions:"Enter your information to access your accounts",emailPlaceholder:"hellow@email.com",passwordPlaceholder:"password",signIn:"Sign in"},SignInAdministrator:{step1:{user:"User",password:"Password",continue:"Continue",copyright:"Copyright \xA9 B12 2022 - All rights reserved.",welcome:"Welcome",greetings:"Hello! Follow this simple steps"},step2:{code:"Enter the code sent to your cell phone number to continue:",continue:"Enter",copyright:"Copyright \xA9 B12 2022 - All rights reserved.",welcome:"Welcome",place:"verification code"}},AdministratorPanel:{charges1:"Charges made",charges2:"Charges in process",footerTitle:"See all",name:"Customer's name",debt:"Amount of debt"},Indicator:{title:"Here are some indicators",year:"YEAR",month:"MONTH",day:"DAY",card1:"Collections Made",card2:"Income to the System",card3:"Contact requests by call",card4:"Payments by wire transfer"},PanelBanner:{greetings:"Hello",activity:"This is this month's activity:",connections:"Revenues",payments:"Recorded payments",calls:"Call requests"},PanelBannerClient:{title:"KNOW THE PROMOTIONS WE HAVE FOR YOU:",paragraph1:"-Reduction of up to 70% of debt",paragraph2:"-Campaigns for new credit",paragraph3:"-Leveling in credit bureaus"},CardImageOne:{title:"Live a debt-free life",subtitle:"Living peacefully is priceless"},CardImageTwo:{subtitle1:"\u201Cto pay off my debt was to reach the",subtitle2:"financial freedom, and that freedom",subtitle3:"helped me achieve my dreams\u201D"},IndicatorsClientOne:{greetings:"Welcome"},Summary:{title:"Here we provide the amount of your debt and the deadlines to make your payments:",subtitle:"Banco Interbank Loans",summary1:"Original amount",summary2:"Original amount",summary3:"Payment deadline",button:"VER DETALLE",bank:"Entidad Bancaria:",amount:"Tipo de Deuda:",currency:"Tipo de Moneda:",date:"Fecha:"},InformationClient:{title:"Card payment ",subtitle:"We accept the following payment methods:",subtitle2:"You can also pay with your debit cards",title2:"Bank transfer",subtitle3:"BANK",subtitle4:"Checking account soles",subtitle5:"Interbank account soles",paragraph:"After making the deposit, please send us the voucher to 900 415 521 or to atencion@b12.pe, indicating the transaction number.",subtitle6:"Generate your transaction number to make your payment",button:"PAY",button2:"GENERATE TRANSACTION NUMBER"},PaymentRejected:{button:"Try again",title:"Payment details",paragraph1:"Amount Paid:",paragraph2:"Date:",paragraph3:"Time:",paragraph4:"Amount Paid:",success:"Successful Payment",approved:"Your payment has been successfully approved",rejected:"Payment Rejected",disapproved:"Payment could not be processed"},ClientContainer:{title:"Here we provide the amount of your debt and the deadlines to make your payments:"},OperationNumberModal:{operation:"Your operation number is",current:"Checking account soles",interbank:"Interbank account soles",amount:"Amount payable",offer:"Offer available until 09/08/2022",paragraph:"Go to the nearest agency and make the deposit indicating the operation number, you can also make interbank transfers from the App of your choice."}},components:{UserDetails:{titleDetails:"Customer details",paragraphDetails:"Select a customer to view details",alt:"Payment details",name:"Name:",lastName:"Last names:",documentType:"Document type:",documentNumber:"Document number:",birthDate:"Birth date:",gender:"Gender:",district:"District:",address:"Address:",email:"Email:",phone:"Phone:",mobile:"Mobile:"},OperationalDetails:{titleDetails:"Payment details",paragraphDetails:"Select a payment to view details",alt:"Payment details",customerName:"Customer Name:",amountPaid:"Amount Paid:",date:"Date:",hour:"Hour:",paymentMedium:"Payment Medium:",paymentStatus:"Payment Status:",button:"View payment receipt"}},utils:{validations:{fieldRequired:"This field is required",includesLowerCase:"Include at least one lower case character",includesUpperCase:"Include at least one upper case character",includesNumber:"Include at least one number",includesSpecialCharacter:e=>`Include at least one special character ${e}`,noSpecialCharacterAllowed:e=>`Special characters ${e} are not allowed`,minPasswordLength:e=>`The minimum length should be ${e} characters`,stringMinLength:e=>`Enter at least ${e} characters`,stringMaxLength:e=>`Enter no more than ${e} characters`,whiteSpaceOnly:"The field cannot only include whitespace characters",noWhiteSpaceAllowed:"The field cannot include whitespaces",lettersAndWhitespace:"The field should only contain alphabetic characters and spaces",lettersNumbersAndWhitespace:"The field should only contain alphabetic characters, numbers and spaces",validEmail:"Enter a valid email address",pattern:e=>`The field does not match ${e}`}}},Qt="Estado",Zt={global:{settings:{title:"Configuraci\xF3n de administrator",success:"\xC9xito",confirm:"Confirmar",cancel:"Cancelar",note:"Nota: Realizar este procedimiento una unica vez.",confirmed:"Se confirm\xF3 el registro de 2FA.",cancelled:"Se cancel\xF3 el registro de 2FA.",description:"Si desea conectar su cuenta con la verificaci\xF3n de segundo paso de Google, debe usar el siguiente c\xF3digo secreto o escanear el c\xF3digo QR, una vez hecho esto, presione el bot\xF3n de confirmaci\xF3n para continuar o el bot\xF3n de cancelar para rechazar."},sideBar:{start:"Inicio",startAdmin:"Inicio Admin",myPayments:"Listado de pagos",myClients:"Listado de clientes",logout:"Cerrar sesi\xF3n",title:"Contacto",direction:"la Republica 218 - Miraflores",setting:"Configuraci\xF3n 2FA"},button:{text:"Cargando..."},table:{TableHeader:{import:"Importar",export:"Exportar"},TableFilters:{country:"Pa\xEDs",search:"Buscar",show:"Mostrar",status:Qt,statusAll:"Todos",filters:"Filtros",sort:"Ordenar",startDate:"Fecha inicio",endDate:"Fecha fin"},TableEmpty:{title:"Parece que todav\xEDa no tienes datos",buttonText:"Agregar nuevo"},TableError:{title:"Ocurri\xF3 un error mientras carg\xE1bamos tus datos",buttonText:"Volver a intentar"},TablePaymentUser:{TableHeader:{name:"Nombre",date:"Fecha de pago",amount:"Monto pagado",method:"M\xE9todo de pago",state:"Estado",action:""},TableHeader2:{name:"Nombre",capitalDebt:"Deuda de capital",interests:"Intereses",bills:"Cuentas",punishmentDate:"Fecha de castigo",action:""},TableRows:{pay:"Pagado",pending:"Pendiente"},Pagination:{legend:(e,t,n)=>`Mostrando registros del ${e} al ${t} de un total de ${n} registros.`,back:"Anterior",next:"Siguiente"}},TablePaymentAdmin:{TableHeader:{concept:"Concepto",originalAmount:"Monto original",amountPaid:"Monto pagado",paymentDate:"Fecha de pago",actions:"Acciones",details:""},TableRows:{buttonAction:"Descargar comprobante",buttonDetail:"Ver detalles"},TableRowsExpand:{entity:"Entidad bancaria:",typeDebt:"Tipo de deuda:",typeExchange:"Tipo de moneda:",date:"Fecha:"},Pagination:{legend:(e,t,n)=>`Mostrando pagos del ${e} al ${t} de un total de ${n} pagos.`,back:"Anterior",next:"Siguiente"}}},ProfileSelectOverlay:{user:"Configuraciones de usuario",signOut:"Cerrar Sesi\xF3n"},select:"Seleccionar",inputSearch:"Buscar",progress:"Cargando..."},home:{},pages:{FourZeroThree:{title:"Necesitas accesos",subtitle:"Solicita acceso o usa una cuenta que te permita acceder.",accessing:"Est\xE1s accediendo como"},UserPayPanel:{title:"Listado de clientes",buttonExcel:"Excel",buttonPdf:"PDF",buttonPrint:"Imprimir"},UserOperationPanel:{title:"Listado de pagos",buttonExcel:"Excel",buttonPdf:"PDF",buttonPrint:"Imprimir"},AdminPaymentDetails:{proof:{title:"Comprobante de pago",name:"Nombres",bankEntity:"Entidad bancaria",debtType:"Tipo de deuda",currencyType:"Tipo de moneda",paymentMethod:"M\xE9todo de pago",date:"Fecha",hour:"Hora",paymentcode:"Codigo de pago",originalAmount:"Monto original",discount:"Descuento",subtotal:"Subtotal",amountPaid:"Monto pagado",buttons:{pdf:"Descargar PDF",email:"Enviar por correo",back:"Regresar"}},card:{title:"\xA1Gracias por realizar su pago!",subtitle:"Ahora podr\xE1 disfrutar de muchos beneficios",alt:"Foto de usuario"}}},chart:{title:"Ingresos de este a\xF1o",jan:"Enero",feb:"Febrero",mar:"Marzo",apr:"Abril",may:"Mayo",jun:"Junio",jul:"Julio",aug:"Agosto",sep:"Septiembre",oct:"Octubre",nov:"Noviembre",dic:"Diciembre"},signIn:{SignInFormUser:{title:"Bienvenido(a)",subtitle:"Necesitamos identificarte para poder continuar",titleAlt:"Ingrese el c\xF3digo recibido",subtitleAlt:"Enviamos un c\xF3digo seg\xFAn el m\xE9todo seleccionado.",subtitleAltTwo:"Ingreselo a continuaci\xF3n para continuar:",button:"Continuar",altLogo:"Logo de Konecta",copyright:"Copyright \xA9 B12 2022 - Todos los derechos reservados.",fields:{fieldDNI:"DNI",fieldCode:"Cod. Verificador",fieldDate:"Fecha de Emisi\xF3n"},benefitTitle:"Conoce los beneficios de",benefitSubTitle:"Estar al d\xEDa en tus pagos",ul1:"Lineas de cr\xE9ditos",ul2:"Pr\xE9stamos personales",ul3:"Cr\xE9ditos hipotecarios",ul4:"Cr\xE9ditos vehiculares"},SignInValidation:{greeting:"Bienvenido",instructions:"Por favor elige un metodo de verificaci\xF3n:",button:"Continuar",fields:{labelPhone:"Enviar un c\xF3digo SMS al n\xFAmero",labelEmail:"Enviar un c\xF3digo al correo:"}},SignInFormCode:{question:"No recibi\xF3 ningun c\xF3digo?",answer:"Reenviar c\xF3digo de verificaci\xF3n ",method:"Probar otro m\xE9todo de verificaci\xF3n",button:"Continuar"},SignInForm:{welcome:"Bienvenido/a",instructions:"Ingresa tus datos para acceder a tus cuentas",emailPlaceholder:"hola@correo.com",passwordPlaceholder:"contrase\xF1a",signIn:"Iniciar sesi\xF3n"},SignInAdministrator:{step1:{user:"Usuario",password:"Contrase\xF1a",continue:"Continuar",copyright:"Copyright \xA9 B12 2022 - Todos los derechos reservados.",welcome:"Bienvenido",greetings:"\xA1Hola! Sigue estos simples pasos"},step2:{code:"Ingrese el c\xF3digo enviado a su n\xFAmero de celular para poder continuar:",continue:"Ingresar",copyright:"Copyright \xA9 B12 2022 - Todos los derechos reservados.",welcome:"Bienvenido",place:"Codigo Verificador"}},AdministratorPanel:{charges1:"Cobros realizados",charges2:"Cobros en proceso",footerTitle:"Ver todos",name:"Nombres del cliente",debt:"Monto de deuda"},Indicator:{title:"Te mostramos algunos indicadores",year:"A\xD1O",month:"MES",day:"DIA",card1:"Cobros Realizados",card2:"Ingresos al Sistema",card3:"Solicitudes de contacto por llamada",card4:"Pagos por transferencia"},PanelBanner:{greetings:"Hola",activity:"Esta es la actividad de este mes:",connections:"Ingresos",payments:"Pagos registrados",calls:"Solicitudes de llamadas"},PanelBannerClient:{title:"CONOCE LAS PROMOCIONES QUE TENEMOS PARA TI:",paragraph1:"-Reducci\xF3n de hasta el 70% de la deuda",paragraph2:"-Campa\xF1as para nuevos cr\xE9dito",paragraph3:"-Nivelaci\xF3n en las centrales de riesgo"},CardImageOne:{title:"Vive la vida libre de deudas",subtitle:"Vivir tranquilo no tiene precio"},CardImageTwo:{subtitle1:"\u201Cpagar mi deuda fue alcanzar la",subtitle2:"libertad financiera, y esa libertad",subtitle3:"me ayud\xF3 a alcanzar mis sue\xF1os\u201D"},IndicatorsClientOne:{greetings:"Bienvenido(a)"},Summary:{title:"Aqu\xED brindamos el monto de tu deuda y las fechas l\xEDmite para hacer tus pagos:",subtitle:"Pr\xE9stamos Banco Interbank",summary1:"Monto original",summary2:"Monto original",summary3:"Fecha l\xEDmite de pago",button:"VER DETALLE",bank:"Entidad Bancaria:",amount:"Tipo de Deuda:",currency:"Tipo de Moneda:",date:"Fecha:"},InformationClient:{title:"Pago con tarjeta",subtitle:"Aceptamos los siguientes m\xE9todos de pago:",subtitle2:"Tambi\xE9n puedes pagar con tus tarjetas de d\xE9bito",title2:"Transferencia bancaria",subtitle3:"BANCO",subtitle4:"Cuenta corriente soles",subtitle5:"Cuenta interbancaria soles",paragraph:"Despu\xE9s de realizar el dep\xF3sito, env\xEDanos el voucher al n\xFAmero 900 415 521 oal correo atencion@b12.pe, indicando el n\xFAmero de operaci\xF3n.",subtitle6:"Genera tu n\xFAmero de operaci\xF3n para realizar el pago",button:"Pagar",button2:"Generar n\xFAmero de operaci\xF3n"},PaymentRejected:{button:"Volver a intentar",title:"Detalles del pago",paragraph1:"Monto Pagado:",paragraph2:"Fecha:",paragraph3:"Hora:",paragraph4:"Monto Pagado:",success:"Pago Exitoso",approved:"Se ha aprobado su pago con \xE9xito",rejected:"Pago Rechazado",disapproved:"No se pudo procesar el pago"},ClientContainer:{title:"Aqu\xED brindamos el monto de tu deuda y las fechas l\xEDmite para hacer tus pagos:"},OperationNumberModal:{operation:"Su numero de operaci\xF3n es",current:"Cuenta corriente soles",interbank:"Cuenta interbancaria soles",amount:"Monto a pagar",offer:"Oferta disponible hasta el 09/08/2022",paragraph:"Ac\xE9rquese a la agencia mas cercana y realice el deposito indicando el numero de operaci\xF3n, tambi\xE9n puede realizar transferencias interbancarias desde la App de su preferencia."}},components:{UserDetails:{titleDetails:"Detalles del cliente",paragraphDetails:"Seleccione un cliente para ver los detalles",alt:"Detalle de pago",name:"Nombres:",lastName:"Apellidos:",documentType:"Tipo de documento:",documentNumber:"N\xFAmero documento:",birthDate:"Fecha de nacimiento:",gender:"G\xE9nero:",district:"Distrito:",address:"Direcci\xF3n:",email:"Email:",phone:"Tel\xE9fono:",mobile:"Celular:"},OperationalDetails:{titleDetails:"Detalles del pago",paragraphDetails:"Seleccione un pago para ver los detalles",alt:"Detalle de pago",customerName:"Nombre del cliente:",amountPaid:"Monto pagado:",date:"Fecha:",hour:"Hora:",paymentMedium:"Medio de pago:",paymentStatus:"Estado del pago",button:"Ver comprobante de pago"}},utils:{validations:{fieldRequired:"Este campo es requerido",includesLowerCase:"Se necesita al menos un car\xE1cter en min\xFAscula",includesUpperCase:"Se necesita al menos un car\xE1cter en may\xFAscula",includesNumber:"Se necesita al menos un car\xE1cter num\xE9rico",includesSpecialCharacter:e=>`Incluye por lo menos un car\xE1cter especial ${e}`,noSpecialCharacterAllowed:e=>`Los caracteres especiales ${e} no est\xE1n permitidos`,minPasswordLength:e=>`Ingresa al menos ${e} caracteres`,stringMinLength:e=>`Ingresa al menos ${e} caracteres`,stringMaxLength:e=>`Ingresa como m\xE1ximo ${e} caracteres`,whiteSpaceOnly:"El campo no puede solo incluir caracteres en blanco",noWhiteSpaceAllowed:"El campo no puede incluir caracteres en blanco",lettersAndWhitespace:"El campo solo deber\xEDa incluir caracteres alfab\xE9ticos y espacios",lettersNumbersAndWhitespace:"El campo solo deber\xEDa incluir caracteres alfab\xE9ticos, num\xE9ricos y espacios",validEmail:"Ingresa un correo electr\xF3nico valido",pattern:e=>`El campo no concuerda ${e}`}}},Se={es:Zt,en:Jt},we=(e,t)=>{const{en:n,es:o}=t;switch(e){case"en":return n;case"es":return o;default:return o}},an=()=>we(lt.language,Se),on=()=>{const{language:e}=qt().i18n;return s.exports.useMemo(()=>we(e,Se),[e])};export{nn as B,Kt as _,ut as a,Y as b,bt as c,an as g,on as u};
