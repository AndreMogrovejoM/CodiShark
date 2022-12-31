import{s as u,a as ie,aF as F,r as n,q as x,aG as rn,C as ln,az as sn}from"./index.7494b9e3.js";import{u as dn}from"./i18n.hooks.710219a4.js";const cn=u.div`
  .NoDataComponent {
    &__component {
      padding: 1.6rem 0;
    }

    &__title {
      font-weight: 540;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
`,yt=e=>{const t=dn().global.table.TableEmpty;return ie(cn,{className:"NoDataComponent",children:ie("div",{className:"NoDataComponent__component",children:ie("h1",{className:"NoDataComponent__title",children:t.title})})})};yt.defaultProps={};var X;function se(e,t){return e[t]}function Be(e,t){return t.split(".").reduce((o,a)=>{const r=a.match(/[^\]\\[.]+/g);if(r&&r.length>1)for(let i=0;i<r.length;i++)return o[r[i]][r[i+1]];return o[a]},e)}function gn(e=[],t,o=0){return[...e.slice(0,o),t,...e.slice(o)]}function pn(e=[],t,o="id"){const a=e.slice(),r=se(t,o);return r?a.splice(a.findIndex(i=>se(i,o)===r),1):a.splice(a.findIndex(i=>i===t),1),a}function ut(e){return e.map((t,o)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=o+1),a})}function be(e,t){return Math.ceil(e/t)}function ze(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(X||(X={}));const $=()=>null;function Rt(e,t=[],o=[]){let a={},r=[...o];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(r=[...r,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{style:a,classNames:r.join(" ")}}function ke(e,t=[],o="id"){const a=se(e,o);return a?t.some(r=>se(r,o)===a):t.some(r=>r===e)}function Ee(e,t){return t?e.findIndex(o=>me(o.id,t)):-1}function me(e,t){return e==t}function un(e,t){const o=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:r,rowCount:i,mergeSelections:s}=t,c=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(s){const f=c?[...e.selectedRows,...r.filter(p=>!ke(p,e.selectedRows,a))]:e.selectedRows.filter(p=>!ke(p,r,a));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:f.length,selectedRows:f,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?i:0,selectedRows:c?r:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:r,isSelected:i,rowCount:s,singleSelect:c}=t;return c?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[r],toggleOnSelectedRowsChange:o}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:pn(e.selectedRows,r,a),toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:gn(e.selectedRows,r),toggleOnSelectedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:r,totalRows:i,mergeSelections:s}=t;if(s){const c=[...e.selectedRows,...r.filter(b=>!ke(b,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:o})}return Object.assign(Object.assign({},e),{selectedCount:r.length,allSelected:r.length===i,selectedRows:r,toggleOnSelectedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:r,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:r,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_PAGE":{const{page:a,paginationServer:r,visibleOnly:i,persistSelectedOnPageChange:s}=t,c=r&&s,b=r&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),c&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:r}=t;return Object.assign(Object.assign({},e),{currentPage:r,rowsPerPage:a})}}}const bn=F`
	pointer-events: none;
	opacity: 0.4;
`,mn=u.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&bn};
	${({theme:e})=>e.table.style};
`,hn=F`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,xn=u.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&hn};
	${({theme:e})=>e.head.style};
`,wn=u.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,vt=(e,...t)=>F`
		@media screen and (max-width: ${599}px) {
			${F(e,...t)}
		}
	`,fn=(e,...t)=>F`
		@media screen and (max-width: ${959}px) {
			${F(e,...t)}
		}
	`,Cn=(e,...t)=>F`
		@media screen and (max-width: ${1280}px) {
			${F(e,...t)}
		}
	`,yn=e=>(t,...o)=>F`
				@media screen and (max-width: ${e}px) {
					${F(t,...o)}
				}
			`,ce=u.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,St=u(ce)`
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
	${({hide:e})=>e&&e==="sm"&&vt`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&fn`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&Cn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&yn(e)`
    display: none;
  `};
`,Rn=F`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,vn=u(St).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&Rn};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var Sn=n.exports.memo(function({id:e,column:t,row:o,rowIndex:a,dataTag:r,isDragging:i,onDragStart:s,onDragOver:c,onDragEnd:b,onDragEnter:f,onDragLeave:p}){const{style:h,classNames:P}=Rt(o,t.conditionalCellStyles,["rdt_TableCell"]);return n.exports.createElement(vn,{id:e,"data-column-id":t.id,role:"cell",className:P,"data-tag":r,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:h,isDragging:i,onDragStart:s,onDragOver:c,onDragEnd:b,onDragEnter:f,onDragLeave:p},!t.cell&&n.exports.createElement("div",{"data-tag":r},function(C,w,H,y){if(!w)return null;if(typeof w!="string"&&typeof w!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return H&&typeof H=="function"?H(C,y):w&&typeof w=="function"?w(C,y):Be(C,w)}(o,t.selector,t.format,a)),t.cell&&t.cell(o,a,t,e))}),Et=n.exports.memo(function({name:e,component:t="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:r=!1,disabled:i=!1,onClick:s=$}){const c=t,b=c!=="input"?o.style:(p=>Object.assign(Object.assign({fontSize:"18px"},!p&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),f=n.exports.useMemo(()=>function(p,...h){let P;return Object.keys(p).map(C=>p[C]).forEach((C,w)=>{typeof C=="function"&&(P=Object.assign(Object.assign({},p),{[Object.keys(p)[w]]:C(...h)}))}),P||p}(o,a),[o,a]);return n.exports.createElement(c,Object.assign({type:"checkbox",ref:p=>{p&&(p.indeterminate=a)},style:b,onClick:i?$:s,name:e,"aria-label":e,checked:r,disabled:i},f,{onChange:$}))});const En=u(ce)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function On({name:e,keyField:t,row:o,rowCount:a,selected:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:c,selectableRowDisabled:b,onSelectedRow:f}){const p=!(!b||!b(o));return n.exports.createElement(En,{onClick:h=>h.stopPropagation(),className:"rdt_TableCell",noPadding:!0},n.exports.createElement(Et,{name:e,component:i,componentOptions:s,checked:r,"aria-checked":r,onClick:()=>{f({type:"SELECT_SINGLE_ROW",row:o,isSelected:r,keyField:t,rowCount:a,singleSelect:c})},disabled:p}))}const kn=u.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Pn({disabled:e=!1,expanded:t=!1,expandableIcon:o,id:a,row:r,onToggled:i}){const s=t?o.expanded:o.collapsed;return n.exports.createElement(kn,{"aria-disabled":e,onClick:()=>i&&i(r),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const Dn=u(ce)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function $n({row:e,expanded:t=!1,expandableIcon:o,id:a,onToggled:r,disabled:i=!1}){return n.exports.createElement(Dn,{onClick:s=>s.stopPropagation(),noPadding:!0},n.exports.createElement(Pn,{id:a,row:e,expanded:t,expandableIcon:o,disabled:i,onToggled:r}))}const Hn=u.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var Tn=n.exports.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:r}){const i=["rdt_ExpanderRow",...r.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return n.exports.createElement(Hn,{className:i,extendedRowStyle:a},n.exports.createElement(t,Object.assign({data:e},o)))}),Pe,Ge,bt;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(Pe||(Pe={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Ge||(Ge={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(bt||(bt={}));const Fn=F`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,jn=F`
	&:hover {
		cursor: pointer;
	}
`,In=u.div.attrs(e=>({style:e.style}))`
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
`;function _n({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:o=!1,defaultExpanderDisabled:a=!1,dense:r=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:c,expandableRowsComponentProps:b,expandableRowsHideExpander:f,expandOnRowClicked:p=!1,expandOnRowDoubleClicked:h=!1,highlightOnHover:P=!1,id:C,expandableInheritConditionalStyles:w,keyField:H,onRowClicked:y=$,onRowDoubleClicked:D=$,onRowMouseEnter:T=$,onRowMouseLeave:S=$,onRowExpandToggled:O=$,onSelectedRow:_=$,pointerOnHover:M=!1,row:R,rowCount:v,rowIndex:U,selectableRowDisabled:L=null,selectableRows:z=!1,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowsHighlight:ne=!1,selectableRowsSingle:ge=!1,selected:oe,striped:ae=!1,draggingColumnId:De,onDragStart:$e,onDragOver:He,onDragEnd:Te,onDragEnter:G,onDragLeave:xe}){const[V,we]=n.exports.useState(o);n.exports.useEffect(()=>{we(o)},[o]);const Z=n.exports.useCallback(()=>{we(!V),O(!V,R)},[V,O,R]),Fe=M||s&&(p||h),je=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(y(R,E),!a&&s&&p&&Z())},[a,p,s,Z,y,R]),fe=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(D(R,E),!a&&s&&h&&Z())},[a,h,s,Z,D,R]),Ie=n.exports.useCallback(E=>{T(R,E)},[T,R]),K=n.exports.useCallback(E=>{S(R,E)},[S,R]),q=se(R,H),{style:Ce,classNames:ye}=Rt(R,t,["rdt_TableRow"]),_e=ne&&oe,Me=w?Ce:{},Le=ae&&U%2==0;return n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(In,{id:`row-${C}`,role:"row",striped:Le,highlightOnHover:P,pointerOnHover:!a&&Fe,dense:r,onClick:je,onDoubleClick:fe,onMouseEnter:Ie,onMouseLeave:K,className:ye,selected:_e,style:Ce},z&&n.exports.createElement(On,{name:`select-row-${q}`,keyField:H,row:R,rowCount:v,selected:oe,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowDisabled:L,selectableRowsSingle:ge,onSelectedRow:_}),s&&!f&&n.exports.createElement($n,{id:q,expandableIcon:i,expanded:V,row:R,onToggled:Z,disabled:a}),e.map(E=>E.omit?null:n.exports.createElement(Sn,{id:`cell-${E.id}-${q}`,key:`cell-${E.id}-${q}`,dataTag:E.ignoreRowClick||E.button?null:"allowRowEvents",column:E,row:R,rowIndex:U,isDragging:me(De,E.id),onDragStart:$e,onDragOver:He,onDragEnd:Te,onDragEnter:G,onDragLeave:xe}))),s&&V&&n.exports.createElement(Tn,{key:`expander-${q}`,data:R,extendedRowStyle:Me,extendedClassNames:ye,ExpanderComponent:c,expanderComponentProps:b}))}const Mn=u.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Ln=({sortActive:e,sortDirection:t})=>x.createElement(Mn,{sortActive:e,sortDirection:t},"\u25B2"),An=u(St)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,Nn=F`
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
`,zn=u.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Nn};
`,Wn=u.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Bn=n.exports.memo(function({column:e,disabled:t,draggingColumnId:o,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:c,paginationServer:b,persistSelectedOnSort:f,selectableRowsVisibleOnly:p,onSort:h,onDragStart:P,onDragOver:C,onDragEnd:w,onDragEnter:H,onDragLeave:y}){n.exports.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[D,T]=n.exports.useState(!1),S=n.exports.useRef(null);if(n.exports.useEffect(()=>{S.current&&T(S.current.scrollWidth>S.current.clientWidth)},[D]),e.omit)return null;const O=()=>{if(!e.sortable&&!e.selector)return;let k=r;me(a.id,e.id)&&(k=r===X.ASC?X.DESC:X.ASC),h({type:"SORT_CHANGE",sortDirection:k,selectedColumn:e,clearSelectedOnSort:c&&b&&!f||s||p})},_=k=>n.exports.createElement(Ln,{sortActive:k,sortDirection:r}),M=()=>n.exports.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),R=!(!e.sortable||!me(a.id,e.id)),v=!e.sortable||t,U=e.sortable&&!i&&!e.right,L=e.sortable&&!i&&e.right,z=e.sortable&&i&&!e.right,Y=e.sortable&&i&&e.right;return n.exports.createElement(An,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:me(e.id,o),onDragStart:P,onDragOver:C,onDragEnd:w,onDragEnter:H,onDragLeave:y},e.name&&n.exports.createElement(zn,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:v?void 0:O,onKeyPress:v?void 0:k=>{k.key==="Enter"&&O()},sortActive:!v&&R,disabled:v},!v&&Y&&M(),!v&&L&&_(R),typeof e.name=="string"?n.exports.createElement(Wn,{title:D?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!v&&z&&M(),!v&&U&&_(R)))});const Gn=u(ce)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Vn({headCell:e=!0,rowData:t,keyField:o,allSelected:a,mergeSelections:r,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:c,selectableRowDisabled:b,onSelectAllRows:f}){const p=i.length>0&&!a,h=b?t.filter(w=>!b(w)):t,P=h.length===0,C=Math.min(t.length,h.length);return n.exports.createElement(Gn,{className:"rdt_TableCol",headCell:e,noPadding:!0},n.exports.createElement(Et,{name:"select-all-rows",component:s,componentOptions:c,onClick:()=>{f({type:"SELECT_ALL_ROWS",rows:h,rowCount:C,mergeSelections:r,keyField:o})},checked:a,indeterminate:p,disabled:P}))}function Ot(e=Pe.AUTO){const t=typeof window=="object",[o,a]=n.exports.useState(!1);return n.exports.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const r=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],c=i.dir==="rtl"||s.dir==="rtl";a(r&&c)}},[e,t]),o}const Un=u.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Yn=u.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,mt=u.div`
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
`;function Kn({contextMessage:e,contextActions:t,contextComponent:o,selectedCount:a,direction:r}){const i=Ot(r),s=a>0;return o?n.exports.createElement(mt,{visible:s},n.exports.cloneElement(o,{selectedCount:a})):n.exports.createElement(mt,{visible:s,rtl:i},n.exports.createElement(Un,null,((c,b,f)=>{if(b===0)return null;const p=b===1?c.singular:c.plural;return f?`${b} ${c.message||""} ${p}`:`${b} ${p} ${c.message||""}`})(e,a,i)),n.exports.createElement(Yn,null,t))}const Qn=u.div`
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
`,Xn=u.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Zn=({title:e,actions:t=null,contextMessage:o,contextActions:a,contextComponent:r,selectedCount:i,direction:s,showMenu:c=!0})=>n.exports.createElement(Qn,{className:"rdt_TableHeader",role:"heading","aria-level":1},n.exports.createElement(Jn,null,e),t&&n.exports.createElement(Xn,null,t),c&&n.exports.createElement(Kn,{contextMessage:o,contextActions:a,contextComponent:r,direction:s,selectedCount:i}));function kt(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}const qn={left:"flex-start",right:"flex-end",center:"center"},eo=u.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>qn[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,to=e=>{var{align:t="right",wrapContent:o=!0}=e,a=kt(e,["align","wrapContent"]);return n.exports.createElement(eo,Object.assign({align:t,wrapContent:o},a))},no=u.div`
	display: flex;
	flex-direction: column;
