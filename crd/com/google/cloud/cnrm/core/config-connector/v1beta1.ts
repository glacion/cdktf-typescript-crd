import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesConfigConnectorV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesConfigConnectorV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesConfigConnectorV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "core.cnrm.cloud.google.com/v1beta1";
    kind: "ConfigConnector";
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
    /** @description ConfigConnectorSpec defines the desired state of ConfigConnector */
    spec?:
      | {
          /** @description The actuation mode of Config Connector controls how resources are actuated onto the cloud provider.
           *     This can be either 'Reconciling' or 'Paused'.
           *     In 'Paused', k8s resources are still reconciled with the api server but not actuated onto the cloud provider.
           *     If Config Connector is running in 'namespaced' mode, then the value in ConfigConnectorContext (CCC) takes precedence.
           *     If CCC doesn't define a value but ConfigConnector (CC) does, we defer to that value. Otherwise,
           *     the default is 'Reconciling' where resources get actuated. */
          actuationMode?: string;
          /** @description The Kubernetes secret that contains the Google Service Account Key's credentials to be used by ConfigConnector to authenticate with Google Cloud APIs. This field is used only when in cluster mode.
           *     It's recommended to use `googleServiceAccount` when running ConfigConnector in Google Kubernetes Engine (GKE) clusters with Workload Identity enabled.
           *     This field cannot be specified together with `googleServiceAccount`. */
          credentialSecretName?: string;
          /** @description The Google Service Account to be used by Config Connector to authenticate with Google Cloud APIs. This field is used only when running in cluster mode with Workload Identity enabled.
           *     See Google Kubernetes Engine (GKE) workload-identity (https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity) for details. This field cannot be specified together with `credentialSecretName`.
           *     For namespaced mode, use `googleServiceAccount` in ConfigConnectorContext CRD to specify the Google Service Account to be used to authenticate with Google Cloud APIs per namespace. */
          googleServiceAccount?: string;
          /** @description The mode that Config Connector will run in. This can be either 'cluster' or 'namespaced'. The default is 'namespaced'.
           *     Cluster mode uses a single Google Service Account to create and manage resources, even if you are using Config Connector to manage multiple Projects.
           *     You must specify either `credentialSecretName` or `googleServiceAccount` when in cluster mode, but not both.
           *     Namespaced mode allows you to use different Google service accounts for different Projects.
           *     When in namespaced mode, you must create a ConfigConnectorContext object per namespace that you want to enable Config Connector in, and each must set `googleServiceAccount` to specify the Google Service Account to be used to authenticate with Google Cloud APIs for the namespace. */
          mode?: string;
          /** @description StateIntoSpec is the user override of the default value for the
           *     'cnrm.cloud.google.com/state-into-spec' annotation if the annotation is
           *     unset for a resource.
           *     If the field is set in both the ConfigConnector object and the
           *     ConfigConnectorContext object is in the namespaced mode, then the value
           *     in the ConfigConnectorContext object will be used.
           *     'Absent' means that unspecified fields in the resource spec stay
           *     unspecified after successful reconciliation.
           *     'Merge' means that unspecified fields in the resource spec are populated
           *     after a successful reconciliation if those unspecified fields are
           *     computed/defaulted by the API. It is only applicable to resources
           *     supporting the 'Merge' option. */
          stateIntoSpec?: string;
        }
      | ({
          mode?: unknown;
        } & (unknown | unknown))
      | {
          mode?: unknown;
        };
    /** @description ConfigConnectorStatus defines the observed state of ConfigConnector */
    status?: {
      errors?: string[];
      healthy: boolean;
      phase?: string;
    };
  };
}
