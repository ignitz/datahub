"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18304],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>p});a(96540);var n=a(15680);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const r={title:"A Custom Metadata Model",slug:"/metadata-models-custom",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/README.md"},s="A Custom Metadata Model",d={unversionedId:"metadata-models-custom/README",id:"version-0.14.0/metadata-models-custom/README",title:"A Custom Metadata Model",description:"This module hosts a gradle project where you can store your custom metadata model. It contains an example extension for you to follow.",source:"@site/versioned_docs/version-0.14.0/metadata-models-custom/README.md",sourceDirName:"metadata-models-custom",slug:"/metadata-models-custom",permalink:"/docs/0.14.0/metadata-models-custom",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/README.md",tags:[],version:"0.14.0",frontMatter:{title:"A Custom Metadata Model",slug:"/metadata-models-custom",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/README.md"}},u={},p=[{value:"Caveats",id:"caveats",level:3},{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Create your new aspect(s)",id:"create-your-new-aspects",level:2},{value:"Add your aspect(s) to the entity registry",id:"add-your-aspects-to-the-entity-registry",level:2},{value:"Understanding the entity registry",id:"understanding-the-entity-registry",level:2},{value:"Build your new model",id:"build-your-new-model",level:2},{value:"Build a versioned artifact",id:"build-a-versioned-artifact",level:3},{value:"Deploy your versioned artifact to DataHub",id:"deploy-your-versioned-artifact-to-datahub",level:3},{value:"Deploying to a remote Kubernetes server",id:"deploying-to-a-remote-kubernetes-server",level:4},{value:"Check if your model got loaded successfully",id:"check-if-your-model-got-loaded-successfully",level:3},{value:"Add some metadata with your new model",id:"add-some-metadata-with-your-new-model",level:3},{value:"Advanced Guide",id:"advanced-guide",level:2},{value:"Deleting metadata associated with a model",id:"deleting-metadata-associated-with-a-model",level:3},{value:"Evolve the metadata model",id:"evolve-the-metadata-model",level:3},{value:"Custom Plugins",id:"custom-plugins",level:3},{value:"Custom Validators",id:"custom-validators",level:4},{value:"Custom Mutator",id:"custom-mutator",level:4},{value:"MetadataChangeProposal (MCP) Side Effects",id:"metadatachangeproposal-mcp-side-effects",level:4},{value:"MetadataChangeLog (MCL) Side Effects",id:"metadatachangelog-mcl-side-effects",level:4},{value:"Spring Support",id:"spring-support",level:4},{value:"The Future",id:"the-future",level:2}],c={toc:p},m="wrapper";function g(e){var{components:t}=e,a=l(e,["components"]);return(0,n.yg)(m,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"a-custom-metadata-model"},"A Custom Metadata Model"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/"},"This module")," hosts a gradle project where you can store your custom metadata model. It contains an example extension for you to follow."),(0,n.yg)("h3",{id:"caveats"},"Caveats"),(0,n.yg)("p",null,"Currently, this project only supports aspects defined in PDL to existing or newly defined entities. You cannot add new aspects to the metadata model directly through yaml configuration yet."),(0,n.yg)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,n.yg)("p",null,"Before proceeding further, make sure you understand the DataHub Metadata Model concepts defined ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.0/metadata-modeling/metadata-model"},"here")," and extending the model defined ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.0/metadata-modeling/extending-the-metadata-model"},"here"),". "),(0,n.yg)("h2",{id:"create-your-new-aspects"},"Create your new aspect(s)"),(0,n.yg)("p",null,"Follow the regular process in creating a new aspect by adding it to the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/src/main/pegasus"},(0,n.yg)("inlineCode",{parentName:"a"},"src/main/pegasus"))," folder. e.g. This repository has an Aspect called ",(0,n.yg)("inlineCode",{parentName:"p"},"customDataQualityRules")," hosted in the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/src/main/pegasus/com/mycompany/dq/DataQualityRules.pdl"},(0,n.yg)("inlineCode",{parentName:"a"},"DataQualityRules.pdl"))," file that you can follow.\nOnce you've gone through this exercise, feel free to delete the sample aspects that are stored in this module."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Tip")),": PDL requires that the name of the file must match the name of the class that is defined in it and the package path must also match the directory path, so keep that in mind when you create your aspect pdl file."),(0,n.yg)("h2",{id:"add-your-aspects-to-the-entity-registry"},"Add your aspect(s) to the entity registry"),(0,n.yg)("p",null,"Add your new aspect(s) to the entity registry by editing the yaml file located under ",(0,n.yg)("inlineCode",{parentName:"p"},"registry/entity-registry.yaml"),".\n",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Note")),": The registry file must be called ",(0,n.yg)("inlineCode",{parentName:"p"},"entity-registry.yaml")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"entity-registry.yml")," for it to be recognized."),(0,n.yg)("h2",{id:"understanding-the-entity-registry"},"Understanding the entity registry"),(0,n.yg)("p",null,"Here is a sample entity-registry file"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"id: mycompany-dq-model\nentities:\n  - name: dataset\n    aspects:\n      - customDataQualityRules\n")),(0,n.yg)("p",null,"The entity registry has a few important fields to pay attention to: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"id: The name of your registry. This drives naming, artifact generation, so make sure you pick a unique name that will not conflict with other names you might create for other registries. "),(0,n.yg)("li",{parentName:"ul"},"entities: A list of entities with aspects attached to them that you are creating additional aspects for as well as any new entities you wish to define. In this example, we are adding the aspect ",(0,n.yg)("inlineCode",{parentName:"li"},"customDataQualityRules")," to the ",(0,n.yg)("inlineCode",{parentName:"li"},"dataset")," entity. ")),(0,n.yg)("h2",{id:"build-your-new-model"},"Build your new model"),(0,n.yg)("p",null,"Change your directory to the metadata-models-custom folder and then run this command"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"../gradlew build\n")),(0,n.yg)("p",null,"This will create a zip file in the build/dist folder. Then change your directory back to the main datahub folder and run "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"./gradlew :metadata-models-custom:modelDeploy\n")),(0,n.yg)("p",null,"This will install the zip file as a datahub plugin. It is installed at ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.datahub/plugins/models/")," and if you list the directory you should see the following path if you are following the customDataQualityRules implementation example: ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.datahub/plugins/models/mycompany-dq-model/0.0.0-dev/")),(0,n.yg)("h3",{id:"build-a-versioned-artifact"},"Build a versioned artifact"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"../gradlew -PprojVersion=0.0.1 build\n")),(0,n.yg)("p",null,"This will deposit an artifact called ",(0,n.yg)("inlineCode",{parentName:"p"},"metadata-models-custom-<version>.zip")," under the ",(0,n.yg)("inlineCode",{parentName:"p"},"build/dist")," directory. "),(0,n.yg)("h3",{id:"deploy-your-versioned-artifact-to-datahub"},"Deploy your versioned artifact to DataHub"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"../gradlew -PprojVersion=0.0.1 install\n")),(0,n.yg)("p",null,"This will unpack the artifact and deposit it under ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.datahub/plugins/models/<registry-name>/<registry-version>/"),"."),(0,n.yg)("h4",{id:"deploying-to-a-remote-kubernetes-server"},"Deploying to a remote Kubernetes server"),(0,n.yg)("p",null,"Deploying your customized jar to a remote Kubernetes server requires that you take the output zip\n(generated from ",(0,n.yg)("inlineCode",{parentName:"p"},"../gradlew modelArtifact")," under ",(0,n.yg)("inlineCode",{parentName:"p"},"build/dist"),") and place the unzipped contents in the volumes mount for the GMS pod on the remote server.\nFirst you will need to push the files into a configmap using kubectl:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"kubectl create configmap custom-model --from-file=<<path-to-file>> -n <<namespace>>\n")),(0,n.yg)("p",null,"Then you need to set the volumes for GMS (refer to how jmx exporter configmap is added here:\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/subcharts/datahub-gms/templates/deployment.yaml#L40"},"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/subcharts/datahub-gms/templates/deployment.yaml#L40"),")\nThis tells GMS that we will be pulling this configmap in. You can do this by setting ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-gms.extraVolumes")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"values.yaml"),"\nwhich gets appended to the deployment without having to change the helm chart."),(0,n.yg)("p",null,"Finally you need to mount the volume into the container\u2019s local directory by setting volumeMounts.\nRefer to how the kafka certs are mounted onto a local path here:\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/subcharts/datahub-gms/templates/deployment.yaml#L182"},"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/subcharts/datahub-gms/templates/deployment.yaml#L182"),"\nYou can do this by setting the datahub-gms.extraVolumeMounts in ",(0,n.yg)("inlineCode",{parentName:"p"},"values.yaml")),(0,n.yg)("p",null,"at the end your values.yaml should have something like:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"datahub-gms:\n  ...\n  extraVolumes:\n    - name: custom-model\n      configMap:\n        name: custom-model ## should match configmap name above\n  extraVolumeMounts:\n    - name: custom-model-dir\n      mountPath: /etc/plugins/models/<registry-name>/<registry-version>\n")),(0,n.yg)("p",null,"The mountPath can be configured using ",(0,n.yg)("inlineCode",{parentName:"p"},"ENTITY_REGISTRY_PLUGIN_PATH")," and defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"/etc/datahub/plugins/models"),"."),(0,n.yg)("h3",{id:"check-if-your-model-got-loaded-successfully"},"Check if your model got loaded successfully"),(0,n.yg)("p",null,"Assuming that you are running DataHub on localhost, you can curl the config endpoint to see the model load status. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"curl -s http://localhost:8080/config | jq .\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'{\n  "models": {\n    "mycompany-dq-model": {\n      "0.0.1": {\n        "loadResult": "SUCCESS",\n        "registryLocation": "/Users/username/.datahub/plugins/models/mycompany-dq-model/0.0.1",\n        "failureCount": 0\n      }\n    }\n  },\n  "noCode": "true"\n}\n')),(0,n.yg)("p",null,"Alternatively, you could type in http://localhost:8080/config in your browser."),(0,n.yg)("h3",{id:"add-some-metadata-with-your-new-model"},"Add some metadata with your new model"),(0,n.yg)("p",null,"We have included some sample scripts that you can modify to upload data corresponding to your new data model.\nThe ",(0,n.yg)("inlineCode",{parentName:"p"},"scripts/insert_one.sh")," script takes the ",(0,n.yg)("inlineCode",{parentName:"p"},"scripts/data/dq_rule.json")," file and attaches it to the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataset_urn")," entity using the ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub")," cli. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-console"},"cd scripts\n./insert_one.sh\n")),(0,n.yg)("p",null,"results in "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-console"},"Update succeeded with status 200\n")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"scripts/insert_custom_aspect.py")," script shows you how to accomplish the same using the Python SDK. Note that we are just using a raw dictionary here to represent the ",(0,n.yg)("inlineCode",{parentName:"p"},"dq_rule")," aspect and not a strongly-typed class."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-console"},"cd scripts\npython3 insert_custom_aspect.py\n")),(0,n.yg)("p",null,"results in"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-console"},"Successfully wrote to DataHub\n")),(0,n.yg)("h2",{id:"advanced-guide"},"Advanced Guide"),(0,n.yg)("p",null,"A few things that you will likely do as you start creating new models and creating metadata that conforms to those models. "),(0,n.yg)("h3",{id:"deleting-metadata-associated-with-a-model"},"Deleting metadata associated with a model"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub")," cli supports deleting metadata associated with a model as a customization of the ",(0,n.yg)("inlineCode",{parentName:"p"},"delete")," command. "),(0,n.yg)("p",null,"e.g. ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub delete by-registry --registry-id=mycompany-dq-model:0.0.1 --hard")," will delete all data written using this registry name and version pair. "),(0,n.yg)("h3",{id:"evolve-the-metadata-model"},"Evolve the metadata model"),(0,n.yg)("p",null,"As you evolve the metadata model, you can publish new versions of the repository and deploy it into DataHub as well using the same steps outlined above. DataHub will check whether your new models are backwards compatible with the previous versioned model and decline loading models that are backwards incompatible. "),(0,n.yg)("h3",{id:"custom-plugins"},"Custom Plugins"),(0,n.yg)("p",null,"Adding custom aspects to DataHub's existing data model is a powerful way to extend DataHub without forking the entire repo. Often extending\njust the data model is not enough and additional custom code might be required. For a few of these use cases a plugin framework was developed\nto control how instances of custom aspects can be validated, mutated, and generate side effects (additional aspects)."),(0,n.yg)("p",null,"It should be noted that validation, mutation, and generation of the ",(0,n.yg)("em",{parentName:"p"},"core")," DataHub aspects can lead to system corruption and should be used\nby advanced users only."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"/config")," endpoint documented above has been extended to return information on the instances of the various plugins as well as the classes\nthat were loaded for debugging purposes."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "mycompany-dq-model": {\n    "0.0.0-dev": {\n      "plugins": {\n        "validatorCount": 1,\n        "mutationHookCount": 1,\n        "mcpSideEffectCount": 1,\n        "mclSideEffectCount": 1,\n        "validatorClasses": [\n          "com.linkedin.metadata.aspect.plugins.validation.CustomDataQualityRulesValidator"\n        ],\n        "mutationHookClasses": [\n          "com.linkedin.metadata.aspect.plugins.hooks.CustomDataQualityRulesMutator"\n        ],\n        "mcpSideEffectClasses": [\n          "com.linkedin.metadata.aspect.plugins.hooks.CustomDataQualityRulesMCPSideEffect"\n        ],\n        "mclSideEffectClasses": [\n          "com.linkedin.metadata.aspect.plugins.hooks.CustomDataQualityRulesMCLSideEffect"\n        ]\n      }\n    }\n  }\n}\n')),(0,n.yg)("h4",{id:"custom-validators"},"Custom Validators"),(0,n.yg)("p",null,"Custom aspects might require that instances of those aspects adhere to specific conditions or rules. These conditions could vary wildly depending on the use case however they could be as simple\nas a null or range check for one or more fields within the custom aspect. Additionally, a lookup can be done on other aspects in order to validate the current aspect using the ",(0,n.yg)("inlineCode",{parentName:"p"},"AspectRetriever"),"."),(0,n.yg)("p",null,"There are two integration points for validation. The first integration point is ",(0,n.yg)("inlineCode",{parentName:"p"},"on request")," via the ",(0,n.yg)("inlineCode",{parentName:"p"},"validateProposedAspect")," method where the aspect is validated independent of the previous value. This validation is performed\noutside of a database transaction and can perform more intensive checks without introducing added latency within a transaction. Note that added latency from the validation check is still introduced into the request itself."),(0,n.yg)("p",null,"The second integration point for validation occurs within the database transaction using the ",(0,n.yg)("inlineCode",{parentName:"p"},"validatePreCommitAspect")," and has access to the new aspect as well as the old aspect. See the included\nexample in ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/src/main/java/com/linkedin/metadata/aspect/plugins/validation/CustomDataQualityRulesValidator.java"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomDataQualityRulesValidator.java")),"."),(0,n.yg)("p",null,"Shown below is the interface to be implemented for a custom validator."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"public class CustomDataQualityRulesValidator extends AspectPayloadValidator {\n    @Override\n    protected Stream<AspectValidationException> validateProposedAspects(\n            @Nonnull Collection<? extends BatchItem> mcpItems, @Nonnull AspectRetriever aspectRetriever) {\n    }\n\n    @Override\n    protected Stream<AspectValidationException> validatePreCommitAspects(\n            @Nonnull Collection<ChangeMCP> changeMCPs, AspectRetriever aspectRetriever) {\n    }\n}\n")),(0,n.yg)("p",null,"In order to register this custom validator add the following to your ",(0,n.yg)("inlineCode",{parentName:"p"},"entity-registry.yml")," file. This will activate\nthe validator to run on upsert operations for any entity with the custom aspect ",(0,n.yg)("inlineCode",{parentName:"p"},"customDataQualityRules"),". Alternatively separate\nvalidators could be written within the context of specific entities, in this case simply specify the entity name instead of ",(0,n.yg)("inlineCode",{parentName:"p"},"*"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"\nplugins:\n  aspectPayloadValidators:\n    - className: 'com.linkedin.metadata.aspect.plugins.validation.CustomDataQualityRulesValidator'\n      enabled: true\n      supportedOperations:\n        - UPSERT\n      supportedEntityAspectNames:\n        - entityName: '*'\n          aspectName: customDataQualityRules\n")),(0,n.yg)("h4",{id:"custom-mutator"},"Custom Mutator"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Warning: This hook is for advanced users only. It is possible to corrupt data and render your system inoperable.")),(0,n.yg)("p",null,"Mutation hooks have two possible mutation points. The first is the ",(0,n.yg)("inlineCode",{parentName:"p"},"write")," mutation which can change the data\nbeing written to persistent storage. The second mutation hook is a ",(0,n.yg)("inlineCode",{parentName:"p"},"read")," hook which can modify the data when\nread from persistent storage."),(0,n.yg)("p",null,"Write Mutation:"),(0,n.yg)("p",null,"In this example, we want to make sure that the field type is always lowercase regardless of the string being provided\nby ingestion. The full example can be found in ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/src/main/java/com/linkedin/metadata/aspect/plugins/hooks/CustomDataQualityRulesMutator.java"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomDataQualityMutator.java")),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"public class CustomDataQualityRulesMutator extends MutationHook {\n    @Override\n    protected Stream<Pair<ChangeMCP, Boolean>> writeMutation(\n            @Nonnull Collection<ChangeMCP> changeMCPS, @Nonnull AspectRetriever aspectRetriever) {\n        return changeMCPS.stream()\n                .map(\n                        changeMCP -> {\n                            boolean mutated = false;\n\n                            if (changeMCP.getRecordTemplate() != null) {\n                                DataQualityRules newDataQualityRules =\n                                        new DataQualityRules(changeMCP.getRecordTemplate().data());\n\n                                for (DataQualityRule rule : newDataQualityRules.getRules()) {\n                                    // Ensure uniform lowercase\n                                    if (!rule.getType().toLowerCase().equals(rule.getType())) {\n                                        mutated = true;\n                                        rule.setType(rule.getType().toLowerCase());\n                                    }\n                                }\n                            }\n\n                            return mutated ? changeMCP : null;\n                        })\n                .filter(Objects::nonNull)\n                .map(changeMCP -> Pair.of(changeMCP, true));\n    }\n}\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  mutationHooks:\n    - className: 'com.linkedin.metadata.aspect.plugins.hooks.CustomDataQualityRulesMutator'\n      enabled: true\n      supportedOperations:\n        - UPSERT\n      supportedEntityAspectNames:\n        - entityName: '*'\n          aspectName: customDataQualityRules\n")),(0,n.yg)("p",null,"Read Mutation:"),(0,n.yg)("p",null,"A read mutator would implement the following interface and the following example is a read mutation which hides soft\ndeleted structured properties from being returned on entities. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"public class StructuredPropertiesSoftDelete extends MutationHook {\n    @Override\n    protected Stream<Pair<ReadItem, Boolean>> readMutation(\n            @Nonnull Collection<ReadItem> items, @Nonnull AspectRetriever aspectRetriever) {\n        Map<Urn, StructuredProperties> entityStructuredPropertiesMap =\n                items.stream()\n                        .filter(i -> i.getRecordTemplate() != null)\n                        .map(i -> Pair.of(i.getUrn(), i.getAspect(StructuredProperties.class)))\n                        .collect(Collectors.toMap(Pair::getKey, Pair::getValue));\n\n        // Apply filter\n        Map<Urn, Boolean> mutatedEntityStructuredPropertiesMap =\n                StructuredPropertyUtils.filterSoftDelete(entityStructuredPropertiesMap, aspectRetriever);\n\n        return items.stream()\n                .map(i -> Pair.of(i, mutatedEntityStructuredPropertiesMap.getOrDefault(i.getUrn(), false)));\n    }\n}\n")),(0,n.yg)("p",null,"Note that the ",(0,n.yg)("inlineCode",{parentName:"p"},"supportedOperations")," is left empty since those operation types only include change types like ",(0,n.yg)("inlineCode",{parentName:"p"},"UPSERT")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"DELETE")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  mutationHooks:\n    - className: 'com.linkedin.metadata.aspect.plugins.hooks.CustomDataQualityRulesMutator'\n      enabled: true\n      supportedEntityAspectNames:\n        - entityName: '*'\n          aspectName: customDataQualityRules\n")),(0,n.yg)("h4",{id:"metadatachangeproposal-mcp-side-effects"},"MetadataChangeProposal (MCP) Side Effects"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Warning: This hook is for advanced users only. It is possible to corrupt data and render your system inoperable.")),(0,n.yg)("p",null,"MCP Side Effects allow for the creation of new aspects based on an input aspect."),(0,n.yg)("p",null,"Notes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"MCPs will write aspects to the primary data store (SQL for example) as well as the search indices."),(0,n.yg)("li",{parentName:"ul"},"Side effects in general must include a dependency on the ",(0,n.yg)("inlineCode",{parentName:"li"},"metadata-io")," module since it deals with lower level storage primitives.")),(0,n.yg)("p",null,"The full example can be found in ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/src/main/java/com/linkedin/metadata/aspect/plugins/hooks/CustomDataQualityRulesMCPSideEffect.java"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomDataQualityRulesMCPSideEffect.java")),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'public class CustomDataQualityRulesMCPSideEffect extends MCPSideEffect {\n    @Override\n    protected Stream<ChangeMCP> applyMCPSideEffect(\n            Collection<ChangeMCP> changeMCPS, @Nonnull AspectRetriever aspectRetriever) {\n        // Mirror aspects to another URN in SQL & Search\n        return changeMCPS.stream()\n                .map(\n                        changeMCP -> {\n                            Urn mirror =\n                                    UrnUtils.getUrn(changeMCP.getUrn().toString().replace(",PROD)", ",DEV)"));\n                            return ChangeItemImpl.builder()\n                                    .urn(mirror)\n                                    .aspectName(changeMCP.getAspectName())\n                                    .recordTemplate(changeMCP.getRecordTemplate())\n                                    .auditStamp(changeMCP.getAuditStamp())\n                                    .systemMetadata(changeMCP.getSystemMetadata())\n                                    .build(aspectRetriever);\n                        });\n    }\n}\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  mcpSideEffects:\n    - className: 'com.linkedin.metadata.aspect.plugins.hooks.CustomDataQualityRulesMCPSideEffect'\n      enabled: true\n      supportedOperations:\n        - UPSERT\n      supportedEntityAspectNames:\n        - entityName: '*'\n          aspectName: customDataQualityRules\n")),(0,n.yg)("h4",{id:"metadatachangelog-mcl-side-effects"},"MetadataChangeLog (MCL) Side Effects"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Warning: This hook is for advanced users only. It is possible to corrupt data and render your system inoperable.")),(0,n.yg)("p",null,"MCL Side Effects allow for the creation of new aspects based on an input aspect. In this example, we are generating a timeseries aspect to represent an event. When a DataQualityRule is created\nor modified we'll record the actor, event type, and timestamp in a timeseries aspect index."),(0,n.yg)("p",null,"Notes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"MCLs are only persisted to the search indices which allows for adding to the search documents only."),(0,n.yg)("li",{parentName:"ul"},"Dependency on the ",(0,n.yg)("inlineCode",{parentName:"li"},"metadata-io")," module since it deals with lower level storage primitives.")),(0,n.yg)("p",null,"The full example can be found in ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/src/main/java/com/linkedin/metadata/aspect/plugins/hooks/CustomDataQualityRulesMCLSideEffect.java"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomDataQualityRulesMCLSideEffect.java")),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'public class CustomDataQualityRulesMCLSideEffect extends MCLSideEffect {\n    @Override\n    protected Stream<MCLItem> applyMCLSideEffect(\n            @Nonnull Collection<MCLItem> mclItems, @Nonnull AspectRetriever aspectRetriever) {\n        return mclItems.stream()\n                .map(\n                        item -> {\n                            // Generate Timeseries event aspect based on non-Timeseries aspect\n                            MetadataChangeLog originMCP = item.getMetadataChangeLog();\n\n                            return buildEvent(originMCP)\n                                    .map(\n                                            event -> {\n                                                try {\n                                                    MetadataChangeLog eventMCP = originMCP.clone();\n                                                    eventMCP.setAspect(GenericRecordUtils.serializeAspect(event));\n                                                    eventMCP.setAspectName("customDataQualityRuleEvent");\n                                                    return eventMCP;\n                                                } catch (CloneNotSupportedException e) {\n                                                    throw new RuntimeException(e);\n                                                }\n                                            })\n                                    .map(\n                                            eventMCP ->\n                                                    MCLItemImpl.builder().metadataChangeLog(eventMCP).build(aspectRetriever));\n                        })\n                .filter(Optional::isPresent)\n                .map(Optional::get);\n    }\n\n    private Optional<DataQualityRuleEvent> buildEvent(MetadataChangeLog originMCP) {\n        if (originMCP.getAspect() != null) {\n            DataQualityRuleEvent event = new DataQualityRuleEvent();\n            if (event.getActor() != null) {\n                event.setActor(event.getActor());\n            }\n            event.setEventTimestamp(originMCP.getSystemMetadata().getLastObserved());\n            event.setTimestampMillis(originMCP.getSystemMetadata().getLastObserved());\n            if (originMCP.getPreviousAspectValue() == null) {\n                event.setEventType("RuleCreated");\n            } else {\n                event.setEventType("RuleUpdated");\n            }\n            event.setAffectedDataset(originMCP.getEntityUrn());\n\n            return Optional.of(event);\n        }\n        return Optional.empty();\n    }\n}\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  mclSideEffects:\n    - className: 'com.linkedin.metadata.aspect.plugins.hooks.CustomDataQualityRulesMCLSideEffect'\n      enabled: true\n      supportedOperations:\n        - UPSERT\n      supportedEntityAspectNames:\n        - entityName: 'dataset'\n          aspectName: customDataQualityRules\n")),(0,n.yg)("h4",{id:"spring-support"},"Spring Support"),(0,n.yg)("p",null,"Validators, mutators, and side-effects can also utilize Spring to inject dependencies and autoconfigure them. While Spring is\nnot required, it is possible to use Spring to both inject autoconfiguration and the plugins themselves. An example Spring-enabled\nvalidator has been included in the package ",(0,n.yg)("inlineCode",{parentName:"p"},"com.linkedin.metadata.aspect.plugins.spring.validation"),". The plugin\nclass loader and Spring context is isolated so conflicts between DataHub and custom classes are avoided."),(0,n.yg)("p",null,"The configuration of a Spring enabled plugin looks like the following, note the addition of ",(0,n.yg)("inlineCode",{parentName:"p"},"spring.enabled: true")," below.\nA list of packages to scan for Spring configuration and components should also be provided which should include\nyour custom classes with Spring annotations per the ",(0,n.yg)("inlineCode",{parentName:"p"},"packageScan")," below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  aspectPayloadValidators:\n    - className: 'com.linkedin.metadata.aspect.plugins.spring.validation.CustomDataQualityRulesValidator'\n      packageScan:\n        - com.linkedin.metadata.aspect.plugins.spring.validation\n      enabled: true\n      supportedOperations:\n        - UPSERT\n      supportedEntityAspectNames:\n        - entityName: 'dataset'\n          aspectName: customDataQualityRules\n      spring:\n        enabled: true\n")),(0,n.yg)("p",null,"In the Spring example, a configuration component called ",(0,n.yg)("inlineCode",{parentName:"p"},"CustomDataQualityRulesConfig")," provides a string ",(0,n.yg)("inlineCode",{parentName:"p"},"Spring injection works!")," demonstrating\ninjection of a bean into a function which is called by Spring after constructing the custom validator plugin."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class CustomDataQualityRulesConfig {\n    @Bean("myCustomMessage")\n    public String myCustomMessage() {\n        return "Spring injection works!";\n    }\n}\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'@Component\n@Import(CustomDataQualityRulesConfig.class)\npublic class CustomDataQualityRulesValidator extends AspectPayloadValidator {\n    @Autowired\n    @Qualifier("myCustomMessage")\n    private String myCustomMessage;\n\n    @PostConstruct\n    public void message() {\n        System.out.println(myCustomMessage);\n    }\n    \n    // ...\n}\n')),(0,n.yg)("p",null,"Example Log:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"INFO  c.l.m.m.r.PluginEntityRegistryLoader:187 - com.linkedin.metadata.models.registry.PluginEntityRegistryLoader@144e466d: Registry mycompany-dq-model:0.0.0-dev discovered. Loading...\nINFO  c.l.m.m.registry.PatchEntityRegistry:143 - Loading custom config entity file: /etc/datahub/plugins/models/mycompany-dq-model/0.0.0-dev/entity-registry.yaml, dir: /etc/datahub/plugins/models/mycompany-dq-model/0.0.0-dev\nINFO  c.l.m.m.registry.PatchEntityRegistry:143 - Loading custom config entity file: /etc/datahub/plugins/models/mycompany-dq-model/0.0.0-dev/entity-registry.yaml, dir: /etc/datahub/plugins/models/mycompany-dq-model/0.0.0-dev\nSpring injection works!\n")),(0,n.yg)("h2",{id:"the-future"},"The Future"),(0,n.yg)("p",null,"Hopefully this repository shows you how easily you can extend and customize DataHub's metadata model!"),(0,n.yg)("p",null,"We will be continuing to make the experience less reliant on core changes to DataHub and reducing the need to fork the main repository."))}g.isMDXComponent=!0}}]);