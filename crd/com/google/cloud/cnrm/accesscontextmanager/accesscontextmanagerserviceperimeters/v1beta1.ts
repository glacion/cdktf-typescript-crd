import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesAccessContextManagerServicePerimeterV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    { manifest, ...config }: KubernetesAccessContextManagerServicePerimeterV1beta1Config,
  ) {
    super(scope, id, {
      manifest: {
        apiVersion: "accesscontextmanager.cnrm.cloud.google.com/v1beta1",
        kind: "AccessContextManagerServicePerimeter",
        ...manifest,
      },
      ...config,
    });
  }
}
export interface KubernetesAccessContextManagerServicePerimeterV1beta1Config extends ManifestConfig {
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
    spec: {
      /** @description apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
      apiVersion?: string;
      /** @description kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
      kind?: string;
      metadata?: Record<string, never>;
      spec: {
        /** @description The AccessContextManagerAccessPolicy this
         *     AccessContextManagerServicePerimeter lives in. */
        accessPolicyRef: {
          /** @description Allowed value: string of the format `accessPolicies/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessPolicy` resource. */
          external?: string;
          /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
        /** @description Description of the ServicePerimeter and its use. Does not affect
         *     behavior. */
        description?: string;
        /** @description Immutable. Specifies the type of the Perimeter. There are two types: regular and
         *     bridge. Regular Service Perimeter contains resources, access levels,
         *     and restricted services. Every resource can be in at most
         *     ONE regular Service Perimeter.
         *
         *     In addition to being in a regular service perimeter, a resource can also
         *     be in zero or more perimeter bridges. A perimeter bridge only contains
         *     resources. Cross project operations are permitted if all effected
         *     resources share some perimeter (whether bridge or regular). Perimeter
         *     Bridge does not contain access levels or services: those are governed
         *     entirely by the regular perimeter that resource is in.
         *
         *     Perimeter Bridges are typically useful when building more complex
         *     topologies with many independent perimeters that need to share some data
         *     with a common perimeter, but should not be able to share data among
         *     themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]. */
        perimeterType?: string;
        /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
        resourceID?: string;
        /** @description Proposed (or dry run) ServicePerimeter configuration.
         *     This configuration allows to specify and test ServicePerimeter configuration
         *     without enforcing actual access restrictions. Only allowed to be set when
         *     the 'useExplicitDryRunSpec' flag is set. */
        spec?: {
          accessLevels?: ({
            /** @description Allowed value: string of the format `{{parent}}/accessLevels/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessLevel` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
          /** @description List of EgressPolicies to apply to the perimeter. A perimeter may
           *     have multiple EgressPolicies, each of which is evaluated separately.
           *     Access is granted if any EgressPolicy grants it. Must be empty for
           *     a perimeter bridge. */
          egressPolicies?: {
            /** @description Defines conditions on the source of a request causing this 'EgressPolicy' to apply. */
            egressFrom?: {
              identities?: ({
                serviceAccountRef?: {
                  /** @description Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                user?: string;
              } & (unknown | unknown))[];
              /** @description Specifies the type of identities that are allowed access to outside the
               *     perimeter. If left unspecified, then members of 'identities' field will
               *     be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]. */
              identityType?: string;
            };
            /** @description Defines the conditions on the 'ApiOperation' and destination resources that
             *     cause this 'EgressPolicy' to apply. */
            egressTo?: {
              /** @description A list of external resources that are allowed to be accessed. A request
               *     matches if it contains an external resource in this list (Example:
               *     s3://bucket/path). Currently '*' is not allowed. */
              externalResources?: string[];
              /** @description A list of 'ApiOperations' that this egress rule applies to. A request matches
               *     if it contains an operation/service in this list. */
              operations?: {
                /** @description API methods or permissions to allow. Method or permission must belong
                 *     to the service specified by 'serviceName' field. A single MethodSelector
                 *     entry with '*' specified for the 'method' field will allow all methods
                 *     AND permissions for the service specified in 'serviceName'. */
                methodSelectors?: {
                  /** @description Value for 'method' should be a valid method name for the corresponding
                   *     'serviceName' in 'ApiOperation'. If '*' used as value for method,
                   *     then ALL methods and permissions are allowed. */
                  method?: string;
                  /** @description Value for permission should be a valid Cloud IAM permission for the
                   *     corresponding 'serviceName' in 'ApiOperation'. */
                  permission?: string;
                }[];
                /** @description The name of the API whose methods or permissions the 'IngressPolicy' or
                 *     'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName
                 *     field set to '*' will allow all methods AND permissions for all services. */
                serviceName?: string;
              }[];
              resources?: {
                projectRef?: {
                  /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
              }[];
            };
          }[];
          /** @description List of 'IngressPolicies' to apply to the perimeter. A perimeter may
           *     have multiple 'IngressPolicies', each of which is evaluated
           *     separately. Access is granted if any 'Ingress Policy' grants it.
           *     Must be empty for a perimeter bridge. */
          ingressPolicies?: {
            /** @description Defines the conditions on the source of a request causing this 'IngressPolicy'
             *     to apply. */
            ingressFrom?: {
              identities?: ({
                serviceAccountRef?: {
                  /** @description Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                user?: string;
              } & (unknown | unknown))[];
              /** @description Specifies the type of identities that are allowed access from outside the
               *     perimeter. If left unspecified, then members of 'identities' field will be
               *     allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]. */
              identityType?: string;
              /** @description Sources that this 'IngressPolicy' authorizes access from. */
              sources?: {
                /** @description An AccessLevel resource name that allow resources within the
                 *     ServicePerimeters to be accessed from the internet. AccessLevels
                 *     listed must be in the same policy as this ServicePerimeter.
                 *     Referencing a nonexistent AccessLevel will cause an error. If no
                 *     AccessLevel names are listed, resources within the perimeter can
                 *     only be accessed via Google Cloud calls with request origins within
                 *     the perimeter. */
                accessLevelRef?: {
                  /** @description Allowed value: string of the format `{{parent}}/accessLevels/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessLevel` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                /** @description (Optional) A Google Cloud resource that is allowed to ingress the
                 *     perimeter. Requests from these resources will be allowed to access
                 *     perimeter data. Currently only projects are allowed. Format
                 *     "projects/{project_number}" The project may be in any Google Cloud
                 *     organization, not just the organization that the perimeter is defined in. */
                projectRef?: {
                  /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
              }[];
            };
            /** @description Defines the conditions on the 'ApiOperation' and request destination that cause
             *     this 'IngressPolicy' to apply. */
            ingressTo?: {
              /** @description A list of 'ApiOperations' the sources specified in corresponding 'IngressFrom'
               *     are allowed to perform in this 'ServicePerimeter'. */
              operations?: {
                /** @description API methods or permissions to allow. Method or permission must belong to
                 *     the service specified by serviceName field. A single 'MethodSelector' entry
                 *     with '*' specified for the method field will allow all methods AND
                 *     permissions for the service specified in 'serviceName'. */
                methodSelectors?: {
                  /** @description Value for method should be a valid method name for the corresponding
                   *     serviceName in 'ApiOperation'. If '*' used as value for 'method', then
                   *     ALL methods and permissions are allowed. */
                  method?: string;
                  /** @description Value for permission should be a valid Cloud IAM permission for the
                   *     corresponding 'serviceName' in 'ApiOperation'. */
                  permission?: string;
                }[];
                /** @description The name of the API whose methods or permissions the 'IngressPolicy' or
                 *     'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
                 *     field set to '*' will allow all methods AND permissions for all services. */
                serviceName?: string;
              }[];
              resources?: {
                projectRef?: {
                  /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
              }[];
            };
          }[];
          resources?: {
            projectRef?: {
              /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          }[];
          /** @description GCP services that are subject to the Service Perimeter
           *     restrictions. Must contain a list of services. For example, if
           *     'storage.googleapis.com' is specified, access to the storage
           *     buckets inside the perimeter must meet the perimeter's access
           *     restrictions. */
          restrictedServices?: string[];
          /** @description Specifies how APIs are allowed to communicate within the Service
           *     Perimeter. */
          vpcAccessibleServices?: {
            /** @description The list of APIs usable within the Service Perimeter.
             *     Must be empty unless 'enableRestriction' is True. */
            allowedServices?: string[];
            /** @description Whether to restrict API calls within the Service Perimeter to the
             *     list of APIs specified in 'allowedServices'. */
            enableRestriction?: boolean;
          };
        };
        /** @description ServicePerimeter configuration. Specifies sets of resources,
         *     restricted services and access levels that determine
         *     perimeter content and boundaries. */
        status?: {
          accessLevels?: ({
            /** @description Allowed value: string of the format `{{parent}}/accessLevels/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessLevel` resource. */
            external?: string;
            /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
            name?: string;
            /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
            namespace?: string;
          } & (unknown | unknown))[];
          /** @description List of EgressPolicies to apply to the perimeter. A perimeter may
           *     have multiple EgressPolicies, each of which is evaluated separately.
           *     Access is granted if any EgressPolicy grants it. Must be empty for
           *     a perimeter bridge. */
          egressPolicies?: {
            /** @description Defines conditions on the source of a request causing this 'EgressPolicy' to apply. */
            egressFrom?: {
              identities?: ({
                serviceAccountRef?: {
                  /** @description Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                user?: string;
              } & (unknown | unknown))[];
              /** @description Specifies the type of identities that are allowed access to outside the
               *     perimeter. If left unspecified, then members of 'identities' field will
               *     be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]. */
              identityType?: string;
            };
            /** @description Defines the conditions on the 'ApiOperation' and destination resources that
             *     cause this 'EgressPolicy' to apply. */
            egressTo?: {
              /** @description A list of external resources that are allowed to be accessed. A request
               *     matches if it contains an external resource in this list (Example:
               *     s3://bucket/path). Currently '*' is not allowed. */
              externalResources?: string[];
              /** @description A list of 'ApiOperations' that this egress rule applies to. A request matches
               *     if it contains an operation/service in this list. */
              operations?: {
                /** @description API methods or permissions to allow. Method or permission must belong
                 *     to the service specified by 'serviceName' field. A single MethodSelector
                 *     entry with '*' specified for the 'method' field will allow all methods
                 *     AND permissions for the service specified in 'serviceName'. */
                methodSelectors?: {
                  /** @description Value for 'method' should be a valid method name for the corresponding
                   *     'serviceName' in 'ApiOperation'. If '*' used as value for method,
                   *     then ALL methods and permissions are allowed. */
                  method?: string;
                  /** @description Value for permission should be a valid Cloud IAM permission for the
                   *     corresponding 'serviceName' in 'ApiOperation'. */
                  permission?: string;
                }[];
                /** @description The name of the API whose methods or permissions the 'IngressPolicy' or
                 *     'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName
                 *     field set to '*' will allow all methods AND permissions for all services. */
                serviceName?: string;
              }[];
              resources?: {
                projectRef?: {
                  /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
              }[];
            };
          }[];
          /** @description List of 'IngressPolicies' to apply to the perimeter. A perimeter may
           *     have multiple 'IngressPolicies', each of which is evaluated
           *     separately. Access is granted if any 'Ingress Policy' grants it.
           *     Must be empty for a perimeter bridge. */
          ingressPolicies?: {
            /** @description Defines the conditions on the source of a request causing this 'IngressPolicy'
             *     to apply. */
            ingressFrom?: {
              identities?: ({
                serviceAccountRef?: {
                  /** @description Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                user?: string;
              } & (unknown | unknown))[];
              /** @description Specifies the type of identities that are allowed access from outside the
               *     perimeter. If left unspecified, then members of 'identities' field will be
               *     allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]. */
              identityType?: string;
              /** @description Sources that this 'IngressPolicy' authorizes access from. */
              sources?: {
                /** @description An AccessLevel resource name that allow resources within the
                 *     ServicePerimeters to be accessed from the internet. AccessLevels
                 *     listed must be in the same policy as this ServicePerimeter.
                 *     Referencing a nonexistent AccessLevel will cause an error. If no
                 *     AccessLevel names are listed, resources within the perimeter can
                 *     only be accessed via Google Cloud calls with request origins within
                 *     the perimeter. */
                accessLevelRef?: {
                  /** @description Allowed value: string of the format `{{parent}}/accessLevels/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessLevel` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
                /** @description (Optional) A Google Cloud resource that is allowed to ingress the
                 *     perimeter. Requests from these resources will be allowed to access
                 *     perimeter data. Currently only projects are allowed. Format
                 *     "projects/{project_number}" The project may be in any Google Cloud
                 *     organization, not just the organization that the perimeter is defined in. */
                projectRef?: {
                  /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
              }[];
            };
            /** @description Defines the conditions on the 'ApiOperation' and request destination that cause
             *     this 'IngressPolicy' to apply. */
            ingressTo?: {
              /** @description A list of 'ApiOperations' the sources specified in corresponding 'IngressFrom'
               *     are allowed to perform in this 'ServicePerimeter'. */
              operations?: {
                /** @description API methods or permissions to allow. Method or permission must belong to
                 *     the service specified by serviceName field. A single 'MethodSelector' entry
                 *     with '*' specified for the method field will allow all methods AND
                 *     permissions for the service specified in 'serviceName'. */
                methodSelectors?: {
                  /** @description Value for method should be a valid method name for the corresponding
                   *     serviceName in 'ApiOperation'. If '*' used as value for 'method', then
                   *     ALL methods and permissions are allowed. */
                  method?: string;
                  /** @description Value for permission should be a valid Cloud IAM permission for the
                   *     corresponding 'serviceName' in 'ApiOperation'. */
                  permission?: string;
                }[];
                /** @description The name of the API whose methods or permissions the 'IngressPolicy' or
                 *     'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
                 *     field set to '*' will allow all methods AND permissions for all services. */
                serviceName?: string;
              }[];
              resources?: {
                projectRef?: {
                  /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
                  external?: string;
                  /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                  name?: string;
                  /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
                  namespace?: string;
                } & (unknown | unknown);
              }[];
            };
          }[];
          resources?: {
            projectRef?: {
              /** @description Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
          }[];
          /** @description GCP services that are subject to the Service Perimeter
           *     restrictions. Must contain a list of services. For example, if
           *     'storage.googleapis.com' is specified, access to the storage
           *     buckets inside the perimeter must meet the perimeter's access
           *     restrictions. */
          restrictedServices?: string[];
          /** @description Specifies how APIs are allowed to communicate within the Service
           *     Perimeter. */
          vpcAccessibleServices?: {
            /** @description The list of APIs usable within the Service Perimeter.
             *     Must be empty unless 'enableRestriction' is True. */
            allowedServices?: string[];
            /** @description Whether to restrict API calls within the Service Perimeter to the
             *     list of APIs specified in 'allowedServices'. */
            enableRestriction?: boolean;
          };
        };
        /** @description Human readable title. Must be unique within the Policy. */
        title: string;
        /** @description Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
         *     for all Service Perimeters, and that spec is identical to the status for those
         *     Service Perimeters. When this flag is set, it inhibits the generation of the
         *     implicit spec, thereby allowing the user to explicitly provide a
         *     configuration ("spec") to use in a dry-run version of the Service Perimeter.
         *     This allows the user to test changes to the enforced config ("status") without
         *     actually enforcing them. This testing is done through analyzing the differences
         *     between currently enforced and suggested restrictions. useExplicitDryRunSpec must
         *     bet set to True if any of the fields in the spec are set to non-default values. */
        useExplicitDryRunSpec?: boolean;
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
        /** @description Time the AccessPolicy was created in UTC. */
        createTime?: string;
        /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
        observedGeneration?: number;
        /** @description Time the AccessPolicy was updated in UTC. */
        updateTime?: string;
      };
    };
  };
}
