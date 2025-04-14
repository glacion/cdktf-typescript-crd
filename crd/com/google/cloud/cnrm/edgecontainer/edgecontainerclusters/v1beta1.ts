import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesEdgeContainerClusterV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesEdgeContainerClusterV1beta1Config) {
    super(scope, id, {
      manifest: {
        apiVersion: "edgecontainer.cnrm.cloud.google.com/v1beta1",
        kind: "EdgeContainerCluster",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesEdgeContainerClusterV1beta1Config extends ManifestConfig {
  manifest: {
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
    spec: {
      /** @description Immutable. RBAC policy that will be applied and managed by GEC. */
      authorization: {
        /** @description User that will be granted the cluster-admin role on the cluster, providing
         *     full access to the cluster. Currently, this is a singular field, but will
         *     be expanded to allow multiple admins in the future. */
        adminUsers: {
          usernameRef: {
            /** @description Allowed value: The `email` field of an `IAMServiceAccount` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
      };
      /** @description The configuration of the cluster control plane. */
      controlPlane?: {
        /** @description Immutable. Local control plane configuration. */
        local?: {
          /** @description Only machines matching this filter will be allowed to host control
           *     plane nodes. The filtering language accepts strings like "name=<name>",
           *     and is documented here: [AIP-160](https://google.aip.dev/160). */
          machineFilter?: string;
          /** @description The number of nodes to serve as replicas of the Control Plane.
           *     Only 1 and 3 are supported. */
          nodeCount?: number;
          /** @description Immutable. Name of the Google Distributed Cloud Edge zones where this node pool
           *     will be created. For example: 'us-central1-edge-customer-a'. */
          nodeLocation?: string;
          /** @description Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"]. */
          sharedDeploymentPolicy?: string;
        };
        /** @description Immutable. Remote control plane configuration. */
        remote?: {
          /** @description Immutable. Name of the Google Distributed Cloud Edge zones where this node pool
           *     will be created. For example: 'us-central1-edge-customer-a'. */
          nodeLocation?: string;
        };
      };
      /** @description Remote control plane disk encryption options. This field is only used when
       *     enabling CMEK support. */
      controlPlaneEncryption?: {
        /** @description The Cloud KMS CryptoKeyVersion currently in use for protecting control
         *     plane disks. Only applicable if kms_key is set. */
        kmsKeyActiveVersion?: string;
        kmsKeyRef?: {
          /** @description Allowed value: The `selfLink` field of a `KMSCryptoKey` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Availability of the Cloud KMS CryptoKey. If not 'KEY_AVAILABLE', then
         *     nodes may go offline as they cannot access their local data. This can be
         *     caused by a lack of permissions to use the key, or if the key is disabled
         *     or deleted. */
        kmsKeyState?: string;
        /** @description Error status returned by Cloud KMS when using this key. This field may be
         *     populated only if 'kms_key_state' is not 'KMS_KEY_STATE_KEY_AVAILABLE'.
         *     If populated, this field contains the error status reported by Cloud KMS. */
        kmsStatus?: {
          /** @description The status code, which should be an enum value of google.rpc.Code. */
          code?: number;
          /** @description A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
          message?: string;
        }[];
      };
      /** @description The default maximum number of pods per node used if a maximum value is not
       *     specified explicitly for a node pool in this cluster. If unspecified, the
       *     Kubernetes default value will be used. */
      defaultMaxPodsPerNode?: number;
      /** @description Address pools for cluster data plane external load balancing. */
      externalLoadBalancerIpv4AddressPools?: string[];
      /** @description Immutable. Fleet related configuration.
       *     Fleets are a Google Cloud concept for logically organizing clusters,
       *     letting you use and manage multi-cluster capabilities and apply
       *     consistent policies across your systems. */
      fleet: {
        /** @description The name of the managed Hub Membership resource associated to this cluster.
         *     Membership names are formatted as
         *     'projects/<project-number>/locations/global/membership/<cluster-id>'. */
        membership?: string;
        /** @description The number of the Fleet host project where this cluster will be registered. */
        projectRef: {
          /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Immutable. The location of the resource. */
      location: string;
      /** @description Cluster-wide maintenance policy configuration. */
      maintenancePolicy?: {
        /** @description Specifies the maintenance window in which maintenance may be performed. */
        window: {
          /** @description Represents an arbitrary window of time that recurs. */
          recurringWindow: {
            /** @description An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
             *     this window recurs. They go on for the span of time between the start and
             *     end time. */
            recurrence?: string;
            /** @description Represents an arbitrary window of time. */
            window?: {
              /** @description The time that the window ends. The end time must take place after the
               *     start time. */
              endTime?: string;
              /** @description The time that the window first starts. */
              startTime?: string;
            };
          };
        };
      };
      /** @description Fleet related configuration.
       *     Fleets are a Google Cloud concept for logically organizing clusters,
       *     letting you use and manage multi-cluster capabilities and apply
       *     consistent policies across your systems. */
      networking: {
        /** @description Immutable. All pods in the cluster are assigned an RFC1918 IPv4 address from these
         *     blocks. Only a single block is supported. This field cannot be changed
         *     after creation. */
        clusterIpv4CidrBlocks: string[];
        /** @description Immutable. If specified, dual stack mode is enabled and all pods in the cluster are
         *     assigned an IPv6 address from these blocks alongside from an IPv4
         *     address. Only a single block is supported. This field cannot be changed
         *     after creation. */
        clusterIpv6CidrBlocks?: string[];
        /** @description IP addressing type of this cluster i.e. SINGLESTACK_V4 vs DUALSTACK_V4_V6. */
        networkType?: string;
        /** @description Immutable. All services in the cluster are assigned an RFC1918 IPv4 address from these
         *     blocks. Only a single block is supported. This field cannot be changed
         *     after creation. */
        servicesIpv4CidrBlocks: string[];
        /** @description Immutable. If specified, dual stack mode is enabled and all services in the cluster are
         *     assigned an IPv6 address from these blocks alongside from an IPv4
         *     address. Only a single block is supported. This field cannot be changed
         *     after creation. */
        servicesIpv6CidrBlocks?: string[];
      };
      /** @description The project that this resource belongs to. */
      projectRef: {
        /** @description Allowed value: The `name` field of a `Project` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]. */
      releaseChannel?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Config that customers are allowed to define for GDCE system add-ons. */
      systemAddonsConfig?: {
        /** @description Config for the Ingress add-on which allows customers to create an Ingress
         *     object to manage external access to the servers in a cluster. The add-on
         *     consists of istiod and istio-ingress. */
        ingress?: {
          /** @description Whether Ingress is disabled. */
          disabled?: boolean;
          /** @description Ingress VIP. */
          ipv4Vip?: string;
        };
      };
      /** @description The target cluster version. For example: "1.5.0". */
      targetVersion?: string;
    };
  };
}
