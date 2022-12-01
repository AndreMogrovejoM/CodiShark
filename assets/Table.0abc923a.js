import{al as F,s as u,r as n,p as x,am as nn,a as on}from"./index.9c85feef.js";var X;function ie(e,t){return e[t]}function Ne(e,t){return t.split(".").reduce((o,a)=>{const r=a.match(/[^\]\\[.]+/g);if(r&&r.length>1)for(let i=0;i<r.length;i++)return o[r[i]][r[i+1]];return o[a]},e)}function an(e=[],t,o=0){return[...e.slice(0,o),t,...e.slice(o)]}function rn(e=[],t,o="id"){const a=e.slice(),r=ie(t,o);return r?a.splice(a.findIndex(i=>ie(i,o)===r),1):a.splice(a.findIndex(i=>i===t),1),a}function gt(e){return e.map((t,o)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=o+1),a})}function ue(e,t){return Math.ceil(e/t)}function ze(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(X||(X={}));const D=()=>null;function ft(e,t=[],o=[]){let a={},r=[...o];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(r=[...r,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{style:a,classNames:r.join(" ")}}function Oe(e,t=[],o="id"){const a=ie(e,o);return a?t.some(r=>ie(r,o)===a):t.some(r=>r===e)}function Se(e,t){return t?e.findIndex(o=>be(o.id,t)):-1}function be(e,t){return e==t}function ln(e,t){const o=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:r,rowCount:i,mergeSelections:s}=t,c=!e.allSelected,p=!e.toggleOnSelectedRowsChange;if(s){const f=c?[...e.selectedRows,...r.filter(b=>!Oe(b,e.selectedRows,a))]:e.selectedRows.filter(b=>!Oe(b,r,a));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:f.length,selectedRows:f,toggleOnSelectedRowsChange:p})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?i:0,selectedRows:c?r:[],toggleOnSelectedRowsChange:p})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:r,isSelected:i,rowCount:s,singleSelect:c}=t;return c?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[r],toggleOnSelectedRowsChange:o}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:rn(e.selectedRows,r,a),toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:an(e.selectedRows,r),toggleOnSelectedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:r,totalRows:i,mergeSelections:s}=t;if(s){const c=[...e.selectedRows,...r.filter(p=>!Oe(p,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:o})}return Object.assign(Object.assign({},e),{selectedCount:r.length,allSelected:r.length===i,selectedRows:r,toggleOnSelectedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:r,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:r,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_PAGE":{const{page:a,paginationServer:r,visibleOnly:i,persistSelectedOnPageChange:s}=t,c=r&&s,p=r&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),c&&{allSelected:!1}),p&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:r}=t;return Object.assign(Object.assign({},e),{currentPage:r,rowsPerPage:a})}}}const sn=F`
	pointer-events: none;
	opacity: 0.4;
`,dn=u.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&sn};
	${({theme:e})=>e.table.style};
`,cn=F`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,gn=u.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&cn};
	${({theme:e})=>e.head.style};
`,pn=u.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Ct=(e,...t)=>F`
		@media screen and (max-width: ${599}px) {
			${F(e,...t)}
		}
	`,un=(e,...t)=>F`
		@media screen and (max-width: ${959}px) {
			${F(e,...t)}
		}
	`,bn=(e,...t)=>F`
		@media screen and (max-width: ${1280}px) {
			${F(e,...t)}
		}
	`,mn=e=>(t,...o)=>F`
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
`,Rt=u(de)`
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
	${({hide:e})=>e&&e==="sm"&&Ct`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&un`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&bn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&mn(e)`
    display: none;
  `};
`,xn=F`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,hn=u(Rt).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&xn};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var wn=n.exports.memo(function({id:e,column:t,row:o,rowIndex:a,dataTag:r,isDragging:i,onDragStart:s,onDragOver:c,onDragEnd:p,onDragEnter:f,onDragLeave:b}){const{style:h,classNames:T}=ft(o,t.conditionalCellStyles,["rdt_TableCell"]);return n.exports.createElement(hn,{id:e,"data-column-id":t.id,role:"cell",className:T,"data-tag":r,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:h,isDragging:i,onDragStart:s,onDragOver:c,onDragEnd:p,onDragEnter:f,onDragLeave:b},!t.cell&&n.exports.createElement("div",{"data-tag":r},function(y,w,H,C){if(!w)return null;if(typeof w!="string"&&typeof w!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return H&&typeof H=="function"?H(y,C):w&&typeof w=="function"?w(y,C):Ne(y,w)}(o,t.selector,t.format,a)),t.cell&&t.cell(o,a,t,e))}),yt=n.exports.memo(function({name:e,component:t="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:r=!1,disabled:i=!1,onClick:s=D}){const c=t,p=c!=="input"?o.style:(b=>Object.assign(Object.assign({fontSize:"18px"},!b&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),f=n.exports.useMemo(()=>function(b,...h){let T;return Object.keys(b).map(y=>b[y]).forEach((y,w)=>{typeof y=="function"&&(T=Object.assign(Object.assign({},b),{[Object.keys(b)[w]]:y(...h)}))}),T||b}(o,a),[o,a]);return n.exports.createElement(c,Object.assign({type:"checkbox",ref:b=>{b&&(b.indeterminate=a)},style:p,onClick:i?D:s,name:e,"aria-label":e,checked:r,disabled:i},f,{onChange:D}))});const fn=u(de)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Cn({name:e,keyField:t,row:o,rowCount:a,selected:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:c,selectableRowDisabled:p,onSelectedRow:f}){const b=!(!p||!p(o));return n.exports.createElement(fn,{onClick:h=>h.stopPropagation(),className:"rdt_TableCell",noPadding:!0},n.exports.createElement(yt,{name:e,component:i,componentOptions:s,checked:r,"aria-checked":r,onClick:()=>{f({type:"SELECT_SINGLE_ROW",row:o,isSelected:r,keyField:t,rowCount:a,singleSelect:c})},disabled:b}))}const Rn=u.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function yn({disabled:e=!1,expanded:t=!1,expandableIcon:o,id:a,row:r,onToggled:i}){const s=t?o.expanded:o.collapsed;return n.exports.createElement(Rn,{"aria-disabled":e,onClick:()=>i&&i(r),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const vn=u(de)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Sn({row:e,expanded:t=!1,expandableIcon:o,id:a,onToggled:r,disabled:i=!1}){return n.exports.createElement(vn,{onClick:s=>s.stopPropagation(),noPadding:!0},n.exports.createElement(yn,{id:a,row:e,expanded:t,expandableIcon:o,disabled:i,onToggled:r}))}const En=u.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var On=n.exports.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:r}){const i=["rdt_ExpanderRow",...r.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return n.exports.createElement(En,{className:i,extendedRowStyle:a},n.exports.createElement(t,Object.assign({data:e},o)))}),ke,We,pt;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(ke||(ke={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(We||(We={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(pt||(pt={}));const kn=F`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Pn=F`
	&:hover {
		cursor: pointer;
	}
`,Dn=u.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&kn};
	${({pointerOnHover:e})=>e&&Pn};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function Hn({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:o=!1,defaultExpanderDisabled:a=!1,dense:r=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:c,expandableRowsComponentProps:p,expandableRowsHideExpander:f,expandOnRowClicked:b=!1,expandOnRowDoubleClicked:h=!1,highlightOnHover:T=!1,id:y,expandableInheritConditionalStyles:w,keyField:H,onRowClicked:C=D,onRowDoubleClicked:P=D,onRowMouseEnter:$=D,onRowMouseLeave:S=D,onRowExpandToggled:O=D,onSelectedRow:L=D,pointerOnHover:M=!1,row:R,rowCount:v,rowIndex:U,selectableRowDisabled:A=null,selectableRows:N=!1,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowsHighlight:ne=!1,selectableRowsSingle:ce=!1,selected:oe,striped:ae=!1,draggingColumnId:Pe,onDragStart:De,onDragOver:He,onDragEnd:$e,onDragEnter:G,onDragLeave:xe}){const[V,he]=n.exports.useState(o);n.exports.useEffect(()=>{he(o)},[o]);const Z=n.exports.useCallback(()=>{he(!V),O(!V,R)},[V,O,R]),Fe=M||s&&(b||h),Te=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(C(R,E),!a&&s&&b&&Z())},[a,b,s,Z,C,R]),we=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(P(R,E),!a&&s&&h&&Z())},[a,h,s,Z,P,R]),je=n.exports.useCallback(E=>{$(R,E)},[$,R]),Q=n.exports.useCallback(E=>{S(R,E)},[S,R]),q=ie(R,H),{style:fe,classNames:Ce}=ft(R,t,["rdt_TableRow"]),Ie=ne&&oe,Le=w?fe:{},Me=ae&&U%2==0;return n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(Dn,{id:`row-${y}`,role:"row",striped:Me,highlightOnHover:T,pointerOnHover:!a&&Fe,dense:r,onClick:Te,onDoubleClick:we,onMouseEnter:je,onMouseLeave:Q,className:Ce,selected:Ie,style:fe},N&&n.exports.createElement(Cn,{name:`select-row-${q}`,keyField:H,row:R,rowCount:v,selected:oe,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowDisabled:A,selectableRowsSingle:ce,onSelectedRow:L}),s&&!f&&n.exports.createElement(Sn,{id:q,expandableIcon:i,expanded:V,row:R,onToggled:Z,disabled:a}),e.map(E=>E.omit?null:n.exports.createElement(wn,{id:`cell-${E.id}-${q}`,key:`cell-${E.id}-${q}`,dataTag:E.ignoreRowClick||E.button?null:"allowRowEvents",column:E,row:R,rowIndex:U,isDragging:be(Pe,E.id),onDragStart:De,onDragOver:He,onDragEnd:$e,onDragEnter:G,onDragLeave:xe}))),s&&V&&n.exports.createElement(On,{key:`expander-${q}`,data:R,extendedRowStyle:Le,extendedClassNames:Ce,ExpanderComponent:c,expanderComponentProps:p}))}const $n=u.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Fn=({sortActive:e,sortDirection:t})=>x.createElement($n,{sortActive:e,sortDirection:t},"\u25B2"),Tn=u(Rt)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,jn=F`
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
`,In=u.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&jn};
`,Ln=u.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Mn=n.exports.memo(function({column:e,disabled:t,draggingColumnId:o,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:c,paginationServer:p,persistSelectedOnSort:f,selectableRowsVisibleOnly:b,onSort:h,onDragStart:T,onDragOver:y,onDragEnd:w,onDragEnter:H,onDragLeave:C}){n.exports.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[P,$]=n.exports.useState(!1),S=n.exports.useRef(null);if(n.exports.useEffect(()=>{S.current&&$(S.current.scrollWidth>S.current.clientWidth)},[P]),e.omit)return null;const O=()=>{if(!e.sortable&&!e.selector)return;let k=r;be(a.id,e.id)&&(k=r===X.ASC?X.DESC:X.ASC),h({type:"SORT_CHANGE",sortDirection:k,selectedColumn:e,clearSelectedOnSort:c&&p&&!f||s||b})},L=k=>n.exports.createElement(Fn,{sortActive:k,sortDirection:r}),M=()=>n.exports.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),R=!(!e.sortable||!be(a.id,e.id)),v=!e.sortable||t,U=e.sortable&&!i&&!e.right,A=e.sortable&&!i&&e.right,N=e.sortable&&i&&!e.right,Y=e.sortable&&i&&e.right;return n.exports.createElement(Tn,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:be(e.id,o),onDragStart:T,onDragOver:y,onDragEnd:w,onDragEnter:H,onDragLeave:C},e.name&&n.exports.createElement(In,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:v?void 0:O,onKeyPress:v?void 0:k=>{k.key==="Enter"&&O()},sortActive:!v&&R,disabled:v},!v&&Y&&M(),!v&&A&&L(R),typeof e.name=="string"?n.exports.createElement(Ln,{title:P?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!v&&N&&M(),!v&&U&&L(R)))});const An=u(de)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function _n({headCell:e=!0,rowData:t,keyField:o,allSelected:a,mergeSelections:r,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:c,selectableRowDisabled:p,onSelectAllRows:f}){const b=i.length>0&&!a,h=p?t.filter(w=>!p(w)):t,T=h.length===0,y=Math.min(t.length,h.length);return n.exports.createElement(An,{className:"rdt_TableCol",headCell:e,noPadding:!0},n.exports.createElement(yt,{name:"select-all-rows",component:s,componentOptions:c,onClick:()=>{f({type:"SELECT_ALL_ROWS",rows:h,rowCount:y,mergeSelections:r,keyField:o})},checked:a,indeterminate:b,disabled:T}))}function vt(e=ke.AUTO){const t=typeof window=="object",[o,a]=n.exports.useState(!1);return n.exports.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const r=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],c=i.dir==="rtl"||s.dir==="rtl";a(r&&c)}},[e,t]),o}const zn=u.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Nn=u.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,ut=u.div`
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
`;function Wn({contextMessage:e,contextActions:t,contextComponent:o,selectedCount:a,direction:r}){const i=vt(r),s=a>0;return o?n.exports.createElement(ut,{visible:s},n.exports.cloneElement(o,{selectedCount:a})):n.exports.createElement(ut,{visible:s,rtl:i},n.exports.createElement(zn,null,((c,p,f)=>{if(p===0)return null;const b=p===1?c.singular:c.plural;return f?`${p} ${c.message||""} ${b}`:`${p} ${b} ${c.message||""}`})(e,a,i)),n.exports.createElement(Nn,null,t))}const Bn=u.div`
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
`,Gn=u.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Vn=u.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Un=({title:e,actions:t=null,contextMessage:o,contextActions:a,contextComponent:r,selectedCount:i,direction:s,showMenu:c=!0})=>n.exports.createElement(Bn,{className:"rdt_TableHeader",role:"heading","aria-level":1},n.exports.createElement(Gn,null,e),t&&n.exports.createElement(Vn,null,t),c&&n.exports.createElement(Wn,{contextMessage:o,contextActions:a,contextComponent:r,direction:s,selectedCount:i}));function St(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}const Yn={left:"flex-start",right:"flex-end",center:"center"},Qn=u.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Yn[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Jn=e=>{var{align:t="right",wrapContent:o=!0}=e,a=St(e,["align","wrapContent"]);return n.exports.createElement(Qn,Object.assign({align:t,wrapContent:o},a))},Kn=u.div`
	display: flex;
	flex-direction: column;
