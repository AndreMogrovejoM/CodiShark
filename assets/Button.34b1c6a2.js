import{g as S,a as L,s as g,B as V,r as O,b as _,c as j,d as B,e as F,f as U,C as G}from"./useNavigate.695961aa.js";import{r as x,c as r,_ as n,b as p,d as A,a as b,j as D}from"./index.efc8dff5.js";function q(o){return L("MuiButton",o)}const H=S("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=H,J=x.exports.createContext({}),K=J,Q=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],X=o=>{const{color:a,disableElevation:i,fullWidth:t,size:s,variant:l,classes:c}=o,z={root:["root",l,`${l}${r(a)}`,`size${r(s)}`,`${l}Size${r(s)}`,a==="inherit"&&"colorInherit",i&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${r(s)}`],endIcon:["endIcon",`iconSize${r(s)}`]},d=F(z,q,c);return n({},c,d)},R=o=>n({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Y=g(V,{shouldForwardProp:o=>O(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.root,a[i.variant],a[`${i.variant}${r(i.color)}`],a[`size${r(i.size)}`],a[`${i.variant}Size${r(i.size)}`],i.color==="inherit"&&a.colorInherit,i.disableElevation&&a.disableElevation,i.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var i,t;return n({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":n({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:p(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:p(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:p(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:(o.vars||o).palette.grey.A100,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":n({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${v.focusVisible}`]:n({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${v.disabled}`]:n({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="outlined"&&a.color==="secondary"&&{border:`1px solid ${(o.vars||o).palette.action.disabled}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${p(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(i=(t=o.palette).getContrastText)==null?void 0:i.call(t,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}}),Z=g("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.startIcon,a[`iconSize${r(i.size)}`]]}})(({ownerState:o})=>n({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},R(o))),w=g("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.endIcon,a[`iconSize${r(i.size)}`]]}})(({ownerState:o})=>n({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},R(o))),oo=x.exports.forwardRef(function(a,i){const t=x.exports.useContext(K),s=_(t,a),l=j({props:s,name:"MuiButton"}),{children:c,color:z="primary",component:d="button",className:h,disabled:f=!1,disableElevation:k=!1,disableFocusRipple:y=!1,endIcon:C,focusVisibleClassName:m,fullWidth:E=!1,size:P="medium",startIcon:$,type:I,variant:W="text"}=l,M=A(l,Q),u=n({},l,{color:z,component:d,disabled:f,disableElevation:k,disableFocusRipple:y,fullWidth:E,size:P,type:I,variant:W}),e=X(u),T=$&&b(Z,{className:e.startIcon,ownerState:u,children:$}),N=C&&b(w,{className:e.endIcon,ownerState:u,children:C});return D(Y,n({ownerState:u,className:B(t.className,e.root,h),component:d,disabled:f,focusRipple:!y,focusVisibleClassName:B(e.focusVisible,m),ref:i,type:I},M,{classes:e,children:[T,c,N]}))}),ao=oo,io=g(ao)(o=>({borderRadius:"1rem",textTransform:"none",fontSize:"1.4rem",paddingTop:"0.4rem",paddingBottom:"0.4rem"})),to=x.exports.forwardRef((o,a)=>{const{children:i,className:t}=o,s=U().global.button;return b(io,{...o,ref:a,startIcon:o!=null&&o.disabled?b(G,{size:12}):o==null?void 0:o.startIcon,className:t,children:o!=null&&o.disabled?s.text:i})});export{to as B};
