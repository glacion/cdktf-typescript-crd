import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class GeneratorsExternalSecretsIoPasswordV1alpha1 extends Manifest {
  constructor(scope: Construct, id: string, config: GeneratorsExternalSecretsIoPasswordV1alpha1Config) {
    super(scope, id, config);
  }
}
export interface GeneratorsExternalSecretsIoPasswordV1alpha1Config extends ManifestConfig {
  manifest: {
    apiVersion: "generators.external-secrets.io/v1alpha1";
    kind: "Password";
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
}
