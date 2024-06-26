"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[6373],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var l=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),s=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,k=p["".concat(d,".").concat(m)]||p[m]||u[m]||n;return a?l.createElement(k,i(i({ref:t},c),{},{components:a})):l.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70248:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var l=a(25773),r=(a(27378),a(35318));const n={id:"discord",image:"/img/embed/api-docs.jpg",title:"overwolf.social.discord API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/social/discord",id:"api/social/discord",title:"overwolf.social.discord API",description:"Provides access to the Discord social provider.",source:"@site/../pages/api/social/discord.mdx",sourceDirName:"api/social",slug:"/api/social/discord",permalink:"/api/social/discord",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/social/discord.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1719406737,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{id:"discord",image:"/img/embed/api-docs.jpg",title:"overwolf.social.discord API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.social API",permalink:"/api/social/"},next:{title:"overwolf.social.reddit API",permalink:"/api/social/reddit"}},d={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"performUserLogin()",id:"performuserlogin",level:2},{value:"Version added: 0.115",id:"version-added-0115",level:4},{value:"performLogout(callback)",id:"performlogoutcallback",level:2},{value:"Version added: 0.115",id:"version-added-0115-1",level:4},{value:"getUserInfo(callback)",id:"getuserinfocallback",level:2},{value:"Version added: 0.115",id:"version-added-0115-2",level:4},{value:"getGuilds(callback)",id:"getguildscallback",level:2},{value:"Version added: 0.115",id:"version-added-0115-3",level:4},{value:"getChannels(guildId, callback)",id:"getchannelsguildid-callback",level:2},{value:"Version added: 0.115",id:"version-added-0115-4",level:4},{value:"share(DiscordShareParameters, callback)",id:"sharediscordshareparameters-callback",level:2},{value:"Version added: 0.115",id:"version-added-0115-5",level:4},{value:"Code Example",id:"code-example",level:4},{value:"shareEx(DiscordShareParameters, callback, callback)",id:"shareexdiscordshareparameters-callback-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198",level:4},{value:"Progress Note",id:"progress-note",level:4},{value:"Code Example",id:"code-example-1",level:4},{value:"cancelShare(string, callback)",id:"cancelsharestring-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198-1",level:4},{value:"post(DiscordPostParameters, callback)",id:"postdiscordpostparameters-callback",level:2},{value:"Version added: 0.203",id:"version-added-0203",level:4},{value:"onLoginStateChanged",id:"onloginstatechanged",level:2},{value:"Version added: 0.115",id:"version-added-0115-6",level:4},{value:"DiscordPostParameters Object",id:"discordpostparameters-object",level:2},{value:"Version added: 0.203",id:"version-added-0203-1",level:4},{value:"DiscordShareParameters Object",id:"discordshareparameters-object",level:2},{value:"Version added: 0.115",id:"version-added-0115-7",level:4},{value:"file note",id:"file-note",level:4},{value:"id note",id:"id-note",level:4},{value:"useOverwolfNotifications note",id:"useoverwolfnotifications-note",level:4},{value:"SocialShareResult Object",id:"socialshareresult-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-2",level:4},{value:"Example data",id:"example-data",level:4},{value:"SocialShareProgress Object",id:"socialshareprogress-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-3",level:4},{value:"Example data",id:"example-data-1",level:4},{value:"ShareState Enum",id:"sharestate-enum",level:2},{value:"Version added: 0.198",id:"version-added-0198-4",level:4},{value:"GetGuildsResult Object",id:"getguildsresult-object",level:2},{value:"Version added: 0.128",id:"version-added-0128",level:4},{value:"Example data: Success",id:"example-data-success",level:4},{value:"Guild Object",id:"guild-object",level:2},{value:"Version added: 0.128",id:"version-added-0128-1",level:4},{value:"Example data",id:"example-data-2",level:4},{value:"Role Object",id:"role-object",level:2},{value:"Version added: 0.128",id:"version-added-0128-2",level:4}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Provides access to the Discord social provider."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"../social#getdisabledservicescallback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.getDisabledServices()"))," method to check if the service is available.")),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#performuserlogin"},"overwolf.social.discord.performUserLogin()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#performlogoutcallback"},"overwolf.social.discord.performLogout()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getuserinfocallback"},"overwolf.social.discord.getUserInfo()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getguildscallback"},"overwolf.social.discord.getGuilds()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getchannelsguildid-callback"},"overwolf.social.discord.getChannels()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sharediscordshareparameters-callback"},"overwolf.social.discord.share()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shareexdiscordshareparameters-callback-callback"},"overwolf.social.discord.shareEx()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shareexdiscordpostparameters-callback"},"overwolf.social.discord.post()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cancelsharestring-callback"},"overwolf.social.discord.cancelShare()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onloginstatechanged"},"overwolf.social.discord.onLoginStateChanged"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#discordshareparameters-object"},"overwolf.social.discord.DiscordShareParameters")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#discordpostparameters-object"},"overwolf.social.discord.DiscordPostParameters")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#socialshareresult-object"},"overwolf.social.discord.SocialShareResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#socialshareprogress-object"},"overwolf.social.discord.SocialShareProgress")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sharestate-enum"},"overwolf.social.discord.enums.ShareState")," Enum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getguildsresult-object"},"overwolf.social.discord.GetGuildsResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#role-object"},"overwolf.social.discord.Role")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#guild-object"},"overwolf.social.discord.Guild")," Object")),(0,r.kt)("h2",{id:"performuserlogin"},"performUserLogin()"),(0,r.kt)("h4",{id:"version-added-0115"},"Version added: 0.115"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Opens the login dialog.")),(0,r.kt)("p",null,"There is no callback for this method and the only way to know if the user signed in is via ",(0,r.kt)("a",{parentName:"p",href:"#onloginstatechanged"},"onLoginStateChanged")," event."),(0,r.kt)("h2",{id:"performlogoutcallback"},"performLogout(callback)"),(0,r.kt)("h4",{id:"version-added-0115-1"},"Version added: 0.115"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Performs a "strong" sign out of Discord, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,r.kt)("h2",{id:"getuserinfocallback"},"getUserInfo(callback)"),(0,r.kt)("h4",{id:"version-added-0115-2"},"Version added: 0.115"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the user is currently logged into Discord, this will return user information, Otherwise, an error is returned.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../social#getuserinforesult-object"},"(Result: GetUserInfoResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,r.kt)("h2",{id:"getguildscallback"},"getGuilds(callback)"),(0,r.kt)("h4",{id:"version-added-0115-3"},"Version added: 0.115"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the user is currently logged into Discord, this will return the guilds that the user is registered to. Otherwise, an error is returned")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discordShareParams"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#discordshareparameters-object"},"DiscordShareParameters")," Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The share parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Will contain the status of the request")))),(0,r.kt)("h2",{id:"getchannelsguildid-callback"},"getChannels(guildId, callback)"),(0,r.kt)("h4",{id:"version-added-0115-4"},"Version added: 0.115"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the user is currently logged into Discord, this will return the channels of the given guild Id, for which the user has privileges to share images/videos to.\nOtherwise, an error is returned.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the channels of the given guild")))),(0,r.kt)("h2",{id:"sharediscordshareparameters-callback"},"share(DiscordShareParameters, callback)"),(0,r.kt)("h4",{id:"version-added-0115-5"},"Version added: 0.115"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the user is currently logged into Discord, this will perform the video share.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discordShareParams"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#discordshareparameters-object"},"DiscordShareParameters")," Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The share parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,r.kt)("p",null,"Types of errors that can occur:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,r.kt)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,r.kt)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)"),(0,r.kt)("li",{parentName:"ul"},"ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)")),(0,r.kt)("h4",{id:"code-example"},"Code Example"),(0,r.kt)("p",null,"Note: you should perform login to Discord before calling the share function: ",(0,r.kt)("a",{parentName:"p",href:"#performuserlogin"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.performUserLogin()")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let settingsLocalFile=\n    {  \n       "file":"C:\\\\Users\\\\astaroth\\\\Videos\\\\Overwolf\\\\test.mp4", //change the file name to an existing file\n       "message":"Check out my video! #LeagueofLegends | Captured by #Overwolf",\n       "events":[  \n          "death"\n       ],\n       "gameClassId":5426,\n       "gameTitle":"League of Legends",\n       "channelId":"544173576018722867",  //change the "channelId" right click the discord channel you would like to share to and click "copy id"\n       "metadata":{  \n          "champion":"Urgot",\n          "win":"Win"\n       }\n    }\n\noverwolf.social.discord.share(settingsLocalFile, console.log)\n')),(0,r.kt)("h2",{id:"shareexdiscordshareparameters-callback-callback"},"shareEx(DiscordShareParameters, callback, callback)"),(0,r.kt)("h4",{id:"version-added-0198"},"Version added: 0.198"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the user is currently logged into Discord, this will perform the video share.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discordShareParams"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#discordshareparameters-object"},"DiscordShareParameters")," Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The share parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resultCallback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#socialshareresult-object"},"SocialShareResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the resulting status of the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"progressCallback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#socialshareprogress-object"},"socialShareProgress"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called whenever share progress is made. See ",(0,r.kt)("a",{parentName:"td",href:"#progress-note"},"note"))))),(0,r.kt)("p",null,"Types of errors that can occur:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,r.kt)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,r.kt)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)"),(0,r.kt)("li",{parentName:"ul"},"ExceedsMaxSize (the file is too large: > 8 MB for images, > 100 MBfor videos)")),(0,r.kt)("h4",{id:"progress-note"},"Progress Note"),(0,r.kt)("p",null,"This callback will only be called when uploading a video."),(0,r.kt)("p",null,"Videos will be uploaded in uniforamlly sized chunks (except for the last chunk). The callback will be called every time another chunk was successfully uploaded."),(0,r.kt)("h4",{id:"code-example-1"},"Code Example"),(0,r.kt)("p",null,"Note: you should perform login to Discord before calling the share function: ",(0,r.kt)("a",{parentName:"p",href:"#performuserlogin"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.performUserLogin()")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let settingsLocalFile =\n    {  \n       "file":"C:\\\\Users\\\\astaroth\\\\Videos\\\\Overwolf\\\\test.mp4", //change the file name to an existing file\n       "message":"Check out my video! #LeagueofLegends | Captured by #Overwolf",\n       "id":"2",\n       "useOverwolfNotifications":false,\n       "events":[  \n          "death"\n       ],\n       "gameClassId":5426,\n       "gameTitle":"League of Legends",\n       "channelId":"544173576018722867",  //change the "channelId" right click the discord channel you would like to share to and click "copy id"\n       "metadata":{  \n          "champion":"Urgot",\n          "win":"Win"\n       }\n    }\n\noverwolf.social.discord.shareEx(settingsLocalFile, console.log, console.log)\n')),(0,r.kt)("h2",{id:"cancelsharestring-callback"},"cancelShare(string, callback)"),(0,r.kt)("h4",{id:"version-added-0198-1"},"Version added: 0.198"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"cancels an ongoing share request with the given id, if valid. Callback will be invoked with success if such a request was found and a cancellation order was executed (may take a while)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The request ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Called with the result of the cancellation")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'overwolf.social.discord.cancelShare("2", console.log)\n')),(0,r.kt)("h2",{id:"postdiscordpostparameters-callback"},"post(DiscordPostParameters, callback)"),(0,r.kt)("h4",{id:"version-added-0203"},"Version added: 0.203"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the user is currently logged into Discord, this will send a message.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discordShareParams"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#discordpostparameters-object"},"DiscordPostParameters")," Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The post parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,r.kt)("p",null,"Types of errors that can occur:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disconnected (user isn't signed in)")),(0,r.kt)("h2",{id:"onloginstatechanged"},"onLoginStateChanged"),(0,r.kt)("h4",{id:"version-added-0115-6"},"Version added: 0.115"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when the user\u2019s login state changes, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"../social#loginstatechangedevent-object"},(0,r.kt)("inlineCode",{parentName:"a"},"LoginStateChangedEvent"))," Object.")),(0,r.kt)("h2",{id:"discordpostparameters-object"},"DiscordPostParameters Object"),(0,r.kt)("h4",{id:"version-added-0203-1"},"Version added: 0.203"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This object defines all parameters that should be passed to the Discord ",(0,r.kt)("a",{parentName:"p",href:"#postdiscordpostparameters-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"post()")),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'If you put a link to an uploaded video inside the message, it will "embed" it into the message.')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The channel ID that the file will be shared to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The shared message's content")))),(0,r.kt)("h2",{id:"discordshareparameters-object"},"DiscordShareParameters Object"),(0,r.kt)("h4",{id:"version-added-0115-7"},"Version added: 0.115"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This object defines all parameters that can/should be passed to the Discord ",(0,r.kt)("a",{parentName:"p",href:"#sharediscordshareparameters-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"share()"))," and ",(0,r.kt)("a",{parentName:"p",href:"#shareexdiscordshareparameters-callback-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"shareEx()"))," methods.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The file to share. See ",(0,r.kt)("a",{parentName:"td",href:"#file-note"},"note"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The channel ID that the file will be shared to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID for the current share request. See ",(0,r.kt)("a",{parentName:"td",href:"#id-note"},"note"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useOverwolfNotifications"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not Overwolf notifications should be used. See ",(0,r.kt)("a",{parentName:"td",href:"#useoverwolfnotifications-note"},"note"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The message to include with the shared file. See ",(0,r.kt)("a",{parentName:"td",href:"#file-note"},"note"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trimming (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../media/videos#videocompositionsegment-object"},"VideoCompositionSegment")),(0,r.kt)("td",{parentName:"tr",align:null},"An object containing start time and end time for the desired VideoCompositionSegment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of chronological events that occurred during the capture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gameClassId (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The associated game's class ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gameTitle (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The associated game's title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Extra information about the game session")))),(0,r.kt)("h4",{id:"file-note"},"file note"),(0,r.kt)("p",null,'The "file" param is'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Required when calling ",(0,r.kt)("a",{parentName:"li",href:"#sharediscordshareparameters-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.share()")),"."),(0,r.kt)("li",{parentName:"ul"},"Optional when calling ",(0,r.kt)("a",{parentName:"li",href:"#shareexdiscordshareparameters-callback-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.shareEx()")),' - Instead, you can use the "message" param to include a URL of a file that you want to share.')),(0,r.kt)("h4",{id:"id-note"},"id note"),(0,r.kt)("p",null,"When calling ",(0,r.kt)("a",{parentName:"p",href:"#shareexdiscordshareparameters-callback-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.shareEx()")),", it is required to supply it with a request ID. This ID will also be used in case you wish to cancel this share using ",(0,r.kt)("a",{parentName:"p",href:"#cancelsharestring-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.cancelShare()")),"."),(0,r.kt)("h4",{id:"useoverwolfnotifications-note"},"useOverwolfNotifications note"),(0,r.kt)("p",null,"When calling ",(0,r.kt)("a",{parentName:"p",href:"#sharediscordshareparameters-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.share()")),", this will default to true.\nWhen calling ",(0,r.kt)("a",{parentName:"p",href:"#shareexdiscordshareparameters-callback-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.shareEx()")),", this will default to false."),(0,r.kt)("h2",{id:"socialshareresult-object"},"SocialShareResult Object"),(0,r.kt)("h4",{id:"version-added-0198-2"},"Version added: 0.198"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for the url shared in a successful share.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The url of the generated result")))),(0,r.kt)("h4",{id:"example-data"},"Example data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://cdn.discordapp.com/media/310742576380772355/ff2c69e1b4b4d3563fdfbeb6e8a96d37.png"\n}\n')),(0,r.kt)("h2",{id:"socialshareprogress-object"},"SocialShareProgress Object"),(0,r.kt)("h4",{id:"version-added-0198-3"},"Version added: 0.198"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The current progress of the share request")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"progress"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The current precentage of upload progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the share request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#sharestate-enum"},"ShareState")),(0,r.kt)("td",{parentName:"tr",align:null},"The current state of the share request")))),(0,r.kt)("h4",{id:"example-data-1"},"Example data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "progress": 56,\n  "id": "1",\n  "state": "Uploading"\n}\n')),(0,r.kt)("h2",{id:"sharestate-enum"},"ShareState Enum"),(0,r.kt)("h4",{id:"version-added-0198-4"},"Version added: 0.198"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The current state of the ",(0,r.kt)("a",{parentName:"p",href:"#shareexdiscordshareparameters-callback-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.social.discord.shareEx()"))," operation.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Started"),(0,r.kt)("td",{parentName:"tr",align:null},"The upload has started")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uploading"),(0,r.kt)("td",{parentName:"tr",align:null},"The upload is in progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Finished"),(0,r.kt)("td",{parentName:"tr",align:null},"The upload has finished")))),(0,r.kt)("h2",{id:"getguildsresult-object"},"GetGuildsResult Object"),(0,r.kt)("h4",{id:"version-added-0128"},"Version added: 0.128"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for get Guilds result.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guilds"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#guild-object"},"Guild"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.kt)("p",null,"A callback function which will be called with the status of the request and the guilds that the user is registered to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "success",\n  "guilds": [\n    {\n      "id": "310742576380772355",\n      "name": "Overwolf",\n      "icon": "https://cdn.discordapp.com/icons/310742576380772355/ff2c69e1b4b4d3563fdfbeb6e8a96d37.png",\n      "owner": false,\n      "roles": null\n    },\n    {\n      "id": "407312977017045002",\n      "name": "PUBGG",\n      "icon": "https://cdn.discordapp.com/icons/407312977017045002/032b6941ca08ffcd89bbcb7fb16b2217.png",\n      "owner": false,\n      "roles": null\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"guild-object"},"Guild Object"),(0,r.kt)("h4",{id:"version-added-0128-1"},"Version added: 0.128"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for the Guild entity.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icon"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roles"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#role-object"},"Role"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"example-data-2"},"Example data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "310742576380772355",\n  "name": "Overwolf",\n  "icon": "https://cdn.discordapp.com/icons/310742576380772355/ff2c69e1b4b4d3563fdfbeb6e8a96d37.png",\n  "owner": false,\n  "roles": null\n}\n')),(0,r.kt)("h2",{id:"role-object"},"Role Object"),(0,r.kt)("h4",{id:"version-added-0128-2"},"Version added: 0.128"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for the Role entity.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permissions"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);