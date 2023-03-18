import{b as x,g as S,t as b,c as R,_ as s,f as _,aH as u,r as $,i as U,k as M,a as k,l as A,m as N}from"./index.4d215d3b.js";function X(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function P(t){return parseFloat(t)}function j(t){return x("MuiSkeleton",t)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=["animation","className","component","height","style","variant","width"];let r=t=>t,p,g,m,f;const F=t=>{const{classes:e,variant:a,animation:n,hasChildren:i,width:l,height:o}=t;return N({root:["root",a,n,i&&"withChildren",i&&!l&&"fitContent",i&&!o&&"heightAuto"]},j,e)},K=b(p||(p=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),T=b(g||(g=r`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),W=R("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=X(t.shape.borderRadius)||"px",n=P(t.shape.borderRadius);return s({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:_(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(m||(m=r`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),K),({ownerState:t,theme:e})=>t.animation==="wave"&&u(f||(f=r`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),T,(e.vars||e).palette.action.hover)),H=$.exports.forwardRef(function(e,a){const n=U({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:l,component:o="span",height:h,style:v,variant:C="text",width:w}=n,d=M(n,B),c=s({},n,{animation:i,component:o,variant:C,hasChildren:Boolean(d.children)}),y=F(c);return k(W,s({as:o,ref:a,className:A(y.root,l),ownerState:c},d,{style:s({width:w,height:h},v)}))}),L=H,O=t=>{const{width:e,height:a,animation:n,variant:i}=t;return k(L,{className:"SkeletonComponent",height:a,width:e,animation:n!=null?n:"pulse",variant:i!=null?i:"text"})};O.defaultProps={};export{O as S};
