import{ay as T,s as b,r as n,q as h,az as on,a as gt,an}from"./index.31b587f7.js";var X;function ie(e,t){return e[t]}function Ne(e,t){return t.split(".").reduce((o,a)=>{const r=a.match(/[^\]\\[.]+/g);if(r&&r.length>1)for(let i=0;i<r.length;i++)return o[r[i]][r[i+1]];return o[a]},e)}function rn(e=[],t,o=0){return[...e.slice(0,o),t,...e.slice(o)]}function ln(e=[],t,o="id"){const a=e.slice(),r=ie(t,o);return r?a.splice(a.findIndex(i=>ie(i,o)===r),1):a.splice(a.findIndex(i=>i===t),1),a}function pt(e){return e.map((t,o)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=o+1),a})}function ue(e,t){return Math.ceil(e/t)}function ze(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(X||(X={}));const H=()=>null;function Ct(e,t=[],o=[]){let a={},r=[...o];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(r=[...r,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{style:a,classNames:r.join(" ")}}function Oe(e,t=[],o="id"){const a=ie(e,o);return a?t.some(r=>ie(r,o)===a):t.some(r=>r===e)}function Se(e,t){return t?e.findIndex(o=>be(o.id,t)):-1}function be(e,t){return e==t}function sn(e,t){const o=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:r,rowCount:i,mergeSelections:s}=t,c=!e.allSelected,u=!e.toggleOnSelectedRowsChange;if(s){const f=c?[...e.selectedRows,...r.filter(p=>!Oe(p,e.selectedRows,a))]:e.selectedRows.filter(p=>!Oe(p,r,a));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:f.length,selectedRows:f,toggleOnSelectedRowsChange:u})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?i:0,selectedRows:c?r:[],toggleOnSelectedRowsChange:u})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:r,isSelected:i,rowCount:s,singleSelect:c}=t;return c?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[r],toggleOnSelectedRowsChange:o}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:ln(e.selectedRows,r,a),toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:rn(e.selectedRows,r),toggleOnSelectedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:r,totalRows:i,mergeSelections:s}=t;if(s){const c=[...e.selectedRows,...r.filter(u=>!Oe(u,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:o})}return Object.assign(Object.assign({},e),{selectedCount:r.length,allSelected:r.length===i,selectedRows:r,toggleOnSelectedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:r,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:r,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_PAGE":{const{page:a,paginationServer:r,visibleOnly:i,persistSelectedOnPageChange:s}=t,c=r&&s,u=r&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),c&&{allSelected:!1}),u&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:r}=t;return Object.assign(Object.assign({},e),{currentPage:r,rowsPerPage:a})}}}const dn=T`
	pointer-events: none;
	opacity: 0.4;
`,cn=b.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&dn};
	${({theme:e})=>e.table.style};
`,gn=T`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,pn=b.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&gn};
	${({theme:e})=>e.head.style};
`,un=b.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Rt=(e,...t)=>T`
		@media screen and (max-width: ${599}px) {
			${T(e,...t)}
		}
	`,bn=(e,...t)=>T`
		@media screen and (max-width: ${959}px) {
			${T(e,...t)}
		}
	`,mn=(e,...t)=>T`
		@media screen and (max-width: ${1280}px) {
			${T(e,...t)}
		}
	`,xn=e=>(t,...o)=>T`
				@media screen and (max-width: ${e}px) {
					${T(t,...o)}
				}
			`,de=b.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,yt=b(de)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&T`
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
	${({hide:e})=>e&&e==="md"&&bn`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&mn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&xn(e)`
    display: none;
  `};
`,hn=T`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,wn=b(yt).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&hn};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var fn=n.exports.memo(function({id:e,column:t,row:o,rowIndex:a,dataTag:r,isDragging:i,onDragStart:s,onDragOver:c,onDragEnd:u,onDragEnter:f,onDragLeave:p}){const{style:x,classNames:P}=Ct(o,t.conditionalCellStyles,["rdt_TableCell"]);return n.exports.createElement(wn,{id:e,"data-column-id":t.id,role:"cell",className:P,"data-tag":r,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:x,isDragging:i,onDragStart:s,onDragOver:c,onDragEnd:u,onDragEnter:f,onDragLeave:p},!t.cell&&n.exports.createElement("div",{"data-tag":r},function(C,w,$,R){if(!w)return null;if(typeof w!="string"&&typeof w!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return $&&typeof $=="function"?$(C,R):w&&typeof w=="function"?w(C,R):Ne(C,w)}(o,t.selector,t.format,a)),t.cell&&t.cell(o,a,t,e))}),vt=n.exports.memo(function({name:e,component:t="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:r=!1,disabled:i=!1,onClick:s=H}){const c=t,u=c!=="input"?o.style:(p=>Object.assign(Object.assign({fontSize:"18px"},!p&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),f=n.exports.useMemo(()=>function(p,...x){let P;return Object.keys(p).map(C=>p[C]).forEach((C,w)=>{typeof C=="function"&&(P=Object.assign(Object.assign({},p),{[Object.keys(p)[w]]:C(...x)}))}),P||p}(o,a),[o,a]);return n.exports.createElement(c,Object.assign({type:"checkbox",ref:p=>{p&&(p.indeterminate=a)},style:u,onClick:i?H:s,name:e,"aria-label":e,checked:r,disabled:i},f,{onChange:H}))});const Cn=b(de)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Rn({name:e,keyField:t,row:o,rowCount:a,selected:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:c,selectableRowDisabled:u,onSelectedRow:f}){const p=!(!u||!u(o));return n.exports.createElement(Cn,{onClick:x=>x.stopPropagation(),className:"rdt_TableCell",noPadding:!0},n.exports.createElement(vt,{name:e,component:i,componentOptions:s,checked:r,"aria-checked":r,onClick:()=>{f({type:"SELECT_SINGLE_ROW",row:o,isSelected:r,keyField:t,rowCount:a,singleSelect:c})},disabled:p}))}const yn=b.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function vn({disabled:e=!1,expanded:t=!1,expandableIcon:o,id:a,row:r,onToggled:i}){const s=t?o.expanded:o.collapsed;return n.exports.createElement(yn,{"aria-disabled":e,onClick:()=>i&&i(r),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const Sn=b(de)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function En({row:e,expanded:t=!1,expandableIcon:o,id:a,onToggled:r,disabled:i=!1}){return n.exports.createElement(Sn,{onClick:s=>s.stopPropagation(),noPadding:!0},n.exports.createElement(vn,{id:a,row:e,expanded:t,expandableIcon:o,disabled:i,onToggled:r}))}const On=b.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var kn=n.exports.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:r}){const i=["rdt_ExpanderRow",...r.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return n.exports.createElement(On,{className:i,extendedRowStyle:a},n.exports.createElement(t,Object.assign({data:e},o)))}),ke,We,ut;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(ke||(ke={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(We||(We={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(ut||(ut={}));const Pn=T`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Dn=T`
	&:hover {
		cursor: pointer;
	}
`,Hn=b.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&Pn};
	${({pointerOnHover:e})=>e&&Dn};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function $n({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:o=!1,defaultExpanderDisabled:a=!1,dense:r=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:c,expandableRowsComponentProps:u,expandableRowsHideExpander:f,expandOnRowClicked:p=!1,expandOnRowDoubleClicked:x=!1,highlightOnHover:P=!1,id:C,expandableInheritConditionalStyles:w,keyField:$,onRowClicked:R=H,onRowDoubleClicked:D=H,onRowMouseEnter:F=H,onRowMouseLeave:S=H,onRowExpandToggled:O=H,onSelectedRow:L=H,pointerOnHover:M=!1,row:y,rowCount:v,rowIndex:U,selectableRowDisabled:A=null,selectableRows:N=!1,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowsHighlight:ne=!1,selectableRowsSingle:ce=!1,selected:oe,striped:ae=!1,draggingColumnId:Pe,onDragStart:De,onDragOver:He,onDragEnd:$e,onDragEnter:G,onDragLeave:xe}){const[V,he]=n.exports.useState(o);n.exports.useEffect(()=>{he(o)},[o]);const Z=n.exports.useCallback(()=>{he(!V),O(!V,y)},[V,O,y]),Fe=M||s&&(p||x),Te=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(R(y,E),!a&&s&&p&&Z())},[a,p,s,Z,R,y]),we=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(D(y,E),!a&&s&&x&&Z())},[a,x,s,Z,D,y]),je=n.exports.useCallback(E=>{F(y,E)},[F,y]),Q=n.exports.useCallback(E=>{S(y,E)},[S,y]),q=ie(y,$),{style:fe,classNames:Ce}=Ct(y,t,["rdt_TableRow"]),Ie=ne&&oe,Le=w?fe:{},Me=ae&&U%2==0;return n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(Hn,{id:`row-${C}`,role:"row",striped:Me,highlightOnHover:P,pointerOnHover:!a&&Fe,dense:r,onClick:Te,onDoubleClick:we,onMouseEnter:je,onMouseLeave:Q,className:Ce,selected:Ie,style:fe},N&&n.exports.createElement(Rn,{name:`select-row-${q}`,keyField:$,row:y,rowCount:v,selected:oe,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowDisabled:A,selectableRowsSingle:ce,onSelectedRow:L}),s&&!f&&n.exports.createElement(En,{id:q,expandableIcon:i,expanded:V,row:y,onToggled:Z,disabled:a}),e.map(E=>E.omit?null:n.exports.createElement(fn,{id:`cell-${E.id}-${q}`,key:`cell-${E.id}-${q}`,dataTag:E.ignoreRowClick||E.button?null:"allowRowEvents",column:E,row:y,rowIndex:U,isDragging:be(Pe,E.id),onDragStart:De,onDragOver:He,onDragEnd:$e,onDragEnter:G,onDragLeave:xe}))),s&&V&&n.exports.createElement(kn,{key:`expander-${q}`,data:y,extendedRowStyle:Le,extendedClassNames:Ce,ExpanderComponent:c,expanderComponentProps:u}))}const Fn=b.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Tn=({sortActive:e,sortDirection:t})=>h.createElement(Fn,{sortActive:e,sortDirection:t},"\u25B2"),jn=b(yt)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,In=T`
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

	${({sortActive:e})=>!e&&T`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,Ln=b.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&In};
`,Mn=b.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var An=n.exports.memo(function({column:e,disabled:t,draggingColumnId:o,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:c,paginationServer:u,persistSelectedOnSort:f,selectableRowsVisibleOnly:p,onSort:x,onDragStart:P,onDragOver:C,onDragEnd:w,onDragEnter:$,onDragLeave:R}){n.exports.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[D,F]=n.exports.useState(!1),S=n.exports.useRef(null);if(n.exports.useEffect(()=>{S.current&&F(S.current.scrollWidth>S.current.clientWidth)},[D]),e.omit)return null;const O=()=>{if(!e.sortable&&!e.selector)return;let k=r;be(a.id,e.id)&&(k=r===X.ASC?X.DESC:X.ASC),x({type:"SORT_CHANGE",sortDirection:k,selectedColumn:e,clearSelectedOnSort:c&&u&&!f||s||p})},L=k=>n.exports.createElement(Tn,{sortActive:k,sortDirection:r}),M=()=>n.exports.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),y=!(!e.sortable||!be(a.id,e.id)),v=!e.sortable||t,U=e.sortable&&!i&&!e.right,A=e.sortable&&!i&&e.right,N=e.sortable&&i&&!e.right,Y=e.sortable&&i&&e.right;return n.exports.createElement(jn,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:be(e.id,o),onDragStart:P,onDragOver:C,onDragEnd:w,onDragEnter:$,onDragLeave:R},e.name&&n.exports.createElement(Ln,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:v?void 0:O,onKeyPress:v?void 0:k=>{k.key==="Enter"&&O()},sortActive:!v&&y,disabled:v},!v&&Y&&M(),!v&&A&&L(y),typeof e.name=="string"?n.exports.createElement(Mn,{title:D?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!v&&N&&M(),!v&&U&&L(y)))});const _n=b(de)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function zn({headCell:e=!0,rowData:t,keyField:o,allSelected:a,mergeSelections:r,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:c,selectableRowDisabled:u,onSelectAllRows:f}){const p=i.length>0&&!a,x=u?t.filter(w=>!u(w)):t,P=x.length===0,C=Math.min(t.length,x.length);return n.exports.createElement(_n,{className:"rdt_TableCol",headCell:e,noPadding:!0},n.exports.createElement(vt,{name:"select-all-rows",component:s,componentOptions:c,onClick:()=>{f({type:"SELECT_ALL_ROWS",rows:x,rowCount:C,mergeSelections:r,keyField:o})},checked:a,indeterminate:p,disabled:P}))}function St(e=ke.AUTO){const t=typeof window=="object",[o,a]=n.exports.useState(!1);return n.exports.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const r=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],c=i.dir==="rtl"||s.dir==="rtl";a(r&&c)}},[e,t]),o}const Nn=b.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Wn=b.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,bt=b.div`
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
`;function Bn({contextMessage:e,contextActions:t,contextComponent:o,selectedCount:a,direction:r}){const i=St(r),s=a>0;return o?n.exports.createElement(bt,{visible:s},n.exports.cloneElement(o,{selectedCount:a})):n.exports.createElement(bt,{visible:s,rtl:i},n.exports.createElement(Nn,null,((c,u,f)=>{if(u===0)return null;const p=u===1?c.singular:c.plural;return f?`${u} ${c.message||""} ${p}`:`${u} ${p} ${c.message||""}`})(e,a,i)),n.exports.createElement(Wn,null,t))}const Gn=b.div`
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
`,Vn=b.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Un=b.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Yn=({title:e,actions:t=null,contextMessage:o,contextActions:a,contextComponent:r,selectedCount:i,direction:s,showMenu:c=!0})=>n.exports.createElement(Gn,{className:"rdt_TableHeader",role:"heading","aria-level":1},n.exports.createElement(Vn,null,e),t&&n.exports.createElement(Un,null,t),c&&n.exports.createElement(Bn,{contextMessage:o,contextActions:a,contextComponent:r,direction:s,selectedCount:i}));function Et(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}const Qn={left:"flex-start",right:"flex-end",center:"center"},Jn=b.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Qn[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Kn=e=>{var{align:t="right",wrapContent:o=!0}=e,a=Et(e,["align","wrapContent"]);return n.exports.createElement(Jn,Object.assign({align:t,wrapContent:o},a))},Xn=b.div`
	display: flex;
	flex-direction: column;
`,Zn=b.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&T`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&T`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,mt=b.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,qn=b.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,eo=b(de)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,to=b.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,no=()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},h.createElement("path",{d:"M7 10l5 5 5-5z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),oo=b.select`
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
`,ao=b.div`
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
`,ro=e=>{var{defaultValue:t,onChange:o}=e,a=Et(e,["defaultValue","onChange"]);return n.exports.createElement(ao,null,n.exports.createElement(oo,Object.assign({onChange:o,defaultValue:t},a)),n.exports.createElement(no,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return h.createElement("div",null,"To add an expander pass in a component instance via ",h.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:h.createElement(()=>h.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),h.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:h.createElement(()=>h.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),h.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:h.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:h.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:We.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),h.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),h.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:h.createElement(()=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},h.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:ke.AUTO,onChangePage:H,onChangeRowsPerPage:H,onRowClicked:H,onRowDoubleClicked:H,onRowMouseEnter:H,onRowMouseLeave:H,onRowExpandToggled:H,onSelectedRowsChange:H,onSort:H,onColumnOrderChange:H},lo={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},io=b.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Ee=b.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,so=b.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Rt`
    width: 100%;
    justify-content: space-around;
  `};
`,Ot=b.span`
	flex-shrink: 1;
	user-select: none;
`,co=b(Ot)`
	margin: 0 24px;
`,go=b(Ot)`
	margin: 0 4px;
`;var po=n.exports.memo(function({rowsPerPage:e,rowCount:t,currentPage:o,direction:a=l.direction,paginationRowsPerPageOptions:r=l.paginationRowsPerPageOptions,paginationIconLastPage:i=l.paginationIconLastPage,paginationIconFirstPage:s=l.paginationIconFirstPage,paginationIconNext:c=l.paginationIconNext,paginationIconPrevious:u=l.paginationIconPrevious,paginationComponentOptions:f=l.paginationComponentOptions,onChangeRowsPerPage:p=l.onChangeRowsPerPage,onChangePage:x=l.onChangePage}){const P=(()=>{const k=typeof window=="object";function ne(){return{width:k?window.innerWidth:void 0,height:k?window.innerHeight:void 0}}const[ce,oe]=n.exports.useState(ne);return n.exports.useEffect(()=>{if(!k)return()=>null;function ae(){oe(ne())}return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]),ce})(),C=St(a),w=P.width&&P.width>599,$=ue(t,e),R=o*e,D=R-e+1,F=o===1,S=o===$,O=Object.assign(Object.assign({},lo),f),L=o===$?`${D}-${t} ${O.rangeSeparatorText} ${t}`:`${D}-${R} ${O.rangeSeparatorText} ${t}`,M=n.exports.useCallback(()=>x(o-1),[o,x]),y=n.exports.useCallback(()=>x(o+1),[o,x]),v=n.exports.useCallback(()=>x(1),[x]),U=n.exports.useCallback(()=>x(ue(t,e)),[x,t,e]),A=n.exports.useCallback(k=>p(Number(k.target.value),o),[o,p]),N=r.map(k=>n.exports.createElement("option",{key:k,value:k},k));O.selectAllRowsItem&&N.push(n.exports.createElement("option",{key:-1,value:t},O.selectAllRowsItemText));const Y=n.exports.createElement(ro,{onChange:A,defaultValue:e,"aria-label":O.rowsPerPageText},N);return n.exports.createElement(io,{className:"rdt_Pagination"},!O.noRowsPerPage&&w&&n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(go,null,O.rowsPerPageText),Y),w&&n.exports.createElement(co,null,L),n.exports.createElement(so,null,n.exports.createElement(Ee,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":F,onClick:v,disabled:F,isRTL:C},s),n.exports.createElement(Ee,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":F,onClick:M,disabled:F,isRTL:C},u),!w&&Y,n.exports.createElement(Ee,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:y,disabled:S,isRTL:C},c),n.exports.createElement(Ee,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:U,disabled:S,isRTL:C},i)))});const te=(e,t)=>{const o=n.exports.useRef(!0);n.exports.useEffect(()=>{o.current?o.current=!1:e()},t)};var uo=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var o=Object.prototype.toString.call(t);return o==="[object RegExp]"||o==="[object Date]"||function(a){return a.$$typeof===bo}(t)}(e)},bo=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function me(e,t){return t.clone!==!1&&t.isMergeableObject(e)?se((o=e,Array.isArray(o)?[]:{}),e,t):e;var o}function mo(e,t,o){return e.concat(t).map(function(a){return me(a,o)})}function xt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(o){return t.propertyIsEnumerable(o)}):[]}(e))}function ht(e,t){try{return t in e}catch{return!1}}function xo(e,t,o){var a={};return o.isMergeableObject(e)&&xt(e).forEach(function(r){a[r]=me(e[r],o)}),xt(t).forEach(function(r){(function(i,s){return ht(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,r)||(ht(e,r)&&o.isMergeableObject(t[r])?a[r]=function(i,s){if(!s.customMerge)return se;var c=s.customMerge(i);return typeof c=="function"?c:se}(r,o)(e[r],t[r],o):a[r]=me(t[r],o))}),a}function se(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||mo,o.isMergeableObject=o.isMergeableObject||uo,o.cloneUnlessOtherwiseSpecified=me;var a=Array.isArray(t);return a===Array.isArray(e)?a?o.arrayMerge(e,t,o):xo(e,t,o):me(t,o)}se.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(o,a){return se(o,a,t)},{})};var ho=se;const wt={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},ft={default:wt,light:wt,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function wo(e,t,o,a){const[r,i]=n.exports.useState(()=>pt(e)),[s,c]=n.exports.useState(""),u=n.exports.useRef("");te(()=>{i(pt(e))},[e]);const f=n.exports.useCallback(R=>{var D,F,S;const{attributes:O}=R.target,L=(D=O.getNamedItem("data-column-id"))===null||D===void 0?void 0:D.value;L&&(u.current=((S=(F=r[Se(r,L)])===null||F===void 0?void 0:F.id)===null||S===void 0?void 0:S.toString())||"",c(u.current))},[r]),p=n.exports.useCallback(R=>{var D;const{attributes:F}=R.target,S=(D=F.getNamedItem("data-column-id"))===null||D===void 0?void 0:D.value;if(S&&u.current&&S!==u.current){const O=Se(r,u.current),L=Se(r,S),M=[...r];M[O]=r[L],M[L]=r[O],i(M),t(M)}},[t,r]),x=n.exports.useCallback(R=>{R.preventDefault()},[]),P=n.exports.useCallback(R=>{R.preventDefault()},[]),C=n.exports.useCallback(R=>{R.preventDefault(),u.current="",c("")},[]),w=function(R=!1){return R?X.ASC:X.DESC}(a),$=n.exports.useMemo(()=>r[Se(r,o==null?void 0:o.toString())]||{},[o,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:f,handleDragEnter:p,handleDragOver:x,handleDragLeave:P,handleDragEnd:C,defaultSortDirection:w,defaultSortColumn:$}}var fo=n.exports.memo(function(e){const{data:t=l.data,columns:o=l.columns,title:a=l.title,actions:r=l.actions,keyField:i=l.keyField,striped:s=l.striped,highlightOnHover:c=l.highlightOnHover,pointerOnHover:u=l.pointerOnHover,dense:f=l.dense,selectableRows:p=l.selectableRows,selectableRowsSingle:x=l.selectableRowsSingle,selectableRowsHighlight:P=l.selectableRowsHighlight,selectableRowsNoSelectAll:C=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:w=l.selectableRowsVisibleOnly,selectableRowSelected:$=l.selectableRowSelected,selectableRowDisabled:R=l.selectableRowDisabled,selectableRowsComponent:D=l.selectableRowsComponent,selectableRowsComponentProps:F=l.selectableRowsComponentProps,onRowExpandToggled:S=l.onRowExpandToggled,onSelectedRowsChange:O=l.onSelectedRowsChange,expandableIcon:L=l.expandableIcon,onChangeRowsPerPage:M=l.onChangeRowsPerPage,onChangePage:y=l.onChangePage,paginationServer:v=l.paginationServer,paginationServerOptions:U=l.paginationServerOptions,paginationTotalRows:A=l.paginationTotalRows,paginationDefaultPage:N=l.paginationDefaultPage,paginationResetDefaultPage:Y=l.paginationResetDefaultPage,paginationPerPage:k=l.paginationPerPage,paginationRowsPerPageOptions:ne=l.paginationRowsPerPageOptions,paginationIconLastPage:ce=l.paginationIconLastPage,paginationIconFirstPage:oe=l.paginationIconFirstPage,paginationIconNext:ae=l.paginationIconNext,paginationIconPrevious:Pe=l.paginationIconPrevious,paginationComponent:De=l.paginationComponent,paginationComponentOptions:He=l.paginationComponentOptions,responsive:$e=l.responsive,progressPending:G=l.progressPending,progressComponent:xe=l.progressComponent,persistTableHead:V=l.persistTableHead,noDataComponent:he=l.noDataComponent,disabled:Z=l.disabled,noTableHead:Fe=l.noTableHead,noHeader:Te=l.noHeader,fixedHeader:we=l.fixedHeader,fixedHeaderScrollHeight:je=l.fixedHeaderScrollHeight,pagination:Q=l.pagination,subHeader:q=l.subHeader,subHeaderAlign:fe=l.subHeaderAlign,subHeaderWrap:Ce=l.subHeaderWrap,subHeaderComponent:Ie=l.subHeaderComponent,noContextMenu:Le=l.noContextMenu,contextMessage:Me=l.contextMessage,contextActions:E=l.contextActions,contextComponent:kt=l.contextComponent,expandableRows:Re=l.expandableRows,onRowClicked:Be=l.onRowClicked,onRowDoubleClicked:Ge=l.onRowDoubleClicked,onRowMouseEnter:Ve=l.onRowMouseEnter,onRowMouseLeave:Ue=l.onRowMouseLeave,sortIcon:Pt=l.sortIcon,onSort:Dt=l.onSort,sortFunction:Ye=l.sortFunction,sortServer:Ae=l.sortServer,expandableRowsComponent:Ht=l.expandableRowsComponent,expandableRowsComponentProps:$t=l.expandableRowsComponentProps,expandableRowDisabled:Qe=l.expandableRowDisabled,expandableRowsHideExpander:Je=l.expandableRowsHideExpander,expandOnRowClicked:Ft=l.expandOnRowClicked,expandOnRowDoubleClicked:Tt=l.expandOnRowDoubleClicked,expandableRowExpanded:Ke=l.expandableRowExpanded,expandableInheritConditionalStyles:jt=l.expandableInheritConditionalStyles,defaultSortFieldId:It=l.defaultSortFieldId,defaultSortAsc:Lt=l.defaultSortAsc,clearSelectedRows:Xe=l.clearSelectedRows,conditionalRowStyles:Mt=l.conditionalRowStyles,theme:Ze=l.theme,customStyles:qe=l.customStyles,direction:ge=l.direction,onColumnOrderChange:At=l.onColumnOrderChange,className:_t}=e,{tableColumns:et,draggingColumnId:tt,handleDragStart:nt,handleDragEnter:ot,handleDragOver:at,handleDragLeave:rt,handleDragEnd:lt,defaultSortDirection:zt,defaultSortColumn:Nt}=wo(o,At,It,Lt),[{rowsPerPage:J,currentPage:_,selectedRows:_e,allSelected:it,selectedCount:st,selectedColumn:W,sortDirection:re,toggleOnSelectedRowsChange:Wt},ee]=n.exports.useReducer(sn,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Nt,toggleOnSelectedRowsChange:!1,sortDirection:zt,currentPage:N,rowsPerPage:k,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:dt=!1,persistSelectedOnPageChange:ye=!1}=U,ct=!(!v||!ye&&!dt),Bt=Q&&!G&&t.length>0,Gt=De||po,Vt=n.exports.useMemo(()=>((g={},m="default",I="default")=>{const z=ft[m]?m:I;return ho({table:{style:{color:(d=ft[z]).text.primary,backgroundColor:d.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:d.text.primary,backgroundColor:d.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:d.background.default,minHeight:"52px"}},head:{style:{color:d.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:d.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:d.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:d.context.background,fontSize:"18px",fontWeight:400,color:d.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:d.text.primary,backgroundColor:d.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:d.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:d.selected.text,backgroundColor:d.selected.default,borderBottomColor:d.background.default}},highlightOnHoverStyle:{color:d.highlightOnHover.text,backgroundColor:d.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:d.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:d.background.default},stripedStyle:{color:d.striped.text,backgroundColor:d.striped.default}},expanderRow:{style:{color:d.text.primary,backgroundColor:d.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:d.button.default,fill:d.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:d.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:d.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:d.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:d.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:d.button.default,fill:d.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:d.button.disabled,fill:d.button.disabled},"&:hover:not(:disabled)":{backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}}},g);var d})(qe,Ze),[qe,Ze]),Ut=n.exports.useMemo(()=>Object.assign({},ge!=="auto"&&{dir:ge}),[ge]),j=n.exports.useMemo(()=>{if(Ae)return t;if((W==null?void 0:W.sortFunction)&&typeof W.sortFunction=="function"){const g=W.sortFunction,m=re===X.ASC?g:(I,z)=>-1*g(I,z);return[...t].sort(m)}return function(g,m,I,z){return m?z&&typeof z=="function"?z(g.slice(0),m,I):g.slice(0).sort((d,ve)=>{let K,B;if(typeof m=="string"?(K=Ne(d,m),B=Ne(ve,m)):(K=m(d),B=m(ve)),I==="asc"){if(K<B)return-1;if(K>B)return 1}if(I==="desc"){if(K>B)return-1;if(K<B)return 1}return 0}):g}(t,W==null?void 0:W.selector,re,Ye)},[Ae,W,re,t,Ye]),pe=n.exports.useMemo(()=>{if(Q&&!v){const g=_*J,m=g-J;return j.slice(m,g)}return j},[_,Q,v,J,j]),Yt=n.exports.useCallback(g=>{ee(g)},[]),Qt=n.exports.useCallback(g=>{ee(g)},[]),Jt=n.exports.useCallback(g=>{ee(g)},[]),Kt=n.exports.useCallback((g,m)=>Be(g,m),[Be]),Xt=n.exports.useCallback((g,m)=>Ge(g,m),[Ge]),Zt=n.exports.useCallback((g,m)=>Ve(g,m),[Ve]),qt=n.exports.useCallback((g,m)=>Ue(g,m),[Ue]),le=n.exports.useCallback(g=>ee({type:"CHANGE_PAGE",page:g,paginationServer:v,visibleOnly:w,persistSelectedOnPageChange:ye}),[v,ye,w]),en=n.exports.useCallback(g=>{const m=ue(A||pe.length,g),I=ze(_,m);v||le(I),ee({type:"CHANGE_ROWS_PER_PAGE",page:I,rowsPerPage:g})},[_,le,v,A,pe.length]);if(Q&&!v&&j.length>0&&pe.length===0){const g=ue(j.length,J),m=ze(_,g);le(m)}te(()=>{O({allSelected:it,selectedCount:st,selectedRows:_e.slice(0)})},[Wt]),te(()=>{Dt(W,re,j.slice(0))},[W,re]),te(()=>{y(_,A||j.length)},[_]),te(()=>{M(J,_)},[J]),te(()=>{le(N)},[N,Y]),te(()=>{if(Q&&v&&A>0){const g=ue(A,J),m=ze(_,g);_!==m&&le(m)}},[A]),n.exports.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Xe})},[x,Xe]),n.exports.useEffect(()=>{if(!$)return;const g=j.filter(I=>$(I)),m=x?g.slice(0,1):g;ee({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:m,totalRows:j.length,mergeSelections:ct})},[t,$]);const tn=w?pe:j,nn=ye||x||C;return n.exports.createElement(on,{theme:Vt},!Te&&(!!a||!!r)&&n.exports.createElement(Yn,{title:a,actions:r,showMenu:!Le,selectedCount:st,direction:ge,contextActions:E,contextComponent:kt,contextMessage:Me}),q&&n.exports.createElement(Kn,{align:fe,wrapContent:Ce},Ie),n.exports.createElement(Zn,Object.assign({responsive:$e,fixedHeader:we,fixedHeaderScrollHeight:je,className:_t},Ut),n.exports.createElement(qn,null,G&&!V&&n.exports.createElement(mt,null,xe),n.exports.createElement(cn,{disabled:Z,className:"rdt_Table",role:"table"},!Fe&&(!!V||j.length>0&&!G)&&n.exports.createElement(pn,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:we},n.exports.createElement(un,{className:"rdt_TableHeadRow",role:"row",dense:f},p&&(nn?n.exports.createElement(de,{style:{flex:"0 0 48px"}}):n.exports.createElement(zn,{allSelected:it,selectedRows:_e,selectableRowsComponent:D,selectableRowsComponentProps:F,selectableRowDisabled:R,rowData:tn,keyField:i,mergeSelections:ct,onSelectAllRows:Qt})),Re&&!Je&&n.exports.createElement(eo,null),et.map(g=>n.exports.createElement(An,{key:g.id,column:g,selectedColumn:W,disabled:G||j.length===0,pagination:Q,paginationServer:v,persistSelectedOnSort:dt,selectableRowsVisibleOnly:w,sortDirection:re,sortIcon:Pt,sortServer:Ae,onSort:Yt,onDragStart:nt,onDragOver:at,onDragEnd:lt,onDragEnter:ot,onDragLeave:rt,draggingColumnId:tt})))),!j.length&&!G&&n.exports.createElement(to,null,he),G&&V&&n.exports.createElement(mt,null,xe),!G&&j.length>0&&n.exports.createElement(Xn,{className:"rdt_TableBody",role:"rowgroup"},pe.map((g,m)=>{const I=ie(g,i),z=function(B=""){return typeof B!="number"&&(!B||B.length===0)}(I)?m:I,d=Oe(g,_e,i),ve=!!(Re&&Ke&&Ke(g)),K=!!(Re&&Qe&&Qe(g));return n.exports.createElement($n,{id:z,key:z,keyField:i,"data-row-id":z,columns:et,row:g,rowCount:j.length,rowIndex:m,selectableRows:p,expandableRows:Re,expandableIcon:L,highlightOnHover:c,pointerOnHover:u,dense:f,expandOnRowClicked:Ft,expandOnRowDoubleClicked:Tt,expandableRowsComponent:Ht,expandableRowsComponentProps:$t,expandableRowsHideExpander:Je,defaultExpanderDisabled:K,defaultExpanded:ve,expandableInheritConditionalStyles:jt,conditionalRowStyles:Mt,selected:d,selectableRowsHighlight:P,selectableRowsComponent:D,selectableRowsComponentProps:F,selectableRowDisabled:R,selectableRowsSingle:x,striped:s,onRowExpandToggled:S,onRowClicked:Kt,onRowDoubleClicked:Xt,onRowMouseEnter:Zt,onRowMouseLeave:qt,onSelectedRow:Jt,draggingColumnId:tt,onDragStart:nt,onDragOver:at,onDragEnd:lt,onDragEnter:ot,onDragLeave:rt})}))))),Bt&&n.exports.createElement("div",null,n.exports.createElement(Gt,{onChangePage:le,onChangeRowsPerPage:en,rowCount:A||j.length,currentPage:_,rowsPerPage:J,direction:ge,paginationRowsPerPageOptions:ne,paginationIconLastPage:ce,paginationIconFirstPage:oe,paginationIconNext:ae,paginationIconPrevious:Pe,paginationComponentOptions:He})))});const Co=b(fo)(e=>({".rdt_Table":{backgroundColor:"var(--palette-greyBackground)"},".rdt_TableHeadRow":{display:`${e.hiddenHeadRow?"none":"auto"}`,backgroundColor:"var(--palette-whiteBackground)",fontWeight:700,fontSize:"1rem",lineHeight:"1.6rem",borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"4.8rem","& > div:not(div[data-column-id])":{display:"none"}},".rdt_TableRow":{borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"4.8rem",cursor:"auto","& > div:has(button[role='button'])":{display:"none"}},".rdt_ExpanderRow":{padding:"1.6rem 2.4rem",paddingRight:"auto",marginTop:"-0.1rem",marginBottom:"0.8rem",borderRadius:"0.8rem"}})),Ro=e=>{const{columns:t,data:o,paginationComponent:a,expandableRows:r}=e,{paginationPerPage:i,paginationRowsPerPageOptions:s}=e,{expandableRowsComponent:c,expandOnRowClicked:u,hiddenHeadRow:f}=e,{onRowClicked:p,expandableIcon:x,progressPending:P}=e,{expandableRowExpanded:C}=e;return gt(Co,{columns:t,data:o,pagination:!0,responsive:!0,paginationPerPage:i,paginationRowsPerPageOptions:s,paginationComponent:a,expandableRows:r,expandableRowsComponent:c,expandOnRowClicked:u,expandableRowExpanded:C,onRowClicked:p,expandableIcon:x,progressPending:P,hiddenHeadRow:f,progressComponent:gt(an,{isLoading:!0})})};Ro.defaultProps={};export{Ro as T};
