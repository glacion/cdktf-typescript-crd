import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesGKEHubFeatureV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesGKEHubFeatureV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "gkehub.cnrm.cloud.google.com/v1beta1", kind: "GKEHubFeature", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesGKEHubFeatureV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. The location for the resource */
      location: string;
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project for the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused. */
      spec?: {
        /** @description Fleet Observability spec. */
        fleetobservability?: {
          /** @description Fleet Observability Logging-specific spec. */
          loggingConfig?: {
            /** @description Specified if applying the default routing config to logs not specified in other configs. */
            defaultConfig?: {
              /** @description The logs routing mode Possible values: MODE_UNSPECIFIED, COPY, MOVE */
              mode?: string;
            };
            /** @description Specified if applying the routing config to all logs for all fleet scopes. */
            fleetScopeLogsConfig?: {
              /** @description The logs routing mode Possible values: MODE_UNSPECIFIED, COPY, MOVE */
              mode?: string;
            };
          };
        };
        /** @description Multicluster Ingress-specific spec. */
        multiclusteringress?: {
          configMembershipRef: {
            /** @description Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
             *
             *     Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`). */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown);
        };
      };
    };
  };
}
