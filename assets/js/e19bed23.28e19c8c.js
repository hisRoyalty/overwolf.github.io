"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8498],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return o},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var r=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){return function(a){var t=p(a.components);return r.createElement(e,d({},a,{components:t}))}},p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},x=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,d=e.originalType,n=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),s=p(t),u=l,x=s["".concat(n,".").concat(u)]||s[u]||c[u]||d;return t?r.createElement(x,i(i({ref:a},o),{},{components:t})):r.createElement(x,i({ref:a},o))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var d=t.length,n=new Array(d);n[0]=x;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var o=2;o<d;o++)n[o]=t[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}x.displayName="MDXCreateElement"},15001:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var r=t(87462),l=t(63366),d=(t(67294),t(3905)),n=["components"],i={id:"overwolf-social-reddit",title:"overwolf.social.reddit API",sidebar_label:"overwolf.social.reddit"},m=void 0,o={unversionedId:"api/overwolf-social-reddit",id:"api/overwolf-social-reddit",title:"overwolf.social.reddit API",description:"Provides access to the Reddit social provider.",source:"@site/pages/docs/api/overwolf-social-reddit.mdx",sourceDirName:"api",slug:"/api/overwolf-social-reddit",permalink:"/V2TestFixed/docs/api/overwolf-social-reddit",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/api/overwolf-social-reddit.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"overwolf-social-reddit",title:"overwolf.social.reddit API",sidebar_label:"overwolf.social.reddit"},sidebar:"api",previous:{title:"overwolf.social",permalink:"/V2TestFixed/docs/api/overwolf-social"},next:{title:"overwolf.social.youtube",permalink:"/V2TestFixed/docs/api/overwolf-social-youtube"}},s={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"performUserLogin()",id:"performuserlogin",level:2},{value:"Version added: 0.128",id:"version-added-0128",level:4},{value:"performLogout(callback)",id:"performlogoutcallback",level:2},{value:"Version added: 0.128",id:"version-added-0128-1",level:4},{value:"getUserInfo(callback)",id:"getuserinfocallback",level:2},{value:"Version added: 0.128",id:"version-added-0128-2",level:4},{value:"searchSubreddits(query, callback)",id:"searchsubredditsquery-callback",level:2},{value:"Version added: 0.128",id:"version-added-0128-3",level:4},{value:"share(RedditShareParameters, callback)",id:"shareredditshareparameters-callback",level:2},{value:"Version added: 0.128",id:"version-added-0128-4",level:4},{value:"shareEx(RedditShareParameters, callback, callback)",id:"shareexredditshareparameters-callback-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198",level:4},{value:"cancelShare(string, callback)",id:"cancelsharestring-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198-1",level:4},{value:"getSubredditFlairs(subredditName, callback)",id:"getsubredditflairssubredditname-callback",level:2},{value:"Version added: 0.160",id:"version-added-0160",level:4},{value:"onLoginStateChanged",id:"onloginstatechanged",level:2},{value:"Version added: 0.128",id:"version-added-0128-5",level:4},{value:"onShareFailed",id:"onsharefailed",level:2},{value:"Version added: 0.128",id:"version-added-0128-6",level:4},{value:"RedditShareParameters Object",id:"redditshareparameters-object",level:2},{value:"Version added: 0.128",id:"version-added-0128-7",level:4},{value:"id note",id:"id-note",level:4},{value:"useOverwolfNotifications note",id:"useoverwolfnotifications-note",level:4},{value:"Data example",id:"data-example",level:4},{value:"SocialShareResult Object",id:"socialshareresult-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-2",level:4},{value:"Example data",id:"example-data",level:4},{value:"SocialShareProgress Object",id:"socialshareprogress-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-3",level:4},{value:"Example data",id:"example-data-1",level:4},{value:"ShareState Enum",id:"sharestate-enum",level:2},{value:"Version added: 0.198",id:"version-added-0198-4",level:4},{value:"SearchSubredditsResult Object",id:"searchsubredditsresult-object",level:2},{value:"Version added: 0.128",id:"version-added-0128-8",level:4},{value:"Subreddit Object",id:"subreddit-object",level:2},{value:"Version added: 0.128",id:"version-added-0128-9",level:4},{value:"RedditAllowedPostTypes Object",id:"redditallowedposttypes-object",level:2},{value:"Version added: 0.128",id:"version-added-0128-10",level:4},{value:"ShareFailedEvent Object",id:"sharefailedevent-object",level:2},{value:"Version added: 0.128",id:"version-added-0128-11",level:4},{value:"Event Data Example: Success",id:"event-data-example-success",level:4},{value:"Flair Object",id:"flair-object",level:2},{value:"Version added: 0.160",id:"version-added-0160-1",level:4},{value:"Data Example",id:"data-example-1",level:4}],u={toc:p};function c(e){var a=e.components,t=(0,l.Z)(e,n);return(0,d.mdx)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,"Provides access to the Reddit social provider."),(0,d.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,d.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,d.mdx)("h5",{parentName:"div"},(0,d.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,d.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,d.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,d.mdx)("div",{parentName:"div",className:"admonition-content"},(0,d.mdx)("p",{parentName:"div"},"You can use ",(0,d.mdx)("a",{parentName:"p",href:"overwolf-social#getdisabledservicescallback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.getDisabledServices()"))," method to check if the service is available."))),(0,d.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#performuserlogin"},"overwolf.social.reddit.performUserLogin()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#performlogoutcallback"},"overwolf.social.reddit.performLogout()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#getuserinfocallback"},"overwolf.social.reddit.getUserInfo()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#searchsubredditsquery-callback"},"overwolf.social.reddit.searchSubreddits()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#shareredditshareparameters-callback"},"overwolf.social.reddit.share()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#shareexredditshareparameters-callback-callback"},"overwolf.social.reddit.shareEx()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#cancelsharestring-callback"},"overwolf.social.reddit.cancelShare()")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#getsubredditflairssubredditname-callback"},"overwolf.social.reddit.getSubredditFlairs()"))),(0,d.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#onloginstatechanged"},"ooverwolf.social.reddit.onLoginStateChanged")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#onsharefailed"},"overwolf.social.reddit.onShareFailed"))),(0,d.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#redditshareparameters-object"},"overwolf.social.reddit.RedditShareParameters")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#socialshareresult-object"},"overwolf.social.reddit.SocialShareResult")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#socialshareprogress-object"},"overwolf.social.reddit.SocialShareProgress")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#sharestate-enum"},"overwolf.social.reddit.enums.ShareState")," Enum"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#subreddit-object"},"overwolf.social.reddit.Subreddit")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#redditallowedposttypes-object"},"overwolf.social.reddit.RedditAllowedPostTypes")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#searchsubredditsresult-object"},"overwolf.social.reddit.SearchSubredditsResult")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#sharefailedevent-object"},"overwolf.social.reddit.ShareFailedEvent")," Object"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#loginstatechangedevent-object"},"overwolf.social.reddit.LoginStateChangedEvent")," Object")),(0,d.mdx)("h2",{id:"performuserlogin"},"performUserLogin()"),(0,d.mdx)("h4",{id:"version-added-0128"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Opens the login dialog. ")),(0,d.mdx)("p",null,"There is no callback for this method and the only way to know if the user signed in is via ",(0,d.mdx)("a",{parentName:"p",href:"#onloginstatechanged"},"onLoginStateChanged")," event."),(0,d.mdx)("h2",{id:"performlogoutcallback"},"performLogout(callback)"),(0,d.mdx)("h4",{id:"version-added-0128-1"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},'Performs a "strong" sign out of Reddit, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.')),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"getuserinfocallback"},"getUserInfo(callback)"),(0,d.mdx)("h4",{id:"version-added-0128-2"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"If the user is currently logged into Reddit, this will return user information, Otherwise, an error is returned.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"overwolf-social#getuserinforesult-object"},"(Result: GetUserInfoResult)")," => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"searchsubredditsquery-callback"},"searchSubreddits(query, callback)"),(0,d.mdx)("h4",{id:"version-added-0128-3"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Search for subreddits whose names begin with a substring.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"query"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The search string")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#searchsubredditsresult-object"},"(Result: SearchSubredditsResult)")," => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"Will contain an array of subreddits that match the search string")))),(0,d.mdx)("h2",{id:"shareredditshareparameters-callback"},"share(RedditShareParameters, callback)"),(0,d.mdx)("h4",{id:"version-added-0128-4"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"If the user is currently logged into reddit, this will perform the video share.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"redditShareParameters"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#redditshareparameters-object"},"RedditShareParameters")," Object"),(0,d.mdx)("td",{parentName:"tr",align:null},"The share parameters")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("p",null,"Types of errors that can occur:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,d.mdx)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,d.mdx)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)")),(0,d.mdx)("h2",{id:"shareexredditshareparameters-callback-callback"},"shareEx(RedditShareParameters, callback, callback)"),(0,d.mdx)("h4",{id:"version-added-0198"},"Version added: 0.198"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"If the user is currently logged into Reddit, this will perform the video share.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"redditShareParams"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#redditshareparameters-object"},"RedditShareParameters")," Object"),(0,d.mdx)("td",{parentName:"tr",align:null},"The share parameters")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"resultCallback"),(0,d.mdx)("td",{parentName:"tr",align:null},"(",(0,d.mdx)("a",{parentName:"td",href:"#socialshareresult-object"},"SocialShareResult"),") => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the resulting status of the request")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"progressCallback"),(0,d.mdx)("td",{parentName:"tr",align:null},"(",(0,d.mdx)("a",{parentName:"td",href:"#socialshareprogress-object"},"socialShareProgress"),") => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called whenever share progress is made")))),(0,d.mdx)("p",null,"Types of errors that can occur:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,d.mdx)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,d.mdx)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)")),(0,d.mdx)("h2",{id:"cancelsharestring-callback"},"cancelShare(string, callback)"),(0,d.mdx)("h4",{id:"version-added-0198-1"},"Version added: 0.198"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"cancels an ongoing share request with the given id, if valid. Callback will be invoked with success if such a request was found and a cancellation order was executed (may take a while)")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The request ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"Called with the result of the cancellation")))),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'overwolf.social.reddit.cancelShare("2", console.log)\n')),(0,d.mdx)("h2",{id:"getsubredditflairssubredditname-callback"},"getSubredditFlairs(subredditName, callback)"),(0,d.mdx)("h4",{id:"version-added-0160"},"Version added: 0.160"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Returns a list of flairs supported by the given subreddit.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"subredditName"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The given subreddit")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"callback"),(0,d.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,d.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,d.mdx)("h2",{id:"onloginstatechanged"},"onLoginStateChanged"),(0,d.mdx)("h4",{id:"version-added-0128-5"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Fired when the user\u2019s login state changes, with the following structure: ",(0,d.mdx)("a",{parentName:"p",href:"overwolf-social#loginstatechangedevent-object"},"LoginStateChangedEvent")," Object.")),(0,d.mdx)("h2",{id:"onsharefailed"},"onShareFailed"),(0,d.mdx)("h4",{id:"version-added-0128-6"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Fired when an error is returned from Reddit, with the following structure: ",(0,d.mdx)("a",{parentName:"p",href:"#sharefailedevent-object"},(0,d.mdx)("inlineCode",{parentName:"a"},"ShareFailedEvent"))," Object.")),(0,d.mdx)("h2",{id:"redditshareparameters-object"},"RedditShareParameters Object"),(0,d.mdx)("h4",{id:"version-added-0128-7"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"This object defines all parameters that can/should be passed to the Reddit ",(0,d.mdx)("a",{parentName:"p",href:"#shareredditshareparameters-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"Share()"))," and ",(0,d.mdx)("a",{parentName:"p",href:"#shareexredditshareparameters-callback-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"shareEx()"))," methods.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"file"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The file to share")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id (Optional)"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID for the current share request. See ",(0,d.mdx)("a",{parentName:"td",href:"#id-note"},"note"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"useOverwolfNotifications"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"Whether or not overwolf notifications should be used. See ",(0,d.mdx)("a",{parentName:"td",href:"#useoverwolfnotifications-note"},"note"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"subreddit"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The subreddit to which the file will be shared")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"title"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The shared video's title")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"description"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The shared video's description")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"trimming (Optional)"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"overwolf-media-videos#videocompositionsegment-object"},"VideoCompositionSegment")),(0,d.mdx)("td",{parentName:"tr",align:null},"An object containing start time and end time for the desired VideoCompositionSegment")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"tags (Optional)"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of chronological events that occurred during the capture")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"gameClassId (Optional)"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The associated game's class ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"gameTitle (Optional)"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The associated game's title")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"metadata (Optional)"),(0,d.mdx)("td",{parentName:"tr",align:null},"object"),(0,d.mdx)("td",{parentName:"tr",align:null},"Extra information about the game session")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"flair_id (Optional)"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#flair-object"},"Flair")," object"),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h4",{id:"id-note"},"id note"),(0,d.mdx)("p",null,"When calling ",(0,d.mdx)("a",{parentName:"p",href:"#shareexredditshareparameters-callback-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.reddit.shareEx()")),", it is required to supply it with a request ID. This ID will also be used in case you wish to cancel this share using ",(0,d.mdx)("a",{parentName:"p",href:"#cancelsharestring-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.reddit.cancelShare()")),"."),(0,d.mdx)("h4",{id:"useoverwolfnotifications-note"},"useOverwolfNotifications note"),(0,d.mdx)("p",null,"When calling ",(0,d.mdx)("a",{parentName:"p",href:"#shareredditshareparameters-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.reddit.share()")),", this will default to true.\nWhen calling ",(0,d.mdx)("a",{parentName:"p",href:"#shareexredditshareparameters-callback-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.reddit.shareEx()")),", this will default to false."),(0,d.mdx)("h4",{id:"data-example"},"Data example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "file": "file://D:\\\\Videos\\\\Overwolf\\\\Outplayed\\\\League of Legends/League of Legends_8-16-2020_2-6-20-576\\\\League of Legends 08-16-2020_2-06-22-522.mp4",\n  "id": "5",\n  "useOverwolfNotifications": false,\n  "tags": [\n    "PvP Round"\n  ],\n  "gameClassId": 5426,\n  "gameTitle": "League of Legends",\n  "title": "Check out my video! #TeamfightTactics | Captured by #Outplayed",\n  "subreddit": "clips",\n  "trimming": {\n    "startTime": 1136507,\n    "endTime": 1177391\n  },\n  "metadata": {\n    "mode": "tft"\n  }\n}\n')),(0,d.mdx)("h2",{id:"socialshareresult-object"},"SocialShareResult Object"),(0,d.mdx)("h4",{id:"version-added-0198-2"},"Version added: 0.198"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container for the url shared in a successful share.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"url"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The url of the generated result")))),(0,d.mdx)("h4",{id:"example-data"},"Example data"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://v.redd.it/z08avb339n801/DASH_1_2_M"\n}\n')),(0,d.mdx)("h2",{id:"socialshareprogress-object"},"SocialShareProgress Object"),(0,d.mdx)("h4",{id:"version-added-0198-3"},"Version added: 0.198"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"The current progress of the share request")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"progress"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"The current precentage of upload progress")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"The id of the share request")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"state"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#sharestate-enum"},"ShareState")),(0,d.mdx)("td",{parentName:"tr",align:null},"The current state of the share request")))),(0,d.mdx)("h4",{id:"example-data-1"},"Example data"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "progress": 56,\n  "id": "1",\n  "state": "Uploading"\n}\n')),(0,d.mdx)("h2",{id:"sharestate-enum"},"ShareState Enum"),(0,d.mdx)("h4",{id:"version-added-0198-4"},"Version added: 0.198"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"The current state of the ",(0,d.mdx)("a",{parentName:"p",href:"#shareexredditshareparameters-callback-callback"},(0,d.mdx)("inlineCode",{parentName:"a"},"overwolf.social.reddit.shareEx()"))," operation.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Options"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Started"),(0,d.mdx)("td",{parentName:"tr",align:null},"The upload has started")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Uploading"),(0,d.mdx)("td",{parentName:"tr",align:null},"The upload is in progress")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Finished"),(0,d.mdx)("td",{parentName:"tr",align:null},"The upload has finished")))),(0,d.mdx)("h2",{id:"searchsubredditsresult-object"},"SearchSubredditsResult Object"),(0,d.mdx)("h4",{id:"version-added-0128-8"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container for search subreddits result.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"subreddits"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#subreddit-object"},"Subreddit"),"[]"),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h2",{id:"subreddit-object"},"Subreddit Object"),(0,d.mdx)("h4",{id:"version-added-0128-9"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container object.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"subreddit"),(0,d.mdx)("td",{parentName:"tr",align:null},"number"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"name"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"displayName"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"allowedPostTypes"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"#redditallowedposttypes-object"},"RedditAllowedPostTypes")," object"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"communityIcon"),(0,d.mdx)("td",{parentName:"tr",align:null},"number"),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h2",{id:"redditallowedposttypes-object"},"RedditAllowedPostTypes Object"),(0,d.mdx)("h4",{id:"version-added-0128-10"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container object.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"images"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"text"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"videos"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"links"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"spoilers"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h2",{id:"sharefailedevent-object"},"ShareFailedEvent Object"),(0,d.mdx)("h4",{id:"version-added-0128-11"},"Version added: 0.128"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container object.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"error"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"details"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h4",{id:"event-data-example-success"},"Event Data Example: Success"),(0,d.mdx)("p",null,"Currently, supported errors are:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{ "error": "NotFound", "details": "that subreddit doesn\'t exist" }\n{ "error": "RateLimit", "details": "you are doing that too much. try again in 7 minutes." }\n')),(0,d.mdx)("h2",{id:"flair-object"},"Flair Object"),(0,d.mdx)("h4",{id:"version-added-0160-1"},"Version added: 0.160"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Container object.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"id"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"text"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"mod_only"),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"allowable_content"),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null})))),(0,d.mdx)("h4",{id:"data-example-1"},"Data Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "248a072-1e48-11e6-0e1648f491d1",\n  "text": "Highlight",\n  "mod_only": false,\n  "allowable_content": "all"\n}\n')))}c.isMDXComponent=!0}}]);