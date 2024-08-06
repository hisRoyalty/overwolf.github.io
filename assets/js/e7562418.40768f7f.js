"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7084],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},A="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),A=s(n),u=o,d=A["".concat(p,".").concat(u)]||A[u]||h[u]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[A]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>A,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(25773),o=(n(27378),n(35318));const i={id:"login-with-twitch",image:"/img/embed/api-best-practices.jpg",title:"App login with Twitch, Steam, Discord, Facebook or Google",sidebar_label:"Login with Twitch",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},r=void 0,l={unversionedId:"topics/integrations/login-with-twitch",id:"topics/integrations/login-with-twitch",title:"App login with Twitch, Steam, Discord, Facebook or Google",description:"This article will explain how to implement a 3rd party login interface in your Overwolf app.",source:"@site/../pages/topics/integrations/login-with-twitch.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/login-with-twitch",permalink:"/topics/integrations/login-with-twitch",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/integrations/login-with-twitch.mdx",tags:[],version:"current",lastUpdatedBy:"Jacks",lastUpdatedAt:1722944503,formattedLastUpdatedAt:"Aug 6, 2024",frontMatter:{id:"login-with-twitch",image:"/img/embed/api-best-practices.jpg",title:"App login with Twitch, Steam, Discord, Facebook or Google",sidebar_label:"Login with Twitch",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Login with Overwolf",permalink:"/topics/integrations/login-with-overwolf"},next:{title:"Twitch Extensions",permalink:"/topics/integrations/twitch-events-sdk-for-game-developers"}},p={},s=[{value:"Sample app",id:"sample-app",level:2},{value:"Server side code",id:"server-side-code",level:3},{value:"Functionality",id:"functionality",level:3},{value:"Setting up",id:"setting-up",level:3},{value:"Login Flow",id:"login-flow",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Register your app on Twitch",id:"register-your-app-on-twitch",level:3},{value:"Create a static logic page",id:"create-a-static-logic-page",level:3},{value:"Create a dedicated login window",id:"create-a-dedicated-login-window",level:3},{value:"Set externally_connectable",id:"set-externally_connectable",level:3},{value:"Set url_protocol",id:"set-url_protocol",level:3},{value:"1. Open the login window",id:"1-open-the-login-window",level:2},{value:"2. Check for existing auth token",id:"2-check-for-existing-auth-token",level:2},{value:"3. Redirect to Twitch login page",id:"3-redirect-to-twitch-login-page",level:2},{value:"4. Return back to the app",id:"4-return-back-to-the-app",level:2},{value:"5.  Close the Log In window.",id:"5--close-the-log-in-window",level:2}],c={toc:s};function A(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article will explain how to implement a 3rd party login interface in your Overwolf app.  "),(0,o.kt)("p",null,"The main challenge here is figuring out how to transfer the info that the auth window gets from the external service back to the OW app."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"As Google (and possibly other providers in the future) will discontinue support for sign-in from embedded browser frameworks (e.g., OW browser) starting Jan. 2021, the best way to go is to send the user their default browser, and not use the OW browser.",(0,o.kt)("br",{parentName:"p"}),"\n","In the future, we will add some instructions on how to do that. Meanwhile, you can use the suggested workaround explained in this article.")),(0,o.kt)("h2",{id:"sample-app"},"Sample app"),(0,o.kt)("p",null,"In our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/apis-sample-apps"},"APIs sample apps repository"),", you can find and download three sample apps that demonstrate how to integrate 3rd party login interface: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Twitch Sample App"),". Demonstrates how to implement login to your OW app using a Twitch account."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Steam Sample App"),". Demonstrates how to implement login to your OW app using a Steam account."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Google Sample App"),". Demonstrates how to implement login to your OW app using a Google account.")),(0,o.kt)("p",null,"It's a great place to get started - All the samples in this repository are built with JS code and demonstrate primary usage in the API."),(0,o.kt)("h3",{id:"server-side-code"},"Server side code"),(0,o.kt)("p",null,'Note that the above sample apps work "out of the box" - download and install each app as an unpacked extension, or you can create an OPK for each app and install it. After installing, you can immediately see a real live example of an app that integrated Twitch/Steam/Google login flow. No need to configure any server, as the sample apps use our servers.'),(0,o.kt)("p",null,"You can find our server-side code in the repository. And you should implement it on your server if you want to integrate a login button in your app.\nWhen you are ready to integrate the login button in your app, you should also implement this server-side code in your server."),(0,o.kt)("h3",{id:"functionality"},"Functionality"),(0,o.kt)("p",null,"The sample app's functionality is pretty straightforward: You launch it, open the dev console (to see all the debug messages), and hit the ",(0,o.kt)("inlineCode",{parentName:"p"},"Login")," button to open the Twitch/Steam authentication window in the default user's browser. After successful login, you can ",(0,o.kt)("inlineCode",{parentName:"p"},"Log out"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"Get user")," to get the Twitch/Steam user info.  "),(0,o.kt)("p",null,"In Twitch login, you can also get the current ",(0,o.kt)("inlineCode",{parentName:"p"},"Channel"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"twitch-login",src:n(3502).Z,width:"618",height:"339"})),(0,o.kt)("p",null,"Here you can see the Steam authentication window:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"twitch-login",src:n(47958).Z,width:"969",height:"480"})),(0,o.kt)("p",null,"Of course, that all the time, you can look at the dev console to see the status of each call (success, failure, etc.). "),(0,o.kt)("h3",{id:"setting-up"},"Setting up"),(0,o.kt)("p",null,"Download the app's source code from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/apis-sample-apps"},"repository")," as a zip file, and extract it to a new folder on your machine.",(0,o.kt)("br",{parentName:"p"}),"\n",'Load the app as an "unpacked extension" (Note that to do that you have to whitelist your OW username as a developer).'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Open the Overwolf desktop client settings (by right-clicking the client and selecting "Packages" Or by clicking on the wrench icon in the dock and going to the "About" tab => "Development Options").'),(0,o.kt)("li",{parentName:"ul"},'Click on "Development options".'),(0,o.kt)("li",{parentName:"ul"},'In the opened window, click on "Load unpacked extension" and select the extracted ',(0,o.kt)("inlineCode",{parentName:"li"},"twitch-login-sample")," folder. This will add the Twitch login sample app to your Overwolf dock. Do the same with the ",(0,o.kt)("inlineCode",{parentName:"li"},"steam-login-sample")," to install the Steam login sample app."),(0,o.kt)("li",{parentName:"ul"},'Make sure you are logged in to the OW client. Otherwise, you will get an "Unauthorized App" error message. (Click on the "Appstore" icon in the OW dock to login to the OW client).'),(0,o.kt)("li",{parentName:"ul"},"Click on the app's icons in your OW dock to run the apps.")),(0,o.kt)("h2",{id:"login-flow"},"Login Flow"),(0,o.kt)("p",null,"This is a suggested login flow into Twitch using their OAuth2:"),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("h3",{id:"register-your-app-on-twitch"},"Register your app on Twitch"),(0,o.kt)("p",null,"To make an app that uses the Twitch API, you first need to register your app on the ",(0,o.kt)("a",{parentName:"p",href:"https://dev.twitch.tv/dashboard/apps/create"},"Twitch developer site"),".  "),(0,o.kt)("p",null,"When creating this app, enter your ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect URI"),", where your users are redirected after being authorized.",(0,o.kt)("br",{parentName:"p"}),"\n","As Twitch doesn't accept URIs where the top domain is not HTTP, ",(0,o.kt)("strong",{parentName:"p"},"you can't use the OW URI scheme")," (overwolf-extension://..).  "),(0,o.kt)("p",null,"As a workaround, we set a static login page on our server as the redirect URI. Within this page, we can easily use an OW URI to redirect back to our OW app. Jump to the ",(0,o.kt)("a",{parentName:"p",href:"#create-a-static-logic-page"},"next chapter"),", create the static page, and get back. "),(0,o.kt)("p",null,"Once you create a developer app, you'll be assigned a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"client ID")," for your app."),(0,o.kt)("h3",{id:"create-a-static-logic-page"},"Create a static logic page"),(0,o.kt)("p",null,"On your server, Create a static login page. Let's call it index.html."),(0,o.kt)("p",null,"Redirect back to your app login page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.location.replace(`overwolf-extension://[EXTENSION-ID]/dist/login/login.html${location.hash}`);\n")),(0,o.kt)("p",null,"To enable the user's browser to open this custom handler, we will later add the ",(0,o.kt)("a",{parentName:"p",href:"#set-url_protocol"},"url_protocol")," to the app's manifest."),(0,o.kt)("p",null,"In addition, replace the ","[EXTENSION-ID]"," with your extension's id.  "),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/jsref/prop_loc_hash.asp"},"URL hash")," is the Twitch auth token sent back to the app."),(0,o.kt)("p",null,"Now that you have a live static login page on your server, ",(0,o.kt)("a",{parentName:"p",href:"#register-your-app-on-twitch"},"go back")," and set the Twitch redirect URI."),(0,o.kt)("h3",{id:"create-a-dedicated-login-window"},"Create a dedicated login window"),(0,o.kt)("p",null,"Add a new window in your app's manifest, for the authentication process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"login": {\n    "file": "dist/login/login.html",\n    "transparent": false,\n    "resizable": true,\n    "show_in_taskbar": true,\n    "desktop_only": true,\n        "size": {\n            "width": 600,\n            "height": 600\n        }\n}\n')),(0,o.kt)("h3",{id:"set-externally_connectable"},"Set externally_connectable"),(0,o.kt)("p",null,"Add to your app manifest the ",(0,o.kt)("a",{parentName:"p",href:"/api/manifest#externally_connectable"},"externally_connectable")," flag with the Twitch URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"externally_connectable": {\n    "matches": [\n    "http://*.twitch.tv", //make sure that the end of URL is WITHOUT any slash/backslash\n    "https://*.twitch.tv"\n    ]\n}\n')),(0,o.kt)("h3",{id:"set-url_protocol"},"Set url_protocol"),(0,o.kt)("p",null,"Register the ",(0,o.kt)("a",{parentName:"p",href:"/api/manifest#url_protocol-object"},"custom handler")," to support opening an OW application from a browser using a link:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\n"url_protocol": {\n    "scheme": "overwolf-extension"\n}\n')),(0,o.kt)("h2",{id:"1-open-the-login-window"},"1. Open the login window"),(0,o.kt)("p",null,'When the user clicks on the "Login with Twitch" button in the app, open the dedicated login window.'),(0,o.kt)("h2",{id:"2-check-for-existing-auth-token"},"2. Check for existing auth token"),(0,o.kt)("p",null,"When the login window starts, the first thing to do is to check if the user is already logged in:  "),(0,o.kt)("p",null,"As mentioned earlier, the Twitch auth token is sent back to the app through a ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/jsref/prop_loc_hash.asp"},"URL hash"),"."),(0,o.kt)("p",null,"So we can check the location.hash: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If location.hash is not set - the user is not logged yet. We continue the redirection to the Twitch login URL (",(0,o.kt)("a",{parentName:"p",href:"#3-redirect-to-twitch-login-page"},"step 3"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If location.hash is set - the user successfully passes the Twitch login and redirects back to here (app's login window) with the auth token.",(0,o.kt)("br",{parentName:"p"}),"\n","We save the auth token and close this window (",(0,o.kt)("a",{parentName:"p",href:"#4-return-back-to-the-app"},"step 4"),")"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that at this point, you may also want to add also an error handling mechanism.")),(0,o.kt)("h2",{id:"3-redirect-to-twitch-login-page"},"3. Redirect to Twitch login page"),(0,o.kt)("p",null,"Manually navigates (",(0,o.kt)("inlineCode",{parentName:"p"},"window.location.replace"),") to: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${fullRedirectUri}`\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," is your Twitch clientId and ",(0,o.kt)("inlineCode",{parentName:"p"},"fullRedirectUri")," is your static login page that we set earlier. "),(0,o.kt)("h2",{id:"4-return-back-to-the-app"},"4. Return back to the app"),(0,o.kt)("p",null,"After we successfully logged in to Twitch, we can save the auth token and close the app's login window."),(0,o.kt)("p",null,"You can save the auth token in a localStorage variable. We recommend encrypting the hash/token before storing it - for security reasons. You can use the ",(0,o.kt)("a",{parentName:"p",href:"/api/cryptography"},"overwolf.cryptography API")," for that."),(0,o.kt)("h2",{id:"5--close-the-log-in-window"},"5.  Close the Log In window."),(0,o.kt)("p",null,"Now, we can safely close the login window. "),(0,o.kt)("p",null,"The login process is complete."))}A.isMDXComponent=!0},47958:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/steam-0fecf9f01f29d630b30dc362180b0bf2.png"},3502:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);