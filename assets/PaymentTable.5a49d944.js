import{r as pn,i as un,a as bn,d as mn}from"./Layout.container.3c3c301f.js";import{e as St,o as hn}from"./i18n.hooks.84f8b483.js";import{s as p,a as T,j as We,ag as j,r as o,z as x,ah as wn}from"./index.f98bbdbf.js";import{p as xn,d as fn}from"./validations.utils.250ccb24.js";import{C as Cn}from"./constants.00022566.js";var Ve={},yn=un.exports;Object.defineProperty(Ve,"__esModule",{value:!0});var Et=Ve.default=void 0,vn=yn(pn()),Rn=bn,Sn=(0,vn.default)((0,Rn.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");Et=Ve.default=Sn;const En=p.div`
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
`,On=e=>{const t=St().global;return T(En,{className:"SearchInput ",children:We("div",{className:"SearchInput__container",children:[T(Et,{}),T("input",{className:"SearchInput__component--input",type:"text",placeholder:t.inputSearch})]})})};On.defaultProps={};var Xo=function(e,t,n,r){var a=typeof r<"u"?[r,e]:[e],l=new Blob(a,{type:n||"application/octet-stream"});if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(l,t);else{var s=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(l):window.webkitURL.createObjectURL(l),d=document.createElement("a");d.style.display="none",d.href=s,d.setAttribute("download",t),typeof d.download>"u"&&d.setAttribute("target","_blank"),document.body.appendChild(d),d.click(),setTimeout(function(){document.body.removeChild(d),window.URL.revokeObjectURL(s)},200)}},X;function se(e,t){return e[t]}function Ge(e,t){return t.split(".").reduce((n,r)=>{const a=r.match(/[^\]\\[.]+/g);if(a&&a.length>1)for(let l=0;l<a.length;l++)return n[a[l]][a[l+1]];return n[r]},e)}function Pn(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function kn(e=[],t,n="id"){const r=e.slice(),a=se(t,n);return a?r.splice(r.findIndex(l=>se(l,n)===a),1):r.splice(r.findIndex(l=>l===t),1),r}function mt(e){return e.map((t,n)=>{const r=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(r.id=n+1),r})}function be(e,t){return Math.ceil(e/t)}function Be(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(X||(X={}));const H=()=>null;function Ot(e,t=[],n=[]){let r={},a=[...n];return t.length&&t.forEach(l=>{if(!l.when||typeof l.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');l.when(e)&&(r=l.style||{},l.classNames&&(a=[...a,...l.classNames]),typeof l.style=="function"&&(r=l.style(e)||{}))}),{style:r,classNames:a.join(" ")}}function Pe(e,t=[],n="id"){const r=se(e,n);return r?t.some(a=>se(a,n)===r):t.some(a=>a===e)}function Ee(e,t){return t?e.findIndex(n=>me(n.id,t)):-1}function me(e,t){return e==t}function Dn(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:a,rowCount:l,mergeSelections:s}=t,d=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(s){const v=d?[...e.selectedRows,...a.filter(u=>!Pe(u,e.selectedRows,r))]:e.selectedRows.filter(u=>!Pe(u,a,r));return Object.assign(Object.assign({},e),{allSelected:d,selectedCount:v.length,selectedRows:v,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:d,selectedCount:d?l:0,selectedRows:d?a:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:a,isSelected:l,rowCount:s,singleSelect:d}=t;return d?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:kn(e.selectedRows,a,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:Pn(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:a,totalRows:l,mergeSelections:s}=t;if(s){const d=[...e.selectedRows,...a.filter(b=>!Pe(b,e.selectedRows,r))];return Object.assign(Object.assign({},e),{selectedCount:d.length,allSelected:!1,selectedRows:d,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:r,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:s}=t,d=a&&s,b=a&&!s||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:r}),d&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:a}=t;return Object.assign(Object.assign({},e),{currentPage:a,rowsPerPage:r})}}}const _n=j`
	pointer-events: none;
	opacity: 0.4;
`,$n=p.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&_n};
	${({theme:e})=>e.table.style};
`,Hn=j`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,Tn=p.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&Hn};
	${({theme:e})=>e.head.style};
`,jn=p.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Pt=(e,...t)=>j`
		@media screen and (max-width: ${599}px) {
			${j(e,...t)}
		}
	`,In=(e,...t)=>j`
		@media screen and (max-width: ${959}px) {
			${j(e,...t)}
		}
	`,Fn=(e,...t)=>j`
		@media screen and (max-width: ${1280}px) {
			${j(e,...t)}
		}
	`,An=e=>(t,...n)=>j`
				@media screen and (max-width: ${e}px) {
					${j(t,...n)}
				}
			`,ce=p.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,kt=p(ce)`
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
	${({hide:e})=>e&&e==="sm"&&Pt`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&In`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&Fn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&An(e)`
    display: none;
  `};
`,Ln=j`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,Mn=p(kt).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&Ln};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var Nn=o.exports.memo(function({id:e,column:t,row:n,rowIndex:r,dataTag:a,isDragging:l,onDragStart:s,onDragOver:d,onDragEnd:b,onDragEnter:v,onDragLeave:u}){const{style:m,classNames:O}=Ot(n,t.conditionalCellStyles,["rdt_TableCell"]);return o.exports.createElement(Mn,{id:e,"data-column-id":t.id,role:"cell",className:O,"data-tag":a,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:m,isDragging:l,onDragStart:s,onDragOver:d,onDragEnd:b,onDragEnter:v,onDragLeave:u},!t.cell&&o.exports.createElement("div",{"data-tag":a},function(y,f,_,C){if(!f)return null;if(typeof f!="string"&&typeof f!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return _&&typeof _=="function"?_(y,C):f&&typeof f=="function"?f(y,C):Ge(y,f)}(n,t.selector,t.format,r)),t.cell&&t.cell(n,r,t,e))}),Dt=o.exports.memo(function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:r=!1,checked:a=!1,disabled:l=!1,onClick:s=H}){const d=t,b=d!=="input"?n.style:(u=>Object.assign(Object.assign({fontSize:"18px"},!u&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(l),v=o.exports.useMemo(()=>function(u,...m){let O;return Object.keys(u).map(y=>u[y]).forEach((y,f)=>{typeof y=="function"&&(O=Object.assign(Object.assign({},u),{[Object.keys(u)[f]]:y(...m)}))}),O||u}(n,r),[n,r]);return o.exports.createElement(d,Object.assign({type:"checkbox",ref:u=>{u&&(u.indeterminate=r)},style:b,onClick:l?H:s,name:e,"aria-label":e,checked:a,disabled:l},v,{onChange:H}))});const zn=p(ce)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Bn({name:e,keyField:t,row:n,rowCount:r,selected:a,selectableRowsComponent:l,selectableRowsComponentProps:s,selectableRowsSingle:d,selectableRowDisabled:b,onSelectedRow:v}){const u=!(!b||!b(n));return o.exports.createElement(zn,{onClick:m=>m.stopPropagation(),className:"rdt_TableCell",noPadding:!0},o.exports.createElement(Dt,{name:e,component:l,componentOptions:s,checked:a,"aria-checked":a,onClick:()=>{v({type:"SELECT_SINGLE_ROW",row:n,isSelected:a,keyField:t,rowCount:r,singleSelect:d})},disabled:u}))}const Wn=p.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Gn({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:r,row:a,onToggled:l}){const s=t?n.expanded:n.collapsed;return o.exports.createElement(Wn,{"aria-disabled":e,onClick:()=>l&&l(a),"data-testid":`expander-button-${r}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const Un=p(ce)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Vn({row:e,expanded:t=!1,expandableIcon:n,id:r,onToggled:a,disabled:l=!1}){return o.exports.createElement(Un,{onClick:s=>s.stopPropagation(),noPadding:!0},o.exports.createElement(Gn,{id:r,row:e,expanded:t,expandableIcon:n,disabled:l,onToggled:a}))}const qn=p.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var Yn=o.exports.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:a}){const l=["rdt_ExpanderRow",...a.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return o.exports.createElement(qn,{className:l,extendedRowStyle:r},o.exports.createElement(t,Object.assign({data:e},n)))}),ke,Ue,ht;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(ke||(ke={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Ue||(Ue={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(ht||(ht={}));const Kn=j`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Qn=j`
	&:hover {
		cursor: pointer;
	}
`,Jn=p.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&Kn};
	${({pointerOnHover:e})=>e&&Qn};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function Xn({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:a=!1,expandableIcon:l,expandableRows:s=!1,expandableRowsComponent:d,expandableRowsComponentProps:b,expandableRowsHideExpander:v,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:m=!1,highlightOnHover:O=!1,id:y,expandableInheritConditionalStyles:f,keyField:_,onRowClicked:C=H,onRowDoubleClicked:P=H,onRowMouseEnter:k=H,onRowMouseLeave:R=H,onRowExpandToggled:h=H,onSelectedRow:I=H,pointerOnHover:L=!1,row:S,rowCount:E,rowIndex:q,selectableRowDisabled:M=null,selectableRows:B=!1,selectableRowsComponent:Y,selectableRowsComponentProps:$,selectableRowsHighlight:oe=!1,selectableRowsSingle:ge=!1,selected:ae,striped:re=!1,draggingColumnId:_e,onDragStart:$e,onDragOver:He,onDragEnd:Te,onDragEnter:U,onDragLeave:we}){const[V,xe]=o.exports.useState(n);o.exports.useEffect(()=>{xe(n)},[n]);const Z=o.exports.useCallback(()=>{xe(!V),h(!V,S)},[V,h,S]),je=L||s&&(u||m),Ie=o.exports.useCallback(D=>{D.target&&D.target.getAttribute("data-tag")==="allowRowEvents"&&(C(S,D),!r&&s&&u&&Z())},[r,u,s,Z,C,S]),fe=o.exports.useCallback(D=>{D.target&&D.target.getAttribute("data-tag")==="allowRowEvents"&&(P(S,D),!r&&s&&m&&Z())},[r,m,s,Z,P,S]),Fe=o.exports.useCallback(D=>{k(S,D)},[k,S]),K=o.exports.useCallback(D=>{R(S,D)},[R,S]),ee=se(S,_),{style:Ce,classNames:ye}=Ot(S,t,["rdt_TableRow"]),Ae=oe&&ae,Le=f?Ce:{},Me=re&&q%2==0;return o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(Jn,{id:`row-${y}`,role:"row",striped:Me,highlightOnHover:O,pointerOnHover:!r&&je,dense:a,onClick:Ie,onDoubleClick:fe,onMouseEnter:Fe,onMouseLeave:K,className:ye,selected:Ae,style:Ce},B&&o.exports.createElement(Bn,{name:`select-row-${ee}`,keyField:_,row:S,rowCount:E,selected:ae,selectableRowsComponent:Y,selectableRowsComponentProps:$,selectableRowDisabled:M,selectableRowsSingle:ge,onSelectedRow:I}),s&&!v&&o.exports.createElement(Vn,{id:ee,expandableIcon:l,expanded:V,row:S,onToggled:Z,disabled:r}),e.map(D=>D.omit?null:o.exports.createElement(Nn,{id:`cell-${D.id}-${ee}`,key:`cell-${D.id}-${ee}`,dataTag:D.ignoreRowClick||D.button?null:"allowRowEvents",column:D,row:S,rowIndex:q,isDragging:me(_e,D.id),onDragStart:$e,onDragOver:He,onDragEnd:Te,onDragEnter:U,onDragLeave:we}))),s&&V&&o.exports.createElement(Yn,{key:`expander-${ee}`,data:S,extendedRowStyle:Le,extendedClassNames:ye,ExpanderComponent:d,expanderComponentProps:b}))}const Zn=p.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,eo=({sortActive:e,sortDirection:t})=>x.createElement(Zn,{sortActive:e,sortDirection:t},"\u25B2"),to=p(kt)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,no=j`
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
`,oo=p.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&no};
`,ao=p.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var ro=o.exports.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:r={},sortDirection:a,sortIcon:l,sortServer:s,pagination:d,paginationServer:b,persistSelectedOnSort:v,selectableRowsVisibleOnly:u,onSort:m,onDragStart:O,onDragOver:y,onDragEnd:f,onDragEnter:_,onDragLeave:C}){o.exports.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[P,k]=o.exports.useState(!1),R=o.exports.useRef(null);if(o.exports.useEffect(()=>{R.current&&k(R.current.scrollWidth>R.current.clientWidth)},[P]),e.omit)return null;const h=()=>{if(!e.sortable&&!e.selector)return;let $=a;me(r.id,e.id)&&($=a===X.ASC?X.DESC:X.ASC),m({type:"SORT_CHANGE",sortDirection:$,selectedColumn:e,clearSelectedOnSort:d&&b&&!v||s||u})},I=$=>o.exports.createElement(eo,{sortActive:$,sortDirection:a}),L=()=>o.exports.createElement("span",{className:[a,"__rdt_custom_sort_icon__"].join(" ")},l),S=!(!e.sortable||!me(r.id,e.id)),E=!e.sortable||t,q=e.sortable&&!l&&!e.right,M=e.sortable&&!l&&e.right,B=e.sortable&&l&&!e.right,Y=e.sortable&&l&&e.right;return o.exports.createElement(to,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:me(e.id,n),onDragStart:O,onDragOver:y,onDragEnd:f,onDragEnter:_,onDragLeave:C},e.name&&o.exports.createElement(oo,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:E?void 0:h,onKeyPress:E?void 0:$=>{$.key==="Enter"&&h()},sortActive:!E&&S,disabled:E},!E&&Y&&L(),!E&&M&&I(S),typeof e.name=="string"?o.exports.createElement(ao,{title:P?e.name:void 0,ref:R,"data-column-id":e.id},e.name):e.name,!E&&B&&L(),!E&&q&&I(S)))});const lo=p(ce)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function io({headCell:e=!0,rowData:t,keyField:n,allSelected:r,mergeSelections:a,selectedRows:l,selectableRowsComponent:s,selectableRowsComponentProps:d,selectableRowDisabled:b,onSelectAllRows:v}){const u=l.length>0&&!r,m=b?t.filter(f=>!b(f)):t,O=m.length===0,y=Math.min(t.length,m.length);return o.exports.createElement(lo,{className:"rdt_TableCol",headCell:e,noPadding:!0},o.exports.createElement(Dt,{name:"select-all-rows",component:s,componentOptions:d,onClick:()=>{v({type:"SELECT_ALL_ROWS",rows:m,rowCount:y,mergeSelections:a,keyField:n})},checked:r,indeterminate:u,disabled:O}))}function _t(e=ke.AUTO){const t=typeof window=="object",[n,r]=o.exports.useState(!1);return o.exports.useEffect(()=>{if(t)if(e!=="auto")r(e==="rtl");else{const a=!(!window.document||!window.document.createElement),l=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],d=l.dir==="rtl"||s.dir==="rtl";r(a&&d)}},[e,t]),n}const so=p.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,co=p.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,wt=p.div`
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
`;function go({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:r,direction:a}){const l=_t(a),s=r>0;return n?o.exports.createElement(wt,{visible:s},o.exports.cloneElement(n,{selectedCount:r})):o.exports.createElement(wt,{visible:s,rtl:l},o.exports.createElement(so,null,((d,b,v)=>{if(b===0)return null;const u=b===1?d.singular:d.plural;return v?`${b} ${d.message||""} ${u}`:`${b} ${u} ${d.message||""}`})(e,r,l)),o.exports.createElement(co,null,t))}const po=p.div`
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
`,uo=p.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,bo=p.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,mo=({title:e,actions:t=null,contextMessage:n,contextActions:r,contextComponent:a,selectedCount:l,direction:s,showMenu:d=!0})=>o.exports.createElement(po,{className:"rdt_TableHeader",role:"heading","aria-level":1},o.exports.createElement(uo,null,e),t&&o.exports.createElement(bo,null,t),d&&o.exports.createElement(go,{contextMessage:n,contextActions:r,contextComponent:a,direction:s,selectedCount:l}));function $t(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}const ho={left:"flex-start",right:"flex-end",center:"center"},wo=p.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>ho[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,xo=e=>{var{align:t="right",wrapContent:n=!0}=e,r=$t(e,["align","wrapContent"]);return o.exports.createElement(wo,Object.assign({align:t,wrapContent:n},r))},fo=p.div`
	display: flex;
	flex-direction: column;
`,Co=p.div`
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
`,xt=p.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,yo=p.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,vo=p(ce)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Ro=p.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,So=()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},x.createElement("path",{d:"M7 10l5 5 5-5z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Eo=p.select`
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
`,Oo=p.div`
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
`,Po=e=>{var{defaultValue:t,onChange:n}=e,r=$t(e,["defaultValue","onChange"]);return o.exports.createElement(Oo,null,o.exports.createElement(Eo,Object.assign({onChange:n,defaultValue:t},r)),o.exports.createElement(So,null))},i={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return x.createElement("div",null,"To add an expander pass in a component instance via ",x.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),x.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),x.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:x.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:x.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Ue.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),x.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),x.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:ke.AUTO,onChangePage:H,onChangeRowsPerPage:H,onRowClicked:H,onRowDoubleClicked:H,onRowMouseEnter:H,onRowMouseLeave:H,onRowExpandToggled:H,onSelectedRowsChange:H,onSort:H,onColumnOrderChange:H},ko={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Do=p.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Oe=p.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,_o=p.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Pt`
    width: 100%;
    justify-content: space-around;
  `};
`,Ht=p.span`
	flex-shrink: 1;
	user-select: none;
`,$o=p(Ht)`
	margin: 0 24px;
`,Ho=p(Ht)`
	margin: 0 4px;
`;var To=o.exports.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:r=i.direction,paginationRowsPerPageOptions:a=i.paginationRowsPerPageOptions,paginationIconLastPage:l=i.paginationIconLastPage,paginationIconFirstPage:s=i.paginationIconFirstPage,paginationIconNext:d=i.paginationIconNext,paginationIconPrevious:b=i.paginationIconPrevious,paginationComponentOptions:v=i.paginationComponentOptions,onChangeRowsPerPage:u=i.onChangeRowsPerPage,onChangePage:m=i.onChangePage}){const O=(()=>{const $=typeof window=="object";function oe(){return{width:$?window.innerWidth:void 0,height:$?window.innerHeight:void 0}}const[ge,ae]=o.exports.useState(oe);return o.exports.useEffect(()=>{if(!$)return()=>null;function re(){ae(oe())}return window.addEventListener("resize",re),()=>window.removeEventListener("resize",re)},[]),ge})(),y=_t(r),f=O.width&&O.width>599,_=be(t,e),C=n*e,P=C-e+1,k=n===1,R=n===_,h=Object.assign(Object.assign({},ko),v),I=n===_?`${P}-${t} ${h.rangeSeparatorText} ${t}`:`${P}-${C} ${h.rangeSeparatorText} ${t}`,L=o.exports.useCallback(()=>m(n-1),[n,m]),S=o.exports.useCallback(()=>m(n+1),[n,m]),E=o.exports.useCallback(()=>m(1),[m]),q=o.exports.useCallback(()=>m(be(t,e)),[m,t,e]),M=o.exports.useCallback($=>u(Number($.target.value),n),[n,u]),B=a.map($=>o.exports.createElement("option",{key:$,value:$},$));h.selectAllRowsItem&&B.push(o.exports.createElement("option",{key:-1,value:t},h.selectAllRowsItemText));const Y=o.exports.createElement(Po,{onChange:M,defaultValue:e,"aria-label":h.rowsPerPageText},B);return o.exports.createElement(Do,{className:"rdt_Pagination"},!h.noRowsPerPage&&f&&o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(Ho,null,h.rowsPerPageText),Y),f&&o.exports.createElement($o,null,I),o.exports.createElement(_o,null,o.exports.createElement(Oe,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":k,onClick:E,disabled:k,isRTL:y},s),o.exports.createElement(Oe,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":k,onClick:L,disabled:k,isRTL:y},b),!f&&Y,o.exports.createElement(Oe,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":R,onClick:S,disabled:R,isRTL:y},d),o.exports.createElement(Oe,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":R,onClick:q,disabled:R,isRTL:y},l)))});const ne=(e,t)=>{const n=o.exports.useRef(!0);o.exports.useEffect(()=>{n.current?n.current=!1:e()},t)};var jo=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===Io}(t)}(e)},Io=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function he(e,t){return t.clone!==!1&&t.isMergeableObject(e)?de((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Fo(e,t,n){return e.concat(t).map(function(r){return he(r,n)})}function ft(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return t.propertyIsEnumerable(n)}):[]}(e))}function Ct(e,t){try{return t in e}catch{return!1}}function Ao(e,t,n){var r={};return n.isMergeableObject(e)&&ft(e).forEach(function(a){r[a]=he(e[a],n)}),ft(t).forEach(function(a){(function(l,s){return Ct(l,s)&&!(Object.hasOwnProperty.call(l,s)&&Object.propertyIsEnumerable.call(l,s))})(e,a)||(Ct(e,a)&&n.isMergeableObject(t[a])?r[a]=function(l,s){if(!s.customMerge)return de;var d=s.customMerge(l);return typeof d=="function"?d:de}(a,n)(e[a],t[a],n):r[a]=he(t[a],n))}),r}function de(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Fo,n.isMergeableObject=n.isMergeableObject||jo,n.cloneUnlessOtherwiseSpecified=he;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):Ao(e,t,n):he(t,n)}de.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,r){return de(n,r,t)},{})};var Lo=de;const yt={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},vt={default:yt,light:yt,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Mo(e,t,n,r){const[a,l]=o.exports.useState(()=>mt(e)),[s,d]=o.exports.useState(""),b=o.exports.useRef("");ne(()=>{l(mt(e))},[e]);const v=o.exports.useCallback(C=>{var P,k,R;const{attributes:h}=C.target,I=(P=h.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;I&&(b.current=((R=(k=a[Ee(a,I)])===null||k===void 0?void 0:k.id)===null||R===void 0?void 0:R.toString())||"",d(b.current))},[a]),u=o.exports.useCallback(C=>{var P;const{attributes:k}=C.target,R=(P=k.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;if(R&&b.current&&R!==b.current){const h=Ee(a,b.current),I=Ee(a,R),L=[...a];L[h]=a[I],L[I]=a[h],l(L),t(L)}},[t,a]),m=o.exports.useCallback(C=>{C.preventDefault()},[]),O=o.exports.useCallback(C=>{C.preventDefault()},[]),y=o.exports.useCallback(C=>{C.preventDefault(),b.current="",d("")},[]),f=function(C=!1){return C?X.ASC:X.DESC}(r),_=o.exports.useMemo(()=>a[Ee(a,n==null?void 0:n.toString())]||{},[n,a]);return{tableColumns:a,draggingColumnId:s,handleDragStart:v,handleDragEnter:u,handleDragOver:m,handleDragLeave:O,handleDragEnd:y,defaultSortDirection:f,defaultSortColumn:_}}var No=o.exports.memo(function(e){const{data:t=i.data,columns:n=i.columns,title:r=i.title,actions:a=i.actions,keyField:l=i.keyField,striped:s=i.striped,highlightOnHover:d=i.highlightOnHover,pointerOnHover:b=i.pointerOnHover,dense:v=i.dense,selectableRows:u=i.selectableRows,selectableRowsSingle:m=i.selectableRowsSingle,selectableRowsHighlight:O=i.selectableRowsHighlight,selectableRowsNoSelectAll:y=i.selectableRowsNoSelectAll,selectableRowsVisibleOnly:f=i.selectableRowsVisibleOnly,selectableRowSelected:_=i.selectableRowSelected,selectableRowDisabled:C=i.selectableRowDisabled,selectableRowsComponent:P=i.selectableRowsComponent,selectableRowsComponentProps:k=i.selectableRowsComponentProps,onRowExpandToggled:R=i.onRowExpandToggled,onSelectedRowsChange:h=i.onSelectedRowsChange,expandableIcon:I=i.expandableIcon,onChangeRowsPerPage:L=i.onChangeRowsPerPage,onChangePage:S=i.onChangePage,paginationServer:E=i.paginationServer,paginationServerOptions:q=i.paginationServerOptions,paginationTotalRows:M=i.paginationTotalRows,paginationDefaultPage:B=i.paginationDefaultPage,paginationResetDefaultPage:Y=i.paginationResetDefaultPage,paginationPerPage:$=i.paginationPerPage,paginationRowsPerPageOptions:oe=i.paginationRowsPerPageOptions,paginationIconLastPage:ge=i.paginationIconLastPage,paginationIconFirstPage:ae=i.paginationIconFirstPage,paginationIconNext:re=i.paginationIconNext,paginationIconPrevious:_e=i.paginationIconPrevious,paginationComponent:$e=i.paginationComponent,paginationComponentOptions:He=i.paginationComponentOptions,responsive:Te=i.responsive,progressPending:U=i.progressPending,progressComponent:we=i.progressComponent,persistTableHead:V=i.persistTableHead,noDataComponent:xe=i.noDataComponent,disabled:Z=i.disabled,noTableHead:je=i.noTableHead,noHeader:Ie=i.noHeader,fixedHeader:fe=i.fixedHeader,fixedHeaderScrollHeight:Fe=i.fixedHeaderScrollHeight,pagination:K=i.pagination,subHeader:ee=i.subHeader,subHeaderAlign:Ce=i.subHeaderAlign,subHeaderWrap:ye=i.subHeaderWrap,subHeaderComponent:Ae=i.subHeaderComponent,noContextMenu:Le=i.noContextMenu,contextMessage:Me=i.contextMessage,contextActions:D=i.contextActions,contextComponent:It=i.contextComponent,expandableRows:ve=i.expandableRows,onRowClicked:qe=i.onRowClicked,onRowDoubleClicked:Ye=i.onRowDoubleClicked,onRowMouseEnter:Ke=i.onRowMouseEnter,onRowMouseLeave:Qe=i.onRowMouseLeave,sortIcon:Ft=i.sortIcon,onSort:At=i.onSort,sortFunction:Je=i.sortFunction,sortServer:Ne=i.sortServer,expandableRowsComponent:Lt=i.expandableRowsComponent,expandableRowsComponentProps:Mt=i.expandableRowsComponentProps,expandableRowDisabled:Xe=i.expandableRowDisabled,expandableRowsHideExpander:Ze=i.expandableRowsHideExpander,expandOnRowClicked:Nt=i.expandOnRowClicked,expandOnRowDoubleClicked:zt=i.expandOnRowDoubleClicked,expandableRowExpanded:et=i.expandableRowExpanded,expandableInheritConditionalStyles:Bt=i.expandableInheritConditionalStyles,defaultSortFieldId:Wt=i.defaultSortFieldId,defaultSortAsc:Gt=i.defaultSortAsc,clearSelectedRows:tt=i.clearSelectedRows,conditionalRowStyles:Ut=i.conditionalRowStyles,theme:nt=i.theme,customStyles:ot=i.customStyles,direction:pe=i.direction,onColumnOrderChange:Vt=i.onColumnOrderChange,className:qt}=e,{tableColumns:at,draggingColumnId:rt,handleDragStart:lt,handleDragEnter:it,handleDragOver:st,handleDragLeave:dt,handleDragEnd:ct,defaultSortDirection:Yt,defaultSortColumn:Kt}=Mo(n,Vt,Wt,Gt),[{rowsPerPage:Q,currentPage:N,selectedRows:ze,allSelected:gt,selectedCount:pt,selectedColumn:W,sortDirection:le,toggleOnSelectedRowsChange:Qt},te]=o.exports.useReducer(Dn,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Kt,toggleOnSelectedRowsChange:!1,sortDirection:Yt,currentPage:B,rowsPerPage:$,selectedRowsFlag:!1,contextMessage:i.contextMessage}),{persistSelectedOnSort:ut=!1,persistSelectedOnPageChange:Re=!1}=q,bt=!(!E||!Re&&!ut),Jt=K&&!U&&t.length>0,Xt=$e||To,Zt=o.exports.useMemo(()=>((g={},w="default",A="default")=>{const z=vt[w]?w:A;return Lo({table:{style:{color:(c=vt[z]).text.primary,backgroundColor:c.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:c.text.primary,backgroundColor:c.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:c.background.default,minHeight:"52px"}},head:{style:{color:c.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:c.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:c.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:c.context.background,fontSize:"18px",fontWeight:400,color:c.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:c.text.primary,backgroundColor:c.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:c.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:c.selected.text,backgroundColor:c.selected.default,borderBottomColor:c.background.default}},highlightOnHoverStyle:{color:c.highlightOnHover.text,backgroundColor:c.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:c.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:c.background.default},stripedStyle:{color:c.striped.text,backgroundColor:c.striped.default}},expanderRow:{style:{color:c.text.primary,backgroundColor:c.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:c.button.default,fill:c.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:c.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:c.button.hover},"&:focus":{outline:"none",backgroundColor:c.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:c.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:c.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:c.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:c.button.default,fill:c.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:c.button.disabled,fill:c.button.disabled},"&:hover:not(:disabled)":{backgroundColor:c.button.hover},"&:focus":{outline:"none",backgroundColor:c.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:c.text.primary,backgroundColor:c.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:c.text.primary,backgroundColor:c.background.default}}},g);var c})(ot,nt),[ot,nt]),en=o.exports.useMemo(()=>Object.assign({},pe!=="auto"&&{dir:pe}),[pe]),F=o.exports.useMemo(()=>{if(Ne)return t;if((W==null?void 0:W.sortFunction)&&typeof W.sortFunction=="function"){const g=W.sortFunction,w=le===X.ASC?g:(A,z)=>-1*g(A,z);return[...t].sort(w)}return function(g,w,A,z){return w?z&&typeof z=="function"?z(g.slice(0),w,A):g.slice(0).sort((c,Se)=>{let J,G;if(typeof w=="string"?(J=Ge(c,w),G=Ge(Se,w)):(J=w(c),G=w(Se)),A==="asc"){if(J<G)return-1;if(J>G)return 1}if(A==="desc"){if(J>G)return-1;if(J<G)return 1}return 0}):g}(t,W==null?void 0:W.selector,le,Je)},[Ne,W,le,t,Je]),ue=o.exports.useMemo(()=>{if(K&&!E){const g=N*Q,w=g-Q;return F.slice(w,g)}return F},[N,K,E,Q,F]),tn=o.exports.useCallback(g=>{te(g)},[]),nn=o.exports.useCallback(g=>{te(g)},[]),on=o.exports.useCallback(g=>{te(g)},[]),an=o.exports.useCallback((g,w)=>qe(g,w),[qe]),rn=o.exports.useCallback((g,w)=>Ye(g,w),[Ye]),ln=o.exports.useCallback((g,w)=>Ke(g,w),[Ke]),sn=o.exports.useCallback((g,w)=>Qe(g,w),[Qe]),ie=o.exports.useCallback(g=>te({type:"CHANGE_PAGE",page:g,paginationServer:E,visibleOnly:f,persistSelectedOnPageChange:Re}),[E,Re,f]),dn=o.exports.useCallback(g=>{const w=be(M||ue.length,g),A=Be(N,w);E||ie(A),te({type:"CHANGE_ROWS_PER_PAGE",page:A,rowsPerPage:g})},[N,ie,E,M,ue.length]);if(K&&!E&&F.length>0&&ue.length===0){const g=be(F.length,Q),w=Be(N,g);ie(w)}ne(()=>{h({allSelected:gt,selectedCount:pt,selectedRows:ze.slice(0)})},[Qt]),ne(()=>{At(W,le,F.slice(0))},[W,le]),ne(()=>{S(N,M||F.length)},[N]),ne(()=>{L(Q,N)},[Q]),ne(()=>{ie(B)},[B,Y]),ne(()=>{if(K&&E&&M>0){const g=be(M,Q),w=Be(N,g);N!==w&&ie(w)}},[M]),o.exports.useEffect(()=>{te({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:tt})},[m,tt]),o.exports.useEffect(()=>{if(!_)return;const g=F.filter(A=>_(A)),w=m?g.slice(0,1):g;te({type:"SELECT_MULTIPLE_ROWS",keyField:l,selectedRows:w,totalRows:F.length,mergeSelections:bt})},[t,_]);const cn=f?ue:F,gn=Re||m||y;return o.exports.createElement(wn,{theme:Zt},!Ie&&(!!r||!!a)&&o.exports.createElement(mo,{title:r,actions:a,showMenu:!Le,selectedCount:pt,direction:pe,contextActions:D,contextComponent:It,contextMessage:Me}),ee&&o.exports.createElement(xo,{align:Ce,wrapContent:ye},Ae),o.exports.createElement(Co,Object.assign({responsive:Te,fixedHeader:fe,fixedHeaderScrollHeight:Fe,className:qt},en),o.exports.createElement(yo,null,U&&!V&&o.exports.createElement(xt,null,we),o.exports.createElement($n,{disabled:Z,className:"rdt_Table",role:"table"},!je&&(!!V||F.length>0&&!U)&&o.exports.createElement(Tn,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:fe},o.exports.createElement(jn,{className:"rdt_TableHeadRow",role:"row",dense:v},u&&(gn?o.exports.createElement(ce,{style:{flex:"0 0 48px"}}):o.exports.createElement(io,{allSelected:gt,selectedRows:ze,selectableRowsComponent:P,selectableRowsComponentProps:k,selectableRowDisabled:C,rowData:cn,keyField:l,mergeSelections:bt,onSelectAllRows:nn})),ve&&!Ze&&o.exports.createElement(vo,null),at.map(g=>o.exports.createElement(ro,{key:g.id,column:g,selectedColumn:W,disabled:U||F.length===0,pagination:K,paginationServer:E,persistSelectedOnSort:ut,selectableRowsVisibleOnly:f,sortDirection:le,sortIcon:Ft,sortServer:Ne,onSort:tn,onDragStart:lt,onDragOver:st,onDragEnd:ct,onDragEnter:it,onDragLeave:dt,draggingColumnId:rt})))),!F.length&&!U&&o.exports.createElement(Ro,null,xe),U&&V&&o.exports.createElement(xt,null,we),!U&&F.length>0&&o.exports.createElement(fo,{className:"rdt_TableBody",role:"rowgroup"},ue.map((g,w)=>{const A=se(g,l),z=function(G=""){return typeof G!="number"&&(!G||G.length===0)}(A)?w:A,c=Pe(g,ze,l),Se=!!(ve&&et&&et(g)),J=!!(ve&&Xe&&Xe(g));return o.exports.createElement(Xn,{id:z,key:z,keyField:l,"data-row-id":z,columns:at,row:g,rowCount:F.length,rowIndex:w,selectableRows:u,expandableRows:ve,expandableIcon:I,highlightOnHover:d,pointerOnHover:b,dense:v,expandOnRowClicked:Nt,expandOnRowDoubleClicked:zt,expandableRowsComponent:Lt,expandableRowsComponentProps:Mt,expandableRowsHideExpander:Ze,defaultExpanderDisabled:J,defaultExpanded:Se,expandableInheritConditionalStyles:Bt,conditionalRowStyles:Ut,selected:c,selectableRowsHighlight:O,selectableRowsComponent:P,selectableRowsComponentProps:k,selectableRowDisabled:C,selectableRowsSingle:m,striped:s,onRowExpandToggled:R,onRowClicked:an,onRowDoubleClicked:rn,onRowMouseEnter:ln,onRowMouseLeave:sn,onSelectedRow:on,draggingColumnId:rt,onDragStart:lt,onDragOver:st,onDragEnd:ct,onDragEnter:it,onDragLeave:dt})}))))),Jt&&o.exports.createElement("div",null,o.exports.createElement(Xt,{onChangePage:ie,onChangeRowsPerPage:dn,rowCount:M||F.length,currentPage:N,rowsPerPage:Q,direction:pe,paginationRowsPerPageOptions:oe,paginationIconLastPage:ge,paginationIconFirstPage:ae,paginationIconNext:re,paginationIconPrevious:_e,paginationComponentOptions:He})))});const zo=p(No)(e=>({".rdt_Table":{backgroundColor:"var(--palette-greyBackground)"},".rdt_TableHeadRow":{backgroundColor:"var(--palette-whiteBackground)",fontWeight:700,fontSize:"1rem",lineHeight:"1.6rem",borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"49px"},".rdt_TableRow":{borderRadius:"0.8rem",borderBottom:"none",marginBottom:"0.4rem",height:"49px"}})),Tt=e=>{const{columns:t,data:n,paginationComponent:r}=e,{paginationPerPage:a,paginationRowsPerPageOptions:l}=e;return T(zo,{columns:t,data:n,pagination:!0,responsive:!0,paginationPerPage:a,paginationRowsPerPageOptions:l,paginationComponent:r})};Tt.defaultProps={};const De=p.div`
  .PaymentTable {
    &__container {
      &--button {
        background-color: var(--palette-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        color: var(--palette-white);
        cursor: pointer;

        &-icon {
          font-size: 1.6rem;
        }
      }

      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-whiteBackgroundTwo);

        &-bold {
          font-weight: 600;
          color: var(--palette-blue);
        }
      }

      &--chip {
        border-radius: 0.8rem;

        &-green {
          background: var(--palette-greenWeakBackground);
        }

        &-yellow {
          background: var(--palette-yellowWeakBackground);
        }
      }
    }

    &__text {
      &--chip {
        font-weight: 600;
        font-size: 0.8rem;
        line-height: 1.2rem;
        padding: 0.4rem 1.2rem;
      }
    }
  }
`;function Bo(e,t){return Math.ceil(e/t)}function Wo(e){return Array.from({length:e},(t,n)=>n+1)}const Zo=e=>{const{content:t,bold:n=!1}=e;return T(De,{className:(a=>`PaymentTable__container--field ${a?"PaymentTable__container--field-bold":""}`)(n),children:t})},ea=e=>{const{conditional:t}=e,n=hn().global.table.TablePaymentUser.TableRows;return T(De,{className:(a=>`PaymentTable__container--chip ${a?"PaymentTable__container--chip-green":"PaymentTable__container--chip-yellow"}`)(t),children:T("p",{className:"PaymentTable__text--chip",children:t?n.pay:n.pending})})},ta=e=>T(De,{className:"PaymentTable__container--button",onClick:()=>console.log(e),children:T(mn,{className:"PaymentTable__container--button-icon"})}),{BREAKPOINTS:Rt}=Cn,Go=p.div`
  .Pagination {
    background-color: var(--palette-greyBackground);
    padding: 0.8rem 0;

    &__container {
      display: flex;
      justify-content: space-between;

      &--pagination {
        display: flex;
        justify-content: space-between;
        gap: 2.4rem;

        @media screen and (max-width: ${Rt.mobile}px) {
          width: 100%;
          justify-content: space-evenly;
        }
      }

      &--numbers {
        font-size: 1rem;
        color: var(--palette-darkText);
        padding: 0.4rem 0.8rem;
        cursor: pointer;

        &-activated {
          background-color: var(--palette-whiteBackgroundTree);
          border: 1px solid var(--palette-greyBackgroundBorder);
          border-radius: 50%;
        }
      }
    }

    &__text {
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.4rem;
      display: flex;
      align-items: center;

      @media screen and (max-width: ${Rt.mobile}px) {
        display: none;
      }

      &--bold {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1.6rem;
        background-color: var(--palette-greyBackground);
        border: none;

        &:focus {
          outline: none;
        }
      }

      &--disabled {
        color: var(--palette-whiteBackgroundTwo);
      }
    }
  }
`,jt=e=>{const{rowsPerPage:t,rowCount:n,onChangeRowsPerPage:r}=e,{currentPage:a,onChangePage:l}=e,s=St().global.table.TablePaymentUser.Pagination,d=Bo(n,t),b=Wo(d),u=a*t-t+1,m=a===1,O=a===d,y=o.exports.useCallback(()=>l(a-1),[a,l]),f=o.exports.useCallback(()=>l(a+1),[a,l]),_=o.exports.useCallback(h=>l(h),[l]),C=h=>T("div",{...h,children:h==null?void 0:h.value}),P=s.legend(u,n,n),k=h=>`Pagination__text--bold ${h?"Pagination__text--disabled":""}`,R=h=>`Pagination__container--numbers ${h===a?"Pagination__container--numbers-activated":""}`;return T(Go,{className:"Pagination",children:We("div",{className:"Pagination__container",children:[T("p",{className:"Pagination__text",children:P}),We("div",{className:"Pagination__container--pagination",children:[T("button",{className:k(m),"aria-disabled":m,onClick:y,disabled:m,children:s.back}),b.map((h,I)=>T(C,{value:h,className:R(h),onClick:()=>_(h)},I)),T("button",{className:k(O),"aria-disabled":O,onClick:f,disabled:O,children:s.next})]})]})})};jt.defaultProps={};const Uo=e=>T(jt,{...e}),Vo=e=>{const{data:t,columns:n}=e;return T(De,{className:"PaymentTable",children:T(Tt,{columns:n,data:t,paginationPerPage:xn,paginationRowsPerPageOptions:fn,paginationComponent:Uo})})};Vo.defaultProps={};export{Vo as P,Zo as R,On as S,ta as a,ea as b,Xo as f};
