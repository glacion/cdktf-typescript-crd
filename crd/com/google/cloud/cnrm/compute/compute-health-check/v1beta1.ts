import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeHealthCheckV1beta1Manifest extends Manifest {
  constructor(scope: Construct, id: string, config: KubernetesComputeHealthCheckV1beta1ManifestConfig) {
    super(scope, id, config);
  }
}
export interface KubernetesComputeHealthCheckV1beta1ManifestConfig extends ManifestConfig {
  manifest: {
    apiVersion: "compute.cnrm.cloud.google.com/v1beta1";
    kind: "ComputeHealthCheck";
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
      /** @description How often (in seconds) to send a health check. The default value is 5
       *     seconds. */
      checkIntervalSec?: number;
      /** @description An optional description of this resource. Provide this property when
       *     you create the resource. */
      description?: string;
      /** @description A nested object resource. */
      grpcHealthCheck?: {
        /** @description The gRPC service name for the health check.
         *     The value of grpcServiceName has the following meanings by convention:
         *       - Empty serviceName means the overall status of all services at the backend.
         *       - Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
         *     The grpcServiceName can only be ASCII. */
        grpcServiceName?: string;
        /** @description The port number for the health check request.
         *     Must be specified if portName and portSpecification are not set
         *     or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535. */
        port?: number;
        /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and
         *     port_name are defined, port takes precedence. */
        portName?: string;
        /** @description Specifies how port is selected for health checking, can be one of the
         *     following values:
         *
         *       * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
         *
         *       * 'USE_NAMED_PORT': The 'portName' is used for health checking.
         *
         *       * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
         *       network endpoint is used for health checking. For other backends, the
         *       port or named port specified in the Backend Service is used for health
         *       checking.
         *
         *     If not specified, gRPC health check follows behavior specified in 'port' and
         *     'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]. */
        portSpecification?: string;
      };
      /** @description A so-far unhealthy instance will be marked healthy after this many
       *     consecutive successes. The default value is 2. */
      healthyThreshold?: number;
      /** @description A nested object resource. */
      http2HealthCheck?: {
        /** @description The value of the host header in the HTTP2 health check request.
         *     If left empty (default value), the public IP on behalf of which this health
         *     check is performed will be used. */
        host?: string;
        /** @description The TCP port number for the HTTP2 health check request.
         *     The default value is 443. */
        port?: number;
        /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and
         *     port_name are defined, port takes precedence. */
        portName?: string;
        /** @description Specifies how port is selected for health checking, can be one of the
         *     following values:
         *
         *       * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
         *
         *       * 'USE_NAMED_PORT': The 'portName' is used for health checking.
         *
         *       * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
         *       network endpoint is used for health checking. For other backends, the
         *       port or named port specified in the Backend Service is used for health
         *       checking.
         *
         *     If not specified, HTTP2 health check follows behavior specified in 'port' and
         *     'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]. */
        portSpecification?: string;
        /** @description Specifies the type of proxy header to append before sending data to the
         *     backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]. */
        proxyHeader?: string;
        /** @description The request path of the HTTP2 health check request.
         *     The default value is /. */
        requestPath?: string;
        /** @description The bytes to match against the beginning of the response data. If left empty
         *     (the default value), any response will indicate health. The response data
         *     can only be ASCII. */
        response?: string;
      };
      /** @description A nested object resource. */
      httpHealthCheck?: {
        /** @description The value of the host header in the HTTP health check request.
         *     If left empty (default value), the public IP on behalf of which this health
         *     check is performed will be used. */
        host?: string;
        /** @description The TCP port number for the HTTP health check request.
         *     The default value is 80. */
        port?: number;
        /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and
         *     port_name are defined, port takes precedence. */
        portName?: string;
        /** @description Specifies how port is selected for health checking, can be one of the
         *     following values:
         *
         *       * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
         *
         *       * 'USE_NAMED_PORT': The 'portName' is used for health checking.
         *
         *       * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
         *       network endpoint is used for health checking. For other backends, the
         *       port or named port specified in the Backend Service is used for health
         *       checking.
         *
         *     If not specified, HTTP health check follows behavior specified in 'port' and
         *     'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]. */
        portSpecification?: string;
        /** @description Specifies the type of proxy header to append before sending data to the
         *     backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]. */
        proxyHeader?: string;
        /** @description The request path of the HTTP health check request.
         *     The default value is /. */
        requestPath?: string;
        /** @description The bytes to match against the beginning of the response data. If left empty
         *     (the default value), any response will indicate health. The response data
         *     can only be ASCII. */
        response?: string;
      };
      /** @description A nested object resource. */
      httpsHealthCheck?: {
        /** @description The value of the host header in the HTTPS health check request.
         *     If left empty (default value), the public IP on behalf of which this health
         *     check is performed will be used. */
        host?: string;
        /** @description The TCP port number for the HTTPS health check request.
         *     The default value is 443. */
        port?: number;
        /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and
         *     port_name are defined, port takes precedence. */
        portName?: string;
        /** @description Specifies how port is selected for health checking, can be one of the
         *     following values:
         *
         *       * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
         *
         *       * 'USE_NAMED_PORT': The 'portName' is used for health checking.
         *
         *       * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
         *       network endpoint is used for health checking. For other backends, the
         *       port or named port specified in the Backend Service is used for health
         *       checking.
         *
         *     If not specified, HTTPS health check follows behavior specified in 'port' and
         *     'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]. */
        portSpecification?: string;
        /** @description Specifies the type of proxy header to append before sending data to the
         *     backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]. */
        proxyHeader?: string;
        /** @description The request path of the HTTPS health check request.
         *     The default value is /. */
        requestPath?: string;
        /** @description The bytes to match against the beginning of the response data. If left empty
         *     (the default value), any response will indicate health. The response data
         *     can only be ASCII. */
        response?: string;
      };
      /** @description Location represents the geographical location of the ComputeHealthCheck. Specify a region name or "global" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/) */
      location: string;
      /** @description Configure logging on this health check. */
      logConfig?: {
        /** @description Indicates whether or not to export logs. This is false by default,
         *     which means no health check logging will be done. */
        enable?: boolean;
      };
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description A nested object resource. */
      sslHealthCheck?: {
        /** @description The TCP port number for the SSL health check request.
         *     The default value is 443. */
        port?: number;
        /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and
         *     port_name are defined, port takes precedence. */
        portName?: string;
        /** @description Specifies how port is selected for health checking, can be one of the
         *     following values:
         *
         *       * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
         *
         *       * 'USE_NAMED_PORT': The 'portName' is used for health checking.
         *
         *       * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
         *       network endpoint is used for health checking. For other backends, the
         *       port or named port specified in the Backend Service is used for health
         *       checking.
         *
         *     If not specified, SSL health check follows behavior specified in 'port' and
         *     'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]. */
        portSpecification?: string;
        /** @description Specifies the type of proxy header to append before sending data to the
         *     backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]. */
        proxyHeader?: string;
        /** @description The application data to send once the SSL connection has been
         *     established (default value is empty). If both request and response are
         *     empty, the connection establishment alone will indicate health. The request
         *     data can only be ASCII. */
        request?: string;
        /** @description The bytes to match against the beginning of the response data. If left empty
         *     (the default value), any response will indicate health. The response data
         *     can only be ASCII. */
        response?: string;
      };
      /** @description A nested object resource. */
      tcpHealthCheck?: {
        /** @description The TCP port number for the TCP health check request.
         *     The default value is 443. */
        port?: number;
        /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and
         *     port_name are defined, port takes precedence. */
        portName?: string;
        /** @description Specifies how port is selected for health checking, can be one of the
         *     following values:
         *
         *       * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
         *
         *       * 'USE_NAMED_PORT': The 'portName' is used for health checking.
         *
         *       * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
         *       network endpoint is used for health checking. For other backends, the
         *       port or named port specified in the Backend Service is used for health
         *       checking.
         *
         *     If not specified, TCP health check follows behavior specified in 'port' and
         *     'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]. */
        portSpecification?: string;
        /** @description Specifies the type of proxy header to append before sending data to the
         *     backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]. */
        proxyHeader?: string;
        /** @description The application data to send once the TCP connection has been
         *     established (default value is empty). If both request and response are
         *     empty, the connection establishment alone will indicate health. The request
         *     data can only be ASCII. */
        request?: string;
        /** @description The bytes to match against the beginning of the response data. If left empty
         *     (the default value), any response will indicate health. The response data
         *     can only be ASCII. */
        response?: string;
      };
      /** @description How long (in seconds) to wait before claiming failure.
       *     The default value is 5 seconds.  It is invalid for timeoutSec to have
       *     greater value than checkIntervalSec. */
      timeoutSec?: number;
      /** @description A so-far healthy instance will be marked unhealthy after this many
       *     consecutive failures. The default value is 2. */
      unhealthyThreshold?: number;
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
      /** @description Creation timestamp in RFC3339 text format. */
      creationTimestamp?: string;
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      selfLink?: string;
      /** @description The type of the health check. One of HTTP, HTTPS, TCP, or SSL. */
      type?: string;
    };
  };
}
