import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class AtlasMongodbComAtlasProjectV1 extends Manifest {
  constructor(scope: Construct, id: string, config: AtlasMongodbComAtlasProjectV1Config) {
    super(scope, id, config);
  }
}
export interface AtlasMongodbComAtlasProjectV1Config extends ManifestConfig {
  manifest: {
    apiVersion: "atlas.mongodb.com/v1";
    kind: "AtlasProject";
    metadata: {
      annotations?: {
        [key: string]: string;
      };
      labels?: {
        [key: string]: string;
      };
      name: string;
      namespace?: string;
    };
    /** @description AtlasProjectSpec defines the desired state of Project in Atlas */
    spec?: {
      /** @description AlertConfigurationSyncEnabled is a flag that enables/disables Alert Configurations sync for the current Project.
       *     If true - project alert configurations will be synced according to AlertConfigurations.
       *     If not - alert configurations will not be modified by the operator. They can be managed through API, cli, UI. */
      alertConfigurationSyncEnabled?: boolean;
      /** @description AlertConfiguration is a list of Alert Configurations configured for the current Project. */
      alertConfigurations?: {
        /** @description If omitted, the configuration is disabled. */
        enabled?: boolean;
        /** @description The type of event that will trigger an alert. */
        eventTypeName?: string;
        /** @description You can filter using the matchers array only when the EventTypeName specifies an event for a host, replica set, or sharded cluster. */
        matchers?: {
          /** @description Name of the field in the target object to match on. */
          fieldName?: string;
          /** @description The operator to test the field’s value. */
          operator?: string;
          /** @description Value to test with the specified operator. */
          value?: string;
        }[];
        /** @description MetricThreshold  causes an alert to be triggered. */
        metricThreshold?: {
          /** @description Name of the metric to check. */
          metricName?: string;
          /** @description This must be set to AVERAGE. Atlas computes the current metric value as an average. */
          mode?: string;
          /** @description Operator to apply when checking the current metric value against the threshold value. */
          operator?: string;
          /** @description Threshold value outside which an alert will be triggered. */
          threshold: string;
          /** @description The units for the threshold value. */
          units?: string;
        };
        /** @description Notifications are sending when an alert condition is detected. */
        notifications?: {
          /** @description Secret containing a Slack API token or Bot token. Populated for the SLACK notifications type. If the token later becomes invalid, Atlas sends an email to the project owner and eventually removes the token. */
          apiTokenRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
          /** @description Slack channel name. Populated for the SLACK notifications type. */
          channelName?: string;
          /** @description Secret containing a Datadog API Key. Found in the Datadog dashboard. Populated for the DATADOG notifications type. */
          datadogAPIKeyRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
          /** @description Region that indicates which API URL to use */
          datadogRegion?: string;
          /** @description Number of minutes to wait after an alert condition is detected before sending out the first notification. */
          delayMin?: number;
          /** @description Email address to which alert notifications are sent. Populated for the EMAIL notifications type. */
          emailAddress?: string;
          /** @description Flag indicating if email notifications should be sent. Populated for ORG, GROUP, and USER notifications types. */
          emailEnabled?: boolean;
          /** @description Flowdock flow name in lower-case letters. */
          flowName?: string;
          /** @description The Flowdock personal API token. Populated for the FLOWDOCK notifications type. If the token later becomes invalid, Atlas sends an email to the project owner and eventually removes the token. */
          flowdockApiTokenRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
          /** @description Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved. */
          intervalMin?: number;
          /** @description Mobile number to which alert notifications are sent. Populated for the SMS notifications type. */
          mobileNumber?: string;
          /** @description OpsGenie API Key. Populated for the OPS_GENIE notifications type. If the key later becomes invalid, Atlas sends an email to the project owner and eventually removes the token. */
          opsGenieApiKeyRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
          /** @description Region that indicates which API URL to use. */
          opsGenieRegion?: string;
          /** @description Flowdock organization name in lower-case letters. This is the name that appears after www.flowdock.com/app/ in the URL string. Populated for the FLOWDOCK notifications type. */
          orgName?: string;
          /** @description The following roles grant privileges within a project. */
          roles?: string[];
          /** @description PagerDuty service key. Populated for the PAGER_DUTY notifications type. If the key later becomes invalid, Atlas sends an email to the project owner and eventually removes the key. */
          serviceKeyRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
          /** @description Flag indicating if text message notifications should be sent. Populated for ORG, GROUP, and USER notifications types. */
          smsEnabled?: boolean;
          /** @description Unique identifier of a team. */
          teamId?: string;
          /** @description Label for the team that receives this notification. */
          teamName?: string;
          /** @description Type of alert notification. */
          typeName?: string;
          /** @description Name of the Atlas user to which to send notifications. Only a user in the project that owns the alert configuration is allowed here. Populated for the USER notifications type. */
          username?: string;
          /** @description Secret containing a VictorOps API key and Routing key. Populated for the VICTOR_OPS notifications type. If the key later becomes invalid, Atlas sends an email to the project owner and eventually removes the key. */
          victorOpsSecretRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
        }[];
        /** @description Threshold  causes an alert to be triggered. */
        threshold?: {
          /** @description Operator to apply when checking the current metric value against the threshold value. it accepts the following values: GREATER_THAN, LESS_THAN */
          operator?: string;
          /** @description Threshold value outside which an alert will be triggered. */
          threshold?: string;
          /** @description The units for the threshold value */
          units?: string;
        };
      }[];
      /** @description Auditing represents MongoDB Maintenance Windows */
      auditing?: {
        /** @description Indicates whether the auditing system captures successful authentication attempts for audit filters using the "atype" : "authCheck" auditing event. For more information, see auditAuthorizationSuccess */
        auditAuthorizationSuccess?: boolean;
        /** @description JSON-formatted audit filter used by the project */
        auditFilter?: string;
        /** @description Denotes whether or not the project associated with the {GROUP-ID} has database auditing enabled. */
        enabled?: boolean;
      };
      /** @description BackupCompliancePolicyRef is a reference to the backup compliance CR. */
      backupCompliancePolicyRef?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
      /** @description CloudProviderAccessRoles is a list of Cloud Provider Access Roles configured for the current Project.
       *     Deprecated: This configuration was deprecated in favor of CloudProviderIntegrations */
      cloudProviderAccessRoles?: {
        /** @description IamAssumedRoleArn is the ARN of the IAM role that is assumed by the Atlas cluster. */
        iamAssumedRoleArn?: string;
        /** @description ProviderName is the name of the cloud provider. Currently only AWS is supported. */
        providerName: string;
      }[];
      /** @description CloudProviderIntegrations is a list of Cloud Provider Integration configured for the current Project. */
      cloudProviderIntegrations?: {
        /** @description IamAssumedRoleArn is the ARN of the IAM role that is assumed by the Atlas cluster. */
        iamAssumedRoleArn?: string;
        /** @description ProviderName is the name of the cloud provider. Currently only AWS is supported. */
        providerName: string;
      }[];
      /** @description ConnectionSecret is the name of the Kubernetes Secret which contains the information about the way to connect to
       *     Atlas (organization ID, API keys). The default Operator connection configuration will be used if not provided. */
      connectionSecretRef?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
      /** @description The customRoles lets you create, and change custom roles in your cluster. Use custom roles to specify custom sets of actions that the Atlas built-in roles can't describe. */
      customRoles?: {
        /** @description List of the individual privilege actions that the role grants. */
        actions?: {
          /** @description Human-readable label that identifies the privilege action. */
          name: string;
          /** @description List of resources on which you grant the action. */
          resources: {
            /** @description Flag that indicates whether to grant the action on the cluster resource. If true, MongoDB Cloud ignores Database and Collection parameters. */
            cluster?: boolean;
            /** @description Human-readable label that identifies the collection on which you grant the action to one MongoDB user. */
            collection?: string;
            /** @description Human-readable label that identifies the database on which you grant the action to one MongoDB user. */
            database?: string;
          }[];
        }[];
        /** @description List of the built-in roles that this custom role inherits. */
        inheritedRoles?: {
          /** @description Human-readable label that identifies the database on which someone grants the action to one MongoDB user. */
          database: string;
          /** @description Human-readable label that identifies the role inherited. */
          name: string;
        }[];
        /** @description Human-readable label that identifies the role. This name must be unique for this custom role in this project. */
        name: string;
      }[];
      /** @description EncryptionAtRest allows to set encryption for AWS, Azure and GCP providers */
      encryptionAtRest?: {
        /** @description AwsKms specifies AWS KMS configuration details and whether Encryption at Rest is enabled for an Atlas project. */
        awsKms?: {
          enabled?: boolean;
          region?: string;
          /** @description A reference to as Secret containing the AccessKeyID, SecretAccessKey, CustomerMasterKeyID and RoleID fields */
          secretRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
          valid?: boolean;
        };
        /** @description AzureKeyVault specifies Azure Key Vault configuration details and whether Encryption at Rest is enabled for an Atlas project. */
        azureKeyVault?: {
          azureEnvironment?: string;
          clientID?: string;
          enabled?: boolean;
          resourceGroupName?: string;
          /** @description A reference to as Secret containing the SubscriptionID, KeyVaultName, KeyIdentifier, Secret fields */
          secretRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
          tenantID?: string;
        };
        /** @description GoogleCloudKms specifies GCP KMS configuration details and whether Encryption at Rest is enabled for an Atlas project. */
        googleCloudKms?: {
          enabled?: boolean;
          /** @description A reference to as Secret containing the ServiceAccountKey, KeyVersionResourceID fields */
          secretRef?: {
            /** @description Name is the name of the Kubernetes Resource */
            name: string;
            /** @description Namespace is the namespace of the Kubernetes Resource */
            namespace?: string;
          };
        };
      };
      /** @description Integrations is a list of MongoDB Atlas integrations for the project */
      integrations?: {
        accountId?: string;
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        apiKeyRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        apiTokenRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        channelName?: string;
        enabled?: boolean;
        flowName?: string;
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        licenseKeyRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        microsoftTeamsWebhookUrl?: string;
        name?: string;
        orgName?: string;
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        passwordRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        readTokenRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        region?: string;
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        routingKeyRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        scheme?: string;
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        secretRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        serviceDiscovery?: string;
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        serviceKeyRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
        teamName?: string;
        /**
         * @description Third Party Integration type such as Slack, New Relic, etc
         * @enum {string}
         */
        type?:
          | "PAGER_DUTY"
          | "SLACK"
          | "DATADOG"
          | "NEW_RELIC"
          | "OPS_GENIE"
          | "VICTOR_OPS"
          | "FLOWDOCK"
          | "WEBHOOK"
          | "MICROSOFT_TEAMS"
          | "PROMETHEUS";
        url?: string;
        username?: string;
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        writeTokenRef?: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
      }[];
      /** @description MaintenanceWindow allows to specify a preferred time in the week to run maintenance operations. See more
       *     information at https://www.mongodb.com/docs/atlas/reference/api/maintenance-windows/ */
      maintenanceWindow?: {
        /** @description Flag indicating whether any scheduled project maintenance should be deferred automatically for one week. */
        autoDefer?: boolean;
        /** @description Day of the week when you would like the maintenance window to start as a 1-based integer.
         *     Sunday 1, Monday 2, Tuesday 3, Wednesday 4, Thursday 5, Friday 6, Saturday 7 */
        dayOfWeek?: number;
        /** @description Flag indicating whether the next scheduled project maintenance should be deferred for one week.
         *     Cannot be specified if startASAP is true */
        defer?: boolean;
        /** @description Hour of the day when you would like the maintenance window to start.
         *     This parameter uses the 24-hour clock, where midnight is 0, noon is 12. */
        hourOfDay?: number;
        /** @description Flag indicating whether project maintenance has been directed to start immediately.
         *     Cannot be specified if defer is true */
        startASAP?: boolean;
      };
      /** @description Name is the name of the Project that is created in Atlas by the Operator if it doesn't exist yet. */
      name: string;
      /** @description NetworkPeers is a list of Network Peers configured for the current Project. */
      networkPeers?: {
        /** @description AccepterRegionName is the provider region name of user's vpc. */
        accepterRegionName?: string;
        /** @description Atlas CIDR. It needs to be set if ContainerID is not set. */
        atlasCidrBlock?: string;
        /** @description AccountID of the user's vpc. */
        awsAccountId?: string;
        /** @description AzureDirectoryID is the unique identifier for an Azure AD directory. */
        azureDirectoryId?: string;
        /** @description AzureSubscriptionID is the unique identifier of the Azure subscription in which the VNet resides. */
        azureSubscriptionId?: string;
        /** @description ID of the network peer container. If not set, operator will create a new container with ContainerRegion and AtlasCIDRBlock input. */
        containerId?: string;
        /** @description ContainerRegion is the provider region name of Atlas network peer container. If not set, AccepterRegionName is used. */
        containerRegion?: string;
        /** @description User GCP Project ID. Its applicable only for GCP. */
        gcpProjectId?: string;
        /** @description GCP Network Peer Name. Its applicable only for GCP. */
        networkName?: string;
        /** @description ProviderName is the name of the provider. If not set, it will be set to "AWS". */
        providerName?: string;
        /** @description ResourceGroupName is the name of your Azure resource group. */
        resourceGroupName?: string;
        /** @description User VPC CIDR. */
        routeTableCidrBlock?: string;
        /** @description VNetName is name of your Azure VNet. Its applicable only for Azure. */
        vnetName?: string;
        /** @description AWS VPC ID. */
        vpcId?: string;
      }[];
      /** @description PrivateEndpoints is a list of Private Endpoints configured for the current Project. */
      privateEndpoints?: {
        /** @description Unique identifier of the endpoint group. The endpoint group encompasses all of the endpoints that you created in Google Cloud. */
        endpointGroupName?: string;
        /** @description Collection of individual private endpoints that comprise your endpoint group. */
        endpoints?: {
          /** @description Forwarding rule that corresponds to the endpoint you created in Google Cloud. */
          endpointName?: string;
          /** @description Private IP address of the endpoint you created in Google Cloud. */
          ipAddress?: string;
        }[];
        /** @description Unique identifier of the Google Cloud project in which you created your endpoints. */
        gcpProjectId?: string;
        /** @description Unique identifier of the private endpoint you created in your AWS VPC or Azure Vnet. */
        id?: string;
        /** @description Private IP address of the private endpoint network interface you created in your Azure VNet. */
        ip?: string;
        /**
         * @description Cloud provider for which you want to retrieve a private endpoint service. Atlas accepts AWS or AZURE.
         * @enum {string}
         */
        provider: "AWS" | "GCP" | "AZURE" | "TENANT";
        /** @description Cloud provider region for which you want to create the private endpoint service. */
        region: string;
      }[];
      /** @description ProjectIPAccessList allows to enable the IP Access List for the Project. See more information at
       *     https://docs.atlas.mongodb.com/reference/api/ip-access-list/add-entries-to-access-list/ */
      projectIpAccessList?: {
        /** @description Unique identifier of AWS security group in this access list entry. */
        awsSecurityGroup?: string;
        /** @description Range of IP addresses in CIDR notation in this access list entry. */
        cidrBlock?: string;
        /** @description Comment associated with this access list entry. */
        comment?: string;
        /** @description Timestamp in ISO 8601 date and time format in UTC after which Atlas deletes the temporary access list entry. */
        deleteAfterDate?: string;
        /** @description Entry using an IP address in this access list entry. */
        ipAddress?: string;
      }[];
      /** @description RegionUsageRestrictions designate the project's AWS region when using Atlas for Government.
       *     This parameter should not be used with commercial Atlas.
       *     In Atlas for Government, not setting this field (defaulting to NONE) means the project is restricted to COMMERCIAL_FEDRAMP_REGIONS_ONLY */
      regionUsageRestrictions?: string;
      /** @description Settings allow to set Project Settings for the project */
      settings?: {
        isCollectDatabaseSpecificsStatisticsEnabled?: boolean;
        isDataExplorerEnabled?: boolean;
        isExtendedStorageSizesEnabled?: boolean;
        isPerformanceAdvisorEnabled?: boolean;
        isRealtimePerformancePanelEnabled?: boolean;
        isSchemaAdvisorEnabled?: boolean;
      };
      /** @description Teams enable you to grant project access roles to multiple users. */
      teams?: {
        /** @description Roles the users of the team has over the project */
        roles: (
          | "GROUP_OWNER"
          | "GROUP_CLUSTER_MANAGER"
          | "GROUP_DATA_ACCESS_ADMIN"
          | "GROUP_DATA_ACCESS_READ_WRITE"
          | "GROUP_DATA_ACCESS_READ_ONLY"
          | "GROUP_READ_ONLY"
        )[];
        /** @description Reference to the team which will assigned to the project */
        teamRef: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
      }[];
      /** @description Flag that indicates whether to create the new project with the default alert settings enabled. This parameter defaults to true */
      withDefaultAlertsSettings?: boolean;
      /** @description X509CertRef is the name of the Kubernetes Secret which contains PEM-encoded CA certificate */
      x509CertRef?: {
        /** @description Name is the name of the Kubernetes Resource */
        name: string;
        /** @description Namespace is the namespace of the Kubernetes Resource */
        namespace?: string;
      };
    };
    /** @description AtlasProjectStatus defines the observed state of AtlasProject */
    status?: {
      /** @description AlertConfigurations contains a list of alert configuration statuses */
      alertConfigurations?: {
        /** @description The date through which the alert has been acknowledged. Will not be present if the alert has never been acknowledged. */
        acknowledgedUntil?: string;
        /** @description The comment left by the user who acknowledged the alert. Will not be present if the alert has never been acknowledged. */
        acknowledgementComment?: string;
        /** @description The username of the user who acknowledged the alert. Will not be present if the alert has never been acknowledged. */
        acknowledgingUsername?: string;
        /** @description ID of the alert configuration that triggered this alert. */
        alertConfigId?: string;
        /** @description The ID of the cluster to which this alert applies. Only present for alerts of type BACKUP, REPLICA_SET, and CLUSTER. */
        clusterId?: string;
        /** @description The name the cluster to which this alert applies. Only present for alerts of type BACKUP, REPLICA_SET, and CLUSTER. */
        clusterName?: string;
        /** @description Timestamp in ISO 8601 date and time format in UTC when this alert configuration was created. */
        created?: string;
        /** @description CurrentValue represents current value of the metric that triggered the alert. Only present for alerts of type HOST_METRIC. */
        currentValue?: {
          /** @description The value of the metric. */
          number?: string;
          /** @description The units for the value. Depends on the type of metric. */
          units?: string;
        };
        /** @description If omitted, the configuration is disabled. */
        enabled?: boolean;
        /** @description ErrorMessage is massage if the alert configuration is in an incorrect state. */
        errorMessage?: string;
        /** @description The type of event that will trigger an alert. */
        eventTypeName?: string;
        /** @description Unique identifier of the project that owns this alert configuration. */
        groupId?: string;
        /** @description ID of the host to which the metric pertains. Only present for alerts of type HOST, HOST_METRIC, and REPLICA_SET. */
        hostId?: string;
        /** @description The hostname and port of each host to which the alert applies. Only present for alerts of type HOST, HOST_METRIC, and REPLICA_SET. */
        hostnameAndPort?: string;
        /** @description Unique identifier. */
        id?: string;
        /** @description When the last notification was sent for this alert. Only present if notifications have been sent. */
        lastNotified?: string;
        /** @description You can filter using the matchers array only when the EventTypeName specifies an event for a host, replica set, or sharded cluster. */
        matchers?: {
          /** @description Name of the field in the target object to match on. */
          fieldName?: string;
          /** @description The operator to test the field’s value. */
          operator?: string;
          /** @description Value to test with the specified operator. */
          value?: string;
        }[];
        /** @description The name of the measurement whose value went outside the threshold. Only present if eventTypeName is set to OUTSIDE_METRIC_THRESHOLD. */
        metricName?: string;
        /** @description MetricThreshold  causes an alert to be triggered. */
        metricThreshold?: {
          /** @description Name of the metric to check. */
          metricName?: string;
          /** @description This must be set to AVERAGE. Atlas computes the current metric value as an average. */
          mode?: string;
          /** @description Operator to apply when checking the current metric value against the threshold value. */
          operator?: string;
          /** @description Threshold value outside which an alert will be triggered. */
          threshold: string;
          /** @description The units for the threshold value. */
          units?: string;
        };
        /** @description Notifications are sending when an alert condition is detected. */
        notifications?: {
          /** @description Slack API token or Bot token. Populated for the SLACK notifications type. If the token later becomes invalid, Atlas sends an email to the project owner and eventually removes the token. */
          apiToken?: string;
          /** @description Slack channel name. Populated for the SLACK notifications type. */
          channelName?: string;
          /** @description Datadog API Key. Found in the Datadog dashboard. Populated for the DATADOG notifications type. */
          datadogApiKey?: string;
          /** @description Region that indicates which API URL to use */
          datadogRegion?: string;
          /** @description Number of minutes to wait after an alert condition is detected before sending out the first notification. */
          delayMin?: number;
          /** @description Email address to which alert notifications are sent. Populated for the EMAIL notifications type. */
          emailAddress?: string;
          /** @description Flag indicating if email notifications should be sent. Populated for ORG, GROUP, and USER notifications types. */
          emailEnabled?: boolean;
          /** @description Flowdock flow namse in lower-case letters. */
          flowName?: string;
          /** @description The Flowdock personal API token. Populated for the FLOWDOCK notifications type. If the token later becomes invalid, Atlas sends an email to the project owner and eventually removes the token. */
          flowdockApiToken?: string;
          /** @description Number of minutes to wait between successive notifications for unacknowledged alerts that are not resolved. */
          intervalMin?: number;
          /** @description Mobile number to which alert notifications are sent. Populated for the SMS notifications type. */
          mobileNumber?: string;
          /** @description Opsgenie API Key. Populated for the OPS_GENIE notifications type. If the key later becomes invalid, Atlas sends an email to the project owner and eventually removes the token. */
          opsGenieApiKey?: string;
          /** @description Region that indicates which API URL to use. */
          opsGenieRegion?: string;
          /** @description Flowdock organization name in lower-case letters. This is the name that appears after www.flowdock.com/app/ in the URL string. Populated for the FLOWDOCK notifications type. */
          orgName?: string;
          /** @description The following roles grant privileges within a project. */
          roles?: string[];
          /** @description PagerDuty service key. Populated for the PAGER_DUTY notifications type. If the key later becomes invalid, Atlas sends an email to the project owner and eventually removes the key. */
          serviceKey?: string;
          /** @description Flag indicating if text message notifications should be sent. Populated for ORG, GROUP, and USER notifications types. */
          smsEnabled?: boolean;
          /** @description Unique identifier of a team. */
          teamId?: string;
          /** @description Label for the team that receives this notification. */
          teamName?: string;
          /** @description Type of alert notification. */
          typeName?: string;
          /** @description Name of the Atlas user to which to send notifications. Only a user in the project that owns the alert configuration is allowed here. Populated for the USER notifications type. */
          username?: string;
          /** @description VictorOps API key. Populated for the VICTOR_OPS notifications type. If the key later becomes invalid, Atlas sends an email to the project owner and eventually removes the key. */
          victorOpsApiKey?: string;
          /** @description VictorOps routing key. Populated for the VICTOR_OPS notifications type. If the key later becomes invalid, Atlas sends an email to the project owner and eventually removes the key. */
          victorOpsRoutingKey?: string;
        }[];
        /** @description Name of the replica set. Only present for alerts of type HOST, HOST_METRIC, BACKUP, and REPLICA_SET. */
        replicaSetName?: string;
        /** @description When the alert was closed. Only present if the status is CLOSED. */
        resolved?: string;
        /** @description For alerts of the type BACKUP, the type of server being backed up. */
        sourceTypeName?: string;
        /** @description The current state of the alert. Possible values are: TRACKING, OPEN, CLOSED, CANCELED */
        status?: string;
        /** @description Threshold  causes an alert to be triggered. */
        threshold?: {
          /** @description Operator to apply when checking the current metric value against the threshold value. it accepts the following values: GREATER_THAN, LESS_THAN */
          operator?: string;
          /** @description Threshold value outside which an alert will be triggered. */
          threshold?: string;
          /** @description The units for the threshold value */
          units?: string;
        };
        /** @description Timestamp in ISO 8601 date and time format in UTC when this alert configuration was last updated. */
        updated?: string;
      }[];
      /** @description AuthModes contains a list of configured authentication modes
       *     "SCRAM" is default authentication method and requires a password for each user
       *     "X509" signifies that self-managed X.509 authentication is configured */
      authModes?: string[];
      /** @description CloudProviderIntegrations contains a list of configured cloud provider access roles. AWS support only */
      cloudProviderIntegrations?: {
        atlasAWSAccountArn?: string;
        atlasAssumedRoleExternalId: string;
        authorizedDate?: string;
        createdDate?: string;
        errorMessage?: string;
        featureUsages?: {
          featureId?: string;
          featureType?: string;
        }[];
        iamAssumedRoleArn?: string;
        providerName: string;
        roleId?: string;
        status?: string;
      }[];
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
      /** @description CustomRoles contains a list of custom roles statuses */
      customRoles?: {
        /** @description The message when the custom role is in the FAILED status */
        error?: string;
        /** @description Role name which is unique */
        name: string;
        /** @description The status of the given custom role (OK or FAILED) */
        status: string;
      }[];
      /** @description The list of IP Access List entries that are expired due to 'deleteAfterDate' being less than the current date.
       *     Note, that this field is updated by the Atlas Operator only after specification changes */
      expiredIpAccessList?: {
        /** @description Unique identifier of AWS security group in this access list entry. */
        awsSecurityGroup?: string;
        /** @description Range of IP addresses in CIDR notation in this access list entry. */
        cidrBlock?: string;
        /** @description Comment associated with this access list entry. */
        comment?: string;
        /** @description Timestamp in ISO 8601 date and time format in UTC after which Atlas deletes the temporary access list entry. */
        deleteAfterDate?: string;
        /** @description Entry using an IP address in this access list entry. */
        ipAddress?: string;
      }[];
      /** @description The ID of the Atlas Project */
      id?: string;
      /** @description The list of network peers that are configured for current project */
      networkPeers?: {
        /** @description ProjectID of Atlas container. Applicable only for GCP. It's needed to add network peer connection. */
        atlasGcpProjectId?: string;
        /** @description Atlas Network Name. Applicable only for GCP. It's needed to add network peer connection. */
        atlasNetworkName?: string;
        /** @description Unique identifier of the network peer connection. Applicable only for AWS. */
        connectionId?: string;
        /** @description ContainerID of Atlas network peer container. */
        containerId?: string;
        /** @description Error state of the network peer. Applicable only for GCP. */
        errorMessage?: string;
        /** @description Error state of the network peer. Applicable only for Azure. */
        errorState?: string;
        /** @description Error state of the network peer. Applicable only for AWS. */
        errorStateName?: string;
        /** @description ProjectID of the user's vpc. Applicable only for GCP. */
        gcpProjectId?: string;
        /** @description Unique identifier for NetworkPeer. */
        id: string;
        /** @description Cloud provider for which you want to retrieve a network peer. */
        providerName: string;
        /** @description Region for which you want to create the network peer. It isn't needed for GCP */
        region: string;
        /** @description Status of the network peer. Applicable only for GCP and Azure. */
        status?: string;
        /** @description Status of the network peer. Applicable only for AWS. */
        statusName?: string;
        /** @description VPC is general purpose field for storing the name of the VPC.
         *     VPC is vpcID for AWS, user networkName for GCP, and vnetName for Azure. */
        vpc?: string;
      }[];
      /**
       * Format: int64
       * @description ObservedGeneration indicates the generation of the resource specification that the Atlas Operator is aware of.
       *     The Atlas Operator updates this field to the 'metadata.generation' as soon as it starts reconciliation of the resource.
       */
      observedGeneration?: number;
      /** @description The list of private endpoints configured for current project */
      privateEndpoints?: {
        /** @description Collection of individual GCP private endpoints that comprise your network endpoint group. */
        endpoints?: {
          endpointName: string;
          ipAddress: string;
          status: string;
        }[];
        /** @description Unique identifier for AWS or AZURE Private Link Connection. */
        id?: string;
        /** @description Unique identifier of the AWS or Azure Private Link Interface Endpoint. */
        interfaceEndpointId?: string;
        /** @description Cloud provider for which you want to retrieve a private endpoint service. Atlas accepts AWS or AZURE. */
        provider: string;
        /** @description Cloud provider region for which you want to create the private endpoint service. */
        region: string;
        /** @description Unique alphanumeric and special character strings that identify the service attachments associated with the GCP Private Service Connect endpoint service. */
        serviceAttachmentNames?: string[];
        /** @description Name of the AWS or Azure Private Link Service that Atlas manages. */
        serviceName?: string;
        /** @description Unique identifier of the Azure Private Link Service (for AWS the same as ID). */
        serviceResourceId?: string;
      }[];
      /** @description Prometheus contains the status for Prometheus integration
       *     including the prometheusDiscoveryURL */
      prometheus?: {
        prometheusDiscoveryURL?: string;
        scheme?: string;
      };
      /** @description Teams contains a list of teams assignment statuses */
      teams?: {
        id?: string;
        /** @description ResourceRefNamespaced is a reference to a Kubernetes Resource that allows to configure the namespace */
        teamRef: {
          /** @description Name is the name of the Kubernetes Resource */
          name: string;
          /** @description Namespace is the namespace of the Kubernetes Resource */
          namespace?: string;
        };
      }[];
    };
  };
}
