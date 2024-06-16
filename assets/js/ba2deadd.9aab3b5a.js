"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9682],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||v[d]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const i={id:"events-overview",image:"/img/embed/api-best-practices.jpg",title:"JavaScript events overview",sidebar_label:"JavaScript events overview",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},s=void 0,o={unversionedId:"topics/using-events/events-overview",id:"topics/using-events/events-overview",title:"JavaScript events overview",description:"In this basic overview we'll discuss javaScript events which fuel various Overwolf's APIs.",source:"@site/../pages/topics/using-events/events-overview.mdx",sourceDirName:"topics/using-events",slug:"/topics/using-events/events-overview",permalink:"/topics/using-events/events-overview",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-events/events-overview.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1718545651,formattedLastUpdatedAt:"Jun 16, 2024",frontMatter:{id:"events-overview",image:"/img/embed/api-best-practices.jpg",title:"JavaScript events overview",sidebar_label:"JavaScript events overview",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Using game events in your app",permalink:"/topics/using-events/"},next:{title:"Verifying event status",permalink:"/topics/using-events/how-to-check-events-status-from-app"}},l={},p=[{value:"JS Events Basics",id:"js-events-basics",level:2},{value:"addListener(callback)",id:"addlistenercallback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"removeListener(callback)",id:"removelistenercallback",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this basic overview we'll discuss javaScript events which fuel various Overwolf's APIs.  "),(0,a.kt)("p",null,"If you are familiar with JS events, and you want to learn how to use Overwolf game events, you can skip directly to the ",(0,a.kt)("a",{parentName:"p",href:"../using-events"},"how to use Overwolf game events")," guide."),(0,a.kt)("h2",{id:"js-events-basics"},"JS Events Basics"),(0,a.kt)("p",null,"An event is an object that reacts when something interesting to you happens. Here\u2019s an example of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"onStopStreaming")," event to be notified whenever a stream has stopped:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.streaming.onStopStreaming.addListener(\n    function (value) {\n        alert("a stream with id " + value.stream_id + " had stopped");\n    }\n);\n')),(0,a.kt)("p",null,"As the example shows, you register for these alerts using addListener()."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We\u2019ve seen situations where apps would register addListener multiple times for the same event \u2013 this caused the event to be triggered multiple times and causes unexpected bugs and memory leaks. Please pay attention when registering to events and prevent it."),(0,a.kt)("p",{parentName:"admonition"},"You can also unregister from an event using the removeListener() function.")),(0,a.kt)("h2",{id:"addlistenercallback"},"addListener(callback)"),(0,a.kt)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Registers a listener to an event. When the event occurs, all registered listeners are called.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callback"),(0,a.kt)("td",{parentName:"tr",align:null},"function"),(0,a.kt)("td",{parentName:"tr",align:null},"The callback function to call when the event occurs")))),(0,a.kt)("h2",{id:"removelistenercallback"},"removeListener(callback)"),(0,a.kt)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unregister a listener to an event.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callback"),(0,a.kt)("td",{parentName:"tr",align:null},"function"),(0,a.kt)("td",{parentName:"tr",align:null},"The callback should be the same function that was passed to addListener()",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"so this won\u2019t work with anonymous function"))))))}u.isMDXComponent=!0}}]);