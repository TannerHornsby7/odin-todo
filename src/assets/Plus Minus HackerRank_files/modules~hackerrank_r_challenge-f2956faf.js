(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{"2wrv":function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),l=a("MVZn"),r=a.n(l),c=a("QILm"),i=a.n(c),o=a("cDcd"),d=a.n(o);a("Jkfs");t.a=e=>{let t=e.className,a=void 0===t?"":t,s=i()(e,["className"]);return s=r()({},s,{className:a+" ui-svg-icon"}),d.a.createElement("svg",n()({viewBox:"0 0 24 24",width:"1em",height:"1em"},s,{fill:"currentColor"}),d.a.createElement("path",{d:"M19 10h-1V7c0-3.3-2.7-6-6-6S6 3.7 6 7v3H5c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM8 7c0-2.2 1.8-4 4-4s4 1.8 4 4v3H8V7zm12 13c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7z"}))}},"6bRd":function(e,t,a){},"7FfL":function(e,t,a){},Kg5x:function(e,t,a){},QdXA:function(e,t,a){},XzeZ:function(e,t,a){"use strict";let s,n;a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));try{s=localStorage,n=sessionStorage}catch(e){s={},n={}}function l(e){const t={set:function(t,a,s){const n=Date.now()/1e3,l={updatedTime:n,data:a};s&&(l.expireOn=n+s),e[t]=JSON.stringify(l)},get:function(a,s){let n=e[a];try{n=JSON.parse(n)}catch(e){n={data:n}}if(!(n.expireOn&&n.expireOn<Date.now()/1e3))return s||!("data"in n)?n:n.data;t.delete(a)},delete:function(t){e[t]&&delete e[t]}};return t}const r=l(s),c=l(n)},Y39M:function(e,t,a){},"ZM+U":function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),l=a("lSNA"),r=a.n(l),c=a("cDcd"),i=a.n(c),o=a("17x9"),d=a.n(o),u=a("TSYQ"),m=a.n(u);a("Kg5x");class p extends i.a.Component{constructor(){super(),r()(this,"state",void 0),this.state={hoveredRating:0}}render(){const e=this.props,t=e.scale,a=e.analyticsId,s=e.onRate,l=this.state.hoveredRating,r=Math.ceil(this.props.currentRating),c=[];for(let e=1;e<=t;e++){const t={};a&&(t["data-analytics"]=a,t["data-attr7"]=e);const o=i.a.createElement("i",n()({key:e,className:m()("rating-icon cursor",e<=r||e<=l?"ui-icon-star-filled":"ui-icon-star")},t,{onMouseOver:()=>this.setState({hoveredRating:e}),onMouseOut:()=>this.setState({hoveredRating:0}),onClick:()=>s(e)}));c.push(o)}return i.a.createElement("div",{className:"rating"},c)}}r()(p,"propTypes",{scale:d.a.number,currentRating:d.a.number.isRequired,analyticsId:d.a.string,onRate:d.a.func.isRequired}),r()(p,"defaultProps",{scale:5,currentRating:0}),t.a=p},aYpt:function(e,t,a){},cqES:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),l=a("MVZn"),r=a.n(l),c=a("QILm"),i=a.n(c),o=a("cDcd"),d=a.n(o);a("Jkfs");t.a=e=>{let t=e.className,a=void 0===t?"":t,s=i()(e,["className"]);return s=r()({},s,{className:a+" ui-svg-icon"}),d.a.createElement("svg",n()({viewBox:"0 0 100 100",width:"1em",height:"1em"},s,{fill:"currentColor"}),d.a.createElement("path",{d:"M25.885 65.414a19.77 19.77 0 0 0-5.791 13.98v7.675H14.15V95h71.7v-7.931h-5.944v-7.675a19.77 19.77 0 0 0-5.79-13.98L60.741 52.041a2.887 2.887 0 0 1 0-4.082l13.373-13.373a19.77 19.77 0 0 0 5.791-13.98v-7.675h5.944V5h-71.7v7.931h5.944v7.675a19.77 19.77 0 0 0 5.79 13.98L39.259 47.96a2.887 2.887 0 0 1 0 4.082L25.885 65.414zM44.18 43.037L30.807 29.664a12.725 12.725 0 0 1-3.752-9.058v-8.645h45.89v8.645c0 3.422-1.332 6.639-3.752 9.058L55.82 43.037A9.783 9.783 0 0 0 52.936 50a9.783 9.783 0 0 0 2.885 6.963l13.372 13.374c1.572 1.571 2.63 3.5 3.216 5.582C69.474 73.637 54.443 62.124 50 62.124c-4.444 0-19.474 11.513-22.41 13.795.588-2.083 1.645-4.01 3.217-5.583L44.18 56.963c3.839-3.839 3.84-10.086 0-13.926z"}))}},laJX:function(e,t,a){"use strict";var s=a("eOGF");let n=function(){throw new Error("This module is meant to be used in client only")};Object(s.G)()||(n=a("gTbk")),t.a=n},tM5t:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),l=a("QILm"),r=a.n(l),c=a("cDcd"),i=a.n(c),o=a("7lYa"),d=(a("KKXr"),a("J4zp")),u=a.n(d),m=(a("a1Th"),a("rGqo"),a("lSNA")),p=a.n(m),h=a("Wwog");const g=[62,152,24,30],T="stdIn",E="stdOut",v="expectedOutput",f="compileCommand",b="compilerMessage",C="customCheckerMessage",w="stdOutDebug",_="stdErr",N="lexicalPenalty",k="score",L={[T]:"stdin",[E]:"stdout",[v]:"expected-output",[f]:"compile-command",[b]:"compile-message",[C]:"custom-checker-message",[w]:"debug-output",[_]:"stderr",[N]:"lexical-penalty",[k]:"score"},S={[T]:"Input (stdin)",[E]:"Your Output (stdout)",[v]:"Expected Output",[f]:"Compilation command",[b]:"Compiler Message",[C]:"Custom Checker Error Message",[w]:"Debug output",[_]:"Error (stderr)",[N]:"Restricted Keywords Used",[k]:"Score",RUN_AS_CUSTOM_INPUT:"Run as Custom Input",EXECUTION_TIME_LIMIT:"Allowed time limit",ALL_TESTCASES_COMPILED:"All test cases compiled",LOADING:"Loading",TESTCASE_PASSED:"Passed",TESTCASE_FAILED:"Failed",TESTCASE_TLE:"Time limit exceeded",DOWNLOAD:"Download",HIDDEN_TEST_CASE:"Hidden Test Case",TEST_CASE_TITLE:"Test case",SAMPLE_TEST_CASE_TITLE:"Sample Test case"},y={[E]:"Output hidden",[b]:{TLE:"Your code did not execute within the time limits"}};var x=a("TP7S"),O=a.n(x),D=a("6qam"),I=a.n(D);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function A(e,t){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s="",n="";return 1===e?(s="check-circle",n="success"):-1===e?(s="loading",n="info"):(n="error",a?s=g.includes(t)?"time":"cross":(s="loading",n="info")),{statusIcon:s,statusClass:n}}function P(e,t,a){const s=t.stdIn,n=t.stdOut,l=t.expectedOutput,r=t.compilerMessage,c=t.customCheckerMessage,i=t.stdOutDebug,o=t.stdErr,d=t.lexicalPenalty,m=t.score,p=void 0===m?"":m,h=t.signal,f=t.showInputDownloadLink,S=void 0===f||f,x=t.showOutputDownloadLink,O=void 0===x||x,D=t.showStdoutDownloadLink,I=void 0!==D&&D,M=t.showStdoutDebugDownloadLink,A=void 0!==M&&M,P=t.showStderrDownloadLink,R=void 0!==P&&P,U=g.includes(h)?y[b].TLE:r,j={[T]:[s,!1,S],[E]:[n,!n,I],[v]:[l,!l,O],[b]:[U,!1,!1],[C]:[c,!1,!1],[w]:[i,!1,A],[_]:[o,!1,R],[N]:[d,!1,!1],[k]:[p.toString(),!1,!1]},H=u()(j[e],3),F=H[0],V=H[1],z=H[2];return{className:L[e],label:B(e,a),value:F,noResponse:V,showDownloadLink:z}}function R(e,t,a){return e.map((e,s)=>function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{originalIndex:j(e,s),title:H(e,s,t,a)}))}const U=Object(h.a)((e,t,a)=>R(e,t,a).sort((e,t)=>e.status===t.status?e.originalIndex-t.originalIndex:e.status-t.status));function j(e,t){return e.hasOwnProperty("id")&&e.id>=0?e.id:t}function H(e,t,a,s){return e.hasOwnProperty("id")&&e.id>=0?`${s} ${t}`:`${a} ${t}`}function F(e){return"submit"===e?"SubmitCode":"RunCode"}function B(e,t){return S[e]?t?t("shared-components.testcases."+e,S[e]):S[e]:""}a("Y39M");var V=e=>{const t=e.progress,a=e.maxLimit,s=e.liveMessage,n=e.parentId,l=function(e,t){return e/t*100}(t,a),r=n?n+"-progressbar":void 0;return i.a.createElement("div",{className:"tc-progress-wrapper"},i.a.createElement("span",{className:"status-progress"},s),i.a.createElement(o.a,{value:l,shine:!0,role:"progressbar",id:r,"aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":a,"aria-valuetext":`${t}/${a} testcases run`}))},z=a("IU/7"),Y=a("cqES"),J=a("MKsj"),Q=a("QU3h"),$=a("2wrv"),q=a("wqqT"),X=a("61np"),K=a("z5MK");const Z={"check-circle":{Component:z.a,label:S.TESTCASE_PASSED},loading:{Component:Y.a,label:S.LOADING},time:{Component:J.a,label:S.TESTCASE_TLE},cross:{Component:Q.a,label:S.TESTCASE_FAILED}},G=e=>{const t=e.isLiveStatus,a=e.statusClass,s=e.statusIcon,l=e.title,c=e.isSample,o=e.hiddenTestCaseTooltip,d=e.isSelected,u=e.layout,m=r()(e,["isLiveStatus","statusClass","statusIcon","title","isSample","hiddenTestCaseTooltip","isSelected","layout"]),p="loading"===s,h=Z[s];return i.a.createElement("div",n()({className:`d-flex testcase-tab-item tab-item-color-${a} testcase-item`},m),t&&p?i.a.createElement(q.a,{diameter:20}):h&&i.a.createElement(h.Component,{className:"tab-item__status-icon",role:"img","aria-label":h.label}),i.a.createElement("span",{className:"ui-icon-label tab-item-label"},l),!p&&!c&&i.a.createElement(X.a,{content:o,align:u===K.a.HORIZONTAL?"bottom":"right"},i.a.createElement($.a,{role:"img","aria-label":o,tabIndex:d?"0":void 0,"data-automation":"tab-item-lock-icon"})))};G.defaultProps={isSample:!1,hiddenTestCaseTooltip:"Hidden test case"};var W=G;a("QdXA");var ee=e=>{const t=e.testcaseStatus,a=e.signal,s=e.progress,n=e.maxLimit,l=e.totalCount,r=e.liveMessage,o=e.isCustomTestcase,d=e.parentId,u=e.testcasesTitle;return i.a.createElement(c.Fragment,null,i.a.createElement(V,{progress:s,maxLimit:n,className:"tc-progress",liveMessage:r,parentId:d}),!o&&((e,t,a,s)=>{const n=[];for(let l=0;l<a;l++){const a=A(e&&e.length?e[l]:-1,t&&t.length?t[l]:0),r=a.statusClass,c=a.statusIcon,o=`${s} ${l}`;n.push(i.a.createElement(W,{isLiveStatus:!0,statusClass:r,statusIcon:c,title:o,key:l}))}return i.a.createElement("div",{className:"tc-live-status d-flex flex-column flex-wrap align-content-start"},n)})(t,a,l,u))},te=a("TSYQ"),ae=a.n(te),se=a("vN+2"),ne=a.n(se),le=a("OEX3");a("FDph"),a("sUjY"),a("7FfL");var re=function(e){let t=e.value,a=e.className,s=e.executionTimeLimit,n=e.timeLimitExceeded;return i.a.createElement("div",{className:ae()("d-flex compiler-message",a)},i.a.createElement("div",{className:"compiler-message__message-wrapper"},i.a.createElement("pre",{className:"compiler-message__value"},i.a.createElement("code",null,t))),n&&i.a.createElement("div",{className:"d-flex flex-column compiler-message__tle"},i.a.createElement("div",{className:"d-flex justify-content-between compiler-message__tle-header"},i.a.createElement("div",{className:"compiler-message__tle-header__message"},S.TESTCASE_TLE),s&&i.a.createElement("div",{className:"compiler-message__tle-header__time"},S.EXECUTION_TIME_LIMIT,":",i.a.createElement("span",{className:"compiler-message__tle-header__time-content"},s," secs"))),i.a.createElement("div",{className:"compiler-message__tle-content"},"Your code did not execute within the time limits. Please optimize your code. For more information on execution time limits, refer to the"," ",i.a.createElement("a",{className:"compiler-message__tle-content-link",href:"https://support.hackerrank.com/hc/en-us/articles/1500002392722-Execution-Environment",target:"_blank"},"environment")," ","page")))};a("aYpt");function ce(e){let t=e.label,a=e.value,s=e.className;return i.a.createElement("div",{className:"d-flex flex-column flex-wrap compile-error__item"},i.a.createElement("div",{className:ae()(s,"compile-error__message")},i.a.createElement("span",{className:"d-flex compile-error__label"},t),i.a.createElement("div",{className:"compile-error__value"},i.a.createElement(re,{value:a}))))}var ie=function(e){let t=e.compileCommand,a=e.compileMessage;const s=[{key:f,value:t,label:S[f],className:L[f]},{key:b,value:a,label:S[b],className:L[b]}];return i.a.createElement("div",{className:"d-flex flex-column compile-error",role:"alert"},s.map(e=>e.value&&i.a.createElement(ce,n()({key:e.key},e))))};a("z+vl");var oe=e=>{const t=e.content,a=e.ariaLabel,s=e.renderFooter;return i.a.createElement("ul",{className:"lines-container","aria-label":a},function(e){return e.endsWith("\n")&&(e=e.substring(0,e.length-1)),e.split("\n").map((e,t)=>i.a.createElement("li",{className:"d-flex lines-container__line",key:t},i.a.createElement("span",{className:"lines-container__content-wrapper"},i.a.createElement("pre",{className:"lines-container__content"},e))))}(t),"function"==typeof s&&s())},de=a("Ihdz");var ue=()=>{const e=Object(c.useState)(!0),t=u()(e,2),a=t[0],s=t[1],n=e=>{const t=(null==e?void 0:e.getBoundingClientRect()).bottom;Math.floor(t)>window.innerHeight+50?s(!0):s(!1)},l=()=>{const e=document.getElementById("testcases-result__id");e&&n(e)};Object(c.useEffect)(()=>{const e=document.getElementById("testcases-result__id");return null==e||e.parentElement.addEventListener("scroll",l),e&&n(e),()=>{var t;return null==e||null===(t=e.parentElement)||void 0===t?void 0:t.removeEventListener("scroll",l)}},[]);return!1===a?null:i.a.createElement("button",{className:"scroll-to-bottom",onClick:()=>{const e=document.getElementById("testcases-result__id");if(e){var t;(null==e||null===(t=e.parentElement)||void 0===t?void 0:t.lastChild).scrollIntoView({behavior:"smooth",block:"end"})}},id:"scroll-to-bottom","aria-label":"click to scroll to bottom of output"},i.a.createElement(de.a,{className:"scroll-to-bottom__icon"}))};a("OwiU"),a("v7MN");function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}class he extends c.Component{constructor(){super(...arguments),p()(this,"state",{activeTab:0,testcases:[]}),p()(this,"getActiveTestcase",()=>{const e=this.state;return e.testcases[e.activeTab]}),p()(this,"renderDownloadLink",e=>{const t=this.props,a=t.handleDownload,s=t.showLineNumbers,l=e.isDataTruncated,r=e.showDownload,o=e.downloadLinkDownAttrs,d=e.className,u=e.testcaseIndex;return i.a.createElement(c.Fragment,null,l&&r&&(s?i.a.createElement("li",{className:"d-flex lines-container__line full-testcase",key:"download_fulltestcase"},i.a.createElement(le.c,n()({},o,{className:"d-flex align-items-center justify-content-end lines-container__link full-testcase__link text-link cursor-pointer",onClick:a.bind(this,d,u)}),"Download to view the full testcase")):i.a.createElement(le.c,n()({},o,{className:"d-flex align-items-center justify-content-start text-link cursor-pointer download_link",onClick:a.bind(this,d,u)}),"Download to view the full testcase")))}),p()(this,"onTabClick",e=>{const t=this.props.fetchTestcase;this.setState({activeTab:e},()=>{const e=this.getActiveTestcase().originalIndex;"function"==typeof t&&t(e)})}),p()(this,"renderTabItem",(e,t)=>{const a=this.props,s=a.type,l=a.layout,r=a.isCustomTestcase,c=a.analyticsAttributes,o=a.hiddenTestCaseTooltip,d=this.state.activeTab;if("compile"===s&&r)return;const u=this.state.testcases,m=this.getActiveTestcase().originalIndex,p=pe({},c,{"data-analytics":"TestCaseResultsTab","data-attr1":F(s),"data-attr5":m}),h=function(e,t){const a=t[e];return A(a.status,a.signal,a.checkerProcessed)}(t,u),g=h.statusClass,T=h.statusIcon,E=u[t].title,v=u[t].isSample;return i.a.createElement(W,n()({statusClass:g,statusIcon:T,title:E,isSelected:d===t},p,{isSample:v,hiddenTestCaseTooltip:o,layout:l}))})}static getDerivedStateFromProps(e){const t=e.testcases,a=e.testcasesTitle,s=B("SAMPLE_TEST_CASE_TITLE",e.t);return{testcases:U(t,a,s)}}componentDidMount(){const e=this.props,t=e.shouldUnlockHiddenTestcase,a=e.getHiddenTestcases,s=e.fetchTestcase,n=e.type;if(t&&"function"==typeof a&&a(),"submit"===n&&"function"==typeof s){s(this.getActiveTestcase().originalIndex)}}getRunTestCaseButtonText(e,t){const a=B("RUN_AS_CUSTOM_INPUT",t);return this.props.isCustomTestcase||e!==T?null:a}renderLabel(e,t){const a=function(e){return`render${e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}Label`}(t),s=this.getActiveTestcase()[a];return"function"==typeof s?s():e}renderCompilerMessage(e,t,a){const s=this.props,n=s.executionTimeLimit,l=s.showLineNumbers,r=s.t,o=t===B(E,r)&&e===y[E];return t===B(b,r)?e!==y[b].TLE?i.a.createElement(re,{value:e}):i.a.createElement(re,{timeLimitExceeded:!0,executionTimeLimit:n}):i.a.createElement(c.Fragment,null,l&&!o?i.a.createElement(oe,{ariaLabel:t,content:e,renderFooter:this.renderDownloadLink.bind(this,a)}):i.a.createElement(c.Fragment,null,i.a.createElement(re,{value:e}),this.renderDownloadLink(a)))}renderCompileFieldLabelLinks(e,t,a,s,l){const r=this.props,o=r.showRunTestCaseButton,d=r.handleDownload,u=r.handleRunTestCase,m=r.isCustomTestcase,p=r.t,h=pe({},a,{"data-attr6":"right","aria-label":"Download "+B(e,p)}),g=this.getRunTestCaseButtonText(e,p),T=B("DOWNLOAD",p),E=this.getActiveTestcase().originalIndex,v=!s&&o&&g;return i.a.createElement("span",{className:"compile-field-label__links"},v&&i.a.createElement(c.Fragment,null,i.a.createElement(le.c,{className:"text-link cursor-pointer",onClick:u.bind(this,E),"data-automation":"compile-field-label-run-test"},g),!m&&i.a.createElement("span",{className:"divider"},"|")),l&&i.a.createElement(le.c,n()({},h,{className:"text-link cursor-pointer",onClick:d.bind(this,t,E),"data-automation":"compile-field-label-download"}),T))}renderRunTimeSingleMessage(e,t){const a=this.props,s=a.analyticsAttributes,n=a.type,l=a.defaultTextForOutput,r=a.showLineNumbers,c=e.className,o=e.label,d=e.value,u=void 0===d?"":d,m=e.noResponse,p=e.showDownloadLink,h=this.getActiveTestcase().originalIndex,g=u.includes("{-truncated-}"),T=pe({},s,{"data-analytics":"DownloadTestcase","data-attr1":F(n),"data-attr4":c,"data-attr7":h}),E={isDataTruncated:g,showDownload:p,downloadLinkDownAttrs:pe({},T,{"data-attr6":"down"}),className:c,testcaseIndex:h};return i.a.createElement("div",{key:o,className:ae()(c,"run-time-message flex-display",{"run-time-message__line-numbers":r})},i.a.createElement("div",{className:"d-flex compile-field-label"},this.renderLabel(o,c),this.renderCompileFieldLabelLinks(t,c,T,g,p)," "),u&&i.a.createElement("div",{className:"compile-output-message"},this.renderCompilerMessage(u,o,E)),m&&i.a.createElement("pre",{className:"compile-output-message no-response"},i.a.createElement("code",{className:"bold"},l)))}renderRunTimeMessages(){const e=this.props.showScrollToBottomBtn,t=this.getActiveTestcase(),a=[b,_,T,E,v,C,w,N,k],s=this.props.t,n=a.map(e=>{if(function(e,t){const a=[E,v];return!O()(t)&&!I()(t)&&(!(!a.includes(e)||"string"!=typeof t)||!!t)}(e,t[e])){const a=P(e,t,s);return this.renderRunTimeSingleMessage(a,e)}return null});return i.a.createElement("div",{id:"testcases-result__id",className:"d-flex flex-column flex-wrap compilation-time-response"},n,e?i.a.createElement(ue,null):null)}renderTestcaseContent(){return i.a.createElement("div",{className:ae()("tab-pane-content")},this.renderRunTimeMessages())}renderLoadingContent(){return i.a.createElement("div",{className:"bold loading-testcase text-align-center align-self-center"},"Loading testcase ...")}renderUnlockMessageContent(){const e=this.props,t=e.unlockTestcaseMessage,a=e.handleUnlock,s=e.analyticsAttributes,l=e.unlockButtonText,r=e.t,c=this.getActiveTestcase(),o=c.originalIndex,d=c.unlockingTestCase,u=c.unlockError,m=pe({},s,{"data-analytics":"UnlockTestCase","data-attr1":"SubmitCode","data-attr5":o}),p=B("HIDDEN_TEST_CASE",r);return i.a.createElement("div",{className:"unlock-block"},i.a.createElement("div",{className:"unlock-heading"},i.a.createElement($.a,null),i.a.createElement("span",{className:"ui-icon-label"},p)),i.a.createElement("div",{className:u?"unlock-error":"unlock-cost"},u||t),i.a.createElement(le.h,n()({},m,{className:"ui-btn-line hovered",loading:!!d,onClick:a.bind(this,o)}),l))}renderUnlockMessage(){const e=this.props.t,t=this.getActiveTestcase(),a=[[P(b,t,e),b],[P(w,t,e),w],[P(E,t,e),E]];return i.a.createElement("div",{className:"unlock-wrapper"},a.map(e=>{let t=u()(e,2),a=t[0],s=t[1];return a.value&&this.renderRunTimeSingleMessage(a,s)}),this.renderUnlockMessageContent())}renderHiddenTestcaseContent(){const e=this.props,t=e.hiddenTestCaseHelpText,a=B("HIDDEN_TEST_CASE",e.t);return i.a.createElement("section",{className:"hidden-testcase-wrapper"},this.renderRunTimeMessages(),i.a.createElement("div",{className:"hidden-testcase-wrapper__content"},i.a.createElement($.a,null),i.a.createElement("header",{className:"ui-icon-label"},a),i.a.createElement("p",{className:"hidden-testcase-wrapper__content__help-text"},t)))}renderTabsContent(){const e=this.props,t=e.type,a=e.shouldUnlockHiddenTestcase,s=this.getActiveTestcase();let n="";return"compile"===t?n=this.renderTestcaseContent():"submit"===t&&(n=s.purchased?s.loadData?this.renderLoadingContent():s.isSample?this.renderTestcaseContent():this.renderHiddenTestcaseContent():a?this.renderUnlockMessage():this.renderHiddenTestcaseContent()),i.a.createElement(K.b.Content,{className:"tab-content d-flex"},n)}render(){const e=this.props,t=e.tabListProps,a=e.compileCommand,s=e.compileMessage,n=e.result,l=e.tabTitle,r=e.layout;if(function(e){return 0!==e}(n))return i.a.createElement("section",{className:"theme-m testcases-result-wrapper"},i.a.createElement(ie,{compileCommand:a,compileMessage:s}));if(!this.getActiveTestcase())return null;const c=this.state,o=c.activeTab,d=c.testcases,u=d.length+" Testcases",m=pe({tabList:d,renderItem:this.renderTabItem,dropdownTitle:u,title:l},t);return i.a.createElement(K.b,{layout:r,className:"testcases-result-wrapper theme-m",activeTab:o,onTabClick:this.onTabClick},i.a.createElement(K.b.List,m),this.renderTabsContent())}}p()(he,"defaultProps",{result:0,handleDownload:ne.a,shouldUnlockHiddenTestcase:!1,handleUnlock:ne.a,unlockTestcaseMessage:"Unlock this testcase for 5 hackos",defaultTextForOutput:"~ no response on stdout ~",unlockButtonText:"Unlock",showRunTestCaseButton:!1,hiddenTestCaseHelpText:"Use print or log statements to debug why your hidden test cases are failing. Hidden test cases are used to evaluate if your code can handle different scenarios, including corner cases.",hiddenTestCaseTooltip:"Hidden test case",layout:K.a.VERTICAL,showScrollToBottomBtn:!1});var ge=he;a("6bRd");const Te=e=>{const t=e.liveStatus,a=e.statusCode,s=e.analyticsAttributes,l=e.bingChallenge,c=e.isCustomTestcase,o=e.fetchTestcase,d=e.testcases,u=e.getHiddenTestcases,m=e.handleDownload,p=e.handleUnlock,h=e.unlockTestcaseMessage,g=e.shouldUnlockHiddenTestcase,T=e.type,E=e.id,v=e.allTestCasesCompiledTitle,f=e.tabTitle,b=e.t,C=r()(e,["liveStatus","statusCode","analyticsAttributes","bingChallenge","isCustomTestcase","fetchTestcase","testcases","getHiddenTestcases","handleDownload","handleUnlock","unlockTestcaseMessage","shouldUnlockHiddenTestcase","type","id","allTestCasesCompiledTitle","tabTitle","t"]),w=B("TEST_CASE_TITLE",b),_=1===a,N={id:E,"aria-describedby":E&&!_?E+"-progressbar":void 0,"aria-busy":!_||void 0};return i.a.createElement("div",n()({className:"testcase-wrapper theme-m"},N),!_&&i.a.createElement("span",{role:"alert",className:"sr-only","aria-label":!_&&t?t.liveMessage:v}),1===a?i.a.createElement(i.a.Fragment,null,i.a.createElement(ge,n()({analyticsAttributes:s,bingChallenge:l,isCustomTestcase:c,fetchTestcase:o,layout:"vertical",testcases:d,getHiddenTestcases:u,handleDownload:m,handleUnlock:p,unlockTestcaseMessage:h,shouldUnlockHiddenTestcase:g,type:T,t:b,tabTitle:f,testcasesTitle:w},C))):i.a.createElement("div",{className:"tc-live-status-wrapper"},i.a.createElement(ee,n()({},t,{isCustomTestcase:c,parentId:E,testcasesTitle:w}))))};Te.defaultProps={statusCode:0,allTestCasesCompiledTitle:S.ALL_TESTCASES_COMPILED};var Ee=Te;a.d(t,"a",(function(){return Ee}))},v7MN:function(e,t,a){},wMOa:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),l=a("MVZn"),r=a.n(l),c=a("QILm"),i=a.n(c),o=a("cDcd"),d=a.n(o);a("Jkfs");t.a=e=>{let t=e.className,a=void 0===t?"":t,s=i()(e,["className"]);return s=r()({},s,{className:a+" ui-svg-icon"}),d.a.createElement("svg",n()({viewBox:"0 0 24 24",width:"1em",height:"1em"},s,{fill:"currentColor"}),d.a.createElement("path",{d:"M17.9 13c-.5 2.9-3 5-5.9 5-3.3 0-6-2.7-6-6s2.7-6 6-6c2.1 0 4.1 1.2 5.2 3H14v2h6V4h-2v2.7C16.5 5 14.3 4 12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c4 0 7.4-2.9 7.9-6.9V13h-2z"}))}},wjcL:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),l=a("MVZn"),r=a.n(l),c=a("QILm"),i=a.n(c),o=a("cDcd"),d=a.n(o);a("Jkfs");t.a=e=>{let t=e.className,a=void 0===t?"":t,s=i()(e,["className"]);return s=r()({},s,{className:a+" ui-svg-icon"}),d.a.createElement("svg",n()({viewBox:"0 0 24 24",width:"1em",height:"1em"},s,{fill:"currentColor"}),d.a.createElement("path",{d:"M10.1 5.2c.6-.1 1.3-.2 1.9-.2 5.4 0 8.9 5.4 9.9 7-.5.9-1.1 1.8-1.8 2.5-.4.4-.3 1.1.1 1.4.2.2.4.2.6.2.3 0 .6-.1.8-.4.9-1 1.6-2.2 2.3-3.4.2-.3.2-.6 0-.9C23.7 11.2 19.5 3 12 3c-.8 0-1.6.1-2.3.3-.6.1-.9.6-.8 1.2s.7.8 1.2.7zm13.6 17.1L1.7.3C1.3-.1.7-.1.3.3s-.4 1 0 1.4L4.6 6C2.8 7.6 1.3 9.4.1 11.5c-.2.3-.2.6 0 .9.2.4 4.4 8.6 11.9 8.6 2.1 0 4.1-.6 5.8-1.8l4.5 4.5c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zM10 11.4l2.5 2.5c-.7.2-1.4.1-2-.4-.4-.4-.6-.9-.6-1.4 0-.2.1-.4.1-.7zm2 7.6c-5.4 0-8.9-5.4-9.9-7 1-1.8 2.3-3.3 3.9-4.6L8.5 10c-.4.7-.6 1.5-.6 2.3 0 1.1.5 2.1 1.3 2.8.8.7 1.7 1.1 2.7 1.1.7 0 1.5-.2 2.1-.6l2.3 2.3C15 18.6 13.5 19 12 19z"}))}},"z+vl":function(e,t,a){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/modules~hackerrank_r_challenge-f2956faf.js.map