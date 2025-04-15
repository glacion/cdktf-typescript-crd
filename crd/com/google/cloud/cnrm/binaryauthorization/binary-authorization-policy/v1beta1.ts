import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesBinaryAuthorizationPolicyV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesBinaryAuthorizationPolicyV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesBinaryAuthorizationPolicyV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "binaryauthorization.cnrm.cloud.google.com/v1beta1";
    kind: "BinaryAuthorizationPolicy";
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
      /** @description Optional. Admission policy allowlisting. A matching admission request will always be permitted. This feature is typically used to exclude Google or third-party infrastructure images from Binary Authorization policies. */
      admissionWhitelistPatterns?: {
        /** @description An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` as a wildcard, but this is allowed only in text after the `registry/` part. */
        namePattern?: string;
      }[];
      /** @description Optional. Per-cluster admission rules. Cluster spec format: location.clusterId. There can be at most one admission rule per cluster spec. A location is either a compute zone (e.g. us-central1-a) or a region (e.g. us-central1). For clusterId syntax restrictions see https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters. */
      clusterAdmissionRules?: {
        [key: string]: {
          /** @description Required. The action when a pod creation is denied by the admission rule. Possible values: ENFORCEMENT_MODE_UNSPECIFIED, ENFORCED_BLOCK_AND_AUDIT_LOG, DRYRUN_AUDIT_LOG_ONLY */
          enforcementMode: string;
          /** @description Required. How this admission rule will be evaluated. Possible values: ALWAYS_ALLOW, ALWAYS_DENY, REQUIRE_ATTESTATION */
          evaluationMode: string;
          requireAttestationsBy?: ({
            /** @description Allowed value: The Google Cloud resource name of a `BinaryAuthorizationAttestor` resource (format: `projects/{{project}}/attestors/{{name}}`). */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
        };
      };
      /** @description Required. Default admission rule for a cluster without a per-cluster, per-kubernetes-service-account, or per-istio-service-identity admission rule. */
      defaultAdmissionRule: {
        /** @description Required. The action when a pod creation is denied by the admission rule. Possible values: ENFORCEMENT_MODE_UNSPECIFIED, ENFORCED_BLOCK_AND_AUDIT_LOG, DRYRUN_AUDIT_LOG_ONLY */
        enforcementMode: string;
        /** @description Required. How this admission rule will be evaluated. Possible values: ALWAYS_ALLOW, ALWAYS_DENY, REQUIRE_ATTESTATION */
        evaluationMode: string;
        requireAttestationsBy?: ({
          /** @description Allowed value: The Google Cloud resource name of a `BinaryAuthorizationAttestor` resource (format: `projects/{{project}}/attestors/{{name}}`). */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown))[];
      };
      /** @description Optional. A descriptive comment. */
      description?: string;
      /** @description Optional. Controls the evaluation of a Google-maintained global admission policy for common system-level images. Images not covered by the global policy will be subject to the project admission policy. This setting has no effect when specified inside a global admission policy. Possible values: GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED, ENABLE, DISABLE */
      globalPolicyEvaluationMode?: string;
      /** @description Optional. Per-istio-service-identity admission rules. Istio service identity spec format: spiffe:///ns//sa/ or /ns//sa/ e.g. spiffe://example.com/ns/test-ns/sa/default */
      istioServiceIdentityAdmissionRules?: {
        [key: string]: {
          /** @description Required. The action when a pod creation is denied by the admission rule. Possible values: ENFORCEMENT_MODE_UNSPECIFIED, ENFORCED_BLOCK_AND_AUDIT_LOG, DRYRUN_AUDIT_LOG_ONLY */
          enforcementMode: string;
          /** @description Required. How this admission rule will be evaluated. Possible values: ALWAYS_ALLOW, ALWAYS_DENY, REQUIRE_ATTESTATION */
          evaluationMode: string;
          requireAttestationsBy?: ({
            /** @description Allowed value: The Google Cloud resource name of a `BinaryAuthorizationAttestor` resource (format: `projects/{{project}}/attestors/{{name}}`). */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
        };
      };
      /** @description Optional. Per-kubernetes-namespace admission rules. K8s namespace spec format: [a-z.-]+, e.g. 'some-namespace' */
      kubernetesNamespaceAdmissionRules?: {
        [key: string]: {
          /** @description Required. The action when a pod creation is denied by the admission rule. Possible values: ENFORCEMENT_MODE_UNSPECIFIED, ENFORCED_BLOCK_AND_AUDIT_LOG, DRYRUN_AUDIT_LOG_ONLY */
          enforcementMode: string;
          /** @description Required. How this admission rule will be evaluated. Possible values: ALWAYS_ALLOW, ALWAYS_DENY, REQUIRE_ATTESTATION */
          evaluationMode: string;
          requireAttestationsBy?: ({
            /** @description Allowed value: The Google Cloud resource name of a `BinaryAuthorizationAttestor` resource (format: `projects/{{project}}/attestors/{{name}}`). */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
        };
      };
      /** @description Optional. Per-kubernetes-service-account admission rules. Service account spec format: namespace:serviceaccount. e.g. 'test-ns:default' */
      kubernetesServiceAccountAdmissionRules?: {
        [key: string]: {
          /** @description Required. The action when a pod creation is denied by the admission rule. Possible values: ENFORCEMENT_MODE_UNSPECIFIED, ENFORCED_BLOCK_AND_AUDIT_LOG, DRYRUN_AUDIT_LOG_ONLY */
          enforcementMode: string;
          /** @description Required. How this admission rule will be evaluated. Possible values: ALWAYS_ALLOW, ALWAYS_DENY, REQUIRE_ATTESTATION */
          evaluationMode: string;
          requireAttestationsBy?: ({
            /** @description Allowed value: The Google Cloud resource name of a `BinaryAuthorizationAttestor` resource (format: `projects/{{project}}/attestors/{{name}}`). */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
        };
      };
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project of the resource.
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
    };
    status?: {
      /** @description Conditions represent the latest available observation of the resource's current state. */
      conditions?: {
        /** @description Last time the condition transitioned from one status to another. */
        lastTransitionTime?: string;
        /** @description Human-readable message indicating details about last transition. */
        message?: string;
        /** @description Unique, one-word, CamelCase reason for the condition's last transition. */
        reason?: string;
        /** @description Status is the status of the condition. Can be True, False, Unknown. */
        status?: string;
        /** @description Type is the type of the condition. */
        type?: string;
      }[];
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      /** @description Output only. The resource name, in the format `projects/*\/policy`. There is at most one policy per project. */
      selfLink?: string;
      /**
       * Format: date-time
       * @description Output only. Time when the policy was last updated.
       */
      updateTime?: string;
    };
  };
}
