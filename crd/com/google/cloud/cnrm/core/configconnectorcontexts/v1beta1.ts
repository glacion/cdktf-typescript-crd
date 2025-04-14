import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesConfigConnectorContextV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesConfigConnectorContextV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "core.cnrm.cloud.google.com/v1beta1", kind: "ConfigConnectorContext", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesConfigConnectorContextV1beta1Config extends ManifestConfig {
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
    /** @description ConfigConnectorContext is the Schema for the ConfigConnectorContexts API */
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
      /** @description ConfigConnectorContextSpec defines the desired state of ConfigConnectorContext */
      spec: {
        /** @description The actuation mode of Config Connector controls how resources are actuated onto the cloud provider.
         *     This can be either 'Reconciling' or 'Paused'. The default is 'Reconciling' where resources get actuated.
         *     In 'Paused', k8s resources are still reconciled with the api server but not actuated onto the cloud provider. */
        actuationMode?: string;
        /** @description Specifies the project to use for preconditions, quota and billing.
         *     Should only be used when requestProjectPolicy is set to BILLING_PROJECT. */
        billingProject?: string;
        /** @description The Google Service Account to be used by Config Connector to
         *     authenticate with Google Cloud APIs in the associated namespace. */
        googleServiceAccount: string;
        /** @description Specifies which project to use for preconditions, quota, and billing for
         *     requests made to Google Cloud APIs for resources in the associated
         *     namespace. Must be one of 'SERVICE_ACCOUNT_PROJECT',
         *     'RESOURCE_PROJECT', or 'BILLING_PROJECT. Defaults to 'SERVICE_ACCOUNT_PROJECT'. If set to
         *     'SERVICE_ACCOUNT_PROJECT', uses the project that the Google Service
         *     Account belongs to. If set to 'RESOURCE_PROJECT', uses the project that
         *     the resource belongs to. If set to 'BILLING_PROJECT', uses the project specified by spec.billingProject. */
        requestProjectPolicy?: string;
        /** @description StateIntoSpec is the user override of the default value for the
         *     'cnrm.cloud.google.com/state-into-spec' annotation if the annotation is
         *     unset for a resource.
         *     'Absent' means that unspecified fields in the resource spec stay
         *     unspecified after successful reconciliation.
         *     'Merge' means that unspecified fields in the resource spec are populated
         *     after a successful reconciliation if those unspecified fields are
         *     computed/defaulted by the API. It is only applicable to resources
         *     supporting the 'Merge' option. */
        stateIntoSpec?: string;
        /** @description Version specifies the exact addon version to be deployed, eg 1.2.3
         *     Only limited versions are supported; currently we are only supporting
         *     the operator version and the previous minor version. */
        version?: string;
      };
      /** @description ConfigConnectorContextStatus defines the observed state of ConfigConnectorContext */
      status?: {
        errors?: string[];
        healthy: boolean;
        phase?: string;
      };
    };
  };
}
