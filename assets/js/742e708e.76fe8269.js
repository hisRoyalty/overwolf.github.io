"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9385],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){return function(t){var a=d(t.components);return r.createElement(e,o({},t,{components:a}))}},d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,c=m["".concat(i,".").concat(u)]||m[u]||f[u]||o;return a?r.createElement(c,l(l({ref:t},s),{},{components:a})):r.createElement(c,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},12999:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={id:168,image:"/img/embed/changelogs.jpg",title:"Version 0.168",sidebar_label:"0.168",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2021/april/168",id:"api/changelogs/overwolf-platform/2021/april/168",title:"Version 0.168",description:"Note that iterations 167 to 168 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2021/april/168.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/april",slug:"/api/changelogs/overwolf-platform/2021/april/168",permalink:"/api/changelogs/overwolf-platform/2021/april/168",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2021/april/168.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673773943,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{id:"168",image:"/img/embed/changelogs.jpg",title:"Version 0.168",sidebar_label:"0.168",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.169",permalink:"/api/changelogs/overwolf-platform/2021/april/169"},next:{title:"0.166",permalink:"/api/changelogs/overwolf-platform/2021/march/166"}},p={},s=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Note that iterations 167 to 168 were combined into a single iteration.  "),(0,n.mdx)("h3",{id:"api"},"API"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"You can now detect if the ",(0,n.mdx)("a",{parentName:"li",href:"/topics/best-practices/video-capture#windows-10-hardware-accelerated-gpu-scheduling-notice"},"Windows 10 Hardware-Accelerated GPU Scheduling")," feature is enabled by calling ",(0,n.mdx)("a",{parentName:"li",href:"/api/utils"},"overwolf.utils.getSystemInformation()"),". The callback object contains the ",(0,n.mdx)("strong",{parentName:"li"},"HAGSEnabled")," property that can be true or false.  Note that the user can set the HA feature on or off therough the client settings."),(0,n.mdx)("li",{parentName:"ul"},"Close Overwolf when closing an app: apps can now add the new 'Shutdown' permissions to it's manifest, then call ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings#setextensionsettingsextensionsettings-callback"},"overwolf.settings.setExtensionSettings()"),' with "exit_overwolf_on_exit: true".',(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Note: This option shouldn\u2019t be used without Overwolf\u2019s permission"),"."))),(0,n.mdx)("li",{parentName:"ul"},"Social API: ",(0,n.mdx)("a",{parentName:"li",href:"/api/social/youtube#performlogoutcallback"},"overwolf.social.youtube.performLogin()")," now opens in default browser and using pubsub to update client."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/utils#openfilepickerfilter-callback"},"overwolf.util.openFilePicker()"),": now returns both url and path to file.",(0,n.mdx)("br",{parentName:"li"}),"**Important: note that this function signature is not backwards compatible: the ",(0,n.mdx)("inlineCode",{parentName:"li"},"url")," property in the callback now returns the path in fs:// format and not in an absolute path. (the new ",(0,n.mdx)("inlineCode",{parentName:"li"},"file")," property returns the absolute path)."),(0,n.mdx)("li",{parentName:"ul"},"url-scheme: added 'overwolfstore' url-scheme - use 'overwolfstore://app/:uid/reviews/:commentId' to open a specific comment.",(0,n.mdx)("br",{parentName:"li"}),"This originally intended to be used as a link in emails users would get if a dev replied to their comment."),(0,n.mdx)("li",{parentName:"ul"},"Some news for you on the video capture front. We added support for alternative recording resolutions. More info in our ",(0,n.mdx)("a",{parentName:"li",href:"/topics/best-practices/video-capture#recording-resolutions"},"Video capture best practices")," guide.")),(0,n.mdx)("h3",{id:"platform"},"Platform"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"General partner reports on redash - now you can export your reports to CSV."),(0,n.mdx)("li",{parentName:"ul"},"OW browser redirects: allow to open tab and redirect back to extension when origin URL is at 'externally_connectable' and to tab was open from the same extension. See more details in our ",(0,n.mdx)("a",{parentName:"li",href:"/topics/integrations/login-with-twitch"},"OAuth integration guide"),"."),(0,n.mdx)("li",{parentName:"ul"},"App UTM params: Until now, UTM params tagged with the installer were saved to the OW database only for new OW installations.\nNow, they are saved to the DB in an app context, also for existing installations. (should be sent with 'InstalledApp' analytic). ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The parameters will be passed as command-line arguments in case Overwolf is installed - more info about UTM params on our ",(0,n.mdx)("a",{parentName:"li",href:"/topics/best-practices/create-download-link"},"Referral ID Guide"),"."),(0,n.mdx)("li",{parentName:"ul"},"In addition, for security and privacy reasons, the app sees only its context. Meaning, Your app will not be able to read other app's UTM params. You will get empty strings.")))),(0,n.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Subscriptions",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added support for dark theme subscription plan page"),(0,n.mdx)("li",{parentName:"ul"},"Added the option to edit the Xsolla payment page background image"),(0,n.mdx)("li",{parentName:"ul"},"Added filters and improved sorting for your subscribers list"),(0,n.mdx)("li",{parentName:"ul"},"Bug fixes"))),(0,n.mdx)("li",{parentName:"ul"},"Release management",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Improved UX ")))),(0,n.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"DirectX 11 games should no longer be minimized while ",(0,n.mdx)("inlineCode",{parentName:"li"},"overwolf.windows.restore()")," is being used consecutively.")),(0,n.mdx)("h3",{id:"game-events"},"Game events"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/valorant"},"VALORANT"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New supported game mode - Escalation"),(0,n.mdx)("li",{parentName:"ul"},"Fix to support the new patch"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/teamfight-tactics"},"Teamfight Tactics"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fix to support the new patch"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/fortnite"},"Fortnite"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Support for the new season"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/rainbow-six-siege"},"Rainbow Six: Siege"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Support for the new season"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/counter-strike-global-offensive"},"CS:GO"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Change & update to ",(0,n.mdx)("inlineCode",{parentName:"li"},"kill_feed")))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/fortnite"},"Fortnite"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Improved plugin code.")))))}d.isMDXComponent=!0}}]);