`,oo=u.div`
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
`,ht=u.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ao=u.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,ro=u(ce)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,lo=u.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,io=()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},x.createElement("path",{d:"M7 10l5 5 5-5z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),so=u.select`
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
`,co=u.div`
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
`,go=e=>{var{defaultValue:t,onChange:o}=e,a=kt(e,["defaultValue","onChange"]);return n.exports.createElement(co,null,n.exports.createElement(so,Object.assign({onChange:o,defaultValue:t},a)),n.exports.createElement(io,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return x.createElement("div",null,"To add an expander pass in a component instance via ",x.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),x.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),x.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:x.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:x.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Ge.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),x.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),x.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:Pe.AUTO,onChangePage:$,onChangeRowsPerPage:$,onRowClicked:$,onRowDoubleClicked:$,onRowMouseEnter:$,onRowMouseLeave:$,onRowExpandToggled:$,onSelectedRowsChange:$,onSort:$,onColumnOrderChange:$},po={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},uo=u.nav`
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
`,bo=u.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${vt`
    width: 100%;
    justify-content: space-around;
  `};
`,Pt=u.span`
	flex-shrink: 1;
	user-select: none;
`,mo=u(Pt)`
	margin: 0 24px;
`,ho=u(Pt)`
	margin: 0 4px;
`;var xo=n.exports.memo(function({rowsPerPage:e,rowCount:t,currentPage:o,direction:a=l.direction,paginationRowsPerPageOptions:r=l.paginationRowsPerPageOptions,paginationIconLastPage:i=l.paginationIconLastPage,paginationIconFirstPage:s=l.paginationIconFirstPage,paginationIconNext:c=l.paginationIconNext,paginationIconPrevious:b=l.paginationIconPrevious,paginationComponentOptions:f=l.paginationComponentOptions,onChangeRowsPerPage:p=l.onChangeRowsPerPage,onChangePage:h=l.onChangePage}){const P=(()=>{const k=typeof window=="object";function ne(){return{width:k?window.innerWidth:void 0,height:k?window.innerHeight:void 0}}const[ge,oe]=n.exports.useState(ne);return n.exports.useEffect(()=>{if(!k)return()=>null;function ae(){oe(ne())}return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]),ge})(),C=Ot(a),w=P.width&&P.width>599,H=be(t,e),y=o*e,D=y-e+1,T=o===1,S=o===H,O=Object.assign(Object.assign({},po),f),_=o===H?`${D}-${t} ${O.rangeSeparatorText} ${t}`:`${D}-${y} ${O.rangeSeparatorText} ${t}`,M=n.exports.useCallback(()=>h(o-1),[o,h]),R=n.exports.useCallback(()=>h(o+1),[o,h]),v=n.exports.useCallback(()=>h(1),[h]),U=n.exports.useCallback(()=>h(be(t,e)),[h,t,e]),L=n.exports.useCallback(k=>p(Number(k.target.value),o),[o,p]),z=r.map(k=>n.exports.createElement("option",{key:k,value:k},k));O.selectAllRowsItem&&z.push(n.exports.createElement("option",{key:-1,value:t},O.selectAllRowsItemText));const Y=n.exports.createElement(go,{onChange:L,defaultValue:e,"aria-label":O.rowsPerPageText},z);return n.exports.createElement(uo,{className:"rdt_Pagination"},!O.noRowsPerPage&&w&&n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(ho,null,O.rowsPerPageText),Y),w&&n.exports.createElement(mo,null,_),n.exports.createElement(bo,null,n.exports.createElement(Oe,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":T,onClick:v,disabled:T,isRTL:C},s),n.exports.createElement(Oe,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":T,onClick:M,disabled:T,isRTL:C},b),!w&&Y,n.exports.createElement(Oe,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:R,disabled:S,isRTL:C},c),n.exports.createElement(Oe,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:U,disabled:S,isRTL:C},i)))});const te=(e,t)=>{const o=n.exports.useRef(!0);n.exports.useEffect(()=>{o.current?o.current=!1:e()},t)};var wo=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var o=Object.prototype.toString.call(t);return o==="[object RegExp]"||o==="[object Date]"||function(a){return a.$$typeof===fo}(t)}(e)},fo=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function he(e,t){return t.clone!==!1&&t.isMergeableObject(e)?de((o=e,Array.isArray(o)?[]:{}),e,t):e;var o}function Co(e,t,o){return e.concat(t).map(function(a){return he(a,o)})}function xt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(o){return t.propertyIsEnumerable(o)}):[]}(e))}function wt(e,t){try{return t in e}catch{return!1}}function yo(e,t,o){var a={};return o.isMergeableObject(e)&&xt(e).forEach(function(r){a[r]=he(e[r],o)}),xt(t).forEach(function(r){(function(i,s){return wt(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,r)||(wt(e,r)&&o.isMergeableObject(t[r])?a[r]=function(i,s){if(!s.customMerge)return de;var c=s.customMerge(i);return typeof c=="function"?c:de}(r,o)(e[r],t[r],o):a[r]=he(t[r],o))}),a}function de(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||Co,o.isMergeableObject=o.isMergeableObject||wo,o.cloneUnlessOtherwiseSpecified=he;var a=Array.isArray(t);return a===Array.isArray(e)?a?o.arrayMerge(e,t,o):yo(e,t,o):he(t,o)}de.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(o,a){return de(o,a,t)},{})};var Ro=de;const ft={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Ct={default:ft,light:ft,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function vo(e,t,o,a){const[r,i]=n.exports.useState(()=>ut(e)),[s,c]=n.exports.useState(""),b=n.exports.useRef("");te(()=>{i(ut(e))},[e]);const f=n.exports.useCallback(y=>{var D,T,S;const{attributes:O}=y.target,_=(D=O.getNamedItem("data-column-id"))===null||D===void 0?void 0:D.value;_&&(b.current=((S=(T=r[Ee(r,_)])===null||T===void 0?void 0:T.id)===null||S===void 0?void 0:S.toString())||"",c(b.current))},[r]),p=n.exports.useCallback(y=>{var D;const{attributes:T}=y.target,S=(D=T.getNamedItem("data-column-id"))===null||D===void 0?void 0:D.value;if(S&&b.current&&S!==b.current){const O=Ee(r,b.current),_=Ee(r,S),M=[...r];M[O]=r[_],M[_]=r[O],i(M),t(M)}},[t,r]),h=n.exports.useCallback(y=>{y.preventDefault()},[]),P=n.exports.useCallback(y=>{y.preventDefault()},[]),C=n.exports.useCallback(y=>{y.preventDefault(),b.current="",c("")},[]),w=function(y=!1){return y?X.ASC:X.DESC}(a),H=n.exports.useMemo(()=>r[Ee(r,o==null?void 0:o.toString())]||{},[o,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:f,handleDragEnter:p,handleDragOver:h,handleDragLeave:P,handleDragEnd:C,defaultSortDirection:w,defaultSortColumn:H}}var So=n.exports.memo(function(e){const{data:t=l.data,columns:o=l.columns,title:a=l.title,actions:r=l.actions,keyField:i=l.keyField,striped:s=l.striped,highlightOnHover:c=l.highlightOnHover,pointerOnHover:b=l.pointerOnHover,dense:f=l.dense,selectableRows:p=l.selectableRows,selectableRowsSingle:h=l.selectableRowsSingle,selectableRowsHighlight:P=l.selectableRowsHighlight,selectableRowsNoSelectAll:C=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:w=l.selectableRowsVisibleOnly,selectableRowSelected:H=l.selectableRowSelected,selectableRowDisabled:y=l.selectableRowDisabled,selectableRowsComponent:D=l.selectableRowsComponent,selectableRowsComponentProps:T=l.selectableRowsComponentProps,onRowExpandToggled:S=l.onRowExpandToggled,onSelectedRowsChange:O=l.onSelectedRowsChange,expandableIcon:_=l.expandableIcon,onChangeRowsPerPage:M=l.onChangeRowsPerPage,onChangePage:R=l.onChangePage,paginationServer:v=l.paginationServer,paginationServerOptions:U=l.paginationServerOptions,paginationTotalRows:L=l.paginationTotalRows,paginationDefaultPage:z=l.paginationDefaultPage,paginationResetDefaultPage:Y=l.paginationResetDefaultPage,paginationPerPage:k=l.paginationPerPage,paginationRowsPerPageOptions:ne=l.paginationRowsPerPageOptions,paginationIconLastPage:ge=l.paginationIconLastPage,paginationIconFirstPage:oe=l.paginationIconFirstPage,paginationIconNext:ae=l.paginationIconNext,paginationIconPrevious:De=l.paginationIconPrevious,paginationComponent:$e=l.paginationComponent,paginationComponentOptions:He=l.paginationComponentOptions,responsive:Te=l.responsive,progressPending:G=l.progressPending,progressComponent:xe=l.progressComponent,persistTableHead:V=l.persistTableHead,noDataComponent:we=l.noDataComponent,disabled:Z=l.disabled,noTableHead:Fe=l.noTableHead,noHeader:je=l.noHeader,fixedHeader:fe=l.fixedHeader,fixedHeaderScrollHeight:Ie=l.fixedHeaderScrollHeight,pagination:K=l.pagination,subHeader:q=l.subHeader,subHeaderAlign:Ce=l.subHeaderAlign,subHeaderWrap:ye=l.subHeaderWrap,subHeaderComponent:_e=l.subHeaderComponent,noContextMenu:Me=l.noContextMenu,contextMessage:Le=l.contextMessage,contextActions:E=l.contextActions,contextComponent:Dt=l.contextComponent,expandableRows:Re=l.expandableRows,onRowClicked:Ve=l.onRowClicked,onRowDoubleClicked:Ue=l.onRowDoubleClicked,onRowMouseEnter:Ye=l.onRowMouseEnter,onRowMouseLeave:Ke=l.onRowMouseLeave,sortIcon:$t=l.sortIcon,onSort:Ht=l.onSort,sortFunction:Qe=l.sortFunction,sortServer:Ae=l.sortServer,expandableRowsComponent:Tt=l.expandableRowsComponent,expandableRowsComponentProps:Ft=l.expandableRowsComponentProps,expandableRowDisabled:Je=l.expandableRowDisabled,expandableRowsHideExpander:Xe=l.expandableRowsHideExpander,expandOnRowClicked:jt=l.expandOnRowClicked,expandOnRowDoubleClicked:It=l.expandOnRowDoubleClicked,expandableRowExpanded:Ze=l.expandableRowExpanded,expandableInheritConditionalStyles:_t=l.expandableInheritConditionalStyles,defaultSortFieldId:Mt=l.defaultSortFieldId,defaultSortAsc:Lt=l.defaultSortAsc,clearSelectedRows:qe=l.clearSelectedRows,conditionalRowStyles:At=l.conditionalRowStyles,theme:et=l.theme,customStyles:tt=l.customStyles,direction:pe=l.direction,onColumnOrderChange:Nt=l.onColumnOrderChange,className:zt}=e,{tableColumns:nt,draggingColumnId:ot,handleDragStart:at,handleDragEnter:rt,handleDragOver:lt,handleDragLeave:it,handleDragEnd:st,defaultSortDirection:Wt,defaultSortColumn:Bt}=vo(o,Nt,Mt,Lt),[{rowsPerPage:Q,currentPage:A,selectedRows:Ne,allSelected:dt,selectedCount:ct,selectedColumn:W,sortDirection:re,toggleOnSelectedRowsChange:Gt},ee]=n.exports.useReducer(un,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Bt,toggleOnSelectedRowsChange:!1,sortDirection:Wt,currentPage:z,rowsPerPage:k,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:gt=!1,persistSelectedOnPageChange:ve=!1}=U,pt=!(!v||!ve&&!gt),Vt=K&&!G&&t.length>0,Ut=$e||xo,Yt=n.exports.useMemo(()=>((g={},m="default",I="default")=>{const N=Ct[m]?m:I;return Ro({table:{style:{color:(d=Ct[N]).text.primary,backgroundColor:d.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:d.text.primary,backgroundColor:d.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:d.background.default,minHeight:"52px"}},head:{style:{color:d.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:d.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:d.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:d.context.background,fontSize:"18px",fontWeight:400,color:d.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:d.text.primary,backgroundColor:d.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:d.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:d.selected.text,backgroundColor:d.selected.default,borderBottomColor:d.background.default}},highlightOnHoverStyle:{color:d.highlightOnHover.text,backgroundColor:d.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:d.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:d.background.default},stripedStyle:{color:d.striped.text,backgroundColor:d.striped.default}},expanderRow:{style:{color:d.text.primary,backgroundColor:d.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:d.button.default,fill:d.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:d.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:d.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:d.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:d.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:d.button.default,fill:d.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:d.button.disabled,fill:d.button.disabled},"&:hover:not(:disabled)":{backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}}},g);var d})(tt,et),[tt,et]),Kt=n.exports.useMemo(()=>Object.assign({},pe!=="auto"&&{dir:pe}),[pe]),j=n.exports.useMemo(()=>{if(Ae)return t;if((W==null?void 0:W.sortFunction)&&typeof W.sortFunction=="function"){const g=W.sortFunction,m=re===X.ASC?g:(I,N)=>-1*g(I,N);return[...t].sort(m)}return function(g,m,I,N){return m?N&&typeof N=="function"?N(g.slice(0),m,I):g.slice(0).sort((d,Se)=>{let J,B;if(typeof m=="string"?(J=Be(d,m),B=Be(Se,m)):(J=m(d),B=m(Se)),I==="asc"){if(J<B)return-1;if(J>B)return 1}if(I==="desc"){if(J>B)return-1;if(J<B)return 1}return 0}):g}(t,W==null?void 0:W.selector,re,Qe)},[Ae,W,re,t,Qe]),ue=n.exports.useMemo(()=>{if(K&&!v){const g=A*Q,m=g-Q;return j.slice(m,g)}return j},[A,K,v,Q,j]),Qt=n.exports.useCallback(g=>{ee(g)},[]),Jt=n.exports.useCallback(g=>{ee(g)},[]),Xt=n.exports.useCallback(g=>{ee(g)},[]),Zt=n.exports.useCallback((g,m)=>Ve(g,m),[Ve]),qt=n.exports.useCallback((g,m)=>Ue(g,m),[Ue]),en=n.exports.useCallback((g,m)=>Ye(g,m),[Ye]),tn=n.exports.useCallback((g,m)=>Ke(g,m),[Ke]),le=n.exports.useCallback(g=>ee({type:"CHANGE_PAGE",page:g,paginationServer:v,visibleOnly:w,persistSelectedOnPageChange:ve}),[v,ve,w]),nn=n.exports.useCallback(g=>{const m=be(L||ue.length,g),I=ze(A,m);v||le(I),ee({type:"CHANGE_ROWS_PER_PAGE",page:I,rowsPerPage:g})},[A,le,v,L,ue.length]);if(K&&!v&&j.length>0&&ue.length===0){const g=be(j.length,Q),m=ze(A,g);le(m)}te(()=>{O({allSelected:dt,selectedCount:ct,selectedRows:Ne.slice(0)})},[Gt]),te(()=>{Ht(W,re,j.slice(0))},[W,re]),te(()=>{R(A,L||j.length)},[A]),te(()=>{M(Q,A)},[Q]),te(()=>{le(z)},[z,Y]),te(()=>{if(K&&v&&L>0){const g=be(L,Q),m=ze(A,g);A!==m&&le(m)}},[L]),n.exports.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:qe})},[h,qe]),n.exports.useEffect(()=>{if(!H)return;const g=j.filter(I=>H(I)),m=h?g.slice(0,1):g;ee({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:m,totalRows:j.length,mergeSelections:pt})},[t,H]);const on=w?ue:j,an=ve||h||C;return n.exports.createElement(rn,{theme:Yt},!je&&(!!a||!!r)&&n.exports.createElement(Zn,{title:a,actions:r,showMenu:!Me,selectedCount:ct,direction:pe,contextActions:E,contextComponent:Dt,contextMessage:Le}),q&&n.exports.createElement(to,{align:Ce,wrapContent:ye},_e),n.exports.createElement(oo,Object.assign({responsive:Te,fixedHeader:fe,fixedHeaderScrollHeight:Ie,className:zt},Kt),n.exports.createElement(ao,null,G&&!V&&n.exports.createElement(ht,null,xe),n.exports.createElement(mn,{disabled:Z,className:"rdt_Table",role:"table"},!Fe&&(!!V||j.length>0&&!G)&&n.exports.createElement(xn,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:fe},n.exports.createElement(wn,{className:"rdt_TableHeadRow",role:"row",dense:f},p&&(an?n.exports.createElement(ce,{style:{flex:"0 0 48px"}}):n.exports.createElement(Vn,{allSelected:dt,selectedRows:Ne,selectableRowsComponent:D,selectableRowsComponentProps:T,selectableRowDisabled:y,rowData:on,keyField:i,mergeSelections:pt,onSelectAllRows:Jt})),Re&&!Xe&&n.exports.createElement(ro,null),nt.map(g=>n.exports.createElement(Bn,{key:g.id,column:g,selectedColumn:W,disabled:G||j.length===0,pagination:K,paginationServer:v,persistSelectedOnSort:gt,selectableRowsVisibleOnly:w,sortDirection:re,sortIcon:$t,sortServer:Ae,onSort:Qt,onDragStart:at,onDragOver:lt,onDragEnd:st,onDragEnter:rt,onDragLeave:it,draggingColumnId:ot})))),!j.length&&!G&&n.exports.createElement(lo,null,we),G&&V&&n.exports.createElement(ht,null,xe),!G&&j.length>0&&n.exports.createElement(no,{className:"rdt_TableBody",role:"rowgroup"},ue.map((g,m)=>{const I=se(g,i),N=function(B=""){return typeof B!="number"&&(!B||B.length===0)}(I)?m:I,d=ke(g,Ne,i),Se=!!(Re&&Ze&&Ze(g)),J=!!(Re&&Je&&Je(g));return n.exports.createElement(_n,{id:N,key:N,keyField:i,"data-row-id":N,columns:nt,row:g,rowCount:j.length,rowIndex:m,selectableRows:p,expandableRows:Re,expandableIcon:_,highlightOnHover:c,pointerOnHover:b,dense:f,expandOnRowClicked:jt,expandOnRowDoubleClicked:It,expandableRowsComponent:Tt,expandableRowsComponentProps:Ft,expandableRowsHideExpander:Xe,defaultExpanderDisabled:J,defaultExpanded:Se,expandableInheritConditionalStyles:_t,conditionalRowStyles:At,selected:d,selectableRowsHighlight:P,selectableRowsComponent:D,selectableRowsComponentProps:T,selectableRowDisabled:y,selectableRowsSingle:h,striped:s,onRowExpandToggled:S,onRowClicked:Zt,onRowDoubleClicked:qt,onRowMouseEnter:en,onRowMouseLeave:tn,onSelectedRow:Xt,draggingColumnId:ot,onDragStart:at,onDragOver:lt,onDragEnd:st,onDragEnter:rt,onDragLeave:it})}))))),Vt&&n.exports.createElement("div",null,n.exports.createElement(Ut,{onChangePage:le,onChangeRowsPerPage:nn,rowCount:L||j.length,currentPage:A,rowsPerPage:Q,direction:pe,paginationRowsPerPageOptions:ne,paginationIconLastPage:ge,paginationIconFirstPage:oe,paginationIconNext:ae,paginationIconPrevious:De,paginationComponentOptions:He})))});const{BREAKPOINTS:We}=ln,Eo=u(So)(e=>({borderRadius:"0.8rem",".rdt_Table":{backgroundColor:"var(--palette-whiteBackground)",display:`${e.hiddenMobile?"none":"block"}`,[`@media screen and (min-width: ${We.mobile}px)`]:{display:"block",backgroundColor:"var(--palette-greyBackground)"}},".rdt_TableCol:focus":{outline:"none"},".rdt_TableCol_Sortable:focus":{outline:"none"},".rdt_TableHeadRow":{display:`${e.hiddenHeadRow?"none":"auto"}`,backgroundColor:"var(--palette-greyBackground)",fontWeight:700,fontSize:"1rem",lineHeight:"1.6rem",borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"4.8rem","& > div:not(div[data-column-id])":{display:"none"},[`@media screen and (min-width: ${We.mobile}px)`]:{backgroundColor:"var(--palette-whiteBackground)"}},".rdt_TableRow":{borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"4.8rem",cursor:"auto",backgroundColor:"var(--palette-greyBackground)","& > div:has(button[role='button'])":{display:"none"},[`@media screen and (min-width: ${We.mobile}px)`]:{backgroundColor:"var(--palette-whiteBackground)"}},".rdt_ExpanderRow":{padding:"1.6rem 2.4rem",paddingRight:"auto",marginTop:"-0.1rem",marginBottom:"0.8rem",borderRadius:"0.8rem"}})),Oo=e=>{const{columns:t,data:o,paginationComponent:a,expandableRows:r}=e,{paginationPerPage:i,paginationRowsPerPageOptions:s}=e,{expandableRowsComponent:c,expandOnRowClicked:b,hiddenHeadRow:f}=e,{onRowClicked:p,expandableIcon:h,progressPending:P}=e,{expandableRowExpanded:C,hiddenMobile:w}=e;return ie(Eo,{columns:t,data:o,pagination:!0,responsive:!0,paginationPerPage:i,paginationRowsPerPageOptions:s,paginationComponent:a,expandableRows:r,expandableRowsComponent:c,expandOnRowClicked:b,expandableRowExpanded:C,onRowClicked:p,expandableIcon:h,progressPending:P,hiddenHeadRow:f,progressComponent:ie(sn,{isLoading:!0}),noDataComponent:ie(yt,{}),hiddenMobile:w})};Oo.defaultProps={};export{Oo as T};
