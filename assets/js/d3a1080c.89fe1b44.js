"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5475],{35318:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(27378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),g=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=g(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=g(t),p=r,u=d["".concat(i,".").concat(p)]||d[p]||c[p]||s;return t?n.createElement(u,l(l({ref:a},m),{},{components:t})):n.createElement(u,l({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=p;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var g=2;g<s;g++)l[g]=t[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},96381:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(27378);const r=function(e){const{name:a,pathUrl:t}=e;return n.createElement("a",{href:`${t}`,className:"fancy-link"},n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#urlIcon"})),a)}},39881:(e,a,t)=>{t.d(a,{Z:()=>v});var n=t(27378),r=t(3956);function s(e){const{className:a,path:t,imgSrc:r,text:s,gameID:l}=e;return n.createElement("li",{className:a},n.createElement("a",{href:t},n.createElement("span",{className:"game-info"},n.createElement("img",{src:r})," ",s),n.createElement("span",{className:"game-id"},"Game ID: ",n.createElement("span",null,l))))}const l=function(e){const{gameListData:a,urlAsDocsPath:t}=e,l=function(e,a){return e.map((e=>{let t="game "+(0,r.F)(e.state);return n.createElement(s,{key:e.id,gameID:e.displayId||e.id,className:t,path:a?e.docs:e.path,imgSrc:e.iconUrl,text:e.name})}))}(a,t);return l.sort(((e,a)=>e.props.text<a.props.text?-1:1)),n.createElement("article",null,n.createElement("div",{className:"gep-games-list"},n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some game events may be unavailable"),n.createElement("li",{className:"bad"},"Game events are currently unavailable")),n.createElement("ul",{className:"list"},l)))};var o=t(71982),i=t(63810);const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPXSURBVHgBjVVNTBNBFH6zlNoEgohCMdKmCT1gQLrIhR+jlINwIRDxKmCiB+UgF6M3MB4M8WA46EUTwYsnDNyAgzQGCIQQigEhEWJDiVBKoJWfSKE7vjd2N8t2S/iSzc6+nXlv3ve+N8PgFMhyTfaxEuvgjN0C4C7g4CI7A4igzc+4MmCR+KDfPxlI5YOZO65wHfG0j8B5DZwFDHrTmfLCLFCa0VBcWtnBufQZh0XGf3mFbrCcs8Lh3l7SnhTO2i7ZCw63QmuTKQOUlFZ14XZe4dBm9HA+Px88DQ2Q43DC5soKxGMx4xQbA1afa3ewcCjoSwpAO084TwlHqSwyKKmrh/XFRbNMiPMazCSqZiJqQJwfK9IsB8g+LcC5jEzNS1VLK4y+e5tqaiRdUsqoJiKDi3bnG3xVaI4yM+GqtxYcsgwXnU5h29/ZhvhRTDwWq1VEycjJASfOyUL6toOr+gA2RQE5vLnWx4RiFOmX+sddfQOLWQjL42MQ3QhhsAzh7E9oQ/tHmB8eRqrqYKa/H/LcheDwyLhmHOuzrEVJl6wXLMcKa9SHJgcTn/q078P9PbGYKFkYGTrxT6UrODcnHpqjDxBTYk8kzqQmSMU5UuV93I4jDkOvu4UTPeibpJsKDPvIgs0kG50SSJbX7zTDRF+fyMIMRFtBqSdprQrsdpcEBuVsLi8jp24ovl0nVKJ3TnYKrCK6saF905vWnsgAQAQ4gYWRYai615rMNaL+6TNo7HoJZvA+ahdrjUjLszva9FlQEy2NjkKR1yuaSY/f+L0yMS4kq4IEQJ1NCiIJGxCRsAYBvSXLbhdK+IkLaFd6XsNo16uEaCGaqKNN68S5X2KM+fQ2lVMq4MyXfijHQtMuzZBlzxfzCLQR4zyFwYBkkaw9qqG8+S7ufExwrQahWlBWpHF9gQnUM0QPoTYhZ9qQlkCMD1r8fl+k+FqlDxir+bu7i04uCypUUE3mh4fEmJRFz+H+vlBMNBQSdtp5LvaDw1OGlK0n2IHepaXJgDjsiooqXGlWaRaH2XSg6fkkh2vf5wTXKmiOQ/aADWmhcRQzDfr/N2FibSQeU8oogDjstrbWInl4WaBy641KCCMFRE9gelqz0ZFd3dIG3z68F0rbDga1g1Bwr8SfL/2YEprV7oMwnt/23CtAVIEB26tBEeRgZwdy8HS9+eAhfDU0oca7onQtzk91q99Jd3Li4ukEk7vBXV0tJGk8kxKI4M7JeY/eaHrpU02kdKmTMWiDs4BzX/yI3yfOjb/YaesokMXKGlERTUgdiVzNKkANytHxwZ6tJxDwRVL5+AdS/cLHM611hQAAAABJRU5ErkJggg==",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGkSURBVHgB5VTLccIwEF0bcw4dRKkgMb8ZbpQAFUAqIB3YVJBQAaSChAqSnDjwcUpQOiBn//KWsRnHYyzZV96MRvJ6v29XIroK7Ha71WazEVQDlkphv99P4zieNJvNGJ+PVBGmSoGdJ8fpdrsdUkUYRULP81pRFI1wvEeAp8wvieV2u91XqhsAWbqGYcxwbJXYSd1ARs750LKsG9/3f0zTFBA5WA8l9hKVjvv9/vclhX896PV6n0EQ/ML5Mz7fFM4ZArofpFMB8x6GITsdkgZAowv9NQJ4qMK+VMU5AGZ91mg0jmiqTGUw5ApcKu9HihWonQ8GA1kYIAtUI5DdkjSryYATXIBqNxUU3gP0QYACySvvgKkpkKdo4Z8DNpapwCAF+CZjc5CZSEQSVNqgz8ndkXMSoMpOqVIGYCSU8WSNTkaootPpzA+Hw22iIrhfkHPl7+12+0u7giz40cPGT8cRVdzZtn1U2Sjfoixwc6fYeBx5pCc6NpUCMJD5GBtnrrqE9QKAFp6uF9Ic4coBTkamudDWpRrg5vK06OjWCsDAWK7pKvAH4L+rVOSAJHgAAAAASUVORK5CYII=";var d;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}const p=e=>{let{title:a,titleId:t,...r}=e;return n.createElement("svg",c({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},r),a?n.createElement("title",{id:t},a):null,d||(d=n.createElement("circle",{cx:8,cy:8,r:7})))};const u=function(e){const{name:a,platformStatus:t,electronStatus:s}=e;return n.createElement("div",{className:"row"},n.createElement("div",{className:"text"},a),n.createElement("div",{className:`status ${(0,r.F)(t??0)}`},n.createElement(p,null)),n.createElement("div",{className:`status ${(0,r.F)(s??0)}`},n.createElement(p,null)))};function h(e){return n.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:e=>{e.preventDefault()}},n.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:e=>{!function(e){const a=e.target,t=document.querySelectorAll(".game-data .body"),n=a.value.toLowerCase();0===n.length?t.forEach((e=>e.removeAttribute("style"))):t.forEach((function(e){const a=e.querySelector(".text")?.textContent?.toLowerCase();a?.includes(n)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),n.createElement("button",{type:"submit",className:"search-submit",title:"Search"},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"../../img/sprite.svg#searchIcon"}))))}const f=function(e){const{gameStatusData:a,gameId:t,endOfLife:r}=e,s=e=>{if(!a.features||0===a.features.length)return n.createElement(u,{name:"Coming soon"});const t=[];for(let r of a.features)for(let a of r.keys)a.type==e&&t.push(n.createElement(u,{name:a.name,platformStatus:a.state,electronStatus:a.state}));return t},l=s(0),o=s(1);return n.createElement("article",null,n.createElement("div",{className:"entry-content"},n.createElement("div",{className:"gep-game"},n.createElement(i.Z,{gameId:t,page:"status"}),!r&&n.createElement(n.Fragment,null,n.createElement(h,null),n.createElement("div",{className:"game-events-info"},n.createElement("div",{className:"game-data"},n.createElement("div",{className:"table"},n.createElement("div",{className:"row"},n.createElement("h4",{className:"title"},"Events"),n.createElement("img",{className:"icon",alt:"Overwolf Platform",title:"Overwolf Platform",src:m}),n.createElement("img",{className:"icon",alt:"Overwolf Electron",title:"Overwolf Electron",src:g})),l)),n.createElement("div",{className:"game-data"},n.createElement("div",{className:"table"},n.createElement("div",{className:"row"},n.createElement("h4",{className:"title"},"Info updates"),n.createElement("img",{className:"icon",alt:"Overwolf Platform",title:"Overwolf Platform",src:m}),n.createElement("img",{className:"icon",alt:"Overwolf Electron",title:"Overwolf Electron",src:g})),o)))))))};var w=t(38587);const v=function(e){const{allGames:a,specificGame:t,gameId:r,docsPath:s,urlAsDocsPath:i=!1,onlyGames:g=!1,onlyLaunchers:m=!1,endOfLife:d}=e,[c,p]=(0,n.useState)(null),[u,h]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(a){async function e(){await fetch("https://game-events-status.overwolf.com/all_prod.json").then((e=>e.json())).then((e=>{const a=[];for(const t of e)o[t.game_id]&&(g&&o[t.game_id].games||m&&!o[t.game_id].launcher||(o[t.game_id].state=o[t.game_id].endOfLife?0:t.state,a.push(o[t.game_id])));p(a)}))}e()}if(t){async function n(){await fetch(`https://game-events-status.overwolf.com/${r}_prod.json`).then((e=>e.json())).then((e=>h(e)))}n()}}),[]),null!=c||null!=u?n.createElement(n.Fragment,null,a&&null!=c&&n.createElement(l,{gameListData:c,urlAsDocsPath:i}),t&&null!=u&&n.createElement(f,{gameStatusData:u,gameId:r,docsPath:s,endOfLife:d})):n.createElement(w.Z,null)}},3956:(e,a,t)=>{t.d(a,{B:()=>l,F:()=>r});const n={[-1]:"Deprecated",0:"unsupported",1:"good",2:"medium",3:"bad"},r=e=>n[e],s={[-1]:"Deprecated",0:"Coming soon",1:"Good to go",2:"Some events may be unavailable",3:"Events are currently unavailable"},l=e=>s[e]},63810:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(27378),r=t(71982),s=t(3956),l=t(96381);const o=function(e){const{metaData:a,type:t,disabledLinks:r,hasElectron:s}=e,{id:o,displayId:i,path:g,docs:m,compliance:d,variant:c}=a;t||c||console.error("No variant was defined for this game!",a);const p=c??t,u=s?`${t} (Electron)`:c?`${t} (${p})`:`${t} (Platform)`;return n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement("span",null,u," ID: "),i??o),i&&n.createElement("p",null,n.createElement("span",null,"Tracking ID: "),o),!r.docs&&m&&n.createElement(l.Z,{name:`${p} API docs`,pathUrl:m}),!r.status&&g&&n.createElement(l.Z,{name:`${p} events status`,pathUrl:g}),!r.compliance&&d&&n.createElement(l.Z,{name:`${p} compliance page`,pathUrl:d}))};const i=function(e){const{gamesListData:a}=e,[t,s]=(0,n.useState)(!1),[l,i]=(0,n.useState)(0),g=(0,n.useRef)(null),m=a.map((e=>{const a=r[e];return n.createElement("li",null,n.createElement("h3",null,n.createElement("img",{src:a.iconLargeUrl}),n.createElement("span",null,a.name)),n.createElement(o,{metaData:a,type:"Game",disabledLinks:{docs:!1,status:!1,compliance:!1}}))}));function d(){t?(i(0),s(!1)):(i(g.current.querySelector("ul").clientHeight),s(!0))}return n.createElement("div",{className:"expended-launcher-game-list "+(t?"is-open":"")},n.createElement("button",{className:"expend-btn",onClick:d},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"/img/sprite.svg#gamesIcon"})),"Launcher's supported games list",n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#arrowDown"}))),n.createElement("div",{className:"launcher-game-list-inner",ref:g,style:{height:l+"px"}},n.createElement("ul",{className:"launcher-game-list"},m),n.createElement("button",{className:"hide-button",onClick:d},"Hide List")))};const g=function(e){const{gameState:a,endOfLife:t}=e;return n.createElement("div",{className:"status-tooltip-trigger"},n.createElement("div",{className:"status-tooltip"},n.createElement("span",null,(0,s.B)(t?-1:a))))};var m=t(38587);function d(e,a){return void 0===a&&(a={docs:!1,status:!1,compliance:!1}),a[e]=!0,a}const c=function(e){const{gameId:a,page:t}=e,[l,c]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){await fetch(`https://game-events-status.overwolf.com/${a}_prod.json`).then((e=>e.json())).then((e=>c(e.state)))}()}),[]);const p=r[a],u=r[p?.launcher],h=p?.games,f=r[p?.mainVariant],w=p?.subVariants;return null!==l?n.createElement("section",{className:"game-info-section"},n.createElement("div",{className:"game-info-item"},n.createElement("h1",{className:`game-info-title ${(0,s.F)(p.endOfLife?0:l)}`},n.createElement("img",{src:p.iconLargeUrl}),n.createElement("span",null,p.name),n.createElement(g,{gameState:l,endOfLife:p.endOfLife})),n.createElement("ul",{className:"game-info-groups"},p.endOfLife&&n.createElement("li",{style:{paddingTop:"10px"}},n.createElement("h1",null,"This game is nearing its end of life, and support will be fully removed at ",p.endOfLife)),n.createElement("li",{className:"main"},n.createElement(o,{metaData:p,type:"Game",disabledLinks:d(t)})),n.createElement("li",{className:"main"},n.createElement(o,{metaData:p,type:"Game",hasElectron:!0,disabledLinks:d(t)})),f&&n.createElement(n.Fragment,null,n.createElement("li",null,n.createElement(o,{metaData:f,type:"Game",disabledLinks:{docs:!1,status:!1,compliance:!1}}))),w&&w.map((e=>{const a=r[e];return n.createElement("li",{key:e},n.createElement(o,{metaData:a,type:"Game",disabledLinks:(t=p,s=a,{docs:t.docs===s.docs,compliance:t.compliance===s.compliance,status:t.path===s.path})}));var t,s})),u&&n.createElement("li",null,n.createElement(o,{metaData:u,type:"Launcher",disabledLinks:{docs:!1,status:!1,compliance:!1}})))),h?.length&&n.createElement(i,{gamesListData:h}),"status"===t&&n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some events may be unavailable"),n.createElement("li",{className:"bad"},"Events are currently unavailable"))):n.createElement(m.Z,{small:!0})}},38587:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(27378);const r=function(e){const{small:a}=e;return n.createElement("div",{className:"preloader "+(a?"small":"")},n.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"https://www.w3.org/2000/svg"},n.createElement("path",{d:"M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1",stroke:"white",strokeWidth:"2"})),n.createElement("span",null,"Loading..."))}},86058:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=t(25773),r=(t(27378),t(35318)),s=t(39881);const l={id:"ids",image:"/img/embed/api-docs.jpg",title:"Games IDs",sidebar_label:"Games IDs",sidebar_position:-3,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"api/games/ids",id:"api/games/ids",title:"Games IDs",description:"What is an Overwolf Supported Game?",source:"@site/../pages/api/games/ids.mdx",sourceDirName:"api/games",slug:"/api/games/ids",permalink:"/api/games/ids",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/games/ids.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1720601842,formattedLastUpdatedAt:"Jul 10, 2024",sidebarPosition:-3,frontMatter:{id:"ids",image:"/img/embed/api-docs.jpg",title:"Games IDs",sidebar_label:"Games IDs",sidebar_position:-3,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.games API",permalink:"/api/games/"},next:{title:"overwolf.games.events API",permalink:"/api/games/events/"}},g={},m=[{value:"What is an Overwolf Supported Game?",id:"what-is-an-overwolf-supported-game",level:2},{value:"What is the Game ID",id:"what-is-the-game-id",level:2},{value:"The gamelist.xml file",id:"the-gamelistxml-file",level:2},{value:"Game-ID and Instance-ID",id:"game-id-and-instance-id",level:2},{value:"Games with game events support",id:"games-with-game-events-support",level:2},{value:"Game launcher IDs",id:"game-launcher-ids",level:2}],d={toc:m};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-an-overwolf-supported-game"},"What is an Overwolf Supported Game?"),(0,r.kt)("p",null,'In Overwolf, when we refer to a "supported game" it could mean one of two levels of support:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Overlay support - games that support overlay injection.\nIn these games, we can display OW apps as an overlay, and make use of Overwolf APIs.\nThe full list of games that support overlay injection can be found in the ",(0,r.kt)("a",{parentName:"p",href:"#the-gamelistxml-file"},"gamelist.xml")," file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Game events support - games which support overlay injection as well as real-time game events.\nYou can create OW apps for these games, that leverage game events using the ",(0,r.kt)("a",{parentName:"p",href:"/api"},"overwolf.games.events")," API.\nThe full list of games that supports events can be found ",(0,r.kt)("a",{parentName:"p",href:"/status/"},"here"),"."),(0,r.kt)("admonition",{parentName:"li",title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Game events can vary between games. If you'd like us to enable a new game event, you can request it as a ",(0,r.kt)("a",{parentName:"p",href:"/support/request-a-feature"},"new feature"),".")))),(0,r.kt)("h2",{id:"what-is-the-game-id"},"What is the Game ID"),(0,r.kt)("p",null,"Each ",(0,r.kt)("a",{parentName:"p",href:"#what-is-an-overwolf-supported-game"},"supported game")," has its own unique Game ID."),(0,r.kt)("p",null,"Game IDs are used in your app\u2019s manifest.json in multiple ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../manifest#game_targeting"},"game_targeting")," property - A list of games which enable overlay for this app.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../manifest#game_events"},"game_events")," property - A list of games for which game events are required.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../manifest#launch_events"},"launch_events")," property -  A list of games triggering the app to launch."))),(0,r.kt)("h2",{id:"the-gamelistxml-file"},"The gamelist.xml file"),(0,r.kt)("p",null,"We support overlay injection in a vast and growing number of games.\nThe list is kept up to date, and you can find it in your local Overwolf app data folder after installing Overwolf."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to your ",(0,r.kt)("inlineCode",{parentName:"p"},"%localappdata%")," folder and open the ",(0,r.kt)("inlineCode",{parentName:"p"},"overwolf")," folder.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Game List XML file (named with a number postfix, for example, gamelistXXX.xml, higher number means newer version), and search your game by name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under each game, you can find game ID listed.\nIf you didn\u2019t find the game you need, ",(0,r.kt)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),"."))),(0,r.kt)("h2",{id:"game-id-and-instance-id"},"Game-ID and Instance-ID"),(0,r.kt)("p",null,'A single game can have multiple executables: Steam, GOG, 32 / 64-bit clients, etc.\nWe differentiate between them by adding one digit to each game ID, which is called an "Instance ID."\nBasically, you have the base game ID, and then a series of instances (212160, 212161, \u2026)'),(0,r.kt)("p",null,"When you call ",(0,r.kt)("a",{parentName:"p",href:"../games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated"),' you will get the same full ID including the instance ID.\nBesides, there is a file called "gamelist.xml" in the OW client folder that contains all the supported game ids, including instance ID.\nIn order to translate the instance ID into the game ID that needs to be used in the manifest, you can divide the instance ID by 10 and round down.'),(0,r.kt)("p",null,"For example for Fortnite: in order to get 21216 instead of 212161, you can do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Math.floor(gameInfoResult.gameInfo.id/10)\n")),(0,r.kt)("p",null,"You can see how we use it in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overwolf/events-sample-apps/blob/master/fortnite-sample-app/main.js#L81"},"Fortnite events sample")," app."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("a",{parentName:"p",href:"../games#runninggameinfo-object"},"RunningGameInfo object")," also has a ",(0,r.kt)("inlineCode",{parentName:"p"},"classId")," property, which already equals the game ID."),(0,r.kt)("h2",{id:"games-with-game-events-support"},"Games with game events support"),(0,r.kt)(s.Z,{allGames:!0,onlyGames:!0,mdxType:"EventsData"}),(0,r.kt)("h2",{id:"game-launcher-ids"},"Game launcher IDs"),(0,r.kt)("p",null,"IDs for Launchers such as the League of Legends launcher can be found ",(0,r.kt)("a",{parentName:"p",href:"launchers/ids"},"here"),"."))}c.isMDXComponent=!0},71982:e=>{e.exports=JSON.parse('{"765":{"id":765,"path":"/status/world-of-warcraft","name":"World of Warcraft","rawPath":"world-of-warcraft","standardPath":"world-of-warcraft","docs":"/api/live-game-data/supported-games/world-of-warcraft","iconUrl":"/img/game-logos/world-of-warcraft.png","iconLargeUrl":"/img/game-logos/large/world-of-warcraft.png"},"5426":{"id":5426,"launcher":10902,"path":"/status/league-of-legends","name":"League of Legends","rawPath":"league-of-legends","standardPath":"league-of-legends","docs":"/api/live-game-data/supported-games/league-of-legends","iconUrl":"/img/game-logos/league-of-legends.png","iconLargeUrl":"/img/game-logos/large/league-of-legends.png"},"5855":{"id":5855,"path":"/status/starcraft-2","name":"StarCraft II","rawPath":"starcraft-2","standardPath":"starcraft-2","docs":"/api/live-game-data/supported-games/starcraft-2","iconUrl":"/img/game-logos/starcraft-2.png","iconLargeUrl":"/img/game-logos/large/starcraft-2.png"},"6350":{"id":6350,"path":"/status/final-fantasy-xiv","name":"Final Fantasy XIV","rawPath":"final-fantasy-xiv","standardPath":"final-fantasy-xiv","docs":"/api/live-game-data/supported-games/final-fantasy-xiv","iconUrl":"/img/game-logos/final-fantasy-xiv.png","iconLargeUrl":"/img/game-logos/large/final-fantasy-xiv.png"},"6365":{"id":6365,"path":"/status/world-of-tanks","name":"World of Tanks","rawPath":"world-of-tanks","standardPath":"world-of-tanks","docs":"/api/live-game-data/supported-games/world-of-tanks","iconUrl":"/img/game-logos/world-of-tanks.png","iconLargeUrl":"/img/game-logos/large/world-of-tanks.png"},"7212":{"id":7212,"path":"/status/path-of-exile","name":"Path of Exile","rawPath":"path-of-exile","standardPath":"path-of-exile","docs":"/api/live-game-data/supported-games/path-of-exile","iconUrl":"/img/game-logos/path-of-exile.png","iconLargeUrl":"/img/game-logos/large/path-of-exile.png"},"7314":{"id":7314,"path":"/status/dota-2","name":"Dota 2","rawPath":"dota-2","standardPath":"dota-2","docs":"/api/live-game-data/supported-games/dota-2","iconUrl":"/img/game-logos/dota-2.png","iconLargeUrl":"/img/game-logos/large/dota-2.png"},"8032":{"id":8032,"path":"/status/minecraft","name":"Minecraft","rawPath":"minecraft","standardPath":"minecraft","docs":"/api/live-game-data/supported-games/minecraft","iconUrl":"/img/game-logos/minecraft.png","iconLargeUrl":"/img/game-logos/large/minecraft.png"},"8954":{"id":8954,"path":"/status/warframe","name":"Warframe","rawPath":"warframe","standardPath":"warframe","docs":"/api/live-game-data/supported-games/warframe","iconUrl":"/img/game-logos/warframe.png","iconLargeUrl":"/img/game-logos/large/warframe.png"},"9898":{"id":9898,"path":"/status/hearthstone","name":"Hearthstone","rawPath":"hearthstone","standardPath":"hearthstone","docs":"/api/live-game-data/supported-games/hearthstone","iconUrl":"/img/game-logos/hearthstone.png","iconLargeUrl":"/img/game-logos/large/hearthstone.png"},"10624":{"id":10624,"path":"/status/heroes-of-the-storm","name":"Heroes of the Storm","rawPath":"heroes-of-the-storm","standardPath":"heroes-of-the-storm","docs":"/api/live-game-data/supported-games/heroes-of-the-storm","iconUrl":"/img/game-logos/heroes-of-the-storm.png","iconLargeUrl":"/img/game-logos/large/heroes-of-the-storm.png"},"10746":{"id":10746,"path":"/status/world-of-warships","name":"World of Warships","rawPath":"world-of-warships","standardPath":"world-of-warships","docs":"/api/live-game-data/supported-games/world-of-warships","iconUrl":"/img/game-logos/world-of-warships.png","iconLargeUrl":"/img/game-logos/large/world-of-warships.png"},"10798":{"id":10798,"path":"/status/rocket-league","name":"Rocket League","rawPath":"rocket-league","standardPath":"rocket-league","docs":"/api/live-game-data/supported-games/rocket-league","iconUrl":"/img/game-logos/rocket-league.png","iconLargeUrl":"/img/game-logos/large/rocket-league.png"},"10826":{"id":10826,"path":"/status/rainbow-six-siege","name":"Rainbow Six Siege","rawPath":"rainbow-six-siege","standardPath":"rainbow-six-siege","docs":"/api/live-game-data/supported-games/rainbow-six-siege","iconUrl":"/img/game-logos/rainbow-six-siege.png","iconLargeUrl":"/img/game-logos/large/rainbow-six-siege.png"},"10844":{"id":10844,"path":"/status/overwatch-2","name":"Overwatch 2","rawPath":"overwatch-2","standardPath":"overwatch-2","docs":"/api/live-game-data/supported-games/overwatch-2","iconUrl":"/img/game-logos/overwatch-2.png","iconLargeUrl":"/img/game-logos/large/overwatch-2.png"},"10902":{"id":10902,"games":[5426,21570,215701,21556,215561],"path":"/status/launchers/league-of-legends","name":"League of Legends Launcher","rawPath":"league-of-legends","standardPath":"launchers/league-of-legends","docs":"/api/live-game-data/supported-launchers/league-of-legends","iconUrl":"/img/game-logos/launchers/league-of-legends.png","iconLargeUrl":"/img/game-logos/large/launchers/league-of-legends.png"},"10906":{"id":10906,"path":"/status/player-unknowns-battlegrounds","name":"PlayerUnknown\'s Battlegrounds","rawPath":"player-unknowns-battlegrounds","standardPath":"player-unknowns-battlegrounds","docs":"/api/live-game-data/supported-games/player-unknowns-battlegrounds","iconUrl":"/img/game-logos/player-unknowns-battlegrounds.png","iconLargeUrl":"/img/game-logos/large/player-unknowns-battlegrounds.png"},"21216":{"id":21216,"path":"/status/fortnite","name":"Fortnite","rawPath":"fortnite","standardPath":"fortnite","docs":"/api/live-game-data/supported-games/fortnite","iconUrl":"/img/game-logos/fortnite.png","iconLargeUrl":"/img/game-logos/large/fortnite.png"},"21308":{"id":21308,"path":"/status/magic-the-gathering-arena","name":"Magic: The Gathering Arena","rawPath":"magic-the-gathering-arena","standardPath":"magic-the-gathering-arena","docs":"/api/live-game-data/supported-games/magic-the-gathering-arena","iconUrl":"/img/game-logos/magic-the-gathering-arena.png","iconLargeUrl":"/img/game-logos/large/magic-the-gathering-arena.png"},"21404":{"id":21404,"path":"/status/splitgate-arena-warfare","name":"Splitgate: Arena Warfare","rawPath":"splitgate-arena-warfare","standardPath":"splitgate-arena-warfare","docs":"/api/live-game-data/supported-games/splitgate-arena-warfare","iconUrl":"/img/game-logos/splitgate-arena-warfare.png","iconLargeUrl":"/img/game-logos/large/splitgate-arena-warfare.png"},"21556":{"id":21556,"displayId":5426,"launcher":10902,"subVariants":[215561],"path":"/status/league-of-legends-arena","name":"League of Legends: Arena","rawPath":"league-of-legends-arena","standardPath":"league-of-legends-arena","docs":"/api/live-game-data/supported-games/league-of-legends-arena","iconUrl":"/img/game-logos/league-of-legends-arena.png","iconLargeUrl":"/img/game-logos/large/league-of-legends-arena.png"},"21566":{"id":21566,"path":"/status/apex-legends","name":"Apex Legends","rawPath":"apex-legends","standardPath":"apex-legends","docs":"/api/live-game-data/supported-games/apex-legends","iconUrl":"/img/game-logos/apex-legends.png","iconLargeUrl":"/img/game-logos/large/apex-legends.png"},"21570":{"id":21570,"displayId":5426,"launcher":10902,"subVariants":[215701],"path":"/status/teamfight-tactics","name":"Teamfight Tactics","rawPath":"teamfight-tactics","standardPath":"teamfight-tactics","docs":"/api/live-game-data/supported-games/teamfight-tactics","iconUrl":"/img/game-logos/teamfight-tactics.png","iconLargeUrl":"/img/game-logos/large/teamfight-tactics.png"},"21620":{"id":21620,"path":"/status/legends-of-runeterra","name":"Legends of Runeterra","rawPath":"legends-of-runeterra","standardPath":"legends-of-runeterra","docs":"/api/live-game-data/supported-games/legends-of-runeterra","iconUrl":"/img/game-logos/legends-of-runeterra.png","iconLargeUrl":"/img/game-logos/large/legends-of-runeterra.png"},"21634":{"id":21634,"path":"/status/escape-from-tarkov","name":"Escape From Tarkov","rawPath":"escape-from-tarkov","standardPath":"escape-from-tarkov","docs":"/api/live-game-data/supported-games/escape-from-tarkov","iconUrl":"/img/game-logos/escape-from-tarkov.png","iconLargeUrl":"/img/game-logos/large/escape-from-tarkov.png"},"21640":{"id":21640,"path":"/status/valorant","name":"Valorant","rawPath":"valorant","standardPath":"valorant","docs":"/api/live-game-data/supported-games/valorant","iconUrl":"/img/game-logos/valorant.png","iconLargeUrl":"/img/game-logos/large/valorant.png"},"21656":{"id":21656,"path":"/status/genshin-impact","name":"Genshin Impact","rawPath":"genshin-impact","standardPath":"genshin-impact","docs":"/api/live-game-data/supported-games/genshin-impact","iconUrl":"/img/game-logos/genshin-impact.png","iconLargeUrl":"/img/game-logos/large/genshin-impact.png"},"21672":{"id":21672,"path":"/status/eternal-return","name":"Eternal Return","rawPath":"eternal-return","standardPath":"eternal-return","docs":"/api/live-game-data/supported-games/eternal-return","iconUrl":"/img/game-logos/eternal-return.png","iconLargeUrl":"/img/game-logos/large/eternal-return.png"},"21816":{"id":21816,"path":"/status/new-world","name":"New World","rawPath":"new-world","standardPath":"new-world","docs":"/api/live-game-data/supported-games/new-world","iconUrl":"/img/game-logos/new-world.png","iconLargeUrl":"/img/game-logos/large/new-world.png"},"21848":{"id":21848,"path":"/status/diablo-2-resurrected","name":"Diablo 2 Resurrected","rawPath":"diablo-2-resurrected","standardPath":"diablo-2-resurrected","docs":"/api/live-game-data/supported-games/diablo-2-resurrected","iconUrl":"/img/game-logos/diablo-2-resurrected.png","iconLargeUrl":"/img/game-logos/large/diablo-2-resurrected.png"},"21854":{"id":21854,"path":"/status/halo-infinite","name":"Halo Infinite","rawPath":"halo-infinite","standardPath":"halo-infinite","docs":"/api/live-game-data/supported-games/halo-infinite","iconUrl":"/img/game-logos/halo-infinite.png","iconLargeUrl":"/img/game-logos/large/halo-infinite.png"},"21864":{"id":21864,"path":"/status/lost-ark","name":"Lost Ark","rawPath":"lost-ark","standardPath":"lost-ark","docs":"/api/live-game-data/supported-games/lost-ark","iconUrl":"/img/game-logos/lost-ark.png","iconLargeUrl":"/img/game-logos/large/lost-ark.png"},"21876":{"id":21876,"path":"/status/call-of-duty-vanguard","name":"Call of Duty: Vanguard","rawPath":"call-of-duty-vanguard","standardPath":"call-of-duty-vanguard","docs":"/api/live-game-data/supported-games/call-of-duty-vanguard","iconUrl":"/img/game-logos/call-of-duty-vanguard.png","iconLargeUrl":"/img/game-logos/large/call-of-duty-vanguard.png"},"22088":{"id":22088,"path":"/status/baldurs-gate-3","name":"Baldur\'s Gate 3","rawPath":"baldurs-gate-3","standardPath":"baldurs-gate-3","docs":"/api/live-game-data/supported-games/baldurs-gate-3","iconUrl":"/img/game-logos/baldurs-gate-3.png","iconLargeUrl":"/img/game-logos/large/baldurs-gate-3.png"},"22328":{"id":22328,"path":"/status/call-of-duty-modern-warfare-2","name":"Call of Duty: Modern Warfare 2","rawPath":"call-of-duty-modern-warfare-2","standardPath":"call-of-duty-modern-warfare-2","docs":"/api/live-game-data/supported-games/call-of-duty-modern-warfare-2","iconUrl":"/img/game-logos/call-of-duty-modern-warfare-2.png","iconLargeUrl":"/img/game-logos/large/call-of-duty-modern-warfare-2.png"},"22638":{"id":22638,"path":"/status/sons-of-the-forest","name":"Sons of the Forest","rawPath":"sons-of-the-forest","standardPath":"sons-of-the-forest","docs":"/api/live-game-data/supported-games/sons-of-the-forest","iconUrl":"/img/game-logos/sons-of-the-forest.png","iconLargeUrl":"/img/game-logos/large/sons-of-the-forest.png"},"22700":{"id":22700,"path":"/status/diablo-4","name":"Diablo 4","rawPath":"diablo-4","standardPath":"diablo-4","docs":"/api/live-game-data/supported-games/diablo-4","iconUrl":"/img/game-logos/diablo-4.png","iconLargeUrl":"/img/game-logos/large/diablo-4.png"},"22730":{"id":22730,"path":"/status/counter-strike-2","name":"Counter-Strike 2","rawPath":"counter-strike-2","standardPath":"counter-strike-2","docs":"/api/live-game-data/supported-games/counter-strike-2","iconUrl":"/img/game-logos/counter-strike-2.png","iconLargeUrl":"/img/game-logos/large/counter-strike-2.png"},"22804":{"id":22804,"path":"/status/honkai-star-rail","name":"Honkai Star Rail","rawPath":"honkai-star-rail","standardPath":"honkai-star-rail","docs":"/api/live-game-data/supported-games/honkai-star-rail","iconUrl":"/img/game-logos/honkai-star-rail.png","iconLargeUrl":"/img/game-logos/large/honkai-star-rail.png"},"22994":{"id":22994,"path":"/status/xdefiant","name":"XDefiant","rawPath":"xdefiant","standardPath":"xdefiant","docs":"/api/live-game-data/supported-games/xdefiant","iconUrl":"/img/game-logos/xdefiant.png","iconLargeUrl":"/img/game-logos/large/xdefiant.png"},"23222":{"id":23222,"path":"/status/starfield","name":"Starfield","rawPath":"starfield","standardPath":"starfield","docs":"/api/live-game-data/supported-games/starfield","iconUrl":"/img/game-logos/starfield.png","iconLargeUrl":"/img/game-logos/large/starfield.png"},"23424":{"id":23424,"path":"/status/call-of-duty-modern-warfare-3","name":"Call of Duty: Modern Warfare 3","rawPath":"call-of-duty-modern-warfare-3","standardPath":"call-of-duty-modern-warfare-3","docs":"/api/live-game-data/supported-games/call-of-duty-modern-warfare-3","iconUrl":"/img/game-logos/call-of-duty-modern-warfare-3.png","iconLargeUrl":"/img/game-logos/large/call-of-duty-modern-warfare-3.png"},"23478":{"id":23478,"path":"/status/the-finals","name":"The Finals","rawPath":"the-finals","standardPath":"the-finals","docs":"/api/live-game-data/supported-games/the-finals","iconUrl":"/img/game-logos/the-finals.png","iconLargeUrl":"/img/game-logos/large/the-finals.png"},"23522":{"id":23522,"path":"/status/lethal-company","name":"Lethal Company","rawPath":"lethal-company","standardPath":"lethal-company","docs":"/api/live-game-data/supported-games/lethal-company","iconUrl":"/img/game-logos/lethal-company.png","iconLargeUrl":"/img/game-logos/large/lethal-company.png"},"23818":{"id":23818,"path":"/status/stormgate","name":"Stormgate","rawPath":"stormgate","standardPath":"stormgate","docs":"/api/live-game-data/supported-games/stormgate","iconUrl":"/img/game-logos/stormgate.png","iconLargeUrl":"/img/game-logos/large/stormgate.png"},"23944":{"id":23944,"path":"/status/palworld","name":"Palworld","rawPath":"palworld","standardPath":"palworld","docs":"/api/live-game-data/supported-games/palworld","iconUrl":"/img/game-logos/palworld.png","iconLargeUrl":"/img/game-logos/large/palworld.png"},"24000":{"id":24000,"path":"/status/helldivers-2","name":"Helldivers 2","rawPath":"helldivers-2","standardPath":"helldivers-2","docs":"/api/live-game-data/supported-games/helldivers-2","iconUrl":"/img/game-logos/helldivers-2.png","iconLargeUrl":"/img/game-logos/large/helldivers-2.png"},"24110":{"id":24110,"path":"/status/content-warning","name":"Content Warning","rawPath":"content-warning","standardPath":"content-warning","docs":"/api/live-game-data/supported-games/content-warning","iconUrl":"/img/game-logos/content-warning.png","iconLargeUrl":"/img/game-logos/large/content-warning.png"},"24176":{"id":24176,"path":"/status/manor-lords","name":"Manor Lords","rawPath":"manor-lords","standardPath":"manor-lords","docs":"/api/live-game-data/supported-games/manor-lords","iconUrl":"/img/game-logos/manor-lords.png","iconLargeUrl":"/img/game-logos/large/manor-lords.png"},"24218":{"id":24218,"path":"/status/hades2","name":"Hades 2","rawPath":"hades2","standardPath":"hades2","docs":"/api/live-game-data/supported-games/hades2","iconUrl":"/img/game-logos/hades2.png","iconLargeUrl":"/img/game-logos/large/hades2.png"},"24300":{"id":24300,"path":"/status/wuthering-waves","name":"Wuthering Waves","rawPath":"wuthering-waves","standardPath":"wuthering-waves","docs":"/api/live-game-data/supported-games/wuthering-waves","iconUrl":"/img/game-logos/wuthering-waves.png","iconLargeUrl":"/img/game-logos/large/wuthering-waves.png"},"215561":{"id":215561,"displayId":22848,"launcher":10902,"mainVariant":21556,"docs":"/api/live-game-data/supported-games/league-of-legends-arena","path":"/status/league-of-legends-public-beta-arena","name":"League of Legends PBE: Arena","variant":"PBE","rawPath":"league-of-legends-public-beta-arena","standardPath":"league-of-legends-public-beta-arena","iconUrl":"/img/game-logos/league-of-legends-public-beta-arena.png","iconLargeUrl":"/img/game-logos/large/league-of-legends-public-beta-arena.png"},"215701":{"id":215701,"displayId":22848,"launcher":10902,"mainVariant":21570,"docs":"/api/live-game-data/supported-games/teamfight-tactics","path":"/status/teamfight-tactics-public-beta","name":"Teamfight Tactics PBE","variant":"PBE","rawPath":"teamfight-tactics-public-beta","standardPath":"teamfight-tactics-public-beta","iconUrl":"/img/game-logos/teamfight-tactics-public-beta.png","iconLargeUrl":"/img/game-logos/large/teamfight-tactics-public-beta.png"},"234241":{"id":234241,"displayId":23424,"path":"/status/call-of-duty-warzone-2-0","name":"Call of Duty: Warzone 2.0","rawPath":"call-of-duty-warzone-2-0","standardPath":"call-of-duty-warzone-2-0","docs":"/api/live-game-data/supported-games/call-of-duty-warzone-2-0","iconUrl":"/img/game-logos/call-of-duty-warzone-2-0.png","iconLargeUrl":"/img/game-logos/large/call-of-duty-warzone-2-0.png"}}')}}]);