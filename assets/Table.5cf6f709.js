import{r as rn,i as ln,a as sn}from"./Layout.container.d514c021.js";import{y as dn}from"./auth.service.hooks.54244ada.js";import{s as g,a as Oe,j as cn,ag as j,r as o,E as h,ah as pn}from"./index.0497ccc9.js";var Ge={},gn=ln.exports;Object.defineProperty(Ge,"__esModule",{value:!0});var vt=Ge.default=void 0,un=gn(rn()),bn=sn,mn=(0,un.default)((0,bn.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");vt=Ge.default=mn;const hn=g.div`
  .SearchInput {
    &__container {
      background: var(--palette-greyBackgroundSearch);
      display: flex;
      align-items: center;
      padding: 0.4rem 1.2rem;
      border-radius: 0.8rem;

      &__icon {
        padding-right: 0.8rem;
        padding-left: 0.8rem;
      }
    }
    &__component {
      &--input {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.6rem;
        background: var(--palette-greyBackgroundSearch);
        border: none;
        margin-left: 0.8rem;

        &:focus {
          outline: none;
        }
      }
    }
  }
`,xn=e=>{const t=dn().global;return Oe(hn,{className:"SearchInput ",children:cn("div",{className:"SearchInput__container",children:[Oe(vt,{}),Oe("input",{className:"SearchInput__component--input",type:"text",placeholder:t.inputSearch})]})})};xn.defaultProps={};var Lo=function(e,t,n,a){var r=typeof a<"u"?[a,e]:[e],i=new Blob(r,{type:n||"application/octet-stream"});if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(i,t);else{var s=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i),d=document.createElement("a");d.style.display="none",d.href=s,d.setAttribute("download",t),typeof d.download>"u"&&d.setAttribute("target","_blank"),document.body.appendChild(d),d.click(),setTimeout(function(){document.body.removeChild(d),window.URL.revokeObjectURL(s)},200)}},K;function ie(e,t){return e[t]}function We(e,t){return t.split(".").reduce((n,a)=>{const r=a.match(/[^\]\\[.]+/g);if(r&&r.length>1)for(let i=0;i<r.length;i++)return n[r[i]][r[i+1]];return n[a]},e)}function wn(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function fn(e=[],t,n="id"){const a=e.slice(),r=ie(t,n);return r?a.splice(a.findIndex(i=>ie(i,n)===r),1):a.splice(a.findIndex(i=>i===t),1),a}function ut(e){return e.map((t,n)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=n+1),a})}function ue(e,t){return Math.ceil(e/t)}function Ne(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(K||(K={}));const D=()=>null;function yt(e,t=[],n=[]){let a={},r=[...n];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(r=[...r,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{style:a,classNames:r.join(" ")}}function ke(e,t=[],n="id"){const a=ie(e,n);return a?t.some(r=>ie(r,n)===a):t.some(r=>r===e)}function Se(e,t){return t?e.findIndex(n=>be(n.id,t)):-1}function be(e,t){return e==t}function Cn(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:r,rowCount:i,mergeSelections:s}=t,d=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(s){const v=d?[...e.selectedRows,...r.filter(u=>!ke(u,e.selectedRows,a))]:e.selectedRows.filter(u=>!ke(u,r,a));return Object.assign(Object.assign({},e),{allSelected:d,selectedCount:v.length,selectedRows:v,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:d,selectedCount:d?i:0,selectedRows:d?r:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:r,isSelected:i,rowCount:s,singleSelect:d}=t;return d?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[r],toggleOnSelectedRowsChange:n}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:fn(e.selectedRows,r,a),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:wn(e.selectedRows,r),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:r,totalRows:i,mergeSelections:s}=t;if(s){const d=[...e.selectedRows,...r.filter(b=>!ke(b,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:d.length,allSelected:!1,selectedRows:d,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:r.length,allSelected:r.length===i,selectedRows:r,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:r,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:r,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:a,paginationServer:r,visibleOnly:i,persistSelectedOnPageChange:s}=t,d=r&&s,b=r&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),d&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:r}=t;return Object.assign(Object.assign({},e),{currentPage:r,rowsPerPage:a})}}}const vn=j`
	pointer-events: none;
	opacity: 0.4;
`,yn=g.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&vn};
	${({theme:e})=>e.table.style};
`,Rn=j`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,Sn=g.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&Rn};
	${({theme:e})=>e.head.style};
`,En=g.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Rt=(e,...t)=>j`
		@media screen and (max-width: ${599}px) {
			${j(e,...t)}
		}
	`,On=(e,...t)=>j`
		@media screen and (max-width: ${959}px) {
			${j(e,...t)}
		}
	`,kn=(e,...t)=>j`
		@media screen and (max-width: ${1280}px) {
			${j(e,...t)}
		}
	`,Pn=e=>(t,...n)=>j`
				@media screen and (max-width: ${e}px) {
					${j(t,...n)}
				}
			`,de=g.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,St=g(de)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&j`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&Rt`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&On`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&kn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&Pn(e)`
    display: none;
  `};
`,Dn=j`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,Hn=g(St).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&Dn};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var $n=o.exports.memo(function({id:e,column:t,row:n,rowIndex:a,dataTag:r,isDragging:i,onDragStart:s,onDragOver:d,onDragEnd:b,onDragEnter:v,onDragLeave:u}){const{style:x,classNames:I}=yt(n,t.conditionalCellStyles,["rdt_TableCell"]);return o.exports.createElement(Hn,{id:e,"data-column-id":t.id,role:"cell",className:I,"data-tag":r,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:x,isDragging:i,onDragStart:s,onDragOver:d,onDragEnd:b,onDragEnter:v,onDragLeave:u},!t.cell&&o.exports.createElement("div",{"data-tag":r},function(y,w,H,f){if(!w)return null;if(typeof w!="string"&&typeof w!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return H&&typeof H=="function"?H(y,f):w&&typeof w=="function"?w(y,f):We(y,w)}(n,t.selector,t.format,a)),t.cell&&t.cell(n,a,t,e))}),Et=o.exports.memo(function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:a=!1,checked:r=!1,disabled:i=!1,onClick:s=D}){const d=t,b=d!=="input"?n.style:(u=>Object.assign(Object.assign({fontSize:"18px"},!u&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),v=o.exports.useMemo(()=>function(u,...x){let I;return Object.keys(u).map(y=>u[y]).forEach((y,w)=>{typeof y=="function"&&(I=Object.assign(Object.assign({},u),{[Object.keys(u)[w]]:y(...x)}))}),I||u}(n,a),[n,a]);return o.exports.createElement(d,Object.assign({type:"checkbox",ref:u=>{u&&(u.indeterminate=a)},style:b,onClick:i?D:s,name:e,"aria-label":e,checked:r,disabled:i},v,{onChange:D}))});const jn=g(de)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function In({name:e,keyField:t,row:n,rowCount:a,selected:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:d,selectableRowDisabled:b,onSelectedRow:v}){const u=!(!b||!b(n));return o.exports.createElement(jn,{onClick:x=>x.stopPropagation(),className:"rdt_TableCell",noPadding:!0},o.exports.createElement(Et,{name:e,component:i,componentOptions:s,checked:r,"aria-checked":r,onClick:()=>{v({type:"SELECT_SINGLE_ROW",row:n,isSelected:r,keyField:t,rowCount:a,singleSelect:d})},disabled:u}))}const Fn=g.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Tn({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:a,row:r,onToggled:i}){const s=t?n.expanded:n.collapsed;return o.exports.createElement(Fn,{"aria-disabled":e,onClick:()=>i&&i(r),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const _n=g(de)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Ln({row:e,expanded:t=!1,expandableIcon:n,id:a,onToggled:r,disabled:i=!1}){return o.exports.createElement(_n,{onClick:s=>s.stopPropagation(),noPadding:!0},o.exports.createElement(Tn,{id:a,row:e,expanded:t,expandableIcon:n,disabled:i,onToggled:r}))}const Mn=g.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var An=o.exports.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:a,extendedClassNames:r}){const i=["rdt_ExpanderRow",...r.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return o.exports.createElement(Mn,{className:i,extendedRowStyle:a},o.exports.createElement(t,Object.assign({data:e},n)))}),Pe,Be,bt;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(Pe||(Pe={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Be||(Be={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(bt||(bt={}));const zn=j`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Nn=j`
	&:hover {
		cursor: pointer;
	}
`,Wn=g.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&zn};
	${({pointerOnHover:e})=>e&&Nn};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function Bn({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:a=!1,dense:r=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:d,expandableRowsComponentProps:b,expandableRowsHideExpander:v,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:x=!1,highlightOnHover:I=!1,id:y,expandableInheritConditionalStyles:w,keyField:H,onRowClicked:f=D,onRowDoubleClicked:P=D,onRowMouseEnter:$=D,onRowMouseLeave:S=D,onRowExpandToggled:O=D,onSelectedRow:_=D,pointerOnHover:L=!1,row:C,rowCount:R,rowIndex:V,selectableRowDisabled:M=null,selectableRows:N=!1,selectableRowsComponent:q,selectableRowsComponentProps:k,selectableRowsHighlight:ne=!1,selectableRowsSingle:ce=!1,selected:oe,striped:ae=!1,draggingColumnId:De,onDragStart:He,onDragOver:$e,onDragEnd:je,onDragEnter:G,onDragLeave:he}){const[U,xe]=o.exports.useState(n);o.exports.useEffect(()=>{xe(n)},[n]);const X=o.exports.useCallback(()=>{xe(!U),O(!U,C)},[U,O,C]),Ie=L||s&&(u||x),Fe=o.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(f(C,E),!a&&s&&u&&X())},[a,u,s,X,f,C]),we=o.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(P(C,E),!a&&s&&x&&X())},[a,x,s,X,P,C]),Te=o.exports.useCallback(E=>{$(C,E)},[$,C]),Y=o.exports.useCallback(E=>{S(C,E)},[S,C]),Z=ie(C,H),{style:fe,classNames:Ce}=yt(C,t,["rdt_TableRow"]),_e=ne&&oe,Le=w?fe:{},Me=ae&&V%2==0;return o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(Wn,{id:`row-${y}`,role:"row",striped:Me,highlightOnHover:I,pointerOnHover:!a&&Ie,dense:r,onClick:Fe,onDoubleClick:we,onMouseEnter:Te,onMouseLeave:Y,className:Ce,selected:_e,style:fe},N&&o.exports.createElement(In,{name:`select-row-${Z}`,keyField:H,row:C,rowCount:R,selected:oe,selectableRowsComponent:q,selectableRowsComponentProps:k,selectableRowDisabled:M,selectableRowsSingle:ce,onSelectedRow:_}),s&&!v&&o.exports.createElement(Ln,{id:Z,expandableIcon:i,expanded:U,row:C,onToggled:X,disabled:a}),e.map(E=>E.omit?null:o.exports.createElement($n,{id:`cell-${E.id}-${Z}`,key:`cell-${E.id}-${Z}`,dataTag:E.ignoreRowClick||E.button?null:"allowRowEvents",column:E,row:C,rowIndex:V,isDragging:be(De,E.id),onDragStart:He,onDragOver:$e,onDragEnd:je,onDragEnter:G,onDragLeave:he}))),s&&U&&o.exports.createElement(An,{key:`expander-${Z}`,data:C,extendedRowStyle:Le,extendedClassNames:Ce,ExpanderComponent:d,expanderComponentProps:b}))}const Gn=g.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Un=({sortActive:e,sortDirection:t})=>h.createElement(Gn,{sortActive:e,sortDirection:t},"\u25B2"),Vn=g(St)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,qn=j`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&j`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,Yn=g.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&qn};
