import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class IdentityplatformCnrmCloudGoogleComIdentityPlatformConfigV1beta1 extends Manifest {
  constructor(
    scope: Construct,
    id: string,
    config: IdentityplatformCnrmCloudGoogleComIdentityPlatformConfigV1beta1Config,
  ) {
    super(scope, id, config);
  }
}
export interface IdentityplatformCnrmCloudGoogleComIdentityPlatformConfigV1beta1Config extends ManifestConfig {
  manifest: {
    apiVersion: "identityplatform.cnrm.cloud.google.com/v1beta1";
    kind: "IdentityPlatformConfig";
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
    spec: {
      /** @description List of domains authorized for OAuth redirects */
      authorizedDomains?: string[];
      /** @description Configuration related to blocking functions. */
      blockingFunctions?: {
        /** @description Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn" */
        triggers?: {
          [key: string]: {
            functionUriRef?: {
              /** @description HTTP URI trigger for the Cloud Function.
               *
               *     Allowed value: The `httpsTrigger.url` field of a `CloudFunctionsFunction` resource. */
              external?: string;
              /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
              name?: string;
              /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
              namespace?: string;
            } & (unknown | unknown);
            /**
             * Format: date-time
             * @description When the trigger was changed.
             */
            updateTime?: string;
          };
        };
      };
      /** @description Options related to how clients making requests on behalf of a project should be configured. */
      client?: {
        /** @description Configuration related to restricting a user's ability to affect their account. */
        permissions?: {
          /** @description When true, end users cannot delete their account on the associated project through any of our API methods */
          disabledUserDeletion?: boolean;
          /** @description When true, end users cannot sign up for a new account on the associated project through any of our API methods */
          disabledUserSignup?: boolean;
        };
      };
      /** @description Configuration for this project's multi-factor authentication, including whether it is active and what factors can be used for the second factor */
      mfa?: {
        /** @description Whether MultiFactor Authentication has been enabled for this project. Possible values: STATE_UNSPECIFIED, DISABLED, ENABLED, MANDATORY */
        state?: string;
      };
      /** @description Configuration related to monitoring project activity. */
      monitoring?: {
        /** @description Configuration for logging requests made to this project to Stackdriver Logging */
        requestLogging?: {
          /** @description Whether logging is enabled for this project or not. */
          enabled?: boolean;
        };
      };
      /** @description Configuration related to multi-tenant functionality. */
      multiTenant?: {
        /** @description Whether this project can have tenants or not. */
        allowTenants?: boolean;
        defaultTenantLocationRef?: {
          /** @description The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "<type>/<number>", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
           *
           *     Allowed values:
           *     * The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
           *     * The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`). */
          external?: string;
          /** @description Kind of the referent. Allowed values: Folder */
          kind?: string;
          /** @description [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
           *     Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
          name?: string;
          /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
          namespace?: string;
        } & (unknown | unknown);
      };
      /** @description Configuration related to sending notifications to users. */
      notification?: {
        /** @description Default locale used for email and SMS in IETF BCP 47 format. */
        defaultLocale?: string;
        /** @description Options for email sending. */
        sendEmail?: {
          /** @description action url in email template. */
          callbackUri?: string;
          /** @description Email template for change email */
          changeEmailTemplate?: {
            /** @description Immutable. Email body */
            body?: string;
            /** @description Email body format Possible values: BODY_FORMAT_UNSPECIFIED, PLAIN_TEXT, HTML */
            bodyFormat?: string;
            /** @description Reply-to address */
            replyTo?: string;
            /** @description Sender display name */
            senderDisplayName?: string;
            /** @description Local part of From address */
            senderLocalPart?: string;
            /** @description Subject of the email */
            subject?: string;
          };
          /** @description Information of custom domain DNS verification. */
          dnsInfo?: {
            /** @description Whether to use custom domain. */
            useCustomDomain?: boolean;
          };
          /** @description The method used for sending an email. Possible values: METHOD_UNSPECIFIED, DEFAULT, CUSTOM_SMTP */
          method?: string;
          /** @description Email template for reset password */
          resetPasswordTemplate?: {
            /** @description Email body */
            body?: string;
            /** @description Email body format Possible values: BODY_FORMAT_UNSPECIFIED, PLAIN_TEXT, HTML */
            bodyFormat?: string;
            /** @description Reply-to address */
            replyTo?: string;
            /** @description Sender display name */
            senderDisplayName?: string;
            /** @description Local part of From address */
            senderLocalPart?: string;
            /** @description Subject of the email */
            subject?: string;
          };
          /** @description Email template for reverting second factor addition emails */
          revertSecondFactorAdditionTemplate?: {
            /** @description Immutable. Email body */
            body?: string;
            /** @description Email body format Possible values: BODY_FORMAT_UNSPECIFIED, PLAIN_TEXT, HTML */
            bodyFormat?: string;
            /** @description Reply-to address */
            replyTo?: string;
            /** @description Sender display name */
            senderDisplayName?: string;
            /** @description Local part of From address */
            senderLocalPart?: string;
            /** @description Subject of the email */
            subject?: string;
          };
          /** @description Use a custom SMTP relay */
          smtp?: {
            /** @description SMTP relay host */
            host?: string;
            /** @description SMTP relay password */
            password?: {
              /** @description Value of the field. Cannot be used if 'valueFrom' is specified. */
              value?: string;
              /** @description Source for the field's value. Cannot be used if 'value' is specified. */
              valueFrom?: {
                /** @description Reference to a value with the given key in the given Secret in the resource's namespace. */
                secretKeyRef?: {
                  /** @description Key that identifies the value to be extracted. */
                  key: string;
                  /** @description Name of the Secret to extract a value from. */
                  name: string;
                };
              };
            } & (unknown | unknown);
            /**
             * Format: int64
             * @description SMTP relay port
             */
            port?: number;
            /** @description SMTP security mode. Possible values: SECURITY_MODE_UNSPECIFIED, SSL, START_TLS */
            securityMode?: string;
            /** @description Sender email for the SMTP relay */
            senderEmail?: string;
            /** @description SMTP relay username */
            username?: string;
          };
          /** @description Email template for verify email */
          verifyEmailTemplate?: {
            /** @description Immutable. Email body */
            body?: string;
            /** @description Email body format Possible values: BODY_FORMAT_UNSPECIFIED, PLAIN_TEXT, HTML */
            bodyFormat?: string;
            /** @description Reply-to address */
            replyTo?: string;
            /** @description Sender display name */
            senderDisplayName?: string;
            /** @description Local part of From address */
            senderLocalPart?: string;
            /** @description Subject of the email */
            subject?: string;
          };
        };
        /** @description Options for SMS sending. */
        sendSms?: {
          /** @description Whether to use the accept_language header for SMS. */
          useDeviceLocale?: boolean;
        };
      };
      /** @description Immutable. The Project that this resource belongs to. */
      projectRef: {
        /** @description The project of the resource
         *
         *     Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`). */
        external?: string;
        /** @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
        name?: string;
        /** @description Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
        namespace?: string;
      } & (unknown | unknown);
      /** @description Configuration related to quotas. */
      quota?: {
        /** @description Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP. */
        signUpQuotaConfig?: {
          /**
           * Format: int64
           * @description Corresponds to the 'refill_token_count' field in QuotaServer config
           */
          quota?: number;
          /** @description How long this quota will be active for */
          quotaDuration?: string;
          /**
           * Format: date-time
           * @description When this quota will take affect
           */
          startTime?: string;
        };
      };
      /** @description Configuration related to local sign in methods. */
      signIn?: {
        /** @description Whether to allow more than one account to have the same email. */
        allowDuplicateEmails?: boolean;
        /** @description Configuration options related to authenticating an anonymous user. */
        anonymous?: {
          /** @description Whether anonymous user auth is enabled for the project or not. */
          enabled?: boolean;
        };
        /** @description Configuration options related to authenticating a user by their email address. */
        email?: {
          /** @description Whether email auth is enabled for the project or not. */
          enabled?: boolean;
          /** @description Whether a password is required for email auth or not. If true, both an email and password must be provided to sign in. If false, a user may sign in via either email/password or email link. */
          passwordRequired?: boolean;
        };
        /** @description Configuration options related to authenticated a user by their phone number. */
        phoneNumber?: {
          /** @description Whether phone number auth is enabled for the project or not. */
          enabled?: boolean;
          /** @description A map of that can be used for phone auth testing. */
          testPhoneNumbers?: {
            [key: string]: string;
          };
        };
      };
    };
    status?: {
      client?: {
        /** @description Output only. API key that can be used when making requests for this project. */
        apiKey?: string;
        /** @description Output only. Firebase subdomain. */
        firebaseSubdomain?: string;
      };
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
      notification?: {
        sendEmail?: {
          changeEmailTemplate?: {
            /** @description Output only. Whether the body or subject of the email is customized. */
            customized?: boolean;
          };
          dnsInfo?: {
            /** @description Output only. The applied verified custom domain. */
            customDomain?: string;
            /** @description Output only. The current verification state of the custom domain. The custom domain will only be used once the domain verification is successful. Possible values: VERIFICATION_STATE_UNSPECIFIED, NOT_STARTED, IN_PROGRESS, FAILED, SUCCEEDED */
            customDomainState?: string;
            /**
             * Format: date-time
             * @description Output only. The timestamp of initial request for the current domain verification.
             */
            domainVerificationRequestTime?: string;
            /** @description Output only. The custom domain that's to be verified. */
            pendingCustomDomain?: string;
          };
          resetPasswordTemplate?: {
            /** @description Output only. Whether the body or subject of the email is customized. */
            customized?: boolean;
          };
          revertSecondFactorAdditionTemplate?: {
            /** @description Output only. Whether the body or subject of the email is customized. */
            customized?: boolean;
          };
          verifyEmailTemplate?: {
            /** @description Output only. Whether the body or subject of the email is customized. */
            customized?: boolean;
          };
        };
        sendSms?: {
          /** @description Output only. The template to use when sending an SMS. */
          smsTemplate?: {
            /** @description Output only. The SMS's content. Can contain the following placeholders which will be replaced with the appropriate values: %APP_NAME% - For Android or iOS apps, the app's display name. For web apps, the domain hosting the application. %LOGIN_CODE% - The OOB code being sent in the SMS. */
            content?: string;
          };
        };
      };
      /** @description ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource. */
      observedGeneration?: number;
      signIn?: {
        email?: {
          /** @description Output only. Hash config information. */
          hashConfig?: {
            /** @description Output only. Different password hash algorithms used in Identity Toolkit. Possible values: HASH_ALGORITHM_UNSPECIFIED, HMAC_SHA256, HMAC_SHA1, HMAC_MD5, SCRYPT, PBKDF_SHA1, MD5, HMAC_SHA512, SHA1, BCRYPT, PBKDF2_SHA256, SHA256, SHA512, STANDARD_SCRYPT */
            algorithm?: string;
            /**
             * Format: int64
             * @description Output only. Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.
             */
            memoryCost?: number;
            /**
             * Format: int64
             * @description Output only. How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.
             */
            rounds?: number;
            /** @description Output only. Non-printable character to be inserted between the salt and plain text password in base64. */
            saltSeparator?: string;
            /** @description Output only. Signer key in base64. */
            signerKey?: string;
          };
        };
        /** @description Output only. Hash config information. */
        hashConfig?: {
          /** @description Output only. Different password hash algorithms used in Identity Toolkit. Possible values: HASH_ALGORITHM_UNSPECIFIED, HMAC_SHA256, HMAC_SHA1, HMAC_MD5, SCRYPT, PBKDF_SHA1, MD5, HMAC_SHA512, SHA1, BCRYPT, PBKDF2_SHA256, SHA256, SHA512, STANDARD_SCRYPT */
          algorithm?: string;
          /**
           * Format: int64
           * @description Output only. Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.
           */
          memoryCost?: number;
          /**
           * Format: int64
           * @description Output only. How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.
           */
          rounds?: number;
          /** @description Output only. Non-printable character to be inserted between the salt and plain text password in base64. */
          saltSeparator?: string;
          /** @description Output only. Signer key in base64. */
          signerKey?: string;
        };
      };
      /** @description Output only. The subtype of this config. Possible values: SUBTYPE_UNSPECIFIED, IDENTITY_PLATFORM, FIREBASE_AUTH */
      subtype?: string;
    };
  };
}
