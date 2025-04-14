import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAtlasDeploymentV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesAtlasDeploymentV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "atlas.mongodb.com/v1", kind: "AtlasDeployment", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesAtlasDeploymentV1Config extends ManifestConfig {
  metadata: {
    annotations?: {
      [key: string]: string;
    };
    labels?: {
      [key: string]: string;
    };
    name: string;
    namespace: string;
  };
  manifest: {
    /** @description AtlasDeployment is the Schema for the atlasdeployments API */
    spec: {
      /** @description APIVersion defines the versioned schema of this representation of an object.
       *     Servers should convert recognized schemas to the latest internal value, and
       *     may reject unrecognized values.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string;
      /** @description Kind is a string value representing the REST resource this object represents.
       *     Servers may infer this from the endpoint the client submits requests to.
       *     Cannot be updated.
       *     In CamelCase.
       *     More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      /** @description AtlasDeploymentSpec defines the desired state of AtlasDeployment
       *     Only one of DeploymentSpec, AdvancedDeploymentSpec and ServerlessSpec should be defined */
      spec?: {
        /** @description Backup schedule for the AtlasDeployment */
        backupRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        /** @description Name of the secret containing Atlas API private and public keys */
        connectionSecret?: {
          /** @description Name of the resource being referred to
           *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name: string;
        };
        /** @description Configuration for the advanced (v1.5) deployment API https://www.mongodb.com/docs/atlas/reference/api/clusters/ */
        deploymentSpec?: {
          /** @description Applicable only for M10+ deployments.
           *     Flag that indicates if the deployment uses Cloud Backups for backups. */
          backupEnabled?: boolean;
          /** @description Configuration of BI Connector for Atlas on this deployment.
           *     The MongoDB Connector for Business Intelligence for Atlas (BI Connector) is only available for M10 and larger deployments. */
          biConnector?: {
            /** @description Flag that indicates whether or not BI Connector for Atlas is enabled on the deployment. */
            enabled?: boolean;
            /** @description Source from which the BI Connector for Atlas reads data. Each BI Connector for Atlas read preference contains a distinct combination of readPreference and readPreferenceTags options. */
            readPreference?: string;
          };
          /** @description Type of the deployment that you want to create.
           *     The parameter is required if replicationSpecs are set or if Global Deployments are deployed. */
          clusterType?: string;
          customZoneMapping?: {
            location: string;
            zone: string;
          }[];
          /** @description Capacity, in gigabytes, of the host's root volume.
           *     Increase this number to add capacity, up to a maximum possible value of 4096 (i.e., 4 TB).
           *     This value must be a positive integer.
           *     The parameter is required if replicationSpecs are configured. */
          diskSizeGB?: number;
          /** @description Cloud service provider that offers Encryption at Rest. */
          encryptionAtRestProvider?: string;
          /** @description Collection of key-value pairs that tag and categorize the deployment.
           *     Each key and value has a maximum length of 255 characters. */
          labels?: {
            key: string;
            value: string;
          }[];
          managedNamespaces?: {
            collection: string;
            customShardKey?: string;
            db: string;
            isCustomShardKeyHashed?: boolean;
            isShardKeyUnique?: boolean;
            numInitialChunks?: number;
            presplitHashedZones?: boolean;
          }[];
          /** @description Version of the deployment to deploy. */
          mongoDBMajorVersion?: string;
          mongoDBVersion?: string;
          /** @description Name of the advanced deployment as it appears in Atlas.
           *     After Atlas creates the deployment, you can't change its name.
           *     Can only contain ASCII letters, numbers, and hyphens. */
          name: string;
          /** @description Flag that indicates whether the deployment should be paused. */
          paused?: boolean;
          /** @description Flag that indicates the deployment uses continuous cloud backups. */
          pitEnabled?: boolean;
          /** @description Configuration for deployment regions. */
          replicationSpecs?: {
            /** @description Positive integer that specifies the number of shards to deploy in each specified zone.
             *     If you set this value to 1 and clusterType is SHARDED, MongoDB Cloud deploys a single-shard sharded cluster.
             *     Don't create a sharded cluster with a single shard for production environments.
             *     Single-shard sharded clusters don't provide the same benefits as multi-shard configurations */
            numShards?: number;
            /** @description Hardware specifications for nodes set for a given region.
             *     Each regionConfigs object describes the region's priority in elections and the number and type of MongoDB nodes that MongoDB Cloud deploys to the region.
             *     Each regionConfigs object must have either an analyticsSpecs object, electableSpecs object, or readOnlySpecs object.
             *     Tenant clusters only require electableSpecs. Dedicated clusters can specify any of these specifications, but must have at least one electableSpecs object within a replicationSpec.
             *     Every hardware specification must use the same instanceSize. */
            regionConfigs?: {
              analyticsSpecs?: {
                /**
                 * Format: int64
                 * @description Disk IOPS setting for AWS storage.
                 *     Set only if you selected AWS as your cloud service provider.
                 */
                diskIOPS?: number;
                /**
                 * @description Disk IOPS setting for AWS storage.
                 *     Set only if you selected AWS as your cloud service provider.
                 * @enum {string}
                 */
                ebsVolumeType?: "STANDARD" | "PROVISIONED";
                /** @description Hardware specification for the instance sizes in this region.
                 *     Each instance size has a default storage and memory capacity.
                 *     The instance size you select applies to all the data-bearing hosts in your instance size */
                instanceSize?: string;
                /** @description Number of nodes of the given type for MongoDB Cloud to deploy to the region. */
                nodeCount?: number;
              };
              /** @description AdvancedAutoScalingSpec configures your deployment to automatically scale its storage */
              autoScaling?: {
                /** @description Collection of settings that configure how a deployment might scale its deployment tier and whether the deployment can scale down. */
                compute?: {
                  /** @description Flag that indicates whether deployment tier auto-scaling is enabled. The default is false. */
                  enabled?: boolean;
                  /** @description Maximum instance size to which your deployment can automatically scale (such as M40). Atlas requires this parameter if "autoScaling.compute.enabled" : true. */
                  maxInstanceSize?: string;
                  /** @description Minimum instance size to which your deployment can automatically scale (such as M10). Atlas requires this parameter if "autoScaling.compute.scaleDownEnabled" : true. */
                  minInstanceSize?: string;
                  /** @description Flag that indicates whether the deployment tier may scale down. Atlas requires this parameter if "autoScaling.compute.enabled" : true. */
                  scaleDownEnabled?: boolean;
                };
                /** @description Flag that indicates whether disk auto-scaling is enabled. The default is true. */
                diskGB?: {
                  enabled?: boolean;
                };
              };
              /**
               * @description Cloud service provider on which the host for a multi-tenant deployment is provisioned.
               *     This setting only works when "providerName" : "TENANT" and "providerSetting.instanceSizeName" : M2 or M5.
               *     Otherwise it should be equal to "providerName" value
               * @enum {string}
               */
              backingProviderName?: "AWS" | "GCP" | "AZURE";
              electableSpecs?: {
                /**
                 * Format: int64
                 * @description Disk IOPS setting for AWS storage.
                 *     Set only if you selected AWS as your cloud service provider.
                 */
                diskIOPS?: number;
                /**
                 * @description Disk IOPS setting for AWS storage.
                 *     Set only if you selected AWS as your cloud service provider.
                 * @enum {string}
                 */
                ebsVolumeType?: "STANDARD" | "PROVISIONED";
                /** @description Hardware specification for the instance sizes in this region.
                 *     Each instance size has a default storage and memory capacity.
                 *     The instance size you select applies to all the data-bearing hosts in your instance size */
                instanceSize?: string;
                /** @description Number of nodes of the given type for MongoDB Cloud to deploy to the region. */
                nodeCount?: number;
              };
              /** @description Precedence is given to this region when a primary election occurs.
               *     If your regionConfigs has only readOnlySpecs, analyticsSpecs, or both, set this value to 0.
               *     If you have multiple regionConfigs objects (your cluster is multi-region or multi-cloud), they must have priorities in descending order.
               *     The highest priority is 7 */
              priority?: number;
              /** @enum {string} */
              providerName?: "AWS" | "GCP" | "AZURE" | "TENANT" | "SERVERLESS";
              readOnlySpecs?: {
                /**
                 * Format: int64
                 * @description Disk IOPS setting for AWS storage.
                 *     Set only if you selected AWS as your cloud service provider.
                 */
                diskIOPS?: number;
                /**
                 * @description Disk IOPS setting for AWS storage.
                 *     Set only if you selected AWS as your cloud service provider.
                 * @enum {string}
                 */
                ebsVolumeType?: "STANDARD" | "PROVISIONED";
                /** @description Hardware specification for the instance sizes in this region.
                 *     Each instance size has a default storage and memory capacity.
                 *     The instance size you select applies to all the data-bearing hosts in your instance size */
                instanceSize?: string;
                /** @description Number of nodes of the given type for MongoDB Cloud to deploy to the region. */
                nodeCount?: number;
              };
              /** @description Physical location of your MongoDB deployment.
               *     The region you choose can affect network latency for clients accessing your databases. */
              regionName?: string;
            }[];
            /** @description Human-readable label that identifies the zone in a Global Cluster. */
            zoneName?: string;
          }[];
          rootCertType?: string;
          /** @description A list of atlas search indexes configuration for the current deployment */
          searchIndexes?: {
            /** @description Human-readable label that identifies the database that contains the collection with one or more Atlas Search indexes */
            DBName: string;
            /** @description Human-readable label that identifies the collection that contains one or more Atlas Search indexes */
            collectionName: string;
            /** @description Human-readable label that identifies this index. Must be unique for a deployment */
            name: string;
            /** @description Atlas search index configuration */
            search?: {
              /** @description Index specifications for the collection's fields */
              mappings: {
                /** @description Flag that indicates whether the index uses dynamic or static mappings. Required if mapping.fields is omitted. */
                dynamic?: boolean;
                /** @description One or more field specifications for the Atlas Search index. Required if mapping.dynamic is omitted or set to false. */
                fields?: unknown;
              };
              /** @description A reference to the AtlasSearchIndexConfig custom resource */
              searchConfigurationRef: {
                /** @description Name is the name of the Kubernetes Resource */
                name: string;
                /** @description Namespace is the namespace of the Kubernetes Resource */
                namespace?: string;
              };
              /** @description Rule sets that map words to their synonyms in this index */
              synonyms?: {
                /**
                 * @description Specific pre-defined method chosen to apply to the synonyms to be searched
                 * @enum {string}
                 */
                analyzer:
                  | "lucene.standard"
                  | "lucene.standard"
                  | "lucene.simple"
                  | "lucene.whitespace"
                  | "lucene.keyword"
                  | "lucene.arabic"
                  | "lucene.armenian"
                  | "lucene.basque"
                  | "lucene.bengali"
                  | "lucene.brazilian"
                  | "lucene.bulgarian"
                  | "lucene.catalan"
                  | "lucene.chinese"
                  | "lucene.cjk"
                  | "lucene.czech"
                  | "lucene.danish"
                  | "lucene.dutch"
                  | "lucene.english"
                  | "lucene.finnish"
                  | "lucene.french"
                  | "lucene.galician"
                  | "lucene.german"
                  | "lucene.greek"
                  | "lucene.hindi"
                  | "lucene.hungarian"
                  | "lucene.indonesian"
                  | "lucene.irish"
                  | "lucene.italian"
                  | "lucene.japanese"
                  | "lucene.korean"
                  | "lucene.kuromoji"
                  | "lucene.latvian"
                  | "lucene.lithuanian"
                  | "lucene.morfologik"
                  | "lucene.nori"
                  | "lucene.norwegian"
                  | "lucene.persian"
                  | "lucene.portuguese"
                  | "lucene.romanian"
                  | "lucene.russian"
                  | "lucene.smartcn"
                  | "lucene.sorani"
                  | "lucene.spanish"
                  | "lucene.swedish"
                  | "lucene.thai"
                  | "lucene.turkish"
                  | "lucene.ukrainian";
                /** @description Human-readable label that identifies the synonym definition. Each name must be unique within the same index definition */
                name: string;
                /** @description Data set that stores the mapping one or more words map to one or more synonyms of those words */
                source: {
                  /** @description Human-readable label that identifies the MongoDB collection that stores words and their applicable synonyms */
                  collection: string;
                };
              }[];
            };
            /**
             * @description Type of the index
             * @enum {string}
             */
            type: "search" | "vectorSearch";
            /** @description Atlas vector search index configuration */
            vectorSearch?: {
              /** @description Array of JSON objects. See examples https://dochub.mongodb.org/core/avs-vector-type */
              fields: unknown;
            };
          }[];
          /** @description Settings for Search Nodes for the cluster. Currently, at most one search node configuration may be defined. */
          searchNodes?: {
            /**
             * @description Hardware specification for the Search Node instance sizes.
             * @enum {string}
             */
            instanceSize?:
              | "S20_HIGHCPU_NVME"
              | "S30_HIGHCPU_NVME"
              | "S40_HIGHCPU_NVME"
              | "S50_HIGHCPU_NVME"
              | "S60_HIGHCPU_NVME"
              | "S70_HIGHCPU_NVME"
              | "S80_HIGHCPU_NVME"
              | "S30_LOWCPU_NVME"
              | "S40_LOWCPU_NVME"
              | "S50_LOWCPU_NVME"
              | "S60_LOWCPU_NVME"
              | "S80_LOWCPU_NVME"
              | "S90_LOWCPU_NVME"
              | "S100_LOWCPU_NVME"
              | "S110_LOWCPU_NVME";
            /** @description Number of Search Nodes in the cluster. */
            nodeCount?: number;
          }[];
          /** @description Key-value pairs for resource tagging. */
          tags?: {
            key: string;
            value: string;
          }[];
          /** @description Flag that indicates whether termination protection is enabled on the cluster. If set to true, MongoDB Cloud won't delete the cluster. If set to false, MongoDB Cloud will delete the cluster. */
          terminationProtectionEnabled?: boolean;
          versionReleaseSystem?: string;
        };
        /** @description "externalProjectRef" holds the parent Atlas project ID.
         *     Mutually exclusive with the "projectRef" field */
        externalProjectRef?: {
          /** @description ID is the Atlas project ID */
          id: string;
        };
        /** @description Configuration for the Flex cluster API. https://www.mongodb.com/docs/atlas/reference/api-resources-spec/v2/#tag/Flex-Clusters */
        flexSpec?: {
          /** @description Human-readable label that identifies the instance. */
          name: string;
          /** @description Group of cloud provider settings that configure the provisioned MongoDB flex cluster. */
          providerSettings: {
            /** @description Cloud service provider on which MongoDB Atlas provisions the flex cluster. */
            backingProviderName: string;
            /** @description Human-readable label that identifies the geographic location of your MongoDB flex cluster.
             *     The region you choose can affect network latency for clients accessing your databases. */
            regionName: string;
          };
          /** @description List that contains key-value pairs between 1 to 255 characters in length for tagging and categorizing the instance. */
          tags?: {
            key: string;
            value: string;
          }[];
          /** @description Flag that indicates whether termination protection is enabled on the cluster.
           *     If set to true, MongoDB Cloud won't delete the cluster. If set to false, MongoDB Cloud will delete the cluster. */
          terminationProtectionEnabled?: boolean;
        };
        /** @description ProcessArgs allows to modify Advanced Configuration Options */
        processArgs?: {
          defaultReadConcern?: string;
          defaultWriteConcern?: string;
          failIndexKeyTooLong?: boolean;
          javascriptEnabled?: boolean;
          minimumEnabledTlsProtocol?: string;
          noTableScan?: boolean;
          oplogMinRetentionHours?: string;
          /** Format: int64 */
          oplogSizeMB?: number;
          /** Format: int64 */
          sampleRefreshIntervalBIConnector?: number;
          /** Format: int64 */
          sampleSizeBIConnector?: number;
        };
        /** @description "projectRef" is a reference to the parent AtlasProject resource.
         *     Mutually exclusive with the "externalProjectRef" field */
        projectRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        /** @description Configuration for the serverless deployment API. https://www.mongodb.com/docs/atlas/reference/api/serverless-instances/
         *     DEPRECATED FIELD: Serverless instances are deprecated. See https://dochub.mongodb.org/core/atlas-flex-migration for details. */
        serverlessSpec?: {
          /** @description Serverless Backup Options */
          backupOptions?: {
            /** @description ServerlessContinuousBackupEnabled */
            serverlessContinuousBackupEnabled?: boolean;
          };
          /** @description Name of the serverless deployment as it appears in Atlas.
           *     After Atlas creates the deployment, you can't change its name.
           *     Can only contain ASCII letters, numbers, and hyphens. */
          name: string;
          privateEndpoints?: {
            /** @description CloudProviderEndpointID is the identifier of the cloud provider endpoint. */
            cloudProviderEndpointID?: string;
            /** @description Name is the name of the Serverless PrivateLink Service. Should be unique. */
            name?: string;
            /** @description PrivateEndpointIPAddress is the IPv4 address of the private endpoint in your Azure VNet that someone added to this private endpoint service. */
            privateEndpointIpAddress?: string;
          }[];
          /** @description Configuration for the provisioned hosts on which MongoDB runs. The available options are specific to the cloud service provider. */
          providerSettings: {
            /** @description DEPRECATED FIELD. The value of this field doesn't take any effect. Range of instance sizes to which your deployment can scale. */
            autoScaling?: {
              /** @description Deprecated: This flag is not supported anymore.
               *     Flag that indicates whether autopilot mode for Performance Advisor is enabled.
               *     The default is false. */
              autoIndexingEnabled?: boolean;
              /** @description Collection of settings that configure how a deployment might scale its deployment tier and whether the deployment can scale down. */
              compute?: {
                /** @description Flag that indicates whether deployment tier auto-scaling is enabled. The default is false. */
                enabled?: boolean;
                /** @description Maximum instance size to which your deployment can automatically scale (such as M40). Atlas requires this parameter if "autoScaling.compute.enabled" : true. */
                maxInstanceSize?: string;
                /** @description Minimum instance size to which your deployment can automatically scale (such as M10). Atlas requires this parameter if "autoScaling.compute.scaleDownEnabled" : true. */
                minInstanceSize?: string;
                /** @description Flag that indicates whether the deployment tier may scale down. Atlas requires this parameter if "autoScaling.compute.enabled" : true. */
                scaleDownEnabled?: boolean;
              };
              /** @description Flag that indicates whether disk auto-scaling is enabled. The default is true. */
              diskGBEnabled?: boolean;
            };
            /** @description Cloud service provider on which the host for a multi-tenant deployment is provisioned.
             *     This setting only works when "providerSetting.providerName" : "TENANT" and "providerSetting.instanceSizeName" : M2 or M5. */
            backingProviderName?: string;
            /**
             * Format: int64
             * @description DEPRECATED FIELD. The value of this field doesn't take any effect. Disk IOPS setting for AWS storage.
             *     Set only if you selected AWS as your cloud service provider.
             */
            diskIOPS?: number;
            /** @description DEPRECATED FIELD. The value of this field doesn't take any effect. Type of disk if you selected Azure as your cloud service provider. */
            diskTypeName?: string;
            /** @description DEPRECATED FIELD. The value of this field doesn't take any effect. Flag that indicates whether the Amazon EBS encryption feature encrypts the host's root volume for both data at rest within the volume and for data moving between the volume and the deployment. */
            encryptEBSVolume?: boolean;
            /** @description DEPRECATED FIELD. The value of this field doesn't take any effect. Atlas provides different deployment tiers, each with a default storage capacity and RAM size. The deployment you select is used for all the data-bearing hosts in your deployment tier. */
            instanceSizeName?: string;
            /** @description Cloud service provider on which Atlas provisions the hosts. */
            providerName: string;
            /** @description Physical location of your MongoDB deployment.
             *     The region you choose can affect network latency for clients accessing your databases. */
            regionName?: string;
            /** @description DEPRECATED FIELD. The value of this field doesn't take any effect. Disk IOPS setting for AWS storage.
             *     Set only if you selected AWS as your cloud service provider. */
            volumeType?: string;
          };
          /** @description Key-value pairs for resource tagging. */
          tags?: {
            key: string;
            value: string;
          }[];
          /** @description Flag that indicates whether termination protection is enabled on the cluster. If set to true, MongoDB Cloud won't delete the cluster. If set to false, MongoDB Cloud will delete the cluster. */
          terminationProtectionEnabled?: boolean;
        };
      };
      /** @description AtlasDeploymentStatus defines the observed state of AtlasDeployment. */
      status?: {
        /** @description Conditions is the list of statuses showing the current state of the Atlas Custom Resource */
        conditions: {
          /**
           * Format: date-time
           * @description Last time the condition transitioned from one status to another.
           */
          lastTransitionTime?: string;
          /** @description A human readable message indicating details about the transition. */
          message?: string;
          /** @description The reason for the condition's last transition. */
          reason?: string;
          /** @description Status of the condition, one of True, False, Unknown. */
          status: string;
          /** @description Type of Atlas Custom Resource condition. */
          type: string;
        }[];
        /** @description ConnectionStrings is a set of connection strings that your applications use to connect to this cluster. */
        connectionStrings?: {
          /** @description Network-peering-endpoint-aware mongodb:// connection strings for each interface VPC endpoint you configured to connect to this cluster.
           *     Atlas returns this parameter only if you created a network peering connection to this cluster. */
          private?: string;
          /** @description Private endpoint connection strings.
           *     Each object describes the connection strings you can use to connect to this cluster through a private endpoint.
           *     Atlas returns this parameter only if you deployed a private endpoint to all regions to which you deployed this cluster's nodes. */
          privateEndpoint?: {
            /** @description Private-endpoint-aware mongodb:// connection string for this private endpoint. */
            connectionString?: string;
            /** @description Private endpoint through which you connect to Atlas when you use connectionStrings.privateEndpoint[n].connectionString or connectionStrings.privateEndpoint[n].srvConnectionString. */
            endpoints?: {
              /** @description Unique identifier of the private endpoint. */
              endpointId?: string;
              /** @description Private IP address of the private endpoint network interface you created in your Azure VNet. */
              ip?: string;
              /** @description Cloud provider to which you deployed the private endpoint. Atlas returns AWS or AZURE. */
              providerName?: string;
              /** @description Region to which you deployed the private endpoint. */
              region?: string;
            }[];
            /** @description Private-endpoint-aware mongodb+srv:// connection string for this private endpoint. */
            srvConnectionString?: string;
            srvShardOptimizedConnectionString?: string;
            /** @description Type of MongoDB process that you connect to with the connection strings
             *
             *     Atlas returns:
             *
             *     • MONGOD for replica sets, or
             *
             *     • MONGOS for sharded clusters */
            type?: string;
          }[];
          /** @description Network-peering-endpoint-aware mongodb+srv:// connection strings for each interface VPC endpoint you configured to connect to this cluster.
           *     Atlas returns this parameter only if you created a network peering connection to this cluster.
           *     Use this URI format if your driver supports it. If it doesn't, use connectionStrings.private. */
          privateSrv?: string;
          /** @description Public mongodb:// connection string for this cluster. */
          standard?: string;
          /** @description Public mongodb+srv:// connection string for this cluster. */
          standardSrv?: string;
        };
        customZoneMapping?: {
          customZoneMapping?: {
            [key: string]: string;
          };
          zoneMappingErrMessage?: string;
          zoneMappingState?: string;
        };
        managedNamespaces?: {
          collection: string;
          customShardKey?: string;
          db: string;
          errMessage?: string;
          isCustomShardKeyHashed?: boolean;
          isShardKeyUnique?: boolean;
          numInitialChunks?: number;
          presplitHashedZones?: boolean;
          status?: string;
        }[];
        /** @description MongoDBVersion is the version of MongoDB the cluster runs, in <major version>.<minor version> format. */
        mongoDBVersion?: string;
        /** @description MongoURIUpdated is a timestamp in ISO 8601 date and time format in UTC when the connection string was last updated.
         *     The connection string changes if you update any of the other values. */
        mongoURIUpdated?: string;
        /**
         * Format: int64
         * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
         *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
         */
        observedGeneration?: number;
        replicaSets?: {
          id: string;
          zoneName?: string;
        }[];
        /** @description SearchIndexes contains a list of search indexes statuses configured for a project */
        searchIndexes?: {
          ID: string;
          message: string;
          name: string;
          status: string;
        }[];
        serverlessPrivateEndpoints?: {
          /** @description ID is the identifier of the Serverless PrivateLink Service. */
          _id?: string;
          /** @description CloudProviderEndpointID is the identifier of the cloud provider endpoint. */
          cloudProviderEndpointId?: string;
          /** @description EndpointServiceName is the name of the PrivateLink endpoint service in AWS. Returns null while the endpoint service is being created. */
          endpointServiceName?: string;
          /** @description ErrorMessage is the error message if the Serverless PrivateLink Service failed to create or connect. */
          errorMessage?: string;
          /** @description Name is the name of the Serverless PrivateLink Service. Should be unique. */
          name?: string;
          /** @description PrivateEndpointIPAddress is the IPv4 address of the private endpoint in your Azure VNet that someone added to this private endpoint service. */
          privateEndpointIpAddress?: string;
          /** @description PrivateLinkServiceResourceID is the root-relative path that identifies the Azure Private Link Service that MongoDB Cloud manages. MongoDB Cloud returns null while it creates the endpoint service. */
          privateLinkServiceResourceId?: string;
          /** @description ProviderName is human-readable label that identifies the cloud provider. Values include AWS or AZURE. */
          providerName?: string;
          /** @description Status of the AWS Serverless PrivateLink connection. */
          status?: string;
        }[];
        /** @description StateName is the current state of the cluster.
         *     The possible states are: IDLE, CREATING, UPDATING, DELETING, DELETED, REPAIRING */
        stateName?: string;
      };
    };
  };
}
