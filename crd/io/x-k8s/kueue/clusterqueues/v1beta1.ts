import { Manifest, type ManifestConfig } from "@cdktf/provider-kubernetes/lib/manifest";
import { Construct } from "constructs";
export class KubernetesClusterQueueV1beta1 extends Manifest {
  constructor(scope: Construct, id: string, { manifest, ...config }: KubernetesClusterQueueV1beta1Config) {
    super(scope, id, {
      manifest: { apiVersion: "kueue.x-k8s.io/v1beta1", kind: "ClusterQueue", ...manifest },
      ...config,
    });
  }
}
export interface KubernetesClusterQueueV1beta1Config extends ManifestConfig {
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
      /** @description admissionChecks lists the AdmissionChecks required by this ClusterQueue.
       *     Cannot be used along with AdmissionCheckStrategy. */
      admissionChecks?: string[];
      /** @description admissionCheckStrategy defines a list of strategies to determine which ResourceFlavors require AdmissionChecks.
       *     This property cannot be used in conjunction with the 'admissionChecks' property. */
      admissionChecksStrategy?: {
        /** @description admissionChecks is a list of strategies for AdmissionChecks */
        admissionChecks?: {
          /** @description name is an AdmissionCheck's name. */
          name: string;
          /** @description onFlavors is a list of ResourceFlavors' names that this AdmissionCheck should run for.
           *     If empty, the AdmissionCheck will run for all workloads submitted to the ClusterQueue. */
          onFlavors?: string[];
        }[];
      };
      /** @description cohort that this ClusterQueue belongs to. CQs that belong to the
       *     same cohort can borrow unused resources from each other.
       *
       *     A CQ can be a member of a single borrowing cohort. A workload submitted
       *     to a queue referencing this CQ can borrow quota from any CQ in the cohort.
       *     Only quota for the [resource, flavor] pairs listed in the CQ can be
       *     borrowed.
       *     If empty, this ClusterQueue cannot borrow from any other ClusterQueue and
       *     vice versa.
       *
       *     A cohort is a name that links CQs together, but it doesn't reference any
       *     object. */
      cohort?: string;
      /** @description fairSharing defines the properties of the ClusterQueue when
       *     participating in FairSharing.  The values are only relevant
       *     if FairSharing is enabled in the Kueue configuration. */
      fairSharing?: {
        /** @description weight gives a comparative advantage to this ClusterQueue
         *     or Cohort when competing for unused resources in the
         *     Cohort.  The share is based on the dominant resource usage
         *     above nominal quotas for each resource, divided by the
         *     weight.  Admission prioritizes scheduling workloads from
         *     ClusterQueues and Cohorts with the lowest share and
         *     preempting workloads from the ClusterQueues and Cohorts
         *     with the highest share.  A zero weight implies infinite
         *     share value, meaning that this Node will always be at
         *     disadvantage against other ClusterQueues and Cohorts. */
        weight?: number | string;
      };
      /** @description flavorFungibility defines whether a workload should try the next flavor
       *     before borrowing or preempting in the flavor being evaluated. */
      flavorFungibility?: {
        /** @description whenCanBorrow determines whether a workload should try the next flavor
         *     before borrowing in current flavor. The possible values are:
         *
         *     - `Borrow` (default): allocate in current flavor if borrowing
         *       is possible.
         *     - `TryNextFlavor`: try next flavor even if the current
         *       flavor has enough resources to borrow. */
        whenCanBorrow?: string;
        /** @description whenCanPreempt determines whether a workload should try the next flavor
         *     before borrowing in current flavor. The possible values are:
         *
         *     - `Preempt`: allocate in current flavor if it's possible to preempt some workloads.
         *     - `TryNextFlavor` (default): try next flavor even if there are enough
         *       candidates for preemption in the current flavor. */
        whenCanPreempt?: string;
      };
      /** @description namespaceSelector defines which namespaces are allowed to submit workloads to
       *     this clusterQueue. Beyond this basic support for policy, a policy agent like
       *     Gatekeeper should be used to enforce more advanced policies.
       *     Defaults to null which is a nothing selector (no namespaces eligible).
       *     If set to an empty selector `{}`, then all namespaces are eligible. */
      namespaceSelector?: {
        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
        matchExpressions?: {
          /** @description key is the label key that the selector applies to. */
          key: string;
          /** @description operator represents a key's relationship to a set of values.
           *     Valid operators are In, NotIn, Exists and DoesNotExist. */
          operator: string;
          /** @description values is an array of string values. If the operator is In or NotIn,
           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
           *     the values array must be empty. This array is replaced during a strategic
           *     merge patch. */
          values?: string[];
        }[];
        /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
         *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
        matchLabels?: {
          [key: string]: string;
        };
      };
      /** @description ClusterQueuePreemption contains policies to preempt Workloads from this
       *     ClusterQueue or the ClusterQueue's cohort.
       *
       *     Preemption may be configured to work in the following scenarios:
       *
       *       - When a Workload fits within the nominal quota of the ClusterQueue, but
       *         the quota is currently borrowed by other ClusterQueues in the cohort.
       *         We preempt workloads in other ClusterQueues to allow this ClusterQueue to
       *         reclaim its nominal quota. Configured using reclaimWithinCohort.
       *       - When a Workload doesn't fit within the nominal quota of the ClusterQueue
       *         and there are admitted Workloads in the ClusterQueue with lower priority.
       *         Configured using withinClusterQueue.
       *       - When a Workload may fit while both borrowing and preempting
       *         low priority workloads in the Cohort. Configured using borrowWithinCohort.
       *       - When FairSharing is enabled, to maintain fair distribution of
       *         unused resources. See FairSharing documentation.
       *
       *     The preemption algorithm tries to find a minimal set of Workloads to
       *     preempt to accomomdate the pending Workload, preempting Workloads with
       *     lower priority first. */
      preemption?: {
        /** @description BorrowWithinCohort contains configuration which allows to preempt workloads
         *     within cohort while borrowing. It only works with Classical Preemption,
         *     __not__ with Fair Sharing. */
        borrowWithinCohort?: {
          /**
           * Format: int32
           * @description maxPriorityThreshold allows to restrict the set of workloads which
           *     might be preempted by a borrowing workload, to only workloads with
           *     priority less than or equal to the specified threshold priority.
           *     When the threshold is not specified, then any workload satisfying the
           *     policy can be preempted by the borrowing workload.
           */
          maxPriorityThreshold?: number;
          /** @description policy determines the policy for preemption to reclaim quota within cohort while borrowing.
           *     Possible values are:
           *     - `Never` (default): do not allow for preemption, in other
           *        ClusterQueues within the cohort, for a borrowing workload.
           *     - `LowerPriority`: allow preemption, in other ClusterQueues
           *        within the cohort, for a borrowing workload, but only if
           *        the preempted workloads are of lower priority. */
          policy?: string;
        };
        /** @description reclaimWithinCohort determines whether a pending Workload can preempt
         *     Workloads from other ClusterQueues in the cohort that are using more than
         *     their nominal quota. The possible values are:
         *
         *     - `Never` (default): do not preempt Workloads in the cohort.
         *     - `LowerPriority`: **Classic Preemption** if the pending Workload
         *       fits within the nominal quota of its ClusterQueue, only preempt
         *       Workloads in the cohort that have lower priority than the pending
         *       Workload. **Fair Sharing** only preempt Workloads in the cohort that
         *       have lower priority than the pending Workload and that satisfy the
         *       Fair Sharing preemptionStategies.
         *     - `Any`: **Classic Preemption** if the pending Workload fits within
         *        the nominal quota of its ClusterQueue, preempt any Workload in the
         *        cohort, irrespective of priority. **Fair Sharing** preempt Workloads
         *        in the cohort that satisfy the Fair Sharing preemptionStrategies. */
        reclaimWithinCohort?: string;
        /** @description withinClusterQueue determines whether a pending Workload that doesn't fit
         *     within the nominal quota for its ClusterQueue, can preempt active Workloads in
         *     the ClusterQueue. The possible values are:
         *
         *     - `Never` (default): do not preempt Workloads in the ClusterQueue.
         *     - `LowerPriority`: only preempt Workloads in the ClusterQueue that have
         *       lower priority than the pending Workload.
         *     - `LowerOrNewerEqualPriority`: only preempt Workloads in the ClusterQueue that
         *       either have a lower priority than the pending workload or equal priority
         *       and are newer than the pending workload. */
        withinClusterQueue?: string;
      };
      /** @description QueueingStrategy indicates the queueing strategy of the workloads
       *     across the queues in this ClusterQueue.
       *     Current Supported Strategies:
       *
       *     - StrictFIFO: workloads are ordered strictly by creation time.
       *     Older workloads that can't be admitted will block admitting newer
       *     workloads even if they fit available quota.
       *     - BestEffortFIFO: workloads are ordered by creation time,
       *     however older workloads that can't be admitted will not block
       *     admitting newer workloads that fit existing quota. */
      queueingStrategy?: string;
      /** @description resourceGroups describes groups of resources.
       *     Each resource group defines the list of resources and a list of flavors
       *     that provide quotas for these resources.
       *     Each resource and each flavor can only form part of one resource group.
       *     resourceGroups can be up to 16. */
      resourceGroups?: {
        /** @description coveredResources is the list of resources covered by the flavors in this
         *     group.
         *     Examples: cpu, memory, vendor.com/gpu.
         *     The list cannot be empty and it can contain up to 16 resources. */
        coveredResources: string[];
        /** @description flavors is the list of flavors that provide the resources of this group.
         *     Typically, different flavors represent different hardware models
         *     (e.g., gpu models, cpu architectures) or pricing models (on-demand vs spot
         *     cpus).
         *     Each flavor MUST list all the resources listed for this group in the same
         *     order as the .resources field.
         *     The list cannot be empty and it can contain up to 16 flavors. */
        flavors: {
          /** @description name of this flavor. The name should match the .metadata.name of a
           *     ResourceFlavor. If a matching ResourceFlavor does not exist, the
           *     ClusterQueue will have an Active condition set to False. */
          name: string;
          /** @description resources is the list of quotas for this flavor per resource.
           *     There could be up to 16 resources. */
          resources: {
            /** @description borrowingLimit is the maximum amount of quota for the [flavor, resource]
             *     combination that this ClusterQueue is allowed to borrow from the unused
             *     quota of other ClusterQueues in the same cohort.
             *     In total, at a given time, Workloads in a ClusterQueue can consume a
             *     quantity of quota equal to nominalQuota+borrowingLimit, assuming the other
             *     ClusterQueues in the cohort have enough unused quota.
             *     If null, it means that there is no borrowing limit.
             *     If not null, it must be non-negative.
             *     borrowingLimit must be null if spec.cohort is empty. */
            borrowingLimit?: number | string;
            /** @description lendingLimit is the maximum amount of unused quota for the [flavor, resource]
             *     combination that this ClusterQueue can lend to other ClusterQueues in the same cohort.
             *     In total, at a given time, ClusterQueue reserves for its exclusive use
             *     a quantity of quota equals to nominalQuota - lendingLimit.
             *     If null, it means that there is no lending limit, meaning that
             *     all the nominalQuota can be borrowed by other clusterQueues in the cohort.
             *     If not null, it must be non-negative.
             *     lendingLimit must be null if spec.cohort is empty.
             *     This field is in beta stage and is enabled by default. */
            lendingLimit?: number | string;
            /** @description name of this resource. */
            name: string;
            /** @description nominalQuota is the quantity of this resource that is available for
             *     Workloads admitted by this ClusterQueue at a point in time.
             *     The nominalQuota must be non-negative.
             *     nominalQuota should represent the resources in the cluster available for
             *     running jobs (after discounting resources consumed by system components
             *     and pods not managed by kueue). In an autoscaled cluster, nominalQuota
             *     should account for resources that can be provided by a component such as
             *     Kubernetes cluster-autoscaler.
             *
             *     If the ClusterQueue belongs to a cohort, the sum of the quotas for each
             *     (flavor, resource) combination defines the maximum quantity that can be
             *     allocated by a ClusterQueue in the cohort. */
            nominalQuota: number | string;
          }[];
        }[];
      }[];
      /** @description stopPolicy - if set to a value different from None, the ClusterQueue is considered Inactive, no new reservation being
       *     made.
       *
       *     Depending on its value, its associated workloads will:
       *
       *     - None - Workloads are admitted
       *     - HoldAndDrain - Admitted workloads are evicted and Reserving workloads will cancel the reservation.
       *     - Hold - Admitted workloads will run to completion and Reserving workloads will cancel the reservation. */
      stopPolicy?: string;
    };
  };
}
