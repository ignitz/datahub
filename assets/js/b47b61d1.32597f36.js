"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4208],{15680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return a?r.createElement(g,i(i({ref:t},h),{},{components:a})):r.createElement(g,i({ref:t},h))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={title:"datahub-graphql-core",sidebar_label:"datahub-graphql-core",slug:"/datahub-graphql-core",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/README.md"},s="DataHub GraphQL Core",p={unversionedId:"datahub-graphql-core/README",id:"version-0.14.0/datahub-graphql-core/README",title:"datahub-graphql-core",description:"DataHub GraphQL API is a shared lib module containing a GraphQL API on top of the GMS service layer. It exposes a graph-based representation",source:"@site/versioned_docs/version-0.14.0/datahub-graphql-core/README.md",sourceDirName:"datahub-graphql-core",slug:"/datahub-graphql-core",permalink:"/docs/0.14.0/datahub-graphql-core",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/README.md",tags:[],version:"0.14.0",frontMatter:{title:"datahub-graphql-core",sidebar_label:"datahub-graphql-core",slug:"/datahub-graphql-core",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/README.md"}},h={},d=[{value:"Extending the Graph",id:"extending-the-graph",level:2},{value:"Adding an Entity",id:"adding-an-entity",level:3},{value:"Enabling Search for a new Entity",id:"enabling-search-for-a-new-entity",level:4}],u={toc:d},c="wrapper";function g(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(c,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"datahub-graphql-core"},"DataHub GraphQL Core"),(0,r.yg)("p",null,"DataHub GraphQL API is a shared lib module containing a GraphQL API on top of the GMS service layer. It exposes a graph-based representation\npermitting reads and writes against the entities and aspects on the Metadata Graph, including Datasets, CorpUsers, & more. "),(0,r.yg)("p",null,"Contained within this module are "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"GMS Schema"),": A GQL schema based on GMS models, located under ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/tree/master/datahub-graphql-core/src/main/resources"},"resources")," folder."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"GMS Data Fetchers")," (Resolvers): Components used by the GraphQL engine to resolve individual fields in the GQL schema."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"GMS Data Loaders"),": Components used by the GraphQL engine to fetch data from downstream sources efficiently (by batching). "),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"GraphQLEngine"),": A wrapper on top of the default ",(0,r.yg)("inlineCode",{parentName:"li"},"GraphQL")," object provided by ",(0,r.yg)("inlineCode",{parentName:"li"},"graphql-java"),". Provides a way to configure all of the important stuff using a simple ",(0,r.yg)("inlineCode",{parentName:"li"},"Builder API"),". "),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"GMSGraphQLEngine"),": An engine capable of resolving the GMS schema using the data fetchers + loaders mentioned above (with no additional configuration required). ")),(0,r.yg)("p",null,'We\'ve chosen to place these components in a library module so that GraphQL servers can be deployed in multiple "modes":'),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Standalone"),": GraphQL facade, mainly used for programmatic access to the GMS graph from a non-Java environment"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Embedded"),": Leverageable within another Java server to surface an extended GraphQL schema. For example, we use this to extend the GMS GraphQL schema in ",(0,r.yg)("inlineCode",{parentName:"li"},"datahub-frontend")," ")),(0,r.yg)("h2",{id:"extending-the-graph"},"Extending the Graph"),(0,r.yg)("h3",{id:"adding-an-entity"},"Adding an Entity"),(0,r.yg)("p",null,"When adding an entity to the GMS graph, the following steps should be followed:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Extend ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/resources/entity.graphql"},"entity.graphql")," schema with new ",(0,r.yg)("inlineCode",{parentName:"li"},"types")," (Queries) or ",(0,r.yg)("inlineCode",{parentName:"li"},"inputs")," (Mutations) required for fetching & updating your Entity.")),(0,r.yg)("p",null,"These models should generally mirror the GMS models exactly, with notable exceptions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Maps"),": the GQL model must instead contain a list of { key, value } objects (e.g. Dataset.pdl 'properties' field)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Foreign-Keys"),": Foreign-key references embedded in GMS models should be resolved if the referenced entity exists in the GQL schema,\nreplacing the key with the actual entity model. (Example: replacing the 'owner' urn field in 'Ownership' with an actual ",(0,r.yg)("inlineCode",{parentName:"li"},"CorpUser")," type)")),(0,r.yg)("p",null,"In GraphQL, the new Entity should extend the ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," interface. Additionally, you will need to add a new symbol to the standard\n",(0,r.yg)("inlineCode",{parentName:"p"},"EntityType")," enum. "),(0,r.yg)("p",null,'The convention we follow is to have a top-level Query for each entity that takes a single "urn" parameter. This is for primary key lookups.\nSee all the existing entity Query types ',(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/resources/entity.graphql#L19"},"here"),"."),(0,r.yg)("p",null,"On rebuilding the module (",(0,r.yg)("inlineCode",{parentName:"p"},"./gradlew datahub-graphql-core:build"),") you'll find newly generated classes corresponding to\nthe types you've defined inside the GraphQL schema inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"mainGeneratedGraphQL")," folder. These classes will be used in the next step."),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Implement ",(0,r.yg)("inlineCode",{parentName:"li"},"EntityType")," classes for any new entities ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These 'type' classes define how to load entities from GMS, and map them to the GraphQL data model. See ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/types/dataset/DatasetType.java"},"DatasetType.java")," as an example.")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Implement ",(0,r.yg)("inlineCode",{parentName:"li"},"Mappers")," to transform Pegasus model returned by GMS to an auto-generated GQL POJO. (under ",(0,r.yg)("inlineCode",{parentName:"li"},"/mainGeneratedGraphQL"),", generated on ",(0,r.yg)("inlineCode",{parentName:"li"},"./gradlew datahub-graphql-core:build"),") These mappers\nwill be used inside the type class defined in step 2. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If you've followed the guidance above, these mappers should be simple, mainly\nproviding identity mappings for fields that exist in both the GQL + Pegasus POJOs."),(0,r.yg)("li",{parentName:"ul"},"In some cases, you'll need to perform small lambdas (unions, maps) to materialize the GQL object. ")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Wire up your ",(0,r.yg)("inlineCode",{parentName:"li"},"EntityType")," to the GraphQL schema. ")),(0,r.yg)("p",null,"We use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/GmsGraphQLEngine.java"},"GmsGraphQLEngine.java"),' to\nconfigure the wiring for the GraphQL schema. This means associating "resolvers" to specific fields present in the GraphQL schema file.'),(0,r.yg)("p",null,"Inside of this file, you need to register your new ",(0,r.yg)("inlineCode",{parentName:"p"},"Type")," object to be used in resolving primary-key entity queries.\nTo do so, simply follow the examples for other entities. "),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Implement ",(0,r.yg)("inlineCode",{parentName:"p"},"EntityType")," test for the new type defined in Step 2. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/test/java/com/linkedin/datahub/graphql/types/container/ContainerTypeTest.java"},"ContainerTypeTest")," as an example.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Implement ",(0,r.yg)("inlineCode",{parentName:"p"},"Resolver")," tests for any new ",(0,r.yg)("inlineCode",{parentName:"p"},"DataFetchers")," that you needed to add. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/test/java/com/linkedin/datahub/graphql/resolvers/domain/SetDomainResolverTest.java"},"SetDomainResolverTest")," as an example.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"[Optional]"," Sometimes, your new entity will have relationships to other entities, or fields that require specific business logic\nas opposed to basic mapping from the GMS model. In such cases, we tend to create an entity-specific configuration method in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/GmsGraphQLEngine.java"},"GmsGraphQLEngine.java"),"\nwhich allows you to wire custom resolvers (DataFetchers) to the fields in your Entity type. You also may need to do this, depending\non the complexity of the new entity. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/GmsGraphQLEngine.java#L438"},"here")," for reference. "))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'Note: If you want your new Entity to be "browsable" (folder navigation) via the UI, make sure you implement the ',(0,r.yg)("inlineCode",{parentName:"p"},"BrowsableEntityType")," interface.")),(0,r.yg)("h4",{id:"enabling-search-for-a-new-entity"},"Enabling Search for a new Entity"),(0,r.yg)("p",null,"In order to enable searching an Entity, you'll need to modify the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/resolvers/search/SearchAcrossEntitiesResolver.java"},"SearchAcrossEntities.java")," resolver, which enables unified search\nacross all DataHub entities. "),(0,r.yg)("p",null,"Steps: "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Add your new Entity type to ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/resolvers/search/SearchAcrossEntitiesResolver.java#L32"},"this list"),"."),(0,r.yg)("li",{parentName:"ol"},"Add a new statement to ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/types/common/mappers/UrnToEntityMapper.java#L35"},"UrnToEntityMapper.java"),'. This maps\nan URN to a "placeholder" GraphQL entity which is subsequently resolved by the GraphQL engine.')),(0,r.yg)("p",null,"That should be it! "),(0,r.yg)("p",null,"Now, you can try to issue a search for the new entities you've ingested"))}g.isMDXComponent=!0}}]);