"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3159],{35318:(e,n,a)=>{a.d(n,{Zo:()=>g,kt:()=>f});var o=a(27378);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},g=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=t,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?o.createElement(f,r(r({ref:n},g),{},{components:a})):o.createElement(f,r({ref:n},g))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:t,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72596:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(25773),t=(a(27378),a(35318));const i={id:"trace",image:"/img/embed/api-best-practices.jpg",title:"Trace",sidebar_position:10,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},r=void 0,s={unversionedId:"topics/understanding-overwolf-logs/trace",id:"topics/understanding-overwolf-logs/trace",title:"Trace",description:"The Trace logs will help you keep trace of all the actions taken by Overwolf and make sure that everything is running smoothly. You can also use these logs to view basic system information, Overwolf user information (If the user is logged in), the users gamelist version and if Windows 10 Hardware Accelerated GPU Scheduling is enabled (Which may cause issues with recording).",source:"@site/../pages/topics/understanding-overwolf-logs/trace.mdx",sourceDirName:"topics/understanding-overwolf-logs",slug:"/topics/understanding-overwolf-logs/trace",permalink:"/topics/understanding-overwolf-logs/trace",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/understanding-overwolf-logs/trace.mdx",tags:[],version:"current",lastUpdatedBy:"adircoh",lastUpdatedAt:1721829131,formattedLastUpdatedAt:"Jul 24, 2024",sidebarPosition:10,frontMatter:{id:"trace",image:"/img/embed/api-best-practices.jpg",title:"Trace",sidebar_position:10,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Understanding Overwolf Logs",permalink:"/topics/understanding-overwolf-logs/"},next:{title:"OBS",permalink:"/topics/understanding-overwolf-logs/obs"}},l={},c=[{value:"OW, OS and User info",id:"ow-os-and-user-info",level:2},{value:"GPU and HAGS",id:"gpu-and-hags",level:2},{value:"Overlay life cycle",id:"overlay-life-cycle",level:2},{value:"Game score",id:"game-score",level:2},{value:"extensions info",id:"extensions-info",level:2},{value:"User Settings",id:"user-settings",level:2},{value:"OW Helpers info",id:"ow-helpers-info",level:2}],g={toc:c};function d(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,o.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The Trace logs will help you keep trace of all the actions taken by Overwolf and make sure that everything is running smoothly. You can also use these logs to view basic system information, Overwolf user information (If the user is logged in), the users gamelist version and if Windows 10 Hardware Accelerated GPU Scheduling is enabled (Which may cause issues with recording)."),(0,t.kt)("p",null,"It\u2019s also important to check that the overlay is enabled, if Overwolf helpers launched correctly, which extensions are running, which Overwolf processes are running & when Overwolf processes have closed and other processes currently running on the computer to check for any interference. "),(0,t.kt)("h2",{id:"ow-os-and-user-info"},"OW, OS and User info"),(0,t.kt)("p",null,"In the first section of the Trace log you can check under which path Overwolf is installed, the system information such as Windows version, build & .NET version. If the user is logged in you can also view their account details :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"2021-07-20 10:21:00,606 (INFO) [UI][12564] AppCenter - command line: C:\\Program Files (x86)\\Overwolf\\Overwolf.exe -from-startmenu -launchapp ojgnfnbjckbpfaciphphehonokbggjhpnnoafack\n2021-07-20 10:21:00,607 (INFO) [UI][12564] AppCenter - Running dll folder: C:\\Program Files (x86)\\Overwolf\\0.174.87.15\n2021-07-20 10:21:00,657 (INFO) [UI][12564] AppCenter - Registering for restart with commandline: -from-startmenu -launchapp ojgnfnbjckbpfaciphphehonokbggjhpnnoafack -ARR 1\n2021-07-20 10:21:00,704 (INFO) [UI][12564] AppCenter - Process tree:    OverwolfLauncher - C:\\Program Files (x86)\\Overwolf\\OverwolfLauncher.exe (35256) explorer - C:\\Windows\\explorer.exe (9916)\n2021-07-20 10:21:00,714 (INFO) [UI][12564] AppCenter - Found 1 processes named 'Overwolf'\n2021-07-20 10:21:00,719 (INFO) [UI][12564] AppCenter - is unique process: True\n2021-07-20 10:21:00,721 (INFO) [UI][12564] ClientInstanceManager - Testing overwolf instances\n2021-07-20 10:21:00,721 (INFO) [UI][12564] ClientInstanceManager - First unique Overwolf instance\n2021-07-20 10:21:00,760 (INFO) [UI][12564] CefGlobalFlags - Global CEF flags init\n2021-07-20 10:21:00,937 (INFO) [UI][12564] LoginSession - Initializing Login Session (Windows 10 64-bit, .NET 4.5, 10.0.19041.1023)\n2021-07-20 10:21:00,940 (INFO) [ 8][8868]  UserInformationLog - UID: OW_c58ed287-9974-4f2f-829f-6826d8bc6143\n2021-07-20 10:21:00,940 (INFO) [ 8][8868]  UserInformationLog - MUID: c17f3db1-9075-4045-9507-197c7eac9126\n2021-07-20 10:21:00,941 (INFO) [ 8][8868]  UserInformationLog - Username: shirel.garfinkle\n2021-07-20 10:21:00,941 (INFO) [ 8][8868]  UserInformationLog - Channel:  website (ML:website) \n2021-07-20 10:21:00,942 (INFO) [ 8][8868]  UserInformationLog - CurrentVersion: 0.174.87.15\n2021-07-20 10:21:00,942 (INFO) [ 8][8868]  UserInformationLog - LastVersion: 0.174.0.10\n2021-07-20 10:21:00,943 (INFO) [ 8][8868]  UserInformationLog - UpdateRequireUAC: false\n2021-07-20 10:21:00,951 (INFO) [UI][12564] LevelDBStorage - LevelDB version: 1.22\n")),(0,t.kt)("h2",{id:"gpu-and-hags"},"GPU and HAGS"),(0,t.kt)("p",null,"In this section you can see which GPU is used and if Hardware-accelerated GPU scheduling is enabled. If it is enabled and causing issues with recording you can ask the user to disable it using ",(0,t.kt)("a",{parentName:"p",href:"https://support.overwolf.com/en/support/solutions/articles/9000181387-common-capture-issues#accel"},"this guide"),". "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"2021-07-20 10:21:01,010 (INFO) [ 9][4760]  <>c - Override GPU Info with dxdiag [Intel(R) UHD Graphics, NVIDIA GeForce GTX 1650 Ti,  ] -> [Intel(R) UHD Graphics, NVIDIA GeForce GTX 1650 Ti,  ]\n2021-07-20 10:21:01,055 (INFO) [ 8][8868]  UserInformationLog - OS: HAGSEnable: False\n")),(0,t.kt)("h2",{id:"overlay-life-cycle"},"Overlay life cycle"),(0,t.kt)("p",null,"In this section you can see the Overwolf overlay starting up:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"2021-07-20 10:21:01,703 (INFO) [OverlayService ID 15][23824] OverlayService - Initializing OverlayService\n2021-07-20 10:21:01,703 (INFO) [OverlayService ID 15][23824] OverlayService - Connecting to OverlayService\n2021-07-20 10:21:01,717 (INFO) [OverlayService ID 15][23824] OverlayService - Waiting for OverwolfHelper.exe to exit\n2021-07-20 10:21:01,727 (INFO) [OverlayService ID 15][23824] OverlayService - Starting OWServer\n")),(0,t.kt)("h2",{id:"game-score"},"Game score"),(0,t.kt)("p",null,"In this section you can see the Game Score which determines if the game is supported by Overwolf:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"2022-01-19 05:34:33,552 (INFO) [OverlayService ID 16][4024]  ProcessManager - SetProcessUsage for 'H:\\Genshin Impact\\launcher.exe' with value 'NoUsage' \n2022-01-19 05:34:38,629 (INFO) [OverlayService ID 16][4024]  GameInjectionScoringHelper - Potential game found: 216561 - Genshin Impact - Decision: Supported - Score: 10\n2022-01-19 05:34:38,630 (INFO) [OverlayService ID 16][4024]  ProcessManager - SetProcessUsage for 'H:\\Genshin Impact\\Genshin Impact game\\GenshinImpact.exe' with value 'Manual' [command line: \"\" ]\n2022-01-19 05:34:39,138 (INFO) [OverlayService ID 16][4024]  ProcessManager - Process state changed. Process: 'H:\\Genshin Impact\\Genshin Impact game\\GenshinImpact.exe' [35392], state: Entered\n2022-01-19 05:34:39,139 (INFO) [OverlayService ID 16][4024]  GamesSettingsManager - New detected game added to game settings storage: 21656\n2022-01-19 05:34:39,154 (INFO) [OverlayService ID 16][4024]  GamesManager - Recently played game added to list: 216561\n")),(0,t.kt)("p",null,"For example, Discord is recognized by Overwolf but is not a supported game:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"2022-01-19 04:00:50,680 (INFO) [OverlayService ID 16][4024]  ProcessManager - SetProcessUsage for 'C:\\Program Files\\Mozilla Firefox\\firefox.exe' with value 'NoUsage' \n2022-01-19 04:00:50,682 (INFO) [OverlayService ID 16][4024]  ProcessManager - SetProcessUsage for 'C:\\Program Files (x86)\\Razer\\Synapse3\\UserProcess\\Razer Synapse Service Process.exe' with value 'NoUsage' \n2022-01-19 04:00:50,692 (INFO) [OverlayService ID 16][4024]  GameInjectionScoringHelper - Potential game found: 215761 - Discord - Decision: NotSupported - Score: 2\n")),(0,t.kt)("p",null,"If the game is supported by Overwolf but the overlay is disabled (Either due to the user manually disabling the overlay or due to a technical issue.) it will be shown in the logs as follows:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"2022-01-31 11:06:44,612 (INFO) [OverlayService ID 17][7964] ProcessManager - Process state changed. Process: 'I:\\SteamLibrary\\steamapps\\common\\Apex Legends\\r5apex.exe' [25164], state: Entered\n2022-01-31 11:06:44,613 (INFO) [OverlayService ID 17][7964] GamesSettingsManager - New detected game added to game settings storage: 21566\n2022-01-31 11:06:44,623 (INFO) [UI][7496] ExtensionWebApp - Launching app: ppagiehdogdjlomggmoejfamedbjggdggnjbilhe [Overwolf Remote Configurations - 1.188.1]. caller: gamelaunchevent. launchEvent: AllGamesLaunch\n2022-01-31 11:06:44,624 (INFO) [OverlayService ID 17][7964] GamesManager - Not injecting into: 215661 because Overlay is disabled for this game under the game settings\n")),(0,t.kt)("h2",{id:"extensions-info"},"extensions info"),(0,t.kt)("p",null,"In this section you can see the amount of extensions the user has, which extensions are loading (According to their unique ID) and if there are any issues in loading the extensions:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"2021-07-20 10:21:03,482 (INFO) [UI][12564] ExtensionDataManager - Loading 26 installed extensions...\n2021-07-20 10:21:03,484 (INFO) [UI][12564] ExtensionDataManager - Loading per-load extensions\n2021-07-20 10:21:03,814 (INFO) [UI][12564] ExtensionDataManager - Loading extension ppagiehdogdjlomggmoejfamedbjggdggnjbilhe silently...\n2021-07-20 10:21:03,816 (INFO) [UI][12564] ExtensionsUpdateManager - Updating packages info synchronously.\n2021-07-20 10:21:03,954 (INFO) [UI][12564] ExtensionsUpdateManager - parsed update data of 583 extensions.\n2021-07-20 10:21:03,954 (INFO) [UI][12564] ExtensionsUpdateManager - clearing and updating packages\n2021-07-20 10:21:03,961 (INFO) [UI][12564] ExtensionsUpdateManager - Package data updated. Will check again in 02:00:00 hours\n2021-07-20 10:21:03,966 (WARN) [18][26900] ExtensionDataManager - wait for load to end...\n2021-07-20 10:21:03,995 (INFO) [UI][12564] ExtensionDataManager - Loading extension ggfmakpbllghoepnmfelddbminamnbmfelbahfdp silently...\n2021-07-20 10:21:04,002 (INFO) [UI][12564] ExtensionDataManager - Loading extension geajlfbgmkaklkojofefpgnnjcceibhakfjhfefk silently...\n2021-07-20 10:21:04,003 (INFO) [UI][12564] ExtensionsUpdateManager - Could not find package geajlfbgmkaklkojofefpgnnjcceibhakfjhfefk\n2021-07-20 10:21:04,007 (INFO) [UI][12564] ExtensionDataManager - Loading extension midihkloolidnegokmecmcdepinaidpmbpgpncek silently...\n2021-07-20 10:21:04,011 (INFO) [UI][12564] ExtensionDataManager - Loading extension bebanicmemnmpcomjjlnjkeionhgkkdgfdocgdam silently...\n2021-07-20 10:21:04,016 (INFO) [UI][12564] ExtensionDataManager - Loading extension ecbhmmfmjonpojpbedhhhbjanafifbbcjofikdim silently...\n2021-07-20 10:21:04,016 (INFO) [UI][12564] ExtensionGameEventsProvider - ecbhmmfmjonpojpbedhhhbjanafifbbcjofikdim is set not to init on startup\n2021-07-20 10:21:04,021 (INFO) [UI][12564] ExtensionDataManager - Loading extension oldfhfbggeglgjgenidckaneodejpjkaggklojma silently...\n2021-07-20 10:21:04,025 (INFO) [UI][12564] ExtensionDataManager - Loading extension cmhjmacifnhhboffmobjofpejedkbnfolcgijhpc silently...\n2021-07-20 10:21:04,030 (INFO) [UI][12564] ExtensionDataManager - Loading extension hadnijlcblooohinkbaggccaedldhpfdnaagefci silently...\n2021-07-20 10:21:04,039 (INFO) [UI][12564] ExtensionDataManager - Loading extension nafihghfcpikebhfhdhljejkcifgbdahdhngepfb silently...\n2021-07-20 10:21:04,045 (INFO) [UI][12564] ExtensionDataManager - Loading extension pmecpbelmicelkhhcdlonffhgoclgcdbfgmdfhag silently...\n2021-07-20 10:21:04,052 (INFO) [UI][12564] ExtensionDataManager - Loading extension cccgaknkmciakiacadiefgpmbcgboopeohekmigg silently...\n2021-07-20 10:21:04,072 (INFO) [UI][12564] ExtensionDataManager - Loading extension kfnacgfblhkjdgcndfdobooemjaapcefaminngbk silently...\n2021-07-20 10:21:04,084 (INFO) [UI][12564] ExtensionDataManager - Loading extension cghphpbjeabdkomiphingnegihoigeggcfphdofo silently...\n2021-07-20 10:21:04,214 (INFO) [UI][12564] ExtensionDataManager - Loading extension dafpjodfmofenjonekfnkphpghegoekhfepmbmib silently...\n2021-07-20 10:21:04,278 (INFO) [UI][12564] ExtensionDataManager - Loading extension ojgnfnbjckbpfaciphphehonokbggjhpnnoafack silently...\n2021-07-20 10:21:04,286 (INFO) [UI][12564] ExtensionDataManager - Loading extension cchhcaiapeikjbdbpfplgmpobbcdkdaphclbmkbj silently...\n2021-07-20 10:21:04,307 (INFO) [UI][12564] ExtensionDataManager - Loading extension pibhbkkgefgheeglaeemkkfjlhidhcedalapdggh silently...\n2021-07-20 10:21:04,423 (INFO) [UI][12564] ExtensionDataManager - Loading extension lnknbakkpommmjjdnelmfbjjdbocfpnpbkijjnob silently...\n2021-07-20 10:21:04,485 (INFO) [UI][12564] ExtensionDataManager - Loading extension nonfnefnlcikmjkkdclbhpojenalpkcoipjjognm silently...\n2021-07-20 10:21:04,545 (INFO) [UI][12564] ExtensionDataManager - Loading extension decddmhlpdgkcihhfbahfkafojbjckglidmilgoh silently...\n2021-07-20 10:21:04,659 (INFO) [UI][12564] ExtensionDataManager - Loading extension bfcbjmpkifhjdigfjiapnkokoajejacldgpoldgi silently...\n2021-07-20 10:21:04,695 (INFO) [UI][12564] ExtensionDataManager - Loading extension kpaejaacomnkenpbmclnglmblpmfiapjlebhpcom silently...\n2021-07-20 10:21:04,759 (INFO) [OverlayService ID 15][23824] OverlayService - Overlay started\n2021-07-20 10:21:04,778 (INFO) [OverlayService ID 15][23824] LoginSession - Init after overlay ready\n2021-07-20 10:21:04,909 (INFO) [UI][12564] ExtensionDataManager - Loading extension ikakjhlicfmeoglkoihlnhphenmedggccipebkkb silently...\n2021-07-20 10:21:04,944 (INFO) [UI][12564] ExtensionDataManager - Loading extension fbikhiaoalpganbhcfceednmcmolodebmnnmfpmc silently...\n2021-07-20 10:21:04,955 (INFO) [UI][12564] ExtensionDataManager - Loading extension fiekjlgoffmlmgfmggnoeoljkmfkcapcdmcgcfgm silently...\n2021-07-20 10:21:05,100 (INFO) [UI][12564] ExtensionDataManager - Collecting uninstalled extensions from extension installation folder...\n")),(0,t.kt)("h2",{id:"user-settings"},"User Settings"),(0,t.kt)("p",null,"In this section you can view the setting of each Overwolf app from the Overwolf settings such as if the app is set to auto-launch and hotkeys associated with the app:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"================ USER SETTINGS ================\n2022-03-01 14:51:55,693 (INFO) [20][23684] UserInformationLog - Installed apps:\nGame Capture (lnhebboianabbebhnpoodokcdcnmikacoeijpjfe) - autolaunch:\n(Start/Stop video capturing, Shift+F10), (Take a screenshot, Shift+F11), (Show/Hide My Videos, Unassigned), (Show/Hide Game Capture app, Unassigned)\n9898: (Start/Stop video capturing, Back), (Show/hide main window, Alt+C), (Show/hide battlegrounds window, Alt+B), (Show HearthArena Companion Full-App, Ctrl+R), (Show live information (only BG for now), Tab)\nTFTactics (delfmdadipjjmpajblkalfkbebcbldbknecigjpc) - autolaunch: 5426\n5426: (In-Game, Ctrl+T), (Database, Ctrl+G), (Lobby, Unassigned), (Show/Hide In-Game Window, Ctrl+H), (Next Page Second Screen Window, Unassigned), (Toggle monitor, Ctrl+Up), (Show/Hide, Ctrl+X), (Send ingame window to another screen, Ctrl+Shift+X), (Show/Hide Secondary, Alt+X), (Show/Hide Live Stats Overlay, Alt+Shift+X)\nTrophy Hunter (hgiobbchekblfkiionmkcedlnhbkpdkekmcnceki) - autolaunch: 5426,10902\n5426: (In-Game, Ctrl+T), (Database, Ctrl+G), (Lobby, Unassigned), (Show/Hide In-Game Window, Ctrl+H), (Next Page Second Screen Window, Unassigned), (Toggle monitor, Ctrl+Up), (Show/Hide, Ctrl+X), (Send ingame window to another screen, Ctrl+Shift+X), (Show/Hide Secondary, Alt+X), (Show/Hide Live Stats Overlay, Alt+Shift+X)\nCurseForge (cchhcaiapeikjbdbpfplgmpobbcdkdaphclbmkbj) - autolaunch:\nFirestone (lnknbakkpommmjjdnelmfbjjdbocfpnpbkijjnob) - autolaunch:\n9898: (Start/Stop video capturing, Back), (Show/hide main window, Alt+C), (Show/hide battlegrounds window, Alt+B), (Show HearthArena Companion Full-App, Ctrl+R), (Show live information (only BG for now), Tab)\nPorofessor.gg (pibhbkkgefgheeglaeemkkfjlhidhcedalapdggh) - autolaunch:\n21620: (Show/Hide, Ctrl+X), (Send ingame window to another screen, Ctrl+Shift+X), (Show/Hide Secondary, Alt+X), (Show/Hide Live Stats Overlay, Alt+Shift+X)\n5426: (In-Game, Ctrl+T), (Database, Ctrl+G), (Lobby, Unassigned), (Show/Hide In-Game Window, Ctrl+H), (Next Page Second Screen Window, Unassigned), (Toggle monitor, Ctrl+Up), (Show/Hide, Ctrl+X), (Send ingame window to another screen, Ctrl+Shift+X), (Show/Hide Secondary, Alt+X), (Show/Hide Live Stats Overlay, Alt+Shift+X)\nHearthArena (eldaohcjmecjpkpdhhoiolhhaeapcldppbdgbnbc) - autolaunch:\n9898: (Start/Stop video capturing, Back), (Show/hide main window, Alt+C), (Show/hide battlegrounds window, Alt+B), (Show HearthArena Companion Full-App, Ctrl+R), (Show live information (only BG for now), Tab)\nOutplayed (cghphpbjeabdkomiphingnegihoigeggcfphdofo) - autolaunch: all except 10624, 10746, 10760, 10774, 10798, 10826, 10844, 10868, 10872, 10874, 10878, 10880, 10894, 15148, 21204, 21214, 21220, 21308, 21404, 21480, 21570, 21586, 21616, 21620, 21624, 21626, 21630, 21634, 21648, 21650, 21652, 21656, 21666, 21782, 21800, 21854, 3026, 3683, 4688, 5855, 6365, 7212, 7314, 765, 7764, 7784, 8032, 8134, 8584, 8954, 9898\n(Start/stop recording, Ctrl+F4), (Record a Replay, Ctrl+F3), (Take a Screenshot, Ctrl+F2), (Show/hide Outplayed in-game, Ctrl+O)\nIntel Gaming Access (acibipjmghoeafghadnbbjdpofabgdicbjppneee) - autolaunch: all\n2022-03-01 14:51:55,695 (INFO) [20][23684] UserInformationLog - |General settings\n2022-03-01 14:51:55,695 (INFO) [20][23684] UserInformationLog - | startup launch: True\n2022-03-01 14:51:55,696 (INFO) [20][23684] UserInformationLog - | dock keep visible: True, MouseOver\n2022-03-01 14:51:55,696 (INFO) [20][23684] UserInformationLog - | hardware acceleration: True\n2022-03-01 14:51:55,700 (INFO) [20][23684] UserInformationLog - |Capture settings\n2022-03-01 14:51:55,700 (INFO) [20][23684] UserInformationLog - | shared texture compatibility: False\n2022-03-01 14:51:55,701 (INFO) [20][23684] UserInformationLog - | screenshots folder: C:\\Users\\orman\\Pictures\\Overwolf\n2022-03-01 14:51:55,701 (INFO) [20][23684] UserInformationLog - | videos folder: E:\\\u05e1\u05e8\u05d8\u05d5\u05e0\u05d9\u05dd\\Game capture\n2022-03-01 14:51:55,701 (INFO) [20][23684] UserInformationLog - | frame rate: 60\n2022-03-01 14:51:55,701 (INFO) [20][23684] UserInformationLog - | encoding codec: NVIDIA_NVENC_NEW\n2022-03-01 14:51:55,702 (INFO) [20][23684] UserInformationLog - | encoding preset: AUTOMATIC\n2022-03-01 14:51:55,702 (INFO) [20][23684] UserInformationLog -\n================ |END USER SETTINGS ================\n")),(0,t.kt)("h2",{id:"ow-helpers-info"},"OW Helpers info"),(0,t.kt)("p",null,"In this section you can see the Overwolf Helpers starting:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'2021-07-20 10:21:05,728 (INFO) [26][7788]  OverwolfHelpersProcesesManager - Launching helper OverwolfHelper.exe: 0\n2021-07-20 10:21:05,737 (INFO) [26][7788]  OverwolfHelpersProcesesManager - Looking for helper in C:\\Program Files (x86)\\Common Files\\Overwolf\\0.174.87.15\\OverwolfHelper.exe\n2021-07-20 10:21:05,737 (INFO) [26][7788]  OverwolfHelpersProcesesManager - Helper working directory: C:\\Program Files (x86)\\Common Files\\Overwolf\\0.174.87.15\n2021-07-20 10:21:05,740 (INFO) [26][7788]  OverwolfHelpersProcesesManager - Asking the user to allow Overwolf.exe admin privileges\n2021-07-20 10:21:05,742 (INFO) [26][7788]  OverwolfHelpersProcesesManager - Starting helper C:\\Program Files (x86)\\Common Files\\Overwolf\\0.174.87.15\\OverwolfHelper.esxe "path=C:\\Program Files (x86)\\Overwolf\\0.174.87.15\\win32\\OWExplorerLauncher.dll pid=11708"\n2021-07-20 10:21:05,774 (INFO) [19][19032] UpdatesServiceManager - Found a service, running it\n2021-07-20 10:21:05,810 (INFO) [UI][12564] TrayContextMenuViewModel - Refreshing recent games in recently launched games tray menu\n2021-07-20 10:21:05,832 (INFO) [26][7788]  OverwolfHelpersProcesesManager - The user has allowed Overwolf.exe admin privileges\n\n')))}d.isMDXComponent=!0}}]);