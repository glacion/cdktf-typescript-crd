import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KyvernoIoUpdateRequestV2 extends Manifest {
  constructor(scope: Construct, id: string, config: KyvernoIoUpdateRequestV2Config) {
    super(scope, id, config);
  }
}
export interface KyvernoIoUpdateRequestV2Config extends ManifestConfig {
  manifest: {
    apiVersion: "kyverno.io/v2";
    kind: "UpdateRequest";
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
    /** @description ResourceSpec is the information to identify the trigger resource. */
    spec?: {
      /** @description Context represents admission request context.
       *     It is used upon admission review only and is shared across rules within the same UR. */
      context: {
        /** @description AdmissionRequestInfoObject stores the admission request and operation details */
        admissionRequestInfo?: {
          /** @description AdmissionRequest describes the admission.Attributes for the admission request. */
          admissionRequest?: {
            /** @description DryRun indicates that modifications will definitely not be persisted for this request.
             *     Defaults to false. */
            dryRun?: boolean;
            /** @description Kind is the fully-qualified type of object being submitted (for example, v1.Pod or autoscaling.v1.Scale) */
            kind: {
              group: string;
              kind: string;
              version: string;
            };
            /** @description Name is the name of the object as presented in the request.  On a CREATE operation, the client may omit name and
             *     rely on the server to generate the name.  If that is the case, this field will contain an empty string. */
            name?: string;
            /** @description Namespace is the namespace associated with the request (if any). */
            namespace?: string;
            /** @description Object is the object from the incoming request. */
            object?: Record<string, never>;
            /** @description OldObject is the existing object. Only populated for DELETE and UPDATE requests. */
            oldObject?: Record<string, never>;
            /** @description Operation is the operation being performed. This may be different than the operation
             *     requested. e.g. a patch can result in either a CREATE or UPDATE Operation. */
            operation: string;
            /** @description Options is the operation option structure of the operation being performed.
             *     e.g. `meta.k8s.io/v1.DeleteOptions` or `meta.k8s.io/v1.CreateOptions`. This may be
             *     different than the options the caller provided. e.g. for a patch request the performed
             *     Operation might be a CREATE, in which case the Options will a
             *     `meta.k8s.io/v1.CreateOptions` even though the caller provided `meta.k8s.io/v1.PatchOptions`. */
            options?: Record<string, never>;
            /** @description RequestKind is the fully-qualified type of the original API request (for example, v1.Pod or autoscaling.v1.Scale).
             *     If this is specified and differs from the value in "kind", an equivalent match and conversion was performed.
             *
             *     For example, if deployments can be modified via apps/v1 and apps/v1beta1, and a webhook registered a rule of
             *     `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]` and `matchPolicy: Equivalent`,
             *     an API request to apps/v1beta1 deployments would be converted and sent to the webhook
             *     with `kind: {group:"apps", version:"v1", kind:"Deployment"}` (matching the rule the webhook registered for),
             *     and `requestKind: {group:"apps", version:"v1beta1", kind:"Deployment"}` (indicating the kind of the original API request).
             *
             *     See documentation for the "matchPolicy" field in the webhook configuration type for more details. */
            requestKind?: {
              group: string;
              kind: string;
              version: string;
            };
            /** @description RequestResource is the fully-qualified resource of the original API request (for example, v1.pods).
             *     If this is specified and differs from the value in "resource", an equivalent match and conversion was performed.
             *
             *     For example, if deployments can be modified via apps/v1 and apps/v1beta1, and a webhook registered a rule of
             *     `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]` and `matchPolicy: Equivalent`,
             *     an API request to apps/v1beta1 deployments would be converted and sent to the webhook
             *     with `resource: {group:"apps", version:"v1", resource:"deployments"}` (matching the resource the webhook registered for),
             *     and `requestResource: {group:"apps", version:"v1beta1", resource:"deployments"}` (indicating the resource of the original API request).
             *
             *     See documentation for the "matchPolicy" field in the webhook configuration type. */
            requestResource?: {
              group: string;
              resource: string;
              version: string;
            };
            /** @description RequestSubResource is the name of the subresource of the original API request, if any (for example, "status" or "scale")
             *     If this is specified and differs from the value in "subResource", an equivalent match and conversion was performed.
             *     See documentation for the "matchPolicy" field in the webhook configuration type. */
            requestSubResource?: string;
            /** @description Resource is the fully-qualified resource being requested (for example, v1.pods) */
            resource: {
              group: string;
              resource: string;
              version: string;
            };
            /** @description SubResource is the subresource being requested, if any (for example, "status" or "scale") */
            subResource?: string;
            /** @description UID is an identifier for the individual request/response. It allows us to distinguish instances of requests which are
             *     otherwise identical (parallel requests, requests when earlier requests did not modify etc)
             *     The UID is meant to track the round trip (request/response) between the KAS and the WebHook, not the user request.
             *     It is suitable for correlating log entries between the webhook and apiserver, for either auditing or debugging. */
            uid: string;
            /** @description UserInfo is information about the requesting user */
            userInfo: {
              /** @description Any additional information provided by the authenticator. */
              extra?: {
                [key: string]: string[];
              };
              /** @description The names of groups this user is a part of. */
              groups?: string[];
              /** @description A unique value that identifies this user across time. If this user is
               *     deleted and another user by the same name is added, they will have
               *     different UIDs. */
              uid?: string;
              /** @description The name that uniquely identifies this user among all active users. */
              username?: string;
            };
          };
          /** @description Operation is the type of resource operation being checked for admission control */
          operation?: string;
        };
        /** @description RequestInfo contains permission info carried in an admission request. */
        userInfo?: {
          /** @description ClusterRoles is a list of possible clusterRoles send the request. */
          clusterRoles?: string[] | null;
          /** @description Roles is a list of possible role send the request. */
          roles?: string[] | null;
          /** @description UserInfo is the userInfo carried in the admission request. */
          userInfo?: {
            /** @description Any additional information provided by the authenticator. */
            extra?: {
              [key: string]: string[];
            };
            /** @description The names of groups this user is a part of. */
            groups?: string[];
            /** @description A unique value that identifies this user across time. If this user is
             *     deleted and another user by the same name is added, they will have
             *     different UIDs. */
            uid?: string;
            /** @description The name that uniquely identifies this user among all active users. */
            username?: string;
          };
        };
      };
      /** @description DeleteDownstream represents whether the downstream needs to be deleted.
       *     Deprecated */
      deleteDownstream: boolean;
      /** @description Specifies the name of the policy. */
      policy: string;
      /** @description Type represents request type for background processing */
      requestType?: string;
      /** @description ResourceSpec is the information to identify the trigger resource. */
      resource: {
        /** @description APIVersion specifies resource apiVersion. */
        apiVersion?: string;
        /** @description Kind specifies resource kind. */
        kind?: string;
        /** @description Name specifies the resource name. */
        name?: string;
        /** @description Namespace specifies resource namespace. */
        namespace?: string;
        /** @description UID specifies the resource uid. */
        uid?: string;
      };
      /** @description Rule is the associate rule name of the current UR. */
      rule: string;
      /** @description RuleContext is the associate context to apply rules.
       *     optional */
      ruleContext?: {
        /** @description DeleteDownstream represents whether the downstream needs to be deleted. */
        deleteDownstream: boolean;
        /** @description Rule is the associate rule name of the current UR. */
        rule: string;
        /** @description Synchronize represents the sync behavior of the corresponding rule
         *     Optional. Defaults to "false" if not specified. */
        synchronize?: boolean;
        /** @description ResourceSpec is the information to identify the trigger resource. */
        trigger: {
          /** @description APIVersion specifies resource apiVersion. */
          apiVersion?: string;
          /** @description Kind specifies resource kind. */
          kind?: string;
          /** @description Name specifies the resource name. */
          name?: string;
          /** @description Namespace specifies resource namespace. */
          namespace?: string;
          /** @description UID specifies the resource uid. */
          uid?: string;
        };
      }[];
      /** @description Synchronize represents the sync behavior of the corresponding rule
       *     Optional. Defaults to "false" if not specified.
       *     Deprecated, will be removed in 1.14. */
      synchronize?: boolean;
    };
    /** @description Status contains statistics related to update request. */
    status?: {
      /** @description This will track the resources that are updated by the generate Policy.
       *     Will be used during clean up resources. */
      generatedResources?: {
        /** @description APIVersion specifies resource apiVersion. */
        apiVersion?: string;
        /** @description Kind specifies resource kind. */
        kind?: string;
        /** @description Name specifies the resource name. */
        name?: string;
        /** @description Namespace specifies resource namespace. */
        namespace?: string;
        /** @description UID specifies the resource uid. */
        uid?: string;
      }[];
      /** @description Specifies request status message. */
      message?: string;
      retryCount?: number;
      /** @description State represents state of the update request. */
      state: string;
    };
  };
}
