"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[80],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(25773),r=(n(27378),n(35318));const i={id:"app-specific-experience",image:"/img/embed/api-best-practices.jpg",title:"App specific experience",sidebar_label:"App specific experience",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,s={unversionedId:"topics/best-practices/app-specific-experience",id:"topics/best-practices/app-specific-experience",title:"App specific experience",description:"The Overwolf SDK enables you to create a new experience, providing the best possible user experience and therefore increasing retention.",source:"@site/../pages/topics/best-practices/app-specific-experience.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/app-specific-experience",permalink:"/topics/best-practices/app-specific-experience",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/best-practices/app-specific-experience.mdx",tags:[],version:"current",lastUpdatedBy:"benjokoren-ow",lastUpdatedAt:1721917552,formattedLastUpdatedAt:"Jul 25, 2024",frontMatter:{id:"app-specific-experience",image:"/img/embed/api-best-practices.jpg",title:"App specific experience",sidebar_label:"App specific experience",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Best Practices",permalink:"/topics/best-practices/"},next:{title:"Marketing Communications",permalink:"/topics/best-practices/communication-guidelines"}},p={},c=[{value:"Landing page",id:"landing-page",level:2},{value:"Installer Experience",id:"installer-experience",level:2},{value:"Desktop icon and splash screen",id:"desktop-icon-and-splash-screen",level:2},{value:"Welcome screen",id:"welcome-screen",level:2},{value:"The in-game experience",id:"the-in-game-experience",level:2},{value:"Post game",id:"post-game",level:2}],l={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Overwolf SDK enables you to create a new experience, providing the best possible user experience and therefore increasing retention."),(0,r.kt)("p",null,"Unlike traditional websites, apps bring content in-game, and that content can communicate with in-game events unlike anything that happens in an ordinary browser. Moreover, as a software client, you have the ability to show windows on desktop too, not just in-game."),(0,r.kt)("p",null,"In this article we're going to show you the places where users encounter your app as well as what they can expect in terms of experience, from the moment they see your website and all the way to using your app in-game. For reference and to demonstrate some concepts, we\u2019ll be using ",(0,r.kt)("a",{parentName:"p",href:"https://www.overwolf.com/app/LoLwiz"},"LoLwiz")," \u2013 A League of Legends app providing in-game stats and other features."),(0,r.kt)("h2",{id:"landing-page"},"Landing page"),(0,r.kt)("p",null,"Whether it is a new landing page you\u2019ve created for your app or your own website, it's important to help users instantly understand what your product does and how they benefit by using it. The landing page should also have an instant download button so that users satisfied with your introduction can jump right in."),(0,r.kt)("p",null,"You can read our ",(0,r.kt)("a",{parentName:"p",href:"communication-guidelines"},"Marketing Communication Guidelines")," for more information."),(0,r.kt)("h2",{id:"installer-experience"},"Installer Experience"),(0,r.kt)("p",null,"Once users download your app and start the installation process, they will start an installer experience that can be customized and branded for your app. The installer is a way to make a user comfortable and informed until he can start using the app - starting by telling users the app (LoLwiz in the sample) is being installed and tracking progress. The installer experience will start both directly and when the user downloads the app from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.overwolf.com/"},"Overwolf Appstore")," on the web."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(53311).Z,width:"816",height:"503"})),(0,r.kt)("h2",{id:"desktop-icon-and-splash-screen"},"Desktop icon and splash screen"),(0,r.kt)("p",null,"After installation is complete, the user's desktop will have a new icon added for your app. When clicking it, your app will launch immediately in Desktop mode."),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"/start/submit-your-app"},"desktop icons"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(44399).Z,width:"1919",height:"1080"})),(0,r.kt)("h2",{id:"welcome-screen"},"Welcome screen"),(0,r.kt)("p",null,"It's important to create an engaging welcome screen for your app. Once users clicked on the desktop icon or the app\u2019s icon in the Overwolf dock, the welcome screen should appear. It's the best place to start your onboarding experience and provide a clear call for action. In the case of LoLwiz, the welcome screen prompts users: \"Start a match and LoLwiz will automatically appear in-game!\". Setting expectations and leading them to use the app."),(0,r.kt)("p",null,"For further reading, we put together more insights about the importance of ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/overwolf/apps-ftue-best-practices-670dd4fb2b10"},"onboarding experiences"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(29778).Z,width:"900",height:"570"})),(0,r.kt)("h2",{id:"the-in-game-experience"},"The in-game experience"),(0,r.kt)("p",null,"Using Overwolf's ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events"},"real-time game events")," API empowers your app to interact with in-game events and connect to users on their own terms. In the following example you can see that LoLwiz chose to show a loading screen while the League of Legends match is loading. Once loading is done, the app window reminds the user about the hotkey they can use to activate the app and reach it's content, which in this case, is stats of players in the match."),(0,r.kt)("p",null,"Using ads you can ",(0,r.kt)("a",{parentName:"p",href:"/start/monetize-your-app"},"monetize")," your app window with Overwolf, make sure to comply with our forgivable ads policy so user experience is never negatively impacted."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(60927).Z,width:"1406",height:"914"})),(0,r.kt)("h2",{id:"post-game"},"Post game"),(0,r.kt)("p",null,"To complete the user's journey, apps like Trophy Hunter will show a summary of the match including statistics and trophies the user earned while playing League of Legends. You can also create a Game Summary tab to follow up with your users after they are done playing. Feel free to contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com")," for more information, or reach out to any of our team members on ",(0,r.kt)("a",{parentName:"p",href:"https://overwolfdevs.slack.com"},"Slack"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(69107).Z,width:"1246",height:"749"})))}u.isMDXComponent=!0},44399:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/desktop-icon-and-splash-screen-cd79e70b2aba83674b904c91d390d4f2.jpg"},29778:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lolwiz-home-27ca5c4cbfb847aab667369ba79f6203.jpg"},53311:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lolwiz-installer-1-f82b924053f52e7f04718dd1088c52c4.jpg"},60927:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lolwiz-stats-799fc190cf539670b1c28f0aee476b1c.jpg"},69107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/trophy-hunter-post-game-a0e0606b93e5b0ea583a2ae5a7ded6b3.jpg"}}]);