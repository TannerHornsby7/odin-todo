(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{"7Iy7":function(e,t,n){},Bftv:function(e,t,n){"use strict";var s=n("pVnL"),r=n.n(s),i=n("MVZn"),a=n.n(i),o=n("QILm"),c=n.n(o),l=n("cDcd"),u=n.n(l);n("Jkfs");t.a=e=>{let t=e.className,n=void 0===t?"":t,s=c()(e,["className"]);return s=a()({},s,{className:n+" ui-svg-icon"}),u.a.createElement("svg",r()({viewBox:"0 0 24 24",width:"1em",height:"1em"},s,{fill:"currentColor"}),u.a.createElement("path",{d:"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"}),u.a.createElement("path",{d:"M15.7 8.3c-.4-.4-1-.4-1.4 0L12 10.6 9.7 8.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l2.3-2.3 2.3 2.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12l2.3-2.3c.4-.4.4-1 0-1.4z"}))}},CEzC:function(e,t,n){"use strict";n.r(t),n.d(t,"defaultCodeshellOpts",(function(){return o})),n.d(t,"getCodeshellUserOpts",(function(){return c})),n.d(t,"getCodeBody",(function(){return l})),n.d(t,"fetchUserPreference",(function(){return u})),n.d(t,"setUserPreference",(function(){return d})),n.d(t,"getLocalStorageValue",(function(){return h})),n.d(t,"setLocalStorageValue",(function(){return m}));var s=n("vmXh"),r=n.n(s),i=n("MrcO");const a="function"==typeof $&&$.jStorage||i.a,o={theme:"light",tabSize:4,intellisense:!0,mode:"normal",keyMap:"sublime",indentUnit:4};function c(){let e=a.get("codeshellUserOpts"),t=!1;if(e)try{e=JSON.parse(e)}catch(n){e=o,t=!0}else e=o,t=!0;return t&&a.set("codeshellUserOpts",JSON.stringify(o)),e}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,s=e;if(t.trim()&&0===s.indexOf(t)&&(s=s.substr(t.length)),n.trim()){const e=s.lastIndexOf(n);e>0&&(s=s.substr(0,e))}return s.endsWith("\n")||(s+="\n"),s}function u(e){return c()[e]}function d(e,t){const n=c(),s={vim:"vim",emacs:"emacs",normal:"sublime"};var i,o;n[e]=t,"tabSize"===e?n.indentUnit=t:"mode"===e?n.keyMap=s[t]:"intellisense"===e?(o=t,r.a.set("enableIntellisenseUserPref",o)):"theme"===e&&(i=t,r.a.set("hacker_editor_theme",{light:"light",dark:"dark",contrast:"dark"}[i]||i)),a.set("codeshellUserOpts",JSON.stringify(n))}function h(e){return a.get(e)}function m(e,t){a.set(e,t)}},Gu5L:function(e,t,n){"use strict";var s=n("pVnL"),r=n.n(s),i=n("QILm"),a=n.n(i),o=n("cDcd"),c=n.n(o),l=n("TSYQ"),u=n.n(l),d=n("KD+3"),h=n("hwBa"),m=n("2grx"),p=n("rorp"),f=n("lSNA"),v=n.n(f);const g=["value"],b={DropdownIndicator:null},S=e=>({label:e,value:e});class O extends o.Component{constructor(){var e;super(...arguments),e=this,v()(this,"state",{inputValue:""}),v()(this,"handleInputChange",e=>{this.setState({inputValue:e})}),v()(this,"handleKeyDown",e=>{const t=this.state.inputValue,n=this.props,s=n.onChange,r=n.value,i=r||[];if(t)switch(e.key){case"Enter":case"Tab":s([...i,S(t)]),this.setState({inputValue:""}),e.preventDefault()}}),v()(this,"handleBlur",(function(){const t=e.state.inputValue,n=e.props,s=n.onBlur,r=n.onChange,i=n.value,a=i||[];s&&s(...arguments),t&&(r([...a,S(t)]),e.setState({inputValue:""}))}))}render(){const e=this.state.inputValue,t=this.props,n=t.value,s=a()(t,g);return c.a.createElement(m.a,r()({},s,{isMulti:!0,components:b,inputValue:e,menuIsOpen:!1,onInputChange:this.handleInputChange,onKeyDown:this.handleKeyDown,onBlur:this.handleBlur,value:n}))}}var w=O,y=n("53eb");n("7Iy7");n.d(t,"e",(function(){return j})),n.d(t,"a",(function(){return E})),n.d(t,"c",(function(){return C})),n.d(t,"b",(function(){return D})),n.d(t,"d",(function(){return P}));const I=["error","variant","className"];function N(e){return function(t){const n=t.error,s=t.variant,i=void 0===s?"inset":s,o=t.className,l=a()(t,I);return c.a.createElement("div",{className:u()("custom-select",o)},c.a.createElement(e,r()({styles:Object(y.a)(n,i)},l)))}}const j=N(d.a),E=N(h.a),C=N(m.a),D=N(p.a),P=N(w)},MrcO:function(e,t,n){"use strict";n("rGqo");var s=n("lSNA"),r=n.n(s),i=n("eOGF");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}const o="undefined"==typeof localStorage?new class extends Object{setItem(e,t){this[e]=t}getItem(e){return this[e]}removeItem(e){delete this[e]}}:localStorage,c=new class{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r()(this,"dbName",void 0),r()(this,"namespace",void 0),r()(this,"intermediateStore",{}),r()(this,"persistentStore",void 0),r()(this,"onWindowUnload",void 0),r()(this,"flushIntervalID",void 0);const s=n.namespace,i=void 0===s?"":s,a=n.persistOnUnload,o=void 0===a||a,c=n.flushInterval,l=void 0===c?3e3:c;this.dbName=t,this.namespace=i,this.persistentStore=e,!i&&t&&this.initBaseStore(o,t),this.flushIntervalID=setInterval(()=>this.flush(),l)}initBaseStore(e,t){try{const e=this.persistentStore.getItem(t);if(e){const t=JSON.parse(e);this.intermediateStore=t}}catch(e){this.intermediateStore={}}e&&!Object(i.G)()&&window.addEventListener("beforeunload",()=>this.flush())}flush(){try{this.persistentStore.setItem(this.dbName,JSON.stringify(this.intermediateStore))}catch(e){console.error(e)}}getKey(e){return this.namespace?`${this.namespace}-${e}`:e}setItem(e,t){this.intermediateStore[this.getKey(e)]=t}getItem(e){return this.intermediateStore[this.getKey(e)]}set(e,t){return this.setItem(e,t)}get(e){return this.getItem(e)}removeItem(e){delete this.intermediateStore[this.getKey(e)]}deleteKey(e){return this.removeItem(e)}storageObj(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.intermediateStore)}index(){return Object.keys(this.intermediateStore)}removePrefix(e){Object.keys(this.intermediateStore).forEach(t=>{t.startsWith(e)&&delete this.intermediateStore[t]})}createNamespace(e){if(!e)throw new Error("Cannot create storage without namespace");const t=Object.create(this);return t.namespace=this.getKey(e),t}remove(){this.namespace&&this.removePrefix(this.namespace)}}(o,"jStorage");"undefined"!=typeof window&&(window.jStorage=c,window.$=window.$||{},window.$.jStorage=c);t.a=c},YqDo:function(e,t,n){"use strict";var s=n("pVnL"),r=n.n(s),i=n("MVZn"),a=n.n(i),o=n("QILm"),c=n.n(o),l=n("cDcd"),u=n.n(l);n("Jkfs");t.a=e=>{let t=e.className,n=void 0===t?"":t,s=c()(e,["className"]);return s=a()({},s,{className:n+" ui-svg-icon"}),u.a.createElement("svg",r()({viewBox:"0 0 36 36",width:"1em",height:"1em"},s,{fill:"currentColor"}),u.a.createElement("path",{d:"M18 0c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 14c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 14c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z",fillRule:"evenodd",clipRule:"evenodd"}))}},gNz3:function(e,t,n){},iiin:function(e,t,n){"use strict";var s=n("pVnL"),r=n.n(s),i=n("QILm"),a=n.n(i),o=n("cDcd"),c=n.n(o),l=n("TSYQ"),u=n.n(l),d=n("37OS"),h=n.n(d);n("gNz3");const m=["iconProps","size","btnText","tooltip","Icon","disabled","className"];function p(e){const t=e.iconProps,n=e.size,s=e.btnText,i=e.tooltip,o=e.Icon,l=e.disabled,d=e.className,p=a()(e,m),f=i&&!l?{"data-balloon":s,"data-balloon-pos":"up"}:{},v=l?h.a:e.onClick;return c.a.createElement("button",r()({className:u()("ui-icon-btn","ui-btn-"+n,d),disabled:l},f,p,{onClick:v}),!i&&c.a.createElement("span",{className:"sr-only"},s),c.a.createElement(o,r()({"aria-hidden":!0,focusable:"false"},t)))}p.defaultProps={iconProps:{},size:"normal",tooltip:!0,disabled:!1},t.a=p}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/modules~hackerrank_r_krackjack-f3e7d6f6.js.map