(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"2naz":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("eOGF");function r(e){let t=null;return function(a){for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];const o=a(e(...s));return Object(n.G)()||(t&&t.xhr&&t.xhr.abort&&t.xhr.abort(),t=o),o}}},"3dSo":function(e,t,a){"use strict";var n=a("rfrl"),r=a("/SOd");const s=Object(n.a)((e,t)=>{const a=t.type,n=t.data||{},s=n.slot,i=n.adUnit,o=n.productType;switch(a){case r.a.NATIVE_AD.LOAD_NATIVE_ADS:return e[s]=i,void(e[o]=o);case r.a.NATIVE_AD.DISMISS_NATIVE_ADS:return e[s]=void 0,void(e[o]=o);default:return}},{});t.a=s},"7Anj":function(e,t,a){},EZGV:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),s=a("QILm"),i=a.n(s),o=a("cDcd"),c=a.n(o),l=a("17x9"),d=a.n(l);const u=["onClick"],h=13,m=32;function b(e){const t=e.onClick,a=i()(e,u);return c.a.createElement("div",r()({onClick:t,onKeyUp:e=>{const a=e.keyCode;a!==h&&a!==m||t(e)},tabIndex:"0",role:"button"},a))}b.propTypes={onClick:d.a.func.isRequired},t.a=b},EjUH:function(e,t,a){},SZTr:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return u}));a("rGqo");var n=a("QILm"),r=a.n(n),s=a("MVZn"),i=a.n(s);const o={hacker_school:"hacker_schools",school:"schools",competition:"competitions",country:"countries",current_competitor:"current_competitor",current_competition_participation:"current_competition_participations",competitor_auth:"competitor_auths",state:"states",test:"tests",sponsorship:"sponsorships",file_upload:"file_uploads",leaderboard:"leaderboards",leaderboard_entry:"leaderboard_entries",career_fair_exhibitor:"career_fair_exhibitors",career_fair_exhibitors:"career_fair_exhibitors",company:"companies"},c=e=>i()({id:e.id},e.attributes),l=e=>{e.id,e.created_at,e.updated_at;return r()(e,["id","created_at","updated_at"])},d=e=>{const t={};return e.errors.forEach(e=>{if(e.source.pointer.startsWith("/data/attributes/")){const a=e.source.pointer.substring("/data/attributes/".length);t[a]=t[a]||[],t[a].push(e.title)}}),t},u=(e,t)=>{const a={};if(Array.isArray(t.data)){const n=o[e];a[n]=t.data.map(c)}else{a[e]=c(t.data)}return t.data.relationships&&Object.keys(t.data.relationships).forEach(e=>{const n=t.data.relationships[e].data;Array.isArray(n)?a[e]=a[e]||[]:n&&(a[n.type]=a[n.type]||[])}),t.included&&t.included.forEach(e=>{a[e.type]=a[e.type]||[],a[e.type].push(c(e))}),a}},W6q9:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),s=a("QILm"),i=a.n(s),o=a("lSNA"),c=a.n(o),l=a("cDcd"),d=a.n(l),u=a("37OS"),h=a.n(u),m=a("Wlzk"),b=a.n(m),p=a("TSYQ"),f=a.n(p),T=a("g+WX"),v=a("1OM/"),C=a("PtY2"),N=a("YsOy");a("byxf");const y=["className","itemSize","isSearchable","list","value","error","componentClassName","labelClassName","showLessLabel","showMoreLabel","searchPlaceholder","searchCallback","initialSearchState","required","labelId","label"];class g extends l.Component{constructor(e){super(e),c()(this,"toggleShowAll",()=>{this.setState({showAll:!this.state.showAll})}),c()(this,"handleSearchInput",e=>{const t=e.currentTarget.value,a=this.props.searchCallback;this.setState({searchState:t},()=>{a(t)})}),c()(this,"checklistChange",(e,t)=>{const a=this.props,n=a.value,r=a.onChange,s=t.target.checked,i=b()(n,e.value);s&&i.push(e.value),r(i,e,s)}),this.state={showAll:!e.itemSize,searchState:e.initialSearchState||""}}getChecklist(){const e=this.state.searchState,t=this.props;let a=t.list;if(t.isSearchable&&e){const t=e.toLowerCase();a=a.filter(e=>e.label.toLowerCase().includes(t))}return a}renderSearchBar(){const e=this.props.searchPlaceholder,t=this.state.searchState;return d.a.createElement(v.b,{className:"checklist-input width-100",type:"text",placeholder:e,onChange:this.handleSearchInput,value:t,theme:"theme-m"})}renderShowMore(e){const t=this.props,a=t.itemSize,n=t.showMoreLabel,r=t.showLessLabel,s=this.state.showAll;return!!a&&e.length>a&&d.a.createElement("div",{className:"set-footer",onClick:this.toggleShowAll},d.a.createElement("a",{className:"filter-show-more"},s?r:n))}render(){const e=this.props,t=e.className,a=e.itemSize,n=e.isSearchable,s=e.list,o=e.value,c=e.error,l=e.componentClassName,u=e.labelClassName,h=(e.showLessLabel,e.showMoreLabel,e.searchPlaceholder,e.searchCallback,e.initialSearchState,e.required),m=e.labelId,b=e.label,p=i()(e,y);delete p["aria-label"],delete p.id;const v=this.state.showAll,g=this.getChecklist(),k=v?g:g.slice(0,Math.min(s.length,a));return d.a.createElement("div",{className:f()("ui-checklist",t),role:"group","aria-labelledby":m},d.a.createElement(N.a,{className:f()("ui-checklist__label",u),labelId:m,label:b,required:h}),n&&this.renderSearchBar(),d.a.createElement("div",{className:"ui-checklist-list"},k.map((e,t)=>{const a=void 0!==e.key?e.key:t,n=o.includes(e.value);return d.a.createElement("div",{className:"ui-checklist-list-item",key:a},d.a.createElement("div",{className:"ui-checklist-item-wrap"},d.a.createElement(T.a,r()({},p,{onChange:this.checklistChange.bind(this,e),value:e.value,checked:n,label:e.label,indeterminate:e.indeterminate,className:l,required:void 0,error:!!c}))))})),this.renderShowMore(g),c&&"string"==typeof c&&d.a.createElement("div",{className:"d-flex align-items-center error-message",role:"alert"},d.a.createElement(C.a,{className:"error-icon"}),c))}}c()(g,"defaultProps",{searchPlaceholder:"",isSearchable:!1,itemSize:1/0,initialSearchState:"",searchCallback:h.a,className:"",labelClassName:"",componentClassName:"",showMoreLabel:"More",showLessLabel:"Less",required:!1,value:[]}),t.a=g},YqDo:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),s=a("MVZn"),i=a.n(s),o=a("QILm"),c=a.n(o),l=a("cDcd"),d=a.n(l);a("Jkfs");t.a=e=>{let t=e.className,a=void 0===t?"":t,n=c()(e,["className"]);return n=i()({},n,{className:a+" ui-svg-icon"}),d.a.createElement("svg",r()({viewBox:"0 0 36 36",width:"1em",height:"1em"},n,{fill:"currentColor"}),d.a.createElement("path",{d:"M18 0c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 14c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 14c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z",fillRule:"evenodd",clipRule:"evenodd"}))}},YsOy:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("cDcd"),r=a.n(n),s=a("TSYQ"),i=a.n(s);function o(e){const t=e.labelId,a=e.label,n=e.required,s=e.className;if(!a)return null;if(a&&!t)throw new Error('"labelId" prop is required if "label" prop is passed!');return r.a.createElement("p",{className:i()(s,{"is-required-field":n}),id:t},a)}},byxf:function(e,t,a){},k5uI:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("J4zp"),r=a.n(n);a("rGqo");const s=(e,t)=>{const a={};return e.forEach((e,n)=>{const s=t(e,n),i=r()(s,2),o=i[0],c=i[1];a[o]=c}),a}},lrHr:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),s=a("QILm"),i=a.n(s),o=a("cDcd"),c=a.n(o),l=a("TSYQ"),d=a.n(l);a("oLQN");const u=["className","label","checked","error","variant","inputRef"];function h(e){const t=e.className,a=e.label,n=e.checked,s=e.error,o=e.variant,l=e.inputRef,h=i()(e,u),m=c.a.createElement("div",{className:"radio-wrap"},c.a.createElement("input",r()({type:"radio",className:"radio-input",checked:n,ref:l},h)),c.a.createElement("span",{className:d()("custom-holder",o,{error:s})}));return c.a.createElement("div",{className:d()("ui-radio",{checked:n},t)},a?c.a.createElement("label",{className:"label-wrap"},m,c.a.createElement("div",{className:"label"},a)):m)}h.defaultProps={variant:"inset"},t.a=h},oLQN:function(e,t,a){},ryrm:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),s=a("QILm"),i=a.n(s),o=a("lSNA"),c=a.n(o),l=a("cDcd"),d=a.n(l),u=a("17x9"),h=a.n(u),m=a("TSYQ"),b=a.n(m),p=a("O766"),f=a("OEX3"),T=a("wqqT");var v=function(e){const t=e.inProgress,a=e.disabled,n=e.children,s=i()(e,["inProgress","disabled","children"]);return d.a.createElement("button",r()({},s,{disabled:a||t}),n," ",t&&d.a.createElement(T.a,{diameter:18,color:"#FFFFFF"}))};a("7Anj");function C(){}class N extends d.a.Component{renderOldDialog(){const e=this.props,t=e.confirmText,a=e.cancelText,n=e.onConfirm,s=e.onCancel,o=e.className,c=e.inProgress,l=e.children,u=i()(e,["confirmText","cancelText","onConfirm","onCancel","className","inProgress","children"]);return d.a.createElement(p.a,r()({className:b()("hr-confirm-dialog",o)},u,{size:"small"}),l,d.a.createElement("div",{className:"hr-confirm-footer clearfix"},d.a.createElement("div",{className:"hr-dialog-buttons pull-right"},a&&d.a.createElement(v,{className:"btn hr_secondary-btn hr-dialog-button",disabled:c,inProgress:"cancel"===c,onClick:s},a),t&&d.a.createElement(v,{className:"btn hr_primary-btn hr-dialog-button",disabled:c,inProgress:!0===c||"confirm"===c,onClick:n},t))))}renderNewDialog(){const e=this.props,t=e.confirmText,a=e.cancelText,n=e.onConfirm,s=e.onCancel,o=e.className,c=e.inProgress,l=e.children,u=e.cancelBtnProps,h=e.confirmBtnProps,m=i()(e,["confirmText","cancelText","onConfirm","onCancel","className","inProgress","children","cancelBtnProps","confirmBtnProps"]);return d.a.createElement(p.a,r()({className:b()("confirm-dialog",o)},m,{size:"small"}),l,d.a.createElement("div",{className:"confirm-button-group"},a&&d.a.createElement(f.h,r()({className:"ui-btn-secondary cancel-button",disabled:!!c,loading:"cancel"===c,onClick:s},u),a),t&&d.a.createElement(f.h,r()({className:"ui-btn-primary confirm-button",disabled:!!c,loading:!0===c||"confirm"===c},h,{onClick:n}),t)))}render(){return"theme-m"===this.props.theme?this.renderNewDialog():this.renderOldDialog()}}c()(N,"propTypes",{confirmText:h.a.string,onConfirm:h.a.func,cancelText:h.a.string,onCancel:h.a.func,inProgress:h.a.oneOf(["cancel","confirm",!0,!1]),cancelBtnProps:h.a.object,confirmBtnProps:h.a.object}),c()(N,"defaultProps",{confirmText:"Yes",onConfirm:C,cancelText:"No",onCancel:C,cancelBtnProps:{},confirmBtnProps:{}});t.a=N},u4aZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("J4zp"),r=a.n(n),s=(a("rGqo"),a("MVZn")),i=a.n(s),o=a("QILm"),c=a.n(o),l=a("yXPU"),d=a.n(l),u=a("ZaSc"),h=a("SZTr");const m={GET:u.c,PUT:u.g,PATCH:u.d,POST:u.f,DELETE:u.a},b={show:"GET",update:"PUT",index:"GET",destroy:"DELETE",create:"POST"},p=(e,t)=>{let a=t.hrwResources,n=t.hrcResources;const s=function(){var t=d()((function*(t){const a=t,n=a.method,r=void 0===n?"GET":n,s=a.url,o=a.params,l=a.query,d=void 0===l?{}:l,h=a.jsonApi,b=a.upload,p=c()(a,["method","url","params","query","jsonApi","upload"]),f=((e,t)=>t?u.h:m[e])(r,b),T=i()({url:s,query:d,params:o,jsonApi:h},p,{ajaxServerConf:e,handlesFieldErrors:!0});return yield f(T)}));return function(e){return t.apply(this,arguments)}}(),o=function(){var e=d()((function*(e){const t=e.prefix,o=e.resource,l=e.action,d=e.id,u=e.include,m=e.query,p=void 0===m?{}:m,f=e.platform,T=void 0===f?"work":f,v=e.filter,C=e.sort,N=e.limit,y=void 0===N?null:N,g=e.offset,k=void 0===g?null:g,E=c()(e,["prefix","resource","action","id","include","query","platform","filter","sort","limit","offset"]),x=h.e[o],A=b[l],I=d?"/"+d:"",w=u?{include:u.join(",")}:{},S=(e=>{const t={};return Object.entries(e||{}).forEach(e=>{let a=r()(e,2),n=a[0],s=a[1];t[`filter[${n}]`]=s.join(",")}),t})(v),L=((e,t)=>null!==e&&null!==t?{page:{limit:e,offset:t}}:null!==e?{page:{limit:e}}:null!==t?{page:{offset:t}}:{})(y,k),P=C&&C.length>0?{sort:C.map(e=>`${"desc"===e.direction?"-":""}${e.field}`).join(",")}:{},O=((e,t)=>{let a=0,n=e.length;for(let n=0;n<e.length&&e.charAt(n)===t;n+=1)a=n+1;for(let a=e.length-1;a>=0&&e.charAt(a)===t;a-=1)n=a;return a>=n?"":e.substring(a,n)})(t||"","/"),_=`${"work"===T?a:n}${O?`/${O}/`:"/"}${x}${I}`,D=yield s(i()({method:A,url:_,jsonApi:!0,query:i()({},p,{},w,{},S,{},L,{},P)},E)),V=Object(h.c)(o,D);return i()({},V,{fullData:D})}));return function(t){return e.apply(this,arguments)}}();return{apiFetch:s,resourceFetch:o}}},z5MK:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a("lSNA"),r=a.n(n),s=a("pVnL"),i=a.n(s),o=a("QILm"),c=a.n(o),l=a("cDcd"),d=a.n(l),u=a("MGin"),h=a("/n7Q"),m=a("wKL8"),b=a("TSYQ"),p=a.n(b),f=a("eHHv"),T=a("e6Ar"),v=a("I53q"),C=a("eOGF");a("EjUH");const N=["index","id","as","isActive","isOnlyForScreenReader","to","onClick","onKeyDown","children","panelId","className"],y=["visibleTabCount","className","tabContext","tabList","renderItem","tabItemProps","dropdownTitle","excludeVisibleTabs"],g=["children","className","tabContext"],k=["children","className","layout","activeTab","id","as","onTabClick"],E={HORIZONTAL:"horizontal",VERTICAL:"vertical"},x={NAV:"nav",TAB:"tab"},A=Object(l.createContext)({activeTab:0,layout:E.HORIZONTAL,id:"",onTabClick:C.J,as:x.TAB}),I=A.Provider,w=A.Consumer,S=Object(f.b)(w,e=>{if(!e)throw new Error("Tab.Content and Tab.List can be only used inside Tab scope.");return{tabContext:e}});function L(e,t){return`${e}-item-${t}`}function P(e,t){return`${e}-content-${t}`}function O(e){const t=e.index,a=e.id,n=e.as,r=e.isActive,s=e.isOnlyForScreenReader,o=e.to,l=e.onClick,h=e.onKeyDown,m=e.children,b=e.panelId,f=e.className,T=c()(e,N),v=d.a.useCallback(()=>{l(t)},[l]),C=n===x.NAV?u.Link:"button",y=n===x.NAV?{to:o,tabIndex:s?-1:void 0}:{onClick:v,role:"tab",tabIndex:r?0:-1,onKeyDown:h,"aria-selected":r,"aria-controls":r?b:void 0};return d.a.createElement(C,i()({},T,{id:a,className:p()(f,"tab-item",{"sr-only":s,active:r})},y),m)}class _ extends l.PureComponent{constructor(){var e;super(...arguments),e=this,r()(this,"focusTabItem",!1),r()(this,"handleKeyDown",e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;const t=this.props,a=t.tabContext,n=a.layout,r=a.activeTab,s=t.tabList,i=n===E.HORIZONTAL,o=0===r?s.length-1:r-1,c=r===s.length-1?0:r+1;switch(e.key){case v.a.Home:case v.a.PageUp:this.clickAndFocus(0,e);break;case v.a.End:case v.a.PageDown:this.clickAndFocus(s.length-1,e);break;case v.a.ArrowUp:i||this.clickAndFocus(o,e);break;case v.a.ArrowLeft:i&&this.clickAndFocus(o,e);break;case v.a.ArrowDown:i||this.clickAndFocus(c,e);break;case v.a.ArrowRight:i&&this.clickAndFocus(c,e)}}),r()(this,"handleDropdownSelect",e=>{if(this.props.tabContext.as===x.NAV){const t=document.getElementById(this.getTabItemId(e));if(t)return void t.click()}this.clickAndFocus(e)}),r()(this,"handleTabItemClick",e=>{(0,this.props.tabContext.onTabClick)(e),this.focusTabItem=!1}),r()(this,"renderTabItem",(function(t,a){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const r=e.props,s=r.renderItem,o=r.tabContext,c=o.activeTab,l=o.as,u=o.id,h=r.tabItemProps,m=t.idx,b=t.tab,p=!("number"!=typeof a||!n.length||n.includes(a)),f=m===c,T="function"==typeof h?h(b,m):h;return d.a.createElement(O,i()({},T,{key:m,index:m,id:e.getTabItemId(m),isActive:f,onClick:e.handleTabItemClick,onKeyDown:e.handleKeyDown,isOnlyForScreenReader:p,as:l,to:b.to,panelId:P(u,m)}),s(b,m))}))}componentDidUpdate(e){const t=e.tabContext.activeTab,a=this.props.tabContext.activeTab;if(t!==a&&this.focusTabItem){this.focusTabItem=!1;const e=document.getElementById(this.getTabItemId(a));if(!e)return;e.focus()}}clickAndFocus(e,t){t&&t.preventDefault();(0,this.props.tabContext.onTabClick)(e),this.focusTabItem=!0}getTabsWithIndex(){return this.props.tabList.map((e,t)=>({idx:t,tab:e}))}getTabA11yAttr(){const e=this.props,t=e.tabContext,a=t.layout,n=t.as,r=e.title,s=n===x.NAV;return{role:s?"navigation":"tablist","aria-orientation":s?void 0:a,"aria-label":r}}getTabItemId(e){return L(this.props.tabContext.id,e)}renderTabs(){const e=this.props,t=e.visibleTabCount,a=e.tabContext,n=a.layout,r=a.activeTab,s=this.getTabsWithIndex();if(n===E.VERTICAL)return s.map(e=>this.renderTabItem(e));const i=s.slice(0,t).map((e,t)=>t);return void 0!==t&&r>=t&&(i[i.length-1]=r),s.map((e,t)=>this.renderTabItem(e,t,i))}renderTabDropdown(){const e=this.props,t=e.dropdownTitle,a=e.tabList,n=e.visibleTabCount,r=e.excludeVisibleTabs,s=e.tabContext.activeTab;if(a.length<=+n)return;const i=this.getTabsWithIndex();let o=[...i];if(r&&+n>0&&(o=i.slice(n),s>=+n)){const e=i[+n-1];o=o.filter(e=>+s!==e.idx),o.unshift(e)}return d.a.createElement(T.a,{className:"tab__dropdown",selectedValue:s,onSelect:this.handleDropdownSelect,title:d.a.createElement(d.a.Fragment,null,t,d.a.createElement(m.a,null)),tabIndex:0},o.map(e=>d.a.createElement(T.a.Item,{key:e.idx,value:e.idx},this.props.renderItem(e.tab,e.idx))))}render(){const e=this.props,t=e.visibleTabCount,a=e.className,n=e.tabContext.layout,r=(e.tabList,e.renderItem,e.tabItemProps,e.dropdownTitle,e.excludeVisibleTabs,c()(e,y)),s=n===E.HORIZONTAL&&t;return d.a.createElement("div",i()({className:p()("render-list clearfix",a)},r),d.a.createElement("div",i()({className:"tab-header"},this.getTabA11yAttr()),this.renderTabs()),s&&this.renderTabDropdown())}}function D(e){const t=e.children,a=e.className,n=e.layout,r=e.activeTab,s=e.id,o=e.as,l=e.onTabClick,u=c()(e,k),h=d.a.useMemo(()=>({layout:n||E.HORIZONTAL,id:s,activeTab:r,onTabClick:l,as:o}),[n,s,r,l,o]);return d.a.createElement(I,{value:h},d.a.createElement("div",i()({className:p()("ui-tabs-wrap",a,{"vertical-layout":n===E.VERTICAL})},u),t))}r()(_,"defaultProps",{tabItemProps:{},dropdownTitle:"More",renderItem:e=>e,excludeVisibleTabs:!1}),D.defaultProps={layout:E.HORIZONTAL,as:x.TAB,onTabClick:C.J};const V=S(_),q=S((function(e){const t=e.children,a=e.className,n=e.tabContext,r=n.id,s=n.activeTab,o=n.as,l=c()(e,g),u=o===x.NAV?{}:{role:"tabpanel",tabIndex:0};return d.a.createElement("div",i()({className:p()("tab-list-content",a)},l,u,{id:P(r,s),"aria-labelledby":L(r,s)}),t)}));D.List=V,D.Content=q;const F=Object(h.d)("tab")(D);F.List=V,F.Content=q,F.LAYOUT=E,F.AS=x,t.b=F}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/modules~hackerrank_r_community~hackerrank_r_work-32824e47.js.map