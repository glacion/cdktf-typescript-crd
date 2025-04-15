import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesDNSRecordSetV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesDNSRecordSetV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "dns.cnrm.cloud.google.com/v1beta1", kind: "DNSRecordSet", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesDNSRecordSetV1beta1Config extends ManifestConfig {
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
      managedZoneRef: {
        /** @description Allowed value: The `name` field of a `DNSManagedZone` resource. */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. The DNS name this record set will apply to. */
      name: string;
      /** @description The configuration for steering traffic based on query. You can specify either Weighted Round Robin(WRR) type or Geolocation(GEO) type. */
      routingPolicy?: {
        /** @description Specifies whether to enable fencing for geo queries. */
        enableGeoFencing?: boolean;
        /** @description The configuration for Geo location based routing policy. */
        geo?: {
          /** @description For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item. */
          healthCheckedTargets?: {
            /** @description The list of internal load balancers to health check. */
            internalLoadBalancers: {
              ipAddressRef: {
                /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. */
              ipProtocol: string;
              /** @description The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. */
              loadBalancerType: string;
              networkRef: {
                /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description The configured port of the load balancer. */
              port: string;
              projectRef: {
                /** @description Allowed value: The `name` field of a `Project` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              regionRef?: {
                /** @description Allowed value: The `location` field of a `ComputeForwardingRule` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
            }[];
          };
          /** @description The location name defined in Google Cloud. */
          location: string;
          rrdatasRefs?: ({
            /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
            external?: string;
            /** @description Kind of the referent. Allowed values: ComputeAddress */
            kind?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
        }[];
        /** @description The configuration for a primary-backup policy with global to regional failover. Queries are responded to with the global primary targets, but if none of the primary targets are healthy, then we fallback to a regional failover policy. */
        primaryBackup?: {
          /** @description The backup geo targets, which provide a regional failover policy for the otherwise global primary targets. */
          backupGeo: {
            /** @description For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item. */
            healthCheckedTargets?: {
              /** @description The list of internal load balancers to health check. */
              internalLoadBalancers: {
                ipAddressRef: {
                  /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                /** @description The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. */
                ipProtocol: string;
                /** @description The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. */
                loadBalancerType: string;
                networkRef: {
                  /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                /** @description The configured port of the load balancer. */
                port: string;
                projectRef: {
                  /** @description Allowed value: The `name` field of a `Project` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                regionRef?: {
                  /** @description Allowed value: The `location` field of a `ComputeForwardingRule` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
              }[];
            };
            /** @description The location name defined in Google Cloud. */
            location: string;
            rrdatasRefs?: ({
              /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown))[];
          }[];
          /** @description Specifies whether to enable fencing for backup geo queries. */
          enableGeoFencingForBackups?: boolean;
          /** @description The list of global primary targets to be health checked. */
          primary: {
            /** @description The list of internal load balancers to health check. */
            internalLoadBalancers: {
              ipAddressRef: {
                /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. */
              ipProtocol: string;
              /** @description The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. */
              loadBalancerType: string;
              networkRef: {
                /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description The configured port of the load balancer. */
              port: string;
              projectRef: {
                /** @description Allowed value: The `name` field of a `Project` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              regionRef?: {
                /** @description Allowed value: The `location` field of a `ComputeForwardingRule` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
            }[];
          };
          /** @description Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy. */
          trickleRatio?: number;
        };
        /** @description The configuration for Weighted Round Robin based routing policy. */
        wrr?: {
          /** @description The list of targets to be health checked. Note that if DNSSEC is enabled for this zone, only one of `rrdatas` or `health_checked_targets` can be set. */
          healthCheckedTargets?: {
            /** @description The list of internal load balancers to health check. */
            internalLoadBalancers: {
              ipAddressRef: {
                /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. */
              ipProtocol: string;
              /** @description The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. */
              loadBalancerType: string;
              networkRef: {
                /** @description Allowed value: The `selfLink` field of a `ComputeNetwork` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              /** @description The configured port of the load balancer. */
              port: string;
              projectRef: {
                /** @description Allowed value: The `name` field of a `Project` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
              regionRef?: {
                /** @description Allowed value: The `location` field of a `ComputeForwardingRule` resource. */
                external?: string;
                /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                name?: string;
                /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                namespace?: string;
              } & (unknown | unknown);
            }[];
          };
          rrdatasRefs?: ({
            /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
            external?: string;
            /** @description Kind of the referent. Allowed values: ComputeAddress */
            kind?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
          /** @description The ratio of traffic routed to the target. */
          weight: number;
        }[];
      };
      /** @description DEPRECATED. Although this field is still available, there is limited support. We recommend that you use `spec.rrdatasRefs` instead. */
      rrdatas?: string[];
      rrdatasRefs?: ({
        /** @description Allowed value: The `address` field of a `ComputeAddress` resource. */
        external?: string;
        /** @description Kind of the referent. Allowed values: ComputeAddress */
        kind?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown))[];
      /** @description The time-to-live of this record set (seconds). */
      ttl?: number;
      /** @description The DNS record set type. */
      type: string;
    } & (unknown | unknown | unknown);
  };
}
