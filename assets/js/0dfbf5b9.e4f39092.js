"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7687],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=o,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||i;return a?n.createElement(c,r(r({ref:t},u),{},{components:a})):n.createElement(c,r({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const i={id:"how-to-test-your-app",image:"/img/embed/getting-started.jpg",title:"How to test your App",sidebar_label:"App testing basics",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},r=void 0,l={unversionedId:"start/test-your-app/how-to-test-your-app",id:"start/test-your-app/how-to-test-your-app",title:"How to test your App",description:"Testing Practices",source:"@site/../pages/start/test-your-app/how-to-test-your-app.mdx",sourceDirName:"start/test-your-app",slug:"/start/test-your-app/how-to-test-your-app",permalink:"/start/test-your-app/how-to-test-your-app",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/test-your-app/how-to-test-your-app.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1723982107,formattedLastUpdatedAt:"Aug 18, 2024",frontMatter:{id:"how-to-test-your-app",image:"/img/embed/getting-started.jpg",title:"How to test your App",sidebar_label:"App testing basics",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Community alphas",permalink:"/start/test-your-app/community-alphas"},next:{title:"Submit Your App",permalink:"/start/submit-your-app/"}},s={},p=[{value:"Testing Practices",id:"testing-practices",level:2},{value:"App Manifest",id:"app-manifest",level:2},{value:"Consistent UID",id:"consistent-uid",level:3},{value:"Validate your manifest",id:"validate-your-manifest",level:3},{value:"Validate the schema",id:"validate-the-schema",level:3},{value:"Minimal Overwolf supported version",id:"minimal-overwolf-supported-version",level:4},{value:"Verify correct Advertisement flags",id:"verify-correct-advertisement-flags",level:4},{value:"Verify the &#39;launcher_icon&#39; property",id:"verify-the-launcher_icon-property",level:4},{value:"Verify the &#39;icon&#39; and &#39;icon_gray&#39; property",id:"verify-the-icon-and-icon_gray-property",level:4},{value:"Verify game_targeting flag existence",id:"verify-game_targeting-flag-existence",level:4},{value:"Verify correct launch_events",id:"verify-correct-launch_events",level:4},{value:"Windows",id:"windows",level:2},{value:"Resolution Compatibility",id:"resolution-compatibility",level:3},{value:"Window states",id:"window-states",level:3},{value:"Window behavior when &quot;out of focus&quot;",id:"window-behavior-when-out-of-focus",level:4},{value:"Overlay",id:"overlay",level:2},{value:"In-Game Behavior",id:"in-game-behavior",level:3},{value:"Hotkeys",id:"hotkeys",level:2},{value:"General functionality",id:"general-functionality",level:3},{value:"Test mid-game installation",id:"test-mid-game-installation",level:3},{value:"Desktop",id:"desktop",level:2},{value:"Desktop app Behaviour",id:"desktop-app-behaviour",level:3},{value:"Game specific apps",id:"game-specific-apps",level:2},{value:"Performance",id:"performance",level:2},{value:"Memory &amp; CPU Usage",id:"memory--cpu-usage",level:3},{value:"Dock icon size",id:"dock-icon-size",level:3},{value:"Internet access",id:"internet-access",level:3},{value:"Ads",id:"ads",level:2},{value:"Testing Ad visibility",id:"testing-ad-visibility",level:3},{value:"Ad click functionality",id:"ad-click-functionality",level:3},{value:"Ads are not hidden",id:"ads-are-not-hidden",level:3},{value:"Ads remove and refresh",id:"ads-remove-and-refresh",level:3}],u={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"testing-practices"},"Testing Practices"),(0,o.kt)("p",null,"The Overwolf team will review your app when you submit it for the first time, as well as whenever you would like to update it.",(0,o.kt)("br",{parentName:"p"}),"\n","Some tests may change depending on your app, as sometimes testing is more effective with specific tests than with the generic ones."),(0,o.kt)("p",null,"In this article we will share how our testing process works, what we're focused on, and what you should focus on when polishing up your app for submission. Please don\u2019t hesitate to ask us questions over Slack or via email: ",(0,o.kt)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com")," "),(0,o.kt)("h2",{id:"app-manifest"},"App Manifest"),(0,o.kt)("h3",{id:"consistent-uid"},"Consistent UID"),(0,o.kt)("p",null,"Make sure that the ",(0,o.kt)("a",{parentName:"p",href:"/api/manifest#meta-name"},"author and app name")," are identical in every version. Changes in these parameters will change the UID of your app and cause issues, so make sure that they remain consistent through every update."),(0,o.kt)("h3",{id:"validate-your-manifest"},"Validate your manifest"),(0,o.kt)("p",null,"Make sure to validate your manifest.json syntax:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the contents of the app\u2019s manifest.json and paste it in ",(0,o.kt)("a",{parentName:"li",href:"https://jsonlint.com/"},"jsonlint.com"),"."),(0,o.kt)("li",{parentName:"ol"},'Press the "validate" button in jsonlint.com (If you\'re seeing "valid json", it\'s clear).'),(0,o.kt)("li",{parentName:"ol"},"Make sure you have no errors reported.")),(0,o.kt)("h3",{id:"validate-the-schema"},"Validate the schema"),(0,o.kt)("p",null,"Ensure that your manifest.json is consistent with our schema:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Copy the contents of the app\u2019s manifest.json and paste it under "Input JSON:" in ',(0,o.kt)("a",{parentName:"li",href:"https://www.jsonschemavalidator.net/"},"jsonschemavalidator.net"),"."),(0,o.kt)("li",{parentName:"ol"},"Copy the contents of our ",(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/overwolf/community-gists/master/overwolf-manifest-schema.json"},"schema"),' and paste it under "Select schema:". '),(0,o.kt)("li",{parentName:"ol"},'Make sure you have no errors and that you see a green checkmark with the text "No errors found. JSON validates against the schema".')),(0,o.kt)("h4",{id:"minimal-overwolf-supported-version"},"Minimal Overwolf supported version"),(0,o.kt)("p",null,"Examine your app's ",(0,o.kt)("a",{parentName:"p",href:"/api/manifest#meta-minimum"},"Overwolf minimal version")," and make sure that it is in line with your app's required features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a recent version added a new API/fixed a bug that you require, make sure that it is set to that version (or later)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Make sure that this minimal required version is fully rolled out to all users before releasing!"))),(0,o.kt)("h4",{id:"verify-correct-advertisement-flags"},"Verify correct Advertisement flags"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},'"block_top_window_navigation":true')," \u2013 Means that whenever app users click on an ad, it will open the link in a new window."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},'"popup_blocker":true')," \u2013 This flag prevents ads that will try to create a popup for the user without the user\u2019s consent."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},'"mute":true')," - Mute sounds in window.")),(0,o.kt)("h4",{id:"verify-the-launcher_icon-property"},"Verify the 'launcher_icon' property"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"li"},'"launcher_icon": "icon.ico"')," appears in the \u201cmeta\u201d object, ",(0,o.kt)("inlineCode",{parentName:"li"},"icon.ico")," can have any name as long as the icon exists in the app's opk file."),(0,o.kt)("li",{parentName:"ol"},"Check that the ",(0,o.kt)("inlineCode",{parentName:"li"},"icon.ico")," file exists in your app folder/opk and its size is smaller than 150KB."),(0,o.kt)("li",{parentName:"ol"},"Make sure that you have the following resolutions for it: ",(0,o.kt)("inlineCode",{parentName:"li"},"16x16, 32x32,48x48, 256x256"),".")),(0,o.kt)("h4",{id:"verify-the-icon-and-icon_gray-property"},"Verify the 'icon' and 'icon_gray' property"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"li"},'"icon": "IconMouseOver.png"')," and ",(0,o.kt)("inlineCode",{parentName:"li"},'"icon_gray": "IconMouseNormal.png"')," appear in the \u201cmeta\u201d object, ",(0,o.kt)("inlineCode",{parentName:"li"},"IconMouseOver.png")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"IconMouseNormal.png")," can have any name as long as the icons exist in the app's opk file."),(0,o.kt)("li",{parentName:"ol"},"Check that the ",(0,o.kt)("inlineCode",{parentName:"li"},"IconMouseOver.png")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"IconMouseNormal.png")," files exist in your app folder/opk and their size is smaller than 30KB."),(0,o.kt)("li",{parentName:"ol"},"Make sure that both .png files are ",(0,o.kt)("inlineCode",{parentName:"li"},"256x256")," in resolution size.")),(0,o.kt)("h4",{id:"verify-game_targeting-flag-existence"},"Verify game_targeting flag existence"),(0,o.kt)("h4",{id:"verify-correct-launch_events"},"Verify correct launch_events"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure that your app only launches with the games it interacts with"),(0,o.kt)("li",{parentName:"ol"},"If your app is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"LaunchWithOverwolf"),", make sure:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"It does not open any visible windows unless a game was opened"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"OR")," The user has to explicitly opt-in for this behavior, and can opt-out at any moment")))),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("h3",{id:"resolution-compatibility"},"Resolution Compatibility"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before testing, DPI should be set to 100% and window resolution should be 1920 x 1080.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change your screen resolution to the following settings and make sure that the app window stays within the borders of your screen:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"1366 x 720 \u2013 100 DPI"),(0,o.kt)("li",{parentName:"ul"},"1366 x 768 \u2013 100 DPI"),(0,o.kt)("li",{parentName:"ul"},"1920 X 1080 \u2013 125 DPI"),(0,o.kt)("li",{parentName:"ul"},"3840 X 2160 \u2013 150 DPI")))),(0,o.kt)("h3",{id:"window-states"},"Window states"),(0,o.kt)("p",null,"The following test should demonstrate how your app behaves in-game when in different window states:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch the game your app supports and test the app in full-screen (game window), make sure everything is in place."),(0,o.kt)("li",{parentName:"ol"},"Change to windowed mode and make sure that everything is still in place.")),(0,o.kt)("h4",{id:"window-behavior-when-out-of-focus"},'Window behavior when "out of focus"'),(0,o.kt)("p",null,"Overwolf only displays overlays in a game when the game is in focus. That means that whenever your game is alt+tabbed or minimized, no app window should appear anywhere.  "),(0,o.kt)("p",null,"For the following test, you should launch the game your app supports and make sure that the app launched correctly. Then, you should Alt + Tab out of the game and make sure that your app window does not show on desktop.  "),(0,o.kt)("p",null,"When you alt+tab back to the game, the app should work normally."),(0,o.kt)("h2",{id:"overlay"},"Overlay"),(0,o.kt)("h3",{id:"in-game-behavior"},"In-Game Behavior"),(0,o.kt)("p",null,"Test preconditions: The user is now running the game your app supports."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the app window with your designated hotkey and make sure the overlay appears properly."),(0,o.kt)("li",{parentName:"ol"},"Test general app functionality in-game and ensure your features work."),(0,o.kt)("li",{parentName:"ol"},"Click the app window in spots where clicks going through to the game would have an effect. For example, click an app button which covers an in-game menu and make sure your clicks only affect the app layer and never that menu."),(0,o.kt)("li",{parentName:"ol"},"Any in-game browser links must be opened in overwolf's browser, or if they must be opened in the user's default browser, first prompt a warning to the user and let them know.")),(0,o.kt)("h2",{id:"hotkeys"},"Hotkeys"),(0,o.kt)("h3",{id:"general-functionality"},"General functionality"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use hotkey to launch App and ensure it launches properly.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use hotkey again to minimize your App.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change your app's designated hotkey and make sure the change appears in settings.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use changed hotkey to launch App and ensure it launches properly.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use changed hotkey again to minimize your app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Allow users to change hotkey combinations from inside your app\u2019s settings panel by automatically directing the user to the Overwolf settings page as suggested in our best practices Hotkeys segment. More information about hotkeys can be found in the manifest.json and overwolf.settings API pages \u2013 Make sure that when it\u2019s done, the new hotkey is updated automatically in your app without needing to re-launch the app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch your app using the dock icon while in-game. The dock icon must provide some form of functionality to the user."))),(0,o.kt)("h3",{id:"test-mid-game-installation"},"Test mid-game installation"),(0,o.kt)("p",null,"Preconditions: Uninstall your app to perform the following test."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"While in-game, open the Overwolf Appstore and install the app, or just use an opk.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use hotkey to launch app and see whether it successfully opens.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use hotkey again to minimize the app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the designated hotkey and use it again to launch the app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Used the changed hotkey again to minimize the app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Whenever a user changes their hotkey \u2013 make sure that your app changes both functionality and UI."))),(0,o.kt)("h2",{id:"desktop"},"Desktop"),(0,o.kt)("h3",{id:"desktop-app-behaviour"},"Desktop app Behaviour"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch your App while in desktop, test that the app window appears in 30 milliseconds or less - but it's alright if it shows up and then displays a loader until it's ready for use.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test your app's desktop functionality and features.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Close Overwolf and launch your app using the desktop icon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify all windows are close upon exit, as well as all app-related processes in http://localhost:54284 (except those that are designed to be background processes)."))),(0,o.kt)("h2",{id:"game-specific-apps"},"Game specific apps"),(0,o.kt)("p",null,"If your app supports a specific game only, make sure it runs when you launch that game and doesn't for others."),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("h3",{id:"memory--cpu-usage"},"Memory & CPU Usage"),(0,o.kt)("p",null,"Preconditions: Open Overwolf task manager as well as the Windows task manager."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use your app's basic functionality, ensure it doesn't hang, lag or stops responding."),(0,o.kt)("li",{parentName:"ul"},"Use the app while checking the Overwolf task manager. App memory usage should rise and fall, if it doesn't drop back down after rising - the app might have a memory leak."),(0,o.kt)("li",{parentName:"ul"},"Click the performance tab in Windows Task manager, keep an eye out for spikes in CPU, memory or network usage while using your app.")),(0,o.kt)("h3",{id:"dock-icon-size"},"Dock icon size"),(0,o.kt)("p",null,"Dock icons should be .png format files, sized 256\xd7256 pixels and weighing under 30KB. This is true for both greyscale and full color icons."),(0,o.kt)("h3",{id:"internet-access"},"Internet access"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disconnect from the internet and verify your app still launches normally.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When offline, make sure your app displays a \u201ccheck your internet connection\u201d type message.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the app requires an internet connection to function then it should be clarified for users in the app's window.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can detect whether your app is offline or not in a couple of ways. The most straightforward way is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/16035577/check-if-there-is-an-internet-connection"},"navigator.onLine property")," ,but we recommend to implement more reliable tools, ",(0,o.kt)("a",{parentName:"p",href:"https://zen-and-art-of-programming.blogspot.com/2014/04/html-5-offline-application-development.html"},"like this one")," for example."))),(0,o.kt)("h2",{id:"ads"},"Ads"),(0,o.kt)("p",null,"In order to get test ads enabled on your app, please follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open app"),(0,o.kt)("li",{parentName:"ol"},"Open the developer console (Ctrl + Shift + I)"),(0,o.kt)("li",{parentName:"ol"},"Paste ",(0,o.kt)("inlineCode",{parentName:"li"},"localStorage.owAdTestAd = true")," into the console"),(0,o.kt)("li",{parentName:"ol"},'Press the "Enter" key'),(0,o.kt)("li",{parentName:"ol"},"Press F5 to refresh window"),(0,o.kt)("li",{parentName:"ol"},"The Relevant ads will appear"),(0,o.kt)("li",{parentName:"ol"},'If no ads are showing up, please delete the BrowserCache folder located at AppData\\Local\\Overwolf\\BrowserCache. In Addition, check the "Disable cache" option in the Network tab of the devtools. Finally, relaunch the app.')),(0,o.kt)("h3",{id:"testing-ad-visibility"},"Testing Ad visibility"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch your app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go over your app screens and look for the Ad containers, ensure Ads appear properly."))),(0,o.kt)("h3",{id:"ad-click-functionality"},"Ad click functionality"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch your app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on any element that is hiding ads and make sure the ads do not open and that your element functions as intended.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click an Ad, it should open the link in a new browser window external to your app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ad 5 times, make sure five different browsers are launched without crashing Overwolf or harming your app's performance."))),(0,o.kt)("h3",{id:"ads-are-not-hidden"},"Ads are not hidden"),(0,o.kt)("p",null,"Open Overwolf's developer tools by pressing ctrl + shift + i, and look at the console. No ad processes should be visible if no ads are displayed on screen."),(0,o.kt)("h3",{id:"ads-remove-and-refresh"},"Ads remove and refresh"),(0,o.kt)("p",null,"Ads should close when your app window is minimized."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:54284/")," in browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch your app, navigate to a screen where ads are presented.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Close the app using a hotkey or manually.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"No ad process should be found in the localhost."),(0,o.kt)("h2",{parentName:"li",id:"pre-release"},"Pre-Release"),(0,o.kt)("h3",{parentName:"li",id:"apps-opk-file-doesnt-warn-for-any-viruses"},"App's opk file doesn't warn for any viruses"),(0,o.kt)("p",{parentName:"li"},"Before sending any opk file for our approval, make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://www.virustotal.com/gui/home/upload"},"virustotal.com")," doesn't warn about any viruses for it. Any opk's which virustotal warns about will not be tested."))))}h.isMDXComponent=!0}}]);