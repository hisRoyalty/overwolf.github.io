"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3558],{35318:(e,A,t)=>{t.d(A,{Zo:()=>p,kt:()=>f});var a=t(27378);function r(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function n(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);A&&(a=a.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?n(Object(t),!0).forEach((function(A){r(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,a,r=function(e,A){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],A.indexOf(t)>=0||(r[t]=e[t]);return r}(e,A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var A=a.useContext(s),t=A;return e&&(t="function"==typeof e?e(A):i(i({},A),e)),t},p=function(e){var A=l(e.components);return a.createElement(s.Provider,{value:A},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var A=e.children;return a.createElement(a.Fragment,{},A)}},m=a.forwardRef((function(e,A){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return t?a.createElement(f,i(i({ref:A},p),{},{components:t})):a.createElement(f,i({ref:A},p))}));function f(e,A){var t=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=m;var o={};for(var s in A)hasOwnProperty.call(A,s)&&(o[s]=A[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<n;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68747:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=t(25773),r=(t(27378),t(35318));const n={id:"submit-your-app",image:"/img/embed/getting-started.jpg",title:"Submit Your App",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"start/submit-your-app/submit-your-app",id:"start/submit-your-app/submit-your-app",title:"Submit Your App",description:"So, you\u2019re done developing your app and it's time to submit it for review to go live on the in-game Appstore. First thing's first - Congratulations!",source:"@site/../pages/start/submit-your-app/submit-your-app.mdx",sourceDirName:"start/submit-your-app",slug:"/start/submit-your-app/",permalink:"/start/submit-your-app/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/submit-your-app/submit-your-app.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1724312186,formattedLastUpdatedAt:"Aug 22, 2024",frontMatter:{id:"submit-your-app",image:"/img/embed/getting-started.jpg",title:"Submit Your App",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"App testing basics",permalink:"/start/test-your-app/how-to-test-your-app"},next:{title:"Custom Installer",permalink:"/start/submit-your-app/custom-installer-for-your-app"}},s={},l=[{value:"The app submission checklist",id:"the-app-submission-checklist",level:2},{value:"OPK package overview",id:"opk-package-overview",level:3},{value:"How to create an OPK package",id:"how-to-create-an-opk-package",level:4},{value:"OPK structure",id:"opk-structure",level:4},{value:"Prepare your store assets",id:"prepare-your-store-assets",level:3},{value:"Amazon Web Services benefits",id:"amazon-web-services-benefits",level:2}],p={toc:l};function u(e){let{components:A,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:A,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So, you\u2019re done developing your app and it's time to submit it for review to go live on the in-game Appstore. First thing's first - Congratulations!"),(0,r.kt)("p",null,"In this page we'll detail how you can submit your app and set yourself up for approval."),(0,r.kt)("h2",{id:"the-app-submission-checklist"},"The app submission checklist"),(0,r.kt)("p",null,"In order to submit an app, you must first have a basic working version of the app. Once you do, make sure you go over the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/start/test-your-app/how-to-test-your-app"},"Run some final tests")," - Make sure the app works exactly as you want it to. It doesn't have to be perfect, but it should at least achieve its core aim consistently."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/manifest/validate-your-manifest"},"Validate your manifest")," - An invalid manifest file will create an invalid app, causing unnecessary delays in the process. Make sure that you validate the manifest file of the actual version before submission!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#opk-package-overview"},"Create an OPK file")," - This is your app's actual package.")),(0,r.kt)("p",null,"Once you have a release candidate ready, you can submit your OPK ",(0,r.kt)("a",{parentName:"p",href:"https://forms.monday.com/forms/6cba29808d4f0e70aaf4517ee7e4e82b?r=use1"},"through here"),". We should share results within 1-2 weeks, depending on the queue."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you have any questions, or wish to create and distribute test versions of your app before launching properly, feel free to ",(0,r.kt)("a",{parentName:"p",href:"/support/contact-us"},"reach out"),"!")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HOWEVER!")," Things don't end here. There are still many things you can and should do before launching:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prepare-your-store-assets"},"App store assets")," - Your app's store assets are what potential users see before downloading. It's important to make sure those are just right.")),(0,r.kt)("p",null,"When possible, we also recommend completing as many of the following steps as you can, to ensure a smoother app launch:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/topics/best-practices/reduce-opk-size"},"Reduce your OPK size")," - Smaller file sizes are important."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"maintain-your-app/add-a-knowledge-base-to-app"},"customer support page")," - This will help your users deal with common issues more easily, giving you more time to focus on the things that matter.")),(0,r.kt)("h3",{id:"opk-package-overview"},"OPK package overview"),(0,r.kt)("p",null,"OPK files are Overwolf's app installation package, which includes ",(0,r.kt)("a",{parentName:"p",href:"#opk-structure"},"your app's files"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The manifest.json file"),(0,r.kt)("li",{parentName:"ul"},"Required app assets (detailed ",(0,r.kt)("a",{parentName:"li",href:"#opk-structure"},"here"),")"),(0,r.kt)("li",{parentName:"ul"},"Source files"),(0,r.kt)("li",{parentName:"ul"},"App-specific assets")),(0,r.kt)("p",null,"All files are packed in a package that has the ",(0,r.kt)("inlineCode",{parentName:"p"},".opk")," file extension."),(0,r.kt)("p",null,"Double-clicking a valid OPK will install the package."),(0,r.kt)("h4",{id:"how-to-create-an-opk-package"},"How to create an OPK package"),(0,r.kt)("p",null,"To create an OPK, ZIP all your files together (make sure to use normal compression rate and not the highest rate), and then manually change the file extension from ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," to ",(0,r.kt)("inlineCode",{parentName:"p"},".opk"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Make sure to pack the manifest and all the files and folders in the root of the package, like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"welcome-screen",src:t(16423).Z,width:"969",height:"698"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),' Make sure to use "Normal" compression rate and not the highest rate.'),(0,r.kt)("h4",{id:"opk-structure"},"OPK structure"),(0,r.kt)("p",null,"As mentioned above, the OPK package should contain all of the app's files and assets:"),(0,r.kt)("admonition",{title:"Package structure",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Other than the manifest.json file being at the root of your app, the rest of the file hierarchy is left up to you."),(0,r.kt)("p",{parentName:"admonition"},"Just make sure it makes sense to you, and that the paths in your manifest.json file point to the right files.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"manifest.json file"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your app's ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#docsNav"},"manifest.json")," file."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"App Icons"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IconMouseNormal.png  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"gray-scale")," icon for the default state of your app button when it is unselected. The file should be smaller than 30KB, and sized at 256X256 pixels with at least 72 PPI.\n",(0,r.kt)("img",{src:t(92843).Z,width:"256",height:"256"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IconMouseOver.png  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A colored version of IconMouseNormal.png, for when the app button is selected or mouse-overed. Similarly, file should be smaller than 30KB and sized at 256X256 pixels with at least 72 PPI.\n",(0,r.kt)("img",{src:t(24129).Z,width:"256",height:"256"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"launcher_icon.ico ",(0,r.kt)("strong",{parentName:"p"},"(Required for store release","*",")")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"*"," While not strictly required for the app to load, an app MUST have an icon to be published to the store!")),(0,r.kt)("li",{parentName:"ul"},"A custom icon for your app's desktop shortcut."),(0,r.kt)("li",{parentName:"ul"},"Requires the ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#meta-launcher_icon"},(0,r.kt)("inlineCode",{parentName:"a"},"launcher_icon"))," property in your app's manifest.json file."),(0,r.kt)("li",{parentName:"ul"},"Requires an app icon asset in your app\u2019s folder."),(0,r.kt)("li",{parentName:"ul"},"The launcher icon should look like the app's dock icon to prevent confusion.  "),(0,r.kt)("li",{parentName:"ul"},"The launcher icon is a 256\xd7256 transparent .png converted into an .ico file in the following resolutions: 16\xd716, 32\xd732, 48\xd748, 256\xd7256.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In order to create a multi-layer .ico file, you can use a third-party service. We recommend ",(0,r.kt)("a",{parentName:"li",href:"https://convertico.com"},"convertico"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Please make sure that your icon's layer sizes include all of (and only) the above sizes (16\xd716, 32\xd732, 48\xd748, 256\xd7256)"),"."))),(0,r.kt)("li",{parentName:"ul"},"The launcher icon should weigh less than 150Kb."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact us if you want to update your installer icon")," with the ICO file (the installer is the .EXE bundle icon that the users downloads from the OW app store)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WindowIcon.png ",(0,r.kt)("strong",{parentName:"p"},"(OPTIONAL)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A colored icon for the window task bar icon \\ window header. If not defined, ",(0,r.kt)("strong",{parentName:"li"},"IconMouseOver.png")," will be taken."),(0,r.kt)("li",{parentName:"ul"},"Requires the ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#meta-window-icon"},(0,r.kt)("inlineCode",{parentName:"a"},"window_icon"))," property in your app's manifest.json file.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The difference between the two icons, is that this taskbar icon should be squared, while the other icons are rounded, to fit the OW deck.  "),(0,r.kt)("li",{parentName:"ul"},"Similarly, file should be smaller than 30KB and sized 256X256 pixels with at least 72 PPI."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"tray_icon.ico ",(0,r.kt)("strong",{parentName:"p"},"(OPTIONAL)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A dedicated tray icon for your app."),(0,r.kt)("li",{parentName:"ul"},"Requires the ",(0,r.kt)("a",{parentName:"li",href:"/api/manifest#meta-tray_icon"},(0,r.kt)("inlineCode",{parentName:"a"},"tray_icon"))," property in your app's manifest.json file."),(0,r.kt)("li",{parentName:"ul"},"The tray icon should look similar to the app's dock icon, to prevent confusion."),(0,r.kt)("li",{parentName:"ul"},"The tray icon is a 32x32 transparent .png converted into an .ico file in the following resolutions: 16x16, 32x32."),(0,r.kt)("li",{parentName:"ul"},"If not defined, this icon will default to the ",(0,r.kt)("inlineCode",{parentName:"li"},"launcher_icon.ico")," image."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All of your code and asset files"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A hierarchy containing your code and assets.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Make sure the paths in your manifest linking to these are correct.")))))),(0,r.kt)("h3",{id:"prepare-your-store-assets"},"Prepare your store assets"),(0,r.kt)("p",null,"After submitting your OPK to the store for the first time, you should get access to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.overwolf.com"},"Overwolf Developer's Console"),"."),(0,r.kt)("p",null,"Through the console, you will be able to upload new app versions and ",(0,r.kt)("a",{parentName:"p",href:"/tools/developers-console/all-applications/store-listing"},"update your store listing page"),",\nwith all of your app's information, including screenshots, description, etc."),(0,r.kt)("p",null,"The following is a list of the store assets required before an app can be launched:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tile.jpg - The Appstore tile asset for your app."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It should be a JPG format image sized 258X198 at 72PPI.\n",(0,r.kt)("img",{alt:"Example Tile",src:t(25931).Z,width:"258",height:"198"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Icon.png - The icon used to represent your app in the Overwolf appstore."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It must be in PNG format and sized 55X55 pixels."),(0,r.kt)("li",{parentName:"ul"},"Please make sure your chosen icon looks great on both dark and bright backgrounds.\n",(0,r.kt)("img",{alt:"Example Icon",src:t(85946).Z,width:"256",height:"256"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ScreenshotX.jpg - Screenshots of your app"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Providing more than one attractive screenshots increases your app\u2019s chances of getting noticed and winning hearts."),(0,r.kt)("li",{parentName:"ul"},"Include at least one screenshot of your app (up to 5)."),(0,r.kt)("li",{parentName:"ul"},"Screenshots must be in JPG format, sized 1200x750 pixels, and a max of 100Kb for each."),(0,r.kt)("li",{parentName:"ul"},"Please choose screenshots that remain clear, and where features can be spotted in that resolution.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{alt:"Example Screenshot",src:t(39145).Z,width:"1920",height:"937"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Store description - The full Appstore description of your app"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The full Appstore description of your app, which will appear when users click on your app's store tile."),(0,r.kt)("li",{parentName:"ul"},"This description can be edited using the markdown format,"),(0,r.kt)("li",{parentName:"ul"},"The maximum length for an appstore description is 2000 characters including spaces.\n",(0,r.kt)("img",{alt:"Example Description",src:t(97494).Z,width:"1920",height:"937"}),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"This is different from the app's short description"),", which is included in the app's ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#meta-description"},"manifest.json"))))))),(0,r.kt)("h2",{id:"amazon-web-services-benefits"},"Amazon Web Services benefits"),(0,r.kt)("p",null,"Once your app has been successfully published, you will become eligible for some epic AWS benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"$10,000 in AWS Promotional Credit, valid for 2 Years.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1 full year of AWS Business Support, worth up to $5,000.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access to the AWS Technical and Business Essentials training, both web-based and instructor-led, worth about $600 per course.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"80 credits for Self-Paced Labs, valued around $80."))),(0,r.kt)("p",null,"To apply for these benefits, please send us an email (",(0,r.kt)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com"),") and we will send you all of the details!"))}u.isMDXComponent=!0},16423:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/opk-df6d334e331a77b32a1fb85348f1b250.gif"},97494:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/sub-description-e8d06a6f3a5342fb0e21a8aec24f26aa.png"},92843:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEmhJREFUeNrsnf9x27gSx2GP/n9OBU8u4OaUCixXEKeCJ1VwVgWJK4hSgdVBnApMVxBmroCwg1MH94hkeWF0kgiC+El+PjMa53IxRQLYL3bBxUIpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAHLigCabJn3/+uap/vJP/fPjtt992tAoCANMx/PnB/6oQAgQApmf4CiFAAADDRwgQAMDwEQIEADB8hAABAAwfIUAAAMNHCBAASMzwl/WPD/VnEflWyvqzqYWgoFcQAAhj+HrGXyZ2a4V4BAgBAgATMnyEAAEADB8hQAAAw0cIEADA8BECBAAwfIQAAYBEDb+qPxv5s36dOEcIEAAIZ/gLMbwYhv+vBJ6ICUVaAHQeQcmoQACmYPhzMbRV4K/ei6HtOu5vJcJ0Ffj+diJMFaMEAcDw3Rr+x/qzrY1rb3iv2vjv688fCAECABMxfIQAAYD8Db8xno2t4Z8Qgg8RnwUhQAAw/NjGMuZnQwAgZ+N4khm/Cvis2iO4QwgQAAw/nuEXKuK79MjJSwgBApCEAHyKMBNGNfyEhOCpboO3jEJ7LmmCwbwE/C49272tB/1tShl0+l70Pel7k3scY9sjAHCUMpDhr2sju64/T6k2hL43fY/6XgMJAdmDhABJuMB/e7q0UfZewu2yUh6zCut2YfziAYzSC9CG/1B/rnMuuin3fi3Psk+8zREAGOSiuzb8964SeSKLwF4/iwchqBh2DgSgdtPuZWca2PPVwTV2YzL8DiHYJdLmUw5bF9r2Z/Wf/1t/vtT/oQddoX6srBZszwyGNobJvM8WcVvX4017A7HyJyZp8OrHa9ob+anXZbYzcctW8hd38lEHgvBEwoVzgmbvJSgEVUsIYmUVjtng59KmbYP/V7h5If9Y/8NPBjFX20NAEH429nuZzfpwSzWcf9pPD9Dnnr/2ICEF/DT49gw/7/gVnU/yNBM1fqov8NShwnPxFFbyhQgCQD4G/4v32eSTzFp/uTnhKvQVhM8iCPsJ9cd/GJK0uWeDvxL7fGNh8Ieuf1ML8qcA6Bm8FY/ZcCgI5YGHMGZB4C0Kbe7L4JsZ3tXz/rLg3PYAtAhs6y9uFMZFB+nP/QQEYYk90uaJGnwbbXfb9l/Mjvwjncf9zZNiHwpCEy4UGXec7ep1hQ0Pawvd9invjTC4/7ZLH8KjWR/+xcWJG3uv+q9qD1anlndQZNSJVtuByWP/Vzva7KfIajuwGHx7lg/J0bcmF2du9kvkOCt5QbB8fdW4YreY/S9t+WxpFLeJj49YBt+mrNvo9bH/MTvzSxvLwe0yxtOfd3VDfld7lV6Wou2CKVmWx9tkadkHrxMx+Ha2XUqJTZtT/+Oi44E+NDF7YkRPW67b5lHZp7G+zTl29dSeJslop9jV7bmObPD651WCTavLwlsLgH4gHQrMEx8/QQVhoDDqTTGvMPmj7frXACPynhmYicG3qbR3dO6N24XBQ9vGubEfvC0IlaMB4KI+/llFnrgAPA5s251yex7C/MClv8qsSTvXRy4MGyJG4UvXgrAesljk8PDMa9KmzxrcNwd9/TCkkIqEIzFOTHaJ0RsS04Iga+W+oktIdEe+sXH59CvR+qMH5aODAbHD+E8jbbNz0NePus+k72zeZL3J3Pj36sg7f2sPoKWKnzJulJOvQg7CncblW3hw+Zj9w3gBxwyiVIavlUXwcxYA40Vm45JgcsEi40ZZyODqmj2a+vaujX+L8Rt7AVvHl23SbDtDOBkjORt/0ecNU9+agLmHAsuuxvO4BvGAeRvzoPylShcDx8goXH8rARB1znkg3xg8n4+B93Zi26OHegG6rXyk+FYGXthNzsLZ18u8tOicrco3k81E3V0/25r6ilYiUPadzRz1ba4eQHm408+LALRCgRyZG6wDuDxuapdzXf8EREC3ncv2exlx/G9lk5eWHVNmHAqEWgeIkp46QhFYOxSBscb/D7Ze5qAtqZm+Luk0zIEpqRrv2X4Od2tmsTPRwb6UzhRsB5mIMajkPEYrhp4MlOMMZ2I0tl7AXmL+EKm+ub+R6esJbAY+c+FobIzC9XciAJJQsc1NACSn38c6QBkq5heXb1J7CqRtbRdUu+L/qwwFYDu0FoKLswEfVH5vBXytAywiGMTUthXbtvHY4n8n63CXDgbhXlJsdXz1VjyCKvHG68oHKC1dzasI5yyu1UTqC0rb2qzN7A0WyVJ//1+JbWkbe6VtzkVuyczhbLSX2ej7kVcDDy6I7QE0M4bNDshFSI9It3vd1loEniegAb5m/xQ9gEoFOHhn5nFg6hveySe1vdXf1wE6FPSrpQDcKLfvrk3aumgdtjlmbGfprxnE/80EGvSkrVnAQdoWhHUC1VWWHfFzYWlQUQaSroZTt+nYBWBM8X8Sp3HPYvWkPHApcU2Mgoo35wRAZlVf3gX0j/+tZ2mDlfJQ8X9yhW1nqXTwEUFYKr8llU3XAWy+e6Hy3jpN/O+G9gyf5HiYpdrb0mBFawZoBOGNIzfb5BovloNjiQBEEexTfRgqbMvutKtZLr3fEoT3rs5R06LS0VG26wC/Y6/OsW3TomsMDDT49iyfXdg3y3EkHLxyPDxYUa8fzF3M1APWAZbYaxoegMFM3Oe61UEcn/06z2wMI2NADoLJ4o/NOoBOCJpTAswN0p82b4lM3PCbDoNvz/Cj689ZgM57loYM1og9chBMDHvIOsAO800+/m9fO8q7+CNi14zVue+dmiE8AJ2gokVgJQ8Y3I06l4Og/9zxSoZ1gPHG/wsV+dVcR/jqfZv2RaCHPLfPOumFFOmgvyx+tbMMuYd7tTliO/l6AANqH7xKdDy1w9NTzxWkoEyoNYCNOp3+u5DPvTRQUq9SJNe+tBiAOe4tTxWbtixTMX6LV9h7FWir9yygEWk1+2TY2frTHAve9g5iCUJhMwgNXjOCmfE4d/8DGbxtEts6lHiF3AvwVDdMYdEgTWM2ghAjZntRduWoloqEoKEsB/RZKIN3mcZehDw6PvRrQO0FfFHDNv7cNY1cN3yoDRW2RsxC4HB+D9xnfQ1+qdxtZOt9sEdWAqBX42Xb6gdHl7w6IgjOX+MMWAdYYr9RPACn8X/ArewPoV89Bk8E0ocX1A36xpNx6I5ZqV9fORaOBMFmHYCEoOGG5ysByNTg9c95gMctbA72yE4AhI2EAr6ZHxEE2xwE23UALRoIgB22b1Jeehq8bSq5a5tQkxAAHatHqmAzFyNuv3IsDAXBdlY5W3cAOtvOefzvajOZY9c/Sn2Ay1hPrCvYqPjVhJv8A/168rFrHcDyfskHCOsBmMT/j9Ln9wn0Tym2oCYlADHdnhOYrEmUnq4L7toutwNAo9pAVAFI7GARk5LeVu+WB+45nyQD2qzrABDb0uI+2MZOFLtMoBH0WkCVyYxj21mEAeHarBjYx6GoVAIH7EYXAInXUgkFug4MqSzF6gZ7DtJmlcEr11T6YpPCXoUUPAAlqY8prJT7OjgUDyBMmxWZ9MVTyHTf5AVASOG027kkgbheBzC5LvyM03Vb2bTXi6fruiR4um8WApBQKMA6APH/6F3/FD2A5rTbIvJtsA5A/O+LItTx8VkKQCKhgMkswTpAnvF/TA8gKde/IbmqwLJj8KOKd9Dl3GADz1dPwhLred87utbO0cYnm7bqOgA0dvz/McVNYUmWBZeDLl2dAGQ7AHeu1wEMCpBaY5DEdFIAHImtk5TWAc+RcvwfNd03txCgHQqkug5QWoYpPgfhY+T+crWAa9NGewNhvZnoWM5TAKRD9aCK4Tb5WgfwUiGonjU/RF5jcJnSatNGqcb/euxuUjkJODcP4HvxkPpzXf/xWlR0F0gQ5rJl9Bw2+QBLD8avr3kfsZu0J+QypdWmjbre/18Fiv8rGaN6rF7rsRujyEf2awBHhKBp2J10qO7MO+W+JtvhQHxy7AF8FxZX74FlYMd2/deOn8fGUGPF/+2alE85Vn7K9XBQ3dBb+fgq0ni2kIcUNdlbfFeXsPThnYq7su26gm3q8X+oIrQIgMV6QXkgCG0Pwec6QN8y0AsXAlA/411k118p94tbKb7/b8/wpRoZMzVCWoLQjpOXPQVhYeCuv1gIwI0D40/B9fdRwdambUzi/4WFwRdTONRlpiaAdGTRGhBtMVgMcNdjVQh6VHGLWlSe3mvbtE058JpJn02JALgXg+bsgCcDQehaByjktKK+M7h1QlCrVHbM2cl5IQvbBCCDWfoGg0cA+gjCvCUIJrNsoeyOOyst71e73bcj7Aqb2d9EBHUf7pTjw2IQgPEKQqVarxwNY9C+g5cjw9y0yYtBf65p2tNc0gSDsXHFlzRbMA8AznCR643LDrY3KcRz9b38bfFrr6Yef7baT7vpf1l4axcR77cJE/XPz6lu9hltCNDaMXj0pJ/ANdds1gEWzGC/tEXSs7/kXRxbKC5zNf4xrAHozULPBwPp+2k/sjrf9g58DhibdYAlAjDI/X/xbPBLZZY7ssm54bMWAHkNt1WnM+KaTnzXEoTPyn0ap75u3z31lAgb1haFY4Nv0sn7nFy9zT1Z6CL3kSPxmD5peN7zV53mdVusA+gc9lfY/ve20/F/r8SmofG/g/0jVf15nfs6zsVIBtDyIBSwYX/gIVQ97+HZwpV9Pcb8cgtD7HtUvO6f257fMz+Y4YdmUt6OIVV4LJuBdCigF/3uBlzmSn7/TgZMdeAhdAlCqewWAictAMryBOAeBt/M8HOH9/w0ln0CY8oDcF1NWA+YlfqRd//N4LBKm0Up1gH8bADSffVN+m7l2PiTrO47eQGQWMxnx3QJgM2MQKlwP68Alx7vdz2m/I1RZQLKu39frllXodC9hTu/MCg9Nub4/8pCAEoDA/TlWRWpnOmHAIQLBfrMVHgB8Wd/X206Ktd/tAIgi3U+zl2/MtiymkSh0Iywefau+F/3kQ+v6mGMOwlHuRlIKrGWEQasjQcw5YVAHwlAPgS1TL26LwJwPBTIYh2AECD5+H+0W4pHKwCSYOM6FDCZXfp6AVfyznpStCobuY7/XXsAD2NO1hp1PQDZpeUybjNZBxjTwaGpxf9dB4C6jv+rnHf6TV4APLlvPtYBplghyMcRYMvExw4CEMEL0IPG5QJO1zpAZeF16O3Lj1PICdDPqJ9V9T/ToDJYhXcZ/2+nUBZ8KiXB9FqAqzjOxzqAZqV+pBzfj9j49bN9k2d1Pfu79AB8rB8lyYWaEK1STs2OsLnlpa7PzUb19+gB/jhwAG7GMgNJbv7QE4x1Cu7uzHfMRVysYn31607QyZRqm1RV4DMlwPtuEdX/dufYA2ijDeVZdjhuck1AkfbVhn/n4HIu4/9BW7/xAMbrIZhWhdl1lZuur/VNudmFpgfrx9xWo6Vo6x/Kzap8JcfEn/u+x47Qom3wJaN9gh6AgYdweMjosiUIC4t1gJWD29IGpEua/U+8gafEDf9OZv25w8vaxP9ly+ALRjcegKv1gxtxaW89rwOcM4Z1am6ruPuPyk9Og0n8/yyhHUd+IQDJhBNfPH6FXqXexh7oIox6df+dx695jduOAOQoAr2LXVqsD2zOzY6en28l7r7XZ6R4qj84GswvHz1fXxueTiB6tj1d19a7kSKoIY4p/8gwwgPI2QtYquHvwE3ZiUew9/QsV/IsqwDPMqpcCAQAIWjiZN8zpjb+B9f713O/f0AAUhCB7GbQMXkwgABMMSywyiZ0nMWHu48AQGS32jib0HEWH+4+AgCJhAWVOpNN6CmLD3cfAQDDsEB7A8sAX6dd7X+yCT1n8R377gfcfQQAjgvBSvlPrmlo9ry/C/BdUZOWAAHILSzQRjmW4iBbmfVx9xEA6CEEC/EGlpk+QiGzPnn8CABkEhbg7k8I9gJkgBjStXJb3NSnu3+N8eMBwLTCAtx9BAAmGBbg7hMCwETDAtx9PABIwBuYq3CJPI27v55yNV0EAFIUAt+pvJXKoDApIABTFgFfNfqSqEEICACEDQtw9xEAmGBYgLuPAMBEwwLcfQQAJhgW4O4jADDBsAB3HwGAiYYFCncfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLj/wIMACdvOgpF2GFNAAAAAElFTkSuQmCC"},24129:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,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"},85946:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,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"},39145:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/sub-screenshot-1-69894fc402bf9e0bbfdcddb1fc6d8127.png"},25931:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/tile-e8369b5d8c76bb75eb15e2a34846c45b.jpg"}}]);