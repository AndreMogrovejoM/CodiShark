import{u as rn}from"./i18n.hooks.9e0e4506.js";import{s as u,a as ue,j as an,C as ln,aw as F,r as n,p as h,ax as sn}from"./index.2f653318.js";const dn=u.div`
  .ProgressComponent {
    &__container {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      border-radius: 1.6rem;
      align-items: center;
    }

    &__paragraph {
      font-weight: 700;
      font-size: 1.6rem;
    }
  }
`,Ct=e=>{const t=rn().global.progress;return ue(dn,{className:"ProgressComponent",children:an("div",{className:"ProgressComponent__container",children:[ue(ln,{color:"primary"}),ue("p",{className:"ProgressComponent__paragraph",children:t})]})})};Ct.defaultProps={};var X;function se(e,t){return e[t]}function We(e,t){return t.split(".").reduce((o,r)=>{const a=r.match(/[^\]\\[.]+/g);if(a&&a.length>1)for(let s=0;s<a.length;s++)return o[a[s]][a[s+1]];return o[r]},e)}function cn(e=[],t,o=0){return[...e.slice(0,o),t,...e.slice(o)]}function gn(e=[],t,o="id"){const r=e.slice(),a=se(t,o);return a?r.splice(r.findIndex(s=>se(s,o)===a),1):r.splice(r.findIndex(s=>s===t),1),r}function pt(e){return e.map((t,o)=>{const r=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(r.id=o+1),r})}function be(e,t){return Math.ceil(e/t)}function ze(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(X||(X={}));const D=()=>null;function yt(e,t=[],o=[]){let r={},a=[...o];return t.length&&t.forEach(s=>{if(!s.when||typeof s.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');s.when(e)&&(r=s.style||{},s.classNames&&(a=[...a,...s.classNames]),typeof s.style=="function"&&(r=s.style(e)||{}))}),{style:r,classNames:a.join(" ")}}function ke(e,t=[],o="id"){const r=se(e,o);return r?t.some(a=>se(a,o)===r):t.some(a=>a===e)}function Ee(e,t){return t?e.findIndex(o=>me(o.id,t)):-1}function me(e,t){return e==t}function pn(e,t){const o=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:a,rowCount:s,mergeSelections:i}=t,c=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(i){const f=c?[...e.selectedRows,...a.filter(p=>!ke(p,e.selectedRows,r))]:e.selectedRows.filter(p=>!ke(p,a,r));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:f.length,selectedRows:f,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?s:0,selectedRows:c?a:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:a,isSelected:s,rowCount:i,singleSelect:c}=t;return c?s?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:o}):s?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:gn(e.selectedRows,a,r),toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===i,selectedRows:cn(e.selectedRows,a),toggleOnSelectedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:a,totalRows:s,mergeSelections:i}=t;if(i){const c=[...e.selectedRows,...a.filter(b=>!ke(b,e.selectedRows,r))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:o})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===s,selectedRows:a,toggleOnSelectedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:a,clearSelectedOnSort:s}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:r,currentPage:1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_PAGE":{const{page:r,paginationServer:a,visibleOnly:s,persistSelectedOnPageChange:i}=t,c=a&&i,b=a&&!i||s;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:r}),c&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:a}=t;return Object.assign(Object.assign({},e),{currentPage:a,rowsPerPage:r})}}}const un=F`
	pointer-events: none;
	opacity: 0.4;
`,bn=u.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&un};
	${({theme:e})=>e.table.style};
`,mn=F`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,xn=u.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&mn};
	${({theme:e})=>e.head.style};
`,hn=u.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Rt=(e,...t)=>F`
		@media screen and (max-width: ${599}px) {
			${F(e,...t)}
		}
	`,wn=(e,...t)=>F`
		@media screen and (max-width: ${959}px) {
			${F(e,...t)}
		}
	`,fn=(e,...t)=>F`
		@media screen and (max-width: ${1280}px) {
			${F(e,...t)}
		}
	`,Cn=e=>(t,...o)=>F`
				@media screen and (max-width: ${e}px) {
					${F(t,...o)}
				}
			`,de=u.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,vt=u(de)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&F`
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
	${({hide:e})=>e&&e==="md"&&wn`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&fn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&Cn(e)`
    display: none;
  `};
`,yn=F`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,Rn=u(vt).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&yn};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var vn=n.exports.memo(function({id:e,column:t,row:o,rowIndex:r,dataTag:a,isDragging:s,onDragStart:i,onDragOver:c,onDragEnd:b,onDragEnter:f,onDragLeave:p}){const{style:x,classNames:j}=yt(o,t.conditionalCellStyles,["rdt_TableCell"]);return n.exports.createElement(Rn,{id:e,"data-column-id":t.id,role:"cell",className:j,"data-tag":a,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:x,isDragging:s,onDragStart:i,onDragOver:c,onDragEnd:b,onDragEnter:f,onDragLeave:p},!t.cell&&n.exports.createElement("div",{"data-tag":a},function(R,w,H,C){if(!w)return null;if(typeof w!="string"&&typeof w!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return H&&typeof H=="function"?H(R,C):w&&typeof w=="function"?w(R,C):We(R,w)}(o,t.selector,t.format,r)),t.cell&&t.cell(o,r,t,e))}),St=n.exports.memo(function({name:e,component:t="input",componentOptions:o={style:{}},indeterminate:r=!1,checked:a=!1,disabled:s=!1,onClick:i=D}){const c=t,b=c!=="input"?o.style:(p=>Object.assign(Object.assign({fontSize:"18px"},!p&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(s),f=n.exports.useMemo(()=>function(p,...x){let j;return Object.keys(p).map(R=>p[R]).forEach((R,w)=>{typeof R=="function"&&(j=Object.assign(Object.assign({},p),{[Object.keys(p)[w]]:R(...x)}))}),j||p}(o,r),[o,r]);return n.exports.createElement(c,Object.assign({type:"checkbox",ref:p=>{p&&(p.indeterminate=r)},style:b,onClick:s?D:i,name:e,"aria-label":e,checked:a,disabled:s},f,{onChange:D}))});const Sn=u(de)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function En({name:e,keyField:t,row:o,rowCount:r,selected:a,selectableRowsComponent:s,selectableRowsComponentProps:i,selectableRowsSingle:c,selectableRowDisabled:b,onSelectedRow:f}){const p=!(!b||!b(o));return n.exports.createElement(Sn,{onClick:x=>x.stopPropagation(),className:"rdt_TableCell",noPadding:!0},n.exports.createElement(St,{name:e,component:s,componentOptions:i,checked:a,"aria-checked":a,onClick:()=>{f({type:"SELECT_SINGLE_ROW",row:o,isSelected:a,keyField:t,rowCount:r,singleSelect:c})},disabled:p}))}const On=u.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function kn({disabled:e=!1,expanded:t=!1,expandableIcon:o,id:r,row:a,onToggled:s}){const i=t?o.expanded:o.collapsed;return n.exports.createElement(On,{"aria-disabled":e,onClick:()=>s&&s(a),"data-testid":`expander-button-${r}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},i)}const Pn=u(de)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Dn({row:e,expanded:t=!1,expandableIcon:o,id:r,onToggled:a,disabled:s=!1}){return n.exports.createElement(Pn,{onClick:i=>i.stopPropagation(),noPadding:!0},n.exports.createElement(kn,{id:r,row:e,expanded:t,expandableIcon:o,disabled:s,onToggled:a}))}const Hn=u.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var $n=n.exports.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:o,extendedRowStyle:r,extendedClassNames:a}){const s=["rdt_ExpanderRow",...a.split(" ").filter(i=>i!=="rdt_TableRow")].join(" ");return n.exports.createElement(Hn,{className:s,extendedRowStyle:r},n.exports.createElement(t,Object.assign({data:e},o)))}),Pe,Be,ut;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(Pe||(Pe={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Be||(Be={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(ut||(ut={}));const Fn=F`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,jn=F`
	&:hover {
		cursor: pointer;
	}
`,Tn=u.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&Fn};
	${({pointerOnHover:e})=>e&&jn};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function In({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:o=!1,defaultExpanderDisabled:r=!1,dense:a=!1,expandableIcon:s,expandableRows:i=!1,expandableRowsComponent:c,expandableRowsComponentProps:b,expandableRowsHideExpander:f,expandOnRowClicked:p=!1,expandOnRowDoubleClicked:x=!1,highlightOnHover:j=!1,id:R,expandableInheritConditionalStyles:w,keyField:H,onRowClicked:C=D,onRowDoubleClicked:P=D,onRowMouseEnter:$=D,onRowMouseLeave:S=D,onRowExpandToggled:O=D,onSelectedRow:_=D,pointerOnHover:L=!1,row:y,rowCount:v,rowIndex:U,selectableRowDisabled:M=null,selectableRows:z=!1,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowsHighlight:ne=!1,selectableRowsSingle:ce=!1,selected:oe,striped:re=!1,draggingColumnId:De,onDragStart:He,onDragOver:$e,onDragEnd:Fe,onDragEnter:G,onDragLeave:he}){const[V,we]=n.exports.useState(o);n.exports.useEffect(()=>{we(o)},[o]);const Z=n.exports.useCallback(()=>{we(!V),O(!V,y)},[V,O,y]),je=L||i&&(p||x),Te=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(C(y,E),!r&&i&&p&&Z())},[r,p,i,Z,C,y]),fe=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(P(y,E),!r&&i&&x&&Z())},[r,x,i,Z,P,y]),Ie=n.exports.useCallback(E=>{$(y,E)},[$,y]),Q=n.exports.useCallback(E=>{S(y,E)},[S,y]),q=se(y,H),{style:Ce,classNames:ye}=yt(y,t,["rdt_TableRow"]),_e=ne&&oe,Le=w?Ce:{},Me=re&&U%2==0;return n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(Tn,{id:`row-${R}`,role:"row",striped:Me,highlightOnHover:j,pointerOnHover:!r&&je,dense:a,onClick:Te,onDoubleClick:fe,onMouseEnter:Ie,onMouseLeave:Q,className:ye,selected:_e,style:Ce},z&&n.exports.createElement(En,{name:`select-row-${q}`,keyField:H,row:y,rowCount:v,selected:oe,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowDisabled:M,selectableRowsSingle:ce,onSelectedRow:_}),i&&!f&&n.exports.createElement(Dn,{id:q,expandableIcon:s,expanded:V,row:y,onToggled:Z,disabled:r}),e.map(E=>E.omit?null:n.exports.createElement(vn,{id:`cell-${E.id}-${q}`,key:`cell-${E.id}-${q}`,dataTag:E.ignoreRowClick||E.button?null:"allowRowEvents",column:E,row:y,rowIndex:U,isDragging:me(De,E.id),onDragStart:He,onDragOver:$e,onDragEnd:Fe,onDragEnter:G,onDragLeave:he}))),i&&V&&n.exports.createElement($n,{key:`expander-${q}`,data:y,extendedRowStyle:Le,extendedClassNames:ye,ExpanderComponent:c,expanderComponentProps:b}))}const _n=u.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Ln=({sortActive:e,sortDirection:t})=>h.createElement(_n,{sortActive:e,sortDirection:t},"\u25B2"),Mn=u(vt)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,An=F`
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

	${({sortActive:e})=>!e&&F`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,Nn=u.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&An};
`,zn=u.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Wn=n.exports.memo(function({column:e,disabled:t,draggingColumnId:o,selectedColumn:r={},sortDirection:a,sortIcon:s,sortServer:i,pagination:c,paginationServer:b,persistSelectedOnSort:f,selectableRowsVisibleOnly:p,onSort:x,onDragStart:j,onDragOver:R,onDragEnd:w,onDragEnter:H,onDragLeave:C}){n.exports.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[P,$]=n.exports.useState(!1),S=n.exports.useRef(null);if(n.exports.useEffect(()=>{S.current&&$(S.current.scrollWidth>S.current.clientWidth)},[P]),e.omit)return null;const O=()=>{if(!e.sortable&&!e.selector)return;let k=a;me(r.id,e.id)&&(k=a===X.ASC?X.DESC:X.ASC),x({type:"SORT_CHANGE",sortDirection:k,selectedColumn:e,clearSelectedOnSort:c&&b&&!f||i||p})},_=k=>n.exports.createElement(Ln,{sortActive:k,sortDirection:a}),L=()=>n.exports.createElement("span",{className:[a,"__rdt_custom_sort_icon__"].join(" ")},s),y=!(!e.sortable||!me(r.id,e.id)),v=!e.sortable||t,U=e.sortable&&!s&&!e.right,M=e.sortable&&!s&&e.right,z=e.sortable&&s&&!e.right,Y=e.sortable&&s&&e.right;return n.exports.createElement(Mn,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:me(e.id,o),onDragStart:j,onDragOver:R,onDragEnd:w,onDragEnter:H,onDragLeave:C},e.name&&n.exports.createElement(Nn,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:v?void 0:O,onKeyPress:v?void 0:k=>{k.key==="Enter"&&O()},sortActive:!v&&y,disabled:v},!v&&Y&&L(),!v&&M&&_(y),typeof e.name=="string"?n.exports.createElement(zn,{title:P?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!v&&z&&L(),!v&&U&&_(y)))});const Bn=u(de)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Gn({headCell:e=!0,rowData:t,keyField:o,allSelected:r,mergeSelections:a,selectedRows:s,selectableRowsComponent:i,selectableRowsComponentProps:c,selectableRowDisabled:b,onSelectAllRows:f}){const p=s.length>0&&!r,x=b?t.filter(w=>!b(w)):t,j=x.length===0,R=Math.min(t.length,x.length);return n.exports.createElement(Bn,{className:"rdt_TableCol",headCell:e,noPadding:!0},n.exports.createElement(St,{name:"select-all-rows",component:i,componentOptions:c,onClick:()=>{f({type:"SELECT_ALL_ROWS",rows:x,rowCount:R,mergeSelections:a,keyField:o})},checked:r,indeterminate:p,disabled:j}))}function Et(e=Pe.AUTO){const t=typeof window=="object",[o,r]=n.exports.useState(!1);return n.exports.useEffect(()=>{if(t)if(e!=="auto")r(e==="rtl");else{const a=!(!window.document||!window.document.createElement),s=document.getElementsByTagName("BODY")[0],i=document.getElementsByTagName("HTML")[0],c=s.dir==="rtl"||i.dir==="rtl";r(a&&c)}},[e,t]),o}const Vn=u.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Un=u.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,bt=u.div`
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
`;function Yn({contextMessage:e,contextActions:t,contextComponent:o,selectedCount:r,direction:a}){const s=Et(a),i=r>0;return o?n.exports.createElement(bt,{visible:i},n.exports.cloneElement(o,{selectedCount:r})):n.exports.createElement(bt,{visible:i,rtl:s},n.exports.createElement(Vn,null,((c,b,f)=>{if(b===0)return null;const p=b===1?c.singular:c.plural;return f?`${b} ${c.message||""} ${p}`:`${b} ${p} ${c.message||""}`})(e,r,s)),n.exports.createElement(Un,null,t))}const Qn=u.div`
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
`,Jn=u.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Kn=u.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Xn=({title:e,actions:t=null,contextMessage:o,contextActions:r,contextComponent:a,selectedCount:s,direction:i,showMenu:c=!0})=>n.exports.createElement(Qn,{className:"rdt_TableHeader",role:"heading","aria-level":1},n.exports.createElement(Jn,null,e),t&&n.exports.createElement(Kn,null,t),c&&n.exports.createElement(Yn,{contextMessage:o,contextActions:r,contextComponent:a,direction:i,selectedCount:s}));function Ot(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o}const Zn={left:"flex-start",right:"flex-end",center:"center"},qn=u.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Zn[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,eo=e=>{var{align:t="right",wrapContent:o=!0}=e,r=Ot(e,["align","wrapContent"]);return n.exports.createElement(qn,Object.assign({align:t,wrapContent:o},r))},to=u.div`
	display: flex;
	flex-direction: column;
`,no=u.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&F`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&F`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,mt=u.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,oo=u.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,ro=u(de)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,ao=u.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,lo=()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},h.createElement("path",{d:"M7 10l5 5 5-5z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),so=u.select`
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
`,io=u.div`
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
`,co=e=>{var{defaultValue:t,onChange:o}=e,r=Ot(e,["defaultValue","onChange"]);return n.exports.createElement(io,null,n.exports.createElement(so,Object.assign({onChange:o,defaultValue:t},r)),n.exports.createElement(lo,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return h.createElement("div",null,"To add an expander pass in a component instance via ",h.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:h.createElement(()=>h.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),h.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:h.createElement(()=>h.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),h.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:h.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:h.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Be.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),h.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),h.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:Pe.AUTO,onChangePage:D,onChangeRowsPerPage:D,onRowClicked:D,onRowDoubleClicked:D,onRowMouseEnter:D,onRowMouseLeave:D,onRowExpandToggled:D,onSelectedRowsChange:D,onSort:D,onColumnOrderChange:D},go={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},po=u.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Oe=u.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,uo=u.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Rt`
    width: 100%;
    justify-content: space-around;
  `};
`,kt=u.span`
	flex-shrink: 1;
	user-select: none;
`,bo=u(kt)`
	margin: 0 24px;
`,mo=u(kt)`
	margin: 0 4px;
`;var xo=n.exports.memo(function({rowsPerPage:e,rowCount:t,currentPage:o,direction:r=l.direction,paginationRowsPerPageOptions:a=l.paginationRowsPerPageOptions,paginationIconLastPage:s=l.paginationIconLastPage,paginationIconFirstPage:i=l.paginationIconFirstPage,paginationIconNext:c=l.paginationIconNext,paginationIconPrevious:b=l.paginationIconPrevious,paginationComponentOptions:f=l.paginationComponentOptions,onChangeRowsPerPage:p=l.onChangeRowsPerPage,onChangePage:x=l.onChangePage}){const j=(()=>{const k=typeof window=="object";function ne(){return{width:k?window.innerWidth:void 0,height:k?window.innerHeight:void 0}}const[ce,oe]=n.exports.useState(ne);return n.exports.useEffect(()=>{if(!k)return()=>null;function re(){oe(ne())}return window.addEventListener("resize",re),()=>window.removeEventListener("resize",re)},[]),ce})(),R=Et(r),w=j.width&&j.width>599,H=be(t,e),C=o*e,P=C-e+1,$=o===1,S=o===H,O=Object.assign(Object.assign({},go),f),_=o===H?`${P}-${t} ${O.rangeSeparatorText} ${t}`:`${P}-${C} ${O.rangeSeparatorText} ${t}`,L=n.exports.useCallback(()=>x(o-1),[o,x]),y=n.exports.useCallback(()=>x(o+1),[o,x]),v=n.exports.useCallback(()=>x(1),[x]),U=n.exports.useCallback(()=>x(be(t,e)),[x,t,e]),M=n.exports.useCallback(k=>p(Number(k.target.value),o),[o,p]),z=a.map(k=>n.exports.createElement("option",{key:k,value:k},k));O.selectAllRowsItem&&z.push(n.exports.createElement("option",{key:-1,value:t},O.selectAllRowsItemText));const Y=n.exports.createElement(co,{onChange:M,defaultValue:e,"aria-label":O.rowsPerPageText},z);return n.exports.createElement(po,{className:"rdt_Pagination"},!O.noRowsPerPage&&w&&n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(mo,null,O.rowsPerPageText),Y),w&&n.exports.createElement(bo,null,_),n.exports.createElement(uo,null,n.exports.createElement(Oe,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":$,onClick:v,disabled:$,isRTL:R},i),n.exports.createElement(Oe,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":$,onClick:L,disabled:$,isRTL:R},b),!w&&Y,n.exports.createElement(Oe,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:y,disabled:S,isRTL:R},c),n.exports.createElement(Oe,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:U,disabled:S,isRTL:R},s)))});const te=(e,t)=>{const o=n.exports.useRef(!0);n.exports.useEffect(()=>{o.current?o.current=!1:e()},t)};var ho=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var o=Object.prototype.toString.call(t);return o==="[object RegExp]"||o==="[object Date]"||function(r){return r.$$typeof===wo}(t)}(e)},wo=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function xe(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ie((o=e,Array.isArray(o)?[]:{}),e,t):e;var o}function fo(e,t,o){return e.concat(t).map(function(r){return xe(r,o)})}function xt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(o){return t.propertyIsEnumerable(o)}):[]}(e))}function ht(e,t){try{return t in e}catch{return!1}}function Co(e,t,o){var r={};return o.isMergeableObject(e)&&xt(e).forEach(function(a){r[a]=xe(e[a],o)}),xt(t).forEach(function(a){(function(s,i){return ht(s,i)&&!(Object.hasOwnProperty.call(s,i)&&Object.propertyIsEnumerable.call(s,i))})(e,a)||(ht(e,a)&&o.isMergeableObject(t[a])?r[a]=function(s,i){if(!i.customMerge)return ie;var c=i.customMerge(s);return typeof c=="function"?c:ie}(a,o)(e[a],t[a],o):r[a]=xe(t[a],o))}),r}function ie(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||fo,o.isMergeableObject=o.isMergeableObject||ho,o.cloneUnlessOtherwiseSpecified=xe;var r=Array.isArray(t);return r===Array.isArray(e)?r?o.arrayMerge(e,t,o):Co(e,t,o):xe(t,o)}ie.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(o,r){return ie(o,r,t)},{})};var yo=ie;const wt={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},ft={default:wt,light:wt,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Ro(e,t,o,r){const[a,s]=n.exports.useState(()=>pt(e)),[i,c]=n.exports.useState(""),b=n.exports.useRef("");te(()=>{s(pt(e))},[e]);const f=n.exports.useCallback(C=>{var P,$,S;const{attributes:O}=C.target,_=(P=O.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;_&&(b.current=((S=($=a[Ee(a,_)])===null||$===void 0?void 0:$.id)===null||S===void 0?void 0:S.toString())||"",c(b.current))},[a]),p=n.exports.useCallback(C=>{var P;const{attributes:$}=C.target,S=(P=$.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;if(S&&b.current&&S!==b.current){const O=Ee(a,b.current),_=Ee(a,S),L=[...a];L[O]=a[_],L[_]=a[O],s(L),t(L)}},[t,a]),x=n.exports.useCallback(C=>{C.preventDefault()},[]),j=n.exports.useCallback(C=>{C.preventDefault()},[]),R=n.exports.useCallback(C=>{C.preventDefault(),b.current="",c("")},[]),w=function(C=!1){return C?X.ASC:X.DESC}(r),H=n.exports.useMemo(()=>a[Ee(a,o==null?void 0:o.toString())]||{},[o,a]);return{tableColumns:a,draggingColumnId:i,handleDragStart:f,handleDragEnter:p,handleDragOver:x,handleDragLeave:j,handleDragEnd:R,defaultSortDirection:w,defaultSortColumn:H}}var vo=n.exports.memo(function(e){const{data:t=l.data,columns:o=l.columns,title:r=l.title,actions:a=l.actions,keyField:s=l.keyField,striped:i=l.striped,highlightOnHover:c=l.highlightOnHover,pointerOnHover:b=l.pointerOnHover,dense:f=l.dense,selectableRows:p=l.selectableRows,selectableRowsSingle:x=l.selectableRowsSingle,selectableRowsHighlight:j=l.selectableRowsHighlight,selectableRowsNoSelectAll:R=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:w=l.selectableRowsVisibleOnly,selectableRowSelected:H=l.selectableRowSelected,selectableRowDisabled:C=l.selectableRowDisabled,selectableRowsComponent:P=l.selectableRowsComponent,selectableRowsComponentProps:$=l.selectableRowsComponentProps,onRowExpandToggled:S=l.onRowExpandToggled,onSelectedRowsChange:O=l.onSelectedRowsChange,expandableIcon:_=l.expandableIcon,onChangeRowsPerPage:L=l.onChangeRowsPerPage,onChangePage:y=l.onChangePage,paginationServer:v=l.paginationServer,paginationServerOptions:U=l.paginationServerOptions,paginationTotalRows:M=l.paginationTotalRows,paginationDefaultPage:z=l.paginationDefaultPage,paginationResetDefaultPage:Y=l.paginationResetDefaultPage,paginationPerPage:k=l.paginationPerPage,paginationRowsPerPageOptions:ne=l.paginationRowsPerPageOptions,paginationIconLastPage:ce=l.paginationIconLastPage,paginationIconFirstPage:oe=l.paginationIconFirstPage,paginationIconNext:re=l.paginationIconNext,paginationIconPrevious:De=l.paginationIconPrevious,paginationComponent:He=l.paginationComponent,paginationComponentOptions:$e=l.paginationComponentOptions,responsive:Fe=l.responsive,progressPending:G=l.progressPending,progressComponent:he=l.progressComponent,persistTableHead:V=l.persistTableHead,noDataComponent:we=l.noDataComponent,disabled:Z=l.disabled,noTableHead:je=l.noTableHead,noHeader:Te=l.noHeader,fixedHeader:fe=l.fixedHeader,fixedHeaderScrollHeight:Ie=l.fixedHeaderScrollHeight,pagination:Q=l.pagination,subHeader:q=l.subHeader,subHeaderAlign:Ce=l.subHeaderAlign,subHeaderWrap:ye=l.subHeaderWrap,subHeaderComponent:_e=l.subHeaderComponent,noContextMenu:Le=l.noContextMenu,contextMessage:Me=l.contextMessage,contextActions:E=l.contextActions,contextComponent:Pt=l.contextComponent,expandableRows:Re=l.expandableRows,onRowClicked:Ge=l.onRowClicked,onRowDoubleClicked:Ve=l.onRowDoubleClicked,onRowMouseEnter:Ue=l.onRowMouseEnter,onRowMouseLeave:Ye=l.onRowMouseLeave,sortIcon:Dt=l.sortIcon,onSort:Ht=l.onSort,sortFunction:Qe=l.sortFunction,sortServer:Ae=l.sortServer,expandableRowsComponent:$t=l.expandableRowsComponent,expandableRowsComponentProps:Ft=l.expandableRowsComponentProps,expandableRowDisabled:Je=l.expandableRowDisabled,expandableRowsHideExpander:Ke=l.expandableRowsHideExpander,expandOnRowClicked:jt=l.expandOnRowClicked,expandOnRowDoubleClicked:Tt=l.expandOnRowDoubleClicked,expandableRowExpanded:Xe=l.expandableRowExpanded,expandableInheritConditionalStyles:It=l.expandableInheritConditionalStyles,defaultSortFieldId:_t=l.defaultSortFieldId,defaultSortAsc:Lt=l.defaultSortAsc,clearSelectedRows:Ze=l.clearSelectedRows,conditionalRowStyles:Mt=l.conditionalRowStyles,theme:qe=l.theme,customStyles:et=l.customStyles,direction:ge=l.direction,onColumnOrderChange:At=l.onColumnOrderChange,className:Nt}=e,{tableColumns:tt,draggingColumnId:nt,handleDragStart:ot,handleDragEnter:rt,handleDragOver:at,handleDragLeave:lt,handleDragEnd:st,defaultSortDirection:zt,defaultSortColumn:Wt}=Ro(o,At,_t,Lt),[{rowsPerPage:J,currentPage:A,selectedRows:Ne,allSelected:it,selectedCount:dt,selectedColumn:W,sortDirection:ae,toggleOnSelectedRowsChange:Bt},ee]=n.exports.useReducer(pn,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Wt,toggleOnSelectedRowsChange:!1,sortDirection:zt,currentPage:z,rowsPerPage:k,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:ct=!1,persistSelectedOnPageChange:ve=!1}=U,gt=!(!v||!ve&&!ct),Gt=Q&&!G&&t.length>0,Vt=He||xo,Ut=n.exports.useMemo(()=>((g={},m="default",I="default")=>{const N=ft[m]?m:I;return yo({table:{style:{color:(d=ft[N]).text.primary,backgroundColor:d.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:d.text.primary,backgroundColor:d.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:d.background.default,minHeight:"52px"}},head:{style:{color:d.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:d.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:d.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:d.context.background,fontSize:"18px",fontWeight:400,color:d.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:d.text.primary,backgroundColor:d.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:d.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:d.selected.text,backgroundColor:d.selected.default,borderBottomColor:d.background.default}},highlightOnHoverStyle:{color:d.highlightOnHover.text,backgroundColor:d.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:d.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:d.background.default},stripedStyle:{color:d.striped.text,backgroundColor:d.striped.default}},expanderRow:{style:{color:d.text.primary,backgroundColor:d.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:d.button.default,fill:d.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:d.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:d.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:d.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:d.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:d.button.default,fill:d.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:d.button.disabled,fill:d.button.disabled},"&:hover:not(:disabled)":{backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}}},g);var d})(et,qe),[et,qe]),Yt=n.exports.useMemo(()=>Object.assign({},ge!=="auto"&&{dir:ge}),[ge]),T=n.exports.useMemo(()=>{if(Ae)return t;if((W==null?void 0:W.sortFunction)&&typeof W.sortFunction=="function"){const g=W.sortFunction,m=ae===X.ASC?g:(I,N)=>-1*g(I,N);return[...t].sort(m)}return function(g,m,I,N){return m?N&&typeof N=="function"?N(g.slice(0),m,I):g.slice(0).sort((d,Se)=>{let K,B;if(typeof m=="string"?(K=We(d,m),B=We(Se,m)):(K=m(d),B=m(Se)),I==="asc"){if(K<B)return-1;if(K>B)return 1}if(I==="desc"){if(K>B)return-1;if(K<B)return 1}return 0}):g}(t,W==null?void 0:W.selector,ae,Qe)},[Ae,W,ae,t,Qe]),pe=n.exports.useMemo(()=>{if(Q&&!v){const g=A*J,m=g-J;return T.slice(m,g)}return T},[A,Q,v,J,T]),Qt=n.exports.useCallback(g=>{ee(g)},[]),Jt=n.exports.useCallback(g=>{ee(g)},[]),Kt=n.exports.useCallback(g=>{ee(g)},[]),Xt=n.exports.useCallback((g,m)=>Ge(g,m),[Ge]),Zt=n.exports.useCallback((g,m)=>Ve(g,m),[Ve]),qt=n.exports.useCallback((g,m)=>Ue(g,m),[Ue]),en=n.exports.useCallback((g,m)=>Ye(g,m),[Ye]),le=n.exports.useCallback(g=>ee({type:"CHANGE_PAGE",page:g,paginationServer:v,visibleOnly:w,persistSelectedOnPageChange:ve}),[v,ve,w]),tn=n.exports.useCallback(g=>{const m=be(M||pe.length,g),I=ze(A,m);v||le(I),ee({type:"CHANGE_ROWS_PER_PAGE",page:I,rowsPerPage:g})},[A,le,v,M,pe.length]);if(Q&&!v&&T.length>0&&pe.length===0){const g=be(T.length,J),m=ze(A,g);le(m)}te(()=>{O({allSelected:it,selectedCount:dt,selectedRows:Ne.slice(0)})},[Bt]),te(()=>{Ht(W,ae,T.slice(0))},[W,ae]),te(()=>{y(A,M||T.length)},[A]),te(()=>{L(J,A)},[J]),te(()=>{le(z)},[z,Y]),te(()=>{if(Q&&v&&M>0){const g=be(M,J),m=ze(A,g);A!==m&&le(m)}},[M]),n.exports.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ze})},[x,Ze]),n.exports.useEffect(()=>{if(!H)return;const g=T.filter(I=>H(I)),m=x?g.slice(0,1):g;ee({type:"SELECT_MULTIPLE_ROWS",keyField:s,selectedRows:m,totalRows:T.length,mergeSelections:gt})},[t,H]);const nn=w?pe:T,on=ve||x||R;return n.exports.createElement(sn,{theme:Ut},!Te&&(!!r||!!a)&&n.exports.createElement(Xn,{title:r,actions:a,showMenu:!Le,selectedCount:dt,direction:ge,contextActions:E,contextComponent:Pt,contextMessage:Me}),q&&n.exports.createElement(eo,{align:Ce,wrapContent:ye},_e),n.exports.createElement(no,Object.assign({responsive:Fe,fixedHeader:fe,fixedHeaderScrollHeight:Ie,className:Nt},Yt),n.exports.createElement(oo,null,G&&!V&&n.exports.createElement(mt,null,he),n.exports.createElement(bn,{disabled:Z,className:"rdt_Table",role:"table"},!je&&(!!V||T.length>0&&!G)&&n.exports.createElement(xn,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:fe},n.exports.createElement(hn,{className:"rdt_TableHeadRow",role:"row",dense:f},p&&(on?n.exports.createElement(de,{style:{flex:"0 0 48px"}}):n.exports.createElement(Gn,{allSelected:it,selectedRows:Ne,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:C,rowData:nn,keyField:s,mergeSelections:gt,onSelectAllRows:Jt})),Re&&!Ke&&n.exports.createElement(ro,null),tt.map(g=>n.exports.createElement(Wn,{key:g.id,column:g,selectedColumn:W,disabled:G||T.length===0,pagination:Q,paginationServer:v,persistSelectedOnSort:ct,selectableRowsVisibleOnly:w,sortDirection:ae,sortIcon:Dt,sortServer:Ae,onSort:Qt,onDragStart:ot,onDragOver:at,onDragEnd:st,onDragEnter:rt,onDragLeave:lt,draggingColumnId:nt})))),!T.length&&!G&&n.exports.createElement(ao,null,we),G&&V&&n.exports.createElement(mt,null,he),!G&&T.length>0&&n.exports.createElement(to,{className:"rdt_TableBody",role:"rowgroup"},pe.map((g,m)=>{const I=se(g,s),N=function(B=""){return typeof B!="number"&&(!B||B.length===0)}(I)?m:I,d=ke(g,Ne,s),Se=!!(Re&&Xe&&Xe(g)),K=!!(Re&&Je&&Je(g));return n.exports.createElement(In,{id:N,key:N,keyField:s,"data-row-id":N,columns:tt,row:g,rowCount:T.length,rowIndex:m,selectableRows:p,expandableRows:Re,expandableIcon:_,highlightOnHover:c,pointerOnHover:b,dense:f,expandOnRowClicked:jt,expandOnRowDoubleClicked:Tt,expandableRowsComponent:$t,expandableRowsComponentProps:Ft,expandableRowsHideExpander:Ke,defaultExpanderDisabled:K,defaultExpanded:Se,expandableInheritConditionalStyles:It,conditionalRowStyles:Mt,selected:d,selectableRowsHighlight:j,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:C,selectableRowsSingle:x,striped:i,onRowExpandToggled:S,onRowClicked:Xt,onRowDoubleClicked:Zt,onRowMouseEnter:qt,onRowMouseLeave:en,onSelectedRow:Kt,draggingColumnId:nt,onDragStart:ot,onDragOver:at,onDragEnd:st,onDragEnter:rt,onDragLeave:lt})}))))),Gt&&n.exports.createElement("div",null,n.exports.createElement(Vt,{onChangePage:le,onChangeRowsPerPage:tn,rowCount:M||T.length,currentPage:A,rowsPerPage:J,direction:ge,paginationRowsPerPageOptions:ne,paginationIconLastPage:ce,paginationIconFirstPage:oe,paginationIconNext:re,paginationIconPrevious:De,paginationComponentOptions:$e})))});const So=u(vo)(e=>({".rdt_Table":{backgroundColor:"var(--palette-greyBackground)"},".rdt_TableHeadRow":{backgroundColor:"var(--palette-whiteBackground)",fontWeight:700,fontSize:"1rem",lineHeight:"1.6rem",borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"4.8rem","& > div:not(div[data-column-id])":{display:"none"}},".rdt_TableRow":{borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"4.8rem",cursor:"auto","& > div:has(button[role='button'])":{display:"none"}},".rdt_ExpanderRow":{padding:"1.6rem 2.4rem",paddingRight:"auto",marginTop:"-0.1rem",marginBottom:"0.8rem",borderRadius:"0.8rem"}})),Eo=e=>{const{columns:t,data:o,paginationComponent:r,expandableRows:a}=e,{paginationPerPage:s,paginationRowsPerPageOptions:i}=e,{expandableRowsComponent:c,expandOnRowClicked:b}=e,{onRowClicked:f,expandableIcon:p,progressPending:x}=e;return ue(So,{columns:t,data:o,pagination:!0,responsive:!0,paginationPerPage:s,paginationRowsPerPageOptions:i,paginationComponent:r,expandableRows:a,expandableRowsComponent:c,expandOnRowClicked:b,onRowClicked:f,expandableIcon:p,progressPending:x,progressComponent:ue(Ct,{})})};Eo.defaultProps={};export{Eo as T};
