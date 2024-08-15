"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81655],{85485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>p});n(96540);var a=n(15680),o=n(53720),r=n(5400);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const d={sidebar_position:14,title:"Demo Data",slug:"/generated/ingestion/sources/demo-data",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/demo-data.md"},c="Demo Data",u={unversionedId:"docs/generated/ingestion/sources/demo-data",id:"version-0.14.0/docs/generated/ingestion/sources/demo-data",title:"Demo Data",description:"This source loads sample data into DataHub. It is intended for demo and testing purposes only.",source:"@site/versioned_docs/version-0.14.0/docs/generated/ingestion/sources/demo-data.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/demo-data",permalink:"/docs/0.14.0/generated/ingestion/sources/demo-data",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/demo-data.md",tags:[],version:"0.14.0",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Demo Data",slug:"/generated/ingestion/sources/demo-data",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/demo-data.md"}},g={},p=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:p},b="wrapper";function y(e){var{components:t}=e,n=l(e,["components"]);return(0,a.yg)(b,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"demo-data"},"Demo Data"),(0,a.yg)("p",null,"This source loads sample data into DataHub. It is intended for demo and testing purposes only."),(0,a.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,a.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"demo-data")," source works out of the box with ",(0,a.yg)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,a.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,a.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,a.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,a.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.0/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: demo-data\n  config: {}\n\n")),(0,a.yg)("h3",{id:"config-details"},"Config Details"),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,a.yg)("p",null,"Note that a ",(0,a.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,a.yg)("div",{className:"config-table"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description")))))),(0,a.yg)(r.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "DemoDataConfig",\n  "type": "object",\n  "properties": {},\n  "additionalProperties": false\n}\n')))),(0,a.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Class Name: ",(0,a.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.demo_data.DemoDataSource")),(0,a.yg)("li",{parentName:"ul"},"Browse on ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/demo_data.py"},"GitHub"))),(0,a.yg)("h2",null,"Questions"),(0,a.yg)("p",null,"If you've got any questions on configuring ingestion for Demo Data, feel free to ping us on ",(0,a.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}y.isMDXComponent=!0}}]);