`,Qn=g.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Jn=o.exports.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:d,paginationServer:b,persistSelectedOnSort:v,selectableRowsVisibleOnly:u,onSort:x,onDragStart:I,onDragOver:y,onDragEnd:w,onDragEnter:H,onDragLeave:f}){o.exports.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[P,$]=o.exports.useState(!1),S=o.exports.useRef(null);if(o.exports.useEffect(()=>{S.current&&$(S.current.scrollWidth>S.current.clientWidth)},[P]),e.omit)return null;const O=()=>{if(!e.sortable&&!e.selector)return;let k=r;be(a.id,e.id)&&(k=r===K.ASC?K.DESC:K.ASC),x({type:"SORT_CHANGE",sortDirection:k,selectedColumn:e,clearSelectedOnSort:d&&b&&!v||s||u})},_=k=>o.exports.createElement(Un,{sortActive:k,sortDirection:r}),L=()=>o.exports.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),C=!(!e.sortable||!be(a.id,e.id)),R=!e.sortable||t,V=e.sortable&&!i&&!e.right,M=e.sortable&&!i&&e.right,N=e.sortable&&i&&!e.right,q=e.sortable&&i&&e.right;return o.exports.createElement(Vn,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:be(e.id,n),onDragStart:I,onDragOver:y,onDragEnd:w,onDragEnter:H,onDragLeave:f},e.name&&o.exports.createElement(Yn,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:R?void 0:O,onKeyPress:R?void 0:k=>{k.key==="Enter"&&O()},sortActive:!R&&C,disabled:R},!R&&q&&L(),!R&&M&&_(C),typeof e.name=="string"?o.exports.createElement(Qn,{title:P?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!R&&N&&L(),!R&&V&&_(C)))});const Kn=g(de)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Xn({headCell:e=!0,rowData:t,keyField:n,allSelected:a,mergeSelections:r,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:d,selectableRowDisabled:b,onSelectAllRows:v}){const u=i.length>0&&!a,x=b?t.filter(w=>!b(w)):t,I=x.length===0,y=Math.min(t.length,x.length);return o.exports.createElement(Kn,{className:"rdt_TableCol",headCell:e,noPadding:!0},o.exports.createElement(Et,{name:"select-all-rows",component:s,componentOptions:d,onClick:()=>{v({type:"SELECT_ALL_ROWS",rows:x,rowCount:y,mergeSelections:r,keyField:n})},checked:a,indeterminate:u,disabled:I}))}function Ot(e=Pe.AUTO){const t=typeof window=="object",[n,a]=o.exports.useState(!1);return o.exports.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const r=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],d=i.dir==="rtl"||s.dir==="rtl";a(r&&d)}},[e,t]),n}const Zn=g.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,eo=g.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,mt=g.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function to({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:a,direction:r}){const i=Ot(r),s=a>0;return n?o.exports.createElement(mt,{visible:s},o.exports.cloneElement(n,{selectedCount:a})):o.exports.createElement(mt,{visible:s,rtl:i},o.exports.createElement(Zn,null,((d,b,v)=>{if(b===0)return null;const u=b===1?d.singular:d.plural;return v?`${b} ${d.message||""} ${u}`:`${b} ${u} ${d.message||""}`})(e,a,i)),o.exports.createElement(eo,null,t))}const no=g.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,oo=g.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,ao=g.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,ro=({title:e,actions:t=null,contextMessage:n,contextActions:a,contextComponent:r,selectedCount:i,direction:s,showMenu:d=!0})=>o.exports.createElement(no,{className:"rdt_TableHeader",role:"heading","aria-level":1},o.exports.createElement(oo,null,e),t&&o.exports.createElement(ao,null,t),d&&o.exports.createElement(to,{contextMessage:n,contextActions:a,contextComponent:r,direction:s,selectedCount:i}));function kt(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}const lo={left:"flex-start",right:"flex-end",center:"center"},io=g.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>lo[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,so=e=>{var{align:t="right",wrapContent:n=!0}=e,a=kt(e,["align","wrapContent"]);return o.exports.createElement(io,Object.assign({align:t,wrapContent:n},a))},co=g.div`
	display: flex;
	flex-direction: column;
