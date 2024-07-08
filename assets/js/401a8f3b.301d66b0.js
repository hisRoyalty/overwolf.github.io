"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4614],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return a?o.createElement(h,i(i({ref:t},u),{},{components:a})):o.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52362:(e,t,a)=>{a.d(t,{ZP:()=>i});var o=a(25773),n=(a(27378),a(35318));const r={toc:[]};function i(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When creating an Ad container, apps must also handle cases where no Ad will be shown."),(0,n.kt)("p",null,"As a best practice, our recommendation is to create a simple placeholder image, surrounded by empty space. More specifically:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Place an image (e.g. The app's logo, your company's logo, or even a mascot) ",(0,n.kt)("strong",{parentName:"li"},"underneath")," the Ad container, alongside text/any other details you want.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Make sure that the image does not stick out from the rest of the app."),(0,n.kt)("li",{parentName:"ul"},"The image + any other graphics should fit within a centered rectangle, and be no bigger than 250x250 pixels."),(0,n.kt)("li",{parentName:"ul"},"The remaining placeholder must be flatly colored."))),(0,n.kt)("li",{parentName:"ul"},"The entire placeholder must be at the exact size of the Ad container, and must ",(0,n.kt)("strong",{parentName:"li"},"always")," sit exactly behind it, making it visible only when no Ads are loaded.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Example of a properly placed/sized placeholder:\n",(0,n.kt)("img",{alt:"Ad Container Placeholder",src:a(24930).Z,width:"1220",height:"610"}))))}i.isMDXComponent=!0},33353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=a(25773),n=(a(27378),a(35318)),r=a(52362);const i={id:"best-practices",image:"/img/embed/api-best-practices.jpg",title:"Best Practices",sidebar_label:"Best Practices",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},s=void 0,l={unversionedId:"topics/best-practices/best-practices",id:"topics/best-practices/best-practices",title:"Best Practices",description:"In this section, you can find our best practices for developing and implementing your Overwolf app. It is the sum of experience of both ourselves and the entire developer community. As our platform grows, and as we learn from more developers\u2019 experience, these practices and recommendations will be updated. We'd love to hear your suggestions and learn from your experience, so please feel free to send us your feedback at developers@overwolf.com or suggest it directly as an edit to the relevant page here using the 'Edit' button.",source:"@site/../pages/topics/best-practices/best-practices.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/",permalink:"/topics/best-practices/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/best-practices.mdx",tags:[],version:"current",lastUpdatedBy:"JacksAtWork",lastUpdatedAt:1720433988,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{id:"best-practices",image:"/img/embed/api-best-practices.jpg",title:"Best Practices",sidebar_label:"Best Practices",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",next:{title:"App specific experience",permalink:"/topics/best-practices/app-specific-experience"}},p={},u=[{value:"Product &amp; Design",id:"product--design",level:2},{value:"FTUE (First-Time User Experience)",id:"ftue-first-time-user-experience",level:3},{value:"App support page",id:"app-support-page",level:3},{value:"Discord server",id:"discord-server",level:3},{value:"Monetization",id:"monetization",level:3},{value:"Tooltips",id:"tooltips",level:3},{value:"Ask for feedback",id:"ask-for-feedback",level:3},{value:"In and Out-of-game behavior",id:"in-and-out-of-game-behavior",level:3},{value:"Hotkeys",id:"hotkeys",level:3},{value:"Window controls",id:"window-controls",level:3},{value:"App look&#39;n&#39;feel",id:"app-looknfeel",level:3},{value:"Create a conversation",id:"create-a-conversation",level:3},{value:"Plan ahead",id:"plan-ahead",level:3},{value:"Game\u2019s intellectual property terms and conditions",id:"games-intellectual-property-terms-and-conditions",level:3},{value:"Error notifications",id:"error-notifications",level:3},{value:"Ad container placeholder",id:"ad-container-placeholder",level:3},{value:"Analytics",id:"analytics",level:3},{value:"Technical",id:"technical",level:2},{value:"Windows",id:"windows",level:3},{value:"manifest.json",id:"manifestjson",level:3},{value:"Overwolf APIs",id:"overwolf-apis",level:3},{value:"App\u2019s size",id:"apps-size",level:3},{value:"Testing",id:"testing",level:3}],d=(c="ImageBoxModal",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const m={toc:u};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section, you can find our best practices for developing and implementing your Overwolf app. It is the sum of experience of both ourselves and the entire developer community. As our platform grows, and as we learn from more developers\u2019 experience, these practices and recommendations will be updated. We'd love to hear your suggestions and learn from your experience, so please feel free to send us your feedback at ",(0,n.kt)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com")," or suggest it directly as an edit to the relevant page here using the 'Edit' button."),(0,n.kt)("h2",{id:"product--design"},"Product & Design"),(0,n.kt)("h3",{id:"ftue-first-time-user-experience"},"FTUE (First-Time User Experience)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Right after installing your app, the user who has never used it before probably needs guidance in order to understand the app\u2019s features and easily make the most out of it. A good FTUE which showcases user value greatly increases the chances of retaining your users in the long term.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A good first step is creating an instructional page detailing main app features and explaining what user should do next to start using the app (if there's configuration or sign ups required). A larger scale FTUE will break down app features by providing a step-by-step tutorial for each."))),(0,n.kt)("h3",{id:"app-support-page"},"App support page"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It's important to make sure that a user encountering an issue has somewhere to go and get help for it. Towards that end, you must create a support page before your new app goes live. This support page should include:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"FAQ \u2013 Common questions users ask you repeatedly, or just key messages such as - What Does your app do? How should one use it? What games are supported by it? etc."),(0,n.kt)("li",{parentName:"ul"},"Troubleshooting \u2013 Issues reported by many users or recurring bugs should be posted along with solves."),(0,n.kt)("li",{parentName:"ul"},"Your app\u2019s changelog and patch notes so users can follow its progress and know what to expect when updating."))),(0,n.kt)("li",{parentName:"ul"},"Don\u2019t forget to place a link to your support page in a prominent location in the app."),(0,n.kt)("li",{parentName:"ul"},"Find an example for a support page ",(0,n.kt)("a",{parentName:"li",href:"https://support.overwolf.com/support/solutions/folders/9000191299"},"here"))),(0,n.kt)("h3",{id:"discord-server"},"Discord server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We recommend setting up a Discord server and placing an invite link within the app."),(0,n.kt)("li",{parentName:"ul"},"Discord communities are great for users to communicate feedback, report bugs and suggest new features.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Place the Discord logo in the right side of the header, next to the minimize and X button."),(0,n.kt)("li",{parentName:"ul"},"Clicking it will launch a default browser window with the invite link to the server."),(0,n.kt)("li",{parentName:"ul"},"When in-game, the link will open the Overwolf browser.")))),(0,n.kt)("h3",{id:"monetization"},"Monetization"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can start making money by adding video or display advertisements to your app. To learn more, check out our ",(0,n.kt)("a",{parentName:"p",href:"/start/monetize-your-app/advertising"},"Ads SDK Documentation."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Forgivable ads policy \u2013 Overwolf apps and ads should never interrupt a game or harm a gamer's experience while playing. That's why we do our best to figure out where and when ads will not bother users - loading screens for example. Please follow our full ",(0,n.kt)("a",{parentName:"p",href:"/start/monetize-your-app/advertising/policy"},"Advertising Policy."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An example for a 400\xd7300 video in the Spawning Tool app:"))),(0,n.kt)(d,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(98652).Z,alt:"Spawning Tool"})),(0,n.kt)("h3",{id:"tooltips"},"Tooltips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Don\u2019t forget to add tooltips to in-app buttons or displayed data, as they greatly increase the cohesiveness of your app. Make sure to make tooltips short and to the point."),(0,n.kt)("li",{parentName:"ul"},"An example for a tooltip in the Legendary Builds app:")),(0,n.kt)(d,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(6800).Z,alt:"Legendary Builds"})),(0,n.kt)("h3",{id:"ask-for-feedback"},"Ask for feedback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Getting feedback from users is essential for your app\u2019s success. Make sure users can share feedback regarding the app easily, preferably with an in-app link or interface."),(0,n.kt)("li",{parentName:"ul"},"Based on the Facecheck team's experience with this feature, adding it in-app improves reviews and increases feedback."),(0,n.kt)("li",{parentName:"ul"},"Example for this implementation:")),(0,n.kt)(d,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(98060).Z,alt:"Facecheck"})),(0,n.kt)("h3",{id:"in-and-out-of-game-behavior"},"In and Out-of-game behavior"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Decide how your app will behave both in and out of the game. Remember that most users will launch your app for the first time right after downloading it from the Appstore, so the first thing they'll see is likely an out-of-game app window. Make sure they\u2019ll see a welcoming, simple and easy-to-understand screen even when they are not playing."),(0,n.kt)("li",{parentName:"ul"},"Example for in and out-of-game behavior in the Legendary Builds app:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In out-of-game desktop mode, users manually select a champion to check out builds:")))),(0,n.kt)(d,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(35911).Z,alt:"Legendary Builds"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"While in-game \u2013 The app automatically detects the player\u2019s chosen champion and displays their builds:")),(0,n.kt)(d,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(67910).Z,alt:"Legendary Builds"})),(0,n.kt)("h3",{id:"hotkeys"},"Hotkeys"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When in-game, users don\u2019t always have the time to click your app\u2019s icon, so make sure to provide them with convenient hotkeys to show and hide your app during the game."),(0,n.kt)("li",{parentName:"ul"},"Allow users to alter hotkey combinations from inside your app\u2019s settings panel. More information about hotkeys can be found in the ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest"},"manifest.json")," and ",(0,n.kt)("a",{parentName:"li",href:"/api/settings"},"overwolf.settings")," API pages."),(0,n.kt)("li",{parentName:"ul"},"An example for an app window allowing users to change the hotkey combination can be found in the ",(0,n.kt)("a",{parentName:"li",href:"/start/getting-started"},"Sample App"),".")),(0,n.kt)("h3",{id:"window-controls"},"Window controls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add window control buttons such as close and minimize to your app\u2019s windows, there\u2019s nothing more annoying for a user than not being able to close a window during a game.")),(0,n.kt)("h3",{id:"app-looknfeel"},"App look'n'feel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If your app is designed for a specific game, try to create a UI that will mesh well with the game\u2019s look and feel."),(0,n.kt)("li",{parentName:"ul"},"Check out this great example, ",(0,n.kt)("a",{parentName:"li",href:"https://www.overwolf.com/app/overwolf-spawning_tool_build_advisor"},"Spawning Tool")," for Starcraft. As you can see, the app was designed to have a Starcraft-like look and fits right in with the game's default UI.")),(0,n.kt)(d,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(88503).Z,alt:"Spawning Tool"})),(0,n.kt)("h3",{id:"create-a-conversation"},"Create a conversation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ask your users to share their thoughts, opinions and suggestions after using your app or even before it. These insights can convert into a better and more successful app experience for them, and more success for you. One way for getting feedback is by opening feedback channels on Twitter and Reddit. These pages should be reachable via links shown in the app\u2019s main or settings windows."),(0,n.kt)("li",{parentName:"ul"},"Here you can see an example for a social and feedback channels strip in the Legendary Builds app window:")),(0,n.kt)(d,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(54583).Z,alt:"Legendary Builds"})),(0,n.kt)("h3",{id:"plan-ahead"},"Plan ahead"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Think about the long run and about larger scales, will your app function well when handling ten or a hundred times more users? Does your database support your app\u2019s future features? Try to find future bottlenecks that might impact users experience and work to solve them ahead of time.")),(0,n.kt)("h3",{id:"games-intellectual-property-terms-and-conditions"},"Game\u2019s intellectual property terms and conditions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Before you start building your app for a specific game you love, go over that game\u2019s guidelines for third party content, we won\u2019t be able to publish an app that breaks these guidelines or infringes illegally on someone else's intellectual property. ",(0,n.kt)("a",{parentName:"li",href:"https://www.riotgames.com/en/legal"},"Here")," is an example for Riot\u2019s (League of Legends) guidelines for community content and use of their IP.")),(0,n.kt)("h3",{id:"error-notifications"},"Error notifications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bugs and errors happen, and users hate them just as much as we do. Try to think about possible scenarios and situations while using your app where things could go wrong. List them out, and then create a concise error message for each.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Examples for possible Overwolf app errors:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Game API is not currently available"),(0,n.kt)("li",{parentName:"ul"},"The user\u2019s champion data couldn\u2019t be fetched"),(0,n.kt)("li",{parentName:"ul"},"General network error"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example of error messages implemented in LoLwiz and Legendary Builds:"))),(0,n.kt)(d,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(94402).Z,alt:"Legendary Builds & Lolwiz"})),(0,n.kt)("h3",{id:"ad-container-placeholder"},"Ad container placeholder"),(0,n.kt)(r.ZP,{mdxType:"AdContainerPlaceholder"}),(0,n.kt)("h3",{id:"analytics"},"Analytics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We highly recommend implementing Analytics in your App, in order to ensure that you\nalways have a grasp of how your App is working, and how users are interacting with it.\nMore specific guidelines can be found ",(0,n.kt)("a",{parentName:"li",href:"/topics/integrations/app-analytics"},"here"),".")),(0,n.kt)("h2",{id:"technical"},"Technical"),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Overwolf apps should act like native desktop applications and not like a website. Make sure you implement our best practices for using windows before implementing your own app to avoid basic mistakes. Focusing on desktop experience improves your app\u2019s behavior and user experience.")),(0,n.kt)("h3",{id:"manifestjson"},"manifest.json"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use our ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#validate-your-manifestjson"},"JSON schema validator")," in order to locate missing or false data in the manifest file.")),(0,n.kt)("h3",{id:"overwolf-apis"},"Overwolf APIs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Understand all available API\u2019s \u2013 After thinking up your app but before you code it, preferably, you should browse the API documentation section. Check out the available functions that could work for you and your app or help you implement the features you have in mind."),(0,n.kt)("li",{parentName:"ul"},"I/O plugin \u2013 Make sure you know how to use the Overwolf simple I/O plugin, it allows you to read files from the local hard drive as well as get interesting information from the games own log files.")),(0,n.kt)("h3",{id:"apps-size"},"App\u2019s size"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Since Overwolf apps are downloaded locally and are updated pretty frequently, size matters - and a heavy app will be noticed by your users immediately. Please make sure your app is as lean as possible by deleting unnecessary files, compressing image or audio assets being used and even downloading large files from the cloud instead of adding them to your app\u2019s internal folder."),(0,n.kt)("li",{parentName:"ul"},"We recommend using Websiteplanet Image compressor and TinyPNG to reduce image size.")),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Test your app on a regular basis! Game developers and Overwolf constantly improve, change and add new features. By regularly testing your app, you will find out whether any of the changes broke your app."),(0,n.kt)("li",{parentName:"ul"},"You can use the Overwolf Developers client to test your app on future Overwolf versions, please let us know if you see anything that is not functioning as usual or breaks."),(0,n.kt)("li",{parentName:"ul"},"Test your app on various screen sizes, make sure your window doesn\u2019t take over small laptop screens nor blocks the user from seeing the game\u2019s action."),(0,n.kt)("li",{parentName:"ul"},"Use your community to test your new app before publishing. Beta users can download and test your new app by using a unique link to the app\u2019s page in the Appstore. Just contact us when your app is ready for beta testing and we will assist in making that happen."),(0,n.kt)("li",{parentName:"ul"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"/start/test-your-app/how-to-test-your-app"},"this page")," to read more information about testing your app.")))}h.isMDXComponent=!0},35911:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/champ-select-404b17ca85786c3f52fbea339fb27e36.png"},94402:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/error-windows-6353074f781059aae57a8e0991e1adf4.jpg"},98060:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/facecheck-ttu-ffb20eeb68aa95a0ea4ed8b3206b6151.png"},6800:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/lb-tooltips-e0b4690d27c1997dd8b5bf0ac4b3401f.png"},67910:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/lbingame113-10725906fdea0b9b9eea18e8c957cae3.png"},54583:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/overwolf_2018-04-26_09-37-29-59dcf3a41c1058de799b15d98087e2fd.png"},98652:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sc2-400x300-ad-1-2f1fd255fea7069e25b63e301c9c38d5.png"},88503:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/spawning-screenshot3-d12d01bf88bedc9543197112977b268c.jpg"},24930:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/_ad-container-placeholder-f4b029ce8af1c8ac7843d96edea03123.png"}}]);