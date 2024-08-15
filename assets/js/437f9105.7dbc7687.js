"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[57324],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>p});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(a),g=i,p=h["".concat(s,".").concat(g)]||h[g]||d[g]||o;return a?n.createElement(p,r(r({ref:t},l),{},{components:a})):n.createElement(p,r({ref:t},l))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:i,r[1]=c;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5943:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>h});a(96540);var n=a(15680);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const c={title:"Metadata Service Authentication",slug:"/authentication/introducing-metadata-service-authentication",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/introducing-metadata-service-authentication.md"},s="Metadata Service Authentication",u={unversionedId:"docs/authentication/introducing-metadata-service-authentication",id:"version-0.14.0/docs/authentication/introducing-metadata-service-authentication",title:"Metadata Service Authentication",description:"Introduction",source:"@site/versioned_docs/version-0.14.0/docs/authentication/introducing-metadata-service-authentication.md",sourceDirName:"docs/authentication",slug:"/authentication/introducing-metadata-service-authentication",permalink:"/docs/0.14.0/authentication/introducing-metadata-service-authentication",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/introducing-metadata-service-authentication.md",tags:[],version:"0.14.0",frontMatter:{title:"Metadata Service Authentication",slug:"/authentication/introducing-metadata-service-authentication",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/introducing-metadata-service-authentication.md"}},l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Background",id:"background",level:2},{value:"Problems with this approach",id:"problems-with-this-approach",level:3},{value:"Introducing Authentication in DataHub Metadata Service",id:"introducing-authentication-in-datahub-metadata-service",level:2},{value:"Configuring Metadata Service Authentication",id:"configuring-metadata-service-authentication",level:2},{value:"The Role of DataHub Frontend Proxy Going Forward",id:"the-role-of-datahub-frontend-proxy-going-forward",level:3},{value:"Where to go from here",id:"where-to-go-from-here",level:2},{value:"Q&amp;As",id:"qas",level:2},{value:"What if I don&#39;t want to use Metadata Service Authentication?",id:"what-if-i-dont-want-to-use-metadata-service-authentication",level:3},{value:"If I enable Metadata Service Authentication, will ingestion stop working?",id:"if-i-enable-metadata-service-authentication-will-ingestion-stop-working",level:3},{value:"How do I generate an Access Token for a service account?",id:"how-do-i-generate-an-access-token-for-a-service-account",level:3},{value:"I want to authenticate requests using a custom Authenticator? How do I do this?",id:"i-want-to-authenticate-requests-using-a-custom-authenticator-how-do-i-do-this",level:3},{value:"Now that I can make authenticated requests to either DataHub Proxy Service and DataHub Metadata Service, which should I use?",id:"now-that-i-can-make-authenticated-requests-to-either-datahub-proxy-service-and-datahub-metadata-service-which-should-i-use",level:3},{value:"Feedback / Questions / Concerns",id:"feedback--questions--concerns",level:2}],d={toc:h},g="wrapper";function p(e){var{components:t}=e,a=r(e,["components"]);return(0,n.yg)(g,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"metadata-service-authentication"},"Metadata Service Authentication"),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"This document provides a technical overview of the how authentication works in DataHub's backend aimed at developers evaluating or operating DataHub.\nIt includes a characterization of the motivations for the feature, the key components in its design, the new capabilities it provides, & configuration instructions. "),(0,n.yg)("h2",{id:"background"},"Background"),(0,n.yg)("p",null,"Let's recall 2 critical components of DataHub's architecture: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"DataHub Frontend Proxy")," (datahub-frontend) - Resource server that routes requests to downstream Metadata Service"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"DataHub Metadata Service")," (datahub-gms) - Source of truth for storing and serving DataHub Metadata Graph. ")),(0,n.yg)("p",null,"Previously, Authentication was exclusively handled by the Frontend Proxy. This service would perform the following steps\nwhen a user navigated to ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:9002/"),":"),(0,n.yg)("p",null,"  a. Check for the presence of a special ",(0,n.yg)("inlineCode",{parentName:"p"},"PLAY_SESSION")," cookie."),(0,n.yg)("p",null,"  b. If cookie was present + valid, redirect to the home page"),(0,n.yg)("p",null,"  c. If cookie was invalid, redirect to either a) the DataHub login screen (for ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.0/authentication/guides/jaas"},"JAAS authentication")," or b) a ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.0/authentication/guides/sso/configure-oidc-react"},"configured OIDC Identity Provider")," to perform authentication."),(0,n.yg)("p",null,"Once authentication had succeeded at the frontend proxy layer, a stateless (token-based) session cookie (PLAY_SESSION) would be set in the users browser.\nAll subsequent requests, including the GraphQL requests issued by the React UI, would be authenticated using this session cookie. Once a request had made it beyond\nthe frontend service layer, it was assumed to have been already authenticated. Hence, there was ",(0,n.yg)("strong",{parentName:"p"},"no native authentication inside of the Metadata Service"),". "),(0,n.yg)("h3",{id:"problems-with-this-approach"},"Problems with this approach"),(0,n.yg)("p",null,"The major challenge with this situation is that requests to the backend Metadata Service were completely unauthenticated. There were 2 options for folks who required authentication at the Metadata Service layer:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Set up a proxy in front of Metadata Service that performed authentication"),(0,n.yg)("li",{parentName:"ol"},"[A more recent possibility]"," Route requests to Metadata Service through DataHub Frontend Proxy, including the PLAY_SESSION\nCookie with every request.\n")),(0,n.yg)("p",null,"Neither of which are ideal. Setting up a proxy to do authentication takes time & expertise. Extracting and setting a session cookie from the browser for programmatic is\nclunky & unscalable. On top of that, extending the authentication system was difficult, requiring implementing a new ",(0,n.yg)("a",{parentName:"p",href:"https://www.playframework.com/documentation/2.8.8/api/java/play/mvc/Security.Authenticator.html"},"Play module")," within DataHub Frontend."),(0,n.yg)("h2",{id:"introducing-authentication-in-datahub-metadata-service"},"Introducing Authentication in DataHub Metadata Service"),(0,n.yg)("p",null,"To address these problems, we introduced configurable Authentication inside the ",(0,n.yg)("strong",{parentName:"p"},"Metadata Service")," itself,\nmeaning that requests are no longer considered trusted until they are authenticated by the Metadata Service."),(0,n.yg)("p",null,"Why push Authentication down? In addition to the problems described above, we wanted to plan for a future\nwhere Authentication of Kafka-based-writes could be performed in the same manner as Rest writes."),(0,n.yg)("h2",{id:"configuring-metadata-service-authentication"},"Configuring Metadata Service Authentication"),(0,n.yg)("p",null,"Metadata Service Authentication is currently ",(0,n.yg)("strong",{parentName:"p"},"opt-in"),". This means that you may continue to use DataHub without Metadata Service Authentication without interruption.\nTo enable Metadata Service Authentication:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"set the ",(0,n.yg)("inlineCode",{parentName:"li"},"METADATA_SERVICE_AUTH_ENABLED"),' environment variable to "true" for the ',(0,n.yg)("inlineCode",{parentName:"li"},"datahub-gms")," AND ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub-frontend")," containers / pods. ")),(0,n.yg)("p",null,"OR"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"change the Metadata Service ",(0,n.yg)("inlineCode",{parentName:"li"},"application.yaml")," configuration file to set ",(0,n.yg)("inlineCode",{parentName:"li"},"authentication.enabled"),' to "true" AND'),(0,n.yg)("li",{parentName:"ul"},"change the Frontend Proxy Service ",(0,n.yg)("inlineCode",{parentName:"li"},"application.config")," configuration file to set ",(0,n.yg)("inlineCode",{parentName:"li"},"metadataService.auth.enabled"),' to "true"')),(0,n.yg)("p",null,"After setting the configuration flag, simply restart the Metadata Service to start enforcing Authentication. "),(0,n.yg)("p",null,"Once enabled, all requests to the Metadata Service will need to be authenticated; if you're using the default Authenticators\nthat ship with DataHub, this means that all requests will need to present an Access Token in the Authorization Header as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Authorization: Bearer <access-token> \n")),(0,n.yg)("p",null,"For users logging into the UI, this process will be handled for you. When logging in, a cookie will be set in your browser that internally\ncontains a valid Access Token for the Metadata Service. When browsing the UI, this token will be extracted and sent to the Metadata Service\nto authenticate each request."),(0,n.yg)("p",null,"For users who want to access the Metadata Service programmatically, i.e. for running ingestion, the current recommendation is to generate\na ",(0,n.yg)("strong",{parentName:"p"},"Personal Access Token"),' (described above) from the root "datahub" user account, and using this token when configuring your ',(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.0/metadata-ingestion#recipes"},"Ingestion Recipes"),'.\nTo configure the token for use in ingestion, simply populate the "token" configuration for the ',(0,n.yg)("inlineCode",{parentName:"p"},"datahub-rest")," sink:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'source:\n  # source configs\nsink:\n  type: "datahub-rest"\n  config:\n    ...\n    token: <your-personal-access-token-here!> \n')),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Note that ingestion occurring via ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-kafka")," sink will continue to be Unauthenticated ",(0,n.yg)("em",{parentName:"p"},"for now"),". Soon, we will be introducing\nsupport for providing an access token in the event payload itself to authenticate ingestion requests over Kafka. ")),(0,n.yg)("h3",{id:"the-role-of-datahub-frontend-proxy-going-forward"},"The Role of DataHub Frontend Proxy Going Forward"),(0,n.yg)("p",null,"With these changes, DataHub Frontend Proxy will continue to play a vital part in the complex dance of Authentication. It will serve as the place\nwhere UI-based session authentication originates and will continue to support 3rd Party SSO configuration (OIDC)\nand JAAS configuration as it does today. "),(0,n.yg)("p",null,"The major improvement is that the Frontend Service will validate credentials provided at UI login time\nand generate a DataHub ",(0,n.yg)("strong",{parentName:"p"},"Access Token"),", embedding it into traditional session cookie (which will continue to work)."),(0,n.yg)("p",null,"In summary, DataHub Frontend Service will continue to play a vital role to Authentication. It's scope, however, will likely\nremain limited to concerns specific to the React UI."),(0,n.yg)("h2",{id:"where-to-go-from-here"},"Where to go from here"),(0,n.yg)("p",null,"These changes represent the first milestone in Metadata Service Authentication. They will serve as a foundation upon which we can build new features, prioritized based on Community demand:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Dynamic Authenticator Plugins"),": Configure + register custom Authenticator implementations, without forking DataHub. "),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Service Accounts"),": Create service accounts and generate Access tokens on their behalf. "),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Kafka Ingestion Authentication"),": Authenticate ingestion requests coming from the Kafka ingestion sink inside the Metadata Service."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Access Token Management"),": Ability to view, manage, and revoke access tokens that have been generated. (Currently, access tokens inlcude no server side state, and thus cannot be revoked once granted)")),(0,n.yg)("p",null,"...and more! To advocate for these features or others, reach out on ",(0,n.yg)("a",{parentName:"p",href:"https://datahubspace.slack.com/join/shared_invite/zt-nx7i0dj7-I3IJYC551vpnvvjIaNRRGw#/shared-invite/email"},"Slack"),". "),(0,n.yg)("h2",{id:"qas"},"Q&As"),(0,n.yg)("h3",{id:"what-if-i-dont-want-to-use-metadata-service-authentication"},"What if I don't want to use Metadata Service Authentication?"),(0,n.yg)("p",null,"That's perfectly fine, for now. Metadata Service Authentication is disabled by default, only enabled if you provide the\nenvironment variable ",(0,n.yg)("inlineCode",{parentName:"p"},"METADATA_SERVICE_AUTH_ENABLED")," to the ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-gms")," container or change the ",(0,n.yg)("inlineCode",{parentName:"p"},"authentication.enabled"),' to "true"\ninside your DataHub Metadata Service configuration (',(0,n.yg)("inlineCode",{parentName:"p"},"application.yaml"),"). "),(0,n.yg)("p",null,"That being said, we will be recommending that you enable Authentication for production use cases, to prevent\narbitrary actors from ingesting metadata into DataHub. "),(0,n.yg)("h3",{id:"if-i-enable-metadata-service-authentication-will-ingestion-stop-working"},"If I enable Metadata Service Authentication, will ingestion stop working?"),(0,n.yg)("p",null,'If you enable Metadata Service Authentication, you will want to provide a value for the "token" configuration value\nwhen using the ',(0,n.yg)("inlineCode",{parentName:"p"},"datahub-rest")," sink in your ",(0,n.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/#recipes"},"Ingestion Recipes"),". See\nthe ",(0,n.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_docs/datahub#config-details"},"Rest Sink Docs")," for configuration details."),(0,n.yg)("p",null,"We'd recommend generating a Personal Access Token (described above) from a trusted DataHub Account (e.g. root 'datahub' user) when configuring\nyour Ingestion sources."),(0,n.yg)("p",null,'Note that you can also provide the "extraHeaders" configuration in ',(0,n.yg)("inlineCode",{parentName:"p"},"datahub-rest")," sink to specify a custom header to\npass with each request. This can be used in conjunction to authenticate using a custom Authenticator, for example. "),(0,n.yg)("h3",{id:"how-do-i-generate-an-access-token-for-a-service-account"},"How do I generate an Access Token for a service account?"),(0,n.yg)("p",null,'There is no formal concept of "service account" or "bot" on DataHub (yet). For now, we recommend you configure any\nprogrammatic clients of DataHub to use a Personal Access Token generated from a user with the correct privileges, for example\nthe root "datahub" user account. '),(0,n.yg)("h3",{id:"i-want-to-authenticate-requests-using-a-custom-authenticator-how-do-i-do-this"},"I want to authenticate requests using a custom Authenticator? How do I do this?"),(0,n.yg)("p",null,"You can configure DataHub to add your custom ",(0,n.yg)("strong",{parentName:"p"},"Authenticator")," to the ",(0,n.yg)("strong",{parentName:"p"},"Authentication Chain")," by changing the ",(0,n.yg)("inlineCode",{parentName:"p"},"application.yaml")," configuration file for the Metadata Service:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},"authentication:\n  enabled: true # Enable Metadata Service Authentication \n  ....\n  authenticators: # Configure an Authenticator Chain \n    - type: <fully-qualified-authenticator-class-name> # E.g. com.linkedin.datahub.authentication.CustomAuthenticator\n      configs: # Specific configs that should be passed into 'init' method of Authenticator\n        customConfig1: <value> \n")),(0,n.yg)("p",null,"Notice that you will need to have a class that implements the ",(0,n.yg)("inlineCode",{parentName:"p"},"Authenticator")," interface with a zero-argument constructor available on the classpath\nof the Metadata Service java process."),(0,n.yg)("p",null,"We love contributions! Feel free to raise a PR to contribute an Authenticator back if it's generally useful. "),(0,n.yg)("h3",{id:"now-that-i-can-make-authenticated-requests-to-either-datahub-proxy-service-and-datahub-metadata-service-which-should-i-use"},"Now that I can make authenticated requests to either DataHub Proxy Service and DataHub Metadata Service, which should I use?"),(0,n.yg)("p",null,"Previously, we were recommending that folks contact the Metadata Service directly when doing things like"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"ingesting Metadata via recipes"),(0,n.yg)("li",{parentName:"ul"},"issuing programmatic requests to the Rest.li APIs "),(0,n.yg)("li",{parentName:"ul"},"issuing programmatic requests to the GraphQL APIs ")),(0,n.yg)("p",null,"With these changes, we will be shifting to the recommendation that folks direct all traffic, whether it's programmatic or not,\nto the ",(0,n.yg)("strong",{parentName:"p"},"DataHub Frontend Proxy"),", as routing to Metadata Service endpoints is currently available at the path ",(0,n.yg)("inlineCode",{parentName:"p"},"/api/gms"),".\nThis recommendation is in effort to minimize the exposed surface area of DataHub to make securing, operating, maintaining, and developing\nthe platform simpler."),(0,n.yg)("p",null,"In practice, this will require migrating Metadata ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.0/metadata-ingestion#recipes"},"Ingestion Recipes")," use the ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-rest")," sink to pointing at a slightly different\nhost + path."),(0,n.yg)("p",null,"Example recipe that proxies through DataHub Frontend "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'source:\n  # source configs\nsink:\n  type: "datahub-rest"\n  config:\n    ...\n    token: <your-personal-access-token-here!> \n')),(0,n.yg)("h2",{id:"feedback--questions--concerns"},"Feedback / Questions / Concerns"),(0,n.yg)("p",null,"We want to hear from you! For any inquiries, including Feedback, Questions, or Concerns, reach out on ",(0,n.yg)("a",{parentName:"p",href:"https://datahubspace.slack.com/join/shared_invite/zt-nx7i0dj7-I3IJYC551vpnvvjIaNRRGw#/shared-invite/email"},"Slack"),"!"))}p.isMDXComponent=!0}}]);