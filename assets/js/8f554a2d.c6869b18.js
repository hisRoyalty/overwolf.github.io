"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[951],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),i=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),c=n,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=a(25773),n=(a(27378),a(35318));const l={id:"web",image:"/img/embed/api-docs.jpg",title:"overwolf.web API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},o=void 0,s={unversionedId:"api/web/web",id:"api/web/web",title:"overwolf.web API",description:"Use this API to open a local HTTP web-server and a WebSocket.",source:"@site/../pages/api/web/web.mdx",sourceDirName:"api/web",slug:"/api/web/",permalink:"/api/web/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/web/web.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1716366257,formattedLastUpdatedAt:"May 22, 2024",frontMatter:{id:"web",image:"/img/embed/api-docs.jpg",title:"overwolf.web API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1},category:{id:"overwolf"}}},sidebar:"api",previous:{title:"overwolf.utils API",permalink:"/api/utils/"},next:{title:"overwolf.web.webserver API",permalink:"/api/web/webserver"}},d={},i=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"createServer(port, callback)",id:"createserverport-callback",level:2},{value:"Version added: 0.93",id:"version-added-093",level:4},{value:"Permissions required: Web",id:"permissions-required-web",level:4},{value:"Usage Example",id:"usage-example",level:4},{value:"sendHttpRequest(url, method, headers, data, callback)",id:"sendhttprequesturl-method-headers-data-callback",level:2},{value:"Version added: 0.126",id:"version-added-0126",level:4},{value:"Permissions required: Web",id:"permissions-required-web-1",level:4},{value:"<code>headers</code> notes",id:"headers-notes",level:4},{value:"createWebSocket(connectionParams, callback)",id:"createwebsocketconnectionparams-callback",level:2},{value:"Version added: 0.129",id:"version-added-0129",level:4},{value:"Permissions required: Web",id:"permissions-required-web-2",level:4},{value:"<code>connectionParams</code> notes",id:"connectionparams-notes",level:4},{value:"WebSocketConnectionParams Object",id:"websocketconnectionparams-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-1",level:4},{value:"HttpRequestMethods enum",id:"httprequestmethods-enum",level:2},{value:"Version added: 0.129",id:"version-added-0129-2",level:4},{value:"FetchHeader Object",id:"fetchheader-object",level:2},{value:"Version added: 0.126",id:"version-added-0126-1",level:4},{value:"Object Data Example",id:"object-data-example",level:4},{value:"MessageType enum",id:"messagetype-enum",level:2},{value:"Version added: 0.129",id:"version-added-0129-3",level:4},{value:"Example data: Success",id:"example-data-success",level:4},{value:"CreateServerResult Object",id:"createserverresult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"SendHttpRequestResult Object",id:"sendhttprequestresult-object",level:2},{value:"Example data: Success",id:"example-data-success-2",level:4},{value:"CreateWebSocketResult Object",id:"createwebsocketresult-object",level:2},{value:"Example data: Success",id:"example-data-success-3",level:4}],p={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to open a local HTTP web-server and a WebSocket."),(0,n.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#createserverport-callback"},"overwolf.web.createServer()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#sendhttprequesturl-method-headers-data-callback"},"overwolf.web.sendHttpRequest()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#createwebsocketconnectionparams-callback"},"overwolf.web.createWebSocket()"))),(0,n.kt)("h2",{id:"types-reference"},"Types Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#websocketconnectionparams-object"},"overwolf.web.WebSocketConnectionParams")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#httprequestmethods-enum"},"overwolf.web.enums.HttpRequestMethods")," enum"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#messagetype-enum"},"overwolf.web.enums.MessageType")," enum"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#fetchheader-object"},"overwolf.web.FetchHeader")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#createserverresult-object"},"overwolf.web.CreateServerResult")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#sendhttprequestresult-object"},"overwolf.web.SendHttpRequestResult")," Object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#createwebsocketresult-object"},"overwolf.web.CreateWebSocketResult")," Object")),(0,n.kt)("h2",{id:"createserverport-callback"},"createServer(port, callback)"),(0,n.kt)("h4",{id:"version-added-093"},"Version added: 0.93"),(0,n.kt)("h4",{id:"permissions-required-web"},"Permissions required: Web"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Creates a web server.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The port to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#createserverresult-object"},"CreateServerResult")," Object"),(0,n.kt)("td",{parentName:"tr",align:null},"Container for the server object")))),(0,n.kt)("h4",{id:"usage-example"},"Usage Example"),(0,n.kt)("p",null,"Here you can see a sample code for using the overwolf.web and overwolf.web.webserver APIs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'let _port = 61234;\n\noverwolf.web.createServer(_port, serverInfo => {\n    if (serverInfo.status == "error") {\n        console.log("Failed to create server");\n        return;\n    } else {\n        _server = serverInfo.server;\n        // it is always good practice to removeListener before adding it\n        _server.onRequest.removeListener(onRequest);\n        _server.onRequest.addListener(onRequest);\n\n        _server.listen(info => {\n            console.log("Server listening status on port " + _port + " : " + info);\n            //info = { "status": "success", "url": "http://localhost:61234/"}\n        });\n    }\n});\n\nfunction onRequest(info) {\n    console.log(info.content);\n    // info = { "content": "{\'hello\': \'world\'}", "contentType": "application/json", "url": "http://localhost:59873/"}\n}\n\n...\n\n_server.close();\n')),(0,n.kt)("h2",{id:"sendhttprequesturl-method-headers-data-callback"},"sendHttpRequest(url, method, headers, data, callback)"),(0,n.kt)("h4",{id:"version-added-0126"},"Version added: 0.126"),(0,n.kt)("h4",{id:"permissions-required-web-1"},"Permissions required: Web"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Send an https request (of different methods) to localhost/127.0.0.1 while by-passing a valid certificate verification.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"method"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#httprequestmethods-enum"},"HttpRequestMethods")," enum"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"headers"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#fetchheader-object"},"FetchHeader"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"an array of http headers (key,value) pairs. See ",(0,n.kt)("a",{parentName:"td",href:"#headers-notes"},"notes")," below")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"string (Optional)"),(0,n.kt)("td",{parentName:"tr",align:null},"The data being sent to the server (relevant for POST/PUT requests)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#sendhttprequestresult-object"},"SendHttpRequestResult")," Object"),(0,n.kt)("td",{parentName:"tr",align:null},"Container for the send requests")))),(0,n.kt)("h4",{id:"headers-notes"},(0,n.kt)("inlineCode",{parentName:"h4"},"headers")," notes"),(0,n.kt)("p",null,"An example of ",(0,n.kt)("a",{parentName:"p",href:"#fetchheader-object"},"FetchHeader")," objects array:  ",(0,n.kt)("inlineCode",{parentName:"p"},'[{ key: "Content-Type", value: "application/json" }]'),"."),(0,n.kt)("h2",{id:"createwebsocketconnectionparams-callback"},"createWebSocket(connectionParams, callback)"),(0,n.kt)("h4",{id:"version-added-0129"},"Version added: 0.129"),(0,n.kt)("h4",{id:"permissions-required-web-2"},"Permissions required: Web"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Creates a WebSocket client to localhost/127.0.0.1.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"connectionParams"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#websocketconnectionparams-object"},"WebSocketConnectionParams")," Object"),(0,n.kt)("td",{parentName:"tr",align:null},"connection params. See ",(0,n.kt)("a",{parentName:"td",href:"#connectionparams-notes"},"notes")," below")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#createwebsocketresult-object"},"CreateWebSocketResult")," Object"),(0,n.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,n.kt)("h4",{id:"connectionparams-notes"},(0,n.kt)("inlineCode",{parentName:"h4"},"connectionParams")," notes"),(0,n.kt)("p",null,"An example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "secured":true,\n    "port": int,\n    "credentials": {\n        "username": "riot",\n        "password":  "string" (e.g lcuCredentialsoverw.native_token)\n      },\n      "protocols":["wamp"]\n}\n')),(0,n.kt)("h2",{id:"websocketconnectionparams-object"},"WebSocketConnectionParams Object"),(0,n.kt)("h4",{id:"version-added-0129-1"},"Version added: 0.129"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Container for the connection params.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"secured"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"The port to use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"credentials"),(0,n.kt)("td",{parentName:"tr",align:null},"LoginCredentials"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"protocols"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"httprequestmethods-enum"},"HttpRequestMethods enum"),(0,n.kt)("h4",{id:"version-added-0129-2"},"Version added: 0.129"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"HTTP requests methods.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GET"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HEAD"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"POST"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PUT"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"fetchheader-object"},"FetchHeader Object"),(0,n.kt)("h4",{id:"version-added-0126-1"},"Version added: 0.126"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Container for a key value pair that represent an HTTP header.")),(0,n.kt)("p",null,"Read more about http headers ",(0,n.kt)("a",{parentName:"p",href:"https://flaviocopes.com/http-request-headers/"},"here"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"object-data-example"},"Object Data Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ "key": "Content-Type", "value": "application/json" }\n')),(0,n.kt)("h2",{id:"messagetype-enum"},"MessageType enum"),(0,n.kt)("h4",{id:"version-added-0129-3"},"Version added: 0.129"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Describes different types on messages.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ping"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"binary"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,n.kt)("h2",{id:"createserverresult-object"},"CreateServerResult Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"success")),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"web/webserver"},"WebServer")," object"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,n.kt)("p",null,"A callback function which returns the status of the request and an object with two fields: A status string and a server object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success",\n    "server": {\n        "onRequest": {}\n    }\n}\n')),(0,n.kt)("h2",{id:"sendhttprequestresult-object"},"SendHttpRequestResult Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"success")),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"example-data-success-2"},"Example data: Success"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ "status": "success" }\n')),(0,n.kt)("h2",{id:"createwebsocketresult-object"},"CreateWebSocketResult Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"success")),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"client"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"web/websocket"},"WebSocket")," object"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"example-data-success-3"},"Example data: Success"),(0,n.kt)("p",null,"This call returns a status and a WebSocket object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "status": "success",\n     "client": "IOverwolfWebSocket"\n}\n')))}u.isMDXComponent=!0}}]);