`,po=g.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&j`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&j`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,ht=g.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,go=g.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,uo=g(de)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,bo=g.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,mo=()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},h.createElement("path",{d:"M7 10l5 5 5-5z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),ho=g.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,xo=g.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,wo=e=>{var{defaultValue:t,onChange:n}=e,a=kt(e,["defaultValue","onChange"]);return o.exports.createElement(xo,null,o.exports.createElement(ho,Object.assign({onChange:n,defaultValue:t},a)),o.exports.createElement(mo,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return h.createElement("div",null,"To add an expander pass in a component instance via ",h.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:h.createElement(()=>h.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),h.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:h.createElement(()=>h.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),h.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:h.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:h.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Be.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),h.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),h.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:Pe.AUTO,onChangePage:D,onChangeRowsPerPage:D,onRowClicked:D,onRowDoubleClicked:D,onRowMouseEnter:D,onRowMouseLeave:D,onRowExpandToggled:D,onSelectedRowsChange:D,onSort:D,onColumnOrderChange:D},fo={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Co=g.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Ee=g.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,vo=g.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Rt`
    width: 100%;
    justify-content: space-around;
  `};
`,Pt=g.span`
	flex-shrink: 1;
	user-select: none;
`,yo=g(Pt)`
	margin: 0 24px;
`,Ro=g(Pt)`
	margin: 0 4px;
`;var So=o.exports.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:a=l.direction,paginationRowsPerPageOptions:r=l.paginationRowsPerPageOptions,paginationIconLastPage:i=l.paginationIconLastPage,paginationIconFirstPage:s=l.paginationIconFirstPage,paginationIconNext:d=l.paginationIconNext,paginationIconPrevious:b=l.paginationIconPrevious,paginationComponentOptions:v=l.paginationComponentOptions,onChangeRowsPerPage:u=l.onChangeRowsPerPage,onChangePage:x=l.onChangePage}){const I=(()=>{const k=typeof window=="object";function ne(){return{width:k?window.innerWidth:void 0,height:k?window.innerHeight:void 0}}const[ce,oe]=o.exports.useState(ne);return o.exports.useEffect(()=>{if(!k)return()=>null;function ae(){oe(ne())}return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]),ce})(),y=Ot(a),w=I.width&&I.width>599,H=ue(t,e),f=n*e,P=f-e+1,$=n===1,S=n===H,O=Object.assign(Object.assign({},fo),v),_=n===H?`${P}-${t} ${O.rangeSeparatorText} ${t}`:`${P}-${f} ${O.rangeSeparatorText} ${t}`,L=o.exports.useCallback(()=>x(n-1),[n,x]),C=o.exports.useCallback(()=>x(n+1),[n,x]),R=o.exports.useCallback(()=>x(1),[x]),V=o.exports.useCallback(()=>x(ue(t,e)),[x,t,e]),M=o.exports.useCallback(k=>u(Number(k.target.value),n),[n,u]),N=r.map(k=>o.exports.createElement("option",{key:k,value:k},k));O.selectAllRowsItem&&N.push(o.exports.createElement("option",{key:-1,value:t},O.selectAllRowsItemText));const q=o.exports.createElement(wo,{onChange:M,defaultValue:e,"aria-label":O.rowsPerPageText},N);return o.exports.createElement(Co,{className:"rdt_Pagination"},!O.noRowsPerPage&&w&&o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(Ro,null,O.rowsPerPageText),q),w&&o.exports.createElement(yo,null,_),o.exports.createElement(vo,null,o.exports.createElement(Ee,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":$,onClick:R,disabled:$,isRTL:y},s),o.exports.createElement(Ee,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":$,onClick:L,disabled:$,isRTL:y},b),!w&&q,o.exports.createElement(Ee,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:C,disabled:S,isRTL:y},d),o.exports.createElement(Ee,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:V,disabled:S,isRTL:y},i)))});const te=(e,t)=>{const n=o.exports.useRef(!0);o.exports.useEffect(()=>{n.current?n.current=!1:e()},t)};var Eo=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(a){return a.$$typeof===Oo}(t)}(e)},Oo=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function me(e,t){return t.clone!==!1&&t.isMergeableObject(e)?se((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function ko(e,t,n){return e.concat(t).map(function(a){return me(a,n)})}function xt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return t.propertyIsEnumerable(n)}):[]}(e))}function wt(e,t){try{return t in e}catch{return!1}}function Po(e,t,n){var a={};return n.isMergeableObject(e)&&xt(e).forEach(function(r){a[r]=me(e[r],n)}),xt(t).forEach(function(r){(function(i,s){return wt(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,r)||(wt(e,r)&&n.isMergeableObject(t[r])?a[r]=function(i,s){if(!s.customMerge)return se;var d=s.customMerge(i);return typeof d=="function"?d:se}(r,n)(e[r],t[r],n):a[r]=me(t[r],n))}),a}function se(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||ko,n.isMergeableObject=n.isMergeableObject||Eo,n.cloneUnlessOtherwiseSpecified=me;var a=Array.isArray(t);return a===Array.isArray(e)?a?n.arrayMerge(e,t,n):Po(e,t,n):me(t,n)}se.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,a){return se(n,a,t)},{})};var Do=se;const ft={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Ct={default:ft,light:ft,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Ho(e,t,n,a){const[r,i]=o.exports.useState(()=>ut(e)),[s,d]=o.exports.useState(""),b=o.exports.useRef("");te(()=>{i(ut(e))},[e]);const v=o.exports.useCallback(f=>{var P,$,S;const{attributes:O}=f.target,_=(P=O.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;_&&(b.current=((S=($=r[Se(r,_)])===null||$===void 0?void 0:$.id)===null||S===void 0?void 0:S.toString())||"",d(b.current))},[r]),u=o.exports.useCallback(f=>{var P;const{attributes:$}=f.target,S=(P=$.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;if(S&&b.current&&S!==b.current){const O=Se(r,b.current),_=Se(r,S),L=[...r];L[O]=r[_],L[_]=r[O],i(L),t(L)}},[t,r]),x=o.exports.useCallback(f=>{f.preventDefault()},[]),I=o.exports.useCallback(f=>{f.preventDefault()},[]),y=o.exports.useCallback(f=>{f.preventDefault(),b.current="",d("")},[]),w=function(f=!1){return f?K.ASC:K.DESC}(a),H=o.exports.useMemo(()=>r[Se(r,n==null?void 0:n.toString())]||{},[n,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:v,handleDragEnter:u,handleDragOver:x,handleDragLeave:I,handleDragEnd:y,defaultSortDirection:w,defaultSortColumn:H}}var $o=o.exports.memo(function(e){const{data:t=l.data,columns:n=l.columns,title:a=l.title,actions:r=l.actions,keyField:i=l.keyField,striped:s=l.striped,highlightOnHover:d=l.highlightOnHover,pointerOnHover:b=l.pointerOnHover,dense:v=l.dense,selectableRows:u=l.selectableRows,selectableRowsSingle:x=l.selectableRowsSingle,selectableRowsHighlight:I=l.selectableRowsHighlight,selectableRowsNoSelectAll:y=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:w=l.selectableRowsVisibleOnly,selectableRowSelected:H=l.selectableRowSelected,selectableRowDisabled:f=l.selectableRowDisabled,selectableRowsComponent:P=l.selectableRowsComponent,selectableRowsComponentProps:$=l.selectableRowsComponentProps,onRowExpandToggled:S=l.onRowExpandToggled,onSelectedRowsChange:O=l.onSelectedRowsChange,expandableIcon:_=l.expandableIcon,onChangeRowsPerPage:L=l.onChangeRowsPerPage,onChangePage:C=l.onChangePage,paginationServer:R=l.paginationServer,paginationServerOptions:V=l.paginationServerOptions,paginationTotalRows:M=l.paginationTotalRows,paginationDefaultPage:N=l.paginationDefaultPage,paginationResetDefaultPage:q=l.paginationResetDefaultPage,paginationPerPage:k=l.paginationPerPage,paginationRowsPerPageOptions:ne=l.paginationRowsPerPageOptions,paginationIconLastPage:ce=l.paginationIconLastPage,paginationIconFirstPage:oe=l.paginationIconFirstPage,paginationIconNext:ae=l.paginationIconNext,paginationIconPrevious:De=l.paginationIconPrevious,paginationComponent:He=l.paginationComponent,paginationComponentOptions:$e=l.paginationComponentOptions,responsive:je=l.responsive,progressPending:G=l.progressPending,progressComponent:he=l.progressComponent,persistTableHead:U=l.persistTableHead,noDataComponent:xe=l.noDataComponent,disabled:X=l.disabled,noTableHead:Ie=l.noTableHead,noHeader:Fe=l.noHeader,fixedHeader:we=l.fixedHeader,fixedHeaderScrollHeight:Te=l.fixedHeaderScrollHeight,pagination:Y=l.pagination,subHeader:Z=l.subHeader,subHeaderAlign:fe=l.subHeaderAlign,subHeaderWrap:Ce=l.subHeaderWrap,subHeaderComponent:_e=l.subHeaderComponent,noContextMenu:Le=l.noContextMenu,contextMessage:Me=l.contextMessage,contextActions:E=l.contextActions,contextComponent:Dt=l.contextComponent,expandableRows:ve=l.expandableRows,onRowClicked:Ue=l.onRowClicked,onRowDoubleClicked:Ve=l.onRowDoubleClicked,onRowMouseEnter:qe=l.onRowMouseEnter,onRowMouseLeave:Ye=l.onRowMouseLeave,sortIcon:Ht=l.sortIcon,onSort:$t=l.onSort,sortFunction:Qe=l.sortFunction,sortServer:Ae=l.sortServer,expandableRowsComponent:jt=l.expandableRowsComponent,expandableRowsComponentProps:It=l.expandableRowsComponentProps,expandableRowDisabled:Je=l.expandableRowDisabled,expandableRowsHideExpander:Ke=l.expandableRowsHideExpander,expandOnRowClicked:Ft=l.expandOnRowClicked,expandOnRowDoubleClicked:Tt=l.expandOnRowDoubleClicked,expandableRowExpanded:Xe=l.expandableRowExpanded,expandableInheritConditionalStyles:_t=l.expandableInheritConditionalStyles,defaultSortFieldId:Lt=l.defaultSortFieldId,defaultSortAsc:Mt=l.defaultSortAsc,clearSelectedRows:Ze=l.clearSelectedRows,conditionalRowStyles:At=l.conditionalRowStyles,theme:et=l.theme,customStyles:tt=l.customStyles,direction:pe=l.direction,onColumnOrderChange:zt=l.onColumnOrderChange,className:Nt}=e,{tableColumns:nt,draggingColumnId:ot,handleDragStart:at,handleDragEnter:rt,handleDragOver:lt,handleDragLeave:it,handleDragEnd:st,defaultSortDirection:Wt,defaultSortColumn:Bt}=Ho(n,zt,Lt,Mt),[{rowsPerPage:Q,currentPage:A,selectedRows:ze,allSelected:dt,selectedCount:ct,selectedColumn:W,sortDirection:re,toggleOnSelectedRowsChange:Gt},ee]=o.exports.useReducer(Cn,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Bt,toggleOnSelectedRowsChange:!1,sortDirection:Wt,currentPage:N,rowsPerPage:k,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:pt=!1,persistSelectedOnPageChange:ye=!1}=V,gt=!(!R||!ye&&!pt),Ut=Y&&!G&&t.length>0,Vt=He||So,qt=o.exports.useMemo(()=>((p={},m="default",T="default")=>{const z=Ct[m]?m:T;return Do({table:{style:{color:(c=Ct[z]).text.primary,backgroundColor:c.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:c.text.primary,backgroundColor:c.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:c.background.default,minHeight:"52px"}},head:{style:{color:c.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:c.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:c.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:c.context.background,fontSize:"18px",fontWeight:400,color:c.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:c.text.primary,backgroundColor:c.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:c.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:c.selected.text,backgroundColor:c.selected.default,borderBottomColor:c.background.default}},highlightOnHoverStyle:{color:c.highlightOnHover.text,backgroundColor:c.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:c.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:c.background.default},stripedStyle:{color:c.striped.text,backgroundColor:c.striped.default}},expanderRow:{style:{color:c.text.primary,backgroundColor:c.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:c.button.default,fill:c.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:c.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:c.button.hover},"&:focus":{outline:"none",backgroundColor:c.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:c.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:c.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:c.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:c.button.default,fill:c.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:c.button.disabled,fill:c.button.disabled},"&:hover:not(:disabled)":{backgroundColor:c.button.hover},"&:focus":{outline:"none",backgroundColor:c.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:c.text.primary,backgroundColor:c.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:c.text.primary,backgroundColor:c.background.default}}},p);var c})(tt,et),[tt,et]),Yt=o.exports.useMemo(()=>Object.assign({},pe!=="auto"&&{dir:pe}),[pe]),F=o.exports.useMemo(()=>{if(Ae)return t;if((W==null?void 0:W.sortFunction)&&typeof W.sortFunction=="function"){const p=W.sortFunction,m=re===K.ASC?p:(T,z)=>-1*p(T,z);return[...t].sort(m)}return function(p,m,T,z){return m?z&&typeof z=="function"?z(p.slice(0),m,T):p.slice(0).sort((c,Re)=>{let J,B;if(typeof m=="string"?(J=We(c,m),B=We(Re,m)):(J=m(c),B=m(Re)),T==="asc"){if(J<B)return-1;if(J>B)return 1}if(T==="desc"){if(J>B)return-1;if(J<B)return 1}return 0}):p}(t,W==null?void 0:W.selector,re,Qe)},[Ae,W,re,t,Qe]),ge=o.exports.useMemo(()=>{if(Y&&!R){const p=A*Q,m=p-Q;return F.slice(m,p)}return F},[A,Y,R,Q,F]),Qt=o.exports.useCallback(p=>{ee(p)},[]),Jt=o.exports.useCallback(p=>{ee(p)},[]),Kt=o.exports.useCallback(p=>{ee(p)},[]),Xt=o.exports.useCallback((p,m)=>Ue(p,m),[Ue]),Zt=o.exports.useCallback((p,m)=>Ve(p,m),[Ve]),en=o.exports.useCallback((p,m)=>qe(p,m),[qe]),tn=o.exports.useCallback((p,m)=>Ye(p,m),[Ye]),le=o.exports.useCallback(p=>ee({type:"CHANGE_PAGE",page:p,paginationServer:R,visibleOnly:w,persistSelectedOnPageChange:ye}),[R,ye,w]),nn=o.exports.useCallback(p=>{const m=ue(M||ge.length,p),T=Ne(A,m);R||le(T),ee({type:"CHANGE_ROWS_PER_PAGE",page:T,rowsPerPage:p})},[A,le,R,M,ge.length]);if(Y&&!R&&F.length>0&&ge.length===0){const p=ue(F.length,Q),m=Ne(A,p);le(m)}te(()=>{O({allSelected:dt,selectedCount:ct,selectedRows:ze.slice(0)})},[Gt]),te(()=>{$t(W,re,F.slice(0))},[W,re]),te(()=>{C(A,M||F.length)},[A]),te(()=>{L(Q,A)},[Q]),te(()=>{le(N)},[N,q]),te(()=>{if(Y&&R&&M>0){const p=ue(M,Q),m=Ne(A,p);A!==m&&le(m)}},[M]),o.exports.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ze})},[x,Ze]),o.exports.useEffect(()=>{if(!H)return;const p=F.filter(T=>H(T)),m=x?p.slice(0,1):p;ee({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:m,totalRows:F.length,mergeSelections:gt})},[t,H]);const on=w?ge:F,an=ye||x||y;return o.exports.createElement(pn,{theme:qt},!Fe&&(!!a||!!r)&&o.exports.createElement(ro,{title:a,actions:r,showMenu:!Le,selectedCount:ct,direction:pe,contextActions:E,contextComponent:Dt,contextMessage:Me}),Z&&o.exports.createElement(so,{align:fe,wrapContent:Ce},_e),o.exports.createElement(po,Object.assign({responsive:je,fixedHeader:we,fixedHeaderScrollHeight:Te,className:Nt},Yt),o.exports.createElement(go,null,G&&!U&&o.exports.createElement(ht,null,he),o.exports.createElement(yn,{disabled:X,className:"rdt_Table",role:"table"},!Ie&&(!!U||F.length>0&&!G)&&o.exports.createElement(Sn,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:we},o.exports.createElement(En,{className:"rdt_TableHeadRow",role:"row",dense:v},u&&(an?o.exports.createElement(de,{style:{flex:"0 0 48px"}}):o.exports.createElement(Xn,{allSelected:dt,selectedRows:ze,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:f,rowData:on,keyField:i,mergeSelections:gt,onSelectAllRows:Jt})),ve&&!Ke&&o.exports.createElement(uo,null),nt.map(p=>o.exports.createElement(Jn,{key:p.id,column:p,selectedColumn:W,disabled:G||F.length===0,pagination:Y,paginationServer:R,persistSelectedOnSort:pt,selectableRowsVisibleOnly:w,sortDirection:re,sortIcon:Ht,sortServer:Ae,onSort:Qt,onDragStart:at,onDragOver:lt,onDragEnd:st,onDragEnter:rt,onDragLeave:it,draggingColumnId:ot})))),!F.length&&!G&&o.exports.createElement(bo,null,xe),G&&U&&o.exports.createElement(ht,null,he),!G&&F.length>0&&o.exports.createElement(co,{className:"rdt_TableBody",role:"rowgroup"},ge.map((p,m)=>{const T=ie(p,i),z=function(B=""){return typeof B!="number"&&(!B||B.length===0)}(T)?m:T,c=ke(p,ze,i),Re=!!(ve&&Xe&&Xe(p)),J=!!(ve&&Je&&Je(p));return o.exports.createElement(Bn,{id:z,key:z,keyField:i,"data-row-id":z,columns:nt,row:p,rowCount:F.length,rowIndex:m,selectableRows:u,expandableRows:ve,expandableIcon:_,highlightOnHover:d,pointerOnHover:b,dense:v,expandOnRowClicked:Ft,expandOnRowDoubleClicked:Tt,expandableRowsComponent:jt,expandableRowsComponentProps:It,expandableRowsHideExpander:Ke,defaultExpanderDisabled:J,defaultExpanded:Re,expandableInheritConditionalStyles:_t,conditionalRowStyles:At,selected:c,selectableRowsHighlight:I,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:f,selectableRowsSingle:x,striped:s,onRowExpandToggled:S,onRowClicked:Xt,onRowDoubleClicked:Zt,onRowMouseEnter:en,onRowMouseLeave:tn,onSelectedRow:Kt,draggingColumnId:ot,onDragStart:at,onDragOver:lt,onDragEnd:st,onDragEnter:rt,onDragLeave:it})}))))),Ut&&o.exports.createElement("div",null,o.exports.createElement(Vt,{onChangePage:le,onChangeRowsPerPage:nn,rowCount:M||F.length,currentPage:A,rowsPerPage:Q,direction:pe,paginationRowsPerPageOptions:ne,paginationIconLastPage:ce,paginationIconFirstPage:oe,paginationIconNext:ae,paginationIconPrevious:De,paginationComponentOptions:$e})))});const jo=g($o)(e=>({".rdt_Table":{backgroundColor:"var(--palette-greyBackground)"},".rdt_TableHeadRow":{backgroundColor:"var(--palette-whiteBackground)",fontWeight:700,fontSize:"1rem",lineHeight:"1.6rem",borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"49px"},".rdt_TableRow":{borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"49px"}})),Io=e=>{const{columns:t,data:n,paginationComponent:a}=e,{paginationPerPage:r,paginationRowsPerPageOptions:i}=e;return Oe(jo,{columns:t,data:n,pagination:!0,responsive:!0,paginationPerPage:r,paginationRowsPerPageOptions:i,paginationComponent:a})};Io.defaultProps={};export{xn as S,Io as T,Lo as f};
