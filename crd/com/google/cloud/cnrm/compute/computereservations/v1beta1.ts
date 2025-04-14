import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesComputeReservationV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesComputeReservationV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "compute.cnrm.cloud.google.com/v1beta1", kind: "ComputeReservation", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesComputeReservationV1beta1Config extends ManifestConfig {
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
      /** @description Immutable. An optional description of this resource. */
      description?: string;
      /** @description Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default. */
      resourceID?: string;
      /** @description Reservation for instances with specific machine shapes. */
      specificReservation: {
        /** @description The number of resources that are allocated. */
        count: number;
        /** @description How many instances are in use. */
        inUseCount?: number;
        /** @description Immutable. The instance properties for the reservation. */
        instanceProperties: {
          /** @description Immutable. Guest accelerator type and count. */
          guestAccelerators?: {
            /** @description Immutable. The number of the guest accelerator cards exposed to
             *     this instance. */
            acceleratorCount: number;
            /** @description Immutable. The full or partial URL of the accelerator type to
             *     attach to this instance. For example:
             *     'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'
             *
             *     If you are creating an instance template, specify only the accelerator name. */
            acceleratorType: string;
          }[];
          /** @description Immutable. The amount of local ssd to reserve with each instance. This
           *     reserves disks of type 'local-ssd'. */
          localSsds?: {
            /** @description Immutable. The size of the disk in base-2 GB. */
            diskSizeGb: number;
            /** @description Immutable. The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]. */
            interface?: string;
          }[];
          /** @description Immutable. The name of the machine type to reserve. */
          machineType: string;
          /** @description Immutable. The minimum CPU platform for the reservation. For example,
           *     '"Intel Skylake"'. See
           *     the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
           *     for information on available CPU platforms. */
          minCpuPlatform?: string;
        };
      };
      /** @description Immutable. When set to true, only VMs that target this reservation by name can
       *     consume this reservation. Otherwise, it can be consumed by VMs with
       *     affinity for any reservation. Defaults to false. */
      specificReservationRequired?: boolean;
      /** @description Immutable. The zone where the reservation is made. */
      zone: string;
    };
  };
}
