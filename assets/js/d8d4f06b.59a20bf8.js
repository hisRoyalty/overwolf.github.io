"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[1985],{35318:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>h});var r=t(27378);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},l="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,d=a(n,["components","mdxType","originalType","parentName"]),l=p(t),m=o,h=l["".concat(c,".").concat(m)]||l[m]||u[m]||i;return t?r.createElement(h,s(s({ref:e},d),{},{components:t})):r.createElement(h,s({ref:e},d))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a[l]="string"==typeof n?n:o,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60253:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(25773),o=(t(27378),t(35318));const i={id:"ow-oidc",image:"/img/embed/api-docs.jpg",title:"Overwolf OIDC",hide_title:!0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},s=void 0,a={unversionedId:"api/general/ow-oidc/ow-oidc",id:"api/general/ow-oidc/ow-oidc",title:"Overwolf OIDC",description:"Overwolf OIDC Service, used for authenticating against the Overwolf accounts system within external Applications/Websites",source:"@site/../pages/api/general/ow-oidc/ow-oidc.mdx",sourceDirName:"api/general/ow-oidc",slug:"/api/general/ow-oidc/",permalink:"/api/general/ow-oidc/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/general/ow-oidc/ow-oidc.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1715254229,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{id:"ow-oidc",image:"/img/embed/api-docs.jpg",title:"Overwolf OIDC",hide_title:!0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"OBS",permalink:"/api/general/obs/"},next:{title:"Subscriptions API",permalink:"/api/general/subscriptions-api/"}},c={},p=[],d=(l="OIDCSpec",function(n){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)});var l;const u={toc:p};function m(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(d,{mdxType:"OIDCSpec"},(0,o.kt)("p",null,"Overwolf OIDC Service, used for authenticating against the Overwolf accounts system within external Applications/Websites"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This documentation format is a ",(0,o.kt)("strong",{parentName:"em"},"WIP"),". For an interactive, more complete OpenAPI spec, we currently recommend using\n",(0,o.kt)("a",{parentName:"em",href:"https://editor-next.swagger.io"},"Swagger Editor"),".")),(0,o.kt)("p",null,"The full schema can be found and copied below:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Full API Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"Full API Schema",Full:!0,API:!0,Schema:!0},'{\n  "openapi": "3.1.0",\n  "x-ow-version": "0.0.1",\n  "info": {\n    "title": "Overwolf OIDC",\n    "description": "Overwolf OIDC Service, used for authenticating against the Overwolf accounts system within external Applications/Websites",\n    "version": "2.0.0"\n  },\n  "components": {\n    "responses": {\n      "invalidRequest": {\n        "description": "Invalid Request",\n        "content": {\n          "application/json": {\n            "examples": {\n              "example1": {\n                "value": {\n                  "statusCode": 400,\n                  "message": "invalid_request"\n                }\n              }\n            },\n            "schema": {\n              "type": "object",\n              "required": [\n                "statusCode",\n                "message"\n              ],\n              "properties": {\n                "statusCode": {\n                  "type": "number",\n                  "enum": [\n                    400\n                  ]\n                },\n                "message": {\n                  "type": "string",\n                  "enum": [\n                    "invalid_request"\n                  ]\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    "headers": {\n      "location302": {\n        "description": "The `redirect_url` passed to the request",\n        "schema": {\n          "type": "string",\n          "format": "uri",\n          "x-ow-redirect": "{$request.query.redirect_uri}"\n        }\n      }\n    },\n    "securitySchemes": {\n      "accessToken": {\n        "type": "http",\n        "description": "Bearer auth using the individual user\'s `Access Token`",\n        "scheme": "bearer",\n        "bearerFormat": "JWT"\n      },\n      "basicAuth": {\n        "type": "http",\n        "description": "Basic auth using the OIDC Client\'s `clientId` and `clientSecret` as the `Username` and `Password` respectively",\n        "scheme": "basic"\n      }\n    },\n    "schemas": {\n      "jwtToken": {\n        "description": "A standard, encoded and signed JWT token",\n        "type": "string",\n        "pattern": "^(?:[\\\\w-]+\\\\.){2}[\\\\w-]+$"\n      },\n      "idToken": {\n        "$ref": "#/components/schemas/jwtToken"\n      },\n      "accessToken": {\n        "description": "An Opaque Access Token, used for accessing different APIs on behalf of the user",\n        "type": "string"\n      },\n      "refreshToken": {\n        "description": "The `Refresh Token` used to obtain an `Access Token`",\n        "type": "string",\n        "pattern": "^(?:[\\\\w-]+\\\\.){2}[\\\\w-]+$"\n      },\n      "clientId": {\n        "type": "string",\n        "pattern": "\\\\w+"\n      },\n      "clientSecret": {\n        "type": "string",\n        "pattern": "\\\\w+"\n      },\n      "authorizationCode": {\n        "description": "The `Authorization Code` used to obtain an `Access Token`",\n        "type": "string"\n      },\n      "scope": {\n        "type": "string",\n        "pattern": "^(?:openid|profile|email|subscriptions|offline_access)(/:\\\\+(?:openid|profile|email|subscriptions|offline_access))$"\n      }\n    },\n    "parameters": {\n      "clientId": {\n        "name": "client_id",\n        "in": "query",\n        "required": true,\n        "description": "The client ID of the App using the OIDC",\n        "schema": {\n          "$ref": "#/components/schemas/clientId"\n        }\n      },\n      "idTokenHint": {\n        "name": "id_token_hint",\n        "schema": {\n          "$ref": "#/components/schemas/idToken"\n        },\n        "in": "query",\n        "description": "The Id Token",\n        "required": true\n      }\n    }\n  },\n  "servers": [\n    {\n      "description": "Overwolf OIDC Server",\n      "url": "https://id.overwolf.com/oidc"\n    }\n  ],\n  "paths": {\n    "/auth": {\n      "get": {\n        "tags": [\n          "client"\n        ],\n        "description": "Initializes the OIDC flow for the user",\n        "externalDocs": {\n          "description": "External link",\n          "url": "https://overwolf.github.io"\n        },\n        "parameters": [\n          {\n            "$ref": "#/components/parameters/clientId"\n          },\n          {\n            "name": "redirect_uri",\n            "in": "query",\n            "required": true,\n            "description": "The URI to redirect the user to once they finish the flow (must be pre-configured in the Overwolf backend)",\n            "schema": {\n              "type": "string",\n              "format": "uri"\n            }\n          },\n          {\n            "name": "scope",\n            "in": "query",\n            "required": true,\n            "description": "The scopes requested by the application (`openid` MUST be requested for the flow to properly work)",\n            "schema": {\n              "$ref": "#/components/schemas/scope"\n            }\n          },\n          {\n            "name": "code_challenge",\n            "in": "query",\n            "required": true,\n            "description": "The PKCE Code Challenge value",\n            "schema": {\n              "type": "string"\n            }\n          },\n          {\n            "name": "code_challenge_method",\n            "in": "query",\n            "required": true,\n            "description": "The PKCE Code Challenge method (currently, only `S256` is supported)",\n            "schema": {\n              "type": "string",\n              "enum": [\n                "S256"\n              ]\n            }\n          },\n          {\n            "name": "response_type",\n            "in": "query",\n            "required": true,\n            "description": "The response type for the flow (currently, only `code` is supported)",\n            "schema": {\n              "type": "string",\n              "enum": [\n                "code"\n              ]\n            }\n          },\n          {\n            "name": "prompt",\n            "in": "query",\n            "description": "Whether or not the user should be guaranteed to be prompted to grant consent (required when using the `offline_access` scope)",\n            "schema": {\n              "type": "string",\n              "enum": [\n                "consent"\n              ]\n            }\n          }\n        ],\n        "callbacks": {\n          "redirect": {\n            "{$request.body#/redirect_uri}": {\n              "get": {\n                "description": "test",\n                "parameters": [\n                  {\n                    "name": "code",\n                    "in": "query",\n                    "description": "The `authorization_code` granted to the client on a succesful authentication",\n                    "schema": {\n                      "type": "string",\n                      "oneOf": [\n                        {\n                          "$ref": "#/components/schemas/authorizationCode"\n                        }\n                      ]\n                    }\n                  },\n                  {\n                    "name": "error",\n                    "in": "query",\n                    "description": "An `error` given if the authentication failed",\n                    "schema": {\n                      "type": "string"\n                    }\n                  },\n                  {\n                    "name": "iss",\n                    "in": "query",\n                    "required": true,\n                    "description": "The `Issuing Authority`",\n                    "schema": {\n                      "type": "string",\n                      "enum": [\n                        "https://id.overwolf.com"\n                      ]\n                    }\n                  }\n                ]\n              }\n            }\n          }\n        },\n        "responses": {\n          "302": {\n            "description": "The flow was properly initialized (but may or may not have failed), redirecting",\n            "headers": {\n              "location": {\n                "$ref": "#/components/headers/location302"\n              }\n            }\n          },\n          "400": {\n            "$ref": "#/components/responses/invalidRequest"\n          }\n        }\n      }\n    },\n    "/me": {\n      "get": {\n        "security": [\n          {\n            "basicAuth": []\n          }\n        ],\n        "tags": [\n          "client"\n        ],\n        "description": "Obtains information about the user from their Access Token",\n        "externalDocs": {\n          "description": "External link",\n          "url": "https://overwolf.github.io"\n        },\n        "responses": {\n          "200": {\n            "description": "Test"\n          },\n          "401": {\n            "description": "Invalid Token",\n            "content": {\n              "application/json": {\n                "examples": {\n                  "example1": {\n                    "value": {\n                      "error": "invalid_token",\n                      "error_description": "invalid token provided"\n                    }\n                  }\n                },\n                "schema": {\n                  "type": "object",\n                  "required": [\n                    "error",\n                    "error_description"\n                  ],\n                  "properties": {\n                    "error": {\n                      "type": "string",\n                      "enum": [\n                        "invalid_token"\n                      ]\n                    },\n                    "error_description": {\n                      "type": "string",\n                      "enum": [\n                        "invalid token provided"\n                      ]\n                    }\n                  }\n                }\n              }\n            }\n          },\n          "500": {\n            "description": "Internal server error",\n            "content": {\n              "application/json": {\n                "examples": {\n                  "example1": {\n                    "value": {\n                      "statusCode": 500,\n                      "message": "Internal Server Error"\n                    }\n                  }\n                },\n                "schema": {\n                  "type": "object",\n                  "required": [\n                    "statusCode",\n                    "message"\n                  ],\n                  "properties": {\n                    "statusCode": {\n                      "type": "number",\n                      "enum": [\n                        500\n                      ]\n                    },\n                    "message": {\n                      "type": "string",\n                      "enum": [\n                        "Internal Server Error"\n                      ]\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    "/token/revocation": {},\n    "/token": {\n      "post": {\n        "tags": [\n          "server"\n        ],\n        "description": "Uses an Authorization Code/Refresh Token in order to generate an access token",\n        "requestBody": {\n          "required": true,\n          "content": {\n            "application/x-www-form-urlencoded": {\n              "schema": {\n                "type": "object",\n                "oneOf": [\n                  {\n                    "type": "object",\n                    "required": [\n                      "client_id",\n                      "client_secret",\n                      "grant_type",\n                      "redirect_uri",\n                      "code_verifier",\n                      "code"\n                    ],\n                    "properties": {\n                      "client_id": {\n                        "$ref": "#/components/schemas/clientId"\n                      },\n                      "client_secret": {\n                        "$ref": "#/components/schemas/clientSecret"\n                      },\n                      "grant_type": {\n                        "description": "The grant being used to generate a new set of tokens",\n                        "type": "string",\n                        "enum": [\n                          "authorization_code"\n                        ]\n                      },\n                      "code": {\n                        "$ref": "#/components/schemas/authorizationCode"\n                      },\n                      "code_verifier": {\n                        "description": "The PKCE Code Verifier value",\n                        "type": "string"\n                      },\n                      "redirect_uri": {\n                        "description": "The redirect URI used in the `/auth` endpoint, used as part of the OIDC Client\'s authentication",\n                        "type": "string"\n                      }\n                    }\n                  },\n                  {\n                    "type": "object",\n                    "required": [\n                      "client_id",\n                      "client_secret",\n                      "grant_type",\n                      "redirect_uri",\n                      "refresh_token"\n                    ],\n                    "properties": {\n                      "client_id": {\n                        "$ref": "#/components/schemas/clientId"\n                      },\n                      "client_secret": {\n                        "$ref": "#/components/schemas/clientSecret"\n                      },\n                      "grant_type": {\n                        "description": "The grant being used to generate a new set of tokens",\n                        "type": "string",\n                        "enum": [\n                          "refresh_token"\n                        ]\n                      },\n                      "redirect_uri": {\n                        "description": "The URI to redirect to with the tokens on a valid request",\n                        "type": "string"\n                      },\n                      "refresh_token": {\n                        "$ref": "#/components/schemas/refreshToken"\n                      }\n                    }\n                  }\n                ]\n              }\n            }\n          }\n        },\n        "responses": {\n          "200": {\n            "description": "Ok",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "type": "object",\n                  "properties": {\n                    "access_token": {\n                      "$ref": "#/components/schemas/accessToken"\n                    },\n                    "expires_in": {\n                      "type": "number",\n                      "description": "Time to live (in seconds) of the returned `Access Token`",\n                      "examples": [\n                        3600\n                      ]\n                    },\n                    "id_token": {\n                      "$ref": "#/components/schemas/idToken"\n                    },\n                    "scope": {\n                      "$ref": "#/components/schemas/scope"\n                    },\n                    "token_type": {\n                      "type": "string",\n                      "description": "The type of the token returned (in this case, only a `Bearer` token is supported)",\n                      "enum": [\n                        "Bearer"\n                      ]\n                    }\n                  }\n                }\n              }\n            }\n          },\n          "400": {\n            "description": "Invalid Request",\n            "content": {\n              "application/json": {\n                "examples": {\n                  "example1": {\n                    "value": {\n                      "statusCode": 400,\n                      "message": "invalid_request"\n                    }\n                  }\n                },\n                "schema": {\n                  "type": "object",\n                  "oneOf": [\n                    {\n                      "type": "object",\n                      "description": "Fired when the Request\'s format is invalid",\n                      "required": [\n                        "error",\n                        "error_description"\n                      ],\n                      "properties": {\n                        "error": {\n                          "type": "string",\n                          "enum": [\n                            "invalid_request"\n                          ]\n                        },\n                        "error_description": {\n                          "type": "string",\n                          "examples": [\n                            "missing required parameter \'code\'"\n                          ]\n                        }\n                      }\n                    },\n                    {\n                      "type": "object",\n                      "description": "Fired when an invalid `Authorization Code` is given",\n                      "required": [\n                        "error",\n                        "error_description"\n                      ],\n                      "properties": {\n                        "error": {\n                          "type": "string",\n                          "enum": [\n                            "invalid_grant"\n                          ]\n                        },\n                        "error_description": {\n                          "type": "string",\n                          "enum": [\n                            "grant request is invalid"\n                          ]\n                        }\n                      }\n                    }\n                  ]\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    "/token/introspection": {},\n    "/session/end": {\n      "post": {\n        "tags": [\n          "client"\n        ],\n        "description": "Uses a user\'s `Id Token` to log them out from their local session (**must be opened in the users\' browser where they logged in to properly erase the session!**)",\n        "parameters": [\n          {\n            "$ref": "#/components/parameters/idTokenHint"\n          },\n          {\n            "name": "post_logout_redirect_uri",\n            "in": "query",\n            "description": "The URI to redirect to once the logout is completed (Must be registered ahead of time)",\n            "schema": {\n              "type": "string",\n              "format": "uri"\n            }\n          }\n        ],\n        "responses": {\n          "302": {\n            "description": "The logout operation was properly invoked, redirecting",\n            "headers": {\n              "location": {\n                "$ref": "#/components/headers/location302"\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')))))}m.isMDXComponent=!0}}]);