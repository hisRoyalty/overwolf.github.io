"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6369],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),u=function(e){return function(t){var n=c(t.components);return o.createElement(e,i({},t,{components:n}))}},c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,h=u["".concat(a,".").concat(p)]||u[p]||m[p]||i;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var o=n(87462),r=n(63366),i=n(67294),a=n(3905);var l=function(e){var t=(0,i.useState)(null),n=(t[0],t[1]),o=(0,i.useState)(null),r=o[0],a=o[1];(0,i.useEffect)((function(){a(localStorage.ssoDemoAccessToken||null),window.addEventListener("storage",l,!1)}),[]);var l=function(e){"ssoDemoAccessToken"===e.key&&a(e.newValue)};return i.createElement(i.Fragment,null,r&&i.createElement("div",{className:"sso-demo"},i.createElement("p",null,i.createElement("strong",null,"You logged in. The authorization token is:")),i.createElement("code",null,r)),null==r&&i.createElement("div",{className:"sso-demo"},i.createElement("button",{className:"button-sso-login",onClick:function(){return function(){var e=window.open("https://accounts.overwolf.com/oauth2/auth?response_type=code&client_id=GYp5FgzDpr8vctky&redirect_uri=http://sso-sample-server.overwolf.com/auth/overwolf/callback&scope=openid+profile+email","_blank");e.onbeforeunload=function(){return n(null)},n(e)}()}},"Login with OW")))},s=["components"],d={id:"login-with-overwolf",title:"App login with Overwolf",sidebar_label:"Login with Overwolf"},u=void 0,c={unversionedId:"topics/login-with-overwolf",id:"topics/login-with-overwolf",title:"App login with Overwolf",description:"This article will explain how to implement an Overwolf login/auth interface in your website.",source:"@site/pages/docs/topics/login-with-overwolf.mdx",sourceDirName:"topics",slug:"/topics/login-with-overwolf",permalink:"/V2TestFixed/docs/topics/login-with-overwolf",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/topics/login-with-overwolf.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"login-with-overwolf",title:"App login with Overwolf",sidebar_label:"Login with Overwolf"},sidebar:"docs",previous:{title:"Login with Twitch",permalink:"/V2TestFixed/docs/topics/login-with-twitch"},next:{title:"Event SDK for Game Devs",permalink:"/V2TestFixed/docs/topics/events-SDK-for-game-developers"}},p={},m=[{value:"Typical usage",id:"typical-usage",level:2},{value:"Login flow overview",id:"login-flow-overview",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Register your app on Overwolf",id:"register-your-app-on-overwolf",level:3},{value:"Create redirect_uri endpoint",id:"create-redirect_uri-endpoint",level:3},{value:"Required Query params:",id:"required-query-params",level:4},{value:"Required HTTP headers:",id:"required-http-headers",level:4},{value:"Sample code",id:"sample-code",level:4},{value:"1. Engage the SSO flow.",id:"1-engage-the-sso-flow",level:2},{value:"Required Query params:",id:"required-query-params-1",level:4},{value:"2. Login on Overwolf",id:"2-login-on-overwolf",level:2},{value:"3. Get the auth token",id:"3-get-the-auth-token",level:2},{value:"Get user info from token",id:"get-user-info-from-token",level:3},{value:"4. Close the login window.",id:"4-close-the-login-window",level:2},{value:"5. Live Demo",id:"5-live-demo",level:2},{value:"Download from Github",id:"download-from-github",level:2}],h={toc:m};function f(e){var t=e.components,i=(0,r.Z)(e,s);return(0,a.mdx)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This article will explain how to implement an Overwolf login/auth interface in your website."),(0,a.mdx)("h2",{id:"typical-usage"},"Typical usage"),(0,a.mdx)("p",null,"One of the common uses for this feature is to enable OW apps developers to identify subscribed users on their website.\nMany times you would like to offer your premium users that purchased a subscription some unique features or content."),(0,a.mdx)("p",null,"Besides, you can use this feature to do whatever you like: enable your users to use single sign-on without the need for a separate account, display synced info from your server (info that gathered using your OW apps and now can be displayed on your website too), etc."),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"This feature (get info about active subscriptions) will be released soon. We will update this page accordingly."))),(0,a.mdx)("h2",{id:"login-flow-overview"},"Login flow overview"),(0,a.mdx)("p",null,"This flow is for web browser only, we do not currently offer a client SDK that supports API-based authentication."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Developers register their app for the OW SSO and get a unique client_id and client_secret."),(0,a.mdx)("li",{parentName:"ul"},'The actual login is done using a login form hosted on the OW servers. This means you should only implement a "Login with Overwolf" button in your website. Once clicked, this button will open a new window/tab with the OW login form. (More info in ',(0,a.mdx)("a",{parentName:"li",href:"#1-engage-the-sso-flow"},"step 1: Engage the SSO flow"),")."),(0,a.mdx)("li",{parentName:"ul"},"Once the login is completed on the OW hosted login page, the user is redirected to a pre-defined redirect_URI hosted on YOUR server (More info on how to implement this page in ",(0,a.mdx)("a",{parentName:"li",href:"#create-redirect_uri-endpoint"},'"Create redirect_uri endpoint"'),")."),(0,a.mdx)("li",{parentName:"ul"},"The redirect_URI page executes a POST request to OW servers to request and get the auth token (and might include some other details like email, subscriptions, etc.) that was created after the login (More info in ",(0,a.mdx)("a",{parentName:"li",href:"#3-get-the-auth-token"},"step 3: Get the auth token"),").")),(0,a.mdx)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.mdx)("h3",{id:"register-your-app-on-overwolf"},"Register your app on Overwolf"),(0,a.mdx)("p",null,"Before implementing the OW login in your website, you must register your app on Overwolf. To register, just send us an email to ",(0,a.mdx)("a",{parentName:"p",href:"mailto:developers@overwolf.com."},"developers@overwolf.com.")," Once you register, your ",(0,a.mdx)("inlineCode",{parentName:"p"},"client_id")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"client_secret")," will be generated."),(0,a.mdx)("p",null,"You should provide these parameters:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"client_name - The app's name."),(0,a.mdx)("li",{parentName:"ol"},"redirect_uris - An endpoint hosted on your server. More details ",(0,a.mdx)("a",{parentName:"li",href:"#create-redirect_uri-endpoint"},"here"),"."),(0,a.mdx)("li",{parentName:"ol"},"logo_uri - URL of the app's logo."),(0,a.mdx)("li",{parentName:"ol"},"policy_uri - URL of the app's privacy policy."),(0,a.mdx)("li",{parentName:"ol"},'tos_uri - URL of the app\'s "Terms of Service".')),(0,a.mdx)("p",null,"Note: all the URIs needs to be accessible with a public domain (not localhost). Otherwise, our servers will not be able to complete the flow."),(0,a.mdx)("p",null,"Your app's ",(0,a.mdx)("inlineCode",{parentName:"p"},"client_id")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"client_secret")," will be provided once you complete the registration."),(0,a.mdx)("h3",{id:"create-redirect_uri-endpoint"},"Create redirect_uri endpoint"),(0,a.mdx)("p",null,"On your server, create an endpoint used to get the auth-token from Overwolf (by making a POST request to the OW server)."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"POST https://accounts.overwolf.com/oauth2/token?client_id={client id}&client_secret={client secret}&grant_type=authorization_code&code={code that came from request object, e.g: request.query.code}&redirect_uri={redirect_uri}\n")),(0,a.mdx)("h4",{id:"required-query-params"},"Required Query params:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"client_id"),(0,a.mdx)("li",{parentName:"ul"},"client_secret"),(0,a.mdx)("li",{parentName:"ul"},"grant_type"),(0,a.mdx)("li",{parentName:"ul"},"code"),(0,a.mdx)("li",{parentName:"ul"},"redirect_uri")),(0,a.mdx)("h4",{id:"required-http-headers"},"Required HTTP headers:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},'Content-Type: "application/x-www-form-urlencoded"')),(0,a.mdx)("h4",{id:"sample-code"},"Sample code"),(0,a.mdx)("p",null,"This is an example code that shows how to implement a redirect_uri endpoint on your server."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"var express = require('express');\nvar router = express.Router();\nconst axios = require('axios');\nconst querystring = require('querystring');\n\nconst demoClient = {\n  client_id: 'xxxxxxxx',\n  client_secret: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',\n};\n\n/**\n * this is the callback endpoint as passed in the redirect_uri parameter\n * and should be whitelisted in the oauth client application\n */\nrouter.get('/auth/overwolf/callback', function(req, res, next) {\n  const client = demoClient;\n  axios.post('https://accounts.overwolf.com/oauth2/token',\n    querystring.stringify({\n      client_id: client.client_id,\n      client_secret: client.client_secret,\n      grant_type: 'authorization_code',\n      code: req.query.code,\n      redirect_uri: 'http://localhost:5000/auth/overwolf/callback'\n    }),\n    {\n      headers: {\n        \"Content-Type\": \"application/x-www-form-urlencoded\"\n      }\n    }).then(function(response) {\n      // the response will contain the access token to be used\n      console.log(response);\n      res.json({});\n    }).catch((e) => {\n      console.error(e)\n      res.send('err')\n  });\n});\n\nrouter.get('/oidcresult', function(req, res, next) {\n  res.json(req.query);\n});\n\nmodule.exports = router;\n")),(0,a.mdx)("p",null,"As you can see, ",(0,a.mdx)("inlineCode",{parentName:"p"},"redirect_uri")," is ",(0,a.mdx)("inlineCode",{parentName:"p"},"http://localhost:5000/auth/overwolf/callback"),". This page receives the auth token (or login error) once the auth process is finished on the OW side."),(0,a.mdx)("h2",{id:"1-engage-the-sso-flow"},"1. Engage the SSO flow."),(0,a.mdx)("p",null,"The first step is to implement a login button on your website.\nClicking the button should open a new tab or popup window by implementing this GET request:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"GET https://accounts.overwolf.com/oauth2/auth?response_type=code&client_id={client id}&redirect_uri={redirect_uri}&scope={desired scope separated by '+', e.g: openid+profile+email}\n")),(0,a.mdx)("h4",{id:"required-query-params-1"},"Required Query params:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"response_type"),(0,a.mdx)("li",{parentName:"ul"},"client_id"),(0,a.mdx)("li",{parentName:"ul"},"redirect_uri"),(0,a.mdx)("li",{parentName:"ul"},"scope - here you can define which details you would like to fetch from OW server.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Currently you can get the user openID, profile image, email. Soon, you will be able to get also the ",(0,a.mdx)("inlineCode",{parentName:"li"},"active subscriptions")," for this user."),(0,a.mdx)("li",{parentName:"ul"},"During the login process the user will have to accept each scope, through the consent form (more details below).")))),(0,a.mdx)("h2",{id:"2-login-on-overwolf"},"2. Login on Overwolf"),(0,a.mdx)("p",null,"Once the SSO flow is engaged, the user is redirected to the OW hosted login page:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"OW login screenshot",src:n(10529).Z,width:"1129",height:"706"})),(0,a.mdx)("p",null,"On successful login, the user will see a consent screen to requested scopes:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"OW login consent",src:n(70560).Z,width:"564",height:"703"})),(0,a.mdx)("p",null,"After the consent, we will redirect the user back to the redirect_uri pre-defined in the registration process."),(0,a.mdx)("h2",{id:"3-get-the-auth-token"},"3. Get the auth token"),(0,a.mdx)("p",null,"If no error occurred during the flow, the user is redirected to the redirect_uri endpoint, that POSTS the request for the auth-token.\nYou can see how this POST request looks like in the ",(0,a.mdx)("a",{parentName:"p",href:"#create-redirect_uri-endpoint"},"Create redirect_uri endpoint\n")," section."),(0,a.mdx)("p",null,"Once the POST completed, you will get the following auth token details:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"access_token"),(0,a.mdx)("li",{parentName:"ul"},"expires_in"),(0,a.mdx)("li",{parentName:"ul"},"id_token"),(0,a.mdx)("li",{parentName:"ul"},"scope"),(0,a.mdx)("li",{parentName:"ul"},"token_type")),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Active Subscriptions")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"This feature (get info about active subscriptions) will be released soon. We will update this page accordingly."))),(0,a.mdx)("h3",{id:"get-user-info-from-token"},"Get user info from token"),(0,a.mdx)("p",null,"Once you have the encrypted JWT token, you can easily decode/decrypt it on your server side code using one of the ",(0,a.mdx)("a",{parentName:"p",href:"https://jwt.io/"},"available JWT libraries")," and get some additional user info:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Sub (username)"),(0,a.mdx)("li",{parentName:"ul"},"Nickname"),(0,a.mdx)("li",{parentName:"ul"},"Picture (avatar)"),(0,a.mdx)("li",{parentName:"ul"},"Email"),(0,a.mdx)("li",{parentName:"ul"},"Other JWT properties.")),(0,a.mdx)("p",null,"Most JWT packages can decode the token without verifying it, but in the production environment, it's recommended to verify the token to make sure that it hasn't been tampered with."),(0,a.mdx)("p",null,"For example, the npm package ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsonwebtoken"},"jsonwebtoken")," offers ",(0,a.mdx)("inlineCode",{parentName:"p"},"jwt.decode()")," to decode the token  and ",(0,a.mdx)("inlineCode",{parentName:"p"},"jwt.verify()")," to verify it."),(0,a.mdx)("p",null,"Note that for verification, the OW public key is required. You can find it on this endpoint: ",(0,a.mdx)("a",{parentName:"p",href:"https://accounts.overwolf.com/oauth2/jwks.json"},"https://accounts.overwolf.com/oauth2/jwks.json"),"."),(0,a.mdx)("h2",{id:"4-close-the-login-window"},"4. Close the login window."),(0,a.mdx)("p",null,"Now, we can safely close the login window."),(0,a.mdx)("p",null,"The login process is complete."),(0,a.mdx)("h2",{id:"5-live-demo"},"5. Live Demo"),(0,a.mdx)("p",null,"Below you can find a live example of the Overwolf SSO Process:"),(0,a.mdx)("p",null,"After clicking on this page, a new tab will open, and you will be able to login with your Overwolf username. Afterwards, you'll be sent back to this page, and the token will be displayed."),(0,a.mdx)("p",null,"Of course, in practice, you will do something more meaningful with the auth token..."),(0,a.mdx)(l,{mdxType:"SSODemo"}),(0,a.mdx)("p",null,"Note: currently, after login, you can't logout. Soon we will add here a logout button that enables you to quickly logout."),(0,a.mdx)("h2",{id:"download-from-github"},"Download from Github"),(0,a.mdx)("p",null,"The server side code implemented in our server (in the redirect_uri), can be downloaded from ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/ow-sso"},"our Github"),"."))}f.isMDXComponent=!0},10529:function(e,t,n){t.Z=n.p+"assets/images/ow_login-a25e393a9edec5e39eed235fac8415bd.png"},70560:function(e,t,n){t.Z=n.p+"assets/images/ow_login_consent-a4ceb6247dd9845a16bbc1ca3d8ad0ca.png"}}]);