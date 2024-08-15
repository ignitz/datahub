"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21563],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>h});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return t?a.createElement(h,s(s({ref:n},m),{},{components:t})):a.createElement(h,s({ref:n},m))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},65429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});t(96540);var a=t(15680);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const r={sidebar_position:25,title:"SchemaField",slug:"/generated/metamodel/entities/schemafield",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/schemaField.md"},l="SchemaField",c={unversionedId:"docs/generated/metamodel/entities/schemaField",id:"version-0.14.0/docs/generated/metamodel/entities/schemaField",title:"SchemaField",description:"Aspects",source:"@site/versioned_docs/version-0.14.0/docs/generated/metamodel/entities/schemaField.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/schemafield",permalink:"/docs/0.14.0/generated/metamodel/entities/schemafield",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/schemaField.md",tags:[],version:"0.14.0",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"SchemaField",slug:"/generated/metamodel/entities/schemafield",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/schemaField.md"}},m={},d=[{value:"Aspects",id:"aspects",level:2},{value:"schemaFieldKey",id:"schemafieldkey",level:3},{value:"schemafieldInfo",id:"schemafieldinfo",level:3},{value:"structuredProperties",id:"structuredproperties",level:3},{value:"forms",id:"forms",level:3},{value:"businessAttributes",id:"businessattributes",level:3},{value:"documentation",id:"documentation",level:3},{value:"testResults",id:"testresults",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Incoming",id:"incoming",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],u={toc:d},p="wrapper";function h(e){var{components:n}=e,t=s(e,["components"]);return(0,a.yg)(p,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"schemafield"},"SchemaField"),(0,a.yg)("h2",{id:"aspects"},"Aspects"),(0,a.yg)("h3",{id:"schemafieldkey"},"schemaFieldKey"),(0,a.yg)("p",null,"Key for a SchemaField"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "schemaFieldKey"\n  },\n  "name": "SchemaFieldKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "URN"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "parent",\n      "doc": "Parent associated with the schema field"\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD"\n      },\n      "type": "string",\n      "name": "fieldPath",\n      "doc": "fieldPath identifying the schema field"\n    }\n  ],\n  "doc": "Key for a SchemaField"\n}\n'))),(0,a.yg)("h3",{id:"schemafieldinfo"},"schemafieldInfo"),(0,a.yg)("p",null,"None"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "schemafieldInfo"\n  },\n  "name": "SchemaFieldInfo",\n  "namespace": "com.linkedin.schemafield",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldNameAliases": [\n          "_entityName"\n        ],\n        "fieldType": "KEYWORD"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "name",\n      "default": null\n    }\n  ]\n}\n'))),(0,a.yg)("h3",{id:"structuredproperties"},"structuredProperties"),(0,a.yg)("p",null,"Properties about an entity governed by StructuredPropertyDefinition"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "structuredProperties"\n  },\n  "name": "StructuredProperties",\n  "namespace": "com.linkedin.structured",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "StructuredPropertyValueAssignment",\n          "namespace": "com.linkedin.structured",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "propertyUrn",\n              "doc": "The property that is being assigned a value."\n            },\n            {\n              "type": {\n                "type": "array",\n                "items": [\n                  "string",\n                  "double"\n                ]\n              },\n              "name": "values",\n              "doc": "The value assigned to the property."\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "AuditStamp",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "time",\n                      "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": "string",\n                      "name": "actor",\n                      "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "impersonator",\n                      "default": null,\n                      "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "message",\n                      "default": null,\n                      "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n                    }\n                  ],\n                  "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n                }\n              ],\n              "name": "created",\n              "default": null,\n              "doc": "Audit stamp containing who created this relationship edge and when"\n            },\n            {\n              "type": [\n                "null",\n                "com.linkedin.common.AuditStamp"\n              ],\n              "name": "lastModified",\n              "default": null,\n              "doc": "Audit stamp containing who last modified this relationship edge and when"\n            }\n          ]\n        }\n      },\n      "name": "properties",\n      "doc": "Custom property bag."\n    }\n  ],\n  "doc": "Properties about an entity governed by StructuredPropertyDefinition"\n}\n'))),(0,a.yg)("h3",{id:"forms"},"forms"),(0,a.yg)("p",null,"Forms that are assigned to this entity to be filled out"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "forms"\n  },\n  "name": "Forms",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "/*/completedPrompts/*/id": {\n          "fieldName": "incompleteFormsCompletedPromptIds",\n          "fieldType": "KEYWORD"\n        },\n        "/*/completedPrompts/*/lastModified/time": {\n          "fieldName": "incompleteFormsCompletedPromptResponseTimes",\n          "fieldType": "DATETIME"\n        },\n        "/*/incompletePrompts/*/id": {\n          "fieldName": "incompleteFormsIncompletePromptIds",\n          "fieldType": "KEYWORD"\n        },\n        "/*/urn": {\n          "fieldName": "incompleteForms",\n          "fieldType": "URN"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "FormAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "urn",\n              "doc": "Urn of the applied form"\n            },\n            {\n              "type": {\n                "type": "array",\n                "items": {\n                  "type": "record",\n                  "name": "FormPromptAssociation",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "string",\n                      "name": "id",\n                      "doc": "The id for the prompt. This must be GLOBALLY UNIQUE."\n                    },\n                    {\n                      "type": {\n                        "type": "record",\n                        "name": "AuditStamp",\n                        "namespace": "com.linkedin.common",\n                        "fields": [\n                          {\n                            "type": "long",\n                            "name": "time",\n                            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                          },\n                          {\n                            "java": {\n                              "class": "com.linkedin.common.urn.Urn"\n                            },\n                            "type": "string",\n                            "name": "actor",\n                            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                          },\n                          {\n                            "java": {\n                              "class": "com.linkedin.common.urn.Urn"\n                            },\n                            "type": [\n                              "null",\n                              "string"\n                            ],\n                            "name": "impersonator",\n                            "default": null,\n                            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                          },\n                          {\n                            "type": [\n                              "null",\n                              "string"\n                            ],\n                            "name": "message",\n                            "default": null,\n                            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n                          }\n                        ],\n                        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n                      },\n                      "name": "lastModified",\n                      "doc": "The last time this prompt was touched for the entity (set, unset)"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        {\n                          "type": "record",\n                          "name": "FormPromptFieldAssociations",\n                          "namespace": "com.linkedin.common",\n                          "fields": [\n                            {\n                              "type": [\n                                "null",\n                                {\n                                  "type": "array",\n                                  "items": {\n                                    "type": "record",\n                                    "name": "FieldFormPromptAssociation",\n                                    "namespace": "com.linkedin.common",\n                                    "fields": [\n                                      {\n                                        "type": "string",\n                                        "name": "fieldPath",\n                                        "doc": "The field path on a schema field."\n                                      },\n                                      {\n                                        "type": "com.linkedin.common.AuditStamp",\n                                        "name": "lastModified",\n                                        "doc": "The last time this prompt was touched for the field on the entity (set, unset)"\n                                      }\n                                    ],\n                                    "doc": "Information about the status of a particular prompt for a specific schema field\\non an entity."\n                                  }\n                                }\n                              ],\n                              "name": "completedFieldPrompts",\n                              "default": null,\n                              "doc": "A list of field-level prompt associations that are not yet complete for this form."\n                            },\n                            {\n                              "type": [\n                                "null",\n                                {\n                                  "type": "array",\n                                  "items": "com.linkedin.common.FieldFormPromptAssociation"\n                                }\n                              ],\n                              "name": "incompleteFieldPrompts",\n                              "default": null,\n                              "doc": "A list of field-level prompt associations that are complete for this form."\n                            }\n                          ],\n                          "doc": "Information about the field-level prompt associations on a top-level prompt association."\n                        }\n                      ],\n                      "name": "fieldAssociations",\n                      "default": null,\n                      "doc": "Optional information about the field-level prompt associations."\n                    }\n                  ],\n                  "doc": "Information about the status of a particular prompt.\\nNote that this is where we can add additional information about individual responses:\\nactor, timestamp, and the response itself."\n                }\n              },\n              "name": "incompletePrompts",\n              "default": [],\n              "doc": "A list of prompts that are not yet complete for this form."\n            },\n            {\n              "type": {\n                "type": "array",\n                "items": "com.linkedin.common.FormPromptAssociation"\n              },\n              "name": "completedPrompts",\n              "default": [],\n              "doc": "A list of prompts that have been completed for this form."\n            }\n          ],\n          "doc": "Properties of an applied form."\n        }\n      },\n      "name": "incompleteForms",\n      "doc": "All incomplete forms assigned to the entity."\n    },\n    {\n      "Searchable": {\n        "/*/completedPrompts/*/id": {\n          "fieldName": "completedFormsCompletedPromptIds",\n          "fieldType": "KEYWORD"\n        },\n        "/*/completedPrompts/*/lastModified/time": {\n          "fieldName": "completedFormsCompletedPromptResponseTimes",\n          "fieldType": "DATETIME"\n        },\n        "/*/incompletePrompts/*/id": {\n          "fieldName": "completedFormsIncompletePromptIds",\n          "fieldType": "KEYWORD"\n        },\n        "/*/urn": {\n          "fieldName": "completedForms",\n          "fieldType": "URN"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "com.linkedin.common.FormAssociation"\n      },\n      "name": "completedForms",\n      "doc": "All complete forms assigned to the entity."\n    },\n    {\n      "Searchable": {\n        "/*/form": {\n          "fieldName": "verifiedForms",\n          "fieldType": "URN"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "FormVerificationAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "form",\n              "doc": "The urn of the form that granted this verification."\n            },\n            {\n              "type": [\n                "null",\n                "com.linkedin.common.AuditStamp"\n              ],\n              "name": "lastModified",\n              "default": null,\n              "doc": "An audit stamp capturing who and when verification was applied for this form."\n            }\n          ],\n          "doc": "An association between a verification and an entity that has been granted\\nvia completion of one or more forms of type \'VERIFICATION\'."\n        }\n      },\n      "name": "verifications",\n      "default": [],\n      "doc": "Verifications that have been applied to the entity via completed forms."\n    }\n  ],\n  "doc": "Forms that are assigned to this entity to be filled out"\n}\n'))),(0,a.yg)("h3",{id:"businessattributes"},"businessAttributes"),(0,a.yg)("p",null,"BusinessAttribute aspect used for applying it to an entity"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "businessAttributes"\n  },\n  "name": "BusinessAttributes",\n  "namespace": "com.linkedin.businessattribute",\n  "fields": [\n    {\n      "Relationship": {\n        "/businessAttributeUrn": {\n          "entityTypes": [\n            "businessAttribute"\n          ],\n          "name": "BusinessAttributeOf"\n        }\n      },\n      "SearchableRef": {\n        "/businessAttributeUrn": {\n          "boostScore": 0.5,\n          "fieldName": "businessAttributeRef",\n          "fieldType": "URN",\n          "refType": "businessAttribute"\n        }\n      },\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "BusinessAttributeAssociation",\n          "namespace": "com.linkedin.businessattribute",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.BusinessAttributeUrn"\n              },\n              "type": "string",\n              "name": "businessAttributeUrn",\n              "doc": "Urn of the applied businessAttribute"\n            }\n          ]\n        }\n      ],\n      "name": "businessAttribute",\n      "default": null,\n      "doc": "Business Attribute for this field."\n    }\n  ],\n  "doc": "BusinessAttribute aspect used for applying it to an entity"\n}\n'))),(0,a.yg)("h3",{id:"documentation"},"documentation"),(0,a.yg)("p",null,"Aspect used for storing all applicable documentations on assets.\nThis aspect supports multiple documentations from different sources.\nThere is an implicit assumption that there is only one documentation per\nsource.\nFor example, if there are two documentations from the same source, the\nlatest one will overwrite the previous one.\nIf there are two documentations from different sources, both will be\nstored.\nFuture evolution considerations:\nThe first entity that uses this aspect is Schema Field. We will expand this\naspect to other entities eventually.\nThe values of the documentation are not currently searchable. This will be\nchanged once this aspect develops opinion on which documentation entry is\nthe authoritative one.\nEnsuring that there is only one documentation per source is a business\nrule that is not enforced by the aspect yet. This will currently be enforced by the\napplication that uses this aspect. We will eventually enforce this rule in\nthe aspect using AspectMutators."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "documentation"\n  },\n  "name": "Documentation",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "DocumentationAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "type": "string",\n              "name": "documentation",\n              "doc": "Description of this asset"\n            },\n            {\n              "Searchable": {\n                "/actor": {\n                  "fieldName": "documentationAttributionActors",\n                  "fieldType": "URN"\n                },\n                "/source": {\n                  "fieldName": "documentationAttributionSources",\n                  "fieldType": "URN"\n                },\n                "/time": {\n                  "fieldName": "documentationAttributionDates",\n                  "fieldType": "DATETIME"\n                }\n              },\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "MetadataAttribution",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "time",\n                      "doc": "When this metadata was updated."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": "string",\n                      "name": "actor",\n                      "doc": "The entity (e.g. a member URN) responsible for applying the assocated metadata. This can\\neither be a user (in case of UI edits) or the datahub system for automation."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "source",\n                      "default": null,\n                      "doc": "The DataHub source responsible for applying the associated metadata. This will only be filled out\\nwhen a DataHub source is responsible. This includes the specific metadata test urn, the automation urn."\n                    },\n                    {\n                      "type": {\n                        "type": "map",\n                        "values": "string"\n                      },\n                      "name": "sourceDetail",\n                      "default": {},\n                      "doc": "The details associated with why this metadata was applied. For example, this could include\\nthe actual regex rule, sql statement, ingestion pipeline ID, etc."\n                    }\n                  ],\n                  "doc": "Information about who, why, and how this metadata was applied"\n                }\n              ],\n              "name": "attribution",\n              "default": null,\n              "doc": "Information about who, why, and how this metadata was applied"\n            }\n          ],\n          "doc": "Properties of applied documentation including the attribution of the doc"\n        }\n      },\n      "name": "documentations",\n      "doc": "Documentations associated with this asset. We could be receiving docs from different sources"\n    }\n  ],\n  "doc": "Aspect used for storing all applicable documentations on assets.\\nThis aspect supports multiple documentations from different sources.\\nThere is an implicit assumption that there is only one documentation per\\n   source.\\nFor example, if there are two documentations from the same source, the\\n   latest one will overwrite the previous one.\\nIf there are two documentations from different sources, both will be\\n   stored.\\nFuture evolution considerations:\\nThe first entity that uses this aspect is Schema Field. We will expand this\\n    aspect to other entities eventually.\\nThe values of the documentation are not currently searchable. This will be\\n    changed once this aspect develops opinion on which documentation entry is\\n    the authoritative one.\\nEnsuring that there is only one documentation per source is a business\\n    rule that is not enforced by the aspect yet. This will currently be enforced by the\\n    application that uses this aspect. We will eventually enforce this rule in\\n    the aspect using AspectMutators."\n}\n'))),(0,a.yg)("h3",{id:"testresults"},"testResults"),(0,a.yg)("p",null,"Information about a Test Result"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "testResults"\n  },\n  "name": "TestResults",\n  "namespace": "com.linkedin.test",\n  "fields": [\n    {\n      "Relationship": {\n        "/*/test": {\n          "entityTypes": [\n            "test"\n          ],\n          "name": "IsFailing"\n        }\n      },\n      "Searchable": {\n        "/*/test": {\n          "fieldName": "failingTests",\n          "fieldType": "URN",\n          "hasValuesFieldName": "hasFailingTests"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TestResult",\n          "namespace": "com.linkedin.test",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "test",\n              "doc": "The urn of the test"\n            },\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "FAILURE": " The Test Failed",\n                  "SUCCESS": " The Test Succeeded"\n                },\n                "name": "TestResultType",\n                "namespace": "com.linkedin.test",\n                "symbols": [\n                  "SUCCESS",\n                  "FAILURE"\n                ]\n              },\n              "name": "type",\n              "doc": "The type of the result"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "testDefinitionMd5",\n              "default": null,\n              "doc": "The md5 of the test definition that was used to compute this result.\\nSee TestInfo.testDefinition.md5 for more information."\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "AuditStamp",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "time",\n                      "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": "string",\n                      "name": "actor",\n                      "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "impersonator",\n                      "default": null,\n                      "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "message",\n                      "default": null,\n                      "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n                    }\n                  ],\n                  "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n                }\n              ],\n              "name": "lastComputed",\n              "default": null,\n              "doc": "The audit stamp of when the result was computed, including the actor who computed it."\n            }\n          ],\n          "doc": "Information about a Test Result"\n        }\n      },\n      "name": "failing",\n      "doc": "Results that are failing"\n    },\n    {\n      "Relationship": {\n        "/*/test": {\n          "entityTypes": [\n            "test"\n          ],\n          "name": "IsPassing"\n        }\n      },\n      "Searchable": {\n        "/*/test": {\n          "fieldName": "passingTests",\n          "fieldType": "URN",\n          "hasValuesFieldName": "hasPassingTests"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "com.linkedin.test.TestResult"\n      },\n      "name": "passing",\n      "doc": "Results that are passing"\n    }\n  ],\n  "doc": "Information about a Test Result"\n}\n'))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"outgoing"},"Outgoing"),(0,a.yg)("p",null,"These are the relationships stored in this entity's aspects"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"BusinessAttributeOf"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"BusinessAttribute via ",(0,a.yg)("inlineCode",{parentName:"li"},"businessAttributes.businessAttribute")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"IsFailing"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Test via ",(0,a.yg)("inlineCode",{parentName:"li"},"testResults.failing")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"IsPassing"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Test via ",(0,a.yg)("inlineCode",{parentName:"li"},"testResults.passing"))))),(0,a.yg)("h3",{id:"incoming"},"Incoming"),(0,a.yg)("p",null,"These are the relationships stored in other entity's aspects"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"DownstreamOf"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Dataset via ",(0,a.yg)("inlineCode",{parentName:"li"},"upstreamLineage.fineGrainedLineages")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"ForeignKeyTo"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Dataset via ",(0,a.yg)("inlineCode",{parentName:"li"},"schemaMetadata.foreignKeys.foreignFields")),(0,a.yg)("li",{parentName:"ul"},"GlossaryTerm via ",(0,a.yg)("inlineCode",{parentName:"li"},"schemaMetadata.foreignKeys.foreignFields")),(0,a.yg)("li",{parentName:"ul"},"Assertion via ",(0,a.yg)("inlineCode",{parentName:"li"},"assertionInfo.schemaAssertion.schema.foreignKeys.foreignFields")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Consumes"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"DataJob via ",(0,a.yg)("inlineCode",{parentName:"li"},"dataJobInputOutput.inputDatasetFields")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Produces"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"DataJob via ",(0,a.yg)("inlineCode",{parentName:"li"},"dataJobInputOutput.outputDatasetFields")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"consumesField"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Chart via ",(0,a.yg)("inlineCode",{parentName:"li"},"inputFields.fields.schemaFieldUrn")),(0,a.yg)("li",{parentName:"ul"},"Dashboard via ",(0,a.yg)("inlineCode",{parentName:"li"},"inputFields.fields.schemaFieldUrn")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Asserts"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Assertion via ",(0,a.yg)("inlineCode",{parentName:"li"},"assertionInfo.datasetAssertion.fields")),(0,a.yg)("li",{parentName:"ul"},"Assertion via ",(0,a.yg)("inlineCode",{parentName:"li"},"assertionInfo.customAssertion.field"))))),(0,a.yg)("h2",{id:"global-metadata-model"},(0,a.yg)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}h.isMDXComponent=!0}}]);