`,Xn=u.div`
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
`,bt=u.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Zn=u.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,qn=u(de)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,eo=u.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,to=()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},x.createElement("path",{d:"M7 10l5 5 5-5z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),no=u.select`
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
`,oo=u.div`
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
`,ao=e=>{var{defaultValue:t,onChange:o}=e,a=St(e,["defaultValue","onChange"]);return n.exports.createElement(oo,null,n.exports.createElement(no,Object.assign({onChange:o,defaultValue:t},a)),n.exports.createElement(to,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return x.createElement("div",null,"To add an expander pass in a component instance via ",x.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),x.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),x.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:x.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:x.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:We.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),x.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),x.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:ke.AUTO,onChangePage:D,onChangeRowsPerPage:D,onRowClicked:D,onRowDoubleClicked:D,onRowMouseEnter:D,onRowMouseLeave:D,onRowExpandToggled:D,onSelectedRowsChange:D,onSort:D,onColumnOrderChange:D},ro={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},lo=u.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Ee=u.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,io=u.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Ct`
    width: 100%;
    justify-content: space-around;
  `};
`,Et=u.span`
	flex-shrink: 1;
	user-select: none;
`,so=u(Et)`
	margin: 0 24px;
`,co=u(Et)`
	margin: 0 4px;
`;var go=n.exports.memo(function({rowsPerPage:e,rowCount:t,currentPage:o,direction:a=l.direction,paginationRowsPerPageOptions:r=l.paginationRowsPerPageOptions,paginationIconLastPage:i=l.paginationIconLastPage,paginationIconFirstPage:s=l.paginationIconFirstPage,paginationIconNext:c=l.paginationIconNext,paginationIconPrevious:p=l.paginationIconPrevious,paginationComponentOptions:f=l.paginationComponentOptions,onChangeRowsPerPage:b=l.onChangeRowsPerPage,onChangePage:h=l.onChangePage}){const T=(()=>{const k=typeof window=="object";function ne(){return{width:k?window.innerWidth:void 0,height:k?window.innerHeight:void 0}}const[ce,oe]=n.exports.useState(ne);return n.exports.useEffect(()=>{if(!k)return()=>null;function ae(){oe(ne())}return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]),ce})(),y=vt(a),w=T.width&&T.width>599,H=ue(t,e),C=o*e,P=C-e+1,$=o===1,S=o===H,O=Object.assign(Object.assign({},ro),f),L=o===H?`${P}-${t} ${O.rangeSeparatorText} ${t}`:`${P}-${C} ${O.rangeSeparatorText} ${t}`,M=n.exports.useCallback(()=>h(o-1),[o,h]),R=n.exports.useCallback(()=>h(o+1),[o,h]),v=n.exports.useCallback(()=>h(1),[h]),U=n.exports.useCallback(()=>h(ue(t,e)),[h,t,e]),A=n.exports.useCallback(k=>b(Number(k.target.value),o),[o,b]),N=r.map(k=>n.exports.createElement("option",{key:k,value:k},k));O.selectAllRowsItem&&N.push(n.exports.createElement("option",{key:-1,value:t},O.selectAllRowsItemText));const Y=n.exports.createElement(ao,{onChange:A,defaultValue:e,"aria-label":O.rowsPerPageText},N);return n.exports.createElement(lo,{className:"rdt_Pagination"},!O.noRowsPerPage&&w&&n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(co,null,O.rowsPerPageText),Y),w&&n.exports.createElement(so,null,L),n.exports.createElement(io,null,n.exports.createElement(Ee,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":$,onClick:v,disabled:$,isRTL:y},s),n.exports.createElement(Ee,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":$,onClick:M,disabled:$,isRTL:y},p),!w&&Y,n.exports.createElement(Ee,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:R,disabled:S,isRTL:y},c),n.exports.createElement(Ee,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:U,disabled:S,isRTL:y},i)))});const te=(e,t)=>{const o=n.exports.useRef(!0);n.exports.useEffect(()=>{o.current?o.current=!1:e()},t)};var po=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var o=Object.prototype.toString.call(t);return o==="[object RegExp]"||o==="[object Date]"||function(a){return a.$$typeof===uo}(t)}(e)},uo=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function me(e,t){return t.clone!==!1&&t.isMergeableObject(e)?se((o=e,Array.isArray(o)?[]:{}),e,t):e;var o}function bo(e,t,o){return e.concat(t).map(function(a){return me(a,o)})}function mt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(o){return t.propertyIsEnumerable(o)}):[]}(e))}function xt(e,t){try{return t in e}catch{return!1}}function mo(e,t,o){var a={};return o.isMergeableObject(e)&&mt(e).forEach(function(r){a[r]=me(e[r],o)}),mt(t).forEach(function(r){(function(i,s){return xt(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,r)||(xt(e,r)&&o.isMergeableObject(t[r])?a[r]=function(i,s){if(!s.customMerge)return se;var c=s.customMerge(i);return typeof c=="function"?c:se}(r,o)(e[r],t[r],o):a[r]=me(t[r],o))}),a}function se(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||bo,o.isMergeableObject=o.isMergeableObject||po,o.cloneUnlessOtherwiseSpecified=me;var a=Array.isArray(t);return a===Array.isArray(e)?a?o.arrayMerge(e,t,o):mo(e,t,o):me(t,o)}se.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(o,a){return se(o,a,t)},{})};var xo=se;const ht={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},wt={default:ht,light:ht,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function ho(e,t,o,a){const[r,i]=n.exports.useState(()=>gt(e)),[s,c]=n.exports.useState(""),p=n.exports.useRef("");te(()=>{i(gt(e))},[e]);const f=n.exports.useCallback(C=>{var P,$,S;const{attributes:O}=C.target,L=(P=O.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;L&&(p.current=((S=($=r[Se(r,L)])===null||$===void 0?void 0:$.id)===null||S===void 0?void 0:S.toString())||"",c(p.current))},[r]),b=n.exports.useCallback(C=>{var P;const{attributes:$}=C.target,S=(P=$.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;if(S&&p.current&&S!==p.current){const O=Se(r,p.current),L=Se(r,S),M=[...r];M[O]=r[L],M[L]=r[O],i(M),t(M)}},[t,r]),h=n.exports.useCallback(C=>{C.preventDefault()},[]),T=n.exports.useCallback(C=>{C.preventDefault()},[]),y=n.exports.useCallback(C=>{C.preventDefault(),p.current="",c("")},[]),w=function(C=!1){return C?X.ASC:X.DESC}(a),H=n.exports.useMemo(()=>r[Se(r,o==null?void 0:o.toString())]||{},[o,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:f,handleDragEnter:b,handleDragOver:h,handleDragLeave:T,handleDragEnd:y,defaultSortDirection:w,defaultSortColumn:H}}var wo=n.exports.memo(function(e){const{data:t=l.data,columns:o=l.columns,title:a=l.title,actions:r=l.actions,keyField:i=l.keyField,striped:s=l.striped,highlightOnHover:c=l.highlightOnHover,pointerOnHover:p=l.pointerOnHover,dense:f=l.dense,selectableRows:b=l.selectableRows,selectableRowsSingle:h=l.selectableRowsSingle,selectableRowsHighlight:T=l.selectableRowsHighlight,selectableRowsNoSelectAll:y=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:w=l.selectableRowsVisibleOnly,selectableRowSelected:H=l.selectableRowSelected,selectableRowDisabled:C=l.selectableRowDisabled,selectableRowsComponent:P=l.selectableRowsComponent,selectableRowsComponentProps:$=l.selectableRowsComponentProps,onRowExpandToggled:S=l.onRowExpandToggled,onSelectedRowsChange:O=l.onSelectedRowsChange,expandableIcon:L=l.expandableIcon,onChangeRowsPerPage:M=l.onChangeRowsPerPage,onChangePage:R=l.onChangePage,paginationServer:v=l.paginationServer,paginationServerOptions:U=l.paginationServerOptions,paginationTotalRows:A=l.paginationTotalRows,paginationDefaultPage:N=l.paginationDefaultPage,paginationResetDefaultPage:Y=l.paginationResetDefaultPage,paginationPerPage:k=l.paginationPerPage,paginationRowsPerPageOptions:ne=l.paginationRowsPerPageOptions,paginationIconLastPage:ce=l.paginationIconLastPage,paginationIconFirstPage:oe=l.paginationIconFirstPage,paginationIconNext:ae=l.paginationIconNext,paginationIconPrevious:Pe=l.paginationIconPrevious,paginationComponent:De=l.paginationComponent,paginationComponentOptions:He=l.paginationComponentOptions,responsive:$e=l.responsive,progressPending:G=l.progressPending,progressComponent:xe=l.progressComponent,persistTableHead:V=l.persistTableHead,noDataComponent:he=l.noDataComponent,disabled:Z=l.disabled,noTableHead:Fe=l.noTableHead,noHeader:Te=l.noHeader,fixedHeader:we=l.fixedHeader,fixedHeaderScrollHeight:je=l.fixedHeaderScrollHeight,pagination:Q=l.pagination,subHeader:q=l.subHeader,subHeaderAlign:fe=l.subHeaderAlign,subHeaderWrap:Ce=l.subHeaderWrap,subHeaderComponent:Ie=l.subHeaderComponent,noContextMenu:Le=l.noContextMenu,contextMessage:Me=l.contextMessage,contextActions:E=l.contextActions,contextComponent:Ot=l.contextComponent,expandableRows:Re=l.expandableRows,onRowClicked:Be=l.onRowClicked,onRowDoubleClicked:Ge=l.onRowDoubleClicked,onRowMouseEnter:Ve=l.onRowMouseEnter,onRowMouseLeave:Ue=l.onRowMouseLeave,sortIcon:kt=l.sortIcon,onSort:Pt=l.onSort,sortFunction:Ye=l.sortFunction,sortServer:Ae=l.sortServer,expandableRowsComponent:Dt=l.expandableRowsComponent,expandableRowsComponentProps:Ht=l.expandableRowsComponentProps,expandableRowDisabled:Qe=l.expandableRowDisabled,expandableRowsHideExpander:Je=l.expandableRowsHideExpander,expandOnRowClicked:$t=l.expandOnRowClicked,expandOnRowDoubleClicked:Ft=l.expandOnRowDoubleClicked,expandableRowExpanded:Ke=l.expandableRowExpanded,expandableInheritConditionalStyles:Tt=l.expandableInheritConditionalStyles,defaultSortFieldId:jt=l.defaultSortFieldId,defaultSortAsc:It=l.defaultSortAsc,clearSelectedRows:Xe=l.clearSelectedRows,conditionalRowStyles:Lt=l.conditionalRowStyles,theme:Ze=l.theme,customStyles:qe=l.customStyles,direction:ge=l.direction,onColumnOrderChange:Mt=l.onColumnOrderChange,className:At}=e,{tableColumns:et,draggingColumnId:tt,handleDragStart:nt,handleDragEnter:ot,handleDragOver:at,handleDragLeave:rt,handleDragEnd:lt,defaultSortDirection:_t,defaultSortColumn:zt}=ho(o,Mt,jt,It),[{rowsPerPage:J,currentPage:_,selectedRows:_e,allSelected:it,selectedCount:st,selectedColumn:W,sortDirection:re,toggleOnSelectedRowsChange:Nt},ee]=n.exports.useReducer(ln,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:zt,toggleOnSelectedRowsChange:!1,sortDirection:_t,currentPage:N,rowsPerPage:k,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:dt=!1,persistSelectedOnPageChange:ye=!1}=U,ct=!(!v||!ye&&!dt),Wt=Q&&!G&&t.length>0,Bt=De||go,Gt=n.exports.useMemo(()=>((g={},m="default",I="default")=>{const z=wt[m]?m:I;return xo({table:{style:{color:(d=wt[z]).text.primary,backgroundColor:d.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:d.text.primary,backgroundColor:d.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:d.background.default,minHeight:"52px"}},head:{style:{color:d.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:d.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:d.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:d.context.background,fontSize:"18px",fontWeight:400,color:d.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:d.text.primary,backgroundColor:d.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:d.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:d.selected.text,backgroundColor:d.selected.default,borderBottomColor:d.background.default}},highlightOnHoverStyle:{color:d.highlightOnHover.text,backgroundColor:d.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:d.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:d.background.default},stripedStyle:{color:d.striped.text,backgroundColor:d.striped.default}},expanderRow:{style:{color:d.text.primary,backgroundColor:d.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:d.button.default,fill:d.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:d.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:d.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:d.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:d.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:d.button.default,fill:d.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:d.button.disabled,fill:d.button.disabled},"&:hover:not(:disabled)":{backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}}},g);var d})(qe,Ze),[qe,Ze]),Vt=n.exports.useMemo(()=>Object.assign({},ge!=="auto"&&{dir:ge}),[ge]),j=n.exports.useMemo(()=>{if(Ae)return t;if((W==null?void 0:W.sortFunction)&&typeof W.sortFunction=="function"){const g=W.sortFunction,m=re===X.ASC?g:(I,z)=>-1*g(I,z);return[...t].sort(m)}return function(g,m,I,z){return m?z&&typeof z=="function"?z(g.slice(0),m,I):g.slice(0).sort((d,ve)=>{let K,B;if(typeof m=="string"?(K=Ne(d,m),B=Ne(ve,m)):(K=m(d),B=m(ve)),I==="asc"){if(K<B)return-1;if(K>B)return 1}if(I==="desc"){if(K>B)return-1;if(K<B)return 1}return 0}):g}(t,W==null?void 0:W.selector,re,Ye)},[Ae,W,re,t,Ye]),pe=n.exports.useMemo(()=>{if(Q&&!v){const g=_*J,m=g-J;return j.slice(m,g)}return j},[_,Q,v,J,j]),Ut=n.exports.useCallback(g=>{ee(g)},[]),Yt=n.exports.useCallback(g=>{ee(g)},[]),Qt=n.exports.useCallback(g=>{ee(g)},[]),Jt=n.exports.useCallback((g,m)=>Be(g,m),[Be]),Kt=n.exports.useCallback((g,m)=>Ge(g,m),[Ge]),Xt=n.exports.useCallback((g,m)=>Ve(g,m),[Ve]),Zt=n.exports.useCallback((g,m)=>Ue(g,m),[Ue]),le=n.exports.useCallback(g=>ee({type:"CHANGE_PAGE",page:g,paginationServer:v,visibleOnly:w,persistSelectedOnPageChange:ye}),[v,ye,w]),qt=n.exports.useCallback(g=>{const m=ue(A||pe.length,g),I=ze(_,m);v||le(I),ee({type:"CHANGE_ROWS_PER_PAGE",page:I,rowsPerPage:g})},[_,le,v,A,pe.length]);if(Q&&!v&&j.length>0&&pe.length===0){const g=ue(j.length,J),m=ze(_,g);le(m)}te(()=>{O({allSelected:it,selectedCount:st,selectedRows:_e.slice(0)})},[Nt]),te(()=>{Pt(W,re,j.slice(0))},[W,re]),te(()=>{R(_,A||j.length)},[_]),te(()=>{M(J,_)},[J]),te(()=>{le(N)},[N,Y]),te(()=>{if(Q&&v&&A>0){const g=ue(A,J),m=ze(_,g);_!==m&&le(m)}},[A]),n.exports.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Xe})},[h,Xe]),n.exports.useEffect(()=>{if(!H)return;const g=j.filter(I=>H(I)),m=h?g.slice(0,1):g;ee({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:m,totalRows:j.length,mergeSelections:ct})},[t,H]);const en=w?pe:j,tn=ye||h||y;return n.exports.createElement(nn,{theme:Gt},!Te&&(!!a||!!r)&&n.exports.createElement(Un,{title:a,actions:r,showMenu:!Le,selectedCount:st,direction:ge,contextActions:E,contextComponent:Ot,contextMessage:Me}),q&&n.exports.createElement(Jn,{align:fe,wrapContent:Ce},Ie),n.exports.createElement(Xn,Object.assign({responsive:$e,fixedHeader:we,fixedHeaderScrollHeight:je,className:At},Vt),n.exports.createElement(Zn,null,G&&!V&&n.exports.createElement(bt,null,xe),n.exports.createElement(dn,{disabled:Z,className:"rdt_Table",role:"table"},!Fe&&(!!V||j.length>0&&!G)&&n.exports.createElement(gn,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:we},n.exports.createElement(pn,{className:"rdt_TableHeadRow",role:"row",dense:f},b&&(tn?n.exports.createElement(de,{style:{flex:"0 0 48px"}}):n.exports.createElement(_n,{allSelected:it,selectedRows:_e,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:C,rowData:en,keyField:i,mergeSelections:ct,onSelectAllRows:Yt})),Re&&!Je&&n.exports.createElement(qn,null),et.map(g=>n.exports.createElement(Mn,{key:g.id,column:g,selectedColumn:W,disabled:G||j.length===0,pagination:Q,paginationServer:v,persistSelectedOnSort:dt,selectableRowsVisibleOnly:w,sortDirection:re,sortIcon:kt,sortServer:Ae,onSort:Ut,onDragStart:nt,onDragOver:at,onDragEnd:lt,onDragEnter:ot,onDragLeave:rt,draggingColumnId:tt})))),!j.length&&!G&&n.exports.createElement(eo,null,he),G&&V&&n.exports.createElement(bt,null,xe),!G&&j.length>0&&n.exports.createElement(Kn,{className:"rdt_TableBody",role:"rowgroup"},pe.map((g,m)=>{const I=ie(g,i),z=function(B=""){return typeof B!="number"&&(!B||B.length===0)}(I)?m:I,d=Oe(g,_e,i),ve=!!(Re&&Ke&&Ke(g)),K=!!(Re&&Qe&&Qe(g));return n.exports.createElement(Hn,{id:z,key:z,keyField:i,"data-row-id":z,columns:et,row:g,rowCount:j.length,rowIndex:m,selectableRows:b,expandableRows:Re,expandableIcon:L,highlightOnHover:c,pointerOnHover:p,dense:f,expandOnRowClicked:$t,expandOnRowDoubleClicked:Ft,expandableRowsComponent:Dt,expandableRowsComponentProps:Ht,expandableRowsHideExpander:Je,defaultExpanderDisabled:K,defaultExpanded:ve,expandableInheritConditionalStyles:Tt,conditionalRowStyles:Lt,selected:d,selectableRowsHighlight:T,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:C,selectableRowsSingle:h,striped:s,onRowExpandToggled:S,onRowClicked:Jt,onRowDoubleClicked:Kt,onRowMouseEnter:Xt,onRowMouseLeave:Zt,onSelectedRow:Qt,draggingColumnId:tt,onDragStart:nt,onDragOver:at,onDragEnd:lt,onDragEnter:ot,onDragLeave:rt})}))))),Wt&&n.exports.createElement("div",null,n.exports.createElement(Bt,{onChangePage:le,onChangeRowsPerPage:qt,rowCount:A||j.length,currentPage:_,rowsPerPage:J,direction:ge,paginationRowsPerPageOptions:ne,paginationIconLastPage:ce,paginationIconFirstPage:oe,paginationIconNext:ae,paginationIconPrevious:Pe,paginationComponentOptions:He})))});const fo=u(wo)(e=>({".rdt_Table":{backgroundColor:"var(--palette-greyBackground)"},".rdt_TableHeadRow":{backgroundColor:"var(--palette-whiteBackground)",fontWeight:700,fontSize:"1rem",lineHeight:"1.6rem",borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"4.8rem"},".rdt_TableRow":{borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"4.8rem",cursor:"auto"},".rdt_ExpanderRow":{padding:"1.6rem 2.4rem",paddingRight:"auto",marginTop:"-0.1rem",marginBottom:"0.8rem",borderRadius:"0.8rem"}})),Co=e=>{const{columns:t,data:o,paginationComponent:a,expandableRows:r}=e,{paginationPerPage:i,paginationRowsPerPageOptions:s}=e,{expandableRowsComponent:c,expandOnRowClicked:p}=e,{onRowClicked:f}=e;return on(fo,{columns:t,data:o,pagination:!0,responsive:!0,paginationPerPage:i,paginationRowsPerPageOptions:s,paginationComponent:a,expandableRows:r,expandableRowsComponent:c,expandOnRowClicked:p,onRowClicked:f})};Co.defaultProps={};export{Co as T};
