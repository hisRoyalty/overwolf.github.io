"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[5050],{35318:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>c});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),d=m(a),N=i,c=d["".concat(s,".").concat(N)]||d[N]||y[N]||l;return a?n.createElement(c,p(p({ref:t},o),{},{components:a})):n.createElement(c,p({ref:t},o))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,p=new Array(l);p[0]=N;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,p[1]=r;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},45935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>I,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var n=a(25773),i=(a(27378),a(35318));const l={id:"instream-ads",image:"/img/embed/getting-started.jpg",title:"[Experimental] Instream Ads",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},p=void 0,r={unversionedId:"start/monetize-your-app/experimental/instream-ads",id:"start/monetize-your-app/experimental/instream-ads",title:"[Experimental] Instream Ads",description:"Instream Advertising is the practice of playing video Ads within actual content,",source:"@site/../pages/start/monetize-your-app/experimental/instream-ads.mdx",sourceDirName:"start/monetize-your-app/experimental",slug:"/start/monetize-your-app/experimental/instream-ads",permalink:"/start/monetize-your-app/experimental/instream-ads",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/monetize-your-app/experimental/instream-ads.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1713092212,formattedLastUpdatedAt:"Apr 14, 2024",frontMatter:{id:"instream-ads",image:"/img/embed/getting-started.jpg",title:"[Experimental] Instream Ads",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"start",previous:{title:"[Experimental] CPA Ads",permalink:"/start/monetize-your-app/experimental/cpa-ads"},next:{title:"[Experimental] User Identity",permalink:"/start/monetize-your-app/experimental/user-identity"}},s={},m=[{value:"Technical Specification",id:"technical-specification",level:2},{value:"Example Implementation",id:"example-implementation",level:3},{value:"Further Reading",id:"further-reading",level:2}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=o("Tabs"),y=o("TabItem"),N=o("HighlightDirectiveIndex"),c=o("DisplayJSONRoot"),O=o("DisplayJSONCommented"),u=o("DisplayJSONComment"),S=o("DisplayJSONRecord"),D=o("DisplayJSONVariable"),J=o("DisplayJSONField"),k=o("DisplayJSONName"),x=o("DisplayJSONNameLiteral"),h=o("DisplayJSONAssignment"),T=o("DisplayJSONValue"),g=o("DisplayJSONLiteral"),v=o("DisplayJSONObject"),f=o("DisplayJSONPrimitive"),b=o("DisplayJSONCallback"),w=o("DisplayJSONParameters"),C=o("DisplayJSONLinked"),A={toc:m};function I(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Instream Advertising is the practice of playing video Ads ",(0,i.kt)("strong",{parentName:"p"},"within")," actual content,\n",(0,i.kt)("strong",{parentName:"p"},"in response to a direct user action"),", rather than just passively/outside of/next\nto the content (which is known as ",(0,i.kt)("strong",{parentName:"p"},'"Outstream Advertising"'),")."),(0,i.kt)("p",null,"In the context of Overwolf, we have recently began testing of a new, Instream\nadvertising format, which will show a video (with sound) directly within\n",(0,i.kt)("strong",{parentName:"p"},"existing video players","*")," in your App, before the video content itself\n(also known as ",(0,i.kt)("strong",{parentName:"p"},'"',(0,i.kt)("a",{parentName:"strong",href:"https://iabtechlab.com/industry-adoption-of-amended-iab-tech-lab-guidelines-is-vital-to-drive-change/"},"Preroll"),' Advertisements"'),")."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"*"," Any video player ",(0,i.kt)("strong",{parentName:"em"},"within the App")," that is fully controlled by the App\n(does not include any external video players embedded in the App, like Youtube,\nTwitch.tv, or existing video Ad Containers).")),(0,i.kt)("h2",{id:"technical-specification"},"Technical Specification"),(0,i.kt)(d,{groupId:"specifications",mdxType:"Tabs"},(0,i.kt)(y,{value:"product-specification",label:"Product Specification",mdxType:"TabItem"},(0,i.kt)("p",null,"The Overwolf ",(0,i.kt)("a",{parentName:"p",href:"/start/monetize-your-app/advertising/ads-sdk"},"Ads SDK")," allows you to easily create\ninstream Ads for your App's video content, utilizing a container element."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"*","This container","*")," ",(0,i.kt)(N,{parentName:"p",rawContent:["MUST"],extra:{},mdxType:"HighlightDirectiveIndex"})," fit the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["MUST"],extra:{},mdxType:"HighlightDirectiveIndex"})," be transparent, and pass input through (except when an Ad is showing)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["MUST ALWAYS"],extra:{},mdxType:"HighlightDirectiveIndex"})," be bigger than 640x480 pixels (width/height respectively)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["MUST ALWAYS"],extra:{},mdxType:"HighlightDirectiveIndex"}),' have the same size/location as the video player it is "related" to\n(even if the player is resized/moved)'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["MUST ONLY"],extra:{},mdxType:"HighlightDirectiveIndex"}),' start playing as a result of the user clicking a clearly marked "play"\nbutton associated with the video content')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"*","The App's video","*")," (being played within the container) ",(0,i.kt)(N,{parentName:"p",rawContent:["MUST"],extra:{},mdxType:"HighlightDirectiveIndex"})," fit the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["MUST"],extra:{},mdxType:"HighlightDirectiveIndex"})," be longer than 5 seconds"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["MUST ONLY"],extra:{},mdxType:"HighlightDirectiveIndex"}),' start playing as a result of the user clicking a clearly defined "Play" button')),(0,i.kt)("p",null,"Finally, the ",(0,i.kt)("strong",{parentName:"p"},"*","Instream Ad","*")," itself will ",(0,i.kt)(N,{parentName:"p",rawContent:["ALWAYS"],extra:{},mdxType:"HighlightDirectiveIndex"})," comply with the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["ALWAYS"],extra:{},mdxType:"HighlightDirectiveIndex"})," acts as a ",(0,i.kt)("a",{parentName:"li",href:"https://iabtechlab.com/industry-adoption-of-amended-iab-tech-lab-guidelines-is-vital-to-drive-change/"},"Preroll")," Ad to any individual video content"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["ALWAYS"],extra:{},mdxType:"HighlightDirectiveIndex"})," starts with sound turned on (users can mute it while it plays)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["SOMETIMES"],extra:{},mdxType:"HighlightDirectiveIndex"})," is skippable (with full lengths usually ranging between 15-30 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(N,{parentName:"li",rawContent:["SOMETIMES"],extra:{},mdxType:"HighlightDirectiveIndex"})," is unskippable (with lengths usually ranging between 5-30 seconds)"))),(0,i.kt)(y,{value:"code-specification",label:"Code Specification",mdxType:"TabItem"},(0,i.kt)(c,{name:"OwAdInstream",id:"owadinstream",mdxType:"DisplayJSONRoot"},(0,i.kt)(O,{parentName:"DisplayJSONRoot",hasContent:!0,mdxType:"DisplayJSONCommented"},(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"The properties used for Instream Ads",start:"/**",syntax:"comment",linePrefix:"* ",indent:1,end:"*/"},mdxType:"DisplayJSONComment"}),(0,i.kt)(S,{parentName:"DisplayJSONCommented",mdxType:"DisplayJSONRecord"},(0,i.kt)(D,{parentName:"DisplayJSONRecord",type:"type",mdxType:"DisplayJSONVariable"},(0,i.kt)(J,{parentName:"DisplayJSONVariable",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"InstreamAdProperties",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:"=",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(g,{parentName:"DisplayJSONValue",mdxType:"DisplayJSONLiteral"},(0,i.kt)(v,{parentName:"DisplayJSONLiteral",brackets:{opening:"{",closing:"}"},mdxType:"DisplayJSONObject"},(0,i.kt)(O,{parentName:"DisplayJSONObject",hasContent:!0,mdxType:"DisplayJSONCommented"},(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"Is this an instream Ad. Set to true for this set of properties",start:"/**",syntax:"comment",linePrefix:"* ",indent:1,end:"*/"},mdxType:"DisplayJSONComment"}),(0,i.kt)(J,{parentName:"DisplayJSONCommented",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"instream",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:":",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(f,{parentName:"DisplayJSONValue",value:"true",mdxType:"DisplayJSONPrimitive"})))),(0,i.kt)(O,{parentName:"DisplayJSONObject",hasContent:!0,mdxType:"DisplayJSONCommented"},(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"The duration of the video this instream Ad will be played in",start:"/**",syntax:"comment",linePrefix:"* ",indent:1,end:"*/"},mdxType:"DisplayJSONComment"}),(0,i.kt)(J,{parentName:"DisplayJSONCommented",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"streamDurationMs",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:":",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(f,{parentName:"DisplayJSONValue",value:"number",mdxType:"DisplayJSONPrimitive"})))),(0,i.kt)(O,{parentName:"DisplayJSONObject",hasContent:!0,mdxType:"DisplayJSONCommented"},(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"The number of the video this instream Ad will be played in in the current session\n\nFor example:\n- The first video in a session will be `1`.\n- The second video in a session will be `2`.\n- The `n`th video in a session will be `n`.",start:"/**",syntax:"comment",linePrefix:"* ",indent:1,end:"*/"},mdxType:"DisplayJSONComment"}),(0,i.kt)(J,{parentName:"DisplayJSONCommented",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"streamVideoCount",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:":",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(f,{parentName:"DisplayJSONValue",value:"number",mdxType:"DisplayJSONPrimitive"})))),(0,i.kt)(O,{parentName:"DisplayJSONObject",hasContent:!0,mdxType:"DisplayJSONCommented"},(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"The volume that should be used for the instream Ad (between 0 and 1, defaults to 1)\n\nNote - If the volume is set to 0, no Ad will be played",start:"/**",syntax:"comment",linePrefix:"* ",indent:1,end:"*/"},mdxType:"DisplayJSONComment"}),(0,i.kt)(J,{parentName:"DisplayJSONCommented",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"volume",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:":",optional:!0,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(f,{parentName:"DisplayJSONValue",value:"number",mdxType:"DisplayJSONPrimitive"}))))))))))),(0,i.kt)(O,{parentName:"DisplayJSONRoot",hasContent:!0,mdxType:"DisplayJSONCommented"},(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"The type of an Overwolf Instream Ad",start:"//",syntax:"comment"},mdxType:"DisplayJSONComment"}),(0,i.kt)(S,{parentName:"DisplayJSONCommented",mdxType:"DisplayJSONRecord"},(0,i.kt)(D,{parentName:"DisplayJSONRecord",type:"type",mdxType:"DisplayJSONVariable"},(0,i.kt)(J,{parentName:"DisplayJSONVariable",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"OwAdInstream",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:"=",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(g,{parentName:"DisplayJSONValue",mdxType:"DisplayJSONLiteral"},(0,i.kt)(v,{parentName:"DisplayJSONLiteral",brackets:{opening:"{",closing:"}"},mdxType:"DisplayJSONObject"},(0,i.kt)(O,{parentName:"DisplayJSONObject",hasContent:!0,mdxType:"DisplayJSONCommented"},(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"The OwAd constructor",start:"/**",syntax:"comment",linePrefix:"* ",indent:1,end:"*/"},mdxType:"DisplayJSONComment"}),(0,i.kt)(J,{parentName:"DisplayJSONCommented",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"constructor",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:":",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(g,{parentName:"DisplayJSONValue",mdxType:"DisplayJSONLiteral"},(0,i.kt)(b,{parentName:"DisplayJSONLiteral",mdxType:"DisplayJSONCallback"},(0,i.kt)(w,{parentName:"DisplayJSONCallback",brackets:{opening:"(",closing:")"},mdxType:"DisplayJSONParameters"},(0,i.kt)(J,{parentName:"DisplayJSONParameters",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"options",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:":",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(C,{parentName:"DisplayJSONValue",mdxType:"DisplayJSONLinked"},(0,i.kt)(x,{parentName:"DisplayJSONLinked",value:"InstreamAdProperties",mdxType:"DisplayJSONNameLiteral"}))))),(0,i.kt)(h,{parentName:"DisplayJSONCallback",value:"=>",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONCallback",mdxType:"DisplayJSONValue"},(0,i.kt)(C,{parentName:"DisplayJSONValue",mdxType:"DisplayJSONLinked"},(0,i.kt)(x,{parentName:"DisplayJSONLinked",value:"OwAdInstream",mdxType:"DisplayJSONNameLiteral"})))))))),(0,i.kt)(O,{parentName:"DisplayJSONObject",hasContent:!0,mdxType:"DisplayJSONCommented"},(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"Whenever one of these events is fired, it indicates that the Video Ad is done,\nand the underlying video should start playing",start:"/*",syntax:"comment",linePrefix:"* ",indent:1,end:"*/"},mdxType:"DisplayJSONComment"}),(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"Event fired when a video Ad is skipped before completion",start:"/**",syntax:"comment",linePrefix:"* ",indent:1,end:"*/"},mdxType:"DisplayJSONComment"}),(0,i.kt)(J,{parentName:"DisplayJSONCommented",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"video_ad_skipped",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:":",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(g,{parentName:"DisplayJSONValue",mdxType:"DisplayJSONLiteral"},(0,i.kt)(b,{parentName:"DisplayJSONLiteral",mdxType:"DisplayJSONCallback"},(0,i.kt)(w,{parentName:"DisplayJSONCallback",brackets:{opening:"(",closing:")"},mdxType:"DisplayJSONParameters"}),(0,i.kt)(h,{parentName:"DisplayJSONCallback",value:"=>",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONCallback",mdxType:"DisplayJSONValue"},(0,i.kt)(f,{parentName:"DisplayJSONValue",value:"void",mdxType:"DisplayJSONPrimitive"}))))))),(0,i.kt)(O,{parentName:"DisplayJSONObject",hasContent:!0,mdxType:"DisplayJSONCommented"},(0,i.kt)(u,{parentName:"DisplayJSONCommented",sequence:{content:"Event fired when a video Ad is fully completed",start:"/**",syntax:"comment",linePrefix:"* ",indent:1,end:"*/"},mdxType:"DisplayJSONComment"}),(0,i.kt)(J,{parentName:"DisplayJSONCommented",mdxType:"DisplayJSONField"},(0,i.kt)(k,{parentName:"DisplayJSONField",mdxType:"DisplayJSONName"},(0,i.kt)(x,{parentName:"DisplayJSONName",value:"complete",mdxType:"DisplayJSONNameLiteral"})),(0,i.kt)(h,{parentName:"DisplayJSONField",value:":",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONField",mdxType:"DisplayJSONValue"},(0,i.kt)(g,{parentName:"DisplayJSONValue",mdxType:"DisplayJSONLiteral"},(0,i.kt)(b,{parentName:"DisplayJSONLiteral",mdxType:"DisplayJSONCallback"},(0,i.kt)(w,{parentName:"DisplayJSONCallback",brackets:{opening:"(",closing:")"},mdxType:"DisplayJSONParameters"}),(0,i.kt)(h,{parentName:"DisplayJSONCallback",value:"=>",optional:!1,mdxType:"DisplayJSONAssignment"}),(0,i.kt)(T,{parentName:"DisplayJSONCallback",mdxType:"DisplayJSONValue"},(0,i.kt)(f,{parentName:"DisplayJSONValue",value:"void",mdxType:"DisplayJSONPrimitive"}))))))))))))))))),(0,i.kt)("h3",{id:"example-implementation"},"Example Implementation"),(0,i.kt)("p",null,"Assuming the following element structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Component Structure"',title:'"Component','Structure"':!0},"video-content # Controlling the size of all children, who are overlaid on top of eachother\n\u251c\u2500\u2500 video-player # The actual video player\n\u251c\u2500\u2500 instream-container # A transparent, passthrough div to contain the instream Ad\n")),(0,i.kt)("p",null,"The following code should work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example Implementation"',title:'"Example','Implementation"':!0},"// Get the container for the Instream Ad Container\nconst containerElement = document.getElementById(/* 'instream-container' */);\n\n// Create the instream Ad\nconst instream = new OwAd(containerElement, {\n  instream: true,\n  streamDurationMs: 10000,\n  streamVideoCount: 1,\n  volume: 1,\n} as InstreamAdProperties)\n\n// Add relevant event listeners.\ninstream.addEventListener('video_ad_skipped', () => {\n  // onAdSkipped();\n  shutdown();\n});\ninstream.addEventListener('complete', () => {\n  // onAdCompleted();\n  shutdown();\n});\n\n// The command to shut down the instream Ad once it's been played.\nconst shutdown = () => instream.shutdown();\n")),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"Instream Ads, as well as all other Overwolf Ads, are based on ",(0,i.kt)("a",{parentName:"p",href:"https://www.iab.com/"},"IAB")," standards, which you can read more about ",(0,i.kt)("a",{parentName:"p",href:"https://iabtechlab.com/industry-adoption-of-amended-iab-tech-lab-guidelines-is-vital-to-drive-change/"},"here")))}I.isMDXComponent=!0}}]);