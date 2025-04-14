import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesHealthCheckPolicyV1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesHealthCheckPolicyV1Config) {
    super(scope, id, {
      manifest: { apiVersion: "networking.gke.io/v1", kind: "HealthCheckPolicy", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesHealthCheckPolicyV1Config extends ManifestConfig {
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
      /** @description Default defines default policy configuration for the targeted resource. */
      default?: {
        /**
         * Format: int64
         * @description How often (in seconds) to send a health check. If not specified, a default value of 5 seconds will be used.
         */
        checkIntervalSec?: number;
        /** @description Specifies the type of the healthCheck, either TCP, HTTP, HTTPS, HTTP2 or GRPC. Exactly one of the protocol-specific health check field must be specified, which must match type field. Config contains per protocol (i.e. HTTP, HTTPS, HTTP2, TCP, GRPC) configuration. If not specified, health check type defaults to HTTP. */
        config?: {
          /** @description GRPC is the health check configuration of type GRPC. */
          grpcHealthCheck?: {
            /** @description The gRPC service name for the health check. This field is optional. The value of grpcServiceName has the following meanings by convention: - Empty serviceName means the overall status of all services at the backend. - Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service. The grpcServiceName can only be ASCII. */
            grpcServiceName?: string;
            /**
             * Format: int64
             * @description The TCP port number for the health check request. Valid values are 1 through 65535.
             */
            port?: number;
            /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence. */
            portName?: string;
            /** @description Specifies how port is selected for health checking, can be one of following values:
             *      USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking.
             *      If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT. */
            portSpecification?: string;
          };
          /** @description HTTP2 is the health check configuration of type HTTP2. */
          http2HealthCheck?: {
            /** @description Host is the value of the host header in the HTTP health check request. This matches the RFC 1123 definition of a hostname with 1 notable exception that numeric IP addresses are not allowed. If not specified or left empty, the IP on behalf of which this health check is performed will be used. */
            host?: string;
            /**
             * Format: int64
             * @description The TCP port number for the health check request. Valid values are 1 through 65535.
             */
            port?: number;
            /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence. */
            portName?: string;
            /** @description Specifies how port is selected for health checking, can be one of following values:
             *      USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking.
             *      If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT. */
            portSpecification?: string;
            /** @description Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. If not specified, this defaults to NONE. */
            proxyHeader?: string;
            /** @description The request path of the HTTP health check request. If not specified or left empty, a default value of "/" is used. */
            requestPath?: string;
            /** @description The string to match anywhere in the first 1024 bytes of the response body. If not specified or left empty, the status code determines health. The response data can only be ASCII. */
            response?: string;
          };
          /** @description HTTP is the health check configuration of type HTTP. */
          httpHealthCheck?: {
            /** @description Host is the value of the host header in the HTTP health check request. This matches the RFC 1123 definition of a hostname with 1 notable exception that numeric IP addresses are not allowed. If not specified or left empty, the IP on behalf of which this health check is performed will be used. */
            host?: string;
            /**
             * Format: int64
             * @description The TCP port number for the health check request. Valid values are 1 through 65535.
             */
            port?: number;
            /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence. */
            portName?: string;
            /** @description Specifies how port is selected for health checking, can be one of following values:
             *      USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking.
             *      If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT. */
            portSpecification?: string;
            /** @description Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. If not specified, this defaults to NONE. */
            proxyHeader?: string;
            /** @description The request path of the HTTP health check request. If not specified or left empty, a default value of "/" is used. */
            requestPath?: string;
            /** @description The string to match anywhere in the first 1024 bytes of the response body. If not specified or left empty, the status code determines health. The response data can only be ASCII. */
            response?: string;
          };
          /** @description HTTPS is the health check configuration of type HTTPS. */
          httpsHealthCheck?: {
            /** @description Host is the value of the host header in the HTTP health check request. This matches the RFC 1123 definition of a hostname with 1 notable exception that numeric IP addresses are not allowed. If not specified or left empty, the IP on behalf of which this health check is performed will be used. */
            host?: string;
            /**
             * Format: int64
             * @description The TCP port number for the health check request. Valid values are 1 through 65535.
             */
            port?: number;
            /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence. */
            portName?: string;
            /** @description Specifies how port is selected for health checking, can be one of following values:
             *      USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking.
             *      If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT. */
            portSpecification?: string;
            /** @description Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. If not specified, this defaults to NONE. */
            proxyHeader?: string;
            /** @description The request path of the HTTP health check request. If not specified or left empty, a default value of "/" is used. */
            requestPath?: string;
            /** @description The string to match anywhere in the first 1024 bytes of the response body. If not specified or left empty, the status code determines health. The response data can only be ASCII. */
            response?: string;
          };
          /** @description TCP is the health check configuration of type TCP. */
          tcpHealthCheck?: {
            /**
             * Format: int64
             * @description The TCP port number for the health check request. Valid values are 1 through 65535.
             */
            port?: number;
            /** @description Port name as defined in InstanceGroup#NamedPort#name. If both port and portName are defined, port takes precedence. */
            portName?: string;
            /** @description Specifies how port is selected for health checking, can be one of following values:
             *      USE_FIXED_PORT: The port number in port is used for health checking. USE_NAMED_PORT: The portName is used for health checking. USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint is used for health checking. For other backends, the port or named port specified in the Backend Service is used for health checking.
             *      If not specified, Protocol health check follows behavior specified in port and portName fields. If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT. */
            portSpecification?: string;
            /** @description Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. If not specified, this defaults to NONE. */
            proxyHeader?: string;
            /** @description The application data to send once the TCP connection has been established. If not specified, this defaults to empty. If both request and response are empty, the connection establishment alone will indicate health. The request data can only be ASCII. */
            request?: string;
            /** @description The bytes to match against the beginning of the response data. If not specified or left empty, any response will indicate health. The response data can only be ASCII. */
            response?: string;
          };
          /** @description Specifies the type of the healthCheck, either TCP, HTTP, HTTPS, HTTP2 or GRPC. Exactly one of the protocol-specific health check field must be specified, which must match type field. */
          type?: string;
        };
        /**
         * Format: int64
         * @description A so-far unhealthy instance will be marked healthy after this many consecutive successes. If not specified, a default value of 2 will be used.
         */
        healthyThreshold?: number;
        /** @description LogConfig configures logging on this health check. */
        logConfig?: {
          /** @description Enabled indicates whether or not to export health check logs. If not specified, this defaults to false, which means health check logging will be disabled. */
          enabled?: boolean;
        };
        /**
         * Format: int64
         * @description How long (in seconds) to wait before claiming failure. If not specified, a default value of 5 seconds will be used. It is invalid for timeoutSec to have greater value than checkIntervalSec.
         */
        timeoutSec?: number;
        /**
         * Format: int64
         * @description A so-far healthy instance will be marked unhealthy after this many consecutive failures. If not specified, a default value of 2 will be used.
         */
        unhealthyThreshold?: number;
      };
      /** @description TargetRef identifies an API object to apply policy to. */
      targetRef: {
        /** @description Group is the group of the target resource. */
        group: string;
        /** @description Kind is kind of the target resource. */
        kind: string;
        /** @description Name is the name of the target resource. */
        name: string;
        /** @description Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy. */
        namespace?: string;
      };
    };
  };
}
