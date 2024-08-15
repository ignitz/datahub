"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3466],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),m=r,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||o;return n?t.createElement(d,i(i({ref:a},p),{},{components:n})):t.createElement(d,i({ref:a},p))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92597:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>g});n(96540);var t=n(15680);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})),e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Configuring Kafka",hide_title:!0,sidebar_label:"Configuring Kafka",slug:"/how/kafka-config",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/kafka-config.md"},s="Configuring Kafka in DataHub",u={unversionedId:"docs/how/kafka-config",id:"version-0.14.0/docs/how/kafka-config",title:"Configuring Kafka",description:"DataHub requires Kafka to operate. Kafka is used as a durable log that can be used to store inbound",source:"@site/versioned_docs/version-0.14.0/docs/how/kafka-config.md",sourceDirName:"docs/how",slug:"/how/kafka-config",permalink:"/docs/0.14.0/how/kafka-config",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/kafka-config.md",tags:[],version:"0.14.0",frontMatter:{title:"Configuring Kafka",hide_title:!0,sidebar_label:"Configuring Kafka",slug:"/how/kafka-config",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/kafka-config.md"}},p={},g=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Connection Configuration",id:"connection-configuration",level:3},{value:"Example: Connecting using AWS IAM (MSK)",id:"example-connecting-using-aws-iam-msk",level:4},{value:"Topic Configuration",id:"topic-configuration",level:3},{value:"Metadata Service (datahub-gms)",id:"metadata-service-datahub-gms",level:3},{value:"MCE Consumer (datahub-mce-consumer)",id:"mce-consumer-datahub-mce-consumer",level:3},{value:"MAE Consumer (datahub-mae-consumer)",id:"mae-consumer-datahub-mae-consumer",level:3},{value:"DataHub Frontend (datahub-frontend-react)",id:"datahub-frontend-datahub-frontend-react",level:3},{value:"Configuring Consumer Group Id",id:"configuring-consumer-group-id",level:2},{value:"datahub-mce-consumer and datahub-mae-consumer",id:"datahub-mce-consumer-and-datahub-mae-consumer",level:3},{value:"datahub-mae-consumer MCL Hooks",id:"datahub-mae-consumer-mcl-hooks",level:4},{value:"Applying Configurations",id:"applying-configurations",level:2},{value:"Docker",id:"docker",level:3},{value:"Helm",id:"helm",level:3},{value:"Other Components that use Kafka can be configured using environment variables:",id:"other-components-that-use-kafka-can-be-configured-using-environment-variables",level:2},{value:"SASL/GSSAPI properties for kafka-setup and datahub-frontend via environment variables",id:"saslgssapi-properties-for-kafka-setup-and-datahub-frontend-via-environment-variables",level:2},{value:"SASL/GSSAPI properties for schema-registry via environment variables",id:"saslgssapi-properties-for-schema-registry-via-environment-variables",level:2},{value:"SSL",id:"ssl",level:2},{value:"Kafka",id:"kafka",level:3},{value:"Schema Registry",id:"schema-registry",level:3}],c={toc:g},m="wrapper";function d(e){var{components:a}=e,n=i(e,["components"]);return(0,t.yg)(m,o(function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(a){r(e,a,n[a])}))}return e}({},c,n),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"configuring-kafka-in-datahub"},"Configuring Kafka in DataHub"),(0,t.yg)("p",null,"DataHub requires Kafka to operate. Kafka is used as a durable log that can be used to store inbound\nrequests to update the Metadata Graph (Metadata Change Proposal), or as a change log detailing the updates\nthat have been made to the Metadata Graph (Metadata Change Log). "),(0,t.yg)("h2",{id:"environment-variables"},"Environment Variables"),(0,t.yg)("p",null,"The following environment variables can be used to customize DataHub's connection to Kafka for the following DataHub components,\neach of which requires a connection to Kafka:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"metadata-service")," (datahub-gms container)"),(0,t.yg)("li",{parentName:"ul"},"(Advanced - if standalone consumers are deployed) ",(0,t.yg)("inlineCode",{parentName:"li"},"mce-consumer-job")," (datahub-mce-consumer container)"),(0,t.yg)("li",{parentName:"ul"},"(Advanced - if standalone consumers are deployed) ",(0,t.yg)("inlineCode",{parentName:"li"},"mae-consumer-job")," (datahub-mae-consumer container)"),(0,t.yg)("li",{parentName:"ul"},"(Advanced - if product analytics are enabled) datahub-frontend")),(0,t.yg)("h3",{id:"connection-configuration"},"Connection Configuration"),(0,t.yg)("p",null,"With the exception of ",(0,t.yg)("inlineCode",{parentName:"p"},"KAFKA_BOOTSTRAP_SERVER")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"KAFKA_SCHEMAREGISTRY_URL"),", Kafka is configured via ",(0,t.yg)("a",{parentName:"p",href:"https://spring.io/projects/spring-boot"},"spring-boot"),", specifically with ",(0,t.yg)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/autoconfigure/kafka/KafkaProperties.html"},"KafkaProperties"),". See ",(0,t.yg)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#integration-properties"},"Integration Properties")," prefixed with ",(0,t.yg)("inlineCode",{parentName:"p"},"spring.kafka"),". "),(0,t.yg)("p",null,"Below is an example of how SASL/GSSAPI properties can be configured via environment variables:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"export KAFKA_BOOTSTRAP_SERVER=broker:29092\nexport KAFKA_SCHEMAREGISTRY_URL=http://schema-registry:8081\nexport SPRING_KAFKA_PROPERTIES_SASL_KERBEROS_SERVICE_NAME=kafka\nexport SPRING_KAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_PLAINTEXT\nexport SPRING_KAFKA_PROPERTIES_SASL_JAAS_CONFIG=com.sun.security.auth.module.Krb5LoginModule required principal='principal@REALM' useKeyTab=true storeKey=true keyTab='/keytab';\n")),(0,t.yg)("h4",{id:"example-connecting-using-aws-iam-msk"},"Example: Connecting using AWS IAM (MSK)"),(0,t.yg)("p",null,"Here is another example of how SASL_SSL can be configured for AWS_MSK_IAM when connecting to MSK using IAM via environment variables"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"SPRING_KAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_SSL\nSPRING_KAFKA_PROPERTIES_SSL_TRUSTSTORE_LOCATION=/tmp/kafka.client.truststore.jks\nSPRING_KAFKA_PROPERTIES_SASL_MECHANISM=AWS_MSK_IAM\nSPRING_KAFKA_PROPERTIES_SASL_JAAS_CONFIG=software.amazon.msk.auth.iam.IAMLoginModule required;\nSPRING_KAFKA_PROPERTIES_SASL_CLIENT_CALLBACK_HANDLER_CLASS=software.amazon.msk.auth.iam.IAMClientCallbackHandler\n")),(0,t.yg)("p",null,"For more information about configuring these variables, check out Spring's ",(0,t.yg)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config"},"Externalized Configuration")," to see how this works.\nAlso see ",(0,t.yg)("a",{parentName:"p",href:"https://docs.confluent.io/current/connect/security.html"},"Kafka Connect Security")," for more ways to connect."),(0,t.yg)("h3",{id:"topic-configuration"},"Topic Configuration"),(0,t.yg)("p",null,"By default, DataHub relies on the a set of Kafka topics to operate. By default, they have the following names:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"MetadataChangeProposal_v1")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"FailedMetadataChangeProposal_v1")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"MetadataChangeLog_Versioned_v1")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"MetadataChangeLog_Timeseries_v1")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"DataHubUsageEvent_v1"),": User behavior tracking event for UI"),(0,t.yg)("li",{parentName:"ol"},"(Deprecated) ",(0,t.yg)("strong",{parentName:"li"},"MetadataChangeEvent_v4"),": Metadata change proposal messages"),(0,t.yg)("li",{parentName:"ol"},"(Deprecated) ",(0,t.yg)("strong",{parentName:"li"},"MetadataAuditEvent_v4"),": Metadata change log messages"),(0,t.yg)("li",{parentName:"ol"},"(Deprecated) ",(0,t.yg)("strong",{parentName:"li"},"FailedMetadataChangeEvent_v4"),": Failed to process #1 event"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"MetadataGraphEvent_v4"),":"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"MetadataGraphEvent_v4"),":"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"PlatformEvent_v1"),":"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"DataHubUpgradeHistory_v1"),": Notifies the end of DataHub Upgrade job so dependants can act accordingly (",(0,t.yg)("em",{parentName:"li"},"eg"),", startup).\nNote this topic requires special configuration: ",(0,t.yg)("strong",{parentName:"li"},"Infinite retention"),". Also, 1 partition is enough for the occasional traffic.")),(0,t.yg)("p",null,"How Metadata Events relate to these topics is discussed at more length in ",(0,t.yg)("a",{parentName:"p",href:"/docs/0.14.0/what/mxe"},"Metadata Events"),"."),(0,t.yg)("p",null,"We've included environment variables to customize the name each of these topics, for cases where an organization has naming rules for your topics."),(0,t.yg)("h3",{id:"metadata-service-datahub-gms"},"Metadata Service (datahub-gms)"),(0,t.yg)("p",null,"The following are environment variables you can use to configure topic names used in the Metadata Service container:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_CHANGE_PROPOSAL_TOPIC_NAME"),": The name of the topic for Metadata Change Proposals emitted by the ingestion framework."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_PROPOSAL_TOPIC_NAME"),": The name of the topic for Metadata Change Proposals emitted when MCPs fail processing."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_VERSIONED_TOPIC_NAME"),": The name of the topic for Metadata Change Logs that are produced for Versioned Aspects."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_TIMESERIES_TOPIC_NAME"),": The name of the topic for Metadata Change Logs that are produced for Timeseries Aspects."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PLATFORM_EVENT_TOPIC_NAME"),": The name of the topic for Platform Events (high-level semantic events)."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATAHUB_USAGE_EVENT_NAME"),": The name of the topic for product analytics events. "),(0,t.yg)("li",{parentName:"ul"},"(Deprecated) ",(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_CHANGE_EVENT_NAME"),": The name of the metadata change event topic."),(0,t.yg)("li",{parentName:"ul"},"(Deprecated) ",(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_AUDIT_EVENT_NAME"),": The name of the metadata audit event topic."),(0,t.yg)("li",{parentName:"ul"},"(Deprecated) ",(0,t.yg)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_EVENT_NAME"),": The name of the failed metadata change event topic.")),(0,t.yg)("h3",{id:"mce-consumer-datahub-mce-consumer"},"MCE Consumer (datahub-mce-consumer)"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_CHANGE_PROPOSAL_TOPIC_NAME"),": The name of the topic for Metadata Change Proposals emitted by the ingestion framework."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_PROPOSAL_TOPIC_NAME"),": The name of the topic for Metadata Change Proposals emitted when MCPs fail processing."),(0,t.yg)("li",{parentName:"ul"},"(Deprecated) ",(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_CHANGE_EVENT_NAME"),": The name of the deprecated topic that an embedded MCE consumer will consume from."),(0,t.yg)("li",{parentName:"ul"},"(Deprecated) ",(0,t.yg)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_EVENT_NAME"),": The name of the deprecated topic that failed MCEs will be written to.")),(0,t.yg)("h3",{id:"mae-consumer-datahub-mae-consumer"},"MAE Consumer (datahub-mae-consumer)"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_VERSIONED_TOPIC_NAME"),": The name of the topic for Metadata Change Logs that are produced for Versioned Aspects."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_TIMESERIES_TOPIC_NAME"),": The name of the topic for Metadata Change Logs that are produced for Timeseries Aspects."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PLATFORM_EVENT_TOPIC_NAME"),": The name of the topic for Platform Events (high-level semantic events)."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATAHUB_USAGE_EVENT_NAME"),": The name of the topic for product analytics events."),(0,t.yg)("li",{parentName:"ul"},"(Deprecated) ",(0,t.yg)("inlineCode",{parentName:"li"},"METADATA_AUDIT_EVENT_NAME"),": The name of the deprecated metadata audit event topic.")),(0,t.yg)("h3",{id:"datahub-frontend-datahub-frontend-react"},"DataHub Frontend (datahub-frontend-react)"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATAHUB_TRACKING_TOPIC"),": The name of the topic used for storing DataHub usage events.\nIt should contain the same value as ",(0,t.yg)("inlineCode",{parentName:"li"},"DATAHUB_USAGE_EVENT_NAME")," in the Metadata Service container. ")),(0,t.yg)("p",null,"Please ensure that these environment variables are set consistently throughout your ecosystem. DataHub has a few different applications running which communicate with Kafka (see above)."),(0,t.yg)("h2",{id:"configuring-consumer-group-id"},"Configuring Consumer Group Id"),(0,t.yg)("p",null,"Kafka Consumers in Spring are configured using Kafka listeners. By default, consumer group id is same as listener id."),(0,t.yg)("p",null,"We've included an environment variable to customize the consumer group id, if your company or organization has specific naming rules."),(0,t.yg)("h3",{id:"datahub-mce-consumer-and-datahub-mae-consumer"},"datahub-mce-consumer and datahub-mae-consumer"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"KAFKA_CONSUMER_GROUP_ID"),": The name of the kafka consumer's group id.")),(0,t.yg)("h4",{id:"datahub-mae-consumer-mcl-hooks"},"datahub-mae-consumer MCL Hooks"),(0,t.yg)("p",null,"By default, all MetadataChangeLog processing hooks execute as part of the same kafka consumer group based on the\npreviously mentioned ",(0,t.yg)("inlineCode",{parentName:"p"},"KAFKA_CONSUMER_GROUP_ID"),"."),(0,t.yg)("p",null,"The various MCL Hooks could alsp be separated into separate groups which allows for controlling parallelization and\nprioritization of the hooks."),(0,t.yg)("p",null,"For example, the ",(0,t.yg)("inlineCode",{parentName:"p"},"UpdateIndicesHook")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"SiblingsHook")," processing can be delayed by other hooks. Separating these\nhooks into their own group can reduce latency from these other hooks. The ",(0,t.yg)("inlineCode",{parentName:"p"},"application.yaml")," configuration\nincludes options for assigning a suffix to the consumer group, see ",(0,t.yg)("inlineCode",{parentName:"p"},"consumerGroupSuffix"),"."),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Environment Variable"),(0,t.yg)("th",{parentName:"tr",align:null},"Default"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"SIBLINGS_HOOK_CONSUMER_GROUP_SUFFIX"),(0,t.yg)("td",{parentName:"tr",align:null},"''"),(0,t.yg)("td",{parentName:"tr",align:null},"Siblings processing hook. Considered one of the primary hooks in the ",(0,t.yg)("inlineCode",{parentName:"td"},"datahub-mae-consumer"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"UPDATE_INDICES_CONSUMER_GROUP_SUFFIX"),(0,t.yg)("td",{parentName:"tr",align:null},"''"),(0,t.yg)("td",{parentName:"tr",align:null},"Primary processing hook.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"INGESTION_SCHEDULER_HOOK_CONSUMER_GROUP_SUFFIX"),(0,t.yg)("td",{parentName:"tr",align:null},"''"),(0,t.yg)("td",{parentName:"tr",align:null},"Scheduled ingestion hook.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"INCIDENTS_HOOK_CONSUMER_GROUP_SUFFIX"),(0,t.yg)("td",{parentName:"tr",align:null},"''"),(0,t.yg)("td",{parentName:"tr",align:null},"Incidents hook.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"ECE_CONSUMER_GROUP_SUFFIX"),(0,t.yg)("td",{parentName:"tr",align:null},"''"),(0,t.yg)("td",{parentName:"tr",align:null},"Entity Change Event hook which publishes to the Platform Events topic.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"FORMS_HOOK_CONSUMER_GROUP_SUFFIX"),(0,t.yg)("td",{parentName:"tr",align:null},"''"),(0,t.yg)("td",{parentName:"tr",align:null},"Forms processing.")))),(0,t.yg)("h2",{id:"applying-configurations"},"Applying Configurations"),(0,t.yg)("h3",{id:"docker"},"Docker"),(0,t.yg)("p",null,"Simply add the above environment variables to the required ",(0,t.yg)("inlineCode",{parentName:"p"},"docker.env")," files for the containers. These can\nbe found inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"docker")," folder of the repository."),(0,t.yg)("h3",{id:"helm"},"Helm"),(0,t.yg)("p",null,"On Helm, you'll need to configure these environment variables using the ",(0,t.yg)("inlineCode",{parentName:"p"},"extraEnvs")," sections of the specific container's\nconfigurations inside your ",(0,t.yg)("inlineCode",{parentName:"p"},"values.yaml")," file. "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'datahub-gms: \n    ...\n    extraEnvs:\n      - name: METADATA_CHANGE_PROPOSAL_TOPIC_NAME\n        value: "CustomMetadataChangeProposal_v1"\n      - name: METADATA_CHANGE_LOG_VERSIONED_TOPIC_NAME\n        value: "CustomMetadataChangeLogVersioned_v1"\n      - name: FAILED_METADATA_CHANGE_PROPOSAL_TOPIC_NAME\n        value: "CustomFailedMetadataChangeProposal_v1"\n      - name: KAFKA_CONSUMER_GROUP_ID\n        value: "my-apps-mae-consumer"\n        ....\n        \ndatahub-frontend:\n    ...\n    extraEnvs:\n        - name: DATAHUB_TRACKING_TOPIC\n          value: "MyCustomTrackingEvent"\n      \n# If standalone consumers are enabled\ndatahub-mae-consumer; \n    extraEnvs:\n        - name: METADATA_CHANGE_LOG_VERSIONED_TOPIC_NAME\n          value: "CustomMetadataChangeLogVersioned_v1"\n          ....\n        - name: METADATA_AUDIT_EVENT_NAME\n          value: "MetadataAuditEvent"\ndatahub-mce-consumer; \n    extraEnvs:\n        - name: METADATA_CHANGE_PROPOSAL_TOPIC_NAME\n          value: "CustomMetadataChangeLogVersioned_v1"\n          ....\n        - name: METADATA_CHANGE_EVENT_NAME\n          value: "MetadataChangeEvent"\n        ....\n')),(0,t.yg)("h2",{id:"other-components-that-use-kafka-can-be-configured-using-environment-variables"},"Other Components that use Kafka can be configured using environment variables:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"kafka-setup"),(0,t.yg)("li",{parentName:"ul"},"schema-registry")),(0,t.yg)("h2",{id:"saslgssapi-properties-for-kafka-setup-and-datahub-frontend-via-environment-variables"},"SASL/GSSAPI properties for kafka-setup and datahub-frontend via environment variables"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"KAFKA_BOOTSTRAP_SERVER=broker:29092\nKAFKA_SCHEMAREGISTRY_URL=http://schema-registry:8081\nKAFKA_PROPERTIES_SASL_KERBEROS_SERVICE_NAME=kafka\nKAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_PLAINTEXT\nKAFKA_PROPERTIES_SASL_JAAS_CONFIG=com.sun.security.auth.module.Krb5LoginModule required principal='principal@REALM' useKeyTab=true storeKey=true keyTab='/keytab';\n")),(0,t.yg)("h2",{id:"saslgssapi-properties-for-schema-registry-via-environment-variables"},"SASL/GSSAPI properties for schema-registry via environment variables"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"SCHEMA_REGISTRY_KAFKASTORE_BOOTSTRAP_SERVERS=broker:29092\nSCHEMA_REGISTRY_KAFKASTORE_SASL_KERBEROS_SERVICE_NAME=kafka\nSCHEMA_REGISTRY_KAFKASTORE_SECURITY_PROTOCOL=SASL_PLAINTEXT\nSCHEMA_REGISTRY_KAFKASTORE_SASL_JAAS_CONFIG=com.sun.security.auth.module.Krb5LoginModule required principal='principal@REALM' useKeyTab=true storeKey=true keyTab='/keytab';\n")),(0,t.yg)("h2",{id:"ssl"},"SSL"),(0,t.yg)("h3",{id:"kafka"},"Kafka"),(0,t.yg)("p",null,"We are using the Spring Boot framework to start our apps, including setting up Kafka. You can\n",(0,t.yg)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config-relaxed-binding-from-environment-variables"},"use environment variables to set system properties"),",\nincluding ",(0,t.yg)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#integration-properties"},"Kafka properties"),".\nFrom there you can set your SSL configuration for Kafka."),(0,t.yg)("h3",{id:"schema-registry"},"Schema Registry"),(0,t.yg)("p",null,"If Schema Registry is configured to use security (SSL), then you also need to set additional values."),(0,t.yg)("p",null,"The ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mce-consumer-job"},"MCE")," and ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job"},"MAE")," consumers can set\ndefault Spring Kafka environment values, for example:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SECURITY_PROTOCOL")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_KEYSTORE_LOCATION")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_KEYSTORE_PASSWORD")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_TRUSTSTORE_LOCATION")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_TRUSTSTORE_PASSWORD"))),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/0.14.0/what/gms"},"GMS")," can set the following environment variables that will be passed as properties when creating the Schema Registry\nClient. "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SECURITY_PROTOCOL")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_KEYSTORE_LOCATION")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_KEYSTORE_PASSWORD")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_TRUSTSTORE_LOCATION")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_TRUSTSTORE_PASSWORD"))),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Note")," In the logs you might see something like\n",(0,t.yg)("inlineCode",{parentName:"p"},"The configuration 'kafkastore.ssl.truststore.password' was supplied but isn't a known config.")," The configuration is\nnot a configuration required for the producer. These WARN message can be safely ignored. Each of Datahub services are\npassed a full set of configuration but may not require all the configurations that are passed to them. These warn\nmessages indicate that the service was passed a configuration that is not relevant to it and can be safely ignored.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Other errors: ",(0,t.yg)("inlineCode",{parentName:"p"},"Failed to start bean 'org.springframework.kafka.config.internalKafkaListenerEndpointRegistry'; nested exception is org.apache.kafka.common.errors.TopicAuthorizationException: Not authorized to access topics: [DataHubUsageEvent_v1]"),". Please check ranger permissions or kafka broker logs.")))}d.isMDXComponent=!0}}]);