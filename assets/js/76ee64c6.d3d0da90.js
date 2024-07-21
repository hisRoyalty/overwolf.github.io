"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9885],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,w=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(w,o(o({ref:t},d),{},{components:n})):r.createElement(w,o({ref:t},d))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(25773),a=(n(27378),n(35318));const i={id:"app-automation",image:"/img/embed/getting-started.jpg",title:"App Automation",sidebar_label:"App Automation",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,l={unversionedId:"start/test-your-app/app-automation",id:"start/test-your-app/app-automation",title:"App Automation",description:"This article explains how to enable and set up Overwolf app automation in Node.js using ChromeDriver and selenium-webdriver / webdriverio.",source:"@site/../pages/start/test-your-app/app-automation.mdx",sourceDirName:"start/test-your-app",slug:"/start/test-your-app/app-automation",permalink:"/start/test-your-app/app-automation",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/start/test-your-app/app-automation.mdx",tags:[],version:"current",lastUpdatedBy:"ben.koren",lastUpdatedAt:1721549031,formattedLastUpdatedAt:"Jul 21, 2024",frontMatter:{id:"app-automation",image:"/img/embed/getting-started.jpg",title:"App Automation",sidebar_label:"App Automation",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Teamfight Tactics",permalink:"/start/game-compliance/teamfight-tactics"},next:{title:"Community alphas",permalink:"/start/test-your-app/community-alphas"}},p={},s=[{value:"Requirements:",id:"requirements",level:3},{value:"To run WebDriver with <code>selenium-webdriver</code> package:",id:"to-run-webdriver-with-selenium-webdriver-package",level:3},{value:"To run WebDriver with <code>webdriverio</code> in Standalone Mode:",id:"to-run-webdriver-with-webdriverio-in-standalone-mode",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article explains how to enable and set up Overwolf app automation in Node.js using ",(0,a.kt)("inlineCode",{parentName:"p"},"ChromeDriver")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/selenium-webdriver"},(0,a.kt)("inlineCode",{parentName:"a"},"selenium-webdriver"))," / ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/"},(0,a.kt)("inlineCode",{parentName:"a"},"webdriverio")),"."),(0,a.kt)("h3",{id:"requirements"},"Requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chromedriver.storage.googleapis.com/87.0.4280.88/chromedriver_win32.zip"},"Download")," ",(0,a.kt)("inlineCode",{parentName:"li"},"chromedriver.exe")," and place it in a folder of your choice (i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"C:/webdrivers"),").",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Add that folder to your system's PATH:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Start menu"),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"Path")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit the system environment variables")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Environment Variables")),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Path")," and then ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit")),(0,a.kt)("li",{parentName:"ol"},"Add your chosen folder to the list and click ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")," on all windows"))))),(0,a.kt)("li",{parentName:"ul"},"Run Overwolf with the command line flag ",(0,a.kt)("inlineCode",{parentName:"li"},"--enable-automation"),"."),(0,a.kt)("li",{parentName:"ul"},"For the examples below: install and launch Replay HUD.")),(0,a.kt)("h3",{id:"to-run-webdriver-with-selenium-webdriver-package"},"To run WebDriver with ",(0,a.kt)("inlineCode",{parentName:"h3"},"selenium-webdriver")," package:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install selenium-webdriver")," in your node project.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install and launch your app.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Take note of your app's window title.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a driver instance according to the following example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// ReplayHUD automation with selenium-webdriver\nconst { Builder, By, Key, until } = require("selenium-webdriver");\nconst chrome = require("selenium-webdriver/chrome");\n\nconst options = new chrome.Options();\noptions.options_["debuggerAddress"] = "localhost:54284"; // Overwolf Remote Debugger\n\nconst xpath = "/html/body/ng-include/div/div[5]/div[2]/div[1]/article[4]/div";\n\n(async function example() {\n  let driver = await new Builder()\n    .forBrowser("chrome")\n    .setChromeOptions(options)\n    .build();\n\n  try {\n    // Find and switch to your app\'s window\n    const handles = await driver.getAllWindowHandles();\n    for (let handle of handles) {\n      await driver.switchTo().window(handle);\n      if ((await driver.getTitle()) === "Replay HUD") {\n        break;\n      }\n    }\n    // Enjoy\n    const element = await driver.wait(\n      until.elementLocated(By.xpath(xpath)),\n      30\n    );\n    await element.click();\n  } finally {\n    await driver.quit();\n  }\n})();\n')))),(0,a.kt)("h3",{id:"to-run-webdriver-with-webdriverio-in-standalone-mode"},"To run WebDriver with ",(0,a.kt)("inlineCode",{parentName:"h3"},"webdriverio")," in Standalone Mode:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you want to run ",(0,a.kt)("inlineCode",{parentName:"p"},"webdriverio")," in Testrunner Mode (and you likely do, if you're using this package for testing) you should check out its ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted"},"documentation"),". The configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"wdio.conf.js"),") should include the options used in the Standalone Mode example below.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install webdriverio")," in your node project.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a browser session according to the following example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// ReplayHUD automation with webdriverio in Standalone Mode\nconst { remote } = require("webdriverio");\n\nconst xpath = "/html/body/ng-include/div/div[5]/div[2]/div[1]/article[4]/div";\n\n(async () => {\n  const browser = await remote({\n    automationProtocol: "devtools",\n    browserName: "chrome",\n    capabilities: {\n      "goog:chromeOptions": {\n        debuggerAddress: "localhost:54284",\n      },\n    },\n  });\n\n  await browser.switchWindow("Replay HUD");\n\n  const button = await browser.$(xpath);\n  await button.waitForClickable({ timeout: 3000 });\n  await button.click();\n  await browser.deleteSession();\n})();\n')))))}u.isMDXComponent=!0}}]);