"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[54633],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,g=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},41082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});r(96540);var a=r(15680);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/snowflake/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/setup.md"},l="Snowflake Ingestion Guide: Setup & Prerequisites",u={unversionedId:"docs/quick-ingestion-guides/snowflake/setup",id:"version-0.14.0/docs/quick-ingestion-guides/snowflake/setup",title:"Setup",description:"In order to configure ingestion from Snowflake, you'll first have to ensure you have a Snowflake user with the ACCOUNTADMIN role or MANAGE GRANTS privilege.",source:"@site/versioned_docs/version-0.14.0/docs/quick-ingestion-guides/snowflake/setup.md",sourceDirName:"docs/quick-ingestion-guides/snowflake",slug:"/quick-ingestion-guides/snowflake/setup",permalink:"/docs/0.14.0/quick-ingestion-guides/snowflake/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/setup.md",tags:[],version:"0.14.0",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/snowflake/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/setup.md"}},c={},d=[{value:"Snowflake Prerequisites",id:"snowflake-prerequisites",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},b="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,a.yg)(b,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"snowflake-ingestion-guide-setup--prerequisites"},"Snowflake Ingestion Guide: Setup & Prerequisites"),(0,a.yg)("p",null,"In order to configure ingestion from Snowflake, you'll first have to ensure you have a Snowflake user with the ",(0,a.yg)("inlineCode",{parentName:"p"},"ACCOUNTADMIN")," role or ",(0,a.yg)("inlineCode",{parentName:"p"},"MANAGE GRANTS")," privilege."),(0,a.yg)("h2",{id:"snowflake-prerequisites"},"Snowflake Prerequisites"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a DataHub-specific role by executing the following queries in Snowflake. Replace ",(0,a.yg)("inlineCode",{parentName:"p"},"<your-warehouse>")," with an existing warehouse that you wish to use for DataHub ingestion."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'create or replace role datahub_role;\n-- Grant access to a warehouse to run queries to view metadata\ngrant operate, usage on warehouse "<your-warehouse>" to role datahub_role;\n')),(0,a.yg)("p",{parentName:"li"},"Make note of this role and warehouse. You'll need this in the next step.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a DataHub-specific user by executing the following queries. Replace ",(0,a.yg)("inlineCode",{parentName:"p"},"<your-password>")," with a strong password. Replace ",(0,a.yg)("inlineCode",{parentName:"p"},"<your-warehouse>")," with the same warehouse used above."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"create user datahub_user display_name = 'DataHub' password='<your-password>' default_role = datahub_role default_warehouse = '<your-warehouse>';\n-- Grant access to the DataHub role created above\ngrant role datahub_role to user datahub_user;\n")),(0,a.yg)("p",{parentName:"li"},"Make note of the user and its password. You'll need this in the next step.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Assign privileges to read metadata about your assets by executing the following queries. Replace ",(0,a.yg)("inlineCode",{parentName:"p"},"<your-database>")," with an existing database. Repeat for all databases from your Snowflake instance that you wish to integrate with DataHub."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set db_var = '\"<your-database>\"';\n-- Grant access to view database and schema in which your tables/views exist\ngrant usage on DATABASE identifier($db_var) to role datahub_role;\ngrant usage on all schemas in database identifier($db_var) to role datahub_role;\ngrant usage on future schemas in database identifier($db_var) to role datahub_role;\n\n-- Grant Select acccess enable Data Profiling\ngrant select on all tables in database identifier($db_var) to role datahub_role;\ngrant select on future tables in database identifier($db_var) to role datahub_role;\ngrant select on all external tables in database identifier($db_var) to role datahub_role;\ngrant select on future external tables in database identifier($db_var) to role datahub_role;\ngrant select on all views in database identifier($db_var) to role datahub_role;\ngrant select on future views in database identifier($db_var) to role datahub_role;\n\n--  Grant access to view tables and views\ngrant references on all tables in database identifier($db_var) to role datahub_role;\ngrant references on future tables in database identifier($db_var) to role datahub_role;\ngrant references on all external tables in database identifier($db_var) to role datahub_role;\ngrant references on future external tables in database identifier($db_var) to role datahub_role;\ngrant references on all views in database identifier($db_var) to role datahub_role;\ngrant references on future views in database identifier($db_var) to role datahub_role;\n\n-- Assign privileges to extract lineage and usage statistics from Snowflake by executing the below query.\ngrant imported privileges on database snowflake to role datahub_role;\n\n")),(0,a.yg)("p",{parentName:"li"},"If you have imported databases in your Snowflake instance that you wish to integrate with DataHub, you'll need to use the below query for them."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'grant IMPORTED PRIVILEGES on database "<your-database>" to role datahub_role;  \n')))),(0,a.yg)("h2",{id:"next-steps"},"Next Steps"),(0,a.yg)("p",null,"Once you've done all of the above in Snowflake, it's time to ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.0/quick-ingestion-guides/snowflake/configuration"},"move on")," to configuring the actual ingestion source within DataHub."))}g.isMDXComponent=!0}}]);