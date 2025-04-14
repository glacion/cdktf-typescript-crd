import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesPasswordV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesPasswordV1alpha1Config) {
    super(scope, id, {
      manifest: { apiVersion: "generators.external-secrets.io/v1alpha1", kind: "Password", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesPasswordV1alpha1Config extends ManifestConfig {
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
    /** @description Password generates a random password based on the
     *     configuration parameters in spec.
     *     You can specify the length, characterset and other attributes. */
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
      /** @description PasswordSpec controls the behavior of the password generator. */
      spec?: {
        /** @description set AllowRepeat to true to allow repeating characters. */
        allowRepeat: boolean;
        /** @description Digits specifies the number of digits in the generated
         *     password. If omitted it defaults to 25% of the length of the password */
        digits?: number;
        /** @description Length of the password to be generated.
         *     Defaults to 24 */
        length: number;
        /** @description Set NoUpper to disable uppercase characters */
        noUpper: boolean;
        /** @description SymbolCharacters specifies the special characters that should be used
         *     in the generated password. */
        symbolCharacters?: string;
        /** @description Symbols specifies the number of symbol characters in the generated
         *     password. If omitted it defaults to 25% of the length of the password */
        symbols?: number;
      };
    };
  };
}
