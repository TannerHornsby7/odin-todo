(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"6ZHo":function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return E})),a.d(t,"e",(function(){return p}));var s=a("J4zp"),n=a.n(s),l=a("cDcd"),c=a.n(l),i=a("/MKj"),o=a("MGin"),r=a("sEfC"),m=a.n(r);function u(e){const t=Object(l.useRef)();return c.a.useEffect(()=>{t.current=e},[e]),t.current}function k(e){const t=Object(l.useRef)(null),a=Object(l.useState)(!0),s=n()(a,2),c=s[0],i=s[1];function o(){t.current&&(t.current.scrollWidth>t.current.clientWidth?i(!1):i(!0))}return Object(l.useEffect)(()=>{o()},[e]),Object(l.useEffect)(()=>{const e=m()(o,500);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),[t,c]}const d=()=>Object(l.useContext)(o.RouterContextMain).router.location,E=e=>{const t=Object(l.useContext)(o.RouterContextMain).router.params;return Object(i.f)(Object(l.useCallback)(a=>e(a,t),[e,t]))};function p(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=Object(l.useState)(e),a=n()(t,2),s=a[0],c=a[1],i=Object(l.useCallback)(()=>c(e=>!e));return[s,i]}},"Fsb/":function(e,t,a){},PDq2:function(e,t,a){},VQzu:function(e,t,a){},VVqX:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),l=a("J4zp"),c=a.n(l),i=a("QILm"),o=a.n(i),r=a("cDcd"),m=a.n(r),u=a("MGin"),k=a("J2iB"),d=a.n(k),E=a("YZNL"),p=a("OEX3"),b=a("6ZHo"),v=a("tWBh"),N=a("exN9"),f=a("gpaR"),g=a("j//G");a("Fsb/");t.a=function(e){const t=e.mockTest,a=t.unique_id,s=t.name,l=t.total_attempts,i=t.total_questions,r=t.status,k=t.score,T=t.skills,w=void 0===T?[]:T,h=t.report_url,O=o()(e,["mockTest"]),j=Object(b.e)(!1),M=c()(j,2),S=M[0],y=M[1],C=Object(b.e)(!1),R=c()(C,2),V=R[0],L=R[1],x=[g.a.STARTED,g.a.PROCESSING].includes(r),D=r===g.a.PASSED,P=x||D,Y={"data-event-category":"HRC Interview Prep","data-cd-mock-test-id":a,"data-attr2":a},Q=P?"RetakeMockTest":"TakeMockTest";return m.a.createElement(E.a,n()({className:"interview-mock-test-card theme-m",layer:1},O),m.a.createElement("div",{className:"mock-test-details"},m.a.createElement("h2",{className:"mock-test-title text-para-headline bold"},s),m.a.createElement("div",{className:"mock-test-stats"},m.a.createElement("span",{className:"stat-item"},"Attempts: ",m.a.createElement("strong",null,l)),m.a.createElement("span",{className:"stat-item"},"Challenges: ",m.a.createElement("strong",null,i)),m.a.createElement("span",{className:"stat-item"},"Last Score: ",m.a.createElement("strong",null,d()(k)?"-":k))),m.a.createElement("div",{className:"mock-test-skills"},"Skills: ",m.a.createElement(v.a,{className:"mock-test-skills-list",skills:w})),!P&&m.a.createElement("p",null,"Take this mock test to evaluate how much you've learned till now. You can take the test as many times as needed.")),m.a.createElement("div",{className:"mock-test-actions"},x&&m.a.createElement("button",n()({className:"btn-as-link text-link mock-test-status-btn",onClick:L},Y,{"data-event-label":"ViewMockStatus","data-analytics":"ViewMockStatus"}),"View Status"),D&&m.a.createElement(u.Link,n()({className:"text-link mock-test-report-link",to:h,target:"_blank"},Y,{"data-event-label":"ViewMockTestReport","data-analytics":"ViewMockTestReport"}),"View Report"),m.a.createElement(p.e,n()({onClick:y,className:"mock-test-cta",disabled:x},Y,{"data-event-label":Q,"data-analytics":Q}),P?"Retake":"Take Test")),S&&m.a.createElement(N.a,{onClose:y,mockTest:e.mockTest,type:"playlist"}),V&&m.a.createElement(f.a,{onClose:L,mockTestName:s,content:"We are evaluating your mock test submission. This might sometimes take up to 30 minutes."}))}},"m/YY":function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),l=a("QILm"),c=a.n(l),i=a("cDcd"),o=a.n(i),r=a("TSYQ"),m=a.n(r),u=a("OEX3");a("VQzu");t.a=function(e){const t=e.className,a=e.skill,s=c()(e,["className","skill"]),l=a.name,i=a.slug;return o.a.createElement(u.c,n()({role:"link",to:"/skills-directory/"+i,className:m()("skill-tag",t),target:"_blank"},s),l)}},tWBh:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),l=a("QILm"),c=a.n(l),i=a("cDcd"),o=a.n(i),r=a("MGin"),m=a("TSYQ"),u=a.n(m),k=a("/MKj"),d=a("61np"),E=a("OEX3"),p=a("m/YY");a("PDq2");t.a=Object(k.d)((function(e){return{isMobile:e.metadata.isMobile}}))((function(e){const t=e.skills,a=e.isMobile,s=e.visibleTags,l=void 0===s?a?1:2:s,i=e.className,m=e.skillTagProps,k=void 0===m?{}:m,b=e.extraSkillsTooltipProps,v=void 0===b?{}:b,N=e.extraSkillsBtnProps,f=void 0===N?{}:N,g=v.className,T=c()(v,["className"]),w=f.className,h=c()(f,["className"]),O=t.slice(0,l),j=t.length-l,M=t.slice(l),S=o.a.createElement("div",{className:"skills-list-tooltip-content"},o.a.createElement("ul",{className:"skills-list-tooltip-names"},M.map(e=>{let t=e.name,a=e.slug;return o.a.createElement("li",{key:a},o.a.createElement(r.Link,{className:"skills-list-tooltip-link",to:"/skills-directory/"+a,target:"_blank"},t))})));return o.a.createElement("div",{className:u()("skills-tag-list",i)},O.map(e=>o.a.createElement(p.a,n()({},k,{key:e.slug,skill:e}))),j>0&&o.a.createElement("div",null,o.a.createElement(d.a,n()({aliveTime:1500,content:S,className:u()("skills-list-tooltip",g),align:a?"right":"top"},T),o.a.createElement(E.c,n()({className:u()("extra-skills-count",w)},h),"+",j))))}))}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons~hackerrank_r_interview~hackerrank_r_interview_v2-05efe178.js.map