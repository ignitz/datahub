"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[13120],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,g=p["".concat(i,".").concat(f)]||p[f]||h[f]||s;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});r(96540);var n=r(15680);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Load testing with Locust",slug:"/perf-test",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/perf-test/README.md"},i="Load testing with Locust",u={unversionedId:"perf-test/README",id:"version-0.14.0/perf-test/README",title:"Load testing with Locust",description:"Locust is an open-source, python-based, easy-to-use load testing tool. It provides an interface to",source:"@site/versioned_docs/version-0.14.0/perf-test/README.md",sourceDirName:"perf-test",slug:"/perf-test",permalink:"/docs/0.14.0/perf-test",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/perf-test/README.md",tags:[],version:"0.14.0",frontMatter:{title:"Load testing with Locust",slug:"/perf-test",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/perf-test/README.md"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Locustfiles",id:"locustfiles",level:2},{value:"Load testing",id:"load-testing",level:2},{value:"Web interface",id:"web-interface",level:3},{value:"Command Line",id:"command-line",level:3},{value:"Reference",id:"reference",level:2}],h={toc:p},f="wrapper";function g(e){var{components:t}=e,r=a(e,["components"]);return(0,n.yg)(f,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"load-testing-with-locust"},"Load testing with Locust"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://locust.io/"},"Locust")," is an open-source, python-based, easy-to-use load testing tool. It provides an interface to\nspawn multiple users (swarm) that behave according to pre-defined python code."),(0,n.yg)("p",null,"In this directory, we provide some example locust configs that send common requests to DataHub GMS (ingest, search,\nbrowse, and graph)."),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"To run the example configs, you need to first install locust by running"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip3 install locust\n")),(0,n.yg)("p",null,"Note that it supports python versions 3.6 and up. Refer to\nthis ",(0,n.yg)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/installation.html"},"guide")," for more details."),(0,n.yg)("p",null,"You will also need to import requirements in order to run the Locustfile scripts:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip3 install -r requirements.txt\n")),(0,n.yg)("h2",{id:"locustfiles"},"Locustfiles"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/perf-test/locustfiles"},"Locustfiles")," define how the users will behave once they are spawned. Refer to\nthis ",(0,n.yg)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/writing-a-locustfile.html"},"doc")," on how to write one."),(0,n.yg)("p",null,"Here, we have defined 4 common requests"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Ingest: ingests a dataset with a random URN with properties, browse paths, and ownership aspects filled out"),(0,n.yg)("li",{parentName:"ul"},'Search: searches datasets with query "test"'),(0,n.yg)("li",{parentName:"ul"},'Browse: browses datasets with path "/perf/test"'),(0,n.yg)("li",{parentName:"ul"},'Graph: gets datasets owned by user "common"')),(0,n.yg)("p",null,"We will continue adding more as more use cases arise, but feel free to play around with the default behavior to create a\nload test that matches your request pattern."),(0,n.yg)("h2",{id:"load-testing"},"Load testing"),(0,n.yg)("p",null,"There are two ways to run locust. One is through the web interface, and the other is on the command line."),(0,n.yg)("h3",{id:"web-interface"},"Web interface"),(0,n.yg)("p",null,"To run through the web interface, you can run the following"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"locust -f <<path-to-locustfile>>\n")),(0,n.yg)("p",null,"For instance, to run ingest load testing, run the following from root of repo."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"locust -f perf-test/locustfiles/ingest.py\n")),(0,n.yg)("p",null,"This will set up the web interface in http://localhost:8089 (unless the port is already taken). Once you click into it,\nyou should see the following"),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/locust-example.png"})),(0,n.yg)("p",null,'Input the number of users you would like to spawn and the spawn rate. Point the host to the deployed DataHub GMS (\nlocally, it should be http://localhost:8080). Click on the "Start swarming" button to start the load test.'),(0,n.yg)("p",null,"The web interface should give you statistics on number of requests, latency, response rate, etc."),(0,n.yg)("h3",{id:"command-line"},"Command Line"),(0,n.yg)("p",null,"To run on the command line, run the following"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"locust -f <<path-to-locustfile>> --headless -H <<host>> -u <<num-users>> -r <<spawn-rate>>\n")),(0,n.yg)("p",null,"For instance, to replicate the setting in the previous section, run the following"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"locust -f perf-test/locustfiles/ingest.py --headless -H http://localhost:8080 -u 100 -r 100\n")),(0,n.yg)("p",null,"It should start the load test and print out statistics on the command line."),(0,n.yg)("h2",{id:"reference"},"Reference"),(0,n.yg)("p",null,"For more details on how to run locust and various configs, refer to\nthis ",(0,n.yg)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/configuration.html"},"doc")),(0,n.yg)("p",null,"To customize the user behavior by modifying the locustfiles, refer to\nthis ",(0,n.yg)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/writing-a-locustfile.html"},"doc")))}g.isMDXComponent=!0}}]);