"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[15882],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=u(n),c=i,h=g["".concat(s,".").concat(c)]||g[c]||p[c]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>g});n(96540);var a=n(15680);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"Stateful Ingestion",slug:"/metadata-ingestion/docs/dev_guides/stateful",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/stateful.md"},s="Stateful Ingestion",u={unversionedId:"metadata-ingestion/docs/dev_guides/stateful",id:"version-0.14.0/metadata-ingestion/docs/dev_guides/stateful",title:"Stateful Ingestion",description:"The stateful ingestion feature enables sources to be configured to save custom checkpoint states from their",source:"@site/versioned_docs/version-0.14.0/metadata-ingestion/docs/dev_guides/stateful.md",sourceDirName:"metadata-ingestion/docs/dev_guides",slug:"/metadata-ingestion/docs/dev_guides/stateful",permalink:"/docs/0.14.0/metadata-ingestion/docs/dev_guides/stateful",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/stateful.md",tags:[],version:"0.14.0",frontMatter:{title:"Stateful Ingestion",slug:"/metadata-ingestion/docs/dev_guides/stateful",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/stateful.md"}},d={},g=[{value:"Config details",id:"config-details",level:2},{value:"Use-cases powered by stateful ingestion.",id:"use-cases-powered-by-stateful-ingestion",level:2},{value:"Stale Entity Removal",id:"stale-entity-removal",level:3},{value:"Supported sources",id:"supported-sources",level:4},{value:"Additional config details",id:"additional-config-details",level:4},{value:"Sample configuration",id:"sample-configuration",level:4},{value:"Redundant Run Elimination",id:"redundant-run-elimination",level:3},{value:"Supported sources",id:"supported-sources-1",level:4},{value:"Additional config details",id:"additional-config-details-1",level:4},{value:"Sample Configuration",id:"sample-configuration-1",level:4},{value:"Adding Stateful Ingestion Capability to New Sources (Developer Guide)",id:"adding-stateful-ingestion-capability-to-new-sources-developer-guide",level:2},{value:"The Checkpointing Ingestion State Provider (Developer Guide)",id:"the-checkpointing-ingestion-state-provider-developer-guide",level:2},{value:"Datahub Checkpointing Ingestion State Provider",id:"datahub-checkpointing-ingestion-state-provider",level:3},{value:"Config details",id:"config-details-1",level:4}],p={toc:g},c="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(c,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"stateful-ingestion"},"Stateful Ingestion"),(0,a.yg)("p",null,"The stateful ingestion feature enables sources to be configured to save custom checkpoint states from their\nruns, and query these states back from subsequent runs to make decisions about the current run based on the state saved\nfrom the previous run(s) using a supported ingestion state provider. This is an explicit opt-in feature and is not enabled\nby default."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"NOTE")),": This feature requires the server to be ",(0,a.yg)("inlineCode",{parentName:"p"},"statefulIngestion")," capable. This is a feature of metadata service with version >= ",(0,a.yg)("inlineCode",{parentName:"p"},"0.8.20"),"."),(0,a.yg)("p",null,"To check if you are running a stateful ingestion capable server:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},'curl http://<datahub-gms-endpoint>/config\n\n{\nmodels: { },\nstatefulIngestionCapable: true, # <-- this should be present and true\nretention: "true",\nnoCode: "true"\n}\n')),(0,a.yg)("h2",{id:"config-details"},"Config details"),(0,a.yg)("p",null,"Note that a ",(0,a.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Field"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.enabled")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"False"),(0,a.yg)("td",{parentName:"tr",align:null},"The type of the ingestion state provider registered with datahub.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.ignore_old_state")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"False"),(0,a.yg)("td",{parentName:"tr",align:null},"If set to True, ignores the previous checkpoint state.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.ignore_new_state")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"False"),(0,a.yg)("td",{parentName:"tr",align:null},"If set to True, ignores the current checkpoint state.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.max_checkpoint_state_size")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"2^24 (16MB)"),(0,a.yg)("td",{parentName:"tr",align:null},"The maximum size of the checkpoint state in bytes.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.state_provider")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The default datahub ingestion state provider configuration."),(0,a.yg)("td",{parentName:"tr",align:null},"The ingestion state provider configuration.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"pipeline_name")),(0,a.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The name of the ingestion pipeline the checkpoint states of various source connector job runs are saved/retrieved against via the ingestion state provider.")))),(0,a.yg)("p",null,"NOTE: If either ",(0,a.yg)("inlineCode",{parentName:"p"},"dry-run")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"preview")," mode are set, stateful ingestion will be turned off regardless of the rest of the configuration."),(0,a.yg)("h2",{id:"use-cases-powered-by-stateful-ingestion"},"Use-cases powered by stateful ingestion."),(0,a.yg)("p",null,"Following is the list of current use-cases powered by stateful ingestion in datahub."),(0,a.yg)("h3",{id:"stale-entity-removal"},"Stale Entity Removal"),(0,a.yg)("p",null,"Stateful ingestion can be used to automatically soft-delete the tables and views that are seen in a previous run\nbut absent in the current run (they are either deleted or no longer desired)."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/stale_metadata_deletion.png"})),(0,a.yg)("h4",{id:"supported-sources"},"Supported sources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"All sql based sources.")),(0,a.yg)("h4",{id:"additional-config-details"},"Additional config details"),(0,a.yg)("p",null,"Note that a ",(0,a.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Field"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"stateful_ingestion.remove_stale_metadata")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"True"),(0,a.yg)("td",{parentName:"tr",align:null},"Soft-deletes the tables and views that were found in the last successful run but missing in the current run with stateful_ingestion enabled.")))),(0,a.yg)("h4",{id:"sample-configuration"},"Sample configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "snowflake"\n  config:\n    username: <user_name>\n    password: <password>\n    host_port: <host_port>\n    warehouse: <ware_house>\n    role: <role>\n    include_tables: True\n    include_views: True\n    # Rest of the source specific params ...\n    ## Stateful Ingestion config ##\n    stateful_ingestion:\n        enabled: True # False by default\n        remove_stale_metadata: True # default value\n        ## Default state_provider configuration ##\n        # state_provider:\n            # type: "datahub" # default value\n            # This section is needed if the pipeline-level `datahub_api` is not configured.\n            # config:  # default value\n            #    datahub_api:\n            #        server: "http://localhost:8080"\n\n# The pipeline_name is mandatory for stateful ingestion and the state is tied to this.\n# If this is changed after using with stateful ingestion, the previous state will not be available to the next run.\npipeline_name: "my_snowflake_pipeline_1"\n\n# Pipeline-level datahub_api configuration.\ndatahub_api: # Optional. But if provided, this config will be used by the "datahub" ingestion state provider.\n    server: "http://localhost:8080"\n\nsink:\n  type: "datahub-rest"\n  config:\n    server: \'http://localhost:8080\'\n')),(0,a.yg)("h3",{id:"redundant-run-elimination"},"Redundant Run Elimination"),(0,a.yg)("p",null,"Typically, the usage runs are configured to fetch the usage data for the previous day(or hour) for each run. Once a usage\nrun has finished, subsequent runs until the following day would be fetching the same usage data. With stateful ingestion,\nthe redundant fetches can be avoided even if the ingestion job is scheduled to run more frequently than the granularity of\nusage ingestion."),(0,a.yg)("h4",{id:"supported-sources-1"},"Supported sources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Snowflake Usage source.")),(0,a.yg)("h4",{id:"additional-config-details-1"},"Additional config details"),(0,a.yg)("p",null,"Note that a ",(0,a.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Field"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"stateful_ingestion.force_rerun")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"False"),(0,a.yg)("td",{parentName:"tr",align:null},"Custom-alias for ",(0,a.yg)("inlineCode",{parentName:"td"},"stateful_ingestion.ignore_old_state"),". Prevents a rerun for the same time window if there was a previous successful run.")))),(0,a.yg)("h4",{id:"sample-configuration-1"},"Sample Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "snowflake-usage-legacy"\n  config:\n    username: <user_name>\n    password: <password>\n    role: <role>\n    host_port: <host_port>\n    warehouse: <ware_house>\n    # Rest of the source specific params ...\n    ## Stateful Ingestion config ##\n    stateful_ingestion:\n        enabled: True # default is false\n        force_rerun: False # Specific to this source(alias for ignore_old_state), used to override default behavior if True.\n\n# The pipeline_name is mandatory for stateful ingestion and the state is tied to this.\n# If this is changed after using with stateful ingestion, the previous state will not be available to the next run.\npipeline_name: "my_snowflake_usage_ingestion_pipeline_1"\nsink:\n  type: "datahub-rest"\n  config:\n    server: \'http://localhost:8080\'\n')),(0,a.yg)("h2",{id:"adding-stateful-ingestion-capability-to-new-sources-developer-guide"},"Adding Stateful Ingestion Capability to New Sources (Developer Guide)"),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.0/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source"},"this documentation")," for more details on how to add stateful ingestion\ncapability to new sources for the use-cases supported by datahub."),(0,a.yg)("h2",{id:"the-checkpointing-ingestion-state-provider-developer-guide"},"The Checkpointing Ingestion State Provider (Developer Guide)"),(0,a.yg)("p",null,"The ingestion checkpointing state provider is responsible for saving and retrieving the ingestion checkpoint state associated with the ingestion runs\nof various jobs inside the source connector of the ingestion pipeline. The checkpointing data model is ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/datajob/datahub/DatahubIngestionCheckpoint.pdl"},"DatahubIngestionCheckpoint")," and it supports any custom state to be stored using the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/datajob/datahub/IngestionCheckpointState.pdl#L9"},"IngestionCheckpointState"),". A checkpointing ingestion state provider needs to implement the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/api/ingestion_job_checkpointing_provider_base.py"},"IngestionCheckpointingProviderBase")," interface and\nregister itself with datahub by adding an entry under ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub.ingestion.checkpointing_provider.plugins")," key of the entry_points section in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/setup.py"},"setup.py")," with its type and implementation class as shown below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'entry_points = {\n    # <snip other keys>"\n    "datahub.ingestion.checkpointing_provider.plugins": [\n        "datahub = datahub.ingestion.source.state_provider.datahub_ingestion_checkpointing_provider:DatahubIngestionCheckpointingProvider",\n    ],\n}\n')),(0,a.yg)("h3",{id:"datahub-checkpointing-ingestion-state-provider"},"Datahub Checkpointing Ingestion State Provider"),(0,a.yg)("p",null,"This is the state provider implementation that is available out of the box. Its type is ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub")," and it is implemented on top\nof the ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub_api")," client and the timeseries aspect capabilities of the datahub-backend."),(0,a.yg)("h4",{id:"config-details-1"},"Config details"),(0,a.yg)("p",null,"Note that a ",(0,a.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Field"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"state_provider.type")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"datahub")),(0,a.yg)("td",{parentName:"tr",align:null},"The type of the ingestion state provider registered with datahub")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"state_provider.config")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The ",(0,a.yg)("inlineCode",{parentName:"td"},"datahub_api")," config if set at pipeline level. Otherwise, the default ",(0,a.yg)("inlineCode",{parentName:"td"},"DatahubClientConfig"),". See the ",(0,a.yg)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19"},"defaults")," here."),(0,a.yg)("td",{parentName:"tr",align:null},"The configuration required for initializing the state provider.")))))}h.isMDXComponent=!0